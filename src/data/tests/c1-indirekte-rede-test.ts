
import type { Test } from '@/types';

export const testC1IndirekteRede: Test = {
  id: 'c1-indirekte-rede-test',
  level: 'C1',
  topic: 'Косвенная речь (Тест)',
  questions: [
    {
      id: 'c1-indirekte-test-q1',
      type: 'multiple_choice',
      question: 'Преобразуйте в косвенную речь (Konjunktiv I): Er sagt: "Ich komme heute Abend."',
      options: [
        'Er sagt, er kommt heute Abend.',
        'Er sagt, er komme heute Abend.',
        'Er sagt, er käme heute Abend.'
      ],
      correctAnswer: 'Er sagt, er komme heute Abend.',
      explanation: 'Präsens в прямой речи переходит в Konjunktiv I Präsens. Konjunktiv I от "kommt" (3 л. ед.ч. для "er") - "komme".',
    },
    {
      id: 'c1-indirekte-test-q2',
      type: 'fill_in_the_blank',
      question: 'Косвенная речь: Sie fragte, ___ ich ihr helfen ___ . (können - Präteritum в прямой речи)',
      sentenceParts: ['Sie fragte, ', ' ich ihr helfen ', '.'],
      correctAnswer: 'ob, könne', // или könnte
      explanation: 'Общий вопрос вводится союзом "ob". Präteritum в прямой речи ("konnte ich?") может переходить в Konjunktiv II Präteritum ("könnte") или Konjunktiv I Präteritum ("könne"). Для "ich" Konj. I от "können" - "könne".',
    },
    {
      id: 'c1-indirekte-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (косвенная речь): Он утверждал, что никогда не видел этого человека.',
      prompt: 'Он утверждал, что никогда не видел этого человека.',
      languageDirection: 'to_german',
      correctAnswer: 'Er behauptete, er habe diesen Menschen nie gesehen.',
      explanation: 'Perfekt в прямой речи ("Ich habe nie gesehen") переходит в Konjunktiv Perfekt (Konj. I от haben + Part. II). "Er habe ... gesehen".',
    },
    {
      id: 'c1-indirekte-test-q4',
      type: 'multiple_choice',
      question: 'Прямая речь: "Geh sofort nach Hause!", befahl der Vater seinem Sohn. Какая форма косвенной речи наиболее подходит?',
      options: [
        'Der Vater befahl seinem Sohn, er geht sofort nach Hause.',
        'Der Vater befahl seinem Sohn, er solle sofort nach Hause gehen.',
        'Der Vater befahl seinem Sohn, ob er sofort nach Hause geht.'
      ],
      correctAnswer: 'Der Vater befahl seinem Sohn, er solle sofort nach Hause gehen.',
      explanation: 'Повелительное наклонение часто передается через "sollen" в Konjunktiv. Konj. I "solle" для "er".',
    },
    {
      id: 'c1-indirekte-test-q5',
      type: 'fill_in_the_blank',
      question: 'Косвенная речь (Konj. II как замена): Meine Freunde sagten: "Wir fahren morgen ans Meer." -> Meine Freunde sagten, sie ___ am folgenden Tag ans Meer ___.',
      sentenceParts: ['Meine Freunde sagten, sie ', ' am folgenden Tag ans Meer ', '.'],
      correctAnswer: 'würden, fahren', // или führen (Konj.II от fahren)
      explanation: 'Konj. I "fahren" для "sie" (они) совпадает с индикативом. Используем замену: "würden fahren" или собственную форму Konj. II "führen" (но "würden fahren" чаще). "morgen" -> "am folgenden Tag".',
    }
  ],
};
