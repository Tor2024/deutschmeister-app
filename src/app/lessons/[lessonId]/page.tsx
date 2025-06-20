
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { MOCK_LESSONS } from '@/data/lessons';
import { MOCK_TESTS } from '@/data/tests';
import type { Lesson, Exercise as ExerciseTypeUnion, MultipleChoiceExercise, FillInTheBlankExercise, TranslationExercise, WritingPromptExercise, Test as TestType, VocabularyItem, ReadingComprehensionQuestion, FlashcardAttempt } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUserProgress } from '@/hooks/use-user-progress';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, Lightbulb, Volume2, BookOpenCheck, Award, FileText, VenetianMask, Info, Brain, AlertTriangle, MessageSquareText, ChevronRight, BookCopy, Star, Sparkles, ArrowLeftRight, HelpCircleIcon, BookText, BookMarked, Sparkle } from 'lucide-react';
import Link from 'next/link';
import AudioPlayer from '@/components/common/audio-player';
import MultipleChoiceExerciseComponent from '@/components/exercises/multiple-choice-exercise';
import FillInTheBlankExerciseComponent from '@/components/exercises/fill-blank-exercise';
import TranslationExerciseComponent from '@/components/exercises/translation-exercise';
import { generateAudioExercises, type GenerateAudioExercisesInput, type GenerateAudioExercisesOutput } from '@/ai/flows/ai-audio-integration';
import { evaluateWritingExercise, type EvaluateWritingInput, type EvaluateWritingOutput } from '@/ai/flows/evaluate-writing-exercise';
import { evaluateTranslation, type EvaluateTranslationInput, type EvaluateTranslationOutput } from '@/ai/flows/evaluate-translation-flow';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
// Removed Tabs import as we are moving to sequential view
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Helper to get a lesson, simulating data fetching
const getLessonById = (id: string): Lesson | undefined => {
  return MOCK_LESSONS.find(lesson => lesson.id === id);
};

