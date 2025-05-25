
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA1LexikKleidung: Lesson = {
  id: 'a1-lexik-kleidung',
  level: 'A1',
  topic: 'Одежда (Kleidung)',
  theory: `
В этом уроке мы выучим названия основных предметов одежды и научимся говорить, во что мы одеты.

**Основные слова:**
- **die Hose (-n)** - брюки
- **das Hemd (-en)** - рубашка
- **das T-Shirt (-s)** - футболка
- **der Rock (Röcke)** - юбка
- **das Kleid (-er)** - платье
- **die Schuhe (Pl.)** - обувь
- **die Jacke (-n)** - куртка
- **der Pullover (-)** - свитер

**Полезные фразы:**
- *Ich trage eine Hose.* (Я ношу брюки. / На мне брюки.)
- *Er trägt ein blaues Hemd.* (Он носит синюю рубашку.)
- *Was trägst du heute?* (Во что ты сегодня одет? / Что на тебе сегодня?)
`,
  vocabulary: [
    { german: 'die Kleidung', russian: 'одежда (собират.)' },
    { german: 'tragen (trägt)', russian: 'носить (одежду)', example: 'Was trägst du gern?' },
    { german: 'die Hose (-n)', russian: 'брюки', example: 'Meine Hose ist schwarz.' },
    { german: 'das Hemd (-en)', russian: 'рубашка (мужская)', example: 'Papa trägt ein weißes Hemd.' },
    { german: 'das T-Shirt (-s)', russian: 'футболка', example: 'Ich habe ein rotes T-Shirt.' },
    { german: 'der Rock (Röcke)', russian: 'юбка', example: 'Anna trägt einen langen Rock.' },
    { german: 'das Kleid (-er)', russian: 'платье', example: 'Das Kleid ist schön.' },
    { german: 'die Schuhe (Pl.)', russian: 'обувь, туфли, ботинки', example: 'Meine Schuhe sind neu.' },
    { german: 'die Jacke (-n)', russian: 'куртка', example: 'Nimm deine Jacke, es ist kalt.' },
    { german: 'der Pullover (-)', russian: 'свитер, пуловер', example: 'Mein Pullover ist warm.' },
    { german: 'die Mütze (-n)', russian: 'шапка (вязаная)', example: 'Im Winter trage ich eine Mütze.' },
    { german: 'der Hut (Hüte)', russian: 'шляпа', example: 'Der Mann hat einen Hut auf.' },
    { german: 'rot', russian: 'красный' },
    { german: 'blau', russian: 'синий' },
    { german: 'grün', russian: 'зеленый' },
    { german: 'gelb', russian: 'желтый' },
    { german: 'schwarz', russian: 'черный' },
    { german: 'weiß', russian: 'белый' },
  ],
  readingText: `
Hallo, ich bin Tim.
Heute trage ich ein blaues T-Shirt und eine schwarze Hose.
Meine Schuhe sind weiß. Ich mag meine Kleidung.
Meine Schwester Lisa trägt ein gelbes Kleid.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-kleidung-rq1',
      question: 'Какого цвета футболка у Тима?',
      options: ['Красного', 'Синего', 'Черного', 'Белого'],
      correctAnswer: 'Синего',
      explanation: 'В тексте сказано: "Heute trage ich ein blaues T-Shirt..." (Сегодня я ношу синюю футболку...).',
    },
    {
      id: 'a1-lexik-kleidung-rq2',
      question: 'Что носит Лиза?',
      options: ['Синюю куртку', 'Черные брюки', 'Желтое платье', 'Белые туфли'],
      correctAnswer: 'Желтое платье',
      explanation: 'В тексте сказано: "Meine Schwester Lisa trägt ein gelbes Kleid." (Моя сестра Лиза носит желтое платье.)',
    },
  ],
  exercises: [
    {
      id: 'a1-lexik-kleidung-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "юбка"?',
      options: ['die Hose', 'das Kleid', 'der Rock', 'das Hemd'],
      correctAnswer: 'der Rock',
      explanation: '"Der Rock" означает "юбка".',
    },
    {
      id: 'a1-lexik-kleidung-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Er trägt eine warme ___ (куртка)."',
      sentenceParts: ['Er trägt eine warme ', '.'],
      correctAnswer: 'Jacke',
      explanation: '"Куртка" по-немецки "die Jacke".',
    },
    {
      id: 'a1-lexik-kleidung-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "На мне зеленый свитер."',
      prompt: 'На мне зеленый свитер.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich trage einen grünen Pullover.',
      explanation: '"Я ношу / На мне" - "Ich trage". "Зеленый свитер" (Akkusativ) - "einen grünen Pullover".',
    },
    {
      id: 'a1-lexik-kleidung-wp1',
      type: 'writing_prompt',
      question: 'Was trägst du heute? Schreibe 1-2 Sätze. (Во что ты сегодня одет? Напиши 1-2 предложения.)',
      suggestedLength: '1-2 предложения',
    },
  ],
};
