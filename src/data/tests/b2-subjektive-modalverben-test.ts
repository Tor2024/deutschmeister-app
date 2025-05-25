
import type { Test } from '@/types';

export const testB2SubjektiveModalverben: Test = {
  id: 'b2-subjektive-modalverben-test',
  level: 'B2',
  topic: 'Субъективное значение модальных глаголов (Тест)',
  questions: [
    {
      id: 'b2-subj-modal-test-q1',
      type: 'multiple_choice',
      question: 'Какой модальный глагол выражает почти полную уверенность говорящего в предположении (наверняка, должно быть)?',
      options: ['könnte', 'dürfte', 'muss', 'sollte'],
      correctAnswer: 'muss',
      explanation: '`muss` в субъективном значении выражает высокую степень уверенности в предположении.',
    },
    {
      id: 'b2-subj-modal-test-q2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Die Straße ist nass. Es ___ ___ (regnen) in der Nacht."',
      sentenceParts: ['Die Straße ist nass. Es ', ' in der Nacht ', '.'],
      correctAnswer: 'muss geregnet haben',
      explanation: 'Предположение о прошедшем событии (дождь ночью) с высокой степенью уверенности выражается через `muss` + Infinitiv II (geregnet haben).',
    },
    {
      id: 'b2-subj-modal-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Говорят, он выиграл в лотерею."',
      prompt: 'Говорят, он выиграл в лотерею.',
      languageDirection: 'to_german',
      correctAnswer: 'Er soll im Lotto gewonnen haben.',
      explanation: 'Для передачи слуха или чужого утверждения о прошлом событии используется `sollen` + Infinitiv II (gewonnen haben).',
    },
    {
      id: 'b2-subj-modal-test-q4',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Sie ___ das Buch zu Hause vergessen haben, sie findet es nicht." (возможность)',
      options: ['muss', 'soll', 'kann', 'will'],
      correctAnswer: 'kann', // или könnte
      explanation: '`kann` (или `könnte` для меньшей уверенности) используется для выражения возможности относительно прошедшего события (vergessen haben - Infinitiv II).',
    },
    {
      id: 'b2-subj-modal-test-q5',
      type: 'fill_in_the_blank',
      question: 'Какой модальный глагол используется, когда кто-то утверждает что-то о себе, и говорящий сомневается? "Er ___ alles selbst gemacht haben."',
      sentenceParts: ['Er ', ' alles selbst gemacht haben.'],
      correctAnswer: 'will',
      explanation: '`wollen` в субъективном значении передает утверждение лица о самом себе, часто с оттенком сомнения говорящего.',
    },
    {
      id: 'b2-subj-modal-test-q6',
      type: 'multiple_choice',
      question: 'Как перевести "Это, вероятно, будет стоить дорого"?',
      options: [
        'Das muss teuer sein.',
        'Das dürfte teuer sein.',
        'Das soll teuer sein.'
        ],
      correctAnswer: 'Das dürfte teuer sein.',
      explanation: '"Вероятно" (предположение с высокой степенью вероятности о настоящем/будущем) передается через `dürfte` + Infinitiv I.',
    }
  ],
};
