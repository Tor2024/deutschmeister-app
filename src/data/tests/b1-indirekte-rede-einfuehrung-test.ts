
import type { Test } from '@/types';

export const testB1IndirekteRedeEinfuehrung: Test = {
  id: 'b1-indirekte-rede-einfuehrung-test',
  level: 'B1',
  topic: 'Косвенная речь (Введение) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b1-indirekte-rede-einfuehrung',
  questions: [
    {
      id: 'b1-indirekte-rede-einf-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: "Er sagt, ___ er müde ist."',
      options: ['ob', 'wenn', 'dass', 'weil'],
      correctAnswer: 'dass',
      explanation: 'Союз "dass" (что) вводит косвенное утвердительное предложение.',
    },
    {
      id: 'b1-indirekte-rede-einf-test-q2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в косвенную речь: "Sie fragt: \'Kannst du mir helfen?\'" -> Sie fragt, ___ ich ihr helfen ___.',
      sentenceParts: ['Sie fragt, ', ' ich ihr helfen ', '.'],
      correctAnswer: 'ob, kann', // или könne
      explanation: 'Общий вопрос вводится союзом "ob". Глагол "kann" (или Konj.I "könne") уходит в конец придаточного.',
    },
    {
      id: 'b1-indirekte-rede-einf-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя косвенную речь: "Мой друг сказал, что он придет позже."',
      prompt: 'Мой друг сказал, что он придет позже.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Freund sagte, dass er später kommt.', // или komme
      explanation: 'Косвенная речь с "dass". Глагол "kommt" (или Konj.I "komme") в конце.',
    },
    {
      id: 'b1-indirekte-rede-einf-test-q4',
      type: 'multiple_choice',
      question: 'Какая форма Konjunktiv I от глагола "sein" для "er/sie/es"?',
      options: ['ist', 'war', 'wäre', 'sei'],
      correctAnswer: 'sei',
      explanation: 'Konjunktiv I от "sein" для 3-го лица единственного числа - "sei".',
    },
    {
      id: 'b1-indirekte-rede-einf-test-q5',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте вопрос в косвенную речь: "Wann fängt der Kurs an?" -> "Ich möchte wissen, wann der Kurs ___."',
      sentenceParts: ['Ich möchte wissen, wann der Kurs ', '.'],
      correctAnswer: 'anfängt', // или anfange
      explanation: 'Специальный вопрос вводится тем же вопросительным словом. Глагол "anfängt" (или Konj.I "anfange") в конце придаточного.',
    }
  ],
};
