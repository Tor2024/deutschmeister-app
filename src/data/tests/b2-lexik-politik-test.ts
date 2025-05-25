
import type { Test } from '@/types';

export const testB2LexikPolitik: Test = {
  id: 'b2-lexik-politik-test',
  level: 'B2',
  topic: 'Политика: демократия, выборы, миграция (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-lexik-politik-test-q1',
      type: 'multiple_choice',
      question: 'Wie nennt man das Grundgesetz eines Staates?',
      options: ['die Partei', 'die Verfassung', 'die Wahl', 'die Debatte'],
      correctAnswer: 'die Verfassung',
      explanation: '"Die Verfassung" ist das Grundgesetz eines Staates.',
    },
    {
      id: 'b2-lexik-politik-test-q2',
      type: 'fill_in_the_blank',
      question: 'Viele Länder stehen vor der Herausforderung der ___ von Flüchtlingen.',
      sentenceParts: ['Viele Länder stehen vor der Herausforderung der ', ' von Flüchtlingen.'],
      correctAnswer: 'Integration',
      explanation: '"Die Integration" von Flüchtlingen ist eine wichtige gesellschaftliche Aufgabe.',
    },
    {
      id: 'b2-lexik-politik-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Каждый гражданин имеет право голоса."',
      prompt: 'Каждый гражданин имеет право голоса.',
      languageDirection: 'to_german',
      correctAnswer: 'Jeder Bürger hat das Wahlrecht.',
      // Альтернатива: Jeder Bürger hat das Recht zu wählen.
      explanation: '"Право голоса" - "das Wahlrecht". "Гражданин" - "der Bürger".',
    },
    {
      id: 'b2-lexik-politik-test-q4',
      type: 'multiple_choice',
      question: 'Was ist die Rolle der Opposition in einem demokratischen Parlament?',
      options: [
        'Die Regierung bedingungslos zu unterstützen.',
        'Die Arbeit der Regierung zu kontrollieren und Alternativen aufzuzeigen.',
        'Gesetze ohne Debatte zu verabschieden.',
        'Wahlen zu verhindern.'
      ],
      correctAnswer: 'Die Arbeit der Regierung zu kontrollieren und Alternativen aufzuzeigen.',
      explanation: 'Die Opposition spielt eine wichtige Rolle bei der Kontrolle der Regierung und der Entwicklung von politischen Alternativen.',
    },
  ],
};
