
import type { Test } from '@/types';

export const testB1LexikGesunderLebensstil: Test = {
  id: 'b1-lexik-gesunder-lebensstil-test',
  level: 'B1',
  topic: 'Здоровый образ жизни (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b1-lexik-gesunder-lebensstil',
  questions: [
    {
      id: 'b1-lexik-gesunder-lebensstil-test-q1',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt eine Ernährung, die alle notwendigen Nährstoffe im richtigen Verhältnis enthält?',
      options: ['fettig', 'vitaminreich', 'ausgewogen', 'süß'],
      correctAnswer: 'ausgewogen',
      explanation: '"Ausgewogen" (сбалансированный) beschreibt eine solche Ernährung.',
    },
    {
      id: 'b1-lexik-gesunder-lebensstil-test-q2',
      type: 'fill_in_the_blank',
      question: 'Viele Menschen treiben Sport, um sich ___ zu halten.',
      sentenceParts: ['Viele Menschen treiben Sport, um sich ', ' zu halten.'],
      correctAnswer: 'fit',
      explanation: '"Sich fit halten" bedeutet, sich in guter körperlicher Form zu halten.',
    },
    {
      id: 'b1-lexik-gesunder-lebensstil-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Важно достаточно спать и избегать стресса."',
      prompt: 'Важно достаточно спать и избегать стресса.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist wichtig, genug zu schlafen und Stress zu vermeiden.',
      explanation: 'Ключевые фразы: "genug schlafen" и "Stress vermeiden".',
    },
    {
      id: 'b1-lexik-gesunder-lebensstil-test-q4',
      type: 'multiple_choice',
      question: 'Was bedeutet "auf etwas verzichten"?',
      options: ['etwas beginnen', 'etwas regelmäßig tun', 'sich an etwas gewöhnen', 'etwas nicht mehr tun/konsumieren'],
      correctAnswer: 'etwas nicht mehr tun/konsumieren',
      explanation: '"Auf etwas verzichten" означает отказываться от чего-либо, переставать что-либо делать или потреблять.',
    },
  ],
};
