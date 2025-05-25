
import type { Lesson } from '@/types';

// --- Урок A1: Личные местоимения (Именительный падеж) и глаголы 'sein', 'haben' (Präsens) ---
export const lessonA1PersonalpronomenSeinHaben: Lesson = {
  id: 'a1-personalpronomen-sein-haben',
  level: 'A1',
  topic: "Личные местоимения (Именительный падеж) и глаголы 'sein', 'haben' (Präsens)",
  theory: `
Личные местоимения заменяют существительные, обозначающие людей или предметы, и указывают на лицо, о котором идет речь. В именительном падеже (Nominativ), отвечающем на вопросы "кто? что?", они являются подлежащим в предложении.

**Личные местоимения в Nominativ:**
-   **ich** – я
-   **du** – ты (неформально, к одному человеку)
-   **er** – он
-   **sie** – она
-   **es** – оно
-   **wir** – мы
-   **ihr** – вы (неформально, к группе людей)
-   **sie** – они
-   **Sie** – Вы (формально, вежливо, к одному или нескольким людям; всегда пишется с большой буквы)

Глаголы **sein** (быть, являться) и **haben** (иметь) – два самых важных глагола в немецком языке. Они спрягаются (изменяются по лицам и числам) не по общим правилам, поэтому их формы нужно запомнить.

**1. Глагол \`sein\` (быть) в Präsens (настоящее время):**

| Местоимение | Форма \`sein\` | Перевод    | Пример                   | Перевод примера        |
|-------------|----------------|------------|--------------------------|------------------------|
| ich         | **bin**        | я есть     | Ich **bin** Anna.        | Я (есть) Анна.         |
| du          | **bist**       | ты есть    | Du **bist** mein Freund. | Ты (есть) мой друг.    |
| er/sie/es   | **ist**        | он/она/оно есть | Er **ist** müde.         | Он уставший.           |
|             |                |            | Sie **ist** hier.        | Она здесь.             |
|             |                |            | Es **ist** spät.         | (Это) поздно.          |
| wir         | **sind**       | мы есть    | Wir **sind** Studenten.  | Мы (есть) студенты.    |
| ihr         | **seid**       | вы есть    | Ihr **seid** nett.       | Вы (есть) милые.       |
| sie/Sie     | **sind**       | они/Вы есть| Sie **sind** zu Hause.   | Они (есть) дома.       |
|             |                |            | **Sind** Sie Herr Schmidt? | Вы (есть) господин Шмидт? |

**2. Глагол \`haben\` (иметь) в Präsens (настоящее время):**

| Местоимение | Форма \`haben\` | Перевод     | Пример                  | Перевод примера         |
|-------------|-----------------|-------------|-------------------------|-------------------------|
| ich         | **habe**        | я имею      | Ich **habe** ein Auto.  | У меня есть машина.     |
| du          | **hast**        | ты имеешь   | Du **hast** Zeit.       | У тебя есть время.      |
| er/sie/es   | **hat**         | он/она/оно имеет | Er **hat** einen Hund.  | У него есть собака.     |
|             |                 |             | Sie **hat** eine Frage. | У нее есть вопрос.      |
|             |                 |             | Das Kind **hat** Hunger.| Ребенок голоден.        |
| wir         | **haben**       | мы имеем    | Wir **haben** Glück.    | Нам везет. / У нас удача.|
| ihr         | **habt**        | вы имеете   | Ihr **habt** viele Ideen.| У вас много идей.       |
| sie/Sie     | **haben**       | они/Вы имеют| Sie **haben** ein Problem. | У них/Вас проблема.     |
|             |                 |             | **Haben** Sie Geschwister?| У Вас есть братья/сестры?|

Эти глаголы используются очень часто, в том числе как вспомогательные для образования других временных форм.
`,
  vocabulary: [
    { german: 'ich', russian: 'я' },
    { german: 'du', russian: 'ты' },
    { german: 'er', russian: 'он' },
    { german: 'sie (ед.ч.)', russian: 'она' },
    { german: 'es', russian: 'оно' },
    { german: 'wir', russian: 'мы' },
    { german: 'ihr', russian: 'вы (неформ. мн.ч.)' },
    { german: 'sie (мн.ч.)', russian: 'они' },
    { german: 'Sie', russian: 'Вы (вежл.)' },
    { german: 'sein (bin, bist, ist, sind, seid, sind)', russian: 'быть, являться' },
    { german: 'haben (habe, hast, hat, haben, habt, haben)', russian: 'иметь' },
    { german: 'der Student (Studenten)', russian: 'студент', example: 'Ich bin Student.' },
    { german: 'der Freund (Freunde)', russian: 'друг', example: 'Du bist mein Freund.' },
    { german: 'müde', russian: 'уставший', example: 'Er ist müde.' },
    { german: 'hier', russian: 'здесь', example: 'Sie ist hier.' },
    { german: 'spät', russian: 'поздно', example: 'Es ist spät.' },
    { german: 'das Auto (Autos)', russian: 'машина', example: 'Ich habe ein Auto.' },
    { german: 'die Zeit', russian: 'время', example: 'Du hast Zeit.' },
    { german: 'der Hund (Hunde)', russian: 'собака', example: 'Er hat einen Hund.' },
    { german: 'die Frage (Fragen)', russian: 'вопрос', example: 'Sie hat eine Frage.' },
    { german: 'der Hunger', russian: 'голод', example: 'Das Kind hat Hunger.' },
  ],
  exercises: [
    {
      id: 'a1-pronomen-sein-haben-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "sein": Wir ___ Freunde.',
      sentenceParts: ['Wir ', ' Freunde.'],
      correctAnswer: 'sind',
      explanation: 'Для местоимения "wir" (мы) глагол "sein" имеет форму "sind".',
    },
    {
      id: 'a1-pronomen-sein-haben-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "haben": Er ___ ein Fahrrad.',
      sentenceParts: ['Er ', ' ein Fahrrad.'],
      correctAnswer: 'hat',
      explanation: 'Для местоимения "er" (он) глагол "haben" имеет форму "hat".',
    },
    {
      id: 'a1-pronomen-sein-haben-ex3',
      type: 'multiple_choice',
      question: 'Какая форма глагола "sein" подходит для "du"?',
      options: ['bin', 'bist', 'ist', 'sind'],
      correctAnswer: 'bist',
      explanation: 'Для местоимения "du" (ты) используется форма "bist".',
    },
    {
      id: 'a1-pronomen-sein-haben-ex4',
      type: 'translation',
      question: 'Переведите на немецкий: "У них есть кошка."',
      prompt: 'У них есть кошка.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie haben eine Katze.',
      explanation: '"Они" - "sie" (с маленькой буквы, если не начало предложения), глагол "haben" для "sie" (они) - "haben". "Кошка" - "die Katze", здесь с неопределенным артиклем "eine Katze".',
    },
    {
      id: 'a1-pronomen-sein-haben-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное местоимение: ___ bin Peter.',
      sentenceParts: ['', ' bin Peter.'],
      correctAnswer: 'Ich',
      explanation: 'Форма глагола "bin" используется только с местоимением "ich" (я).',
    },
  ],
};