type LessonSection = 'theory' | 'vocabulary' | 'flashcards' | 'exercises' | 'reading';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = typeof params.lessonId === 'string' ? params.lessonId : '';
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [exerciseFeedback, setExerciseFeedback] = useState<Record<string, { correct: boolean | null; explanation?: string }>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiExercises, setAiExercises] = useState<ExerciseTypeUnion[]>([]);
  const [isGeneratingAiExercises, setIsGeneratingAiExercises] = useState(false);

  const [userReadingAnswers, setUserReadingAnswers] = useState<Record<string, string>>({});
  const [readingExerciseFeedback, setReadingExerciseFeedback] = useState<Record<string, { correct: boolean; explanation?: string }>>({});
  const [isSubmittingReading, setIsSubmittingReading] = useState(false);

  const [userWritingAnswers, setUserWritingAnswers] = useState<Record<string, string>>({});
  const [aiWritingFeedback, setAiWritingFeedback] = useState<Record<string, EvaluateWritingOutput & { error?: string }>>({});
  const [isEvaluatingAi, setIsEvaluatingAi] = useState<Record<string, boolean>>({});

  const [aiTranslationFeedback, setAiTranslationFeedback] = useState<Record<string, EvaluateTranslationOutput & { error?: string }>>({});
  const [isEvaluatingTranslationAi, setIsEvaluatingTranslationAi] = useState<Record<string, boolean>>({});

  // Flashcard states
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [shuffledVocabulary, setShuffledVocabulary] = useState<VocabularyItem[]>([]);

  const { progress, completeLesson, recordExerciseAttempt, recordFlashcardWordMastery } = useUserProgress();
  const { toast } = useToast();

  const [thematicTest, setThematicTest] = useState<TestType | null | undefined>(undefined);

  // New state for sequential lesson sections
  const [currentSection, setCurrentSection] = useState<LessonSection>('theory');
  const [sectionOrder, setSectionOrder] = useState<LessonSection[]>(['theory']);

  useEffect(() => {
    if (lessonId) {
      const fetchedLesson = getLessonById(lessonId);
      if (fetchedLesson) {
        setLesson(fetchedLesson);
        if (fetchedLesson.aiGeneratedExercises) {
          setAiExercises(fetchedLesson.aiGeneratedExercises);
        }
        
        const order: LessonSection[] = ['theory'];
        if (fetchedLesson.vocabulary && fetchedLesson.vocabulary.length > 0) {
          order.push('vocabulary');
          order.push('flashcards');
          setShuffledVocabulary([...fetchedLesson.vocabulary].sort(() => Math.random() - 0.5));
          setCurrentCardIndex(0);
          setIsCardFlipped(false);
        }
        const allCurrentExercises = [...(fetchedLesson.exercises || []), ...(fetchedLesson.aiGeneratedExercises || [])];
        if (allCurrentExercises.length > 0) {
          order.push('exercises');
        }
        if (fetchedLesson.readingText && fetchedLesson.readingComprehensionExercises) {
          order.push('reading');
        }
        setSectionOrder(order);
        setCurrentSection('theory'); // Reset to theory when lesson changes

        const foundTest = MOCK_TESTS.find(t => t.associatedLessonId === lessonId && t.testType === 'thematic');
        setThematicTest(foundTest);
      }
      setIsLoading(false);
    }
  }, [lessonId]);
  
  useEffect(() => {
    if (lesson?.vocabulary && lesson.vocabulary.length > 0) {
      setShuffledVocabulary([...lesson.vocabulary].sort(() => Math.random() - 0.5));
      setCurrentCardIndex(0);
      setIsCardFlipped(false);
    }
  }, [lesson]);


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

      const parsedAiExercises: ExerciseTypeUnion[] = result.exercises.map((aiEx, index) => {
        const baseId = `ai-ex-${lesson.id}-${Date.now()}-${index}`;
        switch (aiEx.type) {
          case 'multiple_choice':
            return { ...aiEx, id: baseId } as MultipleChoiceExercise;
          case 'fill_in_the_blank':
            const parts = aiEx.questionTextWithPlaceholder.split('[BLANK]');
            const sentenceParts = parts.length === 2 ? parts : [aiEx.questionTextWithPlaceholder.replace('[BLANK]', '___'), '']; 
            return {
              id: baseId,
              type: 'fill_in_the_blank',
              question: aiEx.questionTextWithPlaceholder.replace('[BLANK]', '___'),
              sentenceParts: sentenceParts,
              correctAnswer: aiEx.correctAnswer,
              explanation: aiEx.explanation,
            } as FillInTheBlankExercise;
          case 'translation':
             return { ...aiEx, id: baseId, question: aiEx.prompt } as TranslationExercise;
          default:
            console.warn("Unknown AI exercise type:", (aiEx as any).type);
            return null; 
        }
      }).filter(ex => ex !== null) as ExerciseTypeUnion[];
      
      setAiExercises(prevAiExercises => [...prevAiExercises, ...parsedAiExercises]);
      
      // Update sectionOrder if exercises were previously empty
      setLesson(prevLesson => {
        if (prevLesson) {
          const updatedLesson = {
            ...prevLesson,
            aiGeneratedExercises: [...(prevLesson.aiGeneratedExercises || []), ...parsedAiExercises]
          };
          const order: LessonSection[] = ['theory'];
          if (updatedLesson.vocabulary && updatedLesson.vocabulary.length > 0) {
            order.push('vocabulary');
            order.push('flashcards');
          }
          const allCurrentExercises = [...(updatedLesson.exercises || []), ...(updatedLesson.aiGeneratedExercises || [])];
          if (allCurrentExercises.length > 0 && !sectionOrder.includes('exercises')) {
            order.push('exercises');
          } else if (allCurrentExercises.length > 0) {
            order.push('exercises');
          }
          if (updatedLesson.readingText && updatedLesson.readingComprehensionExercises) {
            order.push('reading');
          }
          setSectionOrder(order.filter((value, index, self) => self.indexOf(value) === index)); // Ensure unique sections
          return updatedLesson;
        }
        return null;
      });

      const exercisesCount = parsedAiExercises.length;
      let exercisesWord = 'упражнений';
      if (exercisesCount === 1) exercisesWord = 'упражнение';
      else if (exercisesCount >= 2 && exercisesCount <= 4) exercisesWord = 'упражнения';
      toast({ title: "Успех", description: `${exercisesCount} ${exercisesCount > 0 ? 'дополнительных ' : ''}${exercisesWord} сгенерировано ИИ!` });
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

  const handleReadingAnswerChange = (exerciseId: string, answer: string) => {
    setUserReadingAnswers(prev => ({ ...prev, [exerciseId]: answer }));
    setReadingExerciseFeedback(prev => {
      const newFeedback = { ...prev };
      delete newFeedback[exerciseId];
      return newFeedback;
    });
  };

  const handleWritingAnswerChange = (exerciseId: string, answer: string) => {
    setUserWritingAnswers(prev => ({...prev, [exerciseId]: answer}));
    setAiWritingFeedback(prev => { 
      const newFeedback = {...prev};
      delete newFeedback[exerciseId];
      return newFeedback;
    });
     setExerciseFeedback(prev => {
      const newFeedback = { ...prev };
      delete newFeedback[exerciseId];
      return newFeedback;
    });
  };

  const handleSubmitExercise = async (exercise: ExerciseTypeUnion) => {
    if (exercise.type === 'writing_prompt') {
        const userAnswer = userWritingAnswers[exercise.id];
        if (userAnswer === undefined || userAnswer.trim() === '') {
            toast({ title: "Внимание", description: "Пожалуйста, напишите ваш ответ.", variant: "destructive" });
            return;
        }
        setIsEvaluatingAi(prev => ({ ...prev, [exercise.id]: true }));
        setExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: null, explanation: "Идет оценка ИИ..." } }));
        try {
          if (!lesson) {
            toast({ title: "Ошибка", description: "Урок не загружен.", variant: "destructive" });
            setIsEvaluatingAi(prev => ({ ...prev, [exercise.id]: false }));
            return;
          }
          const input: EvaluateWritingInput = { userAnswer, promptQuestion: exercise.question, languageLevel: lesson.level };
          const aiResult = await evaluateWritingExercise(input);
          setAiWritingFeedback(prev => ({ ...prev, [exercise.id]: aiResult }));
          setExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: null, explanation: aiResult.overallAssessment } }));
          toast({ title: "Оценка ИИ получена", description: aiResult.overallAssessment, className: aiResult.error ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-500" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:border-blue-500" });
        } catch (error) {
            console.error("AI evaluation error:", error);
            const errorMessage = error instanceof Error ? error.message : "Произошла неизвестная ошибка.";
            setAiWritingFeedback(prev => ({ ...prev, [exercise.id]: { correctedAnswer: userAnswer, feedbackExplanation: `Ошибка оценки ИИ: ${errorMessage}`, overallAssessment: "Ошибка", error: errorMessage } }));
            setExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: null, explanation: "Ошибка оценки ИИ." } }));
            toast({ title: "Ошибка оценки ИИ", description: "Не удалось получить оценку от ИИ.", variant: "default", className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-500"});
        } finally {
            setIsEvaluatingAi(prev => ({ ...prev, [exercise.id]: false }));
        }
        return;
    }

    if (exercise.type === 'translation') {
        const userAnswer = userAnswers[exercise.id];
        if (userAnswer === undefined || userAnswer.trim() === '') {
            toast({ title: "Внимание", description: "Пожалуйста, дайте ваш перевод.", variant: "destructive" });
            return;
        }
        setIsEvaluatingTranslationAi(prev => ({ ...prev, [exercise.id]: true }));
        setExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: null, explanation: "Идет оценка перевода ИИ..." } }));
        try {
          if (!lesson) {
            toast({ title: "Ошибка", description: "Урок не загружен.", variant: "destructive" });
            setIsEvaluatingTranslationAi(prev => ({ ...prev, [exercise.id]: false }));
            return;
          }
          const translationExercise = exercise as TranslationExercise;
          const input: EvaluateTranslationInput = { userTranslation: userAnswer, originalSentence: translationExercise.prompt, sourceLanguage: translationExercise.languageDirection === 'to_german' ? "Russian" : "German", targetLanguage: translationExercise.languageDirection === 'to_german' ? "German" : "Russian", modelAnswer: translationExercise.correctAnswer, languageLevel: lesson.level };
          const aiResult = await evaluateTranslation(input);
          setAiTranslationFeedback(prev => ({ ...prev, [exercise.id]: aiResult }));
          recordExerciseAttempt(exercise.id, aiResult.isSemanticallyAcceptable);
          setExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: aiResult.isSemanticallyAcceptable, explanation: aiResult.feedback } }));
          toast({ title: aiResult.isSemanticallyAcceptable ? "Перевод принят!" : "Есть неточности в переводе", description: aiResult.feedback, className: aiResult.isSemanticallyAcceptable ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:border-green-500" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-500" });
        } catch (error) {
            console.error("AI translation evaluation error:", error);
            const errorMessage = error instanceof Error ? error.message : "Произошла неизвестная ошибка.";
            setAiTranslationFeedback(prev => ({ ...prev, [exercise.id]: { isSemanticallyAcceptable: false, feedback: `Ошибка оценки перевода ИИ: ${errorMessage}`, suggestedTranslation: userAnswer, error: errorMessage } }));
            setExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: false, explanation: "Ошибка оценки перевода ИИ." } }));
            toast({ title: "Ошибка оценки перевода ИИ", description: "Не удалось получить оценку от ИИ.", variant: "default", className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-500" });
        } finally {
            setIsEvaluatingTranslationAi(prev => ({ ...prev, [exercise.id]: false }));
        }
        return;
    }

    const userAnswer = userAnswers[exercise.id];
    if (userAnswer === undefined || (typeof userAnswer === 'string' && userAnswer.trim() === '')) {
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
        default: break;
    }
    recordExerciseAttempt(exercise.id, isCorrect);
    setExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: isCorrect, explanation: exercise.explanation } }));
    toast({ title: isCorrect ? "Правильно!" : "Неправильно", description: isCorrect ? "Отличная работа!" : (exercise.explanation || "Попробуйте еще раз или проверьте теорию."), className: isCorrect ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:border-green-500" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:border-red-500" });
  };

  const handleSubmitReadingExercise = (exercise: ReadingComprehensionQuestion) => {
    setIsSubmittingReading(true);
    const userAnswer = userReadingAnswers[exercise.id];
    if (userAnswer === undefined || userAnswer.trim() === '') {
      toast({ title: "Внимание", description: "Пожалуйста, дайте ответ.", variant: "destructive" });
      setIsSubmittingReading(false);
      return;
    }
    const isCorrect = userAnswer === exercise.correctAnswer;
    setReadingExerciseFeedback(prev => ({ ...prev, [exercise.id]: { correct: isCorrect, explanation: exercise.explanation } }));
    toast({ title: isCorrect ? "Правильно!" : "Неправильно", description: isCorrect ? "Отлично!" : (exercise.explanation || "Попробуйте еще раз."), className: isCorrect ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:border-green-500" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:border-red-500" });
    setIsSubmittingReading(false);
  };

  const handleCompleteLesson = () => {
    if (lesson) {
      const allStandardExercisesCount = lesson.exercises.filter(ex => ex.type !== 'writing_prompt' && ex.type !== 'translation').length;
      const masteredStandardExercisesCount = lesson.exercises
        .filter(ex => ex.type !== 'writing_prompt' && ex.type !== 'translation')
        .filter(ex => progress.exerciseAttempts[ex.id]?.mastered).length;

      if (allStandardExercisesCount > 0 && masteredStandardExercisesCount < allStandardExercisesCount) {
        const allAttempted = lesson.exercises
          .filter(ex => ex.type !== 'writing_prompt' && ex.type !== 'translation')
          .every(ex => userAnswers[ex.id] !== undefined || progress.exerciseAttempts[ex.id]?.mastered);
        if (!allAttempted) {
            toast({ title: "Не все упражнения выполнены", description: "Пожалуйста, выполните все стандартные упражнения урока перед завершением.", variant: "destructive" });
            return;
        }
      }
      
      if (!progress.completedLessons.includes(lesson.id)) {
        completeLesson(lesson.id);
        toast({ title: "Урок завершен!", description: `"${lesson.topic}" добавлен в ваш прогресс.` });
      } else {
        toast({ title: "Урок уже завершен", description: `"${lesson.topic}" уже был отмечен как пройденный.`, variant: 'default' });
      }
    }
  };

  const handleToggleFlashcardMastery = useCallback((lessonId: string, germanWord: string) => {
    const currentMastery = progress.flashcardProgress?.[lessonId]?.[germanWord]?.mastered || false;
    recordFlashcardWordMastery(lessonId, germanWord, !currentMastery);
    toast({
      title: "Статус слова обновлен",
      description: `Слово "${germanWord}" ${!currentMastery ? "помечено как изученное" : "снята отметка об изучении"}.`,
    });
  }, [progress.flashcardProgress, recordFlashcardWordMastery, toast]);

  const handleNextCard = useCallback(() => {
    setIsCardFlipped(false); // Always flip back to German side
    setCurrentCardIndex(prevIndex => (prevIndex + 1) % (shuffledVocabulary.length || 1));
  }, [shuffledVocabulary.length]);

  const handleNextSection = useCallback(() => {
    const currentIndex = sectionOrder.indexOf(currentSection);
    if (currentIndex < sectionOrder.length - 1) {
      setCurrentSection(sectionOrder[currentIndex + 1]);
    }
  }, [currentSection, sectionOrder]);


  if (isLoading) return <div className="flex justify-center items-center h-screen"><p>Загрузка урока...</p></div>;
  if (!lesson) return <div className="text-center py-10">Урок не найден. <Link href="/lessons" className="text-primary hover:underline">Вернуться к списку уроков.</Link></div>;

  const allExercises = [...lesson.exercises, ...aiExercises];
  const isLessonCompleted = progress.completedLessons.includes(lesson.id);
  const currentFlashcard = shuffledVocabulary[currentCardIndex];
  const currentSectionIndex = sectionOrder.indexOf(currentSection);
  const isLastSection = currentSectionIndex === sectionOrder.length - 1;


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
        {lesson.audio && lesson.transcript && (
          <CardContent className="pt-6">
            <Card className="shadow-md">
              <CardHeader><CardTitle className="text-xl flex items-center"><Volume2 className="mr-2 h-6 w-6 text-primary" /> Аудиоматериал</CardTitle></CardHeader>
              <CardContent>
                <AudioPlayer src={lesson.audio} transcript={lesson.transcript} />
                <Button onClick={handleGenerateAiExercises} disabled={isGeneratingAiExercises} className="mt-4">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  {isGeneratingAiExercises ? "Генерация..." : "Сгенерировать упражнения по аудио (ИИ)"}
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        )}
      </Card>

      {/* Sequential Content Display */}
      <div className="space-y-6">
        {currentSection === 'theory' && sectionOrder.includes('theory') && (
          <Card className="shadow-md">
            <CardHeader><CardTitle className="text-2xl flex items-center"><BookText className="mr-2 h-6 w-6 text-primary" />Теоретический материал</CardTitle></CardHeader>
            <CardContent><p className="text-md whitespace-pre-line leading-relaxed">{lesson.theory}</p></CardContent>
             <CardFooter>
                {!isLastSection && (
                  <Button onClick={handleNextSection}>Далее <ChevronRight className="ml-2 h-4 w-4"/></Button>
                )}
            </CardFooter>
          </Card>
        )}

        {currentSection === 'vocabulary' && sectionOrder.includes('vocabulary') && lesson.vocabulary && lesson.vocabulary.length > 0 && (
          <Card className="shadow-md">
            <CardHeader><CardTitle className="text-2xl flex items-center"><BookOpenCheck className="mr-2 h-6 w-6 text-primary" />Словарь урока</CardTitle><CardDescription>Ключевые слова и фразы для этого урока.</CardDescription></CardHeader>
            <CardContent>
              <Table><TableHeader><TableRow><TableHead className="w-[30%]">Немецкое слово</TableHead><TableHead className="w-[30%]">Перевод</TableHead><TableHead>Пример</TableHead></TableRow></TableHeader>
                <TableBody>{lesson.vocabulary.map((item, index) => (<TableRow key={index}><TableCell className="font-medium">{item.german}</TableCell><TableCell>{item.russian}</TableCell><TableCell className="italic text-muted-foreground">{item.example || '–'}</TableCell></TableRow>))}</TableBody>
              </Table>
            </CardContent>
             <CardFooter>
                {!isLastSection && (
                  <Button onClick={handleNextSection}>Далее <ChevronRight className="ml-2 h-4 w-4"/></Button>
                )}
            </CardFooter>
          </Card>
        )}
        
        {currentSection === 'flashcards' && sectionOrder.includes('flashcards') && lesson.vocabulary && lesson.vocabulary.length > 0 && currentFlashcard && (
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Sparkles className="mr-2 h-6 w-6 text-primary" /> Изучение слов (Карточки)
              </CardTitle>
              <CardDescription>Проверьте свои знания слов из этого урока. <span className="font-medium">({currentCardIndex + 1}/{shuffledVocabulary.length})</span></CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex flex-col items-center">
              <Card className={cn("w-full max-w-md p-6 min-h-[200px] flex flex-col justify-center items-center text-center shadow-lg", 
                                  progress.flashcardProgress?.[lesson.id]?.[currentFlashcard.german]?.mastered ? "bg-green-50 dark:bg-green-900/30 border-green-500" : "bg-card")}>
                <p className="text-2xl font-semibold mb-2">{currentFlashcard.german}</p>
                {isCardFlipped && (
                  <>
                    <p className="text-xl text-muted-foreground mb-1">{currentFlashcard.russian}</p>
                    {currentFlashcard.example && <p className="text-sm italic text-muted-foreground/80">Пример: {currentFlashcard.example}</p>}
                  </>
                )}
              </Card>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button onClick={() => setIsCardFlipped(prev => !prev)} variant="outline">
                  <ArrowLeftRight className="mr-2 h-4 w-4" />
                  {isCardFlipped ? "Скрыть перевод" : "Показать перевод"}
                </Button>
                {isCardFlipped && (
                   <Button 
                      onClick={() => {
                        handleToggleFlashcardMastery(lesson.id, currentFlashcard.german);
                        // Do not automatically go to next card here, let user click "Next Word" or "Далее"
                      }}
                      variant={progress.flashcardProgress?.[lesson.id]?.[currentFlashcard.german]?.mastered ? "secondary" : "default"}
                    >
                     {progress.flashcardProgress?.[lesson.id]?.[currentFlashcard.german]?.mastered ? <><XCircle className="mr-2 h-4 w-4"/> Не изучено</> :  <><CheckCircle className="mr-2 h-4 w-4"/> Знал(а) это слово</>}
                    </Button>
                )}
                <Button onClick={handleNextCard}>
                  Следующее слово <ChevronRight className="ml-2 h-4 w-4"/>
                </Button>
              </div>
               {currentCardIndex === shuffledVocabulary.length -1 && isCardFlipped && (
                 <p className="text-sm text-muted-foreground pt-4">Вы повторили все слова! Начните заново или переходите к следующему разделу.</p>
               )}
            </CardContent>
             <CardFooter>
                {!isLastSection && (
                  <Button onClick={handleNextSection}>Далее <ChevronRight className="ml-2 h-4 w-4"/></Button>
                )}
            </CardFooter>
          </Card>
        )}

        {currentSection === 'exercises' && sectionOrder.includes('exercises') && allExercises.length > 0 && (
          <Card className="shadow-lg">
            <CardHeader><CardTitle className="text-2xl font-semibold flex items-center"><BookMarked className="mr-2 h-6 w-6 text-primary"/>Упражнения урока</CardTitle></CardHeader>
            <CardContent className="space-y-8">
              {allExercises.map((exercise, index) => {
                const isMastered = progress.exerciseAttempts[exercise.id]?.mastered;
                const feedback = exerciseFeedback[exercise.id];
                const currentAiWritingEval = aiWritingFeedback[exercise.id];
                const isAiWritingEvaluating = isEvaluatingAi[exercise.id];
                const currentAiTranslationEval = aiTranslationFeedback[exercise.id];
                const isAiTranslationEvaluating = isEvaluatingTranslationAi[exercise.id];

                let cardBorderColor = "border-border";
                if (exercise.type === 'writing_prompt') {
                  if (currentAiWritingEval?.error) cardBorderColor = "border-yellow-500 bg-yellow-50 dark:bg-yellow-800/20 dark:border-yellow-600";
                  else if (feedback && feedback.correct === null && !isAiWritingEvaluating) cardBorderColor = "border-blue-500 bg-blue-50 dark:bg-blue-800/20 dark:border-blue-600";
                  else if (isAiWritingEvaluating) cardBorderColor = "border-primary";
                } else if (exercise.type === 'translation') {
                   if (currentAiTranslationEval?.error) cardBorderColor = "border-yellow-500 bg-yellow-50 dark:bg-yellow-800/20 dark:border-yellow-600";
                   else if (feedback?.correct === true) cardBorderColor = "border-green-500 bg-green-50 dark:bg-green-800/20 dark:border-green-600";
                   else if (feedback?.correct === false) cardBorderColor = "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30 dark:border-yellow-600"; 
                   else if (isAiTranslationEvaluating) cardBorderColor = "border-primary";
                } else if (isMastered) {
                  cardBorderColor = "border-green-600 bg-green-100 dark:bg-green-900/30 dark:border-green-500";
                } else if (feedback) {
                  if (feedback.correct === true) cardBorderColor = "border-green-500 bg-green-50 dark:bg-green-800/20 dark:border-green-600";
                  else if (feedback.correct === false) cardBorderColor = "border-red-500 bg-red-50 dark:bg-red-800/20 dark:border-red-600";
                }

                return (
                  <Card key={exercise.id} className={cn("p-6 rounded-lg", cardBorderColor)}>
                    <p className="font-semibold text-lg mb-3">
                      {isMastered && exercise.type !== 'writing_prompt' && <Award className="inline mr-2 h-5 w-5 text-green-600 dark:text-green-400" />}
                      {exercise.type === 'writing_prompt' && <VenetianMask className="inline mr-2 h-5 w-5 text-primary" />}
                      {exercise.type === 'translation' && <MessageSquareText className="inline mr-2 h-5 w-5 text-blue-500" />}
                      Упражнение {index + 1}: {exercise.question}
                    </p>

                    {exercise.type === 'multiple_choice' && (<MultipleChoiceExerciseComponent exercise={exercise as MultipleChoiceExercise} onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)} userAnswer={userAnswers[exercise.id]} disabled={isMastered || !!feedback}/>)}
                    {exercise.type === 'fill_in_the_blank' && (<FillInTheBlankExerciseComponent exercise={exercise as FillInTheBlankExercise} onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)} userAnswer={userAnswers[exercise.id]} disabled={isMastered || !!feedback}/>)}
                    {exercise.type === 'translation' && (<TranslationExerciseComponent exercise={exercise as TranslationExercise} onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)} userAnswer={userAnswers[exercise.id]} disabled={isMastered || isAiTranslationEvaluating || (!!currentAiTranslationEval && !currentAiTranslationEval.error)} />)}
                    {exercise.type === 'writing_prompt' && (
                      <div className="space-y-2">
                        {(exercise as WritingPromptExercise).suggestedLength && (<p className="text-sm text-muted-foreground">Рекомендуемая длина: {(exercise as WritingPromptExercise).suggestedLength}</p>)}
                        <Textarea value={userWritingAnswers[exercise.id] || ''} onChange={(e) => handleWritingAnswerChange(exercise.id, e.target.value)} placeholder="Ваш ответ..." className="min-h-[100px]" disabled={isAiWritingEvaluating || (!!feedback && !currentAiWritingEval?.error) }/>
                      </div>
                    )}

                    {exercise.type !== 'writing_prompt' && exercise.type !== 'translation' && (<Button onClick={() => handleSubmitExercise(exercise)} disabled={isMastered || !!feedback || isSubmitting || !userAnswers[exercise.id]} className="mt-4">{isMastered ? <><Award className="mr-2 h-4 w-4"/>Освоено</> : "Проверить ответ"}</Button>)}
                    {exercise.type === 'translation' && (<Button onClick={() => handleSubmitExercise(exercise)} disabled={isMastered || isAiTranslationEvaluating || !userAnswers[exercise.id] || (!!currentAiTranslationEval && !currentAiTranslationEval.error && currentAiTranslationEval.isSemanticallyAcceptable) } className="mt-4">{isAiTranslationEvaluating ? "Оценка перевода..." : ((currentAiTranslationEval && !currentAiTranslationEval.error && currentAiTranslationEval.isSemanticallyAcceptable) ? "Перевод принят" : "Отправить на проверку ИИ")}</Button>)}
                    {exercise.type === 'writing_prompt' && (<Button onClick={() => handleSubmitExercise(exercise)} disabled={isAiWritingEvaluating || !userWritingAnswers[exercise.id] || (!!feedback && !currentAiWritingEval?.error) } className="mt-4">{isAiWritingEvaluating ? "Оценка ИИ..." : (currentAiWritingEval && !currentAiWritingEval.error ? "Оценено ИИ" : "Отправить на проверку ИИ")}</Button>)}

                    {feedback && !isMastered && (
                      <div className={cn("mt-4 p-3 rounded-md text-sm",
                          exercise.type === 'writing_prompt'
                            ? (currentAiWritingEval?.error ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-300" : (isAiWritingEvaluating ? "bg-blue-100 text-blue-700 dark:bg-blue-800/30 dark:text-blue-300" : "bg-blue-100 text-blue-700 dark:bg-blue-800/30 dark:text-blue-300"))
                            : exercise.type === 'translation'
                              ? (currentAiTranslationEval?.error ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-300" : (isAiTranslationEvaluating ? "bg-blue-100 text-blue-700 dark:bg-blue-800/30 dark:text-blue-300" : (feedback.correct === true ? "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800/30 dark:text-yellow-300")))
                              : (feedback.correct === true ? "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-300")
                        )}>
                        { exercise.type === 'writing_prompt' ? (currentAiWritingEval?.error ? <AlertTriangle className="inline mr-2 h-5 w-5" /> : (isAiWritingEvaluating ? <Info className="inline mr-2 h-5 w-5 animate-pulse" /> : <Info className="inline mr-2 h-5 w-5" />))
                          : exercise.type === 'translation' ? (currentAiTranslationEval?.error ? <AlertTriangle className="inline mr-2 h-5 w-5" /> : (isAiTranslationEvaluating ? <Info className="inline mr-2 h-5 w-5 animate-pulse" /> : (feedback.correct === true ? <CheckCircle className="inline mr-2 h-5 w-5" /> : <Info className="inline mr-2 h-5 w-5" />)))
                          : (feedback.correct === true ? <CheckCircle className="inline mr-2 h-5 w-5" /> : <XCircle className="inline mr-2 h-5 w-5" />)
                        }
                        {feedback.explanation || (exercise.type !== 'writing_prompt' && exercise.type !== 'translation' && (feedback.correct === true ? "Верно!" : "Неверно.")) || "Статус ответа"}
                      </div>
                    )}

                    {currentAiWritingEval && exercise.type === 'writing_prompt' && !currentAiWritingEval.error && (
                      <Card className="mt-4 p-4 border-dashed"><CardHeader className="p-2"><CardTitle className="text-lg flex items-center"><Brain className="mr-2 h-5 w-5 text-blue-500" /> Оценка ИИ</CardTitle></CardHeader>
                        <CardContent className="space-y-3 p-2">
                              <div><h4 className="font-semibold text-sm">Общая оценка:</h4><p className="text-sm text-muted-foreground">{currentAiWritingEval.overallAssessment}</p></div>
                              <div><h4 className="font-semibold text-sm">Исправленный вариант:</h4><p className="text-sm bg-green-50 dark:bg-green-900/20 p-2 rounded-md whitespace-pre-line">{currentAiWritingEval.correctedAnswer}</p></div>
                              <div><h4 className="font-semibold text-sm">Объяснение ошибок и рекомендации:</h4><p className="text-sm text-muted-foreground whitespace-pre-line">{currentAiWritingEval.feedbackExplanation}</p></div>
                        </CardContent>
                      </Card>
                    )}
                    {currentAiWritingEval && exercise.type === 'writing_prompt' && currentAiWritingEval.error && (
                       <Card className="mt-4 p-4 border-dashed border-yellow-500 bg-yellow-50 dark:bg-yellow-800/20"><CardHeader className="p-2"><CardTitle className="text-lg flex items-center text-yellow-700 dark:text-yellow-300"><AlertTriangle className="mr-2 h-5 w-5" /> Ошибка оценки ИИ</CardTitle></CardHeader><CardContent className="p-2"><p className="text-sm text-yellow-700 dark:text-yellow-400">{currentAiWritingEval.feedbackExplanation || currentAiWritingEval.error}</p></CardContent></Card>
                    )}

                    {currentAiTranslationEval && exercise.type === 'translation' && !currentAiTranslationEval.error && (
                      <Card className="mt-4 p-4 border-dashed"><CardHeader className="p-2"><CardTitle className="text-lg flex items-center"><Brain className="mr-2 h-5 w-5 text-blue-500" /> Оценка перевода ИИ</CardTitle></CardHeader>
                        <CardContent className="space-y-3 p-2">
                              <div><h4 className="font-semibold text-sm">Оценка перевода:</h4><p className="text-sm text-muted-foreground">{currentAiTranslationEval.feedback}</p></div>
                              <div><h4 className="font-semibold text-sm">Предложенный вариант:</h4><p className="text-sm bg-green-50 dark:bg-green-900/20 p-2 rounded-md whitespace-pre-line">{currentAiTranslationEval.suggestedTranslation}</p></div>
                        </CardContent>
                      </Card>
                    )}
                     {currentAiTranslationEval && exercise.type === 'translation' && currentAiTranslationEval.error && (
                       <Card className="mt-4 p-4 border-dashed border-yellow-500 bg-yellow-50 dark:bg-yellow-800/20"><CardHeader className="p-2"><CardTitle className="text-lg flex items-center text-yellow-700 dark:text-yellow-300"><AlertTriangle className="mr-2 h-5 w-5" /> Ошибка оценки перевода ИИ</CardTitle></CardHeader><CardContent className="p-2"><p className="text-sm text-yellow-700 dark:text-yellow-400">{currentAiTranslationEval.feedback || currentAiTranslationEval.error}</p></CardContent></Card>
                    )}
                    {index < allExercises.length - 1 && <Separator className="my-8" />}
                  </Card>
                );
              })}
            </CardContent>
             <CardFooter>
                {!isLastSection && (
                  <Button onClick={handleNextSection}>Далее <ChevronRight className="ml-2 h-4 w-4"/></Button>
                )}
            </CardFooter>
          </Card>
        )}
        
        {currentSection === 'reading' && sectionOrder.includes('reading') && lesson.readingText && lesson.readingComprehensionExercises && (
          <Card className="shadow-md">
            <CardHeader><CardTitle className="text-2xl flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />Текст для чтения</CardTitle><CardDescription>Прочитайте текст и ответьте на вопросы ниже.</CardDescription></CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none bg-muted/30 p-4 rounded-md shadow"><p className="whitespace-pre-line leading-relaxed">{lesson.readingText}</p></div>
              <div className="mt-6 space-y-6">
                {lesson.readingComprehensionExercises.map((exercise, index) => {
                  const feedback = readingExerciseFeedback[exercise.id];
                  const isAttemptedAndCorrect = feedback?.correct;
                  const isAttemptedAndIncorrect = feedback?.correct === false;
                  return (
                    <Card key={exercise.id} className={cn("p-6 rounded-lg", isAttemptedAndCorrect ? "border-green-500 bg-green-50 dark:bg-green-800/20 dark:border-green-600" : isAttemptedAndIncorrect ? "border-red-500 bg-red-50 dark:bg-red-800/20 dark:border-red-600" : "border-border")}>
                      <p className="font-semibold text-lg mb-3">Вопрос {index + 1} к тексту: {exercise.question}</p>
                      <MultipleChoiceExerciseComponent exercise={{ ...exercise, type: 'multiple_choice' }} onAnswerChange={(answer) => handleReadingAnswerChange(exercise.id, answer)} userAnswer={userReadingAnswers[exercise.id]} disabled={!!feedback}/>
                      <Button onClick={() => handleSubmitReadingExercise(exercise)} disabled={!!feedback || isSubmittingReading || !userReadingAnswers[exercise.id]} className="mt-4">Проверить ответ</Button>
                      {feedback && (<div className={cn("mt-4 p-3 rounded-md text-sm", feedback.correct ? "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-300" : "bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-300")}>
                        {feedback.correct ? <CheckCircle className="inline mr-2 h-5 w-5" /> : <XCircle className="inline mr-2 h-5 w-5" />}
                        {feedback.explanation || (feedback.correct ? "Верно!" : "Неверно.")}
                      </div>)}
                      {index < lesson.readingComprehensionExercises.length - 1 && <Separator className="my-6" />}
                    </Card>
                  )
                })}
              </div>
            </CardContent>
             <CardFooter>
                {!isLastSection && (
                  <Button onClick={handleNextSection}>Далее <ChevronRight className="ml-2 h-4 w-4"/></Button>
                )}
            </CardFooter>
          </Card>
        )}
      </div>
      {/* End Sequential Content Display */}

      <CardFooter className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 p-0 pt-6 border-t">
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <Button variant="outline" asChild><Link href="/lessons">К списку уроков</Link></Button>
          {thematicTest && (<Button variant="outline" asChild><Link href={`/tests/${thematicTest.id}`}><BookCopy className="mr-2 h-4 w-4" />К тесту по теме</Link></Button>)}
          {/* Removed "Следующий урок" button from here as it's handled by "Далее" within sections */}
        </div>
        <Button onClick={handleCompleteLesson} disabled={isLessonCompleted} size="lg" className={cn(isLessonCompleted && "bg-green-600 hover:bg-green-700")}>
          {isLessonCompleted ? "Урок завершен" : "Завершить урок"}
        </Button>
      </CardFooter>
    </div>
  );
}

