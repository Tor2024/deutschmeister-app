
import type { Test } from '@/types';

export const testA2Demonstrativpronomen: Test = {
  id: 'a2-demonstrativpronomen-test',
  level: 'A2',
  topic: 'Указательные местоимения (Тест)',
  questions: [
    {
      id: 'a2-demonstrativ-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "___ Buch (ср.р., Nom.) ist sehr interessant."',
      options: ['Dieser', 'Diese', 'Dieses', 'Diesen'],
      correctAnswer: 'Dieses',
      explanation: 'Для существительного среднего рода "Buch" в Nominativ используется указательное местоимение "dieses".',
    },
    {
      id: 'a2-demonstrativ-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: "Ich nehme ___ Stift (м.р., Akk.)."',
      sentenceParts: ['Ich nehme ', ' Stift.'],
      correctAnswer: 'diesen',
      explanation: 'Для существительного мужского рода "Stift" в Akkusativ указательное местоимение "dieser" изменяется на "diesen".',
    },
    {
      id: 'a2-demonstrativ-test-q3',
      type: 'multiple_choice',
      question: 'Какая форма правильная: "Kennst du ___ Frauen (мн.ч., Akk.)?"',
      options: ['diesen', 'diese', 'dieser', 'diesem'],
      correctAnswer: 'diese',
      explanation: 'Для существительного множественного числа "Frauen" в Akkusativ используется форма "diese".',
    },
    {
      id: 'a2-demonstrativ-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "___ Haus (ср.р., Nom.) dort drüben ist sehr alt. (Используйте аналог "тот" - jener)',
      sentenceParts: ['', ' Haus dort drüben ist sehr alt.'],
      correctAnswer: 'Jenes',
      explanation: 'Для указания на более удаленный предмет среднего рода "Haus" в Nominativ используется "jenes".',
    },
    {
      id: 'a2-demonstrativ-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Ich mag ___ (эти) Äpfel (мн.ч., Akk.)."',
      options: ['diesen', 'diese', 'diesem', 'dieser'],
      correctAnswer: 'diese',
      explanation: 'Для существительного множественного числа "Äpfel" в Akkusativ используется форма "diese".',
    }
  ],
};
