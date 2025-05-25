
import type { Lesson } from '@/types';

// --- Урок B2: Словообразование (Wortbildung) ---
export const lessonB2Wortbildung: Lesson = {
  id: 'b2-wortbildung',
  level: 'B2',
  topic: 'Словообразование (Wortbildung)',
  theory: `Словообразование (Wortbildung) – это процесс создания новых слов на основе существующих языковых единиц (корней, основ, аффиксов). Знание основных моделей словообразования значительно помогает расширять словарный запас и понимать структуру немецких слов.

**Основные способы словообразования в немецком языке:**

**1. Аффиксация (Ableitung / Derivation)**
   Образование новых слов путем добавления аффиксов (префиксов или суффиксов) к основе.

   *   **Префиксация (Präfigierung):** Добавление префикса (Vorsilbe) в начале слова.
       *   **Для глаголов:**
           *   **Отделяемые префиксы** (изменяют значение, ударение на префиксе): \`an-\` (anfangen), \`auf-\` (aufstehen), \`aus-\` (ausgehen), \`ein-\` (einkaufen), \`mit-\` (mitkommen), \`nach-\` (nachdenken), \`vor-\` (vorlesen), \`zu-\` (zumachen), \`ab-\` (abfahren), \`zurück-\` (zurückkommen).
           *   **Неотделяемые префиксы** (изменяют значение, безударные): \`be-\` (bekommen), \`ge-\` (gefallen), \`er-\` (erzählen), \`ver-\` (verstehen), \`zer-\` (zerstören), \`ent-\` (entdecken), \`emp-\` (empfehlen), \`miss-\` (missverstehen).
       *   **Для существительных:**
           *   \`Un-\` (отрицание): das Glück → das **Un**glück (несчастье)
           *   \`Miss-\` (неправильность, ошибка): der Erfolg → der **Miss**erfolg (неудача)
           *   \`Ur-\` (первоначальность, древность): der Wald → der **Ur**wald (первобытный лес)
           *   \`Erz-\` (высшая степень, архи-): der Bischof → der **Erz**bischof (архиепископ)
       *   **Для прилагательных:**
           *   \`un-\` (отрицание): glücklich → **un**glücklich (несчастный)
           *   \`miss-\`: missverständlich (неправильно понятый)

   *   **Суффиксация (Suffigierung):** Добавление суффикса (Nachsilbe) в конце слова. Суффикс часто определяет род существительного.
       *   **Образование существительных:**
           *   \`-ung\` (ж.р.): hoffen → die Hoffn**ung** (надежда), bilden → die Bild**ung** (образование)
           *   \`-heit\` (ж.р.): frei → die Frei**heit** (свобода), krank → die Krank**heit** (болезнь)
           *   \`-keit\` (ж.р.): möglich → die Möglich**keit** (возможность), ehrlich → die Ehrlich**keit** (честность)
           *   \`-schaft\` (ж.р.): Freund → die Freund**schaft** (дружба), Wissen → die Wissen**schaft** (наука)
           *   \`-tum\` (ср.р. или м.р.): reich → der Reich**tum** (богатство), eigen → das Eigen**tum** (собственность)
           *   \`-er\` (м.р., часто деятель): lehren → der Lehr**er** (учитель), backen → der Bäck**er** (пекарь)
           *   \`-in\` (ж.р., деятель женского пола): der Lehrer → die Lehrer**in** (учительница)
           *   \`-ler\` (м.р., деятель): Sport → der Sport**ler** (спортсмен)
           *   \`-ist\` (м.р., деятель, сторонник): Journal → der Journal**ist** (журналист)
           *   \`-ismus\` (м.р., учение, направление): real → der Real**ismus** (реализм)
           *   \`-chen\`, \`-lein\` (ср.р., уменьшительно-ласкательные): das Haus → das Häus**chen**, der Tisch → das Tisch**lein**
       *   **Образование прилагательных:**
           *   \`-ig\`: die Sonne → sonn**ig** (солнечный), der Mut → mut**ig** (смелый)
           *   \`-lich\`: der Freund → freund**lich** (дружелюбный), das Herz → herz**lich** (сердечный)
           *   \`-isch\`: die Politik → polit**isch** (политический), die Magie → mag**isch** (магический)
           *   \`-bar\` (возможность): essen → ess**bar** (съедобный), lösen → lös**bar** (решаемый)
           *   \`-sam\`: die Arbeit → arbeit**sam** (трудолюбивый), die Furcht → furcht**sam** (боязливый)
           *   \`-haft\`: das Märchen → märchen**haft** (сказочный), das Rätsel → rätsel**haft** (загадочный)
           *   \`-los\` (отсутствие чего-л.): die Hoffnung → hoffnungs**los** (безнадежный)
           *   \`-voll\` (наличие чего-л.): die Hoffnung → hoffnungs**voll** (полный надежд)
       *   **Образование глаголов (реже, часто от заимствований):**
           *   \`-ieren\`: das Telefon → telefon**ieren** (звонить по телефону)

**2. Словосложение (Komposition / Zusammensetzung)**
   Образование нового слова путем соединения двух или более самостоятельных слов (основ).
   -   Основное правило: **род сложного существительного определяется родом последнего (основного) слова (Grundwort)**. Первое слово (Bestimmungswort) уточняет или конкретизирует значение основного.
   -   **Типы сложных слов:**
       *   Существительное + Существительное: \`der Tisch\` + \`das Bein\` → \`das Tischbein\` (ножка стола)
           \`die Sonne\` + \`der Schirm\` → \`der Sonnenschirm\` (зонт от солнца)
       *   Прилагательное + Существительное: \`hoch\` + \`das Haus\` → \`das Hochhaus\` (высотное здание)
           \`klein\` + \`der Garten\` → \`der Kleingarten\` (небольшой сад)
       *   Основа глагола + Существительное: \`schreiben\` (основа: schreib) + \`der Tisch\` → \`der Schreibtisch\` (письменный стол)
           \`wohnen\` (основа: wohn) + \`das Zimmer\` → \`das Wohnzimmer\` (гостиная)
       *   Наречие/Предлог + Существительное: \`vor\` + \`der Teil\` → \`der Vorteil\` (преимущество)
           \`neben\` + \`die Wirkung\` → \`die Nebenwirkung\` (побочный эффект)
   -   **Соединительные элементы (Fugenlaute):** Иногда между компонентами сложного слова появляются соединительные звуки/буквы для удобства произношения:
       *   \`-s-\`: die Arbeit + das Zimmer → das Arbeit**s**zimmer (кабинет)
       *   \`-es-\`: das Jahr + die Zeit → die Jahr**es**zeit (время года)
       *   \`-er-\`: das Kind + das Buch → das Kind**er**buch (детская книга)
       *   \`-en-\`: die Straße + die Bahn → die Straß**en**bahn (трамвай)
       *   \`-n-\`: die Dame + der Hut → der Dame**n**hut (дамская шляпа)

**3. Конверсия (Konversion)**
   Переход слова из одной части речи в другую без изменения его формы (без добавления аффиксов).
   -   Субстантивация инфинитивов (всегда среднего рода):
       \`laufen\` (бегать) → \`das Laufen\` (бег)
       \`essen\` (есть) → \`das Essen\` (еда)
   -   Субстантивация прилагательных и причастий:
       \`gut\` (хороший) → \`das Gute\` (хорошее, добро)
       \`bekannt\` (известный) → \`der Bekannte\` (знакомый), \`die Bekannte\` (знакомая)
       \`krank\` (больной) → \`der Kranke\` (больной), \`die Kranke\` (больная)
   -   Прилагательные от существительных (редко, часто в устойчивых выражениях):
       \`der Ernst\` (серьезность) → \`ernst\` (серьезный)

Знание принципов словообразования помогает не только понимать новые слова, но и активно расширять свой лексикон.`,
  vocabulary: [
    { german: 'die Wortbildung', russian: 'словообразование' },
    { german: 'die Ableitung (-en) / die Derivation', russian: 'аффиксация, образование производных слов' },
    { german: 'die Zusammensetzung (-en) / die Komposition', russian: 'словосложение, образование сложных слов' },
    { german: 'die Konversion', russian: 'конверсия (переход слова в другую часть речи)' },
    { german: 'das Präfix (-e) / die Vorsilbe (-n)', russian: 'префикс, приставка' },
    { german: 'das Suffix (-e) / die Nachsilbe (-n)', russian: 'суффикс' },
    { german: 'trennbares Präfix', russian: 'отделяемый префикс', example: 'auf- in aufstehen' },
    { german: 'untrennbares Präfix', russian: 'неотделяемый префикс', example: 'ver- in verstehen' },
    { german: 'das Grundwort (-wörter)', russian: 'основное слово (в сложном слове, определяет род)', example: 'Im Wort "Haustür" ist "Tür" das Grundwort.' },
    { german: 'das Bestimmungswort (-wörter)', russian: 'определяющее слово (в сложном слове)', example: 'Im Wort "Haustür" ist "Haus" das Bestimmungswort.' },
    { german: 'der Fugenlaut (-e)', russian: 'соединительный звук/элемент', example: 'das "s" in "Arbeitsplatz"' },
    { german: '-ung (Suffix)', russian: 'суффикс существительных (ж.р., процесс/результат)', example: 'die Prüfung, die Lösung' },
    { german: '-heit (Suffix)', russian: 'суффикс существительных (ж.р., состояние/качество)', example: 'die Freiheit, die Schönheit' },
    { german: '-keit (Suffix)', russian: 'суффикс существительных (ж.р., свойство/состояние)', example: 'die Möglichkeit, die Schnelligkeit' },
    { german: '-schaft (Suffix)', russian: 'суффикс существительных (ж.р., общность/состояние)', example: 'die Freundschaft, die Mannschaft' },
    { german: '-er (Suffix)', russian: 'суффикс существительных (м.р., деятель)', example: 'der Fahrer, der Bäcker' },
    { german: '-bar (Suffix)', russian: 'суффикс прилагательных (возможность)', example: 'lesbar, trinkbar' },
    { german: '-lich (Suffix)', russian: 'суффикс прилагательных', example: 'freundlich, täglich' },
    { german: '-ig (Suffix)', russian: 'суффикс прилагательных', example: 'windig, fleißig' },
    { german: 'die Substantivierung', russian: 'субстантивация (превращение в существительное)' },
  ],
  exercises: [
    {
      id: 'b2-wortbildung-ex1',
      type: 'multiple_choice',
      question: 'Какой суффикс обычно образует существительные женского рода, обозначающие процесс или результат?',
      options: ['-er', '-tum', '-ung', '-chen'],
      correctAnswer: '-ung',
      explanation: 'Суффикс "-ung" (например, die Prüfung - экзамен, die Lösung - решение) типичен для образования существительных женского рода со значением процесса или результата.',
    },
    {
      id: 'b2-wortbildung-ex2',
      type: 'fill_in_the_blank',
      question: 'Образуйте сложное существительное: die Kinder + der Garten = ___',
      sentenceParts: ['die Kinder + der Garten = ', ''],
      correctAnswer: 'der Kindergarten',
      explanation: 'В сложном слове "Kindergarten" Grundwort (основное слово) - "Garten" (der), оно определяет род. Здесь есть соединительный звук.',
    },
    {
      id: 'b2-wortbildung-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя производное слово: "безнадежная ситуация".',
      prompt: 'безнадежная ситуация',
      languageDirection: 'to_german',
      correctAnswer: 'eine hoffnungslose Situation',
      explanation: 'Прилагательное "hoffnungslos" (безнадежный) образуется от существительного "die Hoffnung" (надежда) с помощью суффикса "-los".',
    },
    {
      id: 'b2-wortbildung-ex4',
      type: 'multiple_choice',
      question: 'Какой способ словообразования использован в слове "das Schreiben" (письмо, процесс письма)?',
      options: ['Суффиксация', 'Префиксация', 'Словосложение', 'Конверсия (субстантивация инфинитива)'],
      correctAnswer: 'Конверсия (субстантивация инфинитива)',
      explanation: 'Слово "das Schreiben" образовано от инфинитива глагола "schreiben" путем конверсии (субстантивации), без добавления аффиксов.',
    },
    {
      id: 'b2-wortbildung-ex5',
      type: 'fill_in_the_blank',
      question: 'Определите тип префикса в глаголе "verstehen" (понимать) и его основную характеристику.',
      sentenceParts: ['Префикс "ver-" в глаголе "verstehen" является ', ' и обычно ', ' значение глагола.'], // неотделяемым, изменяет
      correctAnswer: 'неотделяемым, изменяет',
      explanation: 'Префикс "ver-" является неотделяемым и часто кардинально изменяет значение исходного глагола или придает ему специфический оттенок.',
    },
    {
      id: 'b2-wortbildung-ex6',
      type: 'multiple_choice',
      question: 'Какое слово является основным (Grundwort) и определяет род в сложном существительном "die Haustür"?',
      options: ['Haus', 'Tür', 'Hau', 'keines von beiden'],
      correctAnswer: 'Tür',
      explanation: 'В немецких сложных существительных последнее слово (Grundwort) определяет род всего слова. "Die Tür" - женского рода, поэтому "die Haustür" тоже женского рода.',
    },
  ],
};
