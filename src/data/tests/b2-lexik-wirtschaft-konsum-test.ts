
import type { Test } from '@/types';

export const testB2LexikWirtschaftKonsum: Test = {
  id: 'b2-lexik-wirtschaft-konsum-test',
  level: 'B2',
  topic: 'Экономика и потребительство (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-lexik-wirtschaft-konsum-test-q1',
      type: 'multiple_choice',
      question: 'Was bedeutet "die Inflation"?',
      options: ['Preissenkung', 'Wirtschaftswachstum', 'Allgemeine Preiserhöhung', 'Hohe Arbeitslosigkeit'],
      correctAnswer: 'Allgemeine Preiserhöhung',
      explanation: '"Die Inflation" bezeichnet einen allgemeinen Anstieg der Preise und einen Rückgang der Kaufkraft.',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-test-q2',
      type: 'fill_in_the_blank',
      question: 'Wenn das Angebot größer ist als die Nachfrage, ___ die Preise tendenziell.',
      sentenceParts: ['Wenn das Angebot größer ist als die Nachfrage, ', ' die Preise tendenziell.'],
      correctAnswer: 'sinken',
      explanation: 'Ein Überangebot führt tendenziell zu sinkenden Preisen.',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Потребители часто тратят много денег на рекламируемые товары."',
      prompt: 'Потребители часто тратят много денег на рекламируемые товары.',
      languageDirection: 'to_german',
      correctAnswer: 'Konsumenten geben oft viel Geld für beworbene Produkte aus.',
      // Alternative: Verbraucher geben oft viel Geld für beworbene Waren aus.
      explanation: '"Konsumenten/Verbraucher" (потребители), "viel Geld ausgeben für + A" (тратить много денег на), "beworbene Produkte/Waren" (рекламируемые товары).',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-test-q4',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt den Oberbegriff für alle Güter und Dienstleistungen, die in einer Volkswirtschaft produziert werden?',
      options: ['Der Konsum', 'Die Investition', 'Das Bruttoinlandsprodukt', 'Der Export'],
      correctAnswer: 'Das Bruttoinlandsprodukt',
      explanation: 'Das Bruttoinlandsprodukt (BIP) misst den Wert aller Waren und Dienstleistungen, die innerhalb eines Landes in einem bestimmten Zeitraum hergestellt werden.',
    },
  ],
};

