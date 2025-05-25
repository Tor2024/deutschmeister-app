
import type { Lesson } from '@/types';

// --- Урок A1: Модальные глаголы (Основы: können, müssen, wollen, möchten) ---
export const lessonA1Modalverben: Lesson = {
  id: 'a1-modalverben',
  level: 'A1',
  topic: 'Модальные глаголы (Основы: können, müssen, wollen, möchten)',
  theory: `
Модальные глаголы – это особые глаголы, которые обычно используются с другим, смысловым глаголом. Модальный глагол изменяет значение смыслового глагола, указывая на возможность, способность, необходимость, желание и т.д. Смысловой глагол при этом стоит в конце предложения в начальной форме (инфинитиве).

**Основные модальные глаголы для уровня A1:**

1.  **können (мочь, уметь)**
    Выражает способность или возможность что-то сделать.
    *Спряжение в Präsens (настоящем времени):*
    ich kann (я могу/умею)
    du kannst (ты можешь/умеешь)
    er/sie/es kann (он/она/оно может/умеет)
    wir können (мы можем/умеем)
    ihr könnt (вы можете/умеете)
    sie/Sie können (они/Вы можете/умеете)

    *Примеры:*
    *   *Ich **kann** gut schwimmen.* (Я умею хорошо плавать.)
    *   *Du **kannst** Deutsch sprechen.* (Ты можешь говорить по-немецки.)
    *   *Wir **können** heute ins Kino gehen.* (Мы можем сегодня пойти в кино.)

2.  **müssen (быть должным, быть вынужденным)**
    Выражает необходимость или обязанность что-то сделать.
    *Спряжение в Präsens:*
    ich muss (я должен)
    du musst (ты должен)
    er/sie/es muss (он/она/оно должен/должна/должно)
    wir müssen (мы должны)
    ihr müsst (вы должны)
    sie/Sie müssen (они/Вы должны)

    *Примеры:*
    *   *Ich **muss** jetzt arbeiten.* (Я должен сейчас работать.)
    *   *Du **musst** deine Hausaufgaben machen.* (Ты должен сделать свои домашние задания.)
    *   *Wir **müssen** pünktlich sein.* (Мы должны быть вовремя.)

3.  **wollen (хотеть)**
    Выражает желание или намерение что-то сделать.
    *Спряжение в Präsens:*
    ich will (я хочу)
    du willst (ты хочешь)
    er/sie/es will (он/она/оно хочет)
    wir wollen (мы хотим)
    ihr wollt (вы хотите)
    sie/Sie wollen (они/Вы хотите)

    *Примеры:*
    *   *Ich **will** ein Eis essen.* (Я хочу съесть мороженое.)
    *   *Was **willst** du trinken?* (Что ты хочешь выпить?)
    *   *Sie **wollen** nach Deutschland fahren.* (Они хотят поехать в Германию.)

4.  **möchten (хотел бы)**
    Это вежливая форма выражения желания. \`Möchten\` является формой Konjunktiv II от глагола \`mögen\` (любить, нравиться), но в значении "хотел бы" спрягается в Präsens регулярно (как слабый глагол).
    *Спряжение в Präsens:*
    ich möchte (я хотел бы)
    du möchtest (ты хотел бы)
    er/sie/es möchte (он/она/оно хотел бы)
    wir möchten (мы хотели бы)
    ihr möchtet (вы хотели бы)
    sie/Sie möchten (они/Вы хотели бы)

    *Примеры:*
    *   *Ich **möchte** einen Kaffee, bitte.* (Я хотел бы чашку кофе, пожалуйста.)
    *   ***Möchtest** du mitkommen?* (Ты хотел бы пойти со мной?)
    *   *Wir **möchten** ein Zimmer reservieren.* (Мы хотели бы зарезервировать номер.)

**Порядок слов в предложении с модальным глаголом:**
В простом утвердительном предложении модальный глагол (спрягаемая форма) стоит на **втором месте**, а смысловой глагол в **инфинитиве** – в **конце предложения**.
*   *Ich **kann** heute Abend nicht **kommen**.* (Я не могу сегодня вечером прийти.)
*   *Er **muss** das Buch **lesen**.* (Он должен прочитать книгу.)
`,
  vocabulary: [
    { german: 'können', russian: 'мочь, уметь', example: 'Ich kann Klavier spielen.' },
    { german: 'ich kann', russian: 'я могу/умею' },
    { german: 'du kannst', russian: 'ты можешь/умеешь' },
    { german: 'er/sie/es kann', russian: 'он/она/оно может/умеет' },
    { german: 'müssen', russian: 'быть должным, быть вынужденным', example: 'Du musst lernen.' },
    { german: 'ich muss', russian: 'я должен' },
    { german: 'du musst', russian: 'ты должен' },
    { german: 'er/sie/es muss', russian: 'он/она/оно должен/должна/должно' },
    { german: 'wollen', russian: 'хотеть', example: 'Wir wollen ins Kino gehen.' },
    { german: 'ich will', russian: 'я хочу' },
    { german: 'du willst', russian: 'ты хочешь' },
    { german: 'er/sie/es will', russian: 'он/она/оно хочет' },
    { german: 'möchten', russian: 'хотел бы', example: 'Ich möchte einen Apfel.' },
    { german: 'ich möchte', russian: 'я хотел бы' },
    { german: 'du möchtest', russian: 'ты хотел бы' },
    { german: 'er/sie/es möchte', russian: 'он/она/оно хотел бы' },
    { german: 'schwimmen', russian: 'плавать', example: 'Kannst du schwimmen?' },
    { german: 'lernen', russian: 'учить', example: 'Ich muss Vokabeln lernen.' },
    { german: 'gehen', russian: 'идти', example: 'Wollen wir spazieren gehen?' },
    { german: 'essen', russian: 'есть, кушать', example: 'Ich möchte Pizza essen.' },
    { german: 'trinken', russian: 'пить', example: 'Was möchtest du trinken?' },
    { german: 'arbeiten', russian: 'работать', example: 'Er muss heute arbeiten.' },
  ],
  exercises: [
    {
      id: 'a1-modalverben-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "können": Ich ___ gut singen.',
      sentenceParts: ['Ich ', ' gut singen.'],
      correctAnswer: 'kann',
      explanation: 'Для "ich" форма глагола "können" - "kann".',
    },
    {
      id: 'a1-modalverben-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "müssen": Du ___ das Buch lesen.',
      sentenceParts: ['Du ', ' das Buch lesen.'],
      correctAnswer: 'musst',
      explanation: 'Для "du" форма глагола "müssen" - "musst".',
    },
    {
      id: 'a1-modalverben-ex3',
      type: 'multiple_choice',
      question: 'Какая форма глагола "wollen" подходит для "er/sie/es"?',
      options: ['will', 'willst', 'wollen', 'wollt'],
      correctAnswer: 'will',
      explanation: 'Для "er/sie/es" используется форма "will".',
    },
    {
      id: 'a1-modalverben-ex4',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы хотели бы пойти домой."',
      prompt: 'Мы хотели бы пойти домой.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir möchten nach Hause gehen.',
      explanation: '"Хотели бы" - "möchten". Для "wir" форма "möchten". "Nach Hause gehen" - идти домой.',
    },
    {
      id: 'a1-modalverben-ex5',
      type: 'fill_in_the_blank',
      question: 'Поставьте слова в правильном порядке: (du / kannst / mir / helfen?)',
      sentenceParts: ['', ' ', ' ', '?'],
      correctAnswer: 'Kannst du mir helfen',
      explanation: 'Общий вопрос с модальным глаголом: Kannst (глагол) du (подлежащее) mir helfen (дополнения и инфинитив в конце)?',
    },
  ],
};
