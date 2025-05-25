
import type { Test } from '@/types';

export const testA1Negation: Test = {
  id: 'a1-negation-test',
  level: 'A1',
  topic: 'Отрицание (nicht и kein) (Тест)',
  questions: [
    {
      id: 'a1-negation-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильное отрицание: Das ist ___ Tisch.',
      options: ['nicht', 'kein', 'keine', 'keinen'],
      correctAnswer: 'kein',
      explanation: 'Существительное "Tisch" (м.р.) в утверждении было бы "ein Tisch". Отрицается с помощью "kein".',
    },
    {
      id: 'a1-negation-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте `nicht` или `kein`: Ich habe ___ Geschwister.',
      sentenceParts: ['Ich habe ', ' Geschwister.'],
      correctAnswer: 'keine',
      explanation: 'Существительное "Geschwister" (братья и сестры, мн.ч.) здесь без артикля, отрицается с помощью "keine".',
    },
    {
      id: 'a1-negation-test-q3',
      type: 'multiple_choice',
      question: 'Как правильно сказать: "Я не сплю"?',
      options: ['Ich kein schlafe.', 'Ich schlafe kein.', 'Ich schlafe nicht.'],
      correctAnswer: 'Ich schlafe nicht.',
      explanation: 'Глагол "schlafe" отрицается с помощью "nicht", которое ставится после глагола.',
    },
    {
      id: 'a1-negation-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Das Wetter ist ___ gut heute."',
      sentenceParts: ['Das Wetter ist ', ' gut heute.'],
      correctAnswer: 'nicht',
      explanation: 'Прилагательное "gut" (хороший) отрицается с помощью "nicht".',
    },
    {
      id: 'a1-negation-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильное отрицание для глагола: "Sie ___ heute arbeiten."',
      options: ['kein', 'nicht', 'nichts'],
      correctAnswer: 'nicht',
      explanation: 'Для отрицания глагола "arbeiten" используется частица "nicht". В предложении "Sie arbeitet heute nicht."',
    },
     {
      id: 'a1-negation-test-q6',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму отрицания: "Ich sehe ___ Mann auf der Straße." (der Mann)',
      sentenceParts: ['Ich sehe ', ' Mann auf der Straße.'],
      correctAnswer: 'keinen',
      explanation: 'Глагол "sehen" требует Akkusativ. "Mann" (м.р.) в утверждении с неопределенным артиклем был бы "einen Mann". Отрицание в Akkusativ м.р. - "keinen".',
    }
  ],
};
