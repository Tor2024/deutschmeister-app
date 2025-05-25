
import type { Test } from '@/types';

export const testA1LexikOrdinalzahlenDatum: Test = {
  id: 'a1-lexik-ordinalzahlen-datum-test',
  level: 'A1',
  topic: 'Даты и Порядковые числительные (основы) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a1-lexik-ordinalzahlen-datum',
  questions: [
    {
      id: 'a1-lexik-ordinal-datum-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "первый"?',
      options: ['der einste', 'der erste', 'der einte', 'der erte'],
      correctAnswer: 'der erste',
      explanation: 'Порядковое числительное от "eins" (один) - "erste".',
    },
    {
      id: 'a1-lexik-ordinal-datum-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное порядковое числительное: "Der wievielte ist heute? - Heute ist der ___ (8) April."',
      sentenceParts: ['Heute ist der ', ' April.'],
      correctAnswer: 'achte',
      explanation: 'Порядковое числительное от "acht" (восемь) - "achte".',
    },
    {
      id: 'a1-lexik-ordinal-datum-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Встреча второго марта."',
      prompt: 'Встреча второго марта.',
      languageDirection: 'to_german',
      correctAnswer: 'Das Treffen ist am zweiten März.',
      explanation: 'Для указания даты события используется "am" + порядковое числительное с окончанием -en: "am zweiten März".',
    },
    {
      id: 'a1-lexik-ordinal-datum-test-q4',
      type: 'multiple_choice',
      question: 'Как пишется "десятое мая" цифрами в Германии?',
      options: ['10/05', '05.10.', '10.05.', 'Mai 10.'],
      correctAnswer: '10.05.',
      explanation: 'В Германии даты обычно пишутся в формате ДД.ММ.ГГГГ или ДД.ММ.',
    },
  ],
};
