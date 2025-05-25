
import type { Lesson } from '@/types';

// --- Урок C2: Номинальный и вербальный стили (Nominalstil vs. Verbalstil) ---
export const lessonC2NominalstilVerbalstil: Lesson = {
  id: 'c2-nominalstil-verbalstil',
  level: 'C2',
  topic: 'Номинальный и вербальный стили (Nominalstil vs. Verbalstil)',
  theory: `В немецком языке, как и во многих других, существуют различные стили изложения информации. Два основных полюса – это **вербальный стиль (Verbalstil)** и **номинальный стиль (Nominalstil)**. Умение распознавать, понимать и адекватно использовать оба стиля, а также трансформировать текст из одного стиля в другой, является важным показателем высокого уровня владения языком (C2).

**I. Вербальный стиль (Verbalstil)**

*   **Характеристики:**
    *   Преобладание глаголов (Verben) для выражения действий, процессов и состояний.
    *   Использование личных форм глагола, активного и пассивного залога.
    *   Частое использование придаточных предложений (Nebensätze), вводимых союзами (Konjunktionen) и относительными местоимениями (Relativpronomen).
    *   Речь более динамичная, живая, часто более понятная и прямая.
    *   Типичен для устной речи, художественной литературы, публицистики, неформальной переписки.

*   **Пример:**
    *   *Weil die Firma ihre Produkte gut vermarktet hat, konnte sie ihren Umsatz deutlich steigern.* (Поскольку фирма хорошо продвигала свою продукцию на рынке, она смогла значительно увеличить свой оборот.)
    *   *Der Student analysiert die Daten, um eine Schlussfolgerung zu ziehen.* (Студент анализирует данные, чтобы сделать вывод.)

**II. Номинальный стиль (Nominalstil)**

*   **Характеристики:**
    *   Преобладание существительных (Nomen), особенно отглагольных (девербативов), для выражения действий и процессов.
    *   Глаголы часто выполняют функцию связки или вспомогательную (Funktionsverben).
    *   Частое использование предложных конструкций (Präpositionalgefüge) вместо придаточных предложений.
    *   Широкое применение причастных оборотов (Partizipialkonstruktionen).
    *   Речь более абстрактная, сжатая, объективная, формальная, иногда тяжеловесная.
    *   Типичен для научного языка, официальных документов, бюрократической речи, инструкций, технических описаний.

*   **Средства номинализации (Umwandlung von Verben/Adjektiven in Nomen):**
    *   **Суффиксы:** \`-ung\` (Untersuchung, Entwicklung), \`-tion\` (Information, Produktion), \`-heit\` (Freiheit, Sicherheit), \`-keit\` (Möglichkeit, Schnelligkeit), \`-schaft\` (Wissenschaft, Freundschaft), \`-tum\` (Wachstum, Eigentum), \`-e\` (Hilfe, Gabe), \`-nis\` (Ergebnis, Ereignis), \`-er\` (Lehrer, Besucher) и др.
    *   **Субстантивированные инфинитивы:** \`das Lesen\`, \`das Schreiben\`, \`das Treffen\`.
    *   **Субстантивированные прилагательные/причастия:** \`das Gute\`, \`der Angestellte\`, \`die Anwesenden\`.

*   **Примеры трансформации из вербального в номинальный стиль:**

    1.  **Придаточное причины (Kausalsatz mit \`weil\`/\`da\`) → Предложная конструкция (\`wegen\` + Genitiv, \`aufgrund\` + Genitiv, \`durch\` + Akkusativ):**
        *   Вербально: *Weil es stark regnete, wurde das Spiel abgesagt.*
        *   Номинально: ***Wegen des starken Regens** wurde das Spiel abgesagt.* / ***Aufgrund des starken Regens** wurde das Spiel abgesagt.*

    2.  **Придаточное цели (Finalsatz mit \`damit\`/\`um...zu\`) → Предложная конструкция (\`zur\`/\`zum\` + Substantiv, \`zwecks\` + Genitiv, \`mit dem Ziel\`):**
        *   Вербально: *Er lernt Deutsch, um in Deutschland studieren zu können.*
        *   Номинально: *Er lernt Deutsch **zum Studium** in Deutschland.* / *Er lernt Deutsch **zum Zwecke des Studiums** in Deutschland.*

    3.  **Придаточное условия (Konditionalsatz mit \`wenn\`/\`falls\`) → Предложная конструкция (\`bei\` + Dativ, \`im Falle\` + Genitiv):**
        *   Вербально: *Wenn man die Regeln beachtet, gibt es keine Probleme.*
        *   Номинально: ***Bei Beachtung der Regeln** gibt es keine Probleme.* / ***Im Falle der Beachtung der Regeln**...*

    4.  **Придаточное времени (Temporalsatz) → Предложная конструкция (разные предлоги: \`nach\`, \`vor\`, \`während\`, \`seit\`, \`bis zu\` + Dativ/Genitiv):**
        *   Вербально: *Nachdem er das Projekt beendet hatte, nahm er Urlaub.*
        *   Номинально: ***Nach Beendigung des Projekts** nahm er Urlaub.*
        *   Вербально: *Während er arbeitete, hörte er Musik.*
        *   Номинально: ***Während der Arbeit** hörte er Musik.*

    5.  **Относительное придаточное (Relativsatz) → Причастный оборот (Partizipialattribut) или существительное с Genitiv-атрибутом:**
        *   Вербально: *Der Mann, der das Auto repariert, ist mein Nachbar.*
        *   Номинально: *Der **das Auto reparierende** Mann ist mein Nachbar.* (Partizip I)
        *   Вербально: *Das Buch, das von Goethe geschrieben wurde, ist sehr berühmt.*
        *   Номинально: *Das **von Goethe geschriebene** Buch ist sehr berühmt.* (Partizip II)

    6.  **Активная конструкция → Номинальная конструкция с отглагольным существительным:**
        *   Вербально: *Man untersucht die Proben.*
        *   Номинально: ***Die Untersuchung der Proben** erfolgt.* / *Es erfolgt **eine Untersuchung der Proben**.*

**III. Преимущества и недостатки:**

*   **Вербальный стиль:**
    *   + Проще для понимания, более динамичный, естественный в разговорной речи.
    *   - Может быть многословным, менее точным в некоторых научных контекстах.
*   **Номинальный стиль:**
    *   + Краткость, точность, объективность, возможность выразить сложные абстрактные связи.
    *   - Может быть трудным для восприятия, тяжеловесным, безличным, "канцелярским" (Kanzleistil).

**Вывод:** На уровне С2 важно не только понимать оба стиля, но и уметь гибко переключаться между ними, выбирая наиболее подходящий для конкретной коммуникативной ситуации и цели высказывания. Часто эффективным является умелое сочетание элементов обоих стилей.`,
  vocabulary: [
    { german: 'der Nominalstil', russian: 'номинальный стиль', example: 'Der Nominalstil wird oft in wissenschaftlichen Texten verwendet.' },
    { german: 'der Verbalstil', russian: 'вербальный стиль', example: 'Im Alltag bevorzugen viele den Verbalstil.' },
    { german: 'die Nominalisierung (-en)', russian: 'номинализация (превращение в существительное)', example: 'Die Nominalisierung von Verben ist typisch für den Nominalstil.' },
    { german: 'die Verbalisierung (-en)', russian: 'вербализация (превращение в глагольную конструкцию)', example: 'Manchmal ist eine Verbalisierung für das Verständnis besser.' },
    { german: 'das Funktionsverbgefüge (FVG)', russian: 'функциональная глагольная конструкция (Nomen-Verb-Verbindung)' },
    { german: 'die Präpositionalphrase (-n)', russian: 'предложная группа/конструкция', example: 'Statt eines Nebensatzes kann man eine Präpositionalphrase verwenden.' },
    { german: 'das Partizipialattribut (-e)', russian: 'причастный атрибут (определение)', example: 'Das schnell fahrende Auto.' },
    { german: 'die Untersuchung (-en)', russian: 'исследование, расследование', example: 'Die Untersuchung der Ergebnisse dauerte lange.' },
    { german: 'die Entwicklung (-en)', russian: 'развитие, разработка', example: 'Die Entwicklung neuer Technologien ist wichtig.' },
    { german: 'die Durchführung (-en)', russian: 'проведение, осуществление', example: 'Die Durchführung des Experiments war erfolgreich.' },
    { german: 'die Analyse (-n)', russian: 'анализ', example: 'Eine gründliche Analyse der Daten ist notwendig.' },
    { german: 'die Steigerung (-en)', russian: 'увеличение, рост', example: 'Eine Steigerung der Produktivität wird angestrebt.' },
    { german: 'die Reduzierung (-en)', russian: 'сокращение, уменьшение', example: 'Die Reduzierung der Kosten ist ein wichtiges Ziel.' },
    { german: 'wegen (+Genitiv/Dativ)', russian: 'из-за, по причине', example: 'Wegen des Regens blieben wir zu Hause.' },
    { german: 'aufgrund (+Genitiv)', russian: 'на основании, из-за', example: 'Aufgrund neuer Beweise wurde der Fall wieder aufgenommen.' },
    { german: 'mithilfe (+Genitiv)', russian: 'с помощью', example: 'Mithilfe moderner Technik wurde das Problem gelöst.' },
    { german: 'zwecks (+Genitiv)', russian: 'с целью, для', example: 'Zwecks besserer Übersichtlichkeit wurden Tabellen verwendet.' },
    { german: 'innerhalb (+Genitiv)', russian: 'внутри, в течение', example: 'Innerhalb eines Monats muss die Arbeit fertig sein.' },
    { german: 'außerhalb (+Genitiv)', russian: 'вне, за пределами', example: 'Außerhalb der Stadt sind die Mieten günstiger.' },
    { german: 'trotz (+Genitiv/Dativ)', russian: 'несмотря на', example: 'Trotz des schlechten Wetters gingen sie spazieren.' },
  ],
  exercises: [
    {
      id: 'c2-nominalstil-ex1',
      type: 'multiple_choice',
      question: 'Трансформируйте предложение в номинальный стиль: "Der Manager entscheidet schnell."',
      options: [
        'Der Manager trifft eine schnelle Entscheidung.',
        'Eine schnelle Entscheidung wird vom Manager getroffen.',
        'Die Schnelligkeit der Entscheidung des Managers ist bemerkenswert.'
      ],
      correctAnswer: 'Der Manager trifft eine schnelle Entscheidung.',
      explanation: 'Глагол "entscheiden" заменяется на Nomen-Verb-Verbindung "eine Entscheidung treffen". Вариант B - это пассив, а не просто номинальный стиль.',
    },
    {
      id: 'c2-nominalstil-ex2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в вербальный стиль: "Nach der Analyse der Daten konnten Schlussfolgerungen gezogen werden."',
      sentenceParts: ['Nachdem die Daten ', ' worden waren, konnten Schlussfolgerungen gezogen werden.'], // анализировать - analysieren
      correctAnswer: 'analysiert',
      explanation: 'Номинальная конструкция "Nach der Analyse der Daten" (После анализа данных) преобразуется в придаточное времени "Nachdem die Daten analysiert worden waren" (После того как данные были проанализированы).',
    },
    {
      id: 'c2-nominalstil-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя преимущественно номинальный стиль: "Из-за увеличения производственных затрат цены на продукцию были повышены."',
      prompt: 'Из-за увеличения производственных затрат цены на продукцию были повышены.',
      languageDirection: 'to_german',
      correctAnswer: 'Aufgrund der Steigerung der Produktionskosten wurden die Produktpreise erhöht.',
      // Альтернатива: Wegen der gestiegenen Produktionskosten kam es zu einer Erhöhung der Produktpreise.
      explanation: '"Steigerung" (увеличение) и предложная конструкция "Aufgrund" (+ Genitiv) типичны для номинального стиля.',
    },
    {
      id: 'c2-nominalstil-ex4',
      type: 'multiple_choice',
      question: 'Какое выражение является примером номинального стиля?',
      options: [
        'Er erklärte, dass er nicht zustimmen könne.',
        'Seine Ablehnung der Zustimmung wurde deutlich.',
        'Er konnte nicht zustimmen, weil er anderer Meinung war.'
      ],
      correctAnswer: 'Seine Ablehnung der Zustimmung wurde deutlich.',
      explanation: '"Ablehnung" (отказ, несогласие) и "Zustimmung" (согласие) - отглагольные существительные. Глагол "deutlich werden" (становиться ясным) здесь скорее как связка.',
    },
    {
      id: 'c2-nominalstil-ex5',
      type: 'fill_in_the_blank',
      question: 'Замените вербальную конструкцию номинальной: "Die Firma plant, die Produktion zu erweitern." (Фирма планирует расширить производство.)',
      sentenceParts: ['Eine ', ' der Produktion ist geplant.'], // Erweiterung
      correctAnswer: 'Erweiterung',
      explanation: 'Глагол "erweitern" (расширять) номинализируется в "Erweiterung" (расширение).',
    },
  ],
};
