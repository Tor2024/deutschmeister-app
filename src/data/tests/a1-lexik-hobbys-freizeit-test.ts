
import type { Test } from '@/types';

export const testA1LexikHobbysFreizeit: Test = {
  id: 'a1-lexik-hobbys-freizeit-test',
  level: 'A1',
  topic: 'Хобби и свободное время (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a1-lexik-hobbys-freizeit-test-q1',
      type: 'multiple_choice',
      question: 'Какое немецкое слово означает "хобби"?',
      options: ['die Freizeit', 'der Sport', 'das Hobby', 'das Spiel'],
      correctAnswer: 'das Hobby',
      explanation: '"Das Hobby" означает "хобби".',
    },
    {
      id: 'a1-lexik-hobbys-freizeit-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящий глагол: "Sie ___ gern im Chor."',
      sentenceParts: ['Sie ', ' gern im Chor.'],
      correctAnswer: 'singt',
      explanation: '"Петь" по-немецки "singen". Для "sie" (она) форма "singt".',
    },
    {
      id: 'a1-lexik-hobbys-freizeit-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы часто ходим гулять."',
      prompt: 'Мы часто ходим гулять.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir gehen oft spazieren.',
      explanation: '"Ходить гулять" - "spazieren gehen".',
    },
    {
      id: 'a1-lexik-hobbys-freizeit-test-q4',
      type: 'multiple_choice',
      question: 'Какое выражение означает "заниматься спортом"?',
      options: ['Musik hören', 'Freunde treffen', 'Sport treiben', 'Rad fahren'],
      correctAnswer: 'Sport treiben',
      explanation: '"Sport treiben" (или "Sport machen") означает "заниматься спортом".',
    },
    {
      id: 'a1-lexik-hobbys-freizeit-test-q5',
      type: 'fill_in_the_blank',
      question: 'Заполните пропуск: "Was machst du in deiner ___?"',
      sentenceParts: ['Was machst du in deiner ', '?'],
      correctAnswer: 'Freizeit',
      explanation: '"Freizeit" означает "свободное время".',
    },
  ],
};
