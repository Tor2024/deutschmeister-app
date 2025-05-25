
import type { Test } from '@/types';

export const testA1LexikWochentageMonateJahreszeiten: Test = {
  id: 'a1-lexik-wochentage-monate-jahreszeiten-test',
  level: 'A1',
  topic: 'Дни недели, месяцы, времена года (Тест)',
  questions: [
    {
      id: 'a1-lexik-wochentage-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "среда"?',
      options: ['der Montag', 'der Dienstag', 'der Mittwoch', 'der Donnerstag'],
      correctAnswer: 'der Mittwoch',
      explanation: '"Der Mittwoch" означает "среда".',
    },
    {
      id: 'a1-lexik-wochentage-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный месяц: "Nach dem April kommt der ___."',
      sentenceParts: ['Nach dem April kommt der ', '.'],
      correctAnswer: 'Mai',
      explanation: 'После апреля (April) идет май (Mai).',
    },
    {
      id: 'a1-lexik-wochentage-test-q3',
      type: 'multiple_choice',
      question: 'Какое время года "der Winter"?',
      options: ['весна', 'лето', 'осень', 'зима'],
      correctAnswer: 'зима',
      explanation: '"Der Winter" означает "зима".',
    },
    {
      id: 'a1-lexik-wochentage-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Сегодня воскресенье."',
      prompt: 'Сегодня воскресенье.',
      languageDirection: 'to_german',
      correctAnswer: 'Heute ist Sonntag.',
      explanation: '"Сегодня" - "heute", "воскресенье" - "der Sonntag". "Heute ist Sonntag."',
    },
    {
      id: 'a1-lexik-wochentage-test-q5',
      type: 'multiple_choice',
      question: 'Сколько месяцев в году (das Jahr)?',
      options: ['sieben', 'zehn', 'zwölf', 'vier'],
      correctAnswer: 'zwölf',
      explanation: 'В году двенадцать (zwölf) месяцев.',
    },
  ],
};
