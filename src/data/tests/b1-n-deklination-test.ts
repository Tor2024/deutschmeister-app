
import type { Test } from '@/types';

export const testB1NDeklination: Test = {
  id: 'b1-n-deklination-test',
  level: 'B1',
  topic: 'n-Deklination (Тест)',
  questions: [
    {
      id: 'b1-n-dekl-test-q1',
      type: 'multiple_choice',
      question: 'Какое окончание имеет существительное "der Junge" (n-Deklination) в Akkusativ Singular?',
      options: ['-e', '-en', '-s', 'нет окончания'],
      correctAnswer: '-en',
      explanation: '"Der Junge" относится к n-Deklination и получает окончание -(e)n во всех падежах единственного числа, кроме Nominativ. Akkusativ: den Jungen.',
    },
    {
      id: 'b1-n-dekl-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: "Ich sehe den (Präsident) ___."',
      sentenceParts: ['Ich sehe den (Präsident) ', '.'],
      correctAnswer: 'Präsidenten',
      explanation: 'Глагол "sehen" требует Akkusativ. "Der Präsident" - существительное n-Deklination. Akkusativ Singular: den Präsidenten.',
    },
    {
      id: 'b1-n-dekl-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение: "Der Polizist hilft ___ (der Zeuge)."',
      options: [
        'dem Zeuge',
        'den Zeugen',
        'dem Zeugen',
        'des Zeugen'
      ],
      correctAnswer: 'dem Zeugen',
      explanation: 'Глагол "helfen" требует Dativ. "Der Zeuge" (свидетель) относится к n-Deklination. Dativ Singular: dem Zeugen.',
    },
    {
      id: 'b1-n-dekl-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Das ist das Auto meines (Nachbar) ___."',
      sentenceParts: ['Das ist das Auto meines (Nachbar) ', '.'],
      correctAnswer: 'Nachbarn',
      explanation: '"Der Nachbar" - существительное n-Deklination. Genitiv Singular после "meines": meines Nachbarn.',
    },
    {
      id: 'b1-n-dekl-test-q5',
      type: 'multiple_choice',
      question: 'Какая форма множественного числа правильная для "der Mensch"?',
      options: ['die Mensche', 'die Menschen', 'die Menscher', 'die Mensch'],
      correctAnswer: 'die Menschen',
      explanation: '"Der Mensch" относится к n-Deklination, множественное число - "die Menschen".',
    },
    {
      id: 'b1-n-dekl-test-q6',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму для "der Herr" в Dativ Singular: "Ich spreche mit ___ Müller."',
      sentenceParts: ['Ich spreche mit ', ' Müller.'],
      correctAnswer: 'Herrn',
      explanation: '"Der Herr" имеет особую форму склонения: Dativ Singular "dem Herrn" (без артикля в обращении - "Herrn").',
    }
  ],
};
