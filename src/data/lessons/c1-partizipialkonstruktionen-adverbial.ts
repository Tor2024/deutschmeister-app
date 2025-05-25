
import type { Lesson } from '@/types';

// --- Урок C1: Причастные обороты в роли обстоятельств (Partizipialkonstruktionen als Adverbialbestimmung) ---
export const lessonC1PartizipialkonstruktionenAdverbial: Lesson = {
  id: 'c1-partizipialkonstruktionen-adverbial',
  level: 'C1',
  topic: 'Причастные обороты в роли обстоятельств',
  theory: `Причастные обороты могут выполнять в предложении не только роль определения (Partizipialattribut), но и роль различных обстоятельств (Adverbialbestimmung). В этой функции они служат для более сжатого и стилистически изысканного выражения временных, причинных, модальных, уступительных или условных отношений, заменяя соответствующие придаточные предложения.

**1. Общий принцип:**
   Причастный оборот в роли обстоятельства обычно относится к подлежащему главного предложения. Он часто стоит в начале предложения и отделяется запятой, или внутри предложения, также обособляясь запятыми.

**2. Временное значение (Temporal):**
   *   **Partizip I (одновременность):** Заменяет придаточные с \`während\`, \`als\`, \`wenn\`.
       *   *Die Straße entlang **gehend**, sang er ein Lied.* (Идя по улице, он пел песню.)
           (≈ *Während er die Straße entlang ging, sang er ein Lied.*)
       *   **Am Fenster stehend**, beobachtete sie die spielenden Kinder.* (Стоя у окна, она наблюдала за играющими детьми.)
           (≈ *Während sie am Fenster stand, beobachtete sie...*)

   *   **Partizip II (предшествование, часто в конструкциях, близких к Partizip Perfekt Aktiv или пассивных):** Заменяет придаточные с \`nachdem\`.
       *   *Die Prüfung **bestanden habend** (или чаще стилистически лучше: Nach bestandener Prüfung), feierte er mit Freunden.* (Сдав экзамен, он праздновал с друзьями.)
           (≈ *Nachdem er die Prüfung bestanden hatte, feierte er...*)
       *   *Von allen **verlassen**, fühlte er sich einsam.* (Покинутый всеми, он чувствовал себя одиноким. – здесь пассивное значение Partizip II)
           (≈ *Nachdem er von allen verlassen worden war, fühlte er sich...*)

**3. Причинное значение (Kausal):**
   Заменяет придаточные с \`weil\` или \`da\`.
   *   *Von der Nachricht **überrascht**, konnte er kein Wort sagen.* (Удивленный новостью, он не мог сказать ни слова.)
       (≈ *Weil er von der Nachricht überrascht war, konnte er...*)
   *   *Ihre Fehler **einsehend**, entschuldigte sie sich.* (Понимая свои ошибки, она извинилась.)
       (≈ *Weil sie ihre Fehler einsah, entschuldigte sie sich.*)

**4. Модальное значение (Modal) (образа действия):**
   Заменяет придаточные с \`indem\` или описывает сопутствующее действие.
   *   **Lächelnd** reichte sie ihm die Hand.* (Улыбаясь, она протянула ему руку.)
       (≈ *Indem sie lächelte, reichte sie ihm die Hand.*)
   *   **Schweigend** betrachteten sie den Sonnenuntergang.* (Молча они смотрели на закат.)

**5. Уступительное значение (Konzessiv) (реже, часто с Partizip II и дополнительными словами):**
   Может заменять придаточные с \`obwohl\`, но чаще используются другие конструкции (например, предложные).
   *   *Trotz aller Anstrengungen **gescheitert**, gab er nicht auf.* (Потерпев неудачу несмотря на все усилия, он не сдавался.)
       (Это более сложная конструкция, где Partizip II \`gescheitert\` относится к подразумеваемому результату).
       Более типичная замена для \`obwohl\`: *Obwohl er müde war, arbeitete er weiter.* → *Trotz seiner Müdigkeit arbeitete er weiter.* (предложная группа)

**6. Условное значение (Konditional) (реже):**
   Может заменять придаточные с \`wenn\`.
   *   **Genauer betrachtet**, ist das Problem nicht so einfach.* (Если рассмотреть точнее / При более точном рассмотрении, проблема не так проста.)
       (≈ *Wenn man es genauer betrachtet, ist das Problem...*)
   *   **Gut vorbereitet**, hätte er die Prüfung sicher bestanden.* (Будучи хорошо подготовленным / Если бы он был хорошо подготовлен, он бы точно сдал экзамен.)

**Важно:**
   - Причастие в таких конструкциях обычно не склоняется, если оно не стоит непосредственно перед существительным как атрибут.
   - Субъект действия, выраженного причастием, должен быть ясен из контекста (чаще всего это подлежащее главного предложения).

Использование причастных оборотов в роли обстоятельств – признак высокого стиля и часто встречается в письменной речи, особенно в литературе и публицистике.`,
  vocabulary: [
    { german: 'die Partizipialkonstruktion (-en)', russian: 'причастный оборот' },
    { german: 'die Adverbialbestimmung (-en)', russian: 'обстоятельство (член предложения)' },
    { german: 'temporal', russian: 'временной' },
    { german: 'kausal', russian: 'причинный' },
    { german: 'modal', russian: 'модальный (образа действия)' },
    { german: 'konzessiv', russian: 'уступительный' },
    { german: 'konditional', russian: 'условный' },
    { german: 'gehend', russian: 'идя (Part. I)', example: 'Die Straße entlang gehend, pfiff er ein Lied.' },
    { german: 'gesehen habend', russian: 'увидев (Part. Perfekt Aktiv, условно)', example: 'Den Film gesehen habend, diskutierten sie darüber.' },
    { german: 'überrascht', russian: 'удивленный (Part. II)', example: 'Von dem Ergebnis überrascht, gratulierte er.' },
    { german: 'lächelnd', russian: 'улыбаясь (Part. I)', example: 'Lächelnd nahm sie das Geschenk an.' },
    { german: 'schweigend', russian: 'молча (Part. I)', example: 'Schweigend hörten alle zu.' },
  ],
  exercises: [
    {
      id: 'c1-partizip-adv-b-ex1',
      type: 'multiple_choice',
      question: 'Какое значение имеет причастный оборот в предложении: "Laut singend, betrat er den Raum."?',
      options: ['Kausal (причинное)', 'Temporal (временное - одновременность)', 'Modal (образа действия)', 'Konzessiv (уступительное)'],
      correctAnswer: 'Modal (образа действия)', // Также можно интерпретировать как темпоральное (одновременность)
      explanation: 'Оборот "Laut singend" (громко поя) описывает, как он вошел в комнату (модальное значение) или что он делал одновременно (временное). Чаще всего интерпретируется как модальное.',
    },
    {
      id: 'c1-partizip-adv-b-ex2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте придаточное в причастный оборот: "Nachdem sie die Prüfung bestanden hatte, war sie sehr erleichtert."',
      sentenceParts: ['Die Prüfung ', ', war sie sehr erleichtert.'],
      correctAnswer: 'bestanden habend',
      explanation: 'Придаточное времени с "nachdem" (предшествование) можно заменить конструкцией с Partizip Perfekt Aktiv (Partizip II + habend/seiend). "bestanden habend".',
    },
    {
      id: 'c1-partizip-adv-b-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя причастный оборот: "Уставший от работы, он пошел спать рано."',
      prompt: 'Уставший от работы, он пошел спать рано.',
      languageDirection: 'to_german',
      correctAnswer: 'Von der Arbeit ermüdet, ging er früh schlafen.',
      explanation: 'Причинное значение: "Von der Arbeit ermüdet" (уставший от работы). "Ermüdet" - Partizip II.',
    },
    {
      id: 'c1-partizip-adv-b-ex4',
      type: 'multiple_choice',
      question: 'Выберите наиболее подходящую трансформацию для: "Weil er die Gefahr erkannte, warnte er seine Freunde."',
      options: [
        'Die Gefahr erkennend, warnte er seine Freunde.',
        'Die Gefahr erkannt, warnte er seine Freunde.',
        'Erkennend die Gefahr, warnte er seine Freunde.'
      ],
      correctAnswer: 'Die Gefahr erkennend, warnte er seine Freunde.',
      explanation: 'Причинное придаточное с "weil" и активным глаголом в настоящем времени по отношению к моменту "осознания" заменяется на Partizip I "erkennend".',
    },
    {
      id: 'c1-partizip-adv-b-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "___ (pfeifen), ging der Junge fröhlich nach Hause."',
      sentenceParts: ['', ', ging der Junge fröhlich nach Hause.'],
      correctAnswer: 'Pfeifend',
      explanation: 'Partizip I от "pfeifen" (свистеть) - "pfeifend" (свистя) для описания одновременного действия.',
    },
  ],
};
