'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function TestsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Тесты по немецкому языку</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Проверьте свои знания и подготовьтесь к новым вызовам!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Тестирование знаний" 
            width={800} 
            height={400} 
            className="rounded-lg mx-auto shadow-md"
            data-ai-hint="exams tests" 
          />
          <p className="text-md">
            На данный момент раздел тестов находится в разработке. Скоро здесь появятся промежуточные тесты после каждой темы и возможность проверить свои знания комплексно.
          </p>
          <p className="text-md">
            Адаптивные тесты, генерируемые ИИ, также будут доступны для персонализированной оценки вашего прогресса.
          </p>
          <Button asChild size="lg">
            <Link href="/lessons">Вернуться к урокам</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
