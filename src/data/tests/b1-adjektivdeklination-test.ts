
import type { Test } from '@/types';

export const testB1Adjektivdeklination: Test = {
  id: 'b1-adjektivdeklination-test',
  level: 'B1',
  topic: 'Склонение прилагательных (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-adjdekl-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильное окончание: Das ist der schnell___ Zug (м.р., Nom.).',
      options: ['-e', '-er', '-es', '-en'],
      correctAnswer: '-e',
      explanation: 'После определенного артикля "der" (мужской род, Nominativ) используется слабое склонение, окончание -e: der schnelle Zug.',
    },
    {
      id: 'b1-adjdekl-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте окончание прилагательного: Ich habe ein___ neu___ Fahrrad (ср.р., Akk.) gekauft.',
      sentenceParts: ['Ich habe ein', ' neu', ' Fahrrad gekauft.'],
      correctAnswer: ' neues', // ein neues Fahrrad
      explanation: 'После неопределенного артикля "ein" (средний род "das Fahrrad", Akkusativ) используется смешанное склонение. Для среднего рода Akkusativ окончание -es: ein neues Fahrrad.',
    },
    {
      id: 'b1-adjdekl-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я пью холодное молоко (ж.р., Akk., без артикля)."',
      prompt: 'Я пью холодное молоко.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich trinke kalte Milch.',
      explanation: 'Перед "Milch" (женский род) нет артикля, поэтому используется сильное склонение. Akkusativ, женский род, окончание -e: kalte Milch.',
    },
    {
      id: 'b1-adjdekl-test-q4',
      type: 'multiple_choice',
      question: 'Какое окончание у прилагательного "interessant" в фразе: "Wir sprechen mit den interessant___ Studenten (мн.ч., Dat.)"?',
      options: ['-e', '-en', '-em', '-er'],
      correctAnswer: '-en',
      explanation: 'После определенного артикля "den" (Dativ Plural) используется слабое склонение, окончание -en: den interessanten Studenten.',
    },
    {
      id: 'b1-adjdekl-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Mein___ alt___ Freund (м.р., Nom.) wohnt in Berlin.',
      sentenceParts: ['Mein', ' alt', ' Freund wohnt in Berlin.'],
      correctAnswer: ' alter', // Mein alter Freund
      explanation: 'После притяжательного местоимения "mein" (мужской род "der Freund", Nominativ) используется смешанное склонение. Для мужского рода Nominativ окончание -er: mein alter Freund.',
    },
    {
      id: 'b1-adjdekl-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "Дорогие друзья (мн.ч., Nom., без артикля), добро пожаловать!"',
      prompt: 'Дорогие друзья, добро пожаловать!',
      languageDirection: 'to_german',
      correctAnswer: 'Liebe Freunde, herzlich willkommen!',
      explanation: 'Без артикля перед существительным мн.ч. "Freunde" в Nominativ используется сильное склонение, окончание -e: Liebe Freunde.',
    },
     {
      id: 'b1-adjdekl-test-q7',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Das ist das Auto mein___ reich___ Onkels (м.р., Gen.)."',
      options: ['-es -es', '-en -en', '-em -en', '-er -en'],
      correctAnswer: '-en -en',
      explanation: 'Genitiv мужского рода ("des Onkels"). После притяжательного местоимения "mein" в Genitiv (meines) прилагательное склоняется по слабому типу: meines reichen Onkels. (Если "Onkels" уже с -s, то meinES reichEN Onkels).',
    },
  ],
};
