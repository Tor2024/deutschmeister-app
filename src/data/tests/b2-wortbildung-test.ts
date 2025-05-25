
import type { Test } from '@/types';

export const testB2Wortbildung: Test = {
  id: 'b2-wortbildung-test',
  level: 'B2',
  topic: 'Словообразование (Wortbildung) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-wortbildung-test-q1',
      type: 'multiple_choice',
      question: 'Каким способом образовано слово "Freiheit" (свобода) от "frei" (свободный)?',
      options: ['Префиксация', 'Суффиксация', 'Словосложение', 'Конверсия'],
      correctAnswer: 'Суффиксация',
      explanation: 'Слово "Freiheit" образовано от прилагательного "frei" с помощью суффикса "-heit".',
    },
    {
      id: 'b2-wortbildung-test-q2',
      type: 'fill_in_the_blank',
      question: 'Образуйте существительное от глагола "untersuchen" (исследовать) с помощью суффикса "-ung": die ___',
      sentenceParts: ['die ', ''],
      correctAnswer: 'Untersuchung',
      explanation: 'Глагол "untersuchen" + суффикс "-ung" = "die Untersuchung" (исследование).',
    },
    {
      id: 'b2-wortbildung-test-q3',
      type: 'multiple_choice',
      question: 'Какое слово является основным (Grundwort) и определяет род в сложном существительном "das Rathaus" (ратуша)?',
      options: ['Rat', 'Haus', 'Rath', 'keines'],
      correctAnswer: 'Haus',
      explanation: 'В сложном существительном "das Rathaus" основным словом является "das Haus" (дом, ср.р.), которое определяет род всего слова.',
    },
    {
      id: 'b2-wortbildung-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий, используя производное прилагательное: "решаемая проблема"',
      prompt: 'решаемая проблема',
      languageDirection: 'to_german',
      correctAnswer: 'ein lösbares Problem',
      explanation: 'Прилагательное "lösbar" (решаемый) образовано от глагола "lösen" (решать) с помощью суффикса "-bar".',
    },
    {
      id: 'b2-wortbildung-test-q5',
      type: 'multiple_choice',
      question: 'Какой префикс придает слову "glücklich" (счастливый) отрицательное значение в "unglücklich"?',
      options: ['un-', 'miss-', 'zer-', 'ent-'],
      correctAnswer: 'un-',
      explanation: 'Префикс "un-" часто используется для образования антонимов, придавая отрицательное значение.',
    },
    {
      id: 'b2-wortbildung-test-q6',
      type: 'fill_in_the_blank',
      question: 'Каким способом образовано слово "das Essen" (еда) от глагола "essen" (есть)?',
      sentenceParts: ['Слово "das Essen" образовано путем ', '.'],
      correctAnswer: 'конверсии (субстантивации инфинитива)',
      explanation: 'Инфинитив глагола "essen" субстантивирован (перешел в разряд существительных) без изменения формы, став "das Essen".',
    }
  ],
};
