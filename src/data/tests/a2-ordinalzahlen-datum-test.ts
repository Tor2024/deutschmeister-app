
import type { Test } from '@/types';

export const testA2OrdinalzahlenDatum: Test = {
  id: 'a2-ordinalzahlen-datum-test',
  level: 'A2',
  topic: 'Порядковые числительные и даты (Тест)',
  questions: [
    {
      id: 'a2-ordinal-datum-test-q1',
      type: 'multiple_choice',
      question: 'Как правильно написать "седьмой" по-немецки?',
      options: ['der siebente', 'der siebte', 'der siebste', 'der siebente'],
      correctAnswer: 'der siebte',
      explanation: 'Порядковое числительное от "sieben" (семь) - "siebte" (исключение).',
    },
    {
      id: 'a2-ordinal-datum-test-q2',
      type: 'fill_in_the_blank',
      question: 'Напишите словами: der 30. (тридцатый)',
      sentenceParts: ['der ', ''],
      correctAnswer: 'dreißigste',
      explanation: 'От 20 и выше порядковые числительные образуются с помощью суффикса -ste: dreißig + ste = dreißigste.',
    },
    {
      id: 'a2-ordinal-datum-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой день рождения первого апреля."',
      prompt: 'Мой день рождения первого апреля.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich habe am ersten April Geburtstag.',
      explanation: 'При указании даты используется предлог "am" + порядковое числительное с окончанием -en (Dativ): am ersten April.',
    },
    {
      id: 'a2-ordinal-datum-test-q4',
      type: 'multiple_choice',
      question: 'Какое сегодня число? - Сегодня ___ . (21 марта)',
      options: ['der einundzwanzigste März', 'der einundzwanzigsten März', 'am einundzwanzigsten März'],
      correctAnswer: 'der einundzwanzigste März',
      explanation: 'Ответ на вопрос "Der wievielte ist heute?" - "Heute ist der + порядковое числительное (Nominativ) + месяц".',
    },
    {
      id: 'a2-ordinal-datum-test-q5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Die Konferenz findet am (3.) ___ Juli statt.',
      sentenceParts: ['Die Konferenz findet am ', ' Juli statt.'],
      correctAnswer: 'dritten',
      explanation: 'Предлог "am" требует Dativ. Порядковое числительное "dritte" в Dativ имеет форму "dritten".',
    }
  ],
};
