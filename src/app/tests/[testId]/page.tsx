
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTestById } from '@/data/tests';
import { MOCK_LESSONS } from '@/data/lessons';
import type { Test, Exercise as ExerciseTypeUnion, MultipleChoiceExercise, FillInTheBlankExercise, TranslationExercise, Lesson } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUserProgress } from '@/hooks/use-user-progress';
import { useToast } from '@/hooks/use-toast';
import MultipleChoiceExerciseComponent from '@/components/exercises/multiple-choice-exercise';
import FillInTheBlankExerciseComponent from '@/components/exercises/fill-blank-exercise';
import TranslationExerciseComponent from '@/components/exercises/translation-exercise';
import { CheckCircle, FileText, Percent, RefreshCw, ThumbsUp, ThumbsDown, HelpCircle, Award, ArrowLeft, ArrowRight, ChevronRight, BookCopy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress as ProgressBar } from '@/components/ui/progress'; 

export default function TestTakingPage() {
  const params = useParams();
  const router = useRouter();
  const testId = typeof params.testId === 'string' ? params.testId : '';
  const [test, setTest] = useState<Test | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextLessonAfterTest, setNextLessonAfterTest] = useState<Lesson | null | undefined>(undefined);

  const { recordTestResult } = useUserProgress();
  const { toast } = useToast();

  useEffect(() => {
    if (testId) {
      const fetchedTest = getTestById(testId);
      if (fetchedTest) {
        setTest(fetchedTest);
        if (fetchedTest.testType === 'thematic' && fetchedTest.associatedLessonId) {
          const lessonIndex = MOCK_LESSONS.findIndex(l => l.id === fetchedTest.associatedLessonId);
          if (lessonIndex !== -1 && lessonIndex < MOCK_LESSONS.length - 1) {
            setNextLessonAfterTest(MOCK_LESSONS[lessonIndex + 1]);
          } else {
            setNextLessonAfterTest(null);
          }
        } else {
          setNextLessonAfterTest(null); // For modular or level tests, or if no next lesson
        }
      }
      setIsLoading(false);
    }
  }, [testId]);

  const handleAnswerChange = (exerciseId: string, answer: string) => {
    setUserAnswers(prev => ({ ...prev, [exerciseId]: answer }));
  };

  const handleSubmitTest = () => {
    if (!test) return;

    let correctAnswersCount = 0;
    test.questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      let isCorrect = false;
      switch (question.type) {
        case 'multiple_choice':
          isCorrect = userAnswer === (question as MultipleChoiceExercise).correctAnswer;
          break;
        case 'fill_in_the_blank':
          isCorrect = userAnswer?.toLowerCase().trim() === (question as FillInTheBlankExercise).correctAnswer.toLowerCase().trim();
          break;
        case 'translation':
          // For A1/A2 tests, direct string comparison. For B1+ with AI, this would be different.
          isCorrect = userAnswer?.toLowerCase().trim() === (question as TranslationExercise).correctAnswer.toLowerCase().trim();
          break;
        default:
          break;
      }
      if (isCorrect) {
        correctAnswersCount++;
      }
    });

    const calculatedScore = Math.round((correctAnswersCount / test.questions.length) * 100);
    setScore(calculatedScore);
    setShowResults(true);
    recordTestResult(test.id, calculatedScore);

    toast({
      title: `Тест "${test.topic}" завершен!`,
      description: `Ваш результат: ${calculatedScore}%.`,
      variant: calculatedScore >= 80 ? "default" : "destructive",
      className: calculatedScore >= 80 ? "bg-green-100 dark:bg-green-800/30 dark:border-green-500 text-green-700 dark:text-green-300" : "bg-red-100 dark:bg-red-800/30 dark:border-red-500 text-red-700 dark:text-red-300"
    });
  };

  const handleRetakeTest = () => {
    setUserAnswers({});
    setScore(null);
    setShowResults(false);
    setCurrentQuestionIndex(0);
  };

  const handleNextQuestion = () => {
    if (test && currentQuestionIndex < test.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><p>Загрузка теста...</p></div>;
  }

  if (!test) {
    return (
      <div className="text-center py-10">
        Тест не найден.
        <Link href="/tests" className="text-primary hover:underline ml-2">
          Вернуться к списку тестов.
        </Link>
      </div>
    );
  }
  
  const currentQuestion = test.questions[currentQuestionIndex];
  const allQuestionsAnswered = test.questions.every(q => userAnswers[q.id] !== undefined && userAnswers[q.id].trim() !== '');


  if (showResults && score !== null) {
    let scoreColorClass = '';
    let feedbackMessage = '';
    let FeedbackIcon = ThumbsDown;

    if (score >= 80) {
      scoreColorClass = 'text-green-600 dark:text-green-400';
      feedbackMessage = "Отличный результат!";
      FeedbackIcon = ThumbsUp;
    } else if (score >= 50) {
      scoreColorClass = 'text-yellow-600 dark:text-yellow-400';
      feedbackMessage = "Неплохо, но можно лучше!";
      FeedbackIcon = ThumbsUp; // Still positive-ish
    } else {
      scoreColorClass = 'text-red-600 dark:text-red-400';
      feedbackMessage = "Попробуйте еще раз!";
      FeedbackIcon = ThumbsDown;
    }

    return (
      <div className="container mx-auto py-8 px-4">
        <Card className="shadow-lg text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary flex items-center justify-center">
              <Award className="mr-3 h-8 w-8" /> Результаты теста: {test.topic}
            </CardTitle>
            <CardDescription className="text-lg">Уровень: {test.level}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 py-8">
            <div className="flex flex-col items-center justify-center">
              <p className={cn("text-6xl font-bold", scoreColorClass)}>{score}%</p>
              <Percent className="h-12 w-12 ml-2 text-muted-foreground" />
            </div>
            <p className="text-xl text-muted-foreground">
              Вы ответили правильно на {Math.round(score / 100 * test.questions.length)} из {test.questions.length} вопросов.
            </p>
            <p className={cn("text-2xl font-semibold flex items-center justify-center", scoreColorClass)}>
              <FeedbackIcon className="mr-2 h-7 w-7" /> {feedbackMessage}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 border-t">
            <Button onClick={handleRetakeTest} variant="outline" size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Пройти еще раз
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/tests">К списку тестов</Link>
            </Button>
            {nextLessonAfterTest ? (
              <Button asChild size="lg">
                <Link href={`/lessons/${nextLessonAfterTest.id}`}>
                  Следующий урок <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button asChild size="lg">
                <Link href="/lessons">К урокам</Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-6 shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold text-primary flex items-center">
              <FileText className="mr-3 h-8 w-8" />
              {test.topic}
            </CardTitle>
            <span className="text-sm font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full">{test.level}</span>
          </div>
          <CardDescription className="text-lg mt-1">
            Вопрос {currentQuestionIndex + 1} из {test.questions.length}
          </CardDescription>
           <ProgressBar value={((currentQuestionIndex + 1) / test.questions.length) * 100} className="mt-2 h-2.5" />
        </CardHeader>
      </Card>

      {currentQuestion && (
        <Card key={currentQuestion.id} className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <HelpCircle className="mr-2 h-6 w-6 text-primary/80" />
              Вопрос {currentQuestionIndex + 1}
            </CardTitle>
            <CardDescription className="pt-2 text-base">{currentQuestion.question}</CardDescription>
          </CardHeader>
          <CardContent>
            {currentQuestion.type === 'multiple_choice' && (
              <MultipleChoiceExerciseComponent
                exercise={currentQuestion as MultipleChoiceExercise}
                onAnswerChange={(answer) => handleAnswerChange(currentQuestion.id, answer)}
                userAnswer={userAnswers[currentQuestion.id]}
              />
            )}
            {currentQuestion.type === 'fill_in_the_blank' && (
              <FillInTheBlankExerciseComponent
                exercise={currentQuestion as FillInTheBlankExercise}
                onAnswerChange={(answer) => handleAnswerChange(currentQuestion.id, answer)}
                userAnswer={userAnswers[currentQuestion.id]}
              />
            )}
            {currentQuestion.type === 'translation' && (
              <TranslationExerciseComponent
                exercise={currentQuestion as TranslationExercise}
                onAnswerChange={(answer) => handleAnswerChange(currentQuestion.id, answer)}
                userAnswer={userAnswers[currentQuestion.id]}
              />
            )}
          </CardContent>
        </Card>
      )}

      <div className="mt-8 flex justify-between items-center">
        <Button 
          onClick={handlePreviousQuestion} 
          disabled={currentQuestionIndex === 0}
          variant="outline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>
        <Button 
          onClick={handleNextQuestion} 
          disabled={currentQuestionIndex === test.questions.length - 1}
          variant="outline"
        >
          Далее
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <CardFooter className="mt-8 flex justify-end gap-4 p-0 pt-6 border-t">
        <Button onClick={handleSubmitTest} size="lg" disabled={!allQuestionsAnswered}>
          <CheckCircle className="mr-2 h-5 w-5" />
          Завершить тест
        </Button>
      </CardFooter>
    </div>
  );
}
