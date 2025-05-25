'use client';

import { useUserProgress } from '@/hooks/use-user-progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress"; // Alias to avoid conflict
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MOCK_LESSONS } from '@/data/lessons'; // To get total number of lessons for percentage
import { BarChart, CheckCircle, ListChecks, TrendingUp, Zap } from 'lucide-react';
import Image from "next/image";

export default function UserProgressPage() {
  const { progress, isLoading, clearProgress } = useUserProgress();

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]"><Zap className="animate-spin h-12 w-12 text-primary" /></div>;
  }

  const totalLessons = MOCK_LESSONS.length;
  const completedLessonsCount = progress.completedLessons.length;
  const progressPercentage = totalLessons > 0 ? (completedLessonsCount / totalLessons) * 100 : 0;

  const handleClearProgress = () => {
    if (window.confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие необратимо.')) {
      clearProgress();
      // Optionally, navigate to home or refresh
      // window.location.href = '/'; // Or use Next.js router if preferred
      alert("Прогресс сброшен."); // Consider using toast
    }
  };


  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="mb-8 shadow-lg">
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
                <CardTitle className="text-xl flex items-center"><CheckCircle className="mr-2 h-6 w-6 text-primary"/> Список пройденных уроков</CardTitle>
            </CardHeader>
            <CardContent>
                {completedLessonsCount > 0 ? (
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        {progress.completedLessons.map(lessonId => {
                            const lesson = MOCK_LESSONS.find(l => l.id === lessonId);
                            return <li key={lessonId}>{lesson ? lesson.topic : lessonId}</li>;
                        })}
                    </ul>
                ) : (
                    <p className="text-muted-foreground">Вы еще не завершили ни одного урока. <Link href="/lessons" className="text-primary hover:underline">Начните сейчас!</Link></p>
                )}
            </CardContent>
          </Card>

          {/* Placeholder for Test Results and Exercise Mastery */}
          <div className="text-center p-6 border border-dashed rounded-lg">
            <Image src="https://placehold.co/600x300.png" alt="Детальная статистика в разработке" width={600} height={300} className="rounded-md mx-auto mb-4" data-ai-hint="analytics dashboard"/>
            <p className="text-lg text-muted-foreground">
              Более детальная статистика по тестам и освоению упражнений появится здесь в ближайшее время.
            </p>
          </div>

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
