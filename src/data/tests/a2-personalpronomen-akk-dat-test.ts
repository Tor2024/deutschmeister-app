
import type { Test } from '@/types';

export const testA2PersonalpronomenAkkDat: Test = {
  id: 'a2-personalpronomen-akk-dat-test',
  level: 'A2',
  topic: 'Личные местоимения (Akkusativ, Dativ) (Тест)',
  questions: [
    {
      id: 'a2-personalpronomen-akkdat-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильное местоимение в Akkusativ: "Der Lehrer sieht ___ (ты)."',
      options: ['du', 'dich', 'dir', 'dein'],
      correctAnswer: 'dich',
      explanation: 'Глагол "sehen" (видеть) требует Akkusativ. "Ты" в Akkusativ - "dich".',
    },
    {
      id: 'a2-personalpronomen-akkdat-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте местоимение в правильной форме: "Ich helfe ___ (она)."',
      sentenceParts: ['Ich helfe ', '.'],
      correctAnswer: 'ihr',
      explanation: 'Глагол "helfen" (помогать) требует Dativ. "Она" в Dativ - "ihr".',
    },
    {
      id: 'a2-personalpronomen-akkdat-test-q3',
      type: 'multiple_choice',
      question: 'Какая форма правильная: "Das Geschenk ist für ___ (он)."',
      options: ['er', 'ihm', 'ihn', 'sein'],
      correctAnswer: 'ihn',
      explanation: 'Предлог "für" (для) всегда требует Akkusativ. "Он" в Akkusativ - "ihn".',
    },
    {
      id: 'a2-personalpronomen-akkdat-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Gefällt ___ (вам, мн.ч. неформ.) das Buch?"',
      sentenceParts: ['Gefällt ', ' das Buch?'],
      correctAnswer: 'euch',
      explanation: 'Глагол "gefallen" (нравиться) требует Dativ. "Вам" (мн.ч. неформ.) в Dativ - "euch".',
    },
    {
      id: 'a2-personalpronomen-akkdat-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Der Arzt gibt ___ (мы) ein Rezept."',
      options: ['wir', 'uns (Akk)', 'uns (Dat)'],
      correctAnswer: 'uns (Dat)',
      explanation: 'Глагол "geben" (давать) используется с Dativ для лица, которому что-то дают. "Мы" в Dativ - "uns".',
    },
     {
      id: 'a2-personalpronomen-akkdat-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "Я не понимаю их (они)."',
      prompt: 'Я не понимаю их (они).',
      languageDirection: 'to_german',
      correctAnswer: 'Ich verstehe sie nicht.',
      explanation: 'Глагол "verstehen" (понимать) требует Akkusativ. "Их" (когда "они") в Akkusativ - "sie".',
    }
  ],
};
