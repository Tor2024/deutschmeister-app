
import type { Test } from '@/types';

export const testB1Konsekutivsaetze: Test = {
  id: 'b1-konsekutivsaetze-test',
  level: 'B1',
  topic: 'Придаточные следствия (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-konsekutiv-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант для соединения предложений: "Der Film war sehr langweilig. Ich bin eingeschlafen."',
      options: [
        'Der Film war so langweilig, dass ich eingeschlafen bin.',
        'Der Film war zu langweilig, als dass ich eingeschlafen wäre.',
        'Der Film war solcher langweilig, dass ich eingeschlafen bin.'
      ],
      correctAnswer: 'Der Film war so langweilig, dass ich eingeschlafen bin.',
      explanation: 'Конструкция "so + прилагательное (langweilig), dass..." используется для выражения следствия.',
    },
    {
      id: 'b1-konsekutiv-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящие слова: Es war ___ Hitze, ___ wir nicht nach draußen gehen konnten.',
      sentenceParts: ['Es war ', ' Hitze, ', ' wir nicht nach draußen gehen konnten.'],
      correctAnswer: 'solche, dass',
      explanation: 'При существительном ("Hitze" - женский род) используется "solche" (склоняется как прилагательное). Придаточное вводится союзом "dass".',
    },
    {
      id: 'b1-konsekutiv-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он говорил так тихо, что я его не понял."',
      prompt: 'Он говорил так тихо, что я его не понял.',
      languageDirection: 'to_german',
      correctAnswer: 'Er sprach so leise, dass ich ihn nicht verstanden habe.',
      explanation: 'Используется конструкция "so + наречие (leise), dass...".',
    },
    {
      id: 'b1-konsekutiv-test-q4',
      type: 'multiple_choice',
      question: 'Какая конструкция используется для выражения негативного следствия "слишком..., чтобы..."?',
      options: ['so...dass', 'solch-...dass', 'zu..., als dass...'],
      correctAnswer: 'zu..., als dass...',
      explanation: 'Конструкция "zu + Adjektiv/Adverb, als dass..." выражает, что что-то невозможно или нецелесообразно из-за высокой степени качества.',
    },
    {
      id: 'b1-konsekutiv-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Das Kleid ist ___ teuer, ___ ich es mir kaufen könnte.',
      sentenceParts: ['Das Kleid ist ', ' teuer, ', ' ich es mir kaufen könnte.'],
      correctAnswer: 'zu, als dass',
      explanation: 'Здесь выражается, что платье слишком дорогое, чтобы его можно было купить. Используется "zu..., als dass...". В придаточном предложении часто используется Konjunktiv II.',
    },
  ],
};
