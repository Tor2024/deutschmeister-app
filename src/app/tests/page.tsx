
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MOCK_TESTS, MOCK_MODULAR_TESTS } from '@/data/tests';
import type { Test, ModularTest, LanguageLevel } from '@/types';
import { FileText, CheckSquare, Layers, Activity, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { useUserProgress } from '@/hooks/use-user-progress';

export default function TestsPage() {
  const { progress, isLoading } = useUserProgress();

  const allLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as LanguageLevel[];
  
  const thematicTestsByLevel = allLevels.reduce((acc, level) => {
    acc[level] = MOCK_TESTS.filter(test => test.level === level && test.testType === 'thematic');
    return acc;
  }, {} as Record<LanguageLevel, Test[]>);

  const modularTestsByTypeAndLevel = allLevels.reduce((acc, level) => {
    acc[level] = {
      modular: MOCK_MODULAR_TESTS.filter(test => test.level === level && test.testType === 'modular'),
      level: MOCK_MODULAR_TESTS.filter(test => test.level === level && test.testType === 'level'),
    };
    return acc;
  }, {} as Record<LanguageLevel, { modular: ModularTest[], level: ModularTest[] }>);


  const noThematicTestsAvailable = MOCK_TESTS.filter(t => t.testType === 'thematic').length === 0;
  const noModularTestsAvailable = MOCK_MODULAR_TESTS.filter(t => t.testType === 'modular').length === 0;
  const noLevelTestsAvailable = MOCK_MODULAR_TESTS.filter(t => t.testType === 'level').length === 0;

  if (isLoading) {
    return <div className="container mx-auto py-8 px-4 text-center">Загрузка данных о прогрессе...</div>;
  }

  const renderTestCard = (test: Test | ModularTest) => {
    const testScoreData = progress.testResults[test.id];
    const isModularOrLevel = 'description' in test; // Check if it's ModularTest

    return (
      <Card 
        key={test.id} 
        className={cn(
          "flex flex-col shadow-md hover:shadow-lg transition-shadow",
          isModularOrLevel && test.testType === 'level' ? "bg-primary/10 border-primary" : 
          isModularOrLevel ? "bg-secondary/20 border-secondary" : ""
        )}
      >
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl mb-1 flex items-center">
              {isModularOrLevel && test.testType === 'level' ? <Award className="mr-2 h-5 w-5 text-primary" /> :
               isModularOrLevel ? <Layers className="mr-2 h-5 w-5 text-primary/80" /> :
               <FileText className="mr-2 h-5 w-5 text-primary/80" />
              }
              {test.topic}
            </CardTitle>
            <Badge variant={isModularOrLevel && test.testType === 'level' ? "default" : "outline"}>{test.level}</Badge>
          </div>
          {isModularOrLevel && (test as ModularTest).description && (
              <CardDescription className="text-sm text-muted-foreground pt-1">{(test as ModularTest).description}</CardDescription>
          )}
           {!isModularOrLevel && (
             <CardDescription className="text-sm text-muted-foreground pt-1">Тест по теме урока.</CardDescription>
           )}
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
              {isModularOrLevel && test.testType === 'level' ? 'Пройти уровневый тест' : 
               isModularOrLevel ? 'Начать модульный тест' : 
               'Начать тест по теме'}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary flex items-center">
          <CheckSquare className="mr-3 h-8 w-8" />
          Доступные тесты
        </h1>
      </div>

      {noThematicTestsAvailable && noModularTestsAvailable && noLevelTestsAvailable ? (
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
      ) : (
        <>
          {/* Thematic Tests Section */}
          {!noThematicTestsAvailable && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-secondary-foreground mb-6 flex items-center">
                <FileText className="mr-3 h-7 w-7 text-secondary" />
                Тесты по темам уроков
              </h2>
              {allLevels.map(level => (
                thematicTestsByLevel[level].length > 0 && (
                  <Fragment key={`thematic-${level}`}>
                    <h3 className="text-xl font-medium text-muted-foreground mt-8 mb-4">Уровень {level}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {thematicTestsByLevel[level].map(test => renderTestCard(test))}
                    </div>
                  </Fragment>
                )
              ))}
              {(noModularTestsAvailable && noLevelTestsAvailable) ? null : <Separator className="my-10" />}
            </div>
          )}

          {/* Modular Tests Section */}
          {!noModularTestsAvailable && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-secondary-foreground mb-6 flex items-center">
                <Layers className="mr-3 h-7 w-7 text-secondary" />
                Модульные тесты
              </h2>
              {allLevels.map(level => (
                modularTestsByTypeAndLevel[level].modular.length > 0 && (
                  <Fragment key={`modular-${level}`}>
                    <h3 className="text-xl font-medium text-muted-foreground mt-8 mb-4">Уровень {level}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {modularTestsByTypeAndLevel[level].modular.map(test => renderTestCard(test))}
                    </div>
                  </Fragment>
                )
              ))}
              {noLevelTestsAvailable ? null : <Separator className="my-10" />}
            </div>
          )}
          
          {/* Level Tests Section */}
          {!noLevelTestsAvailable && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-primary mb-6 flex items-center">
                <Award className="mr-3 h-7 w-7 text-primary" />
                Итоговые уровневые тесты
              </h2>
              {allLevels.map(level => (
                modularTestsByTypeAndLevel[level].level.length > 0 && (
                  <Fragment key={`level-${level}`}>
                    <h3 className="text-xl font-medium text-muted-foreground mt-8 mb-4">Уровень {level}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {modularTestsByTypeAndLevel[level].level.map(test => renderTestCard(test))}
                    </div>
                  </Fragment>
                )
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
