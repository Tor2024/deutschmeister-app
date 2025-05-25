
import type { Test } from '@/types';

export const testA2LexikBriefeEmails: Test = {
  id: 'a2-lexik-briefe-emails-test',
  level: 'A2',
  topic: 'Лексика для писем и E-Mail (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-briefe-emails-test-q1',
      type: 'multiple_choice',
      question: 'Какое приветствие подходит для неофициального письма другу по имени Пауль?',
      options: ['Sehr geehrter Herr Paul', 'Lieber Paul,', 'Guten Tag, Paul', 'Hallo Paul,'],
      correctAnswer: 'Lieber Paul,',
      explanation: '"Lieber [Имя мужского рода]," - стандартное неформальное обращение.',
    },
    {
      id: 'a2-lexik-briefe-emails-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich schreibe dir, ___ ich dich einladen möchte."',
      sentenceParts: ['Ich schreibe dir, ', ' ich dich einladen möchte.'],
      correctAnswer: 'weil',
      explanation: 'Союз "weil" (потому что) вводит причину.',
    },
    {
      id: 'a2-lexik-briefe-emails-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я с нетерпением жду твоего ответа."',
      prompt: 'Я с нетерпением жду твоего ответа.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich freue mich auf deine Antwort.',
      explanation: '"Sich freuen auf + Akkusativ" означает "радоваться чему-то предстоящему".',
    },
    {
      id: 'a2-lexik-briefe-emails-test-q4',
      type: 'multiple_choice',
      question: 'Какая прощальная формула НЕ подходит для неофициального письма другу?',
      options: ['Viele Grüße', 'Liebe Grüße', 'Mit freundlichen Grüßen', 'Bis bald'],
      correctAnswer: 'Mit freundlichen Grüßen',
      explanation: '"Mit freundlichen Grüßen" - более формальная прощальная формула, обычно используемая в официальных или деловых письмах.',
    },
  ],
};
