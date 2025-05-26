
'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress as ProgressBar } from "@/components/ui/progress";
import { useUserProgress } from '@/hooks/use-user-progress';
// Removed generateAdaptiveLesson import
import { LANGUAGE_LEVELS, type LanguageLevel } from '@/lib/constants';
import { Lightbulb, Zap, BookOpenCheck, BarChart3 } from 'lucide-react'; // Added BookOpenCheck, BarChart3
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_LESSONS, type Lesson } from '@/data/lessons';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

export default function DashboardPage() {
  const { progress, isLoading, setCurrentLevel, setLearningGoals } = useUserProgress();
  const [recommendedLesson, setRecommendedLesson] = useState<Lesson | null>(null); // Changed state
  const [noMoreLessons, setNoMoreLessons] = useState(false);
  const [currentGoalsInput, setCurrentGoalsInput] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    setCurrentGoalsInput(progress.learningGoals || "Общее улучшение знаний немецкого языка.");
  }, [progress.learningGoals]);

  const findNextLessonForMe = useCallback(() => {
    setRecommendedLesson(null);
    setNoMoreLessons(false);

    const userLevel = progress.currentLevel || 'A1';
    const userLevelIndex = LANGUAGE_LEVELS.indexOf(userLevel);

    const relevantLessons = MOCK_LESSONS.filter(lesson => {
      const lessonLevelIndex = LANGUAGE_LEVELS.indexOf(lesson.level);
      return lessonLevelIndex >= userLevelIndex;
    });

    const nextLesson = relevantLessons.find(
      (lesson) => !progress.completedLessons.includes(lesson.id)
    );

    if (nextLesson) {
      setRecommendedLesson(nextLesson);
      toast({
        title: "Следующий урок найден!",
        description: `Рекомендуем вам урок: "${nextLesson.topic}" (${nextLesson.level}).`,
        duration: 5000,
      });
    } else {
      setNoMoreLessons(true);
      setRecommendedLesson(null); // Ensure no previous recommendation is shown
      toast({
        title: "Все уроки пройдены!",
        description: "Поздравляем! Вы прошли все доступные уроки, начиная с вашего текущего уровня. Попробуйте уровневые тесты или выберите уроки для повторения.",
        duration: 7000,
      });
    }
  }, [progress.currentLevel, progress.completedLessons, toast]);


  const handleLevelSelect = (level: LanguageLevel) => {
    setCurrentLevel(level);
    setRecommendedLesson(null); 
    setNoMoreLessons(false);
  };

  const handleGoalsInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentGoalsInput(event.target.value);
  };

  const handleSaveGoals = () => {
    setLearningGoals(currentGoalsInput);
    toast({ title: "Цели сохранены!", description: "Ваши учебные цели обновлены." });
  };

  if (isLoading) {
    return <div className="container mx-auto py-8 px-4 flex justify-center items-center min-h-[calc(100vh-10rem)]"><Zap className="animate-spin h-12 w-12 text-primary" /></div>;
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
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-md">Ваш текущий уровень: <span className="font-semibold text-primary">{progress.currentLevel}</span>.</p>
                  <Select onValueChange={(value) => handleLevelSelect(value as LanguageLevel)} value={progress.currentLevel}>
                      <SelectTrigger className="w-auto h-8 text-xs p-2">
                          <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                      {LANGUAGE_LEVELS.map(level => (
                          <SelectItem key={level} value={level} className="text-xs">
                          {level} (сменить)
                          </SelectItem>
                      ))}
                      </SelectContent>
                  </Select>
              </div>
              

              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-1">
                  Завершено уроков: {completedLessonsCount} из {totalLessonsCount}
                </p>
                <ProgressBar value={progressPercentage} className="w-full h-2.5" />
              </div>

              <Button onClick={findNextLessonForMe} disabled={!progress.currentLevel} className="mt-4">
                <Lightbulb className="mr-2 h-5 w-5" />
                Найти следующий урок для меня
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {recommendedLesson && (
        <Card className="mb-8 bg-primary/10 border-primary shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpenCheck className="mr-3 h-7 w-7" /> Рекомендуемый урок</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">{recommendedLesson.topic} ({recommendedLesson.level})</h3>
            <p className="text-md text-muted-foreground mb-4 whitespace-pre-line">
              Этот урок следующий в вашей программе обучения.
            </p>
            <Button asChild>
              <Link href={`/lessons/${recommendedLesson.id}`}>Начать урок: {recommendedLesson.topic}</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {noMoreLessons && (
         <Card className="mb-8 bg-green-50 dark:bg-green-900/30 border-green-500 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 dark:text-green-300 flex items-center">
              <BarChart3 className="mr-3 h-7 w-7" /> Поздравляем!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md text-muted-foreground">
              Вы прошли все доступные уроки, начиная с вашего текущего уровня. 
              Отличная работа! Вы можете попробовать <Link href="/tests" className="text-primary hover:underline">уровневые тесты</Link> или выбрать уроки для повторения в общем <Link href="/lessons" className="text-primary hover:underline">списке уроков</Link>.
            </p>
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
          <CardDescription>
            Расскажите нам, на чем вы хотели бы сосредоточиться, чтобы мы могли лучше адаптировать уроки.
            {progress.learningGoals && progress.learningGoals.toLowerCase() !== "общее улучшение знаний немецкого языка." && (
                <span className="block mt-1 text-sm">Текущие цели: <span className="font-medium text-primary">{progress.learningGoals}</span></span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            className="w-full p-2 border rounded-md min-h-[100px] text-sm bg-background"
            value={currentGoalsInput}
            onChange={handleGoalsInputChange}
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
