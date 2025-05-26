
'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress as ProgressBar } from "@/components/ui/progress";
import { useUserProgress } from '@/hooks/use-user-progress';
import { LANGUAGE_LEVELS, type LanguageLevel } from '@/lib/constants';
import { Lightbulb, Zap, BookOpenCheck, BarChart3, Edit3, GraduationCap, BookOpen } from 'lucide-react'; // Added GraduationCap, BookOpen
import Link from 'next/link';
// import Image from 'next/image'; // Image component is no longer needed here
import { MOCK_LESSONS, type Lesson } from '@/data/lessons';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { generateAdaptiveLesson, type AdaptiveLessonInput, type AdaptiveLessonOutput } from '@/ai/flows/adaptive-learning-path';

export default function DashboardPage() {
  const { progress, isLoading, setCurrentLevel, setLearningGoals } = useUserProgress();
  const [recommendedLesson, setRecommendedLesson] = useState<Lesson | null>(null);
  const [noMoreLessons, setNoMoreLessons] = useState(false);
  const [currentGoalsInput, setCurrentGoalsInput] = useState('');
  const [isSuggestingLesson, setIsSuggestingLesson] = useState(false); // For manual button click
  const [isAutoSuggesting, setIsAutoSuggesting] = useState(false); // For automatic suggestion on load
  const [suggestionError, setSuggestionError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    setCurrentGoalsInput(progress.learningGoals || "Общее улучшение знаний немецкого языка.");
  }, [progress.learningGoals]);

  // Function for AI-based lesson suggestion
  const fetchAndSetSuggestedLesson = useCallback(async (isAuto: boolean = false) => {
    if (!progress.currentLevel) {
      if (!isAuto) { // Only toast if it's a manual action and level is not set
        toast({
          title: "Уровень не выбран",
          description: "Пожалуйста, сначала выберите ваш текущий уровень.",
          variant: "destructive",
        });
      }
      return;
    }
    if (isAuto) setIsAutoSuggesting(true); else setIsSuggestingLesson(true);
    setSuggestionError(null);
    setRecommendedLesson(null);
    setNoMoreLessons(false);

    try {
      const completedLessonTopics = progress.completedLessons.map(id => MOCK_LESSONS.find(l => l.id === id)?.topic || '');
      const testResultsByTopic: Record<string, number> = {};
      Object.entries(progress.testResults).forEach(([testId, result]) => {
        // Assuming test ID might be related to lesson topic or that AI can infer from test ID
        // This part might need refinement based on how test IDs relate to topics
        const lessonForTest = MOCK_LESSONS.find(l => l.id === testId || l.exercises.some(ex => ex.id.startsWith(testId)));
        if (lessonForTest) {
          testResultsByTopic[lessonForTest.topic] = result.score;
        }
      });

      const input: AdaptiveLessonInput = {
        currentLevel: progress.currentLevel,
        completedLessons: completedLessonTopics.filter(topic => !!topic),
        testResults: testResultsByTopic,
        learningGoals: progress.learningGoals || "Общее улучшение знаний немецкого языка.",
      };
      const suggestion: AdaptiveLessonOutput = await generateAdaptiveLesson(input);

      if (suggestion && suggestion.lessonTopic) {
        const foundLesson = MOCK_LESSONS.find(
          lesson => lesson.topic.trim().toLowerCase() === suggestion.lessonTopic.trim().toLowerCase()
        );

        if (foundLesson) {
          setRecommendedLesson(foundLesson);
          if (!isAuto) {
            toast({
              title: "Рекомендован урок от ИИ!",
              description: `"${foundLesson.topic}" (${foundLesson.level}). ${suggestion.reason}`,
              duration: 7000,
            });
          }
        } else {
          // Try a more fuzzy search if exact match fails
          const lowerSuggestionTopic = suggestion.lessonTopic.trim().toLowerCase();
          const commonKeywords = [
            "артикли", "artikel", "präsens", "plural", "akkusativ", "dativ", "genitiv",
            "modalverben", "модальные глаголы", "perfekt", "präteritum", "plusquamperfekt",
            "nebensätze", "придаточные предложения", "relativsätze", "konjunktiv", "passiv",
            "склонение прилагательных", "adjektivdeklination", "порядок слов", "satzbau",
            "указательные местоимения", "demonstrativpronomen"
          ];

          let keywordMatchLesson: Lesson | null = null;
          for (const keyword of commonKeywords) {
            if (lowerSuggestionTopic.includes(keyword)) {
              keywordMatchLesson = MOCK_LESSONS.find(lesson =>
                lesson.topic.toLowerCase().includes(keyword) &&
                (lesson.level === progress.currentLevel || LANGUAGE_LEVELS.indexOf(lesson.level) === LANGUAGE_LEVELS.indexOf(progress.currentLevel!) + 1) &&
                !progress.completedLessons.includes(lesson.id)
              ) || null;
              if (keywordMatchLesson) break;
            }
          }

          if (keywordMatchLesson) {
            setRecommendedLesson(keywordMatchLesson);
             if (!isAuto) {
              toast({
                title: "Рекомендован урок от ИИ (похожая тема):",
                description: `"${keywordMatchLesson.topic}" (${keywordMatchLesson.level}). ${suggestion.reason}`,
                duration: 7000,
              });
            }
          } else {
            setNoMoreLessons(true); // Or set a specific message about AI suggestion not found
            setRecommendedLesson(null); // Clear any previous recommendation
             if (!isAuto) {
              toast({
                title: "Рекомендация ИИ",
                description: `ИИ предложил тему: "${suggestion.lessonTopic}". ${suggestion.reason}. К сожалению, урок с таким точным названием не найден. Попробуйте "Найти следующий урок".`,
                variant: "default",
                duration: 10000,
              });
            }
            // Store the AI's raw suggestion if needed for display
            // setAiRawSuggestion({ topic: suggestion.lessonTopic, reason: suggestion.reason });
          }
        }
      } else {
        if (!isAuto) {
          toast({ title: "ИИ не смог предложить урок", description: "Пожалуйста, попробуйте позже или выберите урок из списка.", variant: "default" });
        }
      }
    } catch (error) {
      console.error("AI lesson suggestion error:", error);
      setSuggestionError("Не удалось получить рекомендацию от ИИ. Пожалуйста, попробуйте позже.");
      if (!isAuto) {
        toast({ title: "Ошибка рекомендации", description: "Не удалось связаться с ИИ.", variant: "destructive" });
      }
    } finally {
      if (isAuto) setIsAutoSuggesting(false); else setIsSuggestingLesson(false);
    }
  }, [progress.currentLevel, progress.completedLessons, progress.testResults, progress.learningGoals, toast]);

  // Uncomment to enable automatic suggestion on load if user has progress
  // useEffect(() => {
  //   if (progress.currentLevel && (progress.completedLessons.length > 0 || Object.keys(progress.testResults).length > 0 || progress.learningGoals !== "Общее улучшение знаний немецкого языка.")) {
  //     // fetchAndSetSuggestedLesson(true); // Auto-fetch AI suggestion
  //   }
  // }, [fetchAndSetSuggestedLesson, progress.currentLevel, progress.completedLessons, progress.testResults, progress.learningGoals]);


  // Simplified "next lesson" logic
  const findNextLessonForMe = useCallback(() => {
    setRecommendedLesson(null);
    setNoMoreLessons(false);
    setSuggestionError(null);
    setIsSuggestingLesson(true); // Use the same loading state as AI for consistency

    if (!progress.currentLevel) {
      toast({
        title: "Уровень не выбран",
        description: "Пожалуйста, сначала выберите ваш текущий уровень владения немецким.",
        variant: "destructive",
      });
      setIsSuggestingLesson(false);
      return;
    }

    const userLevelIndex = LANGUAGE_LEVELS.indexOf(progress.currentLevel);
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
      setRecommendedLesson(null);
      toast({
        title: "Все уроки пройдены!",
        description: "Поздравляем! Вы прошли все доступные уроки, начиная с вашего текущего уровня. Попробуйте уровневые тесты или выберите уроки для повторения.",
        duration: 7000,
      });
    }
    setIsSuggestingLesson(false);
  }, [progress.currentLevel, progress.completedLessons, toast]);


  const handleLevelSelect = (level: LanguageLevel) => {
    setCurrentLevel(level);
    setRecommendedLesson(null);
    setNoMoreLessons(false);
    setSuggestionError(null);
    toast({
        title: "Уровень изменен",
        description: `Ваш текущий уровень установлен на ${level}.`,
    });
  };

  const handleGoalsInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentGoalsInput(event.target.value);
  };

  const handleSaveGoals = () => {
    setLearningGoals(currentGoalsInput);
    toast({ title: "Цели сохранены!", description: "Ваши учебные цели обновлены." });
    // Optionally, trigger AI suggestion if goals changed significantly
    // fetchAndSetSuggestedLesson(true);
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
          <div className="p-2">
            <GraduationCap className="h-16 w-16 text-primary" />
          </div>
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
                <p className="text-md">Ваш текущий уровень: </p>
                  <Select onValueChange={(value) => handleLevelSelect(value as LanguageLevel)} value={progress.currentLevel}>
                      <SelectTrigger className="w-auto h-8 text-sm p-2 font-semibold text-primary">
                          <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                      {LANGUAGE_LEVELS.map(level => (
                          <SelectItem key={level} value={level} className="text-sm">
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

              <div className="flex flex-wrap gap-2 mt-4">
                <Button onClick={findNextLessonForMe} disabled={isSuggestingLesson || isAutoSuggesting}>
                  <Lightbulb className="mr-2 h-5 w-5" />
                  {isSuggestingLesson ? "Ищем урок..." : "Найти следующий урок для меня"}
                </Button>
                <Button onClick={() => fetchAndSetSuggestedLesson(false)} disabled={isSuggestingLesson || isAutoSuggesting} variant="outline">
                  <Zap className="mr-2 h-5 w-5" />
                  {isSuggestingLesson ? "ИИ думает..." : "Предложить урок от ИИ"}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {suggestionError && (
        <Card className="mb-8 bg-red-50 dark:bg-red-900/30 border-red-500 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-red-700 dark:text-red-300">Ошибка рекомендации</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md text-red-600 dark:text-red-400">{suggestionError}</p>
          </CardContent>
        </Card>
      )}

      {recommendedLesson && (
        <Card className="mb-8 bg-primary/10 border-primary shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpenCheck className="mr-3 h-7 w-7" /> Рекомендуемый урок</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-1">{recommendedLesson.topic} ({recommendedLesson.level})</h3>
            <Button asChild className="mt-3">
              <Link href={`/lessons/${recommendedLesson.id}`}>Начать урок: {recommendedLesson.topic}</Link>
            </Button>
          </CardContent>
        </Card>
      )}
      
      {noMoreLessons && !recommendedLesson && progress.currentLevel && (
         <Card className="mb-8 bg-green-50 dark:bg-green-900/30 border-green-500 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700 dark:text-green-300 flex items-center">
              <Zap className="mr-3 h-7 w-7" /> Поздравляем!</CardTitle>
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
            <div className="flex justify-center items-center mb-4 h-32 text-primary">
              <BookOpen className="h-20 w-20" />
            </div>
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
             <div className="flex justify-center items-center mb-4 h-32 text-accent">
              <BarChart3 className="h-20 w-20" />
            </div>
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
          <CardTitle className="text-xl flex items-center">
            <Edit3 className="mr-2 h-5 w-5" />
            Настройте свои цели обучения
          </CardTitle>
          <CardDescription>
            Расскажите нам, на чем вы хотели бы сосредоточиться, чтобы мы могли лучше адаптировать ваше обучение.
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
