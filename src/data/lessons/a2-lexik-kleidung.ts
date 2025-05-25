
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikKleidung: Lesson = {
  id: 'a2-lexik-kleidung',
  level: 'A2',
  topic: 'Одежда (Kleidung)',
  theory: `
В этом уроке мы выучим основную лексику, связанную с одеждой. Вы научитесь называть различные предметы одежды и использовать их в простых предложениях.

**Основные вопросы и фразы:**
- *Was trägst du heute?* (Что на тебе сегодня надето?)
- *Ich trage eine Hose und einen Pullover.* (Я ношу брюки и свитер.)
- *Welche Farbe hat dein T-Shirt?* (Какого цвета твоя футболка?)
- *Gefällt dir diese Jacke?* (Тебе нравится эта куртка?)
- *Ich muss neue Schuhe kaufen.* (Мне нужно купить новую обувь.)
`,
  vocabulary: [
    { german: 'die Kleidung', russian: 'одежда (собират.)' },
    { german: 'tragen (trägt)', russian: 'носить (одежду)', example: 'Er trägt oft Jeans.' },
    { german: 'anziehen (zieht an)', russian: 'надевать', example: 'Ich ziehe meinen Mantel an.' },
    { german: 'ausziehen (zieht aus)', russian: 'снимать (одежду)', example: 'Zieh bitte deine Schuhe aus!' },
    { german: 'die Hose (-n)', russian: 'брюки', example: 'Diese Hose ist bequem.' },
    { german: 'das Hemd (-en)', russian: 'рубашка (мужская)', example: 'Er hat ein weißes Hemd an.' },
    { german: 'die Bluse (-n)', russian: 'блузка (женская)', example: 'Die Bluse ist aus Seide.' },
    { german: 'der Pullover (-)', russian: 'свитер, пуловер', example: 'Im Winter trage ich warme Pullover.' },
    { german: 'die Jacke (-n)', russian: 'куртка', example: 'Nimm eine Jacke mit, es ist kalt.' },
    { german: 'der Mantel (Mäntel)', russian: 'пальто', example: 'Mein Wintermantel ist sehr warm.' },
    { german: 'das Kleid (-er)', russian: 'платье', example: 'Sie trägt ein schönes Kleid.' },
    { german: 'der Rock (Röcke)', russian: 'юбка', example: 'Dieser Rock ist zu kurz.' },
    { german: 'die Schuhe (Pl.)', russian: 'обувь, туфли, ботинки', example: 'Wo sind meine Schuhe?' },
    { german: 'die Socke (-n)', russian: 'носок', example: 'Ich brauche ein Paar Socken.' },
    { german: 'der Hut (Hüte)', russian: 'шляпа', example: 'Er trägt einen Hut gegen die Sonne.' },
    { german: 'die Mütze (-n)', russian: 'шапка (вязаная, спортивная)', example: 'Vergiss deine Mütze nicht!' },
    { german: 'das T-Shirt (-s)', russian: 'футболка', example: 'Ein T-Shirt und Jeans sind meine Lieblingskleidung.' },
    { german: 'die Jeans (Pl.)', russian: 'джинсы', example: 'Ich trage gerne Jeans.' },
    { german: 'neu', russian: 'новый', example: 'Ich habe neue Schuhe.' },
    { german: 'alt', russian: 'старый', example: 'Dieser Pullover ist schon sehr alt.' },
    { german: 'groß', russian: 'большой (о размере)', example: 'Die Jacke ist mir zu groß.' },
    { german: 'klein', russian: 'маленький (о размере)', example: 'Das Kleid ist zu klein.' },
    { german: 'lang', russian: 'длинный', example: 'Der Rock ist sehr lang.' },
    { german: 'kurz', russian: 'короткий', example: 'Er trägt kurze Hosen.' },
  ],
  readingText: `
Anna geht heute einkaufen. Sie braucht eine neue Jacke für den Winter. Im Kaufhaus gibt es viele Jacken.
Zuerst sieht sie eine rote Jacke. Sie ist sehr schön, aber ein bisschen zu teuer. Dann findet Anna eine blaue Jacke. Diese Jacke ist warm und der Preis ist auch gut.
Anna probiert die blaue Jacke an. Sie passt perfekt! Anna kauft die blaue Jacke und auch eine neue Mütze. Die Mütze ist gelb und passt gut zur blauen Jacke.
Jetzt ist Anna bereit für den Winter.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-kleidung-rq1',
      question: 'Что Анна хотела купить в первую очередь?',
      options: ['Новую шапку', 'Новую куртку', 'Новые ботинки', 'Новый свитер'],
      correctAnswer: 'Новую куртку',
      explanation: 'В тексте сказано: "Sie braucht eine neue Jacke für den Winter." (Ей нужна новая куртка на зиму.)',
    },
    {
      id: 'a2-lexik-kleidung-rq2',
      question: 'Почему Анна не купила красную куртку?',
      options: ['Она была слишком маленькая', 'Она была некрасивая', 'Она была слишком дорогая', 'Ей не понравился цвет'],
      correctAnswer: 'Она была слишком дорогая',
      explanation: 'В тексте сказано: "Sie ist sehr schön, aber ein bisschen zu teuer." (Она очень красивая, но немного слишком дорогая.)',
    },
    {
      id: 'a2-lexik-kleidung-rq3',
      question: 'Какого цвета шапку купила Анна?',
      options: ['Красного', 'Синего', 'Желтого', 'Зеленого'],
      correctAnswer: 'Желтого',
      explanation: 'В тексте сказано: "Die Mütze ist gelb..." (Шапка желтая...).',
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-kleidung-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "платье"?',
      options: ['der Rock', 'die Hose', 'das Kleid', 'die Bluse'],
      correctAnswer: 'das Kleid',
      explanation: '"Das Kleid" означает "платье".',
    },
    {
      id: 'a2-lexik-kleidung-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich trage heute einen warmen ___ (свитер)."',
      sentenceParts: ['Ich trage heute einen warmen ', '.'],
      correctAnswer: 'Pullover',
      explanation: '"Свитер" по-немецки "der Pullover". В Akkusativ после "einen" - "Pullover".',
    },
    {
      id: 'a2-lexik-kleidung-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "На ней синие джинсы."',
      prompt: 'На ней синие джинсы.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie trägt blaue Jeans.',
      explanation: '"Она носит" - "Sie trägt". "Синие джинсы" - "blaue Jeans" (прилагательное склоняется).',
    },
    {
      id: 'a2-lexik-kleidung-ex4',
      type: 'multiple_choice',
      question: 'Какой глагол означает "снимать (одежду)"?',
      options: ['tragen', 'anziehen', 'ausziehen', 'kaufen'],
      correctAnswer: 'ausziehen',
      explanation: '"Ausziehen" означает "снимать (одежду)".',
    },
    {
      id: 'a2-lexik-kleidung-wp1',
      type: 'writing_prompt',
      question: 'Опишите свою любимую одежду или что вы обычно носите в школу/на работу. (2-3 предложения)',
      suggestedLength: '2-3 предложения'
    }
  ],
};
