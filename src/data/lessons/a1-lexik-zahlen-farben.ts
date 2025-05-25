
import type { Lesson } from '@/types';

export const lessonA1LexikZahlenFarben: Lesson = {
  id: 'a1-lexik-zahlen-farben',
  level: 'A1',
  topic: 'Числа (0-100) и Цвета (Zahlen und Farben)',
  theory: `
В этом уроке мы выучим основные числа от 0 до 100 и самые распространенные цвета. Эта лексика очень важна для повседневного общения.

**Числа (Die Zahlen)**

*   **От 0 до 12:**
    *   0 - null
    *   1 - eins
    *   2 - zwei
    *   3 - drei
    *   4 - vier
    *   5 - fünf
    *   6 - sechs
    *   7 - sieben
    *   8 - acht
    *   9 - neun
    *   10 - zehn
    *   11 - elf
    *   12 - zwölf

*   **От 13 до 19:** Образуются добавлением **-zehn** к числу единиц.
    *   13 - dreizehn
    *   14 - vierzehn
    *   15 - fünfzehn
    *   16 - sechzehn (обратите внимание: sech**s** → sech)
    *   17 - siebzehn (обратите внимание: sieb**en** → sieb)
    *   18 - achtzehn
    *   19 - neunzehn

*   **Десятки (от 20 до 100):**
    *   20 - zwanzig
    *   30 - dreißig (обратите внимание: ß)
    *   40 - vierzig
    *   50 - fünfzig
    *   60 - sechzig (обратите внимание: sech**s** → sech)
    *   70 - siebzig (обратите внимание: sieb**en** → sieb)
    *   80 - achtzig
    *   90 - neunzig
    *   100 - (ein)hundert

*   **Числа от 21 до 99:** Образуются по принципу "единицы **и** десятки" (Einer **und** Zehner).
    *   21 - einundzwanzig (eins теряет -s перед -und)
    *   22 - zweiundzwanzig
    *   35 - fünfunddreißig
    *   98 - achtundneunzig

**Цвета (Die Farben)**
*   **rot** - красный
*   **blau** - синий, голубой
*   **grün** - зеленый
*   **gelb** - желтый
*   **schwarz** - черный
*   **weiß** - белый
*   **grau** - серый
*   **braun** - коричневый
*   **orange** - оранжевый (часто пишется так же)
*   **lila / violett** - фиолетовый / лиловый
*   **rosa** - розовый
*   **bunt** - пестрый, разноцветный

Примеры:
*   *Ich habe **drei** Katzen.* (У меня три кошки.)
*   *Das Auto ist **rot**.* (Машина красная.)
*   *Er ist **vierzig** Jahre alt.* (Ему сорок лет.)
*   *Mein Lieblingsfarbe ist **blau**.* (Мой любимый цвет - синий.)
`,
  vocabulary: [
    { german: 'null', russian: 'ноль' },
    { german: 'eins', russian: 'один' },
    { german: 'zwei', russian: 'два' },
    { german: 'drei', russian: 'три' },
    { german: 'vier', russian: 'четыре' },
    { german: 'fünf', russian: 'пять' },
    { german: 'sechs', russian: 'шесть' },
    { german: 'sieben', russian: 'семь' },
    { german: 'acht', russian: 'восемь' },
    { german: 'neun', russian: 'девять' },
    { german: 'zehn', russian: 'десять' },
    { german: 'elf', russian: 'одиннадцать' },
    { german: 'zwölf', russian: 'двенадцать' },
    { german: 'dreizehn', russian: 'тринадцать' },
    { german: 'zwanzig', russian: 'двадцать' },
    { german: 'einundzwanzig', russian: 'двадцать один' },
    { german: 'dreißig', russian: 'тридцать' },
    { german: 'hundert', russian: 'сто' },
    { german: 'rot', russian: 'красный', example: 'Der Apfel ist rot.' },
    { german: 'blau', russian: 'синий, голубой', example: 'Der Himmel ist blau.' },
    { german: 'grün', russian: 'зеленый', example: 'Das Gras ist grün.' },
    { german: 'gelb', russian: 'желтый', example: 'Die Sonne ist gelb.' },
    { german: 'schwarz', russian: 'черный', example: 'Die Nacht ist schwarz.' },
    { german: 'weiß', russian: 'белый', example: 'Der Schnee ist weiß.' },
    { german: 'grau', russian: 'серый' },
    { german: 'braun', russian: 'коричневый' },
    { german: 'orange', russian: 'оранжевый' },
    { german: 'lila / violett', russian: 'лиловый / фиолетовый' },
    { german: 'rosa', russian: 'розовый' },
    { german: 'bunt', russian: 'пестрый, разноцветный' },
    { german: 'die Farbe (-n)', russian: 'цвет' },
    { german: 'die Zahl (-en)', russian: 'число, цифра' },
  ],
  readingText: `
In meinem Zimmer gibt es viele bunte Dinge. Ich habe zwei rote Kissen auf meinem Bett. Neben dem Bett steht ein kleiner Tisch. Der Tisch ist blau. Auf dem Tisch liegen fünf gelbe Bleistifte und ein grünes Heft. Ich habe auch zehn Bücher. Die Bücher sind alt, aber interessant. Eins ist schwarz und neun sind braun.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-zahlen-farben-rq1',
      question: 'Какого цвета стол в комнате?',
      options: ['Красный', 'Синий', 'Желтый', 'Зеленый'],
      correctAnswer: 'Синий',
      explanation: 'В тексте сказано: "Der Tisch ist blau." (Стол синий.)'
    },
    {
      id: 'a1-lexik-zahlen-farben-rq2',
      question: 'Сколько коричневых книг в комнате?',
      options: ['Две', 'Пять', 'Девять', 'Десять'],
      correctAnswer: 'Девять',
      explanation: 'В тексте сказано: "Eins ist schwarz und neun sind braun." (Одна черная и девять коричневых.)'
    }
  ],
  exercises: [
    {
      id: 'a1-lexik-zahlen-farben-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "семнадцать"?',
      options: ['siebzehn', 'siebenzehn', 'siebzig', 'siebzigzehn'],
      correctAnswer: 'siebzehn',
      explanation: 'Числа от 13 до 19 образуются добавлением -zehn. Для 17 "sieben" сокращается до "sieb": siebzehn.',
    },
    {
      id: 'a1-lexik-zahlen-farben-ex2',
      type: 'fill_in_the_blank',
      question: 'Напишите цифрой: fünfundvierzig',
      sentenceParts: ['fünfundvierzig = ', ''],
      correctAnswer: '45',
      explanation: '"fünf" (пять) + "und" (и) + "vierzig" (сорок) = 45.',
    },
    {
      id: 'a1-lexik-zahlen-farben-ex3',
      type: 'multiple_choice',
      question: 'Какой цвет "grün"?',
      options: ['красный', 'синий', 'зеленый', 'желтый'],
      correctAnswer: 'зеленый',
      explanation: '"Grün" означает "зеленый".',
    },
    {
      id: 'a1-lexik-zahlen-farben-ex4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Mein Auto ist ___ (черный).',
      sentenceParts: ['Mein Auto ist ', '.'],
      correctAnswer: 'schwarz',
      explanation: '"Черный" по-немецки "schwarz".',
    },
    {
      id: 'a1-lexik-zahlen-farben-ex5',
      type: 'translation',
      question: 'Переведите на немецкий: "У меня десять белых роз."',
      prompt: 'У меня десять белых роз.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich habe zehn weiße Rosen.',
      explanation: '"Десять" - "zehn", "белых роз" - "weiße Rosen" (прилагательное склоняется).',
    },
  ],
};
