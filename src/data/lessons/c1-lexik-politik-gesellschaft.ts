
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonC1LexikPolitikGesellschaft: Lesson = {
  id: 'c1-lexik-politik-gesellschaft',
  level: 'C1',
  topic: 'Политика и общество (Politik und Gesellschaft)',
  theory: `
На уровне С1 важно уметь не только понимать, но и активно обсуждать сложные общественно-политические темы, используя соответствующую лексику и выражая свою точку зрения аргументированно. Этот урок поможет вам освоить ключевые термины и понятия.

**Основные направления для обсуждения:**
- Политические системы и государственное устройство.
- Социальные проблемы и вызовы.
- Международные отношения и глобализация.
- Права человека и гражданское общество.

**Примеры фраз для дискуссии:**
- *Meiner Auffassung nach ist die aktuelle Situation besorgniserregend.* (По моему мнению, текущая ситуация вызывает беспокойство.)
- *Es ist unumgänglich, dass Maßnahmen ergriffen werden, um die soziale Ungleichheit zu bekämpfen.* (Необходимо, чтобы были приняты меры для борьбы с социальным неравенством.)
- *Die Rolle der Medien in der politischen Meinungsbildung darf nicht unterschätzt werden.* (Роль СМИ в формировании политического мнения нельзя недооценивать.)
`,
  vocabulary: [
    { german: 'die Politik', russian: 'политика', example: 'Politik beeinflusst unser tägliches Leben.' },
    { german: 'die Gesellschaft (-en)', russian: 'общество', example: 'Die moderne Gesellschaft steht vor vielen Herausforderungen.' },
    { german: 'die Regierung (-en)', russian: 'правительство', example: 'Die Regierung hat neue Gesetze vorgeschlagen.' },
    { german: 'das Parlament (-e)', russian: 'парламент', example: 'Das Parlament debattiert über den Haushalt.' },
    { german: 'die Partei (-en)', russian: 'партия (политическая)', example: 'Welche Partei hat die meisten Sitze im Parlament?' },
    { german: 'die Wahl (-en)', russian: 'выборы', example: 'Die nächsten Wahlen finden in vier Jahren statt.' },
    { german: 'wählen', russian: 'выбирать, голосовать', example: 'Jeder Bürger hat das Recht zu wählen.' },
    { german: 'der Staat (-en)', russian: 'государство', example: 'Der Staat muss für die Sicherheit seiner Bürger sorgen.' },
    { german: 'die Demokratie (-n)', russian: 'демократия', example: 'Pressefreiheit ist ein wichtiger Bestandteil der Demokratie.' },
    { german: 'die Gerechtigkeit', russian: 'справедливость', example: 'Der Kampf für soziale Gerechtigkeit ist von großer Bedeutung.' },
    { german: 'die Ungleichheit (-en)', russian: 'неравенство', example: 'Wachsende Ungleichheit ist ein globales Problem.' },
    { german: 'die Menschenrechte (Pl.)', russian: 'права человека', example: 'Die Einhaltung der Menschenrechte ist fundamental.' },
    { german: 'die Meinungsfreiheit', russian: 'свобода слова, свобода мнений', example: 'Meinungsfreiheit ist ein Grundrecht.' },
    { german: 'die Globalisierung', russian: 'глобализация', example: 'Die Globalisierung vernetzt die Weltwirtschaft.' },
    { german: 'die Krise (-n)', russian: 'кризис', example: 'Die wirtschaftliche Krise betrifft viele Länder.' },
    { german: 'die Debatte (-n)', russian: 'дебаты, дискуссия', example: 'Es gab eine hitzige Debatte im Parlament.' },
    { german: 'diskutieren (über + A)', russian: 'дискутировать (о чём-л.)', example: 'Wir haben lange über dieses Thema diskutiert.' },
    { german: 'kritisieren', russian: 'критиковать', example: 'Die Opposition kritisierte die Pläne der Regierung.' },
    { german: 'fordern', russian: 'требовать', example: 'Die Demonstranten forderten höhere Löhne.' },
    { german: 'unterstützen', russian: 'поддерживать', example: 'Viele Bürger unterstützen diese Initiative.' },
    { german: 'die Maßnahme (-n)', russian: 'мера, мероприятие', example: 'Die Regierung hat neue Maßnahmen ergriffen.' },
    { german: 'die Gesetzgebung', russian: 'законодательство', example: 'Die Gesetzgebung wird im Parlament beschlossen.' },
    { german: 'die Reform (-en)', russian: 'реформа', example: 'Eine umfassende Reform des Bildungssystems ist notwendig.' },
    { german: 'die Verantwortung', russian: 'ответственность', example: 'Jeder trägt Verantwortung für die Gesellschaft.' },
  ],
  readingText: `
Die politische Partizipation der Bürger ist ein Grundpfeiler jeder funktionierenden Demokratie. Sie manifestiert sich nicht nur in der Teilnahme an Wahlen, sondern auch im zivilgesellschaftlichen Engagement, in der Mitgliedschaft in politischen Parteien oder Interessengruppen sowie in der öffentlichen Meinungsäußerung. In einer Zeit, in der Desinformation und Populismus zunehmen, gewinnt die Fähigkeit der Bürger, politische Prozesse kritisch zu hinterfragen und sich aktiv an der Gestaltung der Gesellschaft zu beteiligen, noch an Bedeutung.

Die Herausforderungen moderner Gesellschaften sind komplex: Klimawandel, soziale Ungleichheit, digitale Transformation und internationale Konflikte erfordern durchdachte politische Antworten. Hierbei spielen nicht nur nationale Regierungen eine Rolle, sondern auch supranationale Organisationen und die Zivilgesellschaft selbst. Ein informierter Diskurs und die Bereitschaft zum Kompromiss sind unerlässlich, um tragfähige Lösungen zu finden.

Die Rolle der Medien in diesem Kontext ist ambivalent. Einerseits können sie als "vierte Gewalt" zur Aufklärung und Kontrolle beitragen, andererseits besteht die Gefahr der Manipulation und der Verbreitung einseitiger Darstellungen. Medienkompetenz, also die Fähigkeit, Informationen kritisch zu bewerten und Quellen zu überprüfen, ist daher eine Schlüsselqualifikation für mündige Bürger.
`,
  readingComprehensionExercises: [
    {
      id: 'c1-lexik-politik-gesellschaft-rq1',
      question: 'Was ist laut Text NICHT nur eine Form der politischen Partizipation?',
      options: [
        'Teilnahme an Wahlen',
        'Zivilgesellschaftliches Engagement',
        'Ausschließliches Verfolgen von Nachrichten in den Medien',
        'Mitgliedschaft in politischen Parteien'
      ],
      correctAnswer: 'Ausschließliches Verfolgen von Nachrichten in den Medien',
      explanation: 'Der Text nennt Wahlen, zivilgesellschaftliches Engagement, Mitgliedschaft in Parteien und öffentliche Meinungsäußerung als Formen der Partizipation.'
    },
    {
      id: 'c1-lexik-politik-gesellschaft-rq2',
      question: 'Welche Faktoren sind laut Text für die Lösung komplexer gesellschaftlicher Herausforderungen unerlässlich?',
      options: [
        'Schnelle Entscheidungen ohne Kompromisse',
        'Ein informierter Diskurs und Kompromissbereitschaft',
        'Die alleinige Verantwortung nationaler Regierungen',
        'Die Reduzierung der Medienvielfalt'
      ],
      correctAnswer: 'Ein informierter Diskurs und Kompromissbereitschaft',
      explanation: 'Im Text heißt es: "Ein informierter Diskurs und die Bereitschaft zum Kompromiss sind unerlässlich, um tragfähige Lösungen zu finden."'
    },
    {
      id: 'c1-lexik-politik-gesellschaft-rq3',
      question: 'Wie wird die Rolle der Medien im politischen Kontext im Text beschrieben?',
      options: [
        'Ausschließlich positiv als "vierte Gewalt"',
        'Ausschließlich negativ als Manipulationsinstrument',
        'Ambivalent, sowohl als Aufklärungsinstanz als auch mit Manipulationsgefahr',
        'Als unbedeutend für die politische Meinungsbildung'
      ],
      correctAnswer: 'Ambivalent, sowohl als Aufklärungsinstanz als auch mit Manipulationsgefahr',
      explanation: 'Der Text beschreibt die Rolle der Medien als ambivalent: "Einerseits können sie ... zur Aufklärung und Kontrolle beitragen, andererseits besteht die Gefahr der Manipulation..."'
    }
  ],
  exercises: [
    {
      id: 'c1-lexik-politik-gesellschaft-ex1',
      type: 'multiple_choice',
      question: 'Какое слово означает "правительство"?',
      options: ['das Parlament', 'die Partei', 'die Regierung', 'der Staat'],
      correctAnswer: 'die Regierung',
      explanation: '"Die Regierung" означает "правительство".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Viele Menschen ___ für soziale Gerechtigkeit."',
      sentenceParts: ['Viele Menschen ', ' für soziale Gerechtigkeit.'],
      correctAnswer: 'kämpfen', // или 'setzen sich ein'
      explanation: '"Kämpfen für" (бороться за) или "sich einsetzen für" (выступать за) подходят по смыслу.',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Важно уважать права человека."',
      prompt: 'Важно уважать права человека.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist wichtig, die Menschenrechte zu respektieren.',
      explanation: '"Права человека" - "die Menschenrechte (Pl.)". "Уважать" - "respektieren" или "achten".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-ex4',
      type: 'multiple_choice',
      question: 'Что означает "die Wahl" в политическом контексте?',
      options: ['закон', 'выборы', 'мнение', 'партия'],
      correctAnswer: 'выборы',
      explanation: '"Die Wahl" (мн.ч. "die Wahlen") означает "выборы".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-wp1',
      type: 'writing_prompt',
      question: 'Äußern Sie Ihre Meinung zu einer aktuellen sozialen oder politischen Herausforderung in Ihrem Land oder weltweit. Begründen Sie Ihre Ansicht. (ca. 5-7 Sätze)',
      suggestedLength: '5-7 Sätze'
    }
  ],
};
