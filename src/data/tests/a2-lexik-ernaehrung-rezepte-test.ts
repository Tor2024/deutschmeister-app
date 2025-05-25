
import type { Test } from '@/types';

export const testA2LexikErnaehrungRezepte: Test = {
  id: 'a2-lexik-ernaehrung-rezepte-test',
  level: 'A2',
  topic: 'Питание, рецепты и предпочтения в еде (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-ernaehrung-rezepte-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "ингредиент"?',
      options: ['das Gericht', 'die Zutat', 'das Rezept', 'der Geschmack'],
      correctAnswer: 'die Zutat',
      explanation: '"Die Zutat" (мн.ч. die Zutaten) означает "ингредиент".',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ gern Pizza." (есть)',
      sentenceParts: ['Ich ', ' gern Pizza.'],
      correctAnswer: 'esse',
      explanation: '"Есть, кушать" по-немецки "essen". Для "ich" форма "esse".',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Это блюдо очень острое."',
      prompt: 'Это блюдо очень острое.',
      languageDirection: 'to_german',
      correctAnswer: 'Dieses Gericht ist sehr scharf.',
      explanation: '"Блюдо" - "das Gericht". "Острый" - "scharf".',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "заказывать (в ресторане)"?',
      options: ['kochen', 'backen', 'bestellen', 'empfehlen'],
      correctAnswer: 'bestellen',
      explanation: '"Bestellen" означает "заказывать".',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните фразу: "Als ___ gibt es heute Apfelkuchen."',
      sentenceParts: ['Als ', ' gibt es heute Apfelkuchen.'],
      correctAnswer: 'Nachtisch', // или Dessert
      explanation: '"Nachtisch" или "Dessert" означает "десерт".',
    },
  ],
};
