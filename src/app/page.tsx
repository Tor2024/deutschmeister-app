
'use client';

import { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress as ProgressBar } from "@/components/ui/progress";
import { useUserProgress } from '@/hooks/use-user-progress';
import { LANGUAGE_LEVELS, type LanguageLevel } from '@/lib/constants';
import { Lightbulb, Zap, BookOpen, BarChart3, Edit3, GraduationCap, Users, BookOpenCheck } from 'lucide-react'; // Added BookOpenCheck
import Link from 'next/link';
import { MOCK_LESSONS, type Lesson } from '@/data/lessons';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
// import { generateAdaptiveLesson, type AdaptiveLessonInput, type AdaptiveLessonOutput } from '@/ai/flows/adaptive-learning-path';

const VISITOR_COUNT_KEY = 'deutschMeisterVisitorCount';
const BASE_VISITOR_COUNT = 1337; // Начальное значение, если в localStorage пусто

export default function DashboardPage() {
  const { progress, isLoading, setCurrentLevel, setLearningGoals } = useUserProgress();
  const [recommendedLesson, setRecommendedLesson] = useState<Lesson | null>(null);
  const [noMoreLessons, setNoMoreLessons] = useState(false);
  // const [isSuggestingLesson, setIsSuggestingLesson] = useState(false);
  // const [suggestionError, setSuggestionError] = useState<string | null>(null);
  const { toast } = useToast();
  const [visitorCount, setVisitorCount] = useState<number>(BASE_VISITOR_COUNT);
  const [currentGoalsInput, setCurrentGoalsInput] = useState(progress.learningGoals || "Общее улучшение знаний немецкого языка.");

  useEffect(() => {
    if (progress.learningGoals) {
      setCurrentGoalsInput(progress.learningGoals);
    }
  }, [progress.learningGoals]);

  useEffect(() => {
    let currentCount = parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0');
    if (currentCount < BASE_VISITOR_COUNT) {
      currentCount = BASE_VISITOR_COUNT;
    }
    // Инкрементируем счетчик на небольшое случайное число при каждой загрузке
    const increment = Math.floor(Math.random() * 3) + 1;
    currentCount += increment;
    localStorage.setItem(VISITOR_COUNT_KEY, currentCount.toString());
    setVisitorCount(currentCount);
  }, []);


  const findNextLessonForMe = useCallback(() => {
    // setIsSuggestingLesson(true);
    setRecommendedLesson(null);
    setNoMoreLessons(false);
    // setSuggestionError(null);

    let lessonsToConsider = MOCK_LESSONS;
    if (progress.currentLevel) {
      const userLevelIndex = LANGUAGE_LEVELS.indexOf(progress.currentLevel);
      lessonsToConsider = MOCK_LESSONS.filter(lesson => {
        const lessonLevelIndex = LANGUAGE_LEVELS.indexOf(lesson.level);
        return lessonLevelIndex >= userLevelIndex;
      });
    } else {
      // Если уровень не выбран, предлагаем с А1
      lessonsToConsider = MOCK_LESSONS.filter(lesson => LANGUAGE_LEVELS.indexOf(lesson.level) >= 0);
    }
    
    // Сортируем уроки в соответствии с их порядком в MOCK_LESSONS
    // (предполагается, что MOCK_LESSONS уже отсортирован в желаемом порядке)

    const nextLesson = lessonsToConsider.find(
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
    // setIsSuggestingLesson(false);
  }, [progress.currentLevel, progress.completedLessons, toast]);


  const handleLevelSelect = (level: LanguageLevel) => {
    setCurrentLevel(level);
    setRecommendedLesson(null); 
    setNoMoreLessons(false);
    // setSuggestionError(null);
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
  };

  if (isLoading) {
    return <div className="container mx-auto py-8 px-4 flex justify-center items-center min-h-[calc(100vh-10rem)]"><Zap className="animate-spin h-12 w-12 text-primary" /></div>;
  }

  const completedLessonsCount = progress.completedLessons?.length || 0;
  const totalLessonsCount = MOCK_LESSONS.length;
  const progressPercentage = totalLessonsCount > 0 ? (completedLessonsCount / totalLessonsCount) * 100 : 0;

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8 shadow-lg">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-2">
          <div>
            <CardTitle className="text-3xl font-bold">Добро пожаловать в DeutschMeister!</CardTitle>
            <p className="text-lg text-muted-foreground mt-1">
              Ваш интеллектуальный помощник в изучении немецкого языка! Мы поможем вам освоить грамматику и лексику, создавая персонализированные задания при помощи искусственного интеллекта и отслеживая ваш прогресс на пути к успеху. **Начните учиться бесплатно и без регистрации!**
            </p>
          </div>
          <div className="p-2 flex-shrink-0">
             <div className="flex justify-center items-center h-24 w-24 text-primary">
                <GraduationCap className="h-20 w-20" />
            </div>
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
                <Button onClick={findNextLessonForMe} > 
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Найти следующий урок для меня
                </Button>
                 {/* <Button onClick={() => fetchAndSetSuggestedLesson(false)} disabled={isSuggestingLesson || !progress.currentLevel}>
                  <Lightbulb className="mr-2 h-5 w-5" />
                  {isSuggestingLesson ? "Подбираем урок..." : "Предложить урок от ИИ"}
                </Button> */}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* {suggestionError && (
        <Card className="mb-8 bg-red-50 dark:bg-red-900/30 border-red-500 shadow-md">
          <CardHeader><CardTitle className="text-xl text-red-700 dark:text-red-300">Ошибка</CardTitle></CardHeader>
          <CardContent><p className="text-md text-red-600 dark:text-red-400">{suggestionError}</p></CardContent>
        </Card>
      )} */}

      {recommendedLesson && (
        <Card className="mb-8 bg-primary/10 border-primary shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpenCheck className="mr-3 h-7 w-7" /> Рекомендуемый урок</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-1">{recommendedLesson.topic} ({recommendedLesson.level})</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Мы подобрали для вас следующий урок на основе вашего прогресса.
            </p>
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

      <Card className="mb-8 shadow-md">
        <CardHeader>
            <CardTitle className="text-xl flex items-center">
                <Users className="mr-2 h-5 w-5 text-accent" />
                Наше сообщество
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-3xl font-semibold text-center text-primary">
                Нас уже {visitorCount.toLocaleString('ru-RU')}!
            </p>
            <p className="text-sm text-muted-foreground text-center mt-1">
                Присоединяйтесь к изучению немецкого вместе с DeutschMeister.
            </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">Уроки</CardTitle>
            <CardDescription>Просмотрите доступные уроки по уровням.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="flex justify-center items-center h-20 text-primary">
              <BookOpen className="h-16 w-16" />
            </div>
            <p className="text-center mt-2">Откройте для себя структурированные уроки, охватывающие грамматику, лексику и многое другое.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
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
             <div className="flex justify-center items-center h-20 text-accent">
              <BarChart3 className="h-16 w-16" />
            </div>
             <p className="text-center mt-2">Следите за своим прогрессом, просматривайте результаты тестов и завершенные уроки.</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
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

    