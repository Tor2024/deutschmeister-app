
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonA1WFragen: Lesson = {
  id: 'a1-w-fragen',
  level: 'A1',
  topic: 'Вопросительные слова (W-Fragen)',
  theory: `
Вопросительные слова (W-Fragen) используются для того, чтобы задать специальные вопросы, на которые нельзя ответить просто "да" или "нет". Ответ на такой вопрос требует более подробной информации. Называются они так, потому что большинство из них в немецком языке начинаются на букву "W".

**Основные вопросительные слова (W-Fragen) для уровня A1:**

*   **Wer?** – Кто? (о людях)
    *   *Wer bist du?* (Кто ты?)
    *   *Wer kommt heute?* (Кто придет сегодня?)

*   **Was?** – Что? (о вещах, идеях, действиях)
    *   *Was ist das?* (Что это?)
    *   *Was machst du?* (Что ты делаешь?)

*   **Wo?** – Где? (о местоположении)
    *   *Wo wohnst du?* (Где ты живешь?)
    *   *Wo ist der Bahnhof?* (Где вокзал?)

*   **Wann?** – Когда? (о времени)
    *   *Wann beginnt der Film?* (Когда начинается фильм?)
    *   *Wann hast du Geburtstag?* (Когда у тебя день рождения?)

*   **Wie?** – Как? Какой?
    *   *Wie geht es dir?* (Как у тебя дела?)
    *   *Wie heißt du?* (Как тебя зовут?)
    *   *Wie ist das Wetter?* (Какая погода?)

*   **Warum?** – Почему?
    *   *Warum lernst du Deutsch?* (Почему ты учишь немецкий?)
    *   *Warum bist du müde?* (Почему ты уставший?)

*   **Wie viel?** – Сколько? (для неисчисляемых существительных или когда спрашиваем о цене)
    *   *Wie viel kostet das?* (Сколько это стоит?)
    *   *Wie viel Zeit haben wir?* (Сколько у нас времени?)

*   **Wie viele?** – Сколько? (для исчисляемых существительных во множественном числе)
    *   *Wie viele Bücher hast du?* (Сколько у тебя книг?)
    *   *Wie viele Kinder sind hier?* (Сколько здесь детей?)

*   **Woher?** – Откуда? (о происхождении, направлении от)
    *   *Woher kommst du?* (Откуда ты (родом)?)
    *   *Woher weißt du das?* (Откуда ты это знаешь?)

*   **Wohin?** – Куда? (о направлении к)
    *   *Wohin gehst du?* (Куда ты идешь?)
    *   *Wohin fahren wir im Sommer?* (Куда мы поедем летом?)

**Порядок слов в W-Frage:**
1.  **Вопросительное слово (W-Wort)**
2.  **Спрягаемый глагол (Verb)**
3.  **Подлежащее (Subjekt)**
4.  Остальные члены предложения ...?

*Пример: **Was (1)** **machst (2)** **du (3)** heute Abend?*

Запомните эти вопросительные слова, они помогут вам получать нужную информацию!
`,
  vocabulary: [
    { german: 'Wer?', russian: 'Кто?', example: 'Wer ist da?' },
    { german: 'Was?', russian: 'Что?', example: 'Was möchtest du essen?' },
    { german: 'Wo?', russian: 'Где?', example: 'Wo ist meine Tasche?' },
    { german: 'Wann?', russian: 'Когда?', example: 'Wann treffen wir uns?' },
    { german: 'Wie?', russian: 'Как? Какой?', example: 'Wie geht es Ihnen?' },
    { german: 'Warum?', russian: 'Почему?', example: 'Warum lachst du?' },
    { german: 'Wie viel?', russian: 'Сколько? (неисчисляемое)', example: 'Wie viel Geld hast du?' },
    { german: 'Wie viele?', russian: 'Сколько? (исчисляемое)', example: 'Wie viele Freunde hast du?' },
    { german: 'Woher?', russian: 'Откуда?', example: 'Woher kommt dieser Kaffee?' },
    { german: 'Wohin?', russian: 'Куда?', example: 'Wohin fährst du in den Ferien?' },
    { german: 'das Fragewort (-wörter)', russian: 'вопросительное слово' },
  ],
  readingText: `
Anna trifft ihren Freund Paul im Park.
Anna: Hallo Paul! Wie geht es dir?
Paul: Hallo Anna! Mir geht es gut, danke. Und dir? Was machst du hier?
Anna: Ich gehe spazieren. Das Wetter ist schön. Wo warst du?
Paul: Ich komme gerade von der Arbeit.
Anna: Wann hast du Feierabend?
Paul: Normalerweise um fünf. Warum fragst du?
Anna: Ich wollte fragen, wohin wir heute Abend gehen könnten. Vielleicht ins Kino?
Paul: Gute Idee! Welchen Film wollen wir sehen?
`,
  readingComprehensionExercises: [
    {
      id: 'a1-w-fragen-rq1',
      type: 'multiple_choice',
      question: 'Где Анна встретила Пауля?',
      options: ['В кино', 'На работе', 'В парке', 'Дома'],
      correctAnswer: 'В парке',
      explanation: 'В тексте сказано: "Anna trifft ihren Freund Paul im Park."',
    },
    {
      id: 'a1-w-fragen-rq2',
      type: 'multiple_choice',
      question: 'О чем Анна хотела спросить Пауля?',
      options: ['О его работе', 'О погоде', 'Куда они могут пойти вечером', 'Когда у него день рождения'],
      correctAnswer: 'Куда они могут пойти вечером',
      explanation: 'Анна говорит: "Ich wollte fragen, wohin wir heute Abend gehen könnten."',
    },
  ],
  exercises: [
    {
      id: 'a1-w-fragen-ex1',
      type: 'multiple_choice',
      question: 'Какое вопросительное слово используется, чтобы спросить о причине?',
      options: ['Wann?', 'Wo?', 'Warum?', 'Wer?'],
      correctAnswer: 'Warum?',
      explanation: '"Warum?" означает "Почему?".',
    },
    {
      id: 'a1-w-fragen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное вопросительное слово: "___ kostet dieses Brot?" - "Zwei Euro."',
      sentenceParts: ['', ' kostet dieses Brot? - Zwei Euro.'],
      correctAnswer: 'Wie viel',
      explanation: 'Для вопроса о цене используется "Wie viel?".',
    },
    {
      id: 'a1-w-fragen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Куда ты идешь?"',
      prompt: 'Куда ты идешь?',
      languageDirection: 'to_german',
      correctAnswer: 'Wohin gehst du?',
      explanation: '"Куда?" переводится как "Wohin?".',
    },
    {
      id: 'a1-w-fragen-ex4',
      type: 'writing_prompt',
      question: 'Составь 3 вопроса своему другу, используя разные вопросительные слова (Wer?, Was?, Wann?, Wo?, Wie?, Warum?, Woher?, Wohin?).',
      suggestedLength: '3 вопроса',
    },
  ],
};
