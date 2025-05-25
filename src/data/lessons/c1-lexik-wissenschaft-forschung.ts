
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonC1LexikWissenschaftForschung: Lesson = {
  id: 'c1-lexik-wissenschaft-forschung',
  level: 'C1',
  topic: 'Наука и исследования (Wissenschaft und Forschung)',
  theory: `
На уровне C1 важно уметь свободно и аргументированно обсуждать научные темы, понимать специализированные тексты и выражать свое мнение по вопросам научных исследований и их влияния на общество.

**Ключевые аспекты для обсуждения:**
- Понимание научной методологии.
- Обсуждение этических вопросов в науке.
- Анализ результатов исследований и их интерпретация.

**Примеры фраз для дискуссии:**
- *Die jüngsten Forschungsergebnisse deuten darauf hin, dass...* (Последние результаты исследований указывают на то, что...)
- *Es bedarf weiterer Untersuchungen, um diese Hypothese zu verifizieren.* (Необходимы дальнейшие исследования, чтобы проверить эту гипотезу.)
- *Der technologische Fortschritt wirft neue ethische Fragen auf.* (Технологический прогресс ставит новые этические вопросы.)
`,
  vocabulary: [
    { german: 'die Wissenschaft (-en)', russian: 'наука', example: 'Die moderne Wissenschaft entwickelt sich rasant.' },
    { german: 'die Forschung (-en)', russian: 'исследование', example: 'Die Forschung in diesem Bereich ist sehr komplex.' },
    { german: 'der Wissenschaftler (-) / die Wissenschaftlerin (-nen)', russian: 'ученый / ученая', example: 'Viele Wissenschaftler arbeiten an diesem Projekt.' },
    { german: 'der Forscher (-) / die Forscherin (-nen)', russian: 'исследователь / исследовательница', example: 'Die Forscher präsentierten ihre Ergebnisse.' },
    { german: 'die Entdeckung (-en)', russian: 'открытие (научное)', example: 'Die Entdeckung der DNA war ein Meilenstein.' },
    { german: 'die Erfindung (-en)', russian: 'изобретение', example: 'Das Rad war eine bahnbrechende Erfindung.' },
    { german: 'die Theorie (-n)', russian: 'теория', example: 'Diese Theorie muss noch bewiesen werden.' },
    { german: 'die Hypothese (-n)', russian: 'гипотеза', example: 'Die Hypothese wurde durch Experimente bestätigt.' },
    { german: 'das Experiment (-e)', russian: 'эксперимент', example: 'Das Experiment lieferte interessante Daten.' },
    { german: 'die Methode (-n)', russian: 'метод, методика', example: 'Welche Methode haben Sie angewendet?' },
    { german: 'die Analyse (-n)', russian: 'анализ', example: 'Die statistische Analyse zeigte signifikante Unterschiede.' },
    { german: 'der Beweis (-e)', russian: 'доказательство', example: 'Es gibt klare Beweise für diese Annahme.' },
    { german: 'forschen (nach + D)', russian: 'исследовать (что-л.)', example: 'Er forscht nach neuen Heilmethoden.' },
    { german: 'entdecken', russian: 'открывать (что-то новое)', example: 'Kolumbus hat Amerika entdeckt.' },
    { german: 'erfinden (erfindet, erfand, hat erfunden)', russian: 'изобретать', example: 'Wer hat das Telefon erfunden?' },
    { german: 'analysieren', russian: 'анализировать', example: 'Wir müssen die Ergebnisse sorgfältig analysieren.' },
    { german: 'beweisen (beweist, bewies, hat bewiesen)', russian: 'доказывать', example: 'Der Anwalt konnte seine Unschuld beweisen.' },
    { german: 'entwickeln', russian: 'разрабатывать, развивать', example: 'Das Unternehmen entwickelt neue Software.' },
    { german: 'veröffentlichen', russian: 'публиковать, опубликовывать', example: 'Der Artikel wurde in einer Fachzeitschrift veröffentlicht.' },
    { german: 'der Fortschritt (-e)', russian: 'прогресс, успех', example: 'Der technische Fortschritt ist unaufhaltsam.' },
    { german: 'das Ergebnis (-se)', russian: 'результат, итог', example: 'Die Ergebnisse der Studie werden bald präsentiert.' },
    { german: 'die Studie (-n)', russian: 'исследование (научное, часто с опросами или экспериментами)', example: 'Eine neue Studie zeigt die Auswirkungen des Schlafmangels.' },
    { german: 'die Erkenntnis (-se)', russian: 'познание, осознание, научное открытие', example: 'Die neuesten wissenschaftlichen Erkenntnisse.' },
  ],
  readingText: `
Die wissenschaftliche Methode ist ein systematischer Prozess zur Gewinnung neuer Erkenntnisse und zur Überprüfung von Hypothesen. Sie beginnt in der Regel mit einer Beobachtung oder einer Fragestellung, die zu einer vorläufigen Erklärung, der Hypothese, führt. Um diese Hypothese zu testen, werden Experimente konzipiert und durchgeführt, deren Ergebnisse sorgfältig dokumentiert und analysiert werden.

Ein entscheidender Aspekt der wissenschaftlichen Forschung ist die Reproduzierbarkeit. Ergebnisse gelten erst dann als robust, wenn sie von anderen, unabhängigen Forschungsgruppen unter ähnlichen Bedingungen wiederholt werden können. Die Veröffentlichung von Forschungsergebnissen in Fachzeitschriften, die einem Peer-Review-Verfahren unterliegen, dient der Qualitätssicherung und dem wissenschaftlichen Diskurs. Dabei bewerten Experten des jeweiligen Fachgebiets die Methodik und die Schlussfolgerungen der Studie.

Allerdings ist auch die Wissenschaft nicht frei von Herausforderungen. Finanzierungsdruck, der Wettbewerb um Publikationen und menschliche Voreingenommenheit können die Objektivität beeinflussen. Daher sind Transparenz, kritische Reflexion und ein offener Umgang mit Fehlern unerlässlich für den wissenschaftlichen Fortschritt und das Vertrauen der Gesellschaft in die Forschung.
`,
  readingComprehensionExercises: [
    {
      id: 'c1-lexik-wissenschaft-forschung-rq1',
      question: 'Was ist laut Text der erste Schritt in der wissenschaftlichen Methode?',
      options: [
        'Die Durchführung von Experimenten.',
        'Die Veröffentlichung der Ergebnisse.',
        'Eine Beobachtung oder Fragestellung.',
        'Das Peer-Review-Verfahren.'
      ],
      correctAnswer: 'Eine Beobachtung oder Fragestellung.',
      explanation: 'Im Text steht: "Sie beginnt in der Regel mit einer Beobachtung oder einer Fragestellung..."'
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-rq2',
      question: 'Warum ist die Reproduzierbarkeit in der wissenschaftlichen Forschung wichtig?',
      options: [
        'Um die Finanzierung für weitere Projekte zu sichern.',
        'Um die Ergebnisse schneller veröffentlichen zu können.',
        'Um die Robustheit der Ergebnisse zu bestätigen, wenn sie von unabhängigen Gruppen wiederholt werden können.',
        'Um die Anzahl der Publikationen zu erhöhen.'
      ],
      correctAnswer: 'Um die Robustheit der Ergebnisse zu bestätigen, wenn sie von unabhängigen Gruppen wiederholt werden können.',
      explanation: 'Der Text sagt: "Ergebnisse gelten erst dann als robust, wenn sie von anderen, unabhängigen Forschungsgruppen unter ähnlichen Bedingungen wiederholt werden können."'
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-rq3',
      question: 'Welche Faktoren können laut Text die Objektivität in der Wissenschaft beeinflussen?',
      options: [
        'Nur der Mangel an qualifizierten Forschern.',
        'Ausschließlich die Komplexität der untersuchten Phänomene.',
        'Finanzierungsdruck, Publikationswettbewerb und menschliche Voreingenommenheit.',
        'Die übermäßige Nutzung von Technologie in Experimenten.'
      ],
      correctAnswer: 'Finanzierungsdruck, Publikationswettbewerb und menschliche Voreingenommenheit.',
      explanation: 'Im Text werden genannt: "Finanzierungsdruck, der Wettbewerb um Publikationen und menschliche Voreingenommenheit können die Objektivität beeinflussen."'
    }
  ],
  exercises: [
    {
      id: 'c1-lexik-wissenschaft-forschung-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "доказательство"?',
      options: ['die Theorie', 'die Hypothese', 'der Beweis', 'das Experiment'],
      correctAnswer: 'der Beweis',
      explanation: '"Der Beweis" означает "доказательство".',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Der ___ (исследователь) präsentierte seine neuesten Ergebnisse."',
      sentenceParts: ['Der ', ' präsentierte seine neuesten Ergebnisse.'],
      correctAnswer: 'Forscher',
      explanation: '"Исследователь" по-немецки "der Forscher".',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Эта теория еще не была доказана."',
      prompt: 'Эта теория еще не была доказана.',
      languageDirection: 'to_german',
      correctAnswer: 'Diese Theorie ist noch nicht bewiesen worden.',
      // Альтернатива: Diese Theorie wurde noch nicht bewiesen.
      explanation: '"Доказать" - "beweisen". Используется Perfekt Passiv или Präteritum Passiv.',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-ex4',
      type: 'multiple_choice',
      question: 'Что означает глагол "erforschen"?',
      options: ['изобретать', 'доказывать', 'тщательно исследовать', 'анализировать'],
      correctAnswer: 'тщательно исследовать',
      explanation: '"Erforschen" означает "исследовать" (часто более глубоко и систематически, чем "untersuchen").',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-wp1',
      type: 'writing_prompt',
      question: 'Diskutieren Sie die ethischen Implikationen einer wichtigen wissenschaftlichen Entdeckung oder technologischen Entwicklung der letzten Jahre. (ca. 5-7 Sätze)',
      suggestedLength: '5-7 Sätze',
      explanation: 'Обсудите этические последствия важного научного открытия или технологического развития последних лет.'
    }
  ],
};
