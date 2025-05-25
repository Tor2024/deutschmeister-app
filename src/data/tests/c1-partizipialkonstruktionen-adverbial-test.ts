
import type { Test } from '@/types';

export const testC1PartizipialkonstruktionenAdverbial: Test = {
  id: 'c1-partizipialkonstruktionen-adverbial-test',
  level: 'C1',
  topic: 'Причастные обороты (обстоятельства) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c1-partizip-adv-b-test-q1',
      type: 'multiple_choice',
      question: 'Какое значение имеет причастный оборот в предложении: "Laut singend, betrat er den Raum."?',
      options: ['Kausal (причинное)', 'Temporal (временное - одновременность)', 'Modal (образа действия)', 'Konzessiv (уступительное)'],
      correctAnswer: 'Modal (образа действия)',
      explanation: 'Оборот "Laut singend" (громко поя) описывает, как он вошел в комнату (модальное значение) или что он делал одновременно (временное). Чаще всего интерпретируется как модальное.',
    },
    {
      id: 'c1-partizip-adv-b-test-q2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте придаточное в причастный оборот: "Nachdem sie die Prüfung bestanden hatte, war sie sehr erleichtert."',
      sentenceParts: ['Die Prüfung ', ', war sie sehr erleichtert.'],
      correctAnswer: 'bestanden habend',
      explanation: 'Придаточное времени с "nachdem" (предшествование) можно заменить конструкцией с Partizip Perfekt Aktiv (Partizip II + habend/seiend). "bestanden habend".',
    },
    {
      id: 'c1-partizip-adv-b-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя причастный оборот: "Уставший от долгой поездки, он сразу лег спать."',
      prompt: 'Уставший от долгой поездки, он сразу лег спать.',
      languageDirection: 'to_german',
      correctAnswer: 'Von der langen Reise erschöpft, legte er sich sofort schlafen.',
      explanation: 'Причинное значение: "Von der langen Reise erschöpft" (уставший от долгой поездки). "Erschöpft" - Partizip II.',
    },
    {
      id: 'c1-partizip-adv-b-test-q4',
      type: 'multiple_choice',
      question: 'Выберите наиболее подходящую трансформацию для: "Weil er die Gefahr erkannte, warnte er seine Freunde."',
      options: [
        'Die Gefahr erkennend, warnte er seine Freunde.',
        'Die Gefahr erkannt, warnte er seine Freunde.',
        'Erkennend die Gefahr, warnte er seine Freunde.'
      ],
      correctAnswer: 'Die Gefahr erkennend, warnte er seine Freunde.',
      explanation: 'Причинное придаточное с "weil" и активным глаголом в настоящем времени по отношению к моменту "осознания" заменяется на Partizip I "erkennend".',
    },
    {
      id: 'c1-partizip-adv-b-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "___ (lächeln), nahm sie das Geschenk entgegen."',
      sentenceParts: ['', ', nahm sie das Geschenk entgegen.'],
      correctAnswer: 'Lächelnd',
      explanation: 'Partizip I от "lächeln" (улыбаться) - "lächelnd" (улыбаясь) для описания одновременного действия или образа действия.',
    },
  ],
};
