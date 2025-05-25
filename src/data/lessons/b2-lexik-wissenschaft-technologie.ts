
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB2LexikWissenschaftTechnologie: Lesson = {
  id: 'b2-lexik-wissenschaft-technologie',
  level: 'B2',
  topic: 'Наука и технологии (Wissenschaft und Technologie)',
  theory: `
На уровне B2 важно уметь обсуждать научные и технологические темы, понимать основные концепции и выражать свое мнение о влиянии науки и технологий на современное общество.

**Ключевые аспекты для обсуждения:**
- Последние научные открытия и технологические инновации.
- Влияние технологий на повседневную жизнь и рынок труда.
- Этические вопросы, связанные с научным прогрессом.
- Перспективы развития различных научных областей.

**Примеры фраз для дискуссии:**
- *Die künstliche Intelligenz (KI) bietet enorme Chancen, birgt aber auch Risiken.* (Искусственный интеллект (ИИ) предлагает огромные возможности, но также несет в себе риски.)
- *Der digitale Wandel transformiert unsere Arbeitswelt grundlegend.* (Цифровые изменения коренным образом трансформируют наш мир труда.)
- *Es ist entscheidend, die ethischen Implikationen neuer Technologien zu berücksichtigen.* (Крайне важно учитывать этические последствия новых технологий.)
`,
  vocabulary: [
    { german: 'die Wissenschaft (-en)', russian: 'наука', example: 'Die Wissenschaft sucht nach Antworten auf komplexe Fragen.' },
    { german: 'die Technologie (-n)', russian: 'технология', example: 'Moderne Technologien erleichtern unseren Alltag.' },
    { german: 'die Forschung (-en)', russian: 'исследование (научное)', example: 'Die medizinische Forschung macht große Fortschritte.' },
    { german: 'der Fortschritt (-e)', russian: 'прогресс', example: 'Der technische Fortschritt ist nicht aufzuhalten.' },
    { german: 'die Innovation (-en)', russian: 'инновация, новшество', example: 'Innovationen sind wichtig für die Wirtschaft.' },
    { german: 'die Entdeckung (-en)', russian: 'открытие (научное)', example: 'Die Entdeckung des Penicillins war revolutionär.' },
    { german: 'die Erfindung (-en)', russian: 'изобретение', example: 'Das Internet ist eine bahnbrechende Erfindung.' },
    { german: 'künstliche Intelligenz (KI)', russian: 'искусственный интеллект (ИИ)', example: 'KI wird in vielen Bereichen eingesetzt.' },
    { german: 'die Digitalisierung', russian: 'цифровизация', example: 'Die Digitalisierung verändert die Art, wie wir kommunizieren.' },
    { german: 'die Informatik', russian: 'информатика', example: 'Er studiert Informatik an der Universität.' },
    { german: 'die Biotechnologie', russian: 'биотехнология' },
    { german: 'die Gentechnik', russian: 'генная инженерия' },
    { german: 'der Wissenschaftler (-) / die Wissenschaftlerin (-nen)', russian: 'ученый / ученая', example: 'Wissenschaftler arbeiten an neuen Lösungen.' },
    { german: 'der Forscher (-) / die Forscherin (-nen)', russian: 'исследователь / исследовательница' },
    { german: 'das Experiment (-e)', russian: 'эксперимент', example: 'Das Experiment bestätigte die Hypothese.' },
    { german: 'die Daten (Pl.)', russian: 'данные', example: 'Die gesammelten Daten werden analysiert.' },
    { german: 'analysieren', russian: 'анализировать', example: 'Es ist wichtig, die Ergebnisse genau zu analysieren.' },
    { german: 'entwickeln', russian: 'разрабатывать, развивать', example: 'Ein neues Medikament wurde entwickelt.' },
    { german: 'erforschen', russian: 'исследовать (тщательно, глубоко)', example: 'Das Universum wird intensiv erforscht.' },
    { german: 'Auswirkungen haben auf + A', russian: 'оказывать влияние на, иметь последствия для', example: 'Neue Technologien haben große Auswirkungen auf die Gesellschaft.' },
    { german: 'ethisch', russian: 'этический', example: 'Der Einsatz von KI wirft ethische Fragen auf.' },
  ],
  readingText: `
Die rasante Entwicklung der künstlichen Intelligenz (KI) gehört zu den prägendsten technologischen Trends unserer Zeit. KI-Systeme sind bereits in der Lage, komplexe Aufgaben zu bewältigen, die früher ausschließlich menschlicher Intelligenz vorbehalten waren – von der medizinischen Diagnostik über die Steuerung autonomer Fahrzeuge bis hin zur Erstellung kreativer Inhalte wie Texte oder Bilder.

Diese Fortschritte eröffnen immense Möglichkeiten für Effizienzsteigerungen, neue Dienstleistungen und die Lösung globaler Herausforderungen. Gleichzeitig werfen sie jedoch auch tiefgreifende ethische und gesellschaftliche Fragen auf. Wie können wir sicherstellen, dass KI-Systeme fair und transparent eingesetzt werden? Welche Auswirkungen hat die zunehmende Automatisierung auf den Arbeitsmarkt und die soziale Gerechtigkeit? Und wie können wir verhindern, dass KI für schädliche Zwecke missbraucht wird?

Eine breite gesellschaftliche Debatte und die Entwicklung robuster regulatorischer Rahmenbedingungen sind unerlässlich, um die Potenziale der künstlichen Intelligenz verantwortungsvoll zu nutzen und gleichzeitig die damit verbundenen Risiken zu minimieren. Die Zukunft hängt davon ab, ob es uns gelingt, Technologie in den Dienst des Menschen zu stellen und nicht umgekehrt.
`,
  readingComprehensionExercises: [
    {
      id: 'b2-lexik-wissenschaft-technologie-rq1',
      question: 'Welche Bereiche werden im Text als Beispiele für den Einsatz von KI genannt?',
      options: [
        'Nur die Steuerung autonomer Fahrzeuge.',
        'Medizinische Diagnostik, Steuerung autonomer Fahrzeuge und Erstellung kreativer Inhalte.',
        'Ausschließlich die Erstellung von Texten und Bildern.',
        'Nur die Optimierung von Suchmaschinenalgorithmen.'
      ],
      correctAnswer: 'Medizinische Diagnostik, Steuerung autonomer Fahrzeuge und Erstellung kreativer Inhalte.',
      explanation: 'Im Text steht: "...von der medizinischen Diagnostik über die Steuerung autonomer Fahrzeuge bis hin zur Erstellung kreativer Inhalte wie Texte oder Bilder."'
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-rq2',
      question: 'Welche gesellschaftliche Frage wird im Zusammenhang mit der Automatisierung durch KI im Text aufgeworfen?',
      options: [
        'Wie KI die Umweltbelastung reduzieren kann.',
        'Welche Auswirkungen die Automatisierung auf den Arbeitsmarkt und die soziale Gerechtigkeit hat.',
        'Wie KI die internationale politische Stabilität fördern kann.',
        'Ob KI menschliche Kreativität vollständig ersetzen kann.'
      ],
      correctAnswer: 'Welche Auswirkungen die Automatisierung auf den Arbeitsmarkt und die soziale Gerechtigkeit hat.',
      explanation: 'Der Text fragt: "Welche Auswirkungen hat die zunehmende Automatisierung auf den Arbeitsmarkt und die soziale Gerechtigkeit?"'
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-rq3',
      question: 'Was ist laut Text unerlässlich, um die Potenziale der KI verantwortungsvoll zu nutzen?',
      options: [
        'Eine möglichst schnelle und unregulierte Entwicklung der KI.',
        'Der Verzicht auf internationale Zusammenarbeit in der KI-Forschung.',
        'Eine breite gesellschaftliche Debatte und robuste regulatorische Rahmenbedingungen.',
        'Die Beschränkung des KI-Einsatzes auf rein wissenschaftliche Zwecke.'
      ],
      correctAnswer: 'Eine breite gesellschaftliche Debatte und robuste regulatorische Rahmenbedingungen.',
      explanation: 'Im Text heißt es: "Eine breite gesellschaftliche Debatte und die Entwicklung robuster regulatorischer Rahmenbedingungen sind unerlässlich..."'
    }
  ],
  exercises: [
    {
      id: 'b2-lexik-wissenschaft-technologie-ex1',
      type: 'multiple_choice',
      question: 'Was bedeutet "die Innovation"?',
      options: ['Das Ergebnis', 'Das Experiment', 'Das Новшество/Нововведение', 'Die Tradition'],
      correctAnswer: 'Das Новшество/Нововведение',
      explanation: '"Die Innovation" bedeutet "новшество" oder "нововведение".',
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-ex2',
      type: 'fill_in_the_blank',
      question: 'Die ___ (цифровизация) verändert viele Aspekte unseres Lebens.',
      sentenceParts: ['Die ', ' verändert viele Aspekte unseres Lebens.'],
      correctAnswer: 'Digitalisierung',
      explanation: '"Die Digitalisierung" ist das passende Wort.',
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Ученые исследуют новые методы лечения."',
      prompt: 'Ученые исследуют новые методы лечения.',
      languageDirection: 'to_german',
      correctAnswer: 'Wissenschaftler erforschen neue Behandlungsmethoden.',
      // Альтернатива: Wissenschaftler forschen nach neuen Behandlungsmethoden.
      explanation: '"Исследовать" может быть "erforschen" (более тщательно) или "forschen nach". "Методы лечения" - "Behandlungsmethoden".',
    },
    {
      id: 'b2-lexik-wissenschaft-technologie-wp1',
      type: 'writing_prompt',
      question: 'Diskutieren Sie die Vor- und Nachteile einer bestimmten technologischen Entwicklung (z.B. Soziale Medien, Künstliche Intelligenz, Gentechnik). (ca. 4-6 Sätze)',
      suggestedLength: '4-6 Sätze',
      explanation: 'Обсудите преимущества и недостатки конкретного технологического развития (например, социальные сети, искусственный интеллект, генная инженерия).'
    }
  ],
};
