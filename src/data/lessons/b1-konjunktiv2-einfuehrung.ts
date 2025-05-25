
import type { Lesson } from '@/types';

// --- Урок B1: Сослагательное наклонение II (Konjunktiv II) - Введение ---
export const lessonB1Konjunktiv2Einfuehrung: Lesson = {
  id: 'b1-konjunktiv2-einfuehrung',
  level: 'B1',
  topic: 'Сослагательное наклонение II (Konjunktiv II) - Введение',
  theory: `Konjunktiv II (сослагательное наклонение II) используется для выражения ситуаций, которые не соответствуют действительности: нереальные желания, гипотетические ситуации, нереальные условия, а также для формулировки очень вежливых просьб или предложений.

**1. Основные функции Konjunktiv II на уровне B1:**

*   **Вежливые просьбы, вопросы и утверждения:**
    Это, пожалуй, самое частое использование на данном этапе. Konjunktiv II делает высказывание мягче и уважительнее.
    *   *Ich **hätte** gern einen Kaffee.* (Я бы хотел кофе.) (вместо прямого: Ich will einen Kaffee.)
    *   ***Könnten** Sie mir bitte helfen?* (Не могли бы Вы мне, пожалуйста, помочь?) (вместо: Können Sie...?)
    *   ***Würden** Sie bitte das Fenster schließen?* (Не закрыли бы Вы, пожалуйста, окно?)

*   **Нереальные желания (простые формы):**
    Выражают то, что хотелось бы, но что не является реальностью в данный момент.
    *   *Ach, wenn ich doch mehr Zeit **hätte**!* (Ах, если бы у меня только было больше времени!)
    *   *Ich **wäre** jetzt gern am Strand.* (Я бы сейчас с удовольствием был на пляже.)

*   **Нереальные условия (простые формы):**
    Описывают условие, которое не выполнено, и возможное следствие.
    *   *Wenn ich Geld **hätte**, **würde** ich eine Reise **machen**.* (Если бы у меня были деньги, я бы совершил путешествие.)

**2. Образование Konjunktiv II:**

На уровне B1 мы сосредоточимся на двух основных способах:

*   **Форма с \`würde\` + Infinitiv (начальная форма глагола):**
    Это самый универсальный и часто используемый способ, особенно для большинства глаголов.
    Формула: **würde (в личной форме) + Infinitiv основного глагола**
    Спряжение \`würde\`:
    -   ich würde
    -   du würdest
    -   er/sie/es würde
    -   wir würden
    -   ihr würdet
    -   sie/Sie würden
    *Примеры:*
    *   *Ich **würde** gern tanzen.* (Я бы с удовольствием потанцевал.)
    *   *Was **würdest** du jetzt **machen**?* (Что бы ты сейчас сделал?)

*   **Собственные формы для глаголов \`sein\`, \`haben\` и некоторых модальных глаголов:**
    Эти глаголы имеют свои особые, очень употребительные формы Konjunktiv II, которые нужно запомнить:

    *   **sein (быть):**
        -   ich **wäre** (я был бы)
        -   du **wärest / wärst** (ты был бы)
        -   er/sie/es **wäre** (он/она/оно был бы/была бы/было бы)
        -   wir **wären** (мы были бы)
        -   ihr **wäret / wärt** (вы были бы)
        -   sie/Sie **wären** (они/Вы были бы)
        *Пример: Ich **wäre** froh, wenn du kommst.* (Я был бы рад, если ты придешь.)

    *   **haben (иметь):**
        -   ich **hätte** (я имел бы)
        -   du **hättest** (ты имел бы)
        -   er/sie/es **hätte** (он/она/оно имел бы/имела бы/имело бы)
        -   wir **hätten** (мы имели бы)
        -   ihr **hättet** (вы имели бы)
        -   sie/Sie **hätten** (они/Вы имели бы)
        *Пример: Wenn ich mehr Geld **hätte**!* (Если бы у меня было больше денег!)

    *   **Модальные глаголы (наиболее важные для B1):**
        -   können (мочь, уметь) → **könnte**: ich könnte, du könntest, er/sie/es könnte, ...
            *Пример: **Könntest** du mir das erklären?* (Ты мог бы мне это объяснить?)
        -   müssen (быть должным) → **müsste**: ich müsste, du müsstest, er/sie/es müsste, ...
            *Пример: Ich **müsste** eigentlich lernen, aber ich habe keine Lust.* (Я вообще-то должен был бы учиться, но мне неохота.)
        -   dürfen (мочь, иметь разрешение) → **dürfte**: ich dürfte, du dürftest, er/sie/es dürfte, ...
            *Пример: Das **dürfte** kein Problem sein.* (Это, вероятно, не должно быть проблемой. – также выражает предположение)
        -   sollen (быть должным, следовать совету) → **sollte**: ich sollte, du solltest, er/sie/es sollte, ...
            *Пример: Du **solltest** zum Arzt gehen.* (Тебе следовало бы пойти к врачу.)

**Порядок слов:**
В предложениях с Konjunktiv II (\`würde\`, \`wäre\`, \`hätte\`, модальные глаголы) спрягаемый глагол (т.е. сама форма Konjunktiv II) стоит на обычном втором месте в главном предложении или на первом в вопросе. Инфинитив при использовании \`würde\` идет в конец.

Понимание и использование этих форм значительно расширит ваши возможности вежливого и гипотетического общения.
`,
  vocabulary: [
    { german: 'wäre (ich wäre, du wärest/wärst, er wäre)', russian: 'был бы (Konj. II от sein)', example: 'Es wäre schön, wenn...' },
    { german: 'hätte (ich hätte, du hättest, er hätte)', russian: 'имел бы (Konj. II от haben)', example: 'Ich hätte gern mehr Freizeit.' },
    { german: 'würde (ich würde, du würdest, er würde)', russian: 'бы (вспом. глагол для Konj. II)', example: 'Ich würde das anders machen.' },
    { german: 'könnte', russian: 'мог бы (Konj. II от können)', example: 'Könnten Sie das wiederholen?' },
    { german: 'müsste', russian: 'должен был бы (Konj. II от müssen)', example: 'Er müsste pünktlicher sein.' },
    { german: 'dürfte', russian: 'мог бы (иметь разрешение) / вероятно (Konj. II от dürfen)', example: 'Das dürfte stimmen.' },
    { german: 'sollte', russian: 'следовало бы (Konj. II от sollen)', example: 'Man sollte mehr lesen.' },
    { german: 'gern / gerne', russian: 'охотно, с удовольствием', example: 'Ich würde gerne mitkommen.' },
    { german: 'vielleicht', russian: 'может быть, вероятно', example: 'Vielleicht könnte er uns helfen.' },
    { german: 'bitte', russian: 'пожалуйста', example: 'Würden Sie mir bitte helfen?' },
    { german: 'wenn', russian: 'если (для условных предложений)', example: 'Wenn ich Zeit hätte, käme ich.' },
  ],
  exercises: [
    {
      id: 'b1-konj2-einf-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Konjunktiv II для вежливой просьбы: "___ Sie mir bitte helfen?"',
      options: ['Können', 'Könntest', 'Könnten', 'Kann'],
      correctAnswer: 'Könnten',
      explanation: 'Для вежливой просьбы к "Sie" используется "Könnten Sie...?".',
    },
    {
      id: 'b1-konj2-einf-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Wenn ich mehr Geld ___, ___ ich ein neues Auto kaufen.',
      sentenceParts: ['Wenn ich mehr Geld ', ', ', ' ich ein neues Auto kaufen.'],
      correctAnswer: 'hätte, würde',
      explanation: 'Нереальное условие: "Wenn ich mehr Geld hätte (Konj. II от haben), würde ich (Konj. II с würde) ein neues Auto kaufen."',
    },
    {
      id: 'b1-konj2-einf-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (вежливая просьба): "Я бы хотел чашку чая."',
      prompt: 'Я бы хотел чашку чая.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich hätte gern eine Tasse Tee.',
      explanation: 'Вежливое желание выражается через "ich hätte gern...".',
    },
    {
      id: 'b1-konj2-einf-ex4',
      type: 'multiple_choice',
      question: 'Какая форма НЕ является формой Konjunktiv II?',
      options: ['wäre', 'hat', 'hätte', 'würde'],
      correctAnswer: 'hat',
      explanation: '"hat" - это форма Präsens Indikativ от глагола "haben". "wäre", "hätte", "würde" - формы Konjunktiv II.',
    },
    {
      id: 'b1-konj2-einf-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните совет: Du ___ mehr Sport treiben. Das ist gesund.',
      sentenceParts: ['Du ', ' mehr Sport treiben. Das ist gesund.'],
      correctAnswer: 'solltest',
      explanation: 'Для выражения совета используется "sollte" (Konj. II от sollen).',
    },
  ],
};
