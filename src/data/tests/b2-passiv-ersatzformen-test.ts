
import type { Test } from '@/types';

export const testB2PassivErsatzformen: Test = {
  id: 'b2-passiv-ersatzformen-test',
  level: 'B2',
  topic: 'Альтернативы пассивному залогу (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-passiversatz-test-q1',
      type: 'multiple_choice',
      question: 'Какая конструкция с `man` заменяет пассивное предложение: "Die Tür wird geöffnet."?',
      options: ['Man öffnet die Tür.', 'Man wird die Tür öffnen.', 'Man hat die Tür geöffnet.'],
      correctAnswer: 'Man öffnet die Tür.',
      explanation: 'Пассив в Präsens "Die Tür wird geöffnet" соответствует активной конструкции с "man" в Präsens: "Man öffnet die Tür".',
    },
    {
      id: 'b2-passiversatz-test-q2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте, используя `sein + zu + Infinitiv`: "Diese Bücher müssen gelesen werden."',
      sentenceParts: ['Diese Bücher ', ' ', '.'],
      correctAnswer: 'sind zu lesen',
      explanation: 'Пассив с модальным глаголом "müssen gelesen werden" (должны быть прочитаны) заменяется на "sind zu lesen".',
    },
    {
      id: 'b2-passiversatz-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя альтернативу пассиву: "Эту задачу можно решить."',
      prompt: 'Эту задачу можно решить.',
      languageDirection: 'to_german',
      correctAnswer: 'Diese Aufgabe lässt sich lösen.',
      // Альтернативы: Diese Aufgabe ist lösbar. / Man kann diese Aufgabe lösen.
      explanation: 'Конструкция "sich lassen + Infinitiv" выражает возможность: "Diese Aufgabe lässt sich lösen".',
    },
    {
      id: 'b2-passiversatz-test-q4',
      type: 'multiple_choice',
      question: 'Какое прилагательное на "-bar" является подходящей заменой для "Der Text kann verstanden werden"?',
      options: ['Der Text ist verständlich.', 'Der Text ist verstehbar.', 'Der Text ist verstandenbar.'],
      correctAnswer: 'Der Text ist verstehbar.',
      // Примечание: "verständlich" также правильно и более употребимо, но "verstehbar" прямо образовано с -bar.
      explanation: 'Прилагательное "verstehbar" (понимаемый, доступный для понимания) образуется от глагола "verstehen" и суффикса "-bar", выражая возможность.',
    },
    {
      id: 'b2-passiversatz-test-q5',
      type: 'fill_in_the_blank',
      question: 'Замените пассив на конструкцию с "sich lesen": "Das Buch wird gern von vielen Leuten gelesen."',
      sentenceParts: ['Das Buch ', ' gern.'],
      correctAnswer: 'liest sich',
      explanation: 'Пассив "wird gelesen" может быть заменен на "liest sich", если речь идет о свойстве предмета (как он читается).',
    },
  ],
};
