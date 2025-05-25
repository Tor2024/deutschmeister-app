
import type { Test } from '@/types';

export const testA2ReflexiveVerben: Test = {
  id: 'a2-reflexive-verben-test',
  level: 'A2',
  topic: 'Возвратные глаголы (Тест)',
  questions: [
    {
      id: 'a2-reflexiv-test-q1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное возвратное местоимение: Ich kämme ___ jeden Morgen.',
      sentenceParts: ['Ich kämme ', ' jeden Morgen.'],
      correctAnswer: 'mich',
      explanation: 'Для "ich" возвратное местоимение в Akkusativ - "mich".',
    },
    {
      id: 'a2-reflexiv-test-q2',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "Freust du ___ auf das Wochenende?"',
      options: ['mich', 'dich', 'sich', 'euch'],
      correctAnswer: 'dich',
      explanation: 'Для "du" возвратное местоимение в Akkusativ - "dich".',
    },
    {
      id: 'a2-reflexiv-test-q3',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол в правильную форму: Wir ___ (sich treffen) heute Abend.',
      sentenceParts: ['Wir ', ' heute Abend.'],
      correctAnswer: 'treffen uns',
      explanation: 'Глагол "treffen" для "wir" - "treffen". Возвратное местоимение "uns".',
    },
    {
      id: 'a2-reflexiv-test-q4',
      type: 'multiple_choice',
      question: 'Какое предложение верное?',
      options: [
        'Er fühlt dich gut.',
        'Er fühlt sich gut.',
        'Er fühlt mich gut.'
      ],
      correctAnswer: 'Er fühlt sich gut.',
      explanation: 'Для "er" возвратное местоимение - "sich". "sich fühlen" - чувствовать себя.',
    },
    {
      id: 'a2-reflexiv-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Ihr müsst ___ beeilen!"',
      sentenceParts: ['Ihr müsst ', ' beeilen!'],
      correctAnswer: 'euch',
      explanation: 'Для "ihr" возвратное местоимение в Akkusativ - "euch".',
    }
  ],
};
