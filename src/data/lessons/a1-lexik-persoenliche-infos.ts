
import type { Lesson } from '@/types';

export const lessonA1LexikPersoenlicheInfos: Lesson = {
  id: 'a1-lexik-persoenliche-infos',
  level: 'A1',
  topic: 'Личная информация (Имя, возраст, страна, национальность)',
  theory: `
В этом уроке мы научимся представляться, спрашивать и отвечать на основные вопросы о личной информации: как зовут, сколько лет, откуда родом, где живешь и какая национальность.

**Основные вопросы и ответы:**

*   **Имя (Name):**
    *   *Wie heißen Sie? / Wie heißt du?* (Как Вас / тебя зовут?)
    *   *Ich heiße [Anna].* (Меня зовут [Анна].)
    *   *Wie ist Ihr Name? / Wie ist dein Name?* (Какое Ваше / твое имя?)
    *   *Mein Name ist [Max Müller].* (Мое имя [Макс Мюллер].)

*   **Возраст (Alter):**
    *   *Wie alt sind Sie? / Wie alt bist du?* (Сколько Вам / тебе лет?)
    *   *Ich bin [fünfundzwanzig] Jahre alt.* (Мне [двадцать пять] лет.)

*   **Происхождение (Herkunft - страна/город):**
    *   *Woher kommen Sie? / Woher kommst du?* (Откуда Вы / ты родом?)
    *   *Ich komme aus [Russland], aus [Moskau].* (Я из [России], из [Москвы].)

*   **Место жительства (Wohnort):**
    *   *Wo wohnen Sie? / Wo wohnst du?* (Где Вы / ты живете/живешь?)
    *   *Ich wohne in [Berlin].* (Я живу в [Берлине].)

*   **Национальность (Nationalität):**
    *   *Welche Nationalität haben Sie? / Welche Nationalität hast du?* (Какая у Вас / тебя национальность?)
    *   *Ich bin Russe / Russin.* (Я русский / русская.)
    *   *Ich bin Deutscher / Deutsche.* (Я немец / немка.)
    *   *Ich bin Ukrainer / Ukrainerin.* (Я украинец / украинка.)

Знание этих фраз поможет вам начать простой разговор и рассказать о себе.
`,
  vocabulary: [
    { german: 'Wie heißen Sie?', russian: 'Как Вас зовут?' },
    { german: 'Wie heißt du?', russian: 'Как тебя зовут?' },
    { german: 'Ich heiße...', russian: 'Меня зовут...' },
    { german: 'Mein Name ist...', russian: 'Мое имя...' },
    { german: 'Wie alt sind Sie?', russian: 'Сколько Вам лет?' },
    { german: 'Wie alt bist du?', russian: 'Сколько тебе лет?' },
    { german: 'Ich bin ... Jahre alt.', russian: 'Мне ... лет.' },
    { german: 'Woher kommen Sie?', russian: 'Откуда Вы родом?' },
    { german: 'Woher kommst du?', russian: 'Откуда ты родом?' },
    { german: 'Ich komme aus...', russian: 'Я из...' },
    { german: 'Wo wohnen Sie?', russian: 'Где Вы живете?' },
    { german: 'Wo wohnst du?', russian: 'Где ты живешь?' },
    { german: 'Ich wohne in...', russian: 'Я живу в...' },
    { german: 'die Nationalität (-en)', russian: 'национальность' },
    { german: 'Welche Nationalität haben Sie/hast du?', russian: 'Какая у Вас/тебя национальность?' },
    { german: 'Russe / Russin', russian: 'русский / русская' },
    { german: 'Deutscher / Deutsche', russian: 'немец / немка' },
    { german: 'das Land (Länder)', russian: 'страна' },
    { german: 'die Stadt (Städte)', russian: 'город' },
  ],
  readingText: `
Hallo, mein Name ist Maria. Ich bin 28 Jahre alt. Ich komme aus Deutschland, aus Berlin. Ich wohne auch in Berlin. Ich bin Deutsche. Mein Freund heißt Paul. Er ist 30 Jahre alt und kommt aus Österreich. Er wohnt jetzt auch in Berlin.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-persoenliche-infos-rq1',
      question: 'Сколько лет Марии?',
      options: ['25', '28', '30', 'Не указано'],
      correctAnswer: '28',
      explanation: 'В тексте сказано: "Ich bin 28 Jahre alt."',
    },
    {
      id: 'a1-lexik-persoenliche-infos-rq2',
      question: 'Откуда родом Пауль?',
      options: ['Германия', 'Берлин', 'Австрия', 'Россия'],
      correctAnswer: 'Австрия',
      explanation: 'В тексте сказано: "Er ... kommt aus Österreich."',
    },
  ],
  exercises: [
    {
      id: 'a1-lexik-persoenliche-infos-ex1',
      type: 'multiple_choice',
      question: 'Как спросить "Сколько тебе лет?"',
      options: ['Wie heißt du?', 'Woher kommst du?', 'Wie alt bist du?', 'Wo wohnst du?'],
      correctAnswer: 'Wie alt bist du?',
      explanation: '"Wie alt bist du?" означает "Сколько тебе лет?".',
    },
    {
      id: 'a1-lexik-persoenliche-infos-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ aus Spanien."',
      sentenceParts: ['Ich ', ' aus Spanien.'],
      correctAnswer: 'komme',
      explanation: 'Для указания происхождения используется глагол "kommen". "Ich komme aus..."',
    },
    {
      id: 'a1-lexik-persoenliche-infos-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Меня зовут Петер."',
      prompt: 'Меня зовут Петер.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich heiße Peter.', // или Mein Name ist Peter.
      explanation: '"Меня зовут..." можно перевести как "Ich heiße..." или "Mein Name ist...".',
    },
    {
      id: 'a1-lexik-persoenliche-infos-wp1',
      type: 'writing_prompt',
      question: 'Напиши о себе: как тебя зовут, сколько тебе лет и откуда ты. (2-3 простых предложения)',
      suggestedLength: '2-3 предложения',
    },
  ],
};
