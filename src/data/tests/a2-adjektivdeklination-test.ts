
import type { Test } from '@/types';

export const testA2Adjektivdeklination: Test = {
  id: 'a2-adjektivdeklination-test',
  level: 'A2',
  topic: 'Склонение прилагательных (основы) (Тест)',
  questions: [
    {
      id: 'a2-adjdekl-test-q1',
      type: 'multiple_choice',
      question: 'Вставьте правильное окончание: "Der klein___ Hund spielt im Garten."',
      options: ['-e', '-er', '-es', '-en'],
      correctAnswer: '-e',
      explanation: 'После определенного артикля "der" (Nominativ, мужской род) прилагательное "klein" получает окончание -e (слабое склонение).',
    },
    {
      id: 'a2-adjdekl-test-q2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Ich sehe ein___ rot___ Auto (Akkusativ, ср.р.)."',
      sentenceParts: ['Ich sehe ein', ' rot', ' Auto.'],
      correctAnswer: ' rotes', // ein rotes Auto
      explanation: 'После неопределенного артикля "ein" перед существительным среднего рода "Auto" в Akkusativ, прилагательное "rot" получает окончание -es (смешанное склонение).',
    },
    {
      id: 'a2-adjdekl-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Wir trinken kalt___ Milch (Nominativ/Akkusativ, ж.р., без артикля)."',
      options: ['kalte', 'kalter', 'kaltes', 'kalten'],
      correctAnswer: 'kalte',
      explanation: 'Без артикля перед существительным женского рода "Milch" в Nominativ/Akkusativ используется сильное склонение, окончание -e.',
    },
    {
      id: 'a2-adjdekl-test-q4',
      type: 'fill_in_the_blank',
      question: 'Вставьте окончание: "Hast du den neu___ Film gesehen (Akkusativ, м.р.)?"',
      sentenceParts: ['Hast du den neu', ' Film gesehen?'],
      correctAnswer: 'en',
      explanation: 'После определенного артикля "den" (Akkusativ, мужской род) прилагательное "neu" получает окончание -en (слабое склонение).',
    },
    {
      id: 'a2-adjdekl-test-q5',
      type: 'multiple_choice',
      question: 'Какое окончание у прилагательного "interessant" в фразе "Das ist eine interessant___ Geschichte (Nominativ, ж.р.)."?',
      options: ['-e', '-er', '-es', '-en'],
      correctAnswer: '-e',
      explanation: 'После неопределенного артикля "eine" (Nominativ, женский род) прилагательное "interessant" получает окончание -e (смешанное склонение).',
    }
  ],
};
