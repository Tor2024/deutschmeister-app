
import type { Lesson } from '@/types';

// --- Урок A2: Модальные глаголы (Modalverben) ---
export const lessonA2Modalverben: Lesson = {
  id: 'a2-modalverben',
  level: 'A2',
  topic: 'Модальные глаголы (Modalverben)',
  theory: `Модальные глаголы (Modalverben) в немецком языке играют важную роль. Они не обозначают само действие, а выражают отношение говорящего к этому действию: возможность, необходимость, разрешение, желание, умение или долженствование.

**1. Что такое модальные глаголы?**
- Модальные глаголы обычно используются в сочетании с другим глаголом, который называется смысловым глаголом.
- Смысловой глагол стоит в конце предложения в форме инфинитива (начальной форме, например, "machen", "lesen") **без частицы "zu"**.
  *Пример: Ich **kann** gut **schwimmen**. (Я умею хорошо плавать.)*
  Здесь "kann" – модальный глагол, "schwimmen" – смысловой глагол в инфинитиве.

**2. Основные модальные глаголы и их значения:**

*   **können** – мочь, уметь (выражает способность, возможность, иногда разрешение)
    *   *Ich **kann** Deutsch sprechen.* (Я умею говорить по-немецки.)
    *   *Du **kannst** heute Abend kommen.* (Ты можешь прийти сегодня вечером - есть возможность.)
    *   ***Kann** ich Ihnen helfen?* (Могу я Вам помочь? - предложение помощи/возможность)

*   **müssen** – быть должным, быть вынужденным (выражает сильную необходимость, обязанность, от которой нельзя уклониться)
    *   *Ich **muss** meine Hausaufgaben machen.* (Я должен сделать свои домашние задания.)
    *   *Wir **müssen** pünktlich sein.* (Мы должны быть вовремя.)

*   **dürfen** – мочь, иметь разрешение (выражает разрешение или запрет в отрицательной форме)
    *   ***Darf** ich hier parken?* (Можно мне здесь припарковаться?)
    *   *Man **darf** hier nicht rauchen.* (Здесь нельзя курить - запрет.)

*   **wollen** – хотеть, желать (выражает сильное желание, намерение)
    *   *Ich **will** ein neues Fahrrad kaufen.* (Я хочу купить новый велосипед.)
    *   *Was **wollt** ihr am Wochenende **machen**?* (Что вы хотите делать на выходных?)

*   **sollen** – быть должным, следовать (выражает совет, рекомендацию, моральный долг, поручение от другого лица)
    *   *Du **sollst** mehr Obst essen.* (Тебе следует есть больше фруктов - совет.)
    *   *Der Arzt hat gesagt, ich **soll** im Bett bleiben.* (Врач сказал, я должен оставаться в постели - поручение.)

*   **mögen / möchte-**
    *   **mögen** – любить, нравиться (часто используется со существительными или инфинитивом другого глагола, когда речь идет о предпочтениях)
        *   *Ich **mag** Schokolade.* (Я люблю шоколад.)
        *   ***Magst** du Musik **hören**?* (Тебе нравится слушать музыку?)
    *   **möchte-** (форма Konjunktiv II от mögen) – хотел бы (выражает вежливое желание, используется как модальный глагол)
        *   *Ich **möchte** einen Kaffee, bitte.* (Я хотел бы кофе, пожалуйста.)
        *   *Wir **möchten** einen Tisch reservieren.* (Мы хотели бы зарезервировать столик.)

**3. Спряжение модальных глаголов в Präsens (Настоящем времени):**
Ключевая особенность: **1-е и 3-е лицо единственного числа (ich, er/sie/es) совпадают и не имеют окончания -t у 3-го лица**. Часто происходит изменение корневой гласной.

| Местоимение | können   | müssen   | dürfen   | wollen   | sollen   | möchten  | mögen    |
|-------------|----------|----------|----------|----------|----------|----------|----------|
| ich         | kann     | muss     | darf     | will     | soll     | möchte   | mag      |
| du          | kann**st**| muss**t** | darf**st**| will**st**| soll**st**| möchte**st**| mag**st** |
| er/sie/es   | kann     | muss     | darf     | will     | soll     | möchte   | mag      |
| wir         | können   | müssen   | dürfen   | wollen   | sollen   | möchten  | mögen    |
| ihr         | könn**t** | müss**t** | dürf**t** | woll**t** | soll**t** | möchte**t**| mög**t**  |
| sie/Sie     | können   | müssen   | dürfen   | wollen   | sollen   | möchten  | mögen    |

**4. Порядок слов в предложении с модальным глаголом:**

*   **Утвердительное предложение:**
    Подлежащее + **Модальный глагол** (спрягаемая форма) + ... + Смысловой глагол (инфинитив).
    *Пример: Peter **will** am Abend ein Buch **lesen**.*

*   **Вопросительное предложение (без вопросительного слова):**
    **Модальный глагол** (спрягаемая форма) + Подлежащее + ... + Смысловой глагол (инфинитив)?
    *Пример: **Kannst** du mir bitte **helfen**?*

*   **Вопросительное предложение (с вопросительным словом):**
    Вопросительное слово + **Модальный глагол** (спрягаемая форма) + Подлежащее + ... + Смысловой глагол (инфинитив)?
    *Пример: Was **möchtest** du heute **essen**?*

**5. Модальные глаголы без смыслового глагола:**
Иногда модальный глагол может использоваться самостоятельно, если смысловой глагол понятен из контекста.
*   *Ich **kann** das.* (Я могу это. / Я это умею.)
*   *Ich **muss** jetzt nach Hause (gehen).* (Я должен сейчас (идти) домой.)
*   *Ich **will** ein Eis (essen).* (Я хочу (съесть) мороженое.)

Запоминание значений и форм спряжения модальных глаголов очень важно для повседневного общения на немецком языке.`,
  vocabulary: [
    { german: 'können (kann, kannst, kann)', russian: 'мочь, уметь', example: 'Ich kann schwimmen.' },
    { german: 'müssen (muss, musst, muss)', russian: 'быть должным, быть вынужденным', example: 'Du musst das machen.' },
    { german: 'dürfen (darf, darfst, darf)', russian: 'мочь (иметь разрешение)', example: 'Darf ich fragen?' },
    { german: 'wollen (will, willst, will)', russian: 'хотеть, желать', example: 'Er will schlafen.' },
    { german: 'sollen (soll, sollst, soll)', russian: 'быть должным (по совету, обязанности)', example: 'Wir sollen pünktlich sein.' },
    { german: 'mögen (mag, magst, mag)', russian: 'любить, нравиться', example: 'Sie mag Katzen.' },
    { german: 'möchte- (möchte, möchtest, möchte)', russian: 'хотел бы', example: 'Ich möchte einen Kaffee.' },
    { german: 'der Infinitiv', russian: 'инфинитив (начальная форма глагола)', example: 'Sprechen ist ein Infinitiv.' },
    { german: 'die Fähigkeit', russian: 'способность, умение', example: 'Er hat die Fähigkeit, schnell zu lernen.' },
    { german: 'die Möglichkeit', russian: 'возможность', example: 'Gibt es eine Möglichkeit zu helfen?' },
    { german: 'die Notwendigkeit', russian: 'необходимость', example: 'Das ist eine absolute Notwendigkeit.' },
    { german: 'die Erlaubnis', russian: 'разрешение', example: 'Hast du die Erlaubnis dafür?' },
    { german: 'der Wunsch', russian: 'желание', example: 'Mein größter Wunsch ist eine Weltreise.' },
    { german: 'die Pflicht', russian: 'обязанность, долг', example: 'Es ist deine Pflicht, das zu tun.' },
    { german: 'der Ratschlag', russian: 'совет', example: 'Kannst du mir einen Ratschlag geben?' },
  ],
  exercises: [
    {
      id: 'a2-modalverben-ex1',
      type: 'multiple_choice',
      question: 'Какое значение чаще всего выражает глагол "dürfen"?',
      options: ['Умение', 'Сильная необходимость', 'Разрешение', 'Желание'],
      correctAnswer: 'Разрешение',
      explanation: 'Глагол "dürfen" в основном означает "мочь, иметь разрешение". В отрицании он означает запрет.',
    },
    {
      id: 'a2-modalverben-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "können": Wir ___ gut Deutsch sprechen.',
      sentenceParts: ['Wir ', ' gut Deutsch sprechen.'],
      correctAnswer: 'können',
      explanation: 'Для местоимения "wir" (мы) глагол "können" имеет форму "können".',
    },
    {
      id: 'a2-modalverben-ex3',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "müssen": Er ___ heute länger arbeiten.',
      sentenceParts: ['Er ', ' heute länger arbeiten.'],
      correctAnswer: 'muss',
      explanation: 'Для местоимения "er" (он) глагол "müssen" имеет форму "muss" (1-е и 3-е лицо ед.ч. совпадают).',
    },
    {
      id: 'a2-modalverben-ex4',
      type: 'translation',
      question: 'Переведите на немецкий: "Ты хочешь пойти в кино?"',
      prompt: 'Ты хочешь пойти в кино?',
      languageDirection: 'to_german',
      correctAnswer: 'Willst du ins Kino gehen?',
      explanation: 'Модальный глагол "wollen" (в форме "willst" для "du") ставится на первое место в вопросе без вопросительного слова. Смысловой глагол "gehen" в инфинитиве идет в конец.',
    },
    {
      id: 'a2-modalverben-ex5',
      type: 'multiple_choice',
      question: 'Выберите правильный модальный глагол: "Man ___ hier nicht rauchen. Es ist verboten."',
      options: ['kann', 'muss', 'darf', 'will'],
      correctAnswer: 'darf',
      explanation: '"Запрещено" (verboten) указывает на отсутствие разрешения, что выражается отрицательной формой глагола "dürfen" (nicht dürfen). Здесь имеется в виду "Man darf hier nicht rauchen".',
    },
    {
      id: 'a2-modalverben-ex6',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "möchte-": Ich ___ bitte einen Tee.',
      sentenceParts: ['Ich ', ' bitte einen Tee.'],
      correctAnswer: 'möchte',
      explanation: 'Для местоимения "ich" (я) вежливая форма желания "möchte-" имеет форму "möchte".',
    },
    {
      id: 'a2-modalverben-ex7',
      type: 'multiple_choice',
      question: 'Какое предложение составлено грамматически правильно?',
      options: [
        'Ich will schlafen jetzt.',
        'Du kannst mir helfen?',
        'Sie muss die Suppe kochen.',
        'Wir gehen sollen ins Museum.'
      ],
      correctAnswer: 'Sie muss die Suppe kochen.',
      explanation: 'В правильном предложении модальный глагол "muss" стоит на втором месте, а инфинитив "kochen" - в конце.',
    },
  ],
};
