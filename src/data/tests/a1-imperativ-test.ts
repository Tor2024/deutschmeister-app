
import type { Test } from '@/types';

export const testA1Imperativ: Test = {
  id: 'a1-imperativ-test',
  level: 'A1',
  topic: 'Повелительное наклонение (Тест)',
  questions: [
    {
      id: 'a1-imperativ-test-q1',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ для "du" от глагола "machen"?',
      options: ['Mache!', 'Machst!', 'Mach!', 'Machen!'],
      correctAnswer: 'Mach!',
      explanation: 'Для "du" от глагола "machen" Imperativ - "Mach!". Окончание -e часто опускается.',
    },
    {
      id: 'a1-imperativ-test-q2',
      type: 'fill_in_the_blank',
      question: 'Образуйте Imperativ для "ihr": ___ (kommen) schnell!',
      sentenceParts: ['', ' schnell!'],
      correctAnswer: 'Kommt',
      explanation: 'Для "ihr" форма Imperativ совпадает с формой Präsens: ihr kommt → Kommt!',
    },
    {
      id: 'a1-imperativ-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильную вежливую форму Imperativ для "sprechen":',
      options: ['Sprecht!', 'Sprechen Sie!', 'Sprich!', 'Spreche!'],
      correctAnswer: 'Sprechen Sie!',
      explanation: 'Вежливая форма Imperativ для "Sie" образуется из инфинитива + Sie: Sprechen Sie!',
    },
    {
      id: 'a1-imperativ-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните просьбу: ___ (geben, du) mir bitte das Buch!',
      sentenceParts: ['', ' mir bitte das Buch!'],
      correctAnswer: 'Gib',
      explanation: 'Сильный глагол "geben" меняет корневую гласную e → i в Imperativ для "du": Gib!',
    },
    {
      id: 'a1-imperativ-test-q5',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ для "sein" (быть) для "du"?',
      options: ['Bist!', 'Sei!', 'Sein!', 'Seist!'],
      correctAnswer: 'Sei!',
      explanation: 'Глагол "sein" имеет особую форму Imperativ для "du": Sei!',
    }
  ],
};
