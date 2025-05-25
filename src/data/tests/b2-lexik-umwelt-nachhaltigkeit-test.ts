
import type { Test } from '@/types';

export const testB2LexikUmweltNachhaltigkeit: Test = {
  id: 'b2-lexik-umwelt-nachhaltigkeit-test',
  level: 'B2',
  topic: 'Окружающая среда и устойчивое развитие (Тест)',
  questions: [
    {
      id: 'b2-lexik-umwelt-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "изменение климата"?',
      options: ['die Umweltverschmutzung', 'der Treibhauseffekt', 'der Klimawandel', 'die Nachhaltigkeit'],
      correctAnswer: 'der Klimawandel',
      explanation: '"Der Klimawandel" означает "изменение климата".',
    },
    {
      id: 'b2-lexik-umwelt-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Wir müssen ___ sparen, um die Umwelt zu schützen."',
      sentenceParts: ['Wir müssen ', ' sparen, um die Umwelt zu schützen.'],
      correctAnswer: 'Energie', // или Wasser, Ressourcen
      explanation: '"Energie sparen" (экономить энергию) - важное действие для защиты окружающей среды.',
    },
    {
      id: 'b2-lexik-umwelt-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Переработка мусора очень важна."',
      prompt: 'Переработка мусора очень важна.',
      languageDirection: 'to_german',
      correctAnswer: 'Das Recycling von Müll ist sehr wichtig.',
      // Альтернатива: Müllrecycling ist sehr wichtig.
      explanation: '"Переработка" - "das Recycling", "мусор" - "der Müll".',
    },
    {
      id: 'b2-lexik-umwelt-test-q4',
      type: 'multiple_choice',
      question: 'Какой термин НЕ относится к возобновляемым источникам энергии?',
      options: ['die Solarenergie', 'die Windenergie', 'die Kohle', 'die Wasserkraft'],
      correctAnswer: 'die Kohle',
      explanation: '"Die Kohle" (уголь) - это ископаемое топливо, а не возобновляемый источник энергии.',
    },
    {
      id: 'b2-lexik-umwelt-test-q5',
      type: 'multiple_choice',
      question: 'Что означает "umweltfreundlich"?',
      options: ['загрязняющий среду', 'дорогой', 'экологичный', 'одноразовый'],
      correctAnswer: 'экологичный',
      explanation: '"Umweltfreundlich" означает "экологичный" или "безопасный для окружающей среды".',
    },
  ],
};

