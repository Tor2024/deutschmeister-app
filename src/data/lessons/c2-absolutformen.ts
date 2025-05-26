
import type { Lesson } from '@/types';

// --- Урок C2: Абсолютные конструкции (Absolutformen) ---
export const lessonC2Absolutformen: Lesson = {
  id: 'c2-absolutformen',
  level: 'C2',
  topic: 'Абсолютные конструкции (Absolutformen)',
  theory: `
Абсолютные конструкции (Absolutformen) в немецком языке – это грамматические обороты, которые синтаксически не связаны с главным предложением (т.е. не являются его членом предложения и не вводятся союзами), но семантически дополняют его, выражая различные обстоятельственные значения (времени, причины, уступки, образа действия, сопутствующего обстоятельства). Они характерны для письменной, особенно литературной и официальной речи, и служат для уплотнения и стилистического обогащения текста.

Чаще всего абсолютные конструкции строятся на основе:
1.  **Причастий (Partizip I или Partizip II):**
    *   Существительное или местоимение в определенном падеже (часто Akkusativ или Nominativ) + Partizip.
    *   *Пример с Akkusativ Absolutus (сопутствующее обстоятельство):*
        ***Den Kopf gesenkt**, stand er vor dem Richter.* (Опустив голову (букв.: голову опущенной), он стоял перед судьей.)
        ***Die Augen geschlossen**, lauschte sie der Musik.* (Закрыв глаза (глаза закрытыми), она слушала музыку.)
    *   *Пример с Nominativ Absolutus (часто для описания состояния):*
        ***Die Sonne scheinend**, machten wir einen Ausflug.* (Солнце светило (букв.: солнце светящее), мы совершили поездку.) (Более естественно: *Als die Sonne schien...* или *Scheinend die Sonne...* - но это уже Partizipialsatz)

2.  **Существительных с предлогами или без них, выражающих сопутствующее обстоятельство:**
    *   *Пример с Akkusativ:*
        ***Den Hut in der Hand**, betrat er das Zimmer.* (Шляпу в руке, он вошел в комнату.)
    *   *Пример с Nominativ (реже, часто для указания на состояние):*
        ***Ein Lächeln auf den Lippen**, erzählte sie die Geschichte.* (Улыбка на губах, она рассказала историю.)

3.  **Genitiv Absolutus (Абсолютный родительный падеж):**
    Выражает состояние или обстоятельство, часто с оттенком пассивности или результата. Существительное в Genitiv + Partizip II (иногда Partizip I).
    *   ***Gesenkten Hauptes** ging er davon.* (С опущенной головой он ушел оттуда.) (Hauptes - Genitiv от das Haupt)
    *   ***Unverrichteter Dinge** mussten sie zurückkehren.* (Ничего не добившись / Не солоно хлебавши, они должны были вернуться.) (Dinge - Genitiv Plural)

**Функции абсолютных конструкций:**
-   **Сжатие информации:** Заменяют придаточные предложения.
-   **Стилистическое средство:** Придают речи официальность, книжность, образность.
-   **Выражение обстоятельств:** времени, причины, образа действия, сопутствующих обстоятельств.

**Важно:**
-   Субъект абсолютной конструкции обычно **не совпадает** с подлежащим главного предложения, либо логический субъект подразумевается из контекста.
-   Эти конструкции требуют хорошего чувства языка и чаще встречаются в письменной речи.

Изучение абсолютных конструкций помогает глубже понять структуру немецкого предложения и расширяет стилистические возможности.
  `,
  vocabulary: [
    { german: 'die Absolutform (-en)', russian: 'абсолютная конструкция' },
    { german: 'der Akkusativ Absolutus', russian: 'абсолютный винительный падеж' },
    { german: 'der Genitiv Absolutus', russian: 'абсолютный родительный падеж' },
    { german: 'gesenkten Hauptes', russian: 'с опущенной головой (пример Genitiv Absolutus)' },
    { german: 'unverrichteter Dinge', russian: 'ничего не добившись, не солоно хлебавши (пример Genitiv Absolutus)' },
    { german: 'den Hut in der Hand', russian: 'шляпу в руке (пример Akkusativ Absolutus)' },
    { german: 'lauschen (+D)', russian: 'вслушиваться, внимательно слушать (кого-л./что-л.)' },
    { german: 'schlenderen', russian: 'бродить, слоняться, прогуливаться' },
    { german: 'betreten (betritt, betrat, hat betreten)', russian: 'входить (в помещение)' },
  ],
  readingText: `
Der Redner, **die Manuskriptseiten fest in der Hand haltend**, begann seine Ansprache. **Die Zuhörer gespannt lauschend**, füllte seine Stimme den Raum. **Wenige Minuten später, die ersten Thesen präsentiert**, entwickelte sich eine lebhafte Diskussion. **Einige zustimmend nickend, andere kritische Fragen formulierend**, zeigte das Publikum großes Interesse. Der Moderator, **die Zeit im Blick behaltend**, musste schließlich zum Ende mahnen. **Die wichtigsten Punkte noch einmal zusammengefasst**, schloss der Redner seinen Vortrag.
  `,
  readingComprehensionExercises: [
    {
      id: 'c2-absolutformen-rq1',
      type: 'multiple_choice',
      question: 'Welche Funktion hat die Konstruktion "Die Zuhörer gespannt lauschend" im zweiten Satz?',
      options: [
        'Sie beschreibt das Hauptsubjekt des Satzes.',
        'Sie drückt eine Bedingung aus.',
        'Sie beschreibt ein begleitendes, gleichzeitiges Geschehen zu der Handlung des Hauptsatzes.',
        'Sie ist ein Relativsatz.'
      ],
      correctAnswer: 'Sie beschreibt ein begleitendes, gleichzeitiges Geschehen zu der Handlung des Hauptsatzes.',
      explanation: 'Diese Partizipialkonstruktion (Partizip I) beschreibt, was die Zuhörer taten, während die Stimme des Redners den Raum füllte (modales oder temporales Adverbial).',
    },
    {
      id: 'c2-absolutformen-rq2',
      type: 'multiple_choice',
      question: 'Welche Art von Absolutform ist "Gesenkten Hauptes" (если бы было в тексте)?',
      options: ['Akkusativ Absolutus', 'Nominativ Absolutus', 'Genitiv Absolutus', 'Dativ Absolutus'],
      correctAnswer: 'Genitiv Absolutus',
      explanation: '"Gesenkten Hauptes" ist ein klassisches Beispiel für den Genitiv Absolutus.',
    },
  ],
  exercises: [
    {
      id: 'c2-absolutformen-ex1',
      type: 'multiple_choice',
      question: 'Transformieren Sie: "Er ging die Straße entlang und pfiff ein Lied." in eine Konstruktion mit Partizip I.',
      options: [
        'Ein Lied pfeifend, ging er die Straße entlang.',
        'Gepfiffen ein Lied, ging er die Straße entlang.',
        'Die Straße entlanggehend und ein Lied pfeifend, ging er.'
      ],
      correctAnswer: 'Ein Lied pfeifend, ging er die Straße entlang.',
      explanation: 'Partizip I "pfeifend" beschreibt eine gleichzeitige Handlung.',
    },
    {
      id: 'c2-absolutformen-ex2',
      type: 'fill_in_the_blank',
      question: 'Vervollständigen Sie den Satz mit einer Akkusativ-Absolutus-Konstruktion: "___ (die Hände / verschränken) vor der Brust, hörte er zu."',
      sentenceParts: ['', ' vor der Brust, hörte er zu.'],
      correctAnswer: 'Die Hände vor der Brust verschränkt',
      explanation: 'Akkusativ Absolutus mit Partizip II "verschränkt".',
    },
    {
      id: 'c2-absolutformen-ex3',
      type: 'writing_prompt',
      question: 'Beschreiben Sie eine Szene mit einer Person, die etwas tut, und verwenden Sie dabei mindestens eine Absolutform (z.B. Akkusativ Absolutus oder eine Partizipialkonstruktion als adverbiale Bestimmung).',
      suggestedLength: '2-3 Sätze',
    },
  ],
};

    