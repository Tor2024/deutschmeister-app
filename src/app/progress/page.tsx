
'use client';

import { useUserProgress } from '@/hooks/use-user-progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress"; // Alias to avoid conflict
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MOCK_LESSONS } from '@/data/lessons';
import type { Exercise } from '@/types';
import { BarChart, CheckCircle, ListChecks, TrendingUp, Zap, Activity, Award } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function UserProgressPage() {
  const { progress, isLoading, clearProgress } = useUserProgress();
  const { toast } = useToast();

  if (isLoading) {
    return <div className="container mx-auto py-8 px-4 flex justify-center items-center min-h-[calc(100vh-10rem)]"><Zap className="animate-spin h-12 w-12 text-primary" /></div>;
  }

  const totalLessons = MOCK_LESSONS.length;
  const completedLessonsCount = progress.completedLessons?.length || 0;
  const progressPercentage = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 100 : 0;

  const handleClearProgress = () => {
    if (window.confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие необратимо.')) {
      clearProgress();
      toast({
        title: "Прогресс сброшен",
        description: "Все ваши данные обучения были удалены.",
      });
    }
  };

  const getExerciseDetails = (exerciseId: string): { lessonTopic: string; exerciseQuestion: string, lessonId: string | null } => {
    for (const lesson of MOCK_LESSONS) {
      const standardExercise = lesson.exercises.find(ex => ex.id === exerciseId);
      if (standardExercise) {
        return {
          lessonTopic: lesson.topic,
          exerciseQuestion: standardExercise.question,
          lessonId: lesson.id
        };
      }
      if (lesson.aiGeneratedExercises) {
        const aiExercise = lesson.aiGeneratedExercises.find(ex => ex.id === exerciseId);
        if (aiExercise) {
          return {
            lessonTopic: lesson.topic,
            exerciseQuestion: aiExercise.question,
            lessonId: lesson.id
          };
        }
      }
    }
    // Fallback if exerciseId not found in standard or AI exercises by direct ID match
    // Improved parsing for AI exercise IDs like 'ai-ex-a1-lexik-familie-1678886400000-0'
    if (exerciseId.startsWith('ai-ex-')) {
      const parts = exerciseId.split('-');
      if (parts.length >= 5) { // "ai", "ex", lesson_id_part1, ..., lesson_id_partN, timestamp, index
          const lessonIdCandidateParts = parts.slice(2, parts.length - 2);
          const lessonIdCandidate = lessonIdCandidateParts.join('-');
          const aiLesson = MOCK_LESSONS.find(l => l.id === lessonIdCandidate);
          if (aiLesson) {
            return {
              lessonTopic: aiLesson.topic,
              exerciseQuestion: "Упражнение от ИИ (аудио)", // More descriptive
              lessonId: aiLesson.id
            }
          }
      }
    }
    return { lessonTopic: "Неизвестный урок", exerciseQuestion: `ID: ${exerciseId.substring(0,30)}...`, lessonId: null };
  };

  const exerciseAttemptsArray = progress.exerciseAttempts 
    ? Object.entries(progress.exerciseAttempts).map(([id, data]) => ({
        id,
        ...data,
        ...getExerciseDetails(id)
      }))
    : [];

  return (
    <div className="container mx-auto py-8 px-4">
      <Card key={JSON.stringify(progress.exerciseAttempts)} className="mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary flex items-center">
            <BarChart className="mr-3 h-8 w-8" /> Ваш Прогресс в DeutschMeister
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Отслеживайте свои достижения и продолжайте двигаться к цели!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center"><ListChecks className="mr-2 h-6 w-6 text-primary" />Завершенные уроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary">{completedLessonsCount} <span className="text-lg font-normal text-muted-foreground">из {totalLessons}</span></p>
                <ProgressBar value={progressPercentage} className="w-full mt-2 h-3" />
                <p className="text-sm text-muted-foreground mt-1">{Math.round(progressPercentage)}% уроков пройдено</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center"><TrendingUp className="mr-2 h-6 w-6 text-accent" />Текущий уровень</CardTitle>
              </CardHeader>
              <CardContent>
                {progress.currentLevel ? (
                  <p className="text-4xl font-bold text-accent">{progress.currentLevel}</p>
                ) : (
                  <p className="text-lg text-muted-foreground">Уровень не выбран. <Link href="/" className="text-primary hover:underline">Выбрать на главной.</Link></p>
                )}
                <p className="text-sm text-muted-foreground mt-1">Продолжайте учиться для достижения следующего уровня.</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
                <CardTitle className="text-xl flex items-center"><CheckCircle className="mr-2 h-6 w-6 text-green-600 dark:text-green-400"/> Список пройденных уроков</CardTitle>
            </CardHeader>
            <CardContent>
                {completedLessonsCount > 0 && progress.completedLessons ? (
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {progress.completedLessons.map(lessonId => {
                            const lesson = MOCK_LESSONS.find(l => l.id === lessonId);
                            return <li key={lessonId}>{lesson ? `${lesson.topic} (${lesson.level})` : lessonId}</li>;
                        })}
                    </ul>
                ) : (
                    <p className="text-muted-foreground">Вы еще не завершили ни одного урока. <Link href="/lessons" className="text-primary hover:underline">Перейти к урокам</Link></p>
                )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center"><Activity className="mr-2 h-6 w-6 text-blue-500" />Статистика по упражнениям</CardTitle>
              <CardDescription>Отслеживайте ваш прогресс в выполнении отдельных упражнений.</CardDescription>
            </CardHeader>
            <CardContent>
              {exerciseAttemptsArray.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[30%] sm:w-[25%]">Урок</TableHead>
                      <TableHead className="w-[40%] sm:w-[45%]">Вопрос (начало)</TableHead>
                      <TableHead className="text-center w-[15%] sm:w-[15%]">Попыток</TableHead>
                      <TableHead className="text-center w-[15%] sm:w-[15%]">Освоено</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exerciseAttemptsArray.map((attempt) => (
                      <TableRow key={attempt.id}>
                        <TableCell className="font-medium">
                           {attempt.lessonId ? (
                            <Link href={`/lessons/${attempt.lessonId}`} className="text-primary hover:underline">
                              {attempt.lessonTopic}
                            </Link>
                          ) : (
                            attempt.lessonTopic
                          )}
                        </TableCell>
                        <TableCell>{attempt.exerciseQuestion.substring(0, 70)}{attempt.exerciseQuestion.length > 70 ? '...' : ''}</TableCell>
                        <TableCell className="text-center">{attempt.attemptsCount}</TableCell>
                        <TableCell className="text-center">
                          {attempt.mastered ? (
                            <Award className="h-5 w-5 text-green-500 dark:text-green-400 inline" />
                          ) : (
                            <TrendingUp className="h-5 w-5 text-yellow-500 dark:text-yellow-400 inline" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-muted-foreground">Вы еще не приступали к упражнениям или ваша статистика по ним не зафиксирована. <Link href="/lessons" className="text-primary hover:underline">Начать урок!</Link></p>
              )}
            </CardContent>
          </Card>

        </CardContent>
         <CardFooter>
          <Button variant="destructive" onClick={handleClearProgress}>
            Сбросить весь прогресс
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
