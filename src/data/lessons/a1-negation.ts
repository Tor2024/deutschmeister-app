
import type { Lesson } from '@/types';

// --- Урок A1: Отрицание (nicht и kein) - Основы ---
export const lessonA1Negation: Lesson = {
  id: 'a1-negation',
  level: 'A1',
  topic: 'Отрицание (nicht и kein) - Основы',
  theory: `В немецком языке для отрицания используются в основном два слова: **kein** и **nicht**.

**1. Отрицание с \`kein\`**

\`Kein\` используется для отрицания существительных. Используйте \`kein\`, если в утвердительном предложении перед существительным стоял бы неопределенный артикль (\`ein\`, \`eine\`) или артикля не было бы совсем (например, при указании на абстрактные понятия без артикля или во множественном числе).

Можно представить, что \`kein\` означает "не один" или "никакой".

*   Перед существительным, которое в утверждении имело бы \`ein\` (м.р.) или \`ein\` (ср.р.):
    *   *Das ist **ein** Stift.* (Это (одна) ручка.) → *Das ist **kein** Stift.* (Это не ручка / никакая не ручка.)
    *   *Ich habe **ein** Auto.* (У меня есть (одна) машина.) → *Ich habe **kein** Auto.* (У меня нет машины.)
*   Перед существительным, которое в утверждении имело бы \`eine\` (ж.р.):
    *   *Das ist **eine** Lampe.* (Это (одна) лампа.) → *Das ist **keine** Lampe.* (Это не лампа.)
    *   *Sie hat **eine** Frage.* (У нее есть (один) вопрос.) → *Sie hat **keine** Frage.* (У нее нет вопроса.)
*   Перед существительными во множественном числе (где нет неопределенного артикля):
    *   *Ich sehe Bücher.* (Я вижу книги.) → *Ich sehe **keine** Bücher.* (Я не вижу книг / никаких книг.)
*   Перед неисчисляемыми существительными, которые часто употребляются без артикля:
    *   *Ich habe Zeit.* (У меня есть время.) → *Ich habe **keine** Zeit.* (У меня нет времени.)
    *   *Er hat Geld.* (У него есть деньги.) → *Er hat **kein** Geld.* (У него нет денег.)

**Формы \`kein\` (похожи на формы \`ein\`):**
В именительном падеже (Nominativ):
-   **kein** (для мужского и среднего рода): kein Mann, kein Kind
-   **keine** (для женского рода и множественного числа): keine Frau, keine Kinder

В винительном падеже (Akkusativ), который мы уже немного затрагивали:
-   **keinen** (для мужского рода): Ich sehe keinen Mann.
-   **keine** (для женского рода и множественного числа): Ich sehe keine Frau. Ich sehe keine Kinder.
-   **kein** (для среднего рода): Ich sehe kein Kind.

**2. Отрицание с \`nicht\`**

\`Nicht\` используется для отрицания всего остального:
-   **Глаголов** (действий):
    *   *Ich schlafe.* (Я сплю.) → *Ich schlafe **nicht**.* (Я не сплю.)
    *   *Wir kommen heute.* (Мы придем сегодня.) → *Wir kommen heute **nicht**.* (Мы не придем сегодня.)
-   **Прилагательных** (качеств):
    *   *Das Auto ist neu.* (Машина новая.) → *Das Auto ist **nicht** neu.* (Машина не новая.)
-   **Наречий** (как совершается действие):
    *   *Er spricht schnell.* (Он говорит быстро.) → *Er spricht **nicht** schnell.* (Он говорит не быстро.)
-   **Существительных с определенным артиклем** (\`der\`, \`die\`, \`das\`) или **притяжательным местоимением** (\`mein\`, \`dein\` и т.д.):
    *   *Das ist der Lehrer.* (Это тот самый учитель.) → *Das ist **nicht** der Lehrer.* (Это не тот учитель.)
    *   *Das ist mein Buch.* (Это моя книга.) → *Das ist **nicht** mein Buch.* (Это не моя книга.)

**Место \`nicht\` в предложении:**
-   Часто \`nicht\` стоит **в конце предложения**, если отрицается глагол и нет других частей, которые должны быть в конце.
    *   *Ich verstehe das **nicht**.* (Я этого не понимаю.)
-   Если отрицается не глагол, а какая-то другая часть предложения (например, прилагательное или наречие), то \`nicht\` ставится **перед этой частью**.
    *   *Der Film ist **nicht** interessant.* (Фильм не интересный.)
    *   *Sie fährt **nicht** oft Auto.* (Она не часто ездит на машине.)

**Простое правило (для начала):**
Если вы можете заменить отрицаемое слово на "один/одна/одно" (ein/eine) или если это существительное во множественном числе без артикля, используйте **kein/keine**. В большинстве других случаев для отрицания используется **nicht**.
`,
  vocabulary: [
    { german: 'nicht', russian: 'не (общая отрицательная частица)' },
    { german: 'kein', russian: 'не, никакой (для м.р. и ср.р. в Nom.; для ср.р. в Akk.)', example: 'Das ist kein Problem.' },
    { german: 'keine', russian: 'не, никакая, никакие (для ж.р. в Nom./Akk.; для мн.ч. в Nom./Akk.)', example: 'Ich habe keine Ahnung.' },
    { german: 'keinen', russian: 'не, никакого (для м.р. в Akk.)', example: 'Er hat keinen Hund.' },
    { german: 'die Negation', russian: 'отрицание' },
    { german: 'das Nomen (Substantiv)', russian: 'существительное' },
    { german: 'das Verb', russian: 'глагол' },
    { german: 'das Adjektiv', russian: 'прилагательное' },
    { german: 'das Adverb', russian: 'наречие' },
  ],
  exercises: [
    {
      id: 'a1-negation-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильное отрицание: Das ist ___ Haus.',
      options: ['nicht', 'kein', 'keine', 'keinen'],
      correctAnswer: 'kein',
      explanation: 'Существительное "Haus" (ср.р.) в утверждении было бы "ein Haus". Отрицается с помощью "kein".',
    },
    {
      id: 'a1-negation-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте \`nicht\` или \`kein\`: Ich habe ___ Zeit.',
      sentenceParts: ['Ich habe ', ' Zeit.'],
      correctAnswer: 'keine',
      explanation: 'Существительное "Zeit" (ж.р., здесь без артикля) отрицается с помощью "keine".',
    },
    {
      id: 'a1-negation-ex3',
      type: 'multiple_choice',
      question: 'Как правильно сказать: "Я не работаю"?',
      options: ['Ich kein arbeite.', 'Ich arbeite kein.', 'Ich arbeite nicht.'],
      correctAnswer: 'Ich arbeite nicht.',
      explanation: 'Глагол "arbeite" отрицается с помощью "nicht", которое ставится после глагола.',
    },
    {
      id: 'a1-negation-ex4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Der Kaffee ist ___ heiß."',
      sentenceParts: ['Der Kaffee ist ', ' heiß.'],
      correctAnswer: 'nicht',
      explanation: 'Прилагательное "heiß" (горячий) отрицается с помощью "nicht".',
    },
    {
      id: 'a1-negation-ex5',
      type: 'multiple_choice',
      question: 'Выберите правильное отрицание: "Ich sehe ___ Mann da drüben."',
      options: ['nicht', 'kein', 'keinen', 'keine'],
      correctAnswer: 'keinen',
      explanation: 'Существительное "Mann" (м.р.) является прямым дополнением в винительном падеже (Akkusativ). В утверждении было бы "einen Mann". Отрицается с "keinen".',
    },
  ],
};
