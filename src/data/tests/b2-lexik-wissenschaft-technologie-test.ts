
import type { Test } from '@/types';

export const testB2LexikWissenschaftTechnologie: Test = {
  id: 'b2-lexik-wissenschaft-technologie-test',
  level: 'B2',
  topic: 'Наука и технологии (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-lexik-wissenschaft-technologie-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "искусственный интеллект"?',
      options: ['die Digitalisierung', 'die künstliche Intelligenz', 'die Biotechnologie', 'die Innovation'],
      correctAnswer: 'die künstliche Intelligenz',
      explanation: '"Die künstliche Intelligenz" (часто сокращенно KI) означает "искусственный интеллект".',
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Der technische ___ (прогресс) hat unser Leben stark verändert."',
      sentenceParts: ['Der technische ', ' hat unser Leben stark verändert.'],
      correctAnswer: 'Fortschritt',
      explanation: '"Der Fortschritt" означает "прогресс".',
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Многие компании разрабатывают новые технологии."',
      prompt: 'Многие компании разрабатывают новые технологии.',
      languageDirection: 'to_german',
      correctAnswer: 'Viele Unternehmen entwickeln neue Technologien.',
      explanation: '"Разрабатывать" - "entwickeln". "Компании" - "Unternehmen" (мн.ч.).',
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-test-q4',
      type: 'multiple_choice',
      question: 'Что означает глагол "erforschen"?',
      options: ['изобретать', 'анализировать', 'тщательно исследовать', 'публиковать'],
      correctAnswer: 'тщательно исследовать',
      explanation: '"Erforschen" означает "исследовать" (часто более глубоко и систематически, чем "untersuchen").',
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-test-q5',
      type: 'multiple_choice',
      question: 'Какое слово относится к этическим вопросам, связанным с технологиями?',
      options: ['die Daten', 'das Experiment', 'ethisch', 'die Entdeckung'],
      correctAnswer: 'ethisch',
      explanation: '"Ethisch" (этический) относится к вопросам морали и этики. "Ethische Fragen" - этические вопросы.',
    },
  ],
};
