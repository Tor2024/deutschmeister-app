
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonB1IndirekteRedeEinfuehrung: Lesson = {
  id: 'b1-indirekte-rede-einfuehrung',
  level: 'B1',
  topic: 'Косвенная речь (Indirekte Rede) - Введение',
  theory: `
Косвенная речь (Indirekte Rede) используется для передачи чужих высказываний, мыслей или вопросов, не цитируя их дословно. Это важный инструмент для пересказа информации.

**1. Основной принцип:**
   В немецком языке для косвенной речи часто используется сослагательное наклонение **Konjunktiv I**. Однако на уровне B1 мы начнем с более простых конструкций, которые часто встречаются.

**2. Передача утвердительных предложений:**
   Часто вводится союзом **dass** (что). Глагол в придаточном предложении с \`dass\` уходит в конец.
   -   Прямая речь: *Anna sagt: "Ich lerne Deutsch."* (Анна говорит: "Я учу немецкий.")
   -   Косвенная речь: *Anna sagt, **dass sie Deutsch lernt**.* (Анна говорит, что она учит немецкий.)
   Обратите внимание на изменение местоимения (\`ich\` -> \`sie\`) и формы глагола (\`lerne\` -> \`lernt\`).

   Иногда союз \`dass\` может опускаться, особенно в устной речи. Тогда главное и придаточное предложения разделяются запятой, а порядок слов в бывшем придаточном может быть как у главного предложения, но это более характерно для разговорной речи и не всегда грамматически строго. Для B1 лучше использовать \`dass\`.

**3. Передача вопросов:**
   *   **Общие вопросы (Ja/Nein-Fragen):** Вводятся союзом **ob** (ли). Глагол в придаточном предложении уходит в конец.
       -   Прямая речь: *Er fragt: "Kommst du heute Abend?"* (Он спрашивает: "Ты придешь сегодня вечером?")
       -   Косвенная речь: *Er fragt, **ob ich heute Abend komme**.* (Он спрашивает, приду ли я сегодня вечером.)
   *   **Специальные вопросы (W-Fragen):** Вводятся тем же вопросительным словом (\`wer\`, \`was\`, \`wann\`, \`wo\` и т.д.). Глагол в придаточном предложении уходит в конец.
       -   Прямая речь: *Sie fragt: "Wann beginnt der Film?"* (Она спрашивает: "Когда начинается фильм?")
       -   Косвенная речь: *Sie fragt, **wann der Film beginnt**.* (Она спрашивает, когда начинается фильм.)

**4. Использование Konjunktiv I (основы):**
   Konjunktiv I – это основное наклонение для косвенной речи. Для многих глаголов в 3-м лице единственного числа (er/sie/es) он образуется путем добавления **-e** к основе инфинитива.
   -   *sagen -> er sag**e***
   -   *kommen -> er komm**e***
   -   *haben -> er hab**e***
   -   *sein -> er sei*

   *Примеры с Konjunktiv I:*
   -   Прямая речь: *Peter sagt: "Ich **habe** keine Zeit."*
   -   Косвенная речь: *Peter sagt, er **habe** keine Zeit.* (Петер говорит, что у него (якобы) нет времени.)
   -   Прямая речь: *Lisa erzählt: "Ich **bin** glücklich."*
   -   Косвенная речь: *Lisa erzählt, sie **sei** glücklich.*

   На уровне B1 часто достаточно использовать Präsens Indikativ в придаточном предложении (как в первых примерах с \`dass\` и \`ob\`), особенно если нет двусмысленности. Но знакомство с Konjunktiv I важно для понимания и перехода к более высоким уровням.

**5. Сдвиг местоимений:**
   При переходе из прямой речи в косвенную часто необходимо изменять личные и притяжательные местоимения в зависимости от того, кто передает речь.
   -   *Er sagt: "**Ich** gehe zu **meinem** Freund."* -> *Er sagt, **er** gehe zu **seinem** Freund.*

Это основы косвенной речи. Главное – помнить о союзах \`dass\`, \`ob\`, вопросительных словах и о том, что глагол в придаточном уходит в конец.
  `,
  vocabulary: [
    { german: 'die Indirekte Rede', russian: 'косвенная речь' },
    { german: 'dass', russian: 'что (союз для утверждений в косвенной речи)', example: 'Er sagt, dass er kommt.' },
    { german: 'ob', russian: 'ли (союз для общих вопросов в косвенной речи)', example: 'Ich frage, ob du Zeit hast.' },
    { german: 'sagen', russian: 'говорить, сказать', example: 'Sie sagte, sie sei müde.' },
    { german: 'fragen', russian: 'спрашивать', example: 'Er fragte, wann wir anfangen.' },
    { german: 'antworten', russian: 'отвечать', example: 'Sie antwortete, dass sie keine Ahnung habe.' },
    { german: 'erzählen', russian: 'рассказывать', example: 'Er erzählte, er habe Urlaub gemacht.' },
    { german: 'meinen', russian: 'полагать, иметь в виду', example: 'Ich meine, dass das eine gute Idee ist.' },
    { german: 'der Konjunktiv I', russian: 'Конъюнктив I (сослагательное наклонение I)' },
    { german: 'sei (Konj. I von sein)', russian: 'форма "быть" в Konj. I (er/sie/es sei)', example: 'Er behauptet, er sei reich.' },
    { german: 'habe (Konj. I von haben)', russian: 'форма "иметь" в Konj. I (er/sie/es habe)', example: 'Sie meint, sie habe das Recht.' },
  ],
  readingText: `
Reporter: Herr Meier, was sagen Sie zu den aktuellen Entwicklungen?
Herr Meier: Ich bin der Meinung, dass wir vor großen Herausforderungen stehen. Viele Bürger fragen mich, ob die Regierung die Situation im Griff hat. Ich antworte dann, dass wir alle zusammenarbeiten müssen. Es ist wichtig, dass jeder seinen Beitrag leistet. Ein Kollege meinte neulich, die Lage sei kompliziert, aber nicht hoffnungslos.
  `,
  readingComprehensionExercises: [
    {
      id: 'b1-indirekte-rede-rq1',
      type: 'multiple_choice',
      question: 'Что, по мнению господина Майера, важно в текущей ситуации?',
      options: ['Чтобы каждый решал свои проблемы сам.', 'Чтобы все работали вместе, и каждый вносил свой вклад.', 'Чтобы правительство все контролировало в одиночку.', 'Чтобы не обращать внимания на проблемы.'],
      correctAnswer: 'Чтобы все работали вместе, и каждый вносил свой вклад.',
      explanation: 'Herr Meier sagt: "...dass wir alle zusammenarbeiten müssen. Es ist wichtig, dass jeder seinen Beitrag leistet."',
    },
    {
      id: 'b1-indirekte-rede-rq2',
      type: 'multiple_choice',
      question: 'Какой вопрос, по словам господина Майера, ему задают многие граждане?',
      options: ['Когда будут следующие выборы?', 'Контролирует ли правительство ситуацию?', 'Почему налоги такие высокие?', 'Какая погода будет завтра?'],
      correctAnswer: 'Контролирует ли правительство ситуацию?',
      explanation: 'Herr Meier sagt: "Viele Bürger fragen mich, ob die Regierung die Situation im Griff hat."',
    },
  ],
  exercises: [
    {
      id: 'b1-indirekte-rede-einf-ex1',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в косвенную речь: Maria sagt: "Ich komme später." -> Maria sagt, dass sie später ___.',
      sentenceParts: ['Maria sagt, dass sie später ', '.'],
      correctAnswer: 'kommt', // На B1 часто используется Indikativ, если Konj. I совпадает. Konj I "komme".
      explanation: 'В косвенной речи с "dass" глагол "kommt" (или Konj.I "komme") уходит в конец. Местоимение "ich" меняется на "sie".',
    },
    {
      id: 'b1-indirekte-rede-einf-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильный союз для косвенного вопроса: "Er fragt, ___ du Zeit hast."',
      options: ['dass', 'wenn', 'ob', 'weil'],
      correctAnswer: 'ob',
      explanation: 'Для косвенного общего вопроса (да/нет) используется союз "ob" (ли).',
    },
    {
      id: 'b1-indirekte-rede-einf-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (используйте косвенную речь с "dass"): "Она думает, что фильм интересный."',
      prompt: 'Она думает, что фильм интересный.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie denkt, dass der Film interessant ist.',
      explanation: 'Косвенная речь с "dass". Глагол "ist" в конце придаточного.',
    },
    {
      id: 'b1-indirekte-rede-einf-ex4',
      type: 'fill_in_the_blank',
      question: 'Косвенная речь (Konjunktiv I): Der Lehrer sagt, der Test ___ nicht schwer. (sein)',
      sentenceParts: ['Der Lehrer sagt, der Test ', ' nicht schwer.'],
      correctAnswer: 'sei',
      explanation: 'Konjunktiv I от "sein" для 3-го лица единственного числа (der Test - er) - "sei".',
    },
    {
      id: 'b1-indirekte-rede-einf-wp1',
      type: 'writing_prompt',
      question: 'Dein Freund hat dir gesagt: "Ich fahre morgen ans Meer." Berichte das in indirekter Rede. (Твой друг сказал тебе: "Я завтра еду на море." Передай это в косвенной речи.)',
      suggestedLength: '1 предложение',
    },
  ],
};
