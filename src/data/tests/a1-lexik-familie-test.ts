
import type { Test } from '@/types';

export const testA1LexikFamilie: Test = {
  id: 'a1-lexik-familie-test',
  level: 'A1',
  topic: 'Семья и друзья (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-familie-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "мама"?',
      options: ['der Vater', 'die Mutter', 'der Bruder', 'die Schwester'],
      correctAnswer: 'die Mutter',
      explanation: '"Die Mutter" означает "мама".',
    },
    {
      id: 'a1-lexik-familie-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Mein ___ (дедушка) heißt Hans."',
      sentenceParts: ['Mein ', ' heißt Hans.'],
      correctAnswer: 'Opa', // или Großvater
      explanation: '"Дедушка" по-немецки "der Opa" или "der Großvater".',
    },
    {
      id: 'a1-lexik-familie-test-q3',
      type: 'multiple_choice',
      question: 'Что означает "die Geschwister"?',
      options: ['родители', 'братья и сестры', 'бабушка и дедушка', 'дети'],
      correctAnswer: 'братья и сестры',
      explanation: '"Die Geschwister" - это собирательное слово для "братья и сестры".',
    },
    {
      id: 'a1-lexik-familie-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий: "Это мой друг."',
      prompt: 'Это мой друг.',
      languageDirection: 'to_german',
      correctAnswer: 'Das ist mein Freund.',
      explanation: '"Друг" (м.р.) - "der Freund". "Мой друг" (Nom.) - "mein Freund".',
    },
    {
      id: 'a1-lexik-familie-test-q5',
      type: 'multiple_choice',
      question: 'Как по-немецки "жена"?',
      options: ['die Tochter', 'die Ehefrau', 'die Tante', 'die Oma'],
      correctAnswer: 'die Ehefrau',
      explanation: '"Die Ehefrau" означает "жена".',
    },
  ],
};
