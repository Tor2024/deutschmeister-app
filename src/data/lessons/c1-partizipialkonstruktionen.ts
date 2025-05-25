
import type { Lesson } from '@/types';

// --- Урок C1: Причастные обороты (Partizipialkonstruktionen) ---
export const lessonC1Partizipialkonstruktionen: Lesson = {
  id: 'c1-partizipialkonstruktionen',
  level: 'C1',
  topic: 'Причастные обороты (Partizipialkonstruktionen)',
  theory: `Причастные обороты с Partizip I (Present Participle) и Partizip II (Past Participle) позволяют сделать речь более лаконичной и стилистически разнообразной, заменяя придаточные предложения.
Partizip I (основа + -d): выражает одновременное, активное действие.
Пример: Das singende Mädchen (поющая девочка) = Das Mädchen, das singt.
Der schnell fahrende Zug (быстро едущий поезд) = Der Zug, der schnell fährt.

Partizip II (форма для Perfekt): выражает предшествующее действие (в переходных глаголах) или пассивное состояние.
Пример: Das gelesene Buch (прочитанная книга) = Das Buch, das gelesen wurde/ist.
Die geöffnete Tür (открытая дверь) = Die Tür, die geöffnet wurde/ist.

Расширенные причастные обороты (Erweiterte Partizipialattribute) включают другие члены предложения:
Пример: Der von seiner Mutter geliebte Sohn. (Сын, любимый своей матерью.)
Das auf dem Tisch liegende Buch. (Книга, лежащая на столе.)
Эти конструкции часто используются в официальном и письменном стилях.`,
  exercises: [
    {
      id: 'c1-partizip-ex1',
      type: 'multiple_choice',
      question: 'Какое предложение содержит правильный причастный оборот с Partizip I?',
      options: [
        'Das Kind, das spielt, ist laut.',
        'Das spielende Kind ist laut.',
        'Das gespielte Kind ist laut.'
      ],
      correctAnswer: 'Das spielende Kind ist laut.',
      explanation: '"spielend" (играющий) - Partizip I от "spielen", описывает одновременное активное действие.',
    },
    {
      id: 'c1-partizip-ex2',
      type: 'fill_in_the_blank',
      question: 'Замените относительное придаточное предложение причастным оборотом: Der Brief, der gestern geschrieben wurde, ...',
      sentenceParts: ['Der gestern ', ' Brief ...'],
      correctAnswer: 'geschriebene',
      explanation: '"geschrieben" - Partizip II от "schreiben". Причастный оборот: "der gestern geschriebene Brief".',
    },
    {
      id: 'c1-partizip-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя причастный оборот: "Женщина, говорящая по-немецки, очень дружелюбна."',
      prompt: 'Женщина, говорящая по-немецки, очень дружелюбна.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Deutsch sprechende Frau ist sehr freundlich.',
      explanation: '"Deutsch sprechend" - расширенное причастие I.',
    },
  ],
};

    