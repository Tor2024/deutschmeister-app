
import type { Test } from '@/types';

export const testC1LexikWissenschaftForschung: Test = {
  id: 'c1-lexik-wissenschaft-forschung-test',
  level: 'C1',
  topic: 'Наука и исследования (Тест)',
  questions: [
    {
      id: 'c1-lexik-wissenschaft-forschung-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "доказательство"?',
      options: ['die Hypothese', 'die Theorie', 'der Beweis', 'das Experiment'],
      correctAnswer: 'der Beweis',
      explanation: '"Der Beweis" означает "доказательство".',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Der ___ (исследователь) präsentierte seine neuesten Ergebnisse."',
      sentenceParts: ['Der ', ' präsentierte seine neuesten Ergebnisse.'],
      correctAnswer: 'Forscher',
      explanation: '"Исследователь" по-немецки "der Forscher".',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Эта теория еще не была доказана."',
      prompt: 'Эта теория еще не была доказана.',
      languageDirection: 'to_german',
      correctAnswer: 'Diese Theorie ist noch nicht bewiesen worden.',
      // Альтернатива: Diese Theorie wurde noch nicht bewiesen.
      explanation: '"Доказать" - "beweisen". Используется Perfekt Passiv или Präteritum Passiv.',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-test-q4',
      type: 'multiple_choice',
      question: 'Что означает глагол "veröffentlichen"?',
      options: ['анализировать', 'изобретать', 'публиковать', 'разрабатывать'],
      correctAnswer: 'публиковать',
      explanation: '"Veröffentlichen" означает "публиковать" или "опубликовывать".',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-test-q5',
      type: 'multiple_choice',
      question: 'Какое слово НЕ относится к научной методологии?',
      options: ['das Experiment', 'die Analyse', 'die Hypothese', 'die Fiktion'],
      correctAnswer: 'die Fiktion',
      explanation: '"Die Fiktion" (вымысел) не является частью научной методологии, в отличие от эксперимента, анализа и гипотезы.',
    },
  ],
};

    