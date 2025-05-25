
import type { Test } from '@/types';

export const testA2LexikLebensstilGewohnheiten: Test = {
  id: 'a2-lexik-lebensstil-gewohnheiten-test',
  level: 'A2',
  topic: 'Образ жизни и привычки (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-lebensstil-test-q1',
      type: 'multiple_choice',
      question: 'Какое слово означает "ежедневно"?',
      options: ['wöchentlich', 'täglich', 'oft', 'regelmäßig'],
      correctAnswer: 'täglich',
      explanation: '"Täglich" означает "ежедневно".',
    },
    {
      id: 'a2-lexik-lebensstil-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Es ist wichtig, sich gesund zu ___ (питаться)."',
      sentenceParts: ['Es ist wichtig, sich gesund zu ', '.'],
      correctAnswer: 'ernähren',
      explanation: '"Питаться" по-немецки "sich ernähren".',
    },
    {
      id: 'a2-lexik-lebensstil-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он никогда не курит."',
      prompt: 'Он никогда не курит.',
      languageDirection: 'to_german',
      correctAnswer: 'Er raucht nie.',
      explanation: '"Никогда" - "nie". "Курить" - "rauchen".',
    },
    {
      id: 'a2-lexik-lebensstil-test-q4',
      type: 'multiple_choice',
      question: 'Какое выражение означает "избегать стресса"?',
      options: ['Stress haben', 'Stress verursachen', 'Stress vermeiden', 'Stress abbauen'],
      correctAnswer: 'Stress vermeiden',
      explanation: '"Stress vermeiden" означает "избегать стресса".',
    },
  ],
};
