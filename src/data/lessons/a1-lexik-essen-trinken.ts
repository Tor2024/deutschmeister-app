
import type { Lesson } from '@/types';

export const lessonA1LexikEssenTrinken: Lesson = {
  id: 'a1-lexik-essen-trinken',
  level: 'A1',
  topic: 'Еда и напитки (Essen und Trinken)',
  theory: `
В этом уроке мы выучим основные слова, связанные с едой и напитками, а также полезные фразы для использования в магазине или кафе.

**Основные слова:**
- **das Essen** - еда, приём пищи
- **das Trinken** - питьё, напитки
- **essen** - есть, кушать
- **trinken** - пить
- **möchten** - хотел бы
- **kaufen** - покупать
- **schmecken** - быть на вкус, нравиться (о еде)

**Полезные фразы:**
- *Ich möchte einen Kaffee, bitte.* (Я хотел бы кофе, пожалуйста.)
- *Was kostet das?* (Сколько это стоит?)
- *Ich esse gern Pizza.* (Я люблю есть пиццу.)
- *Das schmeckt gut!* (Это вкусно!)
- *Haben Sie Brot?* (У вас есть хлеб?)
`,
  vocabulary: [
    { german: 'das Essen', russian: 'еда' },
    { german: 'das Getränk (-e)', russian: 'напиток' },
    { german: 'essen (isst)', russian: 'есть, кушать', example: 'Was isst du gern?' },
    { german: 'trinken', russian: 'пить', example: 'Ich trinke Wasser.' },
    { german: 'das Brot (-e)', russian: 'хлеб', example: 'Ich kaufe Brot.' },
    { german: 'die Milch', russian: 'молоко (без мн.ч.)', example: 'Kinder trinken gern Milch.' },
    { german: 'das Wasser', russian: 'вода (без мн.ч.)', example: 'Ein Glas Wasser, bitte.' },
    { german: 'der Apfel (Äpfel)', russian: 'яблоко', example: 'Ein Apfel pro Tag ist gesund.' },
    { german: 'die Banane (-n)', russian: 'банан', example: 'Ich esse eine Banane.' },
    { german: 'der Käse (-)', russian: 'сыр', example: 'Magst du Käse?' },
    { german: 'die Wurst (Würste)', russian: 'колбаса, сосиска', example: 'Brot mit Wurst.' },
    { german: 'das Gemüse (-)', russian: 'овощи (собират.)', example: 'Gemüse ist gesund.' },
    { german: 'das Obst', russian: 'фрукты (собират.)', example: 'Ich esse gern Obst.' },
    { german: 'der Kaffee (-s)', russian: 'кофе', example: 'Möchten Sie einen Kaffee?' },
    { german: 'der Tee (-s)', russian: 'чай', example: 'Ich trinke Tee mit Zitrone.' },
    { german: 'der Saft (Säfte)', russian: 'сок', example: 'Apfelsaft oder Orangensaft?' },
    { german: 'Hunger haben', russian: 'быть голодным', example: 'Ich habe Hunger.' },
    { german: 'Durst haben', russian: 'хотеть пить, испытывать жажду', example: 'Hast du Durst?' },
    { german: 'lecker', russian: 'вкусный', example: 'Die Pizza ist sehr lecker.' },
    { german: 'möchten', russian: 'хотел бы (вежливая форма wollen)', example: 'Ich möchte bezahlen.' },
  ],
  readingText: `
Hallo, mein Name ist Lisa.
Zum Frühstück esse ich gern Brot mit Marmelade. Ich trinke dazu einen Tee.
Mein Bruder Paul isst morgens Müsli mit Milch. Er mag keinen Tee, er trinkt lieber Kakao.
Mittags essen wir oft Nudeln oder Reis mit Gemüse. Paul isst gern Fleisch, aber ich esse lieber Fisch.
Abends essen wir nicht viel. Manchmal nur einen Joghurt oder Obst.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-essen-trinken-rq1',
      question: 'Что Лиза обычно ест на завтрак?',
      options: ['Мюсли с молоком', 'Хлеб с мармеладом', 'Йогурт', 'Макароны с овощами'],
      correctAnswer: 'Хлеб с мармеладом',
      explanation: 'В тексте сказано: "Zum Frühstück esse ich gern Brot mit Marmelade."'
    },
    {
      id: 'a1-lexik-essen-trinken-rq2',
      question: 'Что Пауль пьет на завтрак?',
      options: ['Чай', 'Кофе', 'Какао', 'Сок'],
      correctAnswer: 'Какао',
      explanation: 'В тексте сказано: "Er mag keinen Tee, er trinkt lieber Kakao."'
    }
  ],
  exercises: [
    {
      id: 'a1-lexik-essen-trinken-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "пить"?',
      options: ['essen', 'kaufen', 'trinken', 'schmecken'],
      correctAnswer: 'trinken',
      explanation: '"trinken" означает "пить".',
    },
    {
      id: 'a1-lexik-essen-trinken-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich habe großen ___ (голод)."',
      sentenceParts: ['Ich habe großen ', '.'],
      correctAnswer: 'Hunger',
      explanation: '"Голод" по-немецки "der Hunger". "Hunger haben" - быть голодным.',
    },
    {
      id: 'a1-lexik-essen-trinken-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я хотел бы яблочный сок."',
      prompt: 'Я хотел бы яблочный сок.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich möchte einen Apfelsaft.',
      explanation: '"Я хотел бы" - "Ich möchte". "Яблочный сок" - "der Apfelsaft" (Akkusativ: einen Apfelsaft).',
    },
    {
      id: 'a1-lexik-essen-trinken-ex4',
      type: 'multiple_choice',
      question: 'Что означает "lecker"?',
      options: ['дорогой', 'дешевый', 'вкусный', 'полезный'],
      correctAnswer: 'вкусный',
      explanation: '"Lecker" означает "вкусный".',
    },
  ],
};
