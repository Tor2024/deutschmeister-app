
'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress as ProgressBar } from "@/components/ui/progress";
import { useUserProgress } from '@/hooks/use-user-progress';
import { generateAdaptiveLesson, type AdaptiveLessonInput, type AdaptiveLessonOutput } from '@/ai/flows/adaptive-learning-path';
import { LANGUAGE_LEVELS, type LanguageLevel } from '@/lib/constants';
import { Lightbulb, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_LESSONS } from '@/data/lessons';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';

export default function DashboardPage() {
  const { progress, isLoading, setCurrentLevel, setLearningGoals } = useUserProgress();
  const [suggestedLesson, setSuggestedLesson] = useState<AdaptiveLessonOutput | null>(null);
  const [suggestedLessonId, setSuggestedLessonId] = useState<string | null>(null);
  const [isGeneratingLesson, setIsGeneratingLesson] = useState(false);
  const [currentGoalsInput, setCurrentGoalsInput] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    setCurrentGoalsInput(progress.learningGoals || "Общее улучшение знаний немецкого языка.");
  }, [progress.learningGoals]);

  const fetchAndSetSuggestedLesson = useCallback(async (isAutoFetch = false) => {
    if (!progress.currentLevel) {
      if (!isAutoFetch) { // Only show toast if user explicitly clicked
        toast({ title: "Ошибка", description: "Пожалуйста, сначала выберите ваш текущий уровень.", variant: "destructive" });
      }
      return;
    }
    setIsGeneratingLesson(true);
    setSuggestedLesson(null);
    setSuggestedLessonId(null);
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

      if (suggestion && suggestion.lessonTopic) {
        const suggestedTopicLower = suggestion.lessonTopic.trim().toLowerCase();
        let matchedLesson = MOCK_LESSONS.find(
          (l) => l.topic.trim().toLowerCase() === suggestedTopicLower
        );

        if (!matchedLesson) {
          // Attempt a less strict match
          const commonKeywords = [
            "dativ", "датив", "akkusativ", "аккузатив", "genitiv", "генитив",
            "präpositionen", "предлоги", "artikel", "артикли", "plural", "множественное",
            "perfekt", "перфект", "präteritum", "претерит", "modalverben", "модальные",
            "nebensätze", "придаточные", "relativsätze", "относительные", "konjunktiv", "конъюнктив",
            "passiv", "пассив", "указательные местоимения", "demonstrativpronomen", "dieser"
          ];

          matchedLesson = MOCK_LESSONS.find((l) => {
            const lessonTopicLower = l.topic.trim().toLowerCase();
            if (lessonTopicLower.includes(suggestedTopicLower) || suggestedTopicLower.includes(lessonTopicLower)) {
              return true;
            }
            for (const term of commonKeywords) {
              if (suggestedTopicLower.includes(term) && lessonTopicLower.includes(term)) {
                 if (progress.currentLevel && (l.level === progress.currentLevel ||
                     (LANGUAGE_LEVELS.indexOf(l.level) === LANGUAGE_LEVELS.indexOf(progress.currentLevel) + 1)) &&
                     !progress.completedLessons.includes(l.id)
                 ) {
                    return true;
                 }
              }
            }
            return false;
          });
        }

        setSuggestedLessonId(matchedLesson ? matchedLesson.id : null);

        if (!isAutoFetch || (isAutoFetch && matchedLesson)) {
            toast({
                title: "Рекомендация ИИ",
                description: matchedLesson
                    ? `Предложен урок: ${suggestion.lessonTopic}`
                    : `ИИ предложил тему "${suggestion.lessonTopic}", но точного соответствия в уроках не найдено.`,
                duration: matchedLesson ? 4000 : 6000
            });
        }
      } else if (!isAutoFetch) {
        toast({ title: "Ошибка", description: "Не удалось получить рекомендацию от ИИ.", variant: "destructive" });
      }
    } catch (error) {
      console.error("Failed to generate adaptive lesson:", error);
      if (!isAutoFetch) {
        toast({ title: "Ошибка генерации урока", description: "Не удалось сгенерировать рекомендуемый урок. Попробуйте позже.", variant: "destructive" });
      }
    } finally {
      setIsGeneratingLesson(false);
    }
  }, [progress.currentLevel, progress.completedLessons, progress.testResults, progress.learningGoals, toast]);

  useEffect(() => {
    const shouldAutoFetchSuggestion = () => {
      if (!isLoading && progress.currentLevel && !isGeneratingLesson && !suggestedLesson) {
        return progress.completedLessons.length > 0 ||
               Object.keys(progress.testResults).length > 0 ||
               (progress.learningGoals && progress.learningGoals !== "Общее улучшение знаний немецкого языка.") ||
               !suggestedLesson;
      }
      return false;
    };

    if (shouldAutoFetchSuggestion()) {
      // fetchAndSetSuggestedLesson(true); // Auto-fetch, disabled for now to avoid too many calls
    }
  }, [isLoading, progress, fetchAndSetSuggestedLesson, isGeneratingLesson, suggestedLesson]);


  const handleLevelSelect = (level: LanguageLevel) => {
    setCurrentLevel(level);
    setSuggestedLesson(null);
    setSuggestedLessonId(null);
    // fetchAndSetSuggestedLesson(true); // Fetch suggestion for new level, disabled for now
  };

  const handleGoalsInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentGoalsInput(event.target.value);
  };

  const handleSaveGoals = () => {
    setLearningGoals(currentGoalsInput);
    toast({ title: "Цели сохранены!", description: "Ваши учебные цели обновлены. ИИ учтет их при следующей рекомендации." });
    if (progress.currentLevel) {
      // fetchAndSetSuggestedLesson(true); // Re-fetch based on new goals, disabled for now
    }
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
              <p className="text-md">Ваш текущий уровень: <span className="font-semibold text-primary">{progress.currentLevel}</span>.
                <Select onValueChange={(value) => handleLevelSelect(value as LanguageLevel)} value={progress.currentLevel}>
                    <SelectTrigger className="w-auto inline-flex h-7 text-xs ml-2 p-1.5">
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
              </p>

              <div className="mt-2">
                <p className="text-sm text-muted-foreground mb-1">
                  Завершено уроков: {completedLessonsCount} из {totalLessonsCount}
                </p>
                <ProgressBar value={progressPercentage} className="w-full h-2.5" />
              </div>

              <Button onClick={() => fetchAndSetSuggestedLesson(false)} disabled={isGeneratingLesson || !progress.currentLevel} className="mt-4">
                <Lightbulb className="mr-2 h-5 w-5" />
                {isGeneratingLesson ? "Подбираем урок..." : "Предложить следующий урок"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {suggestedLesson && (
        <Card className="mb-8 bg-primary/10 border-primary shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Lightbulb className="mr-3 h-7 w-7" /> Рекомендуемый урок от ИИ</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">{suggestedLesson.lessonTopic}</h3>
            <p className="text-md text-muted-foreground mb-4">{suggestedLesson.reason}</p>
            {suggestedLessonId ? (
              <Button asChild>
                <Link href={`/lessons/${suggestedLessonId}`}>Начать урок: {suggestedLesson.lessonTopic}</Link>
              </Button>
            ) : (
              <p className="text-sm text-destructive">К сожалению, урок с таким точным названием не найден в нашей базе. Попробуйте поискать похожие темы в общем <Link href="/lessons" className="underline hover:text-primary/80">списке уроков</Link>.</p>
            )}
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
            Текущие цели: <span className="font-medium text-primary">{progress.learningGoals || "не заданы"}</span>
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

