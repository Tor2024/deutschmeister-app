'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useUserProgress } from '@/hooks/use-user-progress';
import { generateAdaptiveLesson, type AdaptiveLessonInput, type AdaptiveLessonOutput } from '@/ai/flows/adaptive-learning-path';
import { LANGUAGE_LEVELS, LanguageLevel } from '@/lib/constants';
import { Lightbulb, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPage() {
  const { progress, isLoading, setCurrentLevel, setLearningGoals } = useUserProgress();
  const [suggestedLesson, setSuggestedLesson] = useState<AdaptiveLessonOutput | null>(null);
  const [isGeneratingLesson, setIsGeneratingLesson] = useState(false);

  useEffect(() => {
    if (!isLoading && progress.currentLevel) {
      // Fetch adaptive lesson suggestion if level is set
      // For now, this is a placeholder. In a real app, you might fetch this on load or on demand.
    }
  }, [isLoading, progress]);

  const handleLevelSelect = (level: LanguageLevel) => {
    setCurrentLevel(level);
  };
  
  const handleGoalsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLearningGoals(event.target.value);
  };

  const fetchAndSetSuggestedLesson = async () => {
    if (!progress.currentLevel) {
      // alert("Пожалуйста, сначала выберите ваш уровень."); // Consider using toast
      return;
    }
    setIsGeneratingLesson(true);
    try {
      const adaptiveInput: AdaptiveLessonInput = {
        currentLevel: progress.currentLevel,
        completedLessons: progress.completedLessons,
        testResults: Object.entries(progress.testResults).reduce((acc, [key, value]) => {
          acc[key] = value.score;
          return acc;
        }, {} as Record<string, number>),
        learningGoals: progress.learningGoals || "Общее улучшение знаний немецкого языка.",
      };
      const suggestion = await generateAdaptiveLesson(adaptiveInput);
      setSuggestedLesson(suggestion);
    } catch (error) {
      console.error("Failed to generate adaptive lesson:", error);
      // alert("Не удалось сгенерировать урок. Попробуйте позже."); // Consider using toast
    } finally {
      setIsGeneratingLesson(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]"><Zap className="animate-spin h-12 w-12 text-primary" /></div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-3xl font-bold">Добро пожаловать в DeutschMeister!</CardTitle>
          <Image src="https://placehold.co/100x100.png" alt="DeutschMeister Logo" width={80} height={80} className="rounded-lg" data-ai-hint="language learning" />
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground mb-4">
            Ваш персональный помощник в изучении немецкого языка. Начните свой путь к мастерству!
          </p>
          {!progress.currentLevel ? (
            <div className="space-y-4">
              <p className="text-md">Пожалуйста, выберите ваш текущий уровень владения немецким:</p>
              <Select onValueChange={(value) => handleLevelSelect(value as LanguageLevel)}>
                <SelectTrigger className="w-full md:w-[280px] text-base py-3">
                  <SelectValue placeholder="Выберите уровень" />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGE_LEVELS.map(level => (
                    <SelectItem key={level} value={level} className="text-base">
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div>
              <p className="text-md mb-2">Ваш текущий уровень: <span className="font-semibold text-primary">{progress.currentLevel}</span></p>
              <p className="text-md mb-4">Ваши цели обучения: <span className="font-semibold text-primary">{progress.learningGoals}</span></p>
              <Button onClick={fetchAndSetSuggestedLesson} disabled={isGeneratingLesson}>
                <Lightbulb className="mr-2 h-5 w-5" />
                {isGeneratingLesson ? "Генерация урока..." : "Предложить следующий урок"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {suggestedLesson && (
        <Card className="mb-8 bg-primary/10 border-primary shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Lightbulb className="mr-3 h-7 w-7" /> Рекомендуемый урок</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">{suggestedLesson.lessonTopic}</h3>
            <p className="text-md text-muted-foreground mb-4">{suggestedLesson.reason}</p>
            {/* TODO: Add a link to the actual lesson page once lesson data structure and routing are ready */}
            <Button asChild>
              <Link href={`/lessons/suggested/${encodeURIComponent(suggestedLesson.lessonTopic)}`}>Начать урок</Link>
            </Button>
          </CardContent>
        </Card>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Уроки</CardTitle>
            <CardDescription>Просмотрите доступные уроки по уровням.</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src="https://placehold.co/600x400.png" alt="Уроки" width={600} height={400} className="rounded-md mb-4" data-ai-hint="education classroom" />
            <p>Откройте для себя структурированные уроки, охватывающие грамматику, лексику и многое другое.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href="/lessons">Перейти к урокам</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Ваш Прогресс</CardTitle>
            <CardDescription>Отслеживайте свои достижения и улучшения.</CardDescription>
          </CardHeader>
          <CardContent>
            <Image src="https://placehold.co/600x400.png" alt="Прогресс" width={600} height={400} className="rounded-md mb-4" data-ai-hint="charts graphs" />
             <p>Следите за своим прогрессом, просматривайте результаты тестов и завершенные уроки.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href="/progress">Смотреть прогресс</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">Настройте свои цели обучения</CardTitle>
          <CardDescription>Расскажите нам, на чем вы хотели бы сосредоточиться, чтобы мы могли лучше адаптировать уроки.</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            className="w-full p-2 border rounded-md min-h-[100px] text-sm bg-background"
            value={progress.learningGoals}
            onChange={handleGoalsChange}
            placeholder="Например: Я хочу улучшить грамматику и подготовиться к разговорной практике."
          />
        </CardContent>
        <CardFooter>
            <Button onClick={() => setLearningGoals(progress.learningGoals)}>Сохранить цели</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
