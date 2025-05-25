
'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress as ProgressBar } from "@/components/ui/progress"; // Alias to avoid conflict with window.Progress
import { useUserProgress } from '@/hooks/use-user-progress';
import { generateAdaptiveLesson, type AdaptiveLessonInput, type AdaptiveLessonOutput } from '@/ai/flows/adaptive-learning-path';
import { LANGUAGE_LEVELS, type LanguageLevel } from '@/lib/constants';
import { Lightbulb, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_LESSONS } from '@/data/lessons'; // Import MOCK_LESSONS

export default function DashboardPage() {
  const { progress, isLoading, setCurrentLevel, setLearningGoals } = useUserProgress();
  const [suggestedLesson, setSuggestedLesson] = useState<AdaptiveLessonOutput | null>(null);
  const [isGeneratingLesson, setIsGeneratingLesson] = useState(false);

  useEffect(() => {
    // Effect for any on-load logic if needed
  }, [isLoading, progress]);

  const handleLevelSelect = (level: LanguageLevel) => {
    setCurrentLevel(level);
  };
  
  const handleGoalsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Directly update learningGoals in progress object,
    // setLearningGoals from hook will persist it.
    // This makes the textarea responsive.
    progress.learningGoals = event.target.value; 
    // We need to trigger a re-render or ensure the hook's setLearningGoals is called on blur/save
  };

  const handleSaveGoals = () => {
    setLearningGoals(progress.learningGoals);
    // Add a toast notification for success if desired
  };

  const fetchAndSetSuggestedLesson = async () => {
    if (!progress.currentLevel) {
      // Consider using toast for user feedback
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
      // Consider using toast
    } finally {
      setIsGeneratingLesson(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]"><Zap className="animate-spin h-12 w-12 text-primary" /></div>;
  }

  const completedLessonsCount = progress.completedLessons.length;
  const totalLessonsCount = MOCK_LESSONS.length;
  const progressPercentage = totalLessonsCount > 0 ? (completedLessonsCount / totalLessonsCount) * 100 : 0;

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8 shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
          <div>
            <CardTitle className="text-3xl font-bold">Добро пожаловать в DeutschMeister!</CardTitle>
            <p className="text-lg text-muted-foreground mt-1">
              Ваш персональный помощник в изучении немецкого языка.
            </p>
          </div>
          <Image src="https://placehold.co/100x100.png" alt="DeutschMeister Logo" width={80} height={80} className="rounded-lg" data-ai-hint="language learning" />
        </CardHeader>
        <CardContent>
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
            <div className="space-y-4">
              <p className="text-md">Ваш текущий уровень: <span className="font-semibold text-primary">{progress.currentLevel}</span></p>
              
              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-1">
                  Завершено уроков: {completedLessonsCount} из {totalLessonsCount}
                </p>
                <ProgressBar value={progressPercentage} className="w-full h-2.5" />
              </div>
              
              <Button onClick={fetchAndSetSuggestedLesson} disabled={isGeneratingLesson} className="mt-4">
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
            <Button asChild>
              {/* TODO: Ensure this link works or is handled if lesson is not in MOCK_LESSONS */}
              <Link href={`/lessons/suggested/${encodeURIComponent(suggestedLesson.lessonTopic)}`}>Начать урок</Link>
            </Button>
          </CardContent>
        </Card>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
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
          <CardDescription>Расскажите нам, на чем вы хотели бы сосредоточиться, чтобы мы могли лучше адаптировать уроки. Ваши текущие цели: <span className="font-medium">{progress.learningGoals || "не заданы"}</span></CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            className="w-full p-2 border rounded-md min-h-[100px] text-sm bg-background"
            defaultValue={progress.learningGoals} // Use defaultValue for initial state
            onChange={handleGoalsChange} // Update state on change
            placeholder="Например: Я хочу улучшить грамматику и подготовиться к разговорной практике."
          />
        </CardContent>
        <CardFooter>
            <Button onClick={handleSaveGoals}>Сохранить цели</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

    