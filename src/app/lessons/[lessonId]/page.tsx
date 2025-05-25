
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MOCK_LESSONS } from '@/data/lessons';
import type { Lesson, Exercise as ExerciseTypeUnion, MultipleChoiceExercise, FillInTheBlankExercise, TranslationExercise, VocabularyItem } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUserProgress } from '@/hooks/use-user-progress';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Lightbulb, Volume2, BookOpenCheck } from 'lucide-react';
import Link from 'next/link';
import AudioPlayer from '@/components/common/audio-player';
import MultipleChoiceExerciseComponent from '@/components/exercises/multiple-choice-exercise';
import FillInTheBlankExerciseComponent from '@/components/exercises/fill-blank-exercise';
import TranslationExerciseComponent from '@/components/exercises/translation-exercise';
import { generateAudioExercises, type GenerateAudioExercisesInput, type GenerateAudioExercisesOutput } from '@/ai/flows/ai-audio-integration';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


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
  const [isSubmitting, setIsSubmitting] = useState(false); // Not currently used, but good for future form submissions
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
      const result: GenerateAudioExercisesOutput = await generateAudioExercises(input);
      
      // For now, we'll assume the AI returns strings, and we'll parse them into MultipleChoiceExercise for simplicity.
      // This part needs to be more robust if the AI can return different exercise types or structured JSON.
      const parsedAiExercises: ExerciseTypeUnion[] = result.exercises.map((exStr, index) => {
        // Basic parsing: try to extract a question part. If no '?', use the whole string.
        const questionParts = exStr.split('?');
        const questionText = questionParts.length > 1 ? questionParts[0] + '?' : exStr;
        
        // Placeholder options and correct answer
        const options = ["Вариант A", "Вариант B", "Вариант C", "Вариант D"];
        const correctAnswer = options[Math.floor(Math.random() * options.length)]; // Random correct answer for placeholder
        
        return {
          id: `ai-ex-${lesson.id}-${Date.now()}-${index}`, // Ensure unique ID
          type: 'multiple_choice', 
          question: questionText,
          options: options,
          correctAnswer: correctAnswer,
          explanation: "Это упражнение сгенерировано ИИ. Правильный ответ и варианты являются заглушками."
        } as MultipleChoiceExercise;
      });
      
      setAiExercises(prevAiExercises => [...prevAiExercises, ...parsedAiExercises]);
      toast({ title: "Успех", description: `${parsedAiExercises.length} дополнительных упражнений сгенерировано!` });
    } catch (error) {
      console.error("Failed to generate AI exercises:", error);
      toast({ title: "Ошибка генерации ИИ упражнений", description: "Не удалось сгенерировать упражнения. Пожалуйста, попробуйте позже.", variant: "destructive" });
    } finally {
      setIsGeneratingAiExercises(false);
    }
  };


  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
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
    switch (exercise.type) {
        case 'multiple_choice':
        case 'listening_comprehension': 
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
      const allLessonExercises = lesson.exercises.every(ex => userAnswers[ex.id] !== undefined);
      if (!allLessonExercises && lesson.exercises.length > 0) {
          toast({ title: "Не все упражнения выполнены", description: "Пожалуйста, выполните все стандартные упражнения урока перед завершением.", variant: "destructive" });
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
  
  // Combine lesson exercises and AI-generated exercises
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

      {lesson.vocabulary && lesson.vocabulary.length > 0 && (
        <Card className="mb-6 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><BookOpenCheck className="mr-2 h-6 w-6 text-primary" />Словарь урока</CardTitle>
            <CardDescription>Ключевые слова и фразы для этого урока.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%]">Немецкое слово</TableHead>
                  <TableHead className="w-[30%]">Перевод</TableHead>
                  <TableHead>Пример</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {lesson.vocabulary.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.german}</TableCell>
                    <TableCell>{item.russian}</TableCell>
                    <TableCell className="italic text-muted-foreground">{item.example || '–'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

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

