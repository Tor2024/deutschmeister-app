
import type { Lesson } from '@/types';

// --- Урок B1: Условные предложения (Konditionalsätze Typ I - реальное условие) ---
export const lessonB1KonditionalsaetzeTyp1: Lesson = {
  id: 'b1-konditionalsaetze-typ1',
  level: 'B1',
  topic: 'Условные предложения (Konditionalsätze Typ I - реальное условие)',
  theory: `
Условные предложения типа I (Konditionalsätze Typ I), также известные как реальные условные предложения, выражают условие, которое является реальным или вполне возможным для выполнения в настоящем или будущем. Следствие такого условия также рассматривается как реальное или вероятное.

**1. Образование с союзом \`wenn\` (если)**
   Это самый распространенный способ. Придаточное предложение условия вводится союзом \`wenn\`.
   *   **Структура:**
       *   \`Wenn\` + Подлежащее + ... + Глагол в Präsens (в конце придаточного), Главное предложение (Präsens или Futur I).
           *Пример: **Wenn** das Wetter gut **ist**, **gehen** wir spazieren.* (Если погода хорошая, мы пойдем гулять.)
           *Пример: **Wenn** du viel **lernst**, **wirst** du die Prüfung **bestehen**.* (Если ты будешь много учить, ты сдашь экзамен.)
       *   Главное предложение (Präsens или Futur I), \`wenn\` + Подлежащее + ... + Глагол в Präsens (в конце придаточного).
           *Пример: Wir **gehen** spazieren, **wenn** das Wetter gut **ist**.*
           *Пример: Du **wirst** die Prüfung **bestehen**, **wenn** du viel **lernst**.*

**2. Образование без союза \`wenn\` (инверсия)**
   Условное предложение может быть выражено и без союза \`wenn\`. В этом случае спрягаемый глагол условного придаточного предложения ставится на первое место, а затем следует подлежащее.
   *   **Структура:** Глагол в Präsens + Подлежащее + ..., Главное предложение (Präsens или Futur I).
       *Пример: **Ist** das Wetter gut, **gehen** wir spazieren.* (Будет погода хорошая, мы пойдем гулять.)
       *Пример: **Lernst** du viel, **wirst** du die Prüfung **bestehen**.* (Будешь много учить, сдашь экзамен.)

**3. Союз \`falls\` (в случае если)**
   Союз \`falls\` также вводит реальное условие, но часто с оттенком меньшей вероятности, чем \`wenn\`. Порядок слов такой же, как с \`wenn\`.
   *Пример: **Falls** es regnet, bleiben wir zu Hause.* (В случае если пойдет дождь, мы останемся дома.)

**Важно:**
   - В условном придаточном предложении (с \`wenn\` или \`falls\`) глагол стоит в **Präsens**.
   - В главном предложении, выражающем следствие, глагол стоит в **Präsens** (для действий в настоящем или обычных последствий) или в **Futur I** (для действий в будущем).
   - Если придаточное предложение условия стоит перед главным, главное предложение начинается со спрягаемого глагола (инверсия).

*Примеры:*
   - ***Wenn** ich Zeit habe, besuche ich dich.* (Если у меня будет время, я навещу тебя.)
   - *Ich komme mit, **falls** du mich brauchst.* (Я пойду с тобой, если я тебе понадоблюсь.)
   - ***Kommst** du früher, können wir noch einen Kaffee trinken.* (Придешь раньше, сможем еще выпить кофе.)
`,
  vocabulary: [
    { german: 'wenn', russian: 'если, когда (для реального условия)', example: 'Wenn es sonnig ist, gehen wir an den See.' },
    { german: 'falls', russian: 'в случае если, если (часто для менее вероятного условия)', example: 'Falls du Fragen hast, ruf mich an.' },
    { german: 'die Bedingung (-en)', russian: 'условие', example: 'Unter welcher Bedingung kommst du?' },
    { german: 'real', russian: 'реальный, действительный', example: 'Das ist eine reale Möglichkeit.' },
    { german: 'möglich', russian: 'возможный', example: 'Es ist möglich, dass er kommt.' },
    { german: 'bestehen (eine Prüfung)', russian: 'сдать (экзамен)', example: 'Wenn er lernt, besteht er die Prüfung.' },
    { german: 'Zeit haben', russian: 'иметь время', example: 'Wenn ich Zeit habe, rufe ich dich an.' },
    { german: 'helfen (hilft)', russian: 'помогать', example: 'Wenn du mir hilfst, sind wir schneller fertig.' },
  ],
  readingText: `
Viele Menschen planen ihre Wochenendaktivitäten abhängig vom Wetter. Wenn die Sonne scheint und es warm ist, gehen viele gerne in den Park, machen ein Picknick oder fahren Fahrrad. Falls es jedoch regnet, bleiben die meisten lieber zu Hause, lesen ein Buch oder schauen einen Film.
Anna hat für das kommende Wochenende eine Wanderung geplant. Sie sagt: "Wenn das Wetter gut ist, wandern wir in den Bergen. Falls es aber schlechtes Wetter gibt, besuchen wir ein Museum." Ihr Freund Paul antwortet: "Das klingt gut! Kommst du am Samstagmorgen bei mir vorbei, fahren wir zusammen los."
  `,
  readingComprehensionExercises: [
    {
      id: 'b1-konditionalsaetze-typ1-rq1',
      type: 'multiple_choice',
      question: 'Was macht Anna, wenn das Wetter am Wochenende gut ist?',
      options: ['Sie besucht ein Museum.', 'Sie bleibt zu Hause.', 'Sie wandert in den Bergen.', 'Sie liest ein Buch.'],
      correctAnswer: 'Sie wandert in den Bergen.',
      explanation: 'Anna sagt: "Wenn das Wetter gut ist, wandern wir in den Bergen."',
    },
    {
      id: 'b1-konditionalsaetze-typ1-rq2',
      type: 'multiple_choice',
      question: 'Unter welcher Bedingung fahren Anna und Paul zusammen los?',
      options: ['Wenn Paul Zeit hat.', 'Wenn Anna am Samstagmorgen bei Paul vorbeikommt.', 'Wenn sie ein Museum finden.', 'Wenn es nicht regnet.'],
      correctAnswer: 'Wenn Anna am Samstagmorgen bei Paul vorbeikommt.',
      explanation: 'Paul antwortet: "Kommst du am Samstagmorgen bei mir vorbei, fahren wir zusammen los." (Инверсия = Wenn du vorbeikommst...)',
    },
  ],
  exercises: [
    {
      id: 'b1-konditionalsaetze-typ1-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: "___ du mir hilfst, können wir die Arbeit schneller erledigen."',
      options: ['Weil', 'Obwohl', 'Wenn', 'Damit'],
      correctAnswer: 'Wenn',
      explanation: 'Союз "wenn" (если) вводит реальное условие.',
    },
    {
      id: 'b1-konditionalsaetze-typ1-ex2',
      type: 'fill_in_the_blank',
      question: 'Соедините предложения, используя "wenn": "Es regnet. Wir bleiben zu Hause."',
      sentenceParts: ['', ' es regnet, bleiben wir zu Hause.'],
      correctAnswer: 'Wenn',
      explanation: 'Wenn es regnet, bleiben wir zu Hause.',
    },
    {
      id: 'b1-konditionalsaetze-typ1-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя инверсию в условной части: "Есть у тебя время, позвони мне."',
      prompt: 'Есть у тебя время, позвони мне.',
      languageDirection: 'to_german',
      correctAnswer: 'Hast du Zeit, ruf mich an.',
      explanation: 'Условное предложение без "wenn" начинается с глагола: Hast du Zeit,...',
    },
    {
      id: 'b1-konditionalsaetze-typ1-ex4',
      type: 'writing_prompt',
      question: 'Was machst du, wenn du am Wochenende schönes Wetter hast? Schreibe 2-3 Sätze.',
      suggestedLength: '2-3 Sätze',
    },
  ],
};

