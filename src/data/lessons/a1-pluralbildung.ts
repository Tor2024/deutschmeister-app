
import type { Lesson } from '@/types';

// --- Урок A1: Образование множественного числа существительных (основы) ---
export const lessonA1Pluralbildung: Lesson = {
  id: 'a1-pluralbildung',
  level: 'A1',
  topic: 'Образование множественного числа существительных (основы)',
  theory: `
В немецком языке существительные изменяются по числам: единственное (Singular) и множественное (Plural). Образование множественного числа – одна из тем, требующих запоминания, так как существует несколько моделей и нет единого простого правила для всех слов.

**Важно:**
1.  Форму множественного числа каждого нового существительного лучше всего **заучивать сразу** вместе с его артиклем и значением.
2.  Определенный артикль для **всех** существительных во множественном числе всегда **die**.
    *   *der Tisch (стол) → **die** Tische (столы)*
    *   *die Frau (женщина) → **die** Frauen (женщины)*
    *   *das Kind (ребенок) → **die** Kinder (дети)*
3.  Неопределенный артикль (\`ein\`, \`eine\`) во множественном числе **отсутствует**. Вместо него можно использовать слово \`viele\` (много), числительное или просто существительное без артикля.
    *   *ein Apfel (одно яблоко) → Äpfel (яблоки) / viele Äpfel (много яблок)*

**Основные способы образования множественного числа (для уровня A1):**

*   **Окончание \`-e\`:**
    Многие существительные мужского и среднего рода. Иногда с изменением корневой гласной (умлаут: a→ä, o→ö, u→ü).
    *   *der Tag (день) → die Tag**e***
    *   *der Stuhl (стул) → die St**ü**hl**e*** (с умлаутом)
    *   *das Heft (тетрадь) → die Heft**e***
    *   *der Hund (собака) → die Hund**e***

*   **Окончание \`-(e)n\`:**
    Большинство существительных женского рода. Многие существительные мужского рода, оканчивающиеся на -e.
    *   *die Frau (женщина) → die Frau**en***
    *   *die Tür (дверь) → die Tür**en***
    *   *die Lampe (лампа) → die Lampe**n***
    *   *der Junge (мальчик) → die Junge**n***

*   **Окончание \`-er\`:**
    Многие существительные среднего рода и некоторые мужского рода. Почти всегда с умлаутом, если он возможен.
    *   *das Kind (ребенок) → die Kind**er***
    *   *das Buch (книга) → die B**ü**ch**er*** (с умлаутом)
    *   *der Mann (мужчина) → die M**ä**nn**er*** (с умлаутом)

*   **Окончание \`-s\`:**
    Часто у заимствованных слов, особенно из английского и французского, или у слов, оканчивающихся на гласные -a, -i, -o, -u, -y.
    *   *das Auto (машина) → die Auto**s***
    *   *das Hotel (отель) → die Hotel**s***
    *   *die Oma (бабушка) → die Oma**s***
    *   *das Hobby (хобби) → die Hobby**s***

*   **Без окончания (Нулевое окончание):**
    Существительные мужского и среднего рода, оканчивающиеся в единственном числе на **-er, -el, -en**.
    -   Мужской род часто получает умлаут.
        *   *der Lehrer (учитель) → die Lehrer*
        *   *der Apfel (яблоко) → die **Ä**pfel* (с умлаутом)
    -   Средний род обычно умлаут не получает.
        *   *das Mädchen (девочка) → die Mädchen*
        *   *das Zimmer (комната) → die Zimmer*

Старайтесь запоминать форму множественного числа для каждого нового слова!
`,
  vocabulary: [
    { german: 'der Singular', russian: 'единственное число' },
    { german: 'der Plural', russian: 'множественное число' },
    { german: 'der Tag, die Tage', russian: 'день, дни' },
    { german: 'die Frau, die Frauen', russian: 'женщина, женщины' },
    { german: 'das Kind, die Kinder', russian: 'ребенок, дети' },
    { german: 'das Auto, die Autos', russian: 'машина, машины' },
    { german: 'der Lehrer, die Lehrer', russian: 'учитель, учителя' },
    { german: 'das Buch, die Bücher', russian: 'книга, книги' },
    { german: 'der Apfel, die Äpfel', russian: 'яблоко, яблоки' },
    { german: 'die Lampe, die Lampen', russian: 'лампа, лампы' },
    { german: 'der Stuhl, die Stühle', russian: 'стул, стулья' },
    { german: 'das Mädchen, die Mädchen', russian: 'девочка, девочки' },
  ],
  exercises: [
    {
      id: 'a1-pluralbildung-ex1',
      type: 'multiple_choice',
      question: 'Какое множественное число у слова "das Auto"?',
      options: ['die Autoen', 'die Autoe', 'die Autos', 'die Auter'],
      correctAnswer: 'die Autos',
      explanation: 'Слова, заимствованные или оканчивающиеся на -o, часто образуют множественное число с окончанием -s.',
    },
    {
      id: 'a1-pluralbildung-ex2',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число: der Tisch → die ___',
      sentenceParts: ['der Tisch → die ', ''],
      correctAnswer: 'Tische',
      explanation: 'Многие существительные мужского рода образуют множественное число с окончанием -e: die Tische.',
    },
    {
      id: 'a1-pluralbildung-ex3',
      type: 'multiple_choice',
      question: 'Как будет "ребенок" (das Kind) во множественном числе?',
      options: ['die Kinde', 'die Kinden', 'die Kinder', 'die Kinds'],
      correctAnswer: 'die Kinder',
      explanation: 'Существительные среднего рода часто образуют множественное число с окончанием -er: die Kinder.',
    },
    {
      id: 'a1-pluralbildung-ex4',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число: die Blume (цветок) → die ___',
      sentenceParts: ['die Blume → die ', ''],
      correctAnswer: 'Blumen',
      explanation: 'Многие существительные женского рода, оканчивающиеся на -e, образуют множественное число с окончанием -n: die Blumen.',
    },
  ],
};
