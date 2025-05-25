'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SpellCheck } from "lucide-react";

export default function VocabularyPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="text-center shadow-lg">
        <CardHeader>
          <div className="flex flex-col items-center gap-4">
            <SpellCheck className="h-16 w-16 text-primary" />
            <CardTitle className="text-3xl font-bold text-primary">Словарный запас</CardTitle>
          </div>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            Расширяйте свой лексикон для свободного общения на немецком!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Image
            src="https://placehold.co/800x400.png"
            alt="Изучение слов"
            width={800}
            height={400}
            className="rounded-lg mx-auto shadow-md"
            data-ai-hint="dictionary books"
          />
          <p className="text-md">
            Этот раздел находится в активной разработке. Скоро здесь появятся тематические словари, упражнения для запоминания слов и многое другое для эффективного пополнения вашего словарного запаса.
          </p>
          <Button asChild size="lg">
            <Link href="/lessons">Вернуться к урокам</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
