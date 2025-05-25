
import type { Test, Exercise } from '@/types';

export const testB2PartizipialkonstruktionenEinfuehrung: Test = {
  id: 'b2-partizipialkonstruktionen-einfuehrung-test',
  level: 'B2',
  topic: 'Причастные конструкции (Введение) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b2-partizipialkonstruktionen-einfuehrung',
  questions: [
    {
      id: 'b2-partizipialkonstruktionen-einf-test-q1',
      type: 'multiple_choice',
      question: 'Какое Partizip I от глагола "laufen"?',
      options: ['gelaufen', 'laufend', 'lief', 'läuft'],
      correctAnswer: 'laufend',
      explanation: 'Partizip I образуется: Infinitiv + d. laufen → laufend.',
    },
    {
      id: 'b2-partizipialkonstruktionen-einf-test-q2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте: "Das Bild, das von einem berühmten Maler gemalt wurde." → Das von einem berühmten Maler ___ Bild.',
      sentenceParts: ['Das von einem berühmten Maler ', ' Bild.'],
      correctAnswer: 'gemalte',
      explanation: 'Partizip II от "malen" - "gemalt". Склоняется как прилагательное: das gemalte Bild.',
    },
    {
      id: 'b2-partizipialkonstruktionen-einf-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильную трансформацию: "Die Frau, die auf den Bus wartet, liest Zeitung."',
      options: [
        'Die auf den Bus wartende Frau liest Zeitung.',
        'Die auf den Bus gewartete Frau liest Zeitung.',
        'Die Frau wartend auf den Bus liest Zeitung.'
      ],
      correctAnswer: 'Die auf den Bus wartende Frau liest Zeitung.',
      explanation: 'Partizip I "wartend" используется для замены активного действия в настоящем времени.',
    },
    {
      id: 'b2-partizipialkonstruktionen-einf-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий, используя причастную конструкцию: "Потерянный ключ был найден под диваном."',
      prompt: 'Потерянный ключ был найден под диваном.',
      languageDirection: 'to_german',
      correctAnswer: 'Der verlorene Schlüssel wurde unter dem Sofa gefunden.',
      explanation: 'Partizip II "verloren" от "verlieren". "Der verlorene Schlüssel".',
    },
  ],
};
