
import type { Test } from '@/types';

export const testA2Negation: Test = {
  id: 'a2-negation-test',
  level: 'A2',
  topic: 'Отрицание (nicht и kein) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-negation-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильное отрицание: "Ich habe ___ Schwester."',
      options: ['nicht', 'kein', 'keine', 'keinen'],
      correctAnswer: 'keine',
      explanation: 'Существительное "Schwester" (ж.р.) здесь используется без определенного артикля, поэтому отрицается с помощью "kein". "Keine Schwester" (никакой сестры/нет сестры).',
    },
    {
      id: 'a2-negation-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте `nicht` или `kein`: Das Essen schmeckt ___ gut.',
      sentenceParts: ['Das Essen schmeckt ', ' gut.'],
      correctAnswer: 'nicht',
      explanation: 'Прилагательное "gut" (хороший) отрицается с помощью "nicht".',
    },
    {
      id: 'a2-negation-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он не может плавать."',
      prompt: 'Он не может плавать.',
      languageDirection: 'to_german',
      correctAnswer: 'Er kann nicht schwimmen.',
      explanation: 'С модальным глаголом "kann" частица "nicht" ставится перед инфинитивом "schwimmen" в конце предложения.',
    },
    {
      id: 'a2-negation-test-q4',
      type: 'multiple_choice',
      question: 'Как правильно отрицать: "Das ist mein Auto."?',
      options: [
        'Das ist mein nicht Auto.',
        'Das ist nicht mein Auto.',
        'Das ist kein mein Auto.'
      ],
      correctAnswer: 'Das ist nicht mein Auto.',
      explanation: 'Существительное с притяжательным местоимением ("mein Auto") отрицается с помощью "nicht", которое ставится перед этим словосочетанием.',
    },
    {
      id: 'a2-negation-test-q5',
      type: 'fill_in_the_blank',
      question: 'Вставьте `nicht` или `kein`: "Sie hat ___ Geld für ein neues Kleid."',
      sentenceParts: ['Sie hat ', ' Geld für ein neues Kleid.'],
      correctAnswer: 'kein',
      explanation: '"Geld" (ср.р.) - неисчисляемое существительное, здесь оно без артикля. Отрицается с помощью "kein".',
    },
    {
      id: 'a2-negation-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "Я не знаю этого мужчину."',
      prompt: 'Я не знаю этого мужчину.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich kenne diesen Mann nicht.',
      explanation: 'Глагол "kennen" с прямым дополнением "diesen Mann". "Nicht" ставится в конце, так как отрицает все действие по отношению к этому объекту.',
    }
  ],
};
