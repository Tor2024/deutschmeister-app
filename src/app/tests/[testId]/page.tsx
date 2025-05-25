
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getTestById } from '@/data/tests';
import type { Test, Exercise as ExerciseTypeUnion, MultipleChoiceExercise, FillInTheBlankExercise, TranslationExercise } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useUserProgress } from '@/hooks/use-user-progress';
import { useToast } from '@/hooks/use-toast';
import MultipleChoiceExerciseComponent from '@/components/exercises/multiple-choice-exercise';
import FillInTheBlankExerciseComponent from '@/components/exercises/fill-blank-exercise';
import TranslationExerciseComponent from '@/components/exercises/translation-exercise';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, FileText, Percent, RefreshCw } from 'lucide-react';

export default function TestTakingPage() {
  const params = useParams();
  const testId = typeof params.testId === 'string' ? params.testId : '';
  const [test, setTest] = useState<Test | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const { recordTestResult } = useUserProgress();
  const { toast } = useToast();

  useEffect(() => {
    if (testId) {
      const fetchedTest = getTestById(testId);
      if (fetchedTest) {
        setTest(fetchedTest);
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
      if (userAnswer === undefined || userAnswer.trim() === '') {
        // Можно добавить валидацию, чтобы все вопросы были отвечены
      }
      let isCorrect = false;
      switch (question.type) {
        case 'multiple_choice':
          isCorrect = userAnswer === (question as MultipleChoiceExercise).correctAnswer;
          break;
        case 'fill_in_the_blank':
          isCorrect = userAnswer.toLowerCase().trim() === (question as FillInTheBlankExercise).correctAnswer.toLowerCase().trim();
          break;
        case 'translation':
          isCorrect = userAnswer.toLowerCase().trim() === (question as TranslationExercise).correctAnswer.toLowerCase().trim();
          break;
        // Добавить другие типы упражнений, если они будут в тестах
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
      className: calculatedScore >= 80 ? "bg-green-500 text-white" : ""
    });
  };

  const handleRetakeTest = () => {
    setUserAnswers({});
    setScore(null);
    setShowResults(false);
    // Возможно, потребуется сбросить какие-то еще состояния, если они будут добавлены
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

  if (showResults && score !== null) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">Результаты теста: {test.topic}</CardTitle>
            <CardDescription>Уровень: {test.level}</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-5xl font-bold">
              {score}%
              <Percent className="inline-block h-10 w-10 ml-2 text-muted-foreground" />
            </p>
            <p className="text-lg text-muted-foreground">
              Вы ответили правильно на {Math.round(score / 100 * test.questions.length)} из {test.questions.length} вопросов.
            </p>
            {score >= 80 ? (
              <p className="text-green-600 font-semibold flex items-center justify-center">
                <CheckCircle className="mr-2 h-6 w-6" /> Отличный результат!
              </p>
            ) : (
              <p className="text-destructive font-semibold">
                Попробуйте еще раз, чтобы улучшить результат!
              </p>
            )}
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button onClick={handleRetakeTest} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Пройти еще раз
            </Button>
            <Button asChild>
              <Link href="/tests">К списку тестов</Link>
            </Button>
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
          <CardDescription className="text-lg">
            Ответьте на вопросы ниже. Удачи!
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-8">
        {test.questions.map((exercise, index) => (
          <Card key={exercise.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">Вопрос {index + 1}</CardTitle>
              <CardDescription>{exercise.question}</CardDescription>
            </CardHeader>
            <CardContent>
              {exercise.type === 'multiple_choice' && (
                <MultipleChoiceExerciseComponent
                  exercise={exercise as MultipleChoiceExercise}
                  onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)}
                  userAnswer={userAnswers[exercise.id]}
                />
              )}
              {exercise.type === 'fill_in_the_blank' && (
                <FillInTheBlankExerciseComponent
                  exercise={exercise as FillInTheBlankExercise}
                  onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)}
                  userAnswer={userAnswers[exercise.id]}
                />
              )}
              {exercise.type === 'translation' && (
                <TranslationExerciseComponent
                  exercise={exercise as TranslationExercise}
                  onAnswerChange={(answer) => handleAnswerChange(exercise.id, answer)}
                  userAnswer={userAnswers[exercise.id]}
                />
              )}
              {/* Добавить другие типы упражнений, если необходимо */}
            </CardContent>
            {index < test.questions.length - 1 && <Separator className="my-6" />}
          </Card>
        ))}
      </div>

      <CardFooter className="mt-8 flex justify-end gap-4 p-0 pt-6 border-t">
        <Button onClick={handleSubmitTest} size="lg" disabled={Object.keys(userAnswers).length < test.questions.length}>
          Завершить тест
        </Button>
      </CardFooter>
    </div>
  );
}
