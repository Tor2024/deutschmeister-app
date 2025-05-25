
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MOCK_LESSONS } from '@/data/lessons'; 
import type { Lesson, LanguageLevel } from '@/types';
import { useUserProgress } from '@/hooks/use-user-progress';
import { LANGUAGE_LEVELS } from '@/lib/constants';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, BookOpenCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LessonsPage() {
  const [lessons] = useState<Lesson[]>(MOCK_LESSONS);
  const [filteredLevel, setFilteredLevel] = useState<LanguageLevel | 'all'>('all');
  const { progress, isLoading } = useUserProgress();

  const lessonsToDisplay = lessons
    .filter(lesson => filteredLevel === 'all' || lesson.level === filteredLevel)
    .map(lesson => {
      const isCompleted = progress.completedLessons.includes(lesson.id);
      let isFullyMastered = false;
      if (isCompleted && lesson.exercises && lesson.exercises.length > 0) {
        isFullyMastered = lesson.exercises.every(
          ex => progress.exerciseAttempts[ex.id]?.mastered === true
        );
      }
      return { ...lesson, isCompleted, isFullyMastered };
    });

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><p>Загрузка уроков...</p></div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary flex items-center">
          <BookOpenCheck className="mr-3 h-8 w-8" />
          Уроки немецкого языка
        </h1>
        <div className="w-full md:w-auto">
          <Select 
            value={filteredLevel}
            onValueChange={(value) => setFilteredLevel(value as LanguageLevel | 'all')}
          >
            <SelectTrigger className="w-full md:w-[200px] text-base">
              <SelectValue placeholder="Фильтр по уровню" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="text-base">Все уровни</SelectItem>
              {LANGUAGE_LEVELS.map(level => (
                <SelectItem key={level} value={level} className="text-base">{level}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {lessonsToDisplay.length === 0 ? (
        <p className="text-center text-lg text-muted-foreground">Нет уроков для выбранного уровня.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessonsToDisplay.map(lesson => (
              <Card 
                key={lesson.id} 
                className={cn(
                  "flex flex-col shadow-md hover:shadow-lg transition-shadow",
                  lesson.isFullyMastered ? "bg-green-50 border-green-400" : 
                  lesson.isCompleted ? "border-accent" : "border-border"
                )}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl mb-1">{lesson.topic}</CardTitle>
                    <Badge 
                      variant={lesson.isFullyMastered ? "default" : lesson.isCompleted ? "default" : "secondary"} 
                      className={cn(
                        lesson.isFullyMastered ? "bg-green-500 text-white" : 
                        lesson.isCompleted && "bg-accent text-accent-foreground"
                      )}
                    >
                      {lesson.level}
                    </Badge>
                  </div>
                  <CardDescription>Уровень: {lesson.level}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-4">{lesson.theory}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4">
                  <Button asChild variant={lesson.isFullyMastered ? "default" : "default"} 
                          className={cn(lesson.isFullyMastered && "bg-green-600 hover:bg-green-700")}>
                    <Link href={`/lessons/${lesson.id}`}>
                      {lesson.isFullyMastered ? 'Отлично освоено!' : lesson.isCompleted ? 'Повторить урок' : 'Начать урок'}
                    </Link>
                  </Button>
                  {lesson.isCompleted && <CheckCircle2 className={cn("h-6 w-6", lesson.isFullyMastered ? "text-green-600" : "text-accent")} />}
                </CardFooter>
              </Card>
            )
          )}
        </div>
      )}
    </div>
  );
}
