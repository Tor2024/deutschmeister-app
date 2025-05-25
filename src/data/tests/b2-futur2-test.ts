
import type { Test } from '@/types';

export const testB2Futur2: Test = {
  id: 'b2-futur2-test',
  level: 'B2',
  topic: 'Будущее совершенное время (Futur II) (Тест)',
  questions: [
    {
      id: 'b2-futur2-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную конструкцию Futur II: "К тому времени он, вероятно, ___ (закончить) работу."',
      options: [
        'wird die Arbeit beendet haben.',
        'wird die Arbeit beenden haben.',
        'wird die Arbeit beendet sein.',
        'hat die Arbeit beendet werden.'
      ],
      correctAnswer: 'wird die Arbeit beendet haben.',
      explanation: 'Futur II для глагола "beenden" (образует Perfekt с "haben"): wird + Partizip II (beendet) + haben.',
    },
    {
      id: 'b2-futur2-test-q2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение в Futur II (предположение о прошлом): "Sie sieht müde aus. Sie ___ letzte Nacht schlecht ___ ___."',
      sentenceParts: ['Sie sieht müde aus. Sie ', ' letzte Nacht schlecht ', ' ', '.'], // wird, geschlafen, haben
      correctAnswer: 'wird, geschlafen, haben',
      explanation: 'Предположение о прошлом событии с Futur II: wird + Partizip II (geschlafen) + haben. "Sie wird letzte Nacht schlecht geschlafen haben."',
    },
    {
      id: 'b2-futur2-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя Futur II: "Когда ты вернешься, я уже приготовлю ужин."',
      prompt: 'Когда ты вернешься, я уже приготовлю ужин.',
      languageDirection: 'to_german',
      correctAnswer: 'Wenn du zurückkommst, werde ich das Abendessen schon gekocht haben.',
      explanation: 'Завершенное действие в будущем до другого будущего действия: werde + Partizip II (gekocht) + haben.',
    },
    {
      id: 'b2-futur2-test-q4',
      type: 'multiple_choice',
      question: 'Какое значение Futur II выражено в предложении: "Bis 2025 werden sie das Haus gebaut haben."?',
      options: [
        'Предположение о настоящем',
        'Завершенное действие в будущем',
        'Незавершенное действие в будущем',
        'Предположение о прошлом'
      ],
      correctAnswer: 'Завершенное действие в будущем',
      explanation: 'Конструкция указывает, что к определенному моменту в будущем (bis 2025) действие (строительство дома) будет завершено.',
    },
    {
      id: 'b2-futur2-test-q5',
      type: 'fill_in_the_blank',
      question: 'Образуйте Futur II: "Er (verpassen) den Zug wahrscheinlich."',
      sentenceParts: ['Er ', ' den Zug wahrscheinlich ', ' ', '.'], // wird, verpasst, haben
      correctAnswer: 'wird, verpasst, haben',
      explanation: 'Предположение о прошлом (он, вероятно, уже опоздал): wird + Partizip II (verpasst) + haben. "Er wird den Zug wahrscheinlich verpasst haben."',
    },
  ],
};
