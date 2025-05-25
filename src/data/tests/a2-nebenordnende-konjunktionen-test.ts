
import type { Test } from '@/types';

export const testA2NebenordnendeKonjunktionen: Test = {
  id: 'a2-nebenordnende-konjunktionen-test',
  level: 'A2',
  topic: 'Сочинительные союзы (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-nebenkonj-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: "Ich möchte Kaffee, ___ mein Bruder möchte Tee."',
      options: ['und', 'aber', 'oder', 'denn'],
      correctAnswer: 'aber', // или 'und' если простое перечисление, но 'aber' лучше передает противопоставление
      explanation: 'Союз "aber" (а, но) часто используется для противопоставления или простого соединения двух разных предпочтений.',
    },
    {
      id: 'a2-nebenkonj-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящий союз: "Er lernt viel, ___ er will die Prüfung bestehen."',
      sentenceParts: ['Er lernt viel, ', ' er will die Prüfung bestehen.'],
      correctAnswer: 'denn',
      explanation: 'Союз "denn" (потому что, так как) вводит причину и за ним следует прямой порядок слов в главном предложении.',
    },
    {
      id: 'a2-nebenkonj-test-q3',
      type: 'multiple_choice',
      question: 'Какой союз используется, чтобы предложить выбор?',
      options: ['und', 'sondern', 'oder', 'denn'],
      correctAnswer: 'oder',
      explanation: 'Союз "oder" (или) используется для предложения альтернативы или выбора.',
    },
    {
      id: 'a2-nebenkonj-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Sie ist nicht müde, ___ sie ist sehr aktiv."',
      sentenceParts: ['Sie ist nicht müde, ', ' sie ist sehr aktiv.'],
      correctAnswer: 'sondern',
      explanation: 'Союз "sondern" (а, но) используется после отрицания для введения противопоставляющей или исправляющей информации.',
    },
    {
      id: 'a2-nebenkonj-test-q5',
      type: 'multiple_choice',
      question: 'Какое предложение построено правильно с союзом "und"?',
      options: [
        'Ich lese ein Buch und ich höre Musik.',
        'Ich lese ein Buch und höre ich Musik.',
        'Ich lese ein Buch und Musik höre ich.'
      ],
      correctAnswer: 'Ich lese ein Buch und ich höre Musik.',
      explanation: 'Союз "und" соединяет два главных предложения, каждое из которых сохраняет свой порядок слов. "Ich höre Musik" - это правильный порядок слов для второго предложения. (Примечание: "Ich lese ein Buch und höre Musik." - без повторения "ich" - тоже правильно и более естественно, но здесь проверяется понимание, что "und" не меняет порядок слов).',
    }
  ],
};
