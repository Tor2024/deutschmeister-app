
import type { Test } from '@/types';

export const testC2Stilmittel: Test = {
  id: 'c2-stilmittel-test',
  level: 'C2',
  topic: 'Стилистические средства и языковые регистры (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c2-stilmittel-test-q1',
      type: 'multiple_choice',
      question: 'Какое стилистическое средство используется во фразе "Er kämpfte wie ein Löwe"?',
      options: ['Metapher (Метафора)', 'Vergleich (Сравнение)', 'Ironie (Ирония)', 'Hyperbel (Гипербола)'],
      correctAnswer: 'Vergleich (Сравнение)',
      explanation: 'Использование союза "wie" (как) указывает на сравнение.',
    },
    {
      id: 'c2-stilmittel-test-q2',
      type: 'multiple_choice',
      question: 'Какой языковой регистр наиболее характерен для научной диссертации по квантовой физике?',
      options: ['Umgangssprache (Разговорный язык)', 'Gehobene Sprache (Высокий стиль)', 'Fachsprache (Специальный язык)', 'Saloppe Sprache (Фамильярный язык)'],
      correctAnswer: 'Fachsprache (Специальный язык)',
      explanation: 'Научные диссертации требуют использования точной терминологии и специфического стиля, характерного для Fachsprache (профессионального/специального языка).',
    },
    {
      id: 'c2-stilmittel-test-q3',
      type: 'fill_in_the_blank',
      question: 'Выражение "Er hat das Zeitliche gesegnet" вместо "Er ist gestorben" является примером ___.',
      sentenceParts: ['Выражение "Er hat das Zeitliche gesegnet" вместо "Er ist gestorben" является примером ', '.'],
      correctAnswer: 'Euphemismus',
      explanation: 'Эвфемизм – это замена грубого или неприятного выражения более мягким или косвенным.',
    },
    {
      id: 'c2-stilmittel-test-q4',
      type: 'multiple_choice',
      question: 'Определение "Der Wind sang ein trauriges Lied in den Bäumen" является примером:',
      options: ['Alliteration (Аллитерация)', 'Personifikation (Олицетворение)', 'Metapher (Метафора)', 'Antithese (Антитеза)'],
      correctAnswer: 'Personifikation (Олицетворение)',
      explanation: 'Приписывание ветру человеческого действия (петь песню) – это олицетворение.',
    },
    {
      id: 'c2-stilmittel-test-q5',
      type: 'multiple_choice',
      question: 'Что такое риторический вопрос?',
      options: [
        'Вопрос, требующий подробного ответа.',
        'Вопрос, на который нет ответа.',
        'Вопрос, ответ на который очевиден или не предполагается, и который служит для усиления утверждения.',
        'Вопрос, заданный в грубой форме.'
      ],
      correctAnswer: 'Вопрос, ответ на который очевиден или не предполагается, и который служит для усиления утверждения.',
      explanation: 'Риторический вопрос используется для акцентирования внимания или для выражения утверждения в вопросительной форме, не ожидая фактического ответа.',
    },
  ],
};
