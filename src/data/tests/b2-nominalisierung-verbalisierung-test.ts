
import type { Test } from '@/types';

export const testB2NominalisierungVerbalisierung: Test = {
  id: 'b2-nominalisierung-verbalisierung-test',
  level: 'B2',
  topic: 'Номинализация и вербализация (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-nomverb-stil-test-q1',
      type: 'multiple_choice',
      question: 'Трансформируйте в номинальный стиль: "Die Firma verbessert die Produkte ständig."',
      options: [
        'Die ständige Verbesserung der Produkte durch die Firma.',
        'Die Produkte werden ständig verbessert.',
        'Die Firma verbessert ständig ihre Produkte.'
      ],
      correctAnswer: 'Die ständige Verbesserung der Produkte durch die Firma.',
      explanation: 'Глагол "verbessern" номинализируется в "die Verbesserung". Используется Genitiv "der Produkte" и предложная группа "durch die Firma".',
    },
    {
      id: 'b2-nomverb-stil-test-q2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в вербальный стиль: "Aufgrund der zunehmenden Digitalisierung ändern sich viele Arbeitsbereiche."',
      sentenceParts: ['Weil die Digitalisierung zunimmt, ', ' sich viele Arbeitsbereiche.'],
      correctAnswer: 'ändern',
      explanation: 'Номинальная конструкция "Aufgrund der zunehmenden Digitalisierung" (из-за возрастающей дигитализации) вербализуется в придаточное причины "Weil die Digitalisierung zunimmt".',
    },
    {
      id: 'b2-nomverb-stil-test-q3',
      type: 'multiple_choice',
      question: 'Какое из следующих выражений типично для номинального стиля?',
      options: [
        'Man muss das Problem schnell lösen.',
        'Die Notwendigkeit einer schnellen Problemlösung ist offensichtlich.',
        'Weil das Problem schnell gelöst werden muss, brauchen wir mehr Zeit.'
      ],
      correctAnswer: 'Die Notwendigkeit einer schnellen Problemlösung ist offensichtlich.',
      explanation: 'Использование отглагольных существительных "Notwendigkeit", "Problemlösung" и предложных конструкций характерно для номинального стиля.',
    },
    {
      id: 'b2-nomverb-stil-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий, используя вербальный стиль: "Целью встречи является обсуждение новых стратегий."',
      prompt: 'Целью встречи является обсуждение новых стратегий.',
      languageDirection: 'to_german',
      correctAnswer: 'Bei dem Treffen sollen neue Strategien diskutiert werden.',
      // Альтернатива: Das Ziel des Treffens ist es, neue Strategien zu diskutieren. (с инфинитивом)
      explanation: 'Номинальное "Обсуждение новых стратегий" (Die Diskussion neuer Strategien) заменяется пассивной конструкцией или инфинитивной.',
    },
    {
      id: 'b2-nomverb-stil-test-q5',
      type: 'fill_in_the_blank',
      question: 'Трансформируйте в номинальный стиль: "Die Regierung beschloss, die Steuern zu erhöhen."',
      sentenceParts: ['Der Beschluss der Regierung zur ', ' der Steuern wurde bekannt gegeben.'],
      correctAnswer: 'Erhöhung',
      explanation: 'Глагол "erhöhen" (повышать) номинализируется в "die Erhöhung" (повышение).',
    },
  ],
};
