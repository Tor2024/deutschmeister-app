
import type { Lesson } from '@/types';

export const lessonA1LexikGefuehleZustaende: Lesson = {
  id: 'a1-lexik-gefuehle-zustaende',
  level: 'A1',
  topic: 'Простые чувства и состояния',
  theory: `
В этом уроке мы выучим слова, чтобы описывать простые чувства и состояния. Это поможет вам рассказать, как вы себя чувствуете.

**Основные чувства:**
- **glücklich** - счастливый (Ich bin glücklich. - Я счастлив.)
- **traurig** - грустный (Das Kind ist traurig. - Ребенок грустный.)
- **zufrieden** - довольный (Bist du zufrieden? - Ты доволен?)
- **böse** - сердитый, злой (Mein Bruder ist böse. - Мой брат сердитый.)

**Основные состояния:**
- **müde** - уставший (Ich bin sehr müde. - Я очень устал.)
- **krank** - больной (Er ist heute krank. - Он сегодня болен.)
- **gesund** - здоровый (Sie ist wieder gesund. - Она снова здорова.)
- **Hunger haben** - быть голодным (Hast du Hunger? - Ты голоден?)
- **Durst haben** - хотеть пить (Ich habe großen Durst. - Я очень хочу пить.)
- **Angst haben** - бояться (Das kleine Mädchen hat Angst vor dem Hund. - Маленькая девочка боится собаки.)

**Простые глаголы:**
- **lachen** - смеяться (Wir lachen viel. - Мы много смеемся.)
- **weinen** - плакать (Warum weinst du? - Почему ты плачешь?)
- **sich freuen** - радоваться (Ich freue mich über das Geschenk. - Я радуюсь подарку.)
`,
  vocabulary: [
    { german: 'glücklich', russian: 'счастливый', example: 'Ich bin heute sehr glücklich.' },
    { german: 'traurig', russian: 'грустный', example: 'Warum bist du so traurig?' },
    { german: 'müde', russian: 'уставший', example: 'Nach der Arbeit bin ich müde.' },
    { german: 'krank', russian: 'больной', example: 'Er kann nicht kommen, er ist krank.' },
    { german: 'gesund', russian: 'здоровый', example: 'Ich fühle mich gesund.' },
    { german: 'zufrieden (mit + D)', russian: 'довольный (чем-л.)', example: 'Bist du zufrieden mit deinem Ergebnis?' },
    { german: 'böse (auf + A)', russian: 'сердитый, злой (на кого-л.)', example: 'Sei nicht böse auf mich.' },
    { german: 'Hunger haben', russian: 'быть голодным, хотеть есть', example: 'Die Kinder haben Hunger.' },
    { german: 'Durst haben', russian: 'хотеть пить, испытывать жажду', example: 'Ich habe Durst nach dem Sport.' },
    { german: 'Angst haben (vor + D)', russian: 'бояться (чего-л.)', example: 'Viele Leute haben Angst vor Spinnen.' },
    { german: 'lachen', russian: 'смеяться', example: 'Wir lachen gern zusammen.' },
    { german: 'weinen', russian: 'плакать', example: 'Das Baby weint.' },
    { german: 'sich freuen (über + A / auf + A)', russian: 'радоваться (чему-л. свершившемуся / предстоящему)', example: 'Ich freue mich auf das Wochenende.' },
  ],
  readingText: `
Anna ist heute sehr glücklich. Sie hat Geburtstag! Ihre Freunde kommen am Abend. Anna freut sich auf die Party.
Ihr Bruder Paul ist ein bisschen müde. Er hat gestern viel gelernt. Er hat auch Hunger. Mama kocht eine leckere Suppe.
Die kleine Katze Mia hat Angst. Ein großer Hund bellt draußen. Aber Papa sagt: "Keine Angst, Mia!"
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-gefuehle-zustaende-rq1',
      question: 'Почему Анна сегодня счастлива?',
      options: ['Потому что хорошая погода.', 'Потому что у нее день рождения.', 'Потому что она идет в школу.', 'Потому что ее брат устал.'],
      correctAnswer: 'Потому что у нее день рождения.',
      explanation: 'В тексте сказано: "Anna ist heute sehr glücklich. Sie hat Geburtstag!"',
    },
    {
      id: 'a1-lexik-gefuehle-zustaende-rq2',
      question: 'Чего боится кошка Миа?',
      options: ['Мамы', 'Супа', 'Большой собаки', 'Пауля'],
      correctAnswer: 'Большой собаки',
      explanation: 'В тексте сказано: "Die kleine Katze Mia hat Angst. Ein großer Hund bellt draußen."',
    }
  ],
  exercises: [
    {
      id: 'a1-lexik-gefuehle-zustaende-ex1',
      type: 'multiple_choice',
      question: 'Как сказать "я голоден" по-немецки?',
      options: ['Ich bin Hunger.', 'Ich habe Hunger.', 'Ich esse Hunger.', 'Ich hungere.'],
      correctAnswer: 'Ich habe Hunger.',
      explanation: 'Для выражения голода используется конструкция "Hunger haben".',
    },
    {
      id: 'a1-lexik-gefuehle-zustaende-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Wenn ich einen Film sehe, ___ ich manchmal." (плакать)',
      sentenceParts: ['Wenn ich einen Film sehe, ', ' ich manchmal.'],
      correctAnswer: 'weine',
      explanation: '"Плакать" - "weinen". Форма для "ich" - "weine".',
    },
    {
      id: 'a1-lexik-gefuehle-zustaende-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он очень устал."',
      prompt: 'Он очень устал.',
      languageDirection: 'to_german',
      correctAnswer: 'Er ist sehr müde.',
      explanation: '"Уставший" - "müde". "Он есть очень уставший" - "Er ist sehr müde".',
    },
    {
      id: 'a1-lexik-gefuehle-zustaende-wp1',
      type: 'writing_prompt',
      question: 'Wie fühlst du dich heute? Schreibe 1-2 Sätze. (Как ты себя сегодня чувствуешь? Напиши 1-2 предложения.)',
      suggestedLength: '1-2 предложения',
    },
  ],
};
