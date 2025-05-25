
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MOCK_LESSONS } from '@/data/lessons';
import type { VocabularyItem, Lesson } from '@/types';
import { Input } from '@/components/ui/input';
import { SpellCheck } from 'lucide-react';

interface AggregatedVocabularyItem extends VocabularyItem {
  lessonTopic: string;
  lessonId: string;
  level: string;
}

export default function VocabularyPage() {
  const [allVocabulary, setAllVocabulary] = useState<AggregatedVocabularyItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const aggregatedVocab: AggregatedVocabularyItem[] = [];
    MOCK_LESSONS.forEach(lesson => {
      if (lesson.vocabulary) {
        lesson.vocabulary.forEach(vocabItem => {
          aggregatedVocab.push({
            ...vocabItem,
            lessonTopic: lesson.topic,
            lessonId: lesson.id,
            level: lesson.level,
          });
        });
      }
    });
    setAllVocabulary(aggregatedVocab);
    setIsLoading(false);
  }, []);

  const filteredVocabulary = allVocabulary.filter(item =>
    item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.russian.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lessonTopic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen"><p>Загрузка словаря...</p></div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <SpellCheck className="h-10 w-10 text-primary" />
              <CardTitle className="text-3xl font-bold text-primary">Общий словарный запас</CardTitle>
            </div>
            <Input
              type="text"
              placeholder="Поиск по словарю..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/3 text-base"
            />
          </div>
          <CardDescription className="text-lg text-muted-foreground pt-2">
            Здесь собраны все слова и фразы из уроков. Используйте поиск для быстрого нахождения нужных слов.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {filteredVocabulary.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[25%]">Немецкое слово</TableHead>
                  <TableHead className="w-[25%]">Перевод</TableHead>
                  <TableHead className="w-[30%]">Пример</TableHead>
                  <TableHead className="w-[20%]">Урок (Уровень)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVocabulary.map((item, index) => (
                  <TableRow key={`${item.german}-${item.lessonId}-${index}`}>
                    <TableCell className="font-medium">{item.german}</TableCell>
                    <TableCell>{item.russian}</TableCell>
                    <TableCell className="italic text-muted-foreground">{item.example || '–'}</TableCell>
                    <TableCell>
                      <a href={`/lessons/${item.lessonId}`} className="text-primary hover:underline">
                        {item.lessonTopic} ({item.level})
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-center text-muted-foreground py-4">Слова не найдены или словарный запас пуст.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
