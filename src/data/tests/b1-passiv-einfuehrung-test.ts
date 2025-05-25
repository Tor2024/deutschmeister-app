
import type { Test } from '@/types';

export const testB1PassivEinfuehrung: Test = {
  id: 'b1-passiv-einfuehrung-test',
  level: 'B1',
  topic: 'Пассивный залог (Введение) (Тест)',
  questions: [
    {
      id: 'b1-passiv-einf-test-q1',
      type: 'multiple_choice',
      question: 'Преобразуйте предложение в Präsens Passiv: "Der Arzt untersucht den Patienten."',
      options: [
        'Der Patient untersucht den Arzt.',
        'Der Patient wird untersucht.',
        'Der Patient ist untersucht worden.',
        'Der Patient wurde untersucht.'
      ],
      correctAnswer: 'Der Patient wird untersucht.',
      explanation: 'Präsens Passiv: Subjekt (Der Patient) + wird + Partizip II (untersucht).',
    },
    {
      id: 'b1-passiv-einf-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму вспомогательного глагола (Präteritum Passiv): Das Fenster ___ gestern ___. (öffnen)',
      sentenceParts: ['Das Fenster ', ' gestern ', '.'],
      correctAnswer: 'wurde, geöffnet',
      explanation: 'Präteritum Passiv: wurde + Partizip II (geöffnet). "Das Fenster wurde gestern geöffnet."',
    },
    {
      id: 'b1-passiv-einf-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (Präsens Passiv): "Этот дом продается."',
      prompt: 'Этот дом продается.',
      languageDirection: 'to_german',
      correctAnswer: 'Dieses Haus wird verkauft.',
      explanation: 'Präsens Passiv: wird + Partizip II (verkauft).',
    },
    {
      id: 'b1-passiv-einf-test-q4',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение в Präteritum Passiv с указанием исполнителя:',
      options: [
        'Das Bild malte von dem Künstler.',
        'Das Bild wurde von dem Künstler gemalt.',
        'Das Bild ist von dem Künstler gemalt worden.'
      ],
      correctAnswer: 'Das Bild wurde von dem Künstler gemalt.',
      explanation: 'Präteritum Passiv образуется с "wurde" + Partizip II. Исполнитель действия указывается с "von + Dativ".',
    },
    {
      id: 'b1-passiv-einf-test-q5',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в Präsens Passiv, указав исполнителя: "Die Schüler lesen das Buch."',
      sentenceParts: ['Das Buch ', ' von den Schülern ', '.'],
      correctAnswer: 'wird, gelesen',
      explanation: 'Präsens Passiv: "Das Buch" становится подлежащим, "wird gelesen". Исполнитель "von den Schülern".',
    },
  ],
};
