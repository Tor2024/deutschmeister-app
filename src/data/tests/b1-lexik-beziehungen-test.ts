
import type { Test } from '@/types';

export const testB1LexikBeziehungen: Test = {
  id: 'b1-lexik-beziehungen-test',
  level: 'B1',
  topic: 'Межличностные отношения (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-lexik-beziehungen-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "доверие"?',
      options: ['die Liebe', 'die Freundschaft', 'das Vertrauen', 'der Streit'],
      correctAnswer: 'das Vertrauen',
      explanation: '"Das Vertrauen" означает "доверие".',
    },
    {
      id: 'b1-lexik-beziehungen-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ein guter Freund sollte immer ___ (честный) sein."',
      sentenceParts: ['Ein guter Freund sollte immer ', ' sein.'],
      correctAnswer: 'ehrlich',
      explanation: '"Честный" по-немецки "ehrlich".',
    },
    {
      id: 'b1-lexik-beziehungen-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я доверяю своим друзьям."',
      prompt: 'Я доверяю своим друзьям.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich vertraue meinen Freunden.',
      explanation: '"Доверять кому-либо" - "vertrauen + Dativ". "Моим друзьям" (Dativ Plural) - "meinen Freunden".',
    },
    {
      id: 'b1-lexik-beziehungen-test-q4',
      type: 'multiple_choice',
      question: 'Что означает "sich versöhnen"?',
      options: ['ссориться', 'поддерживать', 'мириться', 'доверять'],
      correctAnswer: 'мириться',
      explanation: '"Sich versöhnen" означает "мириться".',
    },
    {
      id: 'b1-lexik-beziehungen-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните фразу: "Es ist wichtig, ___ für die Probleme anderer zu haben."',
      sentenceParts: ['Es ist wichtig, ', ' für die Probleme anderer zu haben.'],
      correctAnswer: 'Verständnis',
      explanation: '"Verständnis haben für + Akkusativ" означает "иметь понимание к чему-либо/кому-либо".',
    },
  ],
};
