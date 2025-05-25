
import type { Test } from '@/types';

export const testA2Pluralbildung: Test = {
  id: 'a2-pluralbildung-test',
  level: 'A2',
  topic: 'Множественное число (углубленно) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-plural-adv-test-q1',
      type: 'multiple_choice',
      question: 'Какое множественное число у слова "der Mann" (мужчина)?',
      options: ['die Manne', 'die Mans', 'die Männer', 'die Männe'],
      correctAnswer: 'die Männer',
      explanation: 'Слово "der Mann" образует множественное число с умлаутом и окончанием -er: die Männer.',
    },
    {
      id: 'a2-plural-adv-test-q2',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число: das Museum → die ___',
      sentenceParts: ['das Museum → die ', ''],
      correctAnswer: 'Museen',
      explanation: 'Слова, оканчивающиеся на -um, часто заменяют -um на -en во множественном числе: die Museen.',
    },
    {
      id: 'a2-plural-adv-test-q3',
      type: 'multiple_choice',
      question: 'Как будет "дочь" (die Tochter) во множественном числе?',
      options: ['die Töchtere', 'die Töchtern', 'die Töchter', 'die Tochteren'],
      correctAnswer: 'die Töchter',
      explanation: 'Слово "die Tochter" образует множественное число с умлаутом без дополнительного окончания: die Töchter.',
    },
    {
      id: 'a2-plural-adv-test-q4',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число: der Student (студент, n-Deklination) → die ___',
      sentenceParts: ['der Student → die ', ''],
      correctAnswer: 'Studenten',
      explanation: 'Существительное "der Student" относится к n-Deklination и получает окончание -en во множественном числе: die Studenten.',
    },
    {
      id: 'a2-plural-adv-test-q5',
      type: 'multiple_choice',
      question: 'Какой правильный артикль и форма множественного числа для "das Thema" (тема)?',
      options: ['die Themas', 'die Themen', 'die Themer', 'die Theme'],
      correctAnswer: 'die Themen',
      explanation: 'Слова, оканчивающиеся на -a (часто греческого происхождения), во множественном числе часто получают окончание -en (или -ata -> -aten): die Themen.',
    }
  ],
};
