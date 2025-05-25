
import type { Test } from '@/types';

export const testB2KomplexeSatzverbindungen: Test = {
  id: 'b2-komplexe-satzverbindungen-test',
  level: 'B2',
  topic: 'Сложные союзы и коннекторы (Тест)',
  questions: [
    {
      id: 'b2-komplexekonj-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильный двойной союз: "___ er arbeitet viel, ___ er hat auch Zeit für seine Hobbys."',
      options: ['Weder ... noch', 'Nicht nur ... sondern auch', 'Entweder ... oder', 'Sowohl ... als auch'],
      correctAnswer: 'Nicht nur ... sondern auch',
      explanation: '"Не только ..., но и" подходит по смыслу: "Он не только много работает, но и у него есть время на хобби".',
    },
    {
      id: 'b2-komplexekonj-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте вторую часть двойного союза: "Ich möchte ___ Äpfel ___ Birnen kaufen."',
      sentenceParts: ['Ich möchte sowohl Äpfel ', ' Birnen kaufen.'],
      correctAnswer: 'als auch',
      explanation: 'Союз "sowohl ... als auch" (как ... так и).',
    },
    {
      id: 'b2-komplexekonj-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Чем больше ты читаешь, тем умнее ты становишься."',
      prompt: 'Чем больше ты читаешь, тем умнее ты становишься.',
      languageDirection: 'to_german',
      correctAnswer: 'Je mehr du liest, desto klüger wirst du.',
      explanation: 'Конструкция "je ... desto". В части с "je" глагол в конце ("je mehr du liest"), в части с "desto" сравнительная степень прилагательного идет сразу после "desto", затем глагол и подлежащее ("desto klüger wirst du").',
    },
    {
      id: 'b2-komplexekonj-test-q4',
      type: 'multiple_choice',
      question: 'Какая конструкция используется для выражения выбора между двумя вариантами?',
      options: ['weder ... noch', 'sowohl ... als auch', 'entweder ... oder', 'je ... desto'],
      correctAnswer: 'entweder ... oder',
      explanation: '"Entweder ... oder" (либо ... либо) используется для представления альтернатив.',
    },
    {
      id: 'b2-komplexekonj-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Das Auto ist ___ sehr alt, ___ es fährt noch gut."',
      sentenceParts: ['Das Auto ist ', ' sehr alt, ', ' es fährt noch gut.'],
      correctAnswer: 'zwar, aber', // или jedoch, dennoch
      explanation: 'Конструкция "zwar ..., aber/jedoch/dennoch" (хотя/правда ..., но/однако). "Das Auto ist zwar sehr alt, aber es fährt noch gut."',
    },
    {
      id: 'b2-komplexekonj-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "Он не ест ни мясо, ни рыбу."',
      prompt: 'Он не ест ни мясо, ни рыбу.',
      languageDirection: 'to_german',
      correctAnswer: 'Er isst weder Fleisch noch Fisch.',
      explanation: 'Для двойного отрицания используется "weder ... noch". Глагол "isst" стоит в утвердительной форме.',
    },
  ],
};
