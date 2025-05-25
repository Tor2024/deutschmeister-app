
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

**4. Введение в Konjunktiv I (для ознакомления):**
   Konjunktiv I – это специальное наклонение для косвенной речи. Для многих глаголов в 3-м лице единственного числа (er/sie/es) он образуется от основы инфинитива + **-e**.
   -   *sagen -> er sag**e***
   -   *kommen -> er komm**e***
   -   Для \`sein\`: *er/sie/es **sei***
   -   Для \`haben\`: *er/sie/es **habe***

   *Примеры с Konjunktiv I (чаще в письменной речи):*
   -   Прямая речь: *Peter sagt: "Ich **habe** keine Zeit."*
   -   Косвенная речь: *Peter sagt, er **habe** keine Zeit.* (Петер говорит, что у него (якобы) нет времени.)
   -   Прямая речь: *Lisa erzählt: "Ich **bin** glücklich."*
   -   Косвенная речь: *Lisa erzählt, sie **sei** glücklich.*

   На уровне B1 часто достаточно использовать Präsens Indikativ в придаточном предложении (как в первых примерах с \`dass\` и \`ob\`), особенно если нет двусмысленности. Но важно знать, что Konjunktiv I существует.

**5. Сдвиг местоимений:**
   При переходе из прямой речи в косвенную часто необходимо изменять личные и притяжательные местоимения в зависимости от того, кто передает речь.
   -   *Er sagt: "**Ich** gehe zu **meinem** Freund."* -> *Er sagt, **er** gehe zu **seinem** Freund.* (или ...dass er zu seinem Freund geht.)

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
    { german: 'der Konjunktiv I', russian: 'Конъюнктив I (сослагательное наклонение I) - введение' },
    { german: 'sei (Konj. I von sein)', russian: 'форма "быть" в Konj. I (er/sie/es sei)', example: 'Er behauptet, er sei reich.' },
    { german: 'habe (Konj. I von haben)', russian: 'форма "иметь" в Konj. I (er/sie/es habe)', example: 'Sie meint, sie habe das Recht.' },
  ],
  readingText: `
Anna fragt ihren Bruder Paul: "Was machst du heute Abend?" Paul antwortet: "Ich weiß es noch nicht genau. Vielleicht treffe ich mich mit Freunden."
Später erzählt Anna ihrer Mutter: "Paul hat gesagt, dass er heute Abend vielleicht seine Freunde trifft. Er meinte auch, er wisse noch nicht genau, was er macht."
Die Mutter fragt Anna: "Und was hat er gefragt, ob du mitkommen möchtest?" Anna lacht und sagt: "Nein, das hat er nicht gefragt."
  `,
  readingComprehensionExercises: [
    {
      id: 'b1-indirekte-rede-einf-rq1',
      type: 'multiple_choice',
      question: 'Was antwortet Paul auf Annas Frage, was er heute Abend macht?',
      options: ['Er geht sicher ins Kino.', 'Er trifft sich definitiv mit Anna.', 'Er weiß es noch nicht genau, vielleicht trifft er Freunde.', 'Er bleibt zu Hause.'],
      correctAnswer: 'Er weiß es noch nicht genau, vielleicht trifft er Freunde.',
      explanation: 'Paul antwortet: "Ich weiß es noch nicht genau. Vielleicht treffe ich mich mit Freunden."',
    },
    {
      id: 'b1-indirekte-rede-einf-rq2',
      type: 'multiple_choice',
      question: 'Wie gibt Anna die Antwort von Paul an ihre Mutter weiter?',
      options: ['Paul sagte, er habe heute Abend keine Zeit.', 'Paul sagte, dass er heute Abend vielleicht seine Freunde trifft.', 'Paul fragte, ob die Mutter mit ihm ausgeht.', 'Paul sagte, er gehe auf jeden Fall ins Kino.'],
      correctAnswer: 'Paul sagte, dass er heute Abend vielleicht seine Freunde trifft.',
      explanation: 'Anna erzählt: "Paul hat gesagt, dass er heute Abend vielleicht seine Freunde trifft."',
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
      type: 'writing_prompt',
      question: 'Dein Freund hat dir gesagt: "Ich habe heute keine Zeit für Sport." Berichte das in indirekter Rede. (Твой друг сказал тебе: "У меня сегодня нет времени на спорт." Передай это в косвенной речи.)',
      suggestedLength: '1 предложение',
    },
  ],
};
