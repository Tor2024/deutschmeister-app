
import type { Test } from '@/types';

export const testA1PraepositionenAkkusativ: Test = {
  id: 'a1-praepositionen-akkusativ-test',
  level: 'A1',
  topic: 'Предлоги с Akkusativ (Тест)',
  questions: [
    {
      id: 'a1-praep-akk-test-q1',
      type: 'multiple_choice',
      question: 'Какой предлог означает "для"?',
      options: ['durch', 'für', 'gegen', 'ohne'],
      correctAnswer: 'für',
      explanation: 'Предлог "für" означает "для" и требует Akkusativ.',
    },
    {
      id: 'a1-praep-akk-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль: Ich gehe durch ___ (der Park).',
      sentenceParts: ['Ich gehe durch ', ' Park.'],
      correctAnswer: 'den',
      explanation: 'Предлог "durch" требует Akkusativ. "Der Park" (м.р.) в Akkusativ становится "den Park".',
    },
    {
      id: 'a1-praep-akk-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение:',
      options: [
        'Er spielt gegen sein Bruder.',
        'Er spielt gegen seinem Bruder.',
        'Er spielt gegen seinen Bruder.'
      ],
      correctAnswer: 'Er spielt gegen seinen Bruder.',
      explanation: 'Предлог "gegen" требует Akkusativ. "Sein Bruder" (м.р.) в Akkusativ становится "seinen Bruder".',
    },
    {
      id: 'a1-praep-akk-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Wir fahren ___ die Stadt (ж.р.) ___ das Meer (ср.р.). (используйте "durch" и "um")',
      sentenceParts: ['Wir fahren ', ' die Stadt ', ' das Meer.'], // durch, um
      correctAnswer: 'durch, um', // Зависит от задумки, но для примера
      explanation: 'Возможный вариант: "Wir fahren durch die Stadt um das Meer." (Мы едем через город вокруг моря.) Оба предлога требуют Akkusativ. "die Stadt" и "das Meer" не меняют форму в Akkusativ.',
    },
    {
      id: 'a1-praep-akk-test-q5',
      type: 'multiple_choice',
      question: 'Какой предлог используется для указания точного времени, например, "___ 8 Uhr"?',
      options: ['für', 'gegen', 'um', 'ohne'],
      correctAnswer: 'um',
      explanation: 'Предлог "um" используется для указания точного времени и требует Akkusativ (хотя "Uhr" здесь не склоняется).',
    }
  ],
};
