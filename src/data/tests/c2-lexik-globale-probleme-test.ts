
import type { Test } from '@/types';

export const testC2LexikGlobaleProbleme: Test = {
  id: 'c2-lexik-globale-probleme-test',
  level: 'C2',
  topic: 'Глобальные проблемы и будущее человечества (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c2-lexik-globale-probleme-test-q1',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt einen kritischen Mangel an lebenswichtigen Gütern oder Rohstoffen?',
      options: ['Die Globalisierung', 'Die Ressourcenknappheit', 'Die Nachhaltigkeit', 'Der technologische Fortschritt'],
      correctAnswer: 'Die Ressourcenknappheit',
      explanation: '"Die Ressourcenknappheit" (нехватка ресурсов) ist der passende Begriff.',
    },
    {
      id: 'c2-lexik-globale-probleme-test-q2',
      type: 'fill_in_the_blank',
      question: 'Viele Experten ___ (прогнозируют), dass die Auswirkungen des Klimawandels in den kommenden Jahrzehnten zunehmen werden.',
      sentenceParts: ['Viele Experten ', ', dass die Auswirkungen des Klimawandels in den kommenden Jahrzehnten zunehmen werden.'],
      correctAnswer: 'prognostizieren',
      explanation: '"Prognostizieren" (прогнозировать) ist das passende Verb.',
    },
    {
      id: 'c2-lexik-globale-probleme-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Международное сотрудничество необходимо для решения глобальных вызовов."',
      prompt: 'Международное сотрудничество необходимо для решения глобальных вызовов.',
      languageDirection: 'to_german',
      correctAnswer: 'Internationale Zusammenarbeit ist notwendig, um globale Herausforderungen zu bewältigen.',
      // Альтернатива: Zur Bewältigung globaler Herausforderungen ist internationale Zusammenarbeit unerlässlich.
      explanation: 'Ключевые слова: "internationale Zusammenarbeit", "notwendig/unerlässlich", "globale Herausforderungen", "bewältigen/lösen".',
    },
    {
      id: 'c2-lexik-globale-probleme-test-q4',
      type: 'multiple_choice',
      question: 'Was bedeutet der Begriff "sich mit einer Thematik auseinandersetzen"?',
      options: [
        'Eine Thematik ignorieren',
        'Eine Thematik oberflächlich behandeln',
        'Sich intensiv und kritisch mit einer Thematik beschäftigen',
        'Eine Thematik schnell lösen'
      ],
      correctAnswer: 'Sich intensiv und kritisch mit einer Thematik beschäftigen',
      explanation: '"Sich auseinandersetzen mit + Dativ" bedeutet, sich глубоко и критически заниматься/разбираться с темой.',
    },
  ],
};
