
import type { Test } from '@/types';

export const testC1Partizipialkonstruktionen: Test = {
  id: 'c1-partizipialkonstruktionen-test',
  level: 'C1',
  topic: 'Причастные обороты (атрибуты) (Тест)',
  questions: [
    {
      id: 'c1-partizip-attr-test-q1',
      type: 'multiple_choice',
      question: 'Преобразуйте относительное придаточное в причастный оборот: "Der Mann, der schnell läuft, ist mein Bruder."',
      options: [
        'Der schnell laufende Mann ist mein Bruder.',
        'Der schnell gelaufene Mann ist mein Bruder.',
        'Der Mann schnell laufend ist mein Bruder.'
      ],
      correctAnswer: 'Der schnell laufende Mann ist mein Bruder.',
      explanation: 'Для активного действия в настоящем времени используется Partizip I + -d + окончание прилагательного. "laufend" + "-e" для мужского рода Nominativ.',
    },
    {
      id: 'c1-partizip-attr-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму причастия: "Das von ihm ___ (schreiben) Buch ist ein Bestseller."',
      sentenceParts: ['Das von ihm ', ' Buch ist ein Bestseller.'],
      correctAnswer: 'geschriebene',
      explanation: 'Partizip II от "schreiben" - "geschrieben". Так как "Buch" среднего рода (das Buch) и стоит в Nominativ, причастие получает окончание -e: das geschriebene Buch.',
    },
    {
      id: 'c1-partizip-attr-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя причастный оборот: "Дети, играющие во дворе, громко смеются."',
      prompt: 'Дети, играющие во дворе, громко смеются.',
      languageDirection: 'to_german',
      correctAnswer: 'Die im Hof spielenden Kinder lachen laut.',
      explanation: 'Partizip I от "spielen" - "spielend". Расширенный причастный оборот: "die im Hof spielenden Kinder".',
    },
    {
      id: 'c1-partizip-attr-test-q4',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант причастного оборота для: "Der Brief, der gestern angekommen ist, ..."',
      options: [
        'Der gestern ankommende Brief ...',
        'Der gestern angekommene Brief ...',
        'Der angekommene gestern Brief ...'
      ],
      correctAnswer: 'Der gestern angekommene Brief ...',
      explanation: 'Глагол "ankommen" образует Perfekt с "sein", поэтому Partizip II ("angekommen") выражает завершенное активное действие. Оборот: "der gestern angekommene Brief".',
    },
    {
      id: 'c1-partizip-attr-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение, используя расширенный причастный оборот: "Die ___ (gestern / veröffentlichen / Nachricht) überraschte alle."',
      sentenceParts: ['Die ', ' überraschte alle.'],
      correctAnswer: 'gestern veröffentlichte Nachricht',
      explanation: 'Partizip II "veröffentlicht" + окончание -e (для женского рода Nominativ). "Die gestern veröffentlichte Nachricht".',
    }
  ],
};
