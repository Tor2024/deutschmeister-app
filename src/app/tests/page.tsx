
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MOCK_TESTS, MOCK_MODULAR_TESTS } from '@/data/tests';
import type { Test, ModularTest, LanguageLevel } from '@/types';
import { FileText, CheckSquare, Layers, Activity } from 'lucide-react'; // Added Activity icon
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { useUserProgress } from '@/hooks/use-user-progress'; // Import useUserProgress

export default function TestsPage() {
  const { progress, isLoading } = useUserProgress(); // Get progress

  const testsByLevel: Record<LanguageLevel, Test[]> = {
    A1: [], A2: [], B1: [], B2: [], C1: [], C2: [],
  };

  MOCK_TESTS.forEach(test => {
    if (testsByLevel[test.level]) {
      testsByLevel[test.level].push(test);
    }
  });

  const modularTestsByLevel: Record<LanguageLevel, ModularTest[]> = {
    A1: [], A2: [], B1: [], B2: [], C1: [], C2: [],
  };

  MOCK_MODULAR_TESTS.forEach(mtest => {
     if (modularTestsByLevel[mtest.level]) {
      modularTestsByLevel[mtest.level].push(mtest);
    }
  });

  const allLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as LanguageLevel[];
  const noTestsAvailable = MOCK_TESTS.length === 0 && MOCK_MODULAR_TESTS.length === 0;

  if (isLoading) {
    return <div className="container mx-auto py-8 px-4 text-center">Загрузка данных о прогрессе...</div>;
  }

  if (noTestsAvailable) {
    return (
      <div className="container mx-auto py-8 px-4">
        <Card className="text-center shadow-lg">
          <CardHeader>
            <div className="flex flex-col items-center gap-4">
              <CheckSquare className="h-16 w-16 text-primary" />
              <CardTitle className="text-3xl font-bold text-primary">Тесты по немецкому языку</CardTitle>
            </div>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              Проверьте свои знания и подготовьтесь к новым вызовам!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-md">
              На данный момент доступных тестов нет. Раздел находится в активной разработке.
            </p>
            <p className="text-md">
              Скоро здесь появятся тесты для проверки ваших знаний.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/lessons">Вернуться к урокам</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary flex items-center">
          <CheckSquare className="mr-3 h-8 w-8" />
          Доступные тесты
        </h1>
      </div>

      {/* Modular Tests Section */}
      {MOCK_MODULAR_TESTS.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary-foreground mb-6 flex items-center">
            <Layers className="mr-3 h-7 w-7 text-secondary" />
            Модульные тесты
          </h2>
          {allLevels.map(level => (
            modularTestsByLevel[level].length > 0 && (
              <Fragment key={`modular-${level}`}>
                <h3 className="text-xl font-medium text-muted-foreground mt-8 mb-4">Уровень {level}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {modularTestsByLevel[level].map(mtest => {
                    const testScoreData = progress.testResults[mtest.id];
                    return (
                      <Card 
                        key={mtest.id} 
                        className="flex flex-col shadow-md hover:shadow-lg transition-shadow bg-secondary/20 border-secondary"
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl mb-1 flex items-center">
                              <Layers className="mr-2 h-5 w-5 text-primary/80" />
                              {mtest.topic}
                            </CardTitle>
                            <Badge variant="secondary">{mtest.level}</Badge>
                          </div>
                          {mtest.description && (
                             <CardDescription className="text-sm text-muted-foreground pt-1">{mtest.description}</CardDescription>
                          )}
                        </CardHeader>
                        <CardContent className="flex-grow">
                           <p className="text-xs text-muted-foreground">
                            Вопросов: {mtest.questions.length}
                          </p>
                          {testScoreData && (
                            <p className={cn(
                              "text-sm mt-2 font-medium",
                              testScoreData.score >= 80 ? "text-green-600 dark:text-green-400" : 
                              testScoreData.score >= 50 ? "text-yellow-600 dark:text-yellow-400" : 
                              "text-red-600 dark:text-red-400"
                            )}>
                              <Activity className="inline-block mr-1 h-4 w-4" />
                              Последний результат: {testScoreData.score}%
                            </p>
                          )}
                        </CardContent>
                        <CardFooter className="pt-4">
                          <Button asChild className="w-full">
                            <Link href={`/tests/${mtest.id}`}>
                              Начать модульный тест
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </Fragment>
            )
          ))}
           <Separator className="my-10" />
        </div>
      )}


      {/* Topic-Specific Tests Section */}
      {MOCK_TESTS.length > 0 && (
         <div>
          <h2 className="text-2xl font-semibold text-secondary-foreground mb-6 flex items-center">
            <FileText className="mr-3 h-7 w-7 text-secondary" />
            Тесты по темам уроков
          </h2>
          {allLevels.map(level => (
            testsByLevel[level].length > 0 && (
              <Fragment key={`topic-${level}`}>
                <h3 className="text-xl font-medium text-muted-foreground mt-8 mb-4">Уровень {level}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {testsByLevel[level].map(test => {
                    const testScoreData = progress.testResults[test.id];
                    return (
                      <Card 
                        key={test.id} 
                        className="flex flex-col shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-xl mb-1 flex items-center">
                              <FileText className="mr-2 h-5 w-5 text-primary/80" />
                              {test.topic}
                            </CardTitle>
                            <Badge variant="outline">{test.level}</Badge>
                          </div>
                          <CardDescription>
                            Тест по теме урока.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-xs text-muted-foreground">
                            Вопросов: {test.questions.length}
                          </p>
                          {testScoreData && (
                            <p className={cn(
                              "text-sm mt-2 font-medium",
                              testScoreData.score >= 80 ? "text-green-600 dark:text-green-400" : 
                              testScoreData.score >= 50 ? "text-yellow-600 dark:text-yellow-400" : 
                              "text-red-600 dark:text-red-400"
                            )}>
                              <Activity className="inline-block mr-1 h-4 w-4" />
                              Последний результат: {testScoreData.score}%
                            </p>
                          )}
                        </CardContent>
                        <CardFooter className="pt-4">
                          <Button asChild className="w-full">
                            <Link href={`/tests/${test.id}`}>
                              Начать тест
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </Fragment>
            )
          ))}
        </div>
      )}
    </div>
  );
}
