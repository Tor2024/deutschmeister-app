
'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MOCK_TESTS } from '@/data/tests';
import { FileText, CheckSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function TestsPage() {
  if (!MOCK_TESTS || MOCK_TESTS.length === 0) {
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TESTS.map(test => (
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
                <Badge variant="secondary">{test.level}</Badge>
              </div>
              <CardDescription>
                Тест для уровня {test.level} по теме "{test.topic.replace(' (Тест)', '')}".
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Количество вопросов: {test.questions.length}
              </p>
            </CardContent>
            <CardFooter className="pt-4">
              <Button asChild className="w-full">
                <Link href={`/tests/${test.id}`}>
                  Начать тест
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
