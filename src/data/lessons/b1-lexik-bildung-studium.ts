
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB1LexikBildungStudium: Lesson = {
  id: 'b1-lexik-bildung-studium',
  level: 'B1',
  topic: 'Образование и Учеба (Bildung und Studium)',
  theory: `
В этом уроке мы рассмотрим лексику, связанную с системой образования, учебными заведениями, процессом обучения и экзаменами. Умение обсуждать эти темы важно для общения и понимания контекста в немецкоязычных странах.

**Основные термины:**
- **die Bildung** - образование
- **das Studium** - учеба в вузе, изучение (предмета)
- **lernen** - учить, учиться (в школе, на курсах)
- **studieren** - учиться (в университете, институте), изучать (предмет)
- **unterrichten** - преподавать

**Полезные фразы:**
- *Ich studiere Informatik an der Technischen Universität.* (Я изучаю информатику в Техническом университете.)
- *Welche Fächer hast du in der Schule gelernt?* (Какие предметы ты учил в школе?)
- *Man muss viel für die Prüfungen lernen.* (Нужно много учиться для экзаменов.)
- *Ein gutes Zeugnis ist wichtig für die Zukunft.* (Хороший аттестат важен для будущего.)
`,
  vocabulary: [
    { german: 'die Bildung', russian: 'образование', example: 'Bildung ist der Schlüssel zum Erfolg.' },
    { german: 'das Studium (-ien)', russian: 'учеба в вузе, изучение (предмета)', example: 'Mein Studium dauert fünf Jahre.' },
    { german: 'die Schule (-n)', russian: 'школа', example: 'Die Kinder gehen morgens in die Schule.' },
    { german: 'die Universität (-en) / die Uni (-s)', russian: 'университет', example: 'Er studiert an einer bekannten Universität.' },
    { german: 'die Hochschule (-n)', russian: 'высшее учебное заведение', example: 'Es gibt viele verschiedene Hochschulen.' },
    { german: 'die Fachhochschule (-n)', russian: 'высшая специальная школа (прикладных наук)', example: 'Sie macht ihren Master an einer Fachhochschule.' },
    { german: 'der Schüler (-) / die Schülerin (-nen)', russian: 'ученик / ученица', example: 'Die Schüler lernen fleißig.' },
    { german: 'der Student (-en) / die Studentin (-nen)', russian: 'студент / студентка', example: 'Die Studenten haben bald Prüfungen.' },
    { german: 'der Lehrer (-) / die Lehrerin (-nen)', russian: 'учитель / учительница', example: 'Unser Deutschlehrer ist sehr nett.' },
    { german: 'der Professor (-en) / die Professorin (-nen)', russian: 'профессор (муж./жен.)', example: 'Der Professor hält eine interessante Vorlesung.' },
    { german: 'das Fach (Fächer)', russian: 'предмет (учебный)', example: 'Mathematik ist mein Lieblingsfach.' },
    { german: 'der Unterricht', russian: 'занятие, урок (как процесс)', example: 'Der Unterricht beginnt um 8 Uhr.' },
    { german: 'die Vorlesung (-en)', russian: 'лекция', example: 'Die Vorlesung war sehr informativ.' },
    { german: 'das Seminar (-e)', russian: 'семинар', example: 'Wir müssen ein Referat für das Seminar vorbereiten.' },
    { german: 'die Prüfung (-en)', russian: 'экзамен', example: 'Hast du Angst vor der Prüfung?' },
    { german: 'bestehen (besteht, bestand, hat bestanden)', russian: 'сдать (экзамен), выдержать', example: 'Ich hoffe, ich bestehe die Prüfung.' },
    { german: 'durchfallen (fällt durch, fiel durch, ist durchgefallen)', russian: 'провалить (экзамен)', example: 'Leider ist er bei der Prüfung durchgefallen.' },
    { german: 'das Zeugnis (-se)', russian: 'аттестат, свидетельство, табель', example: 'Sie hat ein sehr gutes Zeugnis bekommen.' },
    { german: 'das Diplom (-e)', russian: 'диплом', example: 'Nach dem Studium erhält man ein Diplom.' },
    { german: 'die Note (-n)', russian: 'оценка, отметка', example: 'Welche Note hast du in Mathe?' },
    { german: 'die Hausaufgabe (-n)', russian: 'домашнее задание', example: 'Ich muss noch meine Hausaufgaben machen.' },
    { german: 'die Bibliothek (-en)', russian: 'библиотека', example: 'In der Bibliothek kann man Bücher ausleihen.' },
    { german: 'lernen', russian: 'учить(ся)', example: 'Man lernt nie aus.' },
    { german: 'studieren', russian: 'учить(ся) в ВУЗе, изучать', example: 'Was studierst du?' },
  ],
  readingText: `
Ein Studium in Deutschland erfreut sich international großer Beliebtheit. Viele junge Menschen aus aller Welt entscheiden sich dafür, an einer deutschen Universität oder Fachhochschule zu studieren. Die Gründe dafür sind vielfältig: das hohe Niveau der Ausbildung, die oft geringen oder fehlenden Studiengebühren und die guten Berufsaussichten nach dem Abschluss.

Um in Deutschland studieren zu können, benötigen ausländische Studierende in der Regel einen anerkannten Schulabschluss, der dem deutschen Abitur entspricht, sowie ausreichende Deutschkenntnisse, die meist durch standardisierte Tests wie TestDaF oder DSH nachgewiesen werden müssen. Einige Studiengänge, insbesondere Masterprogramme, werden auch komplett auf Englisch angeboten.

Das deutsche Hochschulsystem ist bekannt für seine starke Forschungsorientierung, besonders an den Universitäten. Fachhochschulen hingegen legen mehr Wert auf praxisnahe Ausbildung. Neben dem eigentlichen Fachstudium müssen Studierende oft auch Praktika absolvieren und eine Abschlussarbeit (Bachelorarbeit oder Masterarbeit) verfassen. Das Studentenleben in Deutschland ist oft sehr international und bietet viele Möglichkeiten zum kulturellen Austausch und zur persönlichen Entwicklung.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-lexik-bildung-studium-rq1',
      question: 'Warum entscheiden sich viele internationale Studierende für ein Studium in Deutschland?',
      options: [
        'Wegen der einfachen Zulassungsvoraussetzungen.',
        'Wegen des hohen Niveaus der Ausbildung und guter Berufsaussichten.',
        'Weil alle Studiengänge auf Englisch angeboten werden.',
        'Aufgrund der kurzen Studiendauer.'
      ],
      correctAnswer: 'Wegen des hohen Niveaus der Ausbildung und guter Berufsaussichten.',
      explanation: 'Im Text werden das hohe Niveau der Ausbildung, geringe Studiengebühren und gute Berufsaussichten als Gründe genannt.'
    },
    {
      id: 'b1-lexik-bildung-studium-rq2',
      question: 'Was ist ein Hauptunterschied zwischen Universitäten und Fachhochschulen in Deutschland laut Text?',
      options: [
        'An Fachhochschulen gibt es keine Studiengebühren.',
        'Universitäten bieten nur englischsprachige Programme an.',
        'Fachhochschulen legen mehr Wert auf praxisnahe Ausbildung.',
        'Universitäten haben eine kürzere Studiendauer.'
      ],
      correctAnswer: 'Fachhochschulen legen mehr Wert auf praxisnahe Ausbildung.',
      explanation: 'Der Text sagt: "Fachhochschulen hingegen legen mehr Wert auf praxisnahe Ausbildung."'
    },
    {
      id: 'b1-lexik-bildung-studium-rq3',
      question: 'Welche Anforderungen müssen ausländische Studierende meistens erfüllen, um in Deutschland zu studieren?',
      options: [
        'Sehr gute Englischkenntnisse und Berufserfahrung.',
        'Einen anerkannten Schulabschluss und ausreichende Deutschkenntnisse.',
        'Ein abgeschlossenes Praktikum in Deutschland.',
        'Nur einen Motivationsbrief und gute Noten.'
      ],
      correctAnswer: 'Einen anerkannten Schulabschluss und ausreichende Deutschkenntnisse.',
      explanation: 'Der Text nennt einen anerkannten Schulabschluss (Abitur-Äquivalent) und ausreichende Deutschkenntnisse (TestDaF/DSH) als typische Anforderungen.'
    }
  ],
  exercises: [
    {
      id: 'b1-lexik-bildung-studium-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "экзамен"?',
      options: ['die Vorlesung', 'das Seminar', 'die Prüfung', 'das Zeugnis'],
      correctAnswer: 'die Prüfung',
      explanation: '"Die Prüfung" означает "экзамен".',
    },
    {
      id: 'b1-lexik-bildung-studium-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Er ___ Medizin an der Universität Heidelberg."',
      sentenceParts: ['Er ', ' Medizin an der Universität Heidelberg.'],
      correctAnswer: 'studiert',
      explanation: '"Учиться в вузе" или "изучать (предмет в вузе)" - "studieren".',
    },
    {
      id: 'b1-lexik-bildung-studium-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой любимый предмет - история."',
      prompt: 'Мой любимый предмет - история.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Lieblingsfach ist Geschichte.',
      explanation: '"Любимый предмет" - "das Lieblingsfach", "история" - "die Geschichte".',
    },
    {
      id: 'b1-lexik-bildung-studium-ex4',
      type: 'multiple_choice',
      question: 'Что означает "durchfallen"?',
      options: ['сдать экзамен', 'пропустить занятие', 'провалить экзамен', 'получить хорошую оценку'],
      correctAnswer: 'провалить экзамен',
      explanation: '"Durchfallen" (bei einer Prüfung) означает "провалить экзамен".',
    },
  ],
};
