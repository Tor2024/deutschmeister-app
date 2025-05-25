'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MOCK_LESSONS } from '@/data/lessons';
import type { Lesson, Exercise as ExerciseTypeUnion, MultipleChoiceExercise, FillInTheBlankExercise, TranslationExercise } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUserProgress } from '@/hooks/use-user-progress';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Lightbulb, Volume2 } from 'lucide-react';
import Link from 'next/link';
import AudioPlayer from '@/components/common/audio-player';
import MultipleChoiceExerciseComponent from '@/components/exercises/multiple-choice-exercise';
import FillInTheBlankExerciseComponent from '@/components/exercises/fill-blank-exercise';
import TranslationExerciseComponent from '@/components/exercises/translation-exercise';
import { generateAudioExercises, type GenerateAudioExercisesInput } from '@/ai/flows/ai-audio-integration';
import { Separator } from '@/components/ui/separator';

// Helper to get a lesson, simulating data fetching
const getLessonById = (id: string): Lesson | undefined => {
  return MOCK_LESSONS.find(lesson => lesson.id === id);
};

export default function LessonPage() {
  const params = useParams();
  const lessonId = typeof params.lessonId === 'string' ? params.lessonId : '';
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [exerciseFeedback, setExerciseFeedback] = useState<Record<string, { correct: boolean; explanation?: string }>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiExercises, setAiExercises] = useState<ExerciseTypeUnion[]>([]);
  const [isGeneratingAiExercises, setIsGeneratingAiExercises] = useState(false);

  const { completeLesson, recordExerciseAttempt, progress } = useUserProgress();
  const { toast } = useToast();

  useEffect(() => {
    if (lessonId) {
      const fetchedLesson = getLessonById(lessonId);
      if (fetchedLesson) {
        setLesson(fetchedLesson);
      }
      setIsLoading(false);
    }
  }, [lessonId]);

  const handleGenerateAiExercises = async () => {
    if (!lesson || !lesson.audio || !lesson.transcript) {
      toast({ title: "Ошибка", description: "Для генерации упражнений нужны аудио и транскрипция.", variant: "destructive" });
      return;
    }
    setIsGeneratingAiExercises(true);
    try {
      const input: GenerateAudioExercisesInput = {
        audioTranscript: lesson.transcript,
        topic: lesson.topic,
        level: lesson.level,
      };
      // This is a simplified interpretation. The AI returns strings, which need to be parsed into Exercise objects.
      // For this example, we'll assume the AI can return structured exercises or we have a parser.
      // For now, we'll mock this part or log the string array.
      const result = await generateAudioExercises(input);
      console.log("AI Generated Exercise Strings:", result.exercises);
      // Here you would parse result.exercises into actual Exercise objects.
      // Mocking parsing for now:
      const parsedAiExercises: ExerciseTypeUnion[] = result.exercises.map((exStr, index) => ({
        id: `ai-ex-${lesson.id}-${index}`,
        type: 'multiple_choice', // Assuming multiple choice for simplicity
        question: exStr.split('?')[0] + '?', // Basic parsing
        options: ["Вариант A", "Вариант B", "Вариант C"], // Placeholder options
        correctAnswer: "Вариант A", // Placeholder
        explanation: "Это упражнение сгенерировано ИИ."
      } as MultipleChoiceExercise));
      
      setAiExercises(parsedAiExercises);
      toast({ title: "Успех", description: "Дополнительные упражнения сгенерированы!" });
    } catch (error) {
      console.error("Failed to generate AI exercises:", error);
      toast({ title: "Ошибка", description: "Не удалось сгенерировать упражнения от ИИ.", variant: "destructive" });
    } finally {
      setIsGeneratingAiExercises(false);
    }
  };


  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
    // Clear feedback for this exercise when answer changes
    setExerciseFeedback(prev => {
      const newFeedback = { ...prev };
      delete newFeedback[exerciseId];
      return newFeedback;
    });
  };

  const handleSubmitExercise = (exercise: ExerciseTypeUnion) => {
    const userAnswer = userAnswers[exercise.id];
    if (userAnswer === undefined || userAnswer.trim() === '') {
      toast({ title: "Внимание", description: "Пожалуйста, дайте ответ.", variant: "destructive" });
      return;
    }

    let isCorrect = false;
    // This logic needs to be robust for different exercise types
    switch (exercise.type) {
        case 'multiple_choice':
        case 'listening_comprehension': // Assuming similar structure for now
            isCorrect = userAnswer === (exercise as MultipleChoiceExercise).correctAnswer;
            break;
        case 'fill_in_the_blank':
            isCorrect = userAnswer.toLowerCase().trim() === (exercise as FillInTheBlankExercise).correctAnswer.toLowerCase().trim();
            break;
        case 'translation':
            isCorrect = userAnswer.toLowerCase().trim() === (exercise as TranslationExercise).correctAnswer.toLowerCase().trim();
            break;
        default:
            break;
    }

    recordExerciseAttempt(exercise.id, isCorrect);
    setExerciseFeedback(prev => ({
      ...prev,
      [exercise.id]: { correct: isCorrect, explanation: exercise.explanation }
    }));

    toast({
      title: isCorrect ? "Правильно!" : "Неправильно",
      description: isCorrect ? "Отличная работа!" : (exercise.explanation || "Попробуйте еще раз или проверьте теорию."),
      variant: isCorrect ? "default" : "destructive",
      className: isCorrect ? "bg-accent text-accent-foreground" : "",
    });
  };
  
  const handleCompleteLesson = () => {
    if (lesson) {
      // Basic check: ensure all exercises have been attempted at least once
      // More sophisticated logic would check for mastery
      const allAttempted = lesson.exercises.every(ex => userAnswers[ex.id] !== undefined);
      if (!allAttempted && lesson.exercises.length > 0) {
          toast({ title: "Не все упражнения выполнены", description: "Пожалуйста, выполните все упражнения перед завершением урока.", variant: "destructive" });
          return;
      }
      completeLesson(lesson.id);
      toast({ title: "Урок завершен!", description: `"${lesson.topic}" добавлен в ваш прогресс.` });
    }
  };


  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><p>Загрузка урока...</p></div>;
  }

  if (!lesson) {
    return <div className="text-center py-10">Урок не найден. <Link href="/lessons" className="text-primary hover:underline">Вернуться к списку уроков.</Link></div>;
  }
  
  const allExercises = [...lesson.exercises, ...aiExercises];

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-6 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold text-primary">{lesson.topic}</CardTitle>
            <Badge variant="secondary">{lesson.level}</Badge>
          </div>
          <CardDescription className="text-lg">{lesson.topic} - Уровень {lesson.level}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-md whitespace-pre-line leading-relaxed">{lesson.theory}</p>
        </CardContent>
      </Card>

      {lesson.audio && lesson.transcript && (
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center"><Volume2 className="mr-2 h-6 w-6 text-primary" /> Аудиоматериал</CardTitle>
          </CardHeader>
          <CardContent>
            <AudioPlayer src={lesson.audio} transcript={lesson.transcript} />
            <Button onClick={handleGenerateAiExercises} disabled={isGeneratingAiExercises} className="mt-4">
              <Lightbulb className="mr-2 h-4 w-4" />
              {isGeneratingAiExercises ? "Генерация..." : "Сгенерировать упражнения по аудио (ИИ)"}
            </Button>
          </CardContent>
        </Card>
      )}
      
      {allExercises.length > 0 && (
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Упражнения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {allExercises.map((exercise, index) => (
              <Card key={exercise.id} className={`p-6 rounded-lg ${exerciseFeedback[exercise.id]?.correct === true ? 'border-green-500 bg-green-50' : exerciseFeedback[exercise.id]?.correct === false ? 'border-red-500 bg-red-50' : 'border-border'}`}>
                <p className="font-semibold text-lg mb-3">Упражнение {index + 1}: {exercise.question}</p>
                
                {exercise.type === 'multiple_choice' && (
                  <MultipleChoiceExerciseComponent 
                    exercise={exercise as MultipleChoiceExercise} 
                    onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)}
                    userAnswer={userAnswers[exercise.id]}
                    disabled={!!exerciseFeedback[exercise.id]}
                  />
                )}
                {exercise.type === 'fill_in_the_blank' && (
                   <FillInTheBlankExerciseComponent
                    exercise={exercise as FillInTheBlankExercise}
                    onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)}
                    userAnswer={userAnswers[exercise.id]}
                    disabled={!!exerciseFeedback[exercise.id]}
                  />
                )}
                {exercise.type === 'translation' && (
                  <TranslationExerciseComponent
                    exercise={exercise as TranslationExercise}
                    onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)}
                    userAnswer={userAnswers[exercise.id]}
                    disabled={!!exerciseFeedback[exercise.id]}
                  />
                )}
                 {/* TODO: Listening comprehension component */}

                <Button onClick={() => handleSubmitExercise(exercise)} disabled={!!exerciseFeedback[exercise.id] || isSubmitting} className="mt-4">
                  Проверить ответ
                </Button>

                {exerciseFeedback[exercise.id] && (
                  <div className={`mt-4 p-3 rounded-md text-sm ${exerciseFeedback[exercise.id]?.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {exerciseFeedback[exercise.id]?.correct ? <CheckCircle className="inline mr-2 h-5 w-5" /> : <XCircle className="inline mr-2 h-5 w-5" />}
                    {exerciseFeedback[exercise.id]?.explanation || (exerciseFeedback[exercise.id]?.correct ? "Верно!" : "Неверно.")}
                  </div>
                )}
                {index < allExercises.length - 1 && <Separator className="my-8" />}
              </Card>
            ))}
          </CardContent>
        </Card>
      )}

      <CardFooter className="mt-8 flex flex-col sm:flex-row justify-end gap-4 p-0 pt-6 border-t">
         <Button variant="outline" asChild>
            <Link href="/lessons">К списку уроков</Link>
          </Button>
        <Button onClick={handleCompleteLesson} size="lg">
          Завершить урок
        </Button>
      </CardFooter>
    </div>
  );
}
