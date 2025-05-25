
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonA2VerbLassen: Lesson = {
  id: 'a2-verb-lassen',
  level: 'A2',
  topic: 'Глагол lassen (основы)',
  theory: `
Глагол **lassen** – один из важных и многозначных глаголов в немецком языке. На уровне А2 мы рассмотрим его основные значения и употребление.

**1. Спряжение глагола \`lassen\` в Präsens (Настоящее время):**
\`lassen\` – это сильный глагол.
- ich lasse
- du l**ä**sst
- er/sie/es l**ä**sst
- wir lassen
- ihr lasst
- sie/Sie lassen

**2. Основные значения \`lassen\` для уровня A2:**

*   **Позволять, разрешать (etwas erlauben):**
    В этом значении \`lassen\` используется с другим глаголом в инфинитиве (без \`zu\`).
    *   *Meine Eltern **lassen** mich am Wochenende länger aufbleiben.* (Мои родители разрешают мне по выходным дольше не ложиться спать.)
    *   *Der Lehrer **lässt** uns die Wörterbücher benutzen.* (Учитель разрешает нам пользоваться словарями.)
    *   ***Lass** mich das machen!* (Позволь мне это сделать!)

*   **Оставлять (etwas nicht mitnehmen; jemanden in Ruhe lassen):**
    *   *Ich **lasse** mein Handy oft zu Hause.* (Я часто оставляю свой мобильный телефон дома.)
    *   *Sie **hat** ihre Tasche im Zug **gelassen**.* (Perfekt) (Она оставила свою сумку в поезде.)
    *   ***Lass** das!* (Оставь это! / Перестань!)
    *   ***Lass** mich in Ruhe!* (Оставь меня в покое!)

*   **Велеть что-то сделать / Причинять, чтобы что-то было сделано (veranlassen, dass etwas getan wird):**
    В этом значении \`lassen\` также используется с инфинитивом другого глагола. Объект, над которым совершается действие, стоит в Akkusativ.
    *   *Ich **lasse** mein Auto reparieren.* (Я отдаю свою машину в ремонт. / Дословно: Я велю ремонтировать мою машину.)
    *   *Sie **lässt** sich die Haare schneiden.* (Она стрижется у парикмахера. / Дословно: Она велит стричь себе волосы.)
    *   *Er **lässt** das Paket zur Post bringen.* (Он велит отнести посылку на почту.)

**Порядок слов:**
В предложениях с \`lassen\` + Infinitiv, инфинитив смыслового глагола стоит в конце предложения.
*   *Ich **lasse** mein Fahrrad in der Garage **stehen**.* (Я оставляю свой велосипед стоять в гараже.)

Глагол \`lassen\` также может использоваться в Perfekt. Perfekt глагола \`lassen\` образуется с вспомогательным глаголом \`haben\` и Partizip II \`gelassen\`. Однако, если \`lassen\` используется с другим инфинитивом, то в Perfekt используется конструкция "двойного инфинитива": \`haben\` + Infinitiv смыслового глагола + Infinitiv \`lassen\`.
*   *Ich **habe** ihn gehen **lassen**.* (Я позволил ему уйти.)
*   *Sie **hat** ihr Auto reparieren **lassen**.* (Она отремонтировала свою машину (поручив это кому-то).)
Для уровня А2 достаточно знать формы Präsens и Perfekt в значении "оставлять".
  `,
  vocabulary: [
    { german: 'lassen (lässt, ließ, hat gelassen)', russian: 'позволять, оставлять, велеть', example: 'Lass uns gehen! (Позволь нам пойти! / Пойдем!)' },
    { german: 'erlauben', russian: 'разрешать, позволять', example: 'Rauchen ist hier nicht erlaubt.' },
    { german: 'jemanden in Ruhe lassen', russian: 'оставить кого-либо в покое', example: 'Bitte lass mich jetzt in Ruhe.' },
    { german: 'etwas reparieren lassen', russian: 'отдать что-либо в ремонт', example: 'Ich muss mein Fahrrad reparieren lassen.' },
    { german: 'sich die Haare schneiden lassen', russian: 'стричься (у парикмахера)', example: 'Sie lässt sich alle zwei Monate die Haare schneiden.' },
    { german: 'stehen lassen', russian: 'оставлять стоять', example: 'Du kannst dein Auto hier stehen lassen.' },
    { german: 'liegen lassen', russian: 'оставлять лежать', example: 'Ich habe meine Schlüssel auf dem Tisch liegen lassen.' },
  ],
  readingText: `
Herr Schmidt hat ein altes Auto. Es funktioniert nicht mehr gut. Gestern wollte er zur Arbeit fahren, aber das Auto startete nicht.
"Ich muss das Auto reparieren lassen", dachte Herr Schmidt. Er rief in einer Werkstatt an. Der Mechaniker sagte, er könne das Auto am nächsten Tag ansehen.
Also ließ Herr Schmidt sein Auto am Morgen in der Werkstatt. Er hofft, dass es nicht zu teuer wird.
Seine Frau sagt oft: "Lass uns doch ein neues Auto kaufen!" Aber Herr Schmidt mag sein altes Auto.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lassen-rq1',
      question: 'Какая проблема у господина Шмидта с машиной?',
      options: ['Она слишком маленькая.', 'Она плохо работает и вчера не завелась.', 'Он оставил ее в неправильном месте.', 'Он не умеет ее водить.'],
      correctAnswer: 'Она плохо работает и вчера не завелась.',
      explanation: 'В тексте сказано: "Es funktioniert nicht mehr gut. Gestern wollte er zur Arbeit fahren, aber das Auto startete nicht."',
    },
    {
      id: 'a2-lassen-rq2',
      question: 'Что господин Шмидт решил сделать со своей машиной?',
      options: ['Продать ее.', 'Починить ее самостоятельно.', 'Отдать ее в ремонт.', 'Купить новую.'],
      correctAnswer: 'Отдать ее в ремонт.',
      explanation: 'В тексте сказано: ""Ich muss das Auto reparieren lassen", dachte Herr Schmidt."',
    },
  ],
  exercises: [
    {
      id: 'a2-lassen-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "lassen": Ich ___ dich heute nicht allein zu Hause.',
      sentenceParts: ['Ich ', ' dich heute nicht allein zu Hause.'],
      correctAnswer: 'lasse',
      explanation: 'Для "ich" глагол "lassen" имеет форму "lasse". Значение: оставлять.',
    },
    {
      id: 'a2-lassen-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение: "Мама разрешает мне играть."',
      options: [
        'Mama lasse ich spielen.',
        'Mama lässt mich spielen.',
        'Mama lasst mich spielen.'
      ],
      correctAnswer: 'Mama lässt mich spielen.',
      explanation: 'Значение "разрешать". "Mama" (она) -> "lässt". "Меня" (Akkusativ) -> "mich". Инфинитив "spielen" в конце.',
    },
    {
      id: 'a2-lassen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он оставляет свою сумку в машине."',
      prompt: 'Он оставляет свою сумку в машине.',
      languageDirection: 'to_german',
      correctAnswer: 'Er lässt seine Tasche im Auto.',
      explanation: 'Значение "оставлять". "Er lässt seine Tasche..." (оставляет свою сумку).',
    },
    {
      id: 'a2-lassen-ex4',
      type: 'writing_prompt',
      question: 'Напиши два предложения с глаголом "lassen": одно в значении "позволять/разрешать", другое в значении "оставлять".',
      suggestedLength: '2 предложения',
    },
  ],
};
