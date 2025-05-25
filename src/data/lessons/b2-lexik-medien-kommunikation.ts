
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB2LexikMedienKommunikation: Lesson = {
  id: 'b2-lexik-medien-kommunikation',
  level: 'B2',
  topic: 'СМИ и коммуникация (Medien und Kommunikation)',
  theory: `
На уровне B2 важно уметь анализировать роль средств массовой информации, понимать их влияние на общество и обсуждать различные аспекты современной коммуникации, включая вызовы цифровой эпохи.

**Ключевые аспекты для обсуждения:**
- Различные типы СМИ и их характеристики.
- Влияние социальных сетей и интернета на потребление информации.
- Проблема дезинформации и фейковых новостей.
- Важность медиаграмотности.
- Стили и формы коммуникации.

**Примеры фраз для дискуссии:**
- *Die Medienlandschaft hat sich durch das Internet grundlegend verändert.* (Медиаландшафт коренным образом изменился благодаря Интернету.)
- *Es ist entscheidend, Informationen aus verschiedenen Quellen zu beziehen und kritisch zu prüfen.* (Крайне важно получать информацию из различных источников и критически ее проверять.)
- *Soziale Netzwerke können sowohl zur Verbreitung von Nachrichten als auch von Desinformation beitragen.* (Социальные сети могут способствовать как распространению новостей, так и дезинформации.)
`,
  vocabulary: [
    { german: 'die Medien (Pl.)', russian: 'СМИ, средства массовой информации', example: 'Die Rolle der Medien in der Demokratie ist unbestritten.' },
    { german: 'die Presse', russian: 'пресса', example: 'Die Pressefreiheit ist ein hohes Gut.' },
    { german: 'der Rundfunk', russian: 'радиовещание и телевидение', example: 'Der öffentlich-rechtliche Rundfunk hat einen Bildungsauftrag.' },
    { german: 'die Zeitung (-en)', russian: 'газета', example: 'Ich lese jeden Morgen die Zeitung online.' },
    { german: 'die Zeitschrift (-en)', russian: 'журнал', example: 'Es gibt Fachzeitschriften für fast jedes Thema.' },
    { german: 'die Nachrichten (Pl.)', russian: 'новости', example: 'Die aktuellen Nachrichten sind oft besorgniserregend.' },
    { german: 'die Berichterstattung (-en)', russian: 'освещение событий, репортаж', example: 'Die Berichterstattung über das Ereignis war sehr ausführlich.' },
    { german: 'der Journalist (-en, -en) / die Journalistin (-nen)', russian: 'журналист / журналистка', example: 'Journalisten müssen objektiv berichten.' },
    { german: 'die Quelle (-n)', russian: 'источник (информации)', example: 'Es ist wichtig, die Quellen seiner Informationen zu überprüfen.' },
    { german: 'die Desinformation / Falschmeldung (-en)', russian: 'дезинформация / фейковая новость', example: 'Die Verbreitung von Desinformation ist ein ernstes Problem.' },
    { german: 'die Meinungsfreiheit', russian: 'свобода слова, свобода мнений', example: 'Meinungsfreiheit ist ein Grundrecht.' },
    { german: 'die Zensur', russian: 'цензура', example: 'In einigen Ländern gibt es staatliche Zensur der Medien.' },
    { german: 'die Medienkompetenz', russian: 'медиаграмотность', example: 'Medienkompetenz sollte bereits in der Schule gefördert werden.' },
    { german: 'soziale Netzwerke (Pl.)', russian: 'социальные сети', example: 'Der Einfluss von sozialen Netzwerken wächst stetig.' },
    { german: 'der Algorithmus (Algorithmen)', russian: 'алгоритм', example: 'Algorithmen bestimmen oft, welche Inhalte wir sehen.' },
    { german: 'kommunizieren', russian: 'общаться, коммуницировать', example: 'Effektive Kommunikation ist der Schlüssel zum Erfolg.' },
    { german: 'sich äußern (zu + D)', russian: 'высказываться (по поводу чего-л.)', example: 'Er äußerte sich kritisch zu den Plänen.' },
    { german: 'diskutieren (über + A)', russian: 'дискутировать (о чём-л.)', example: 'Wir haben lange über die Vor- und Nachteile diskutiert.' },
    { german: 'argumentieren', russian: 'аргументировать', example: 'Sie konnte ihre Position gut argumentieren.' },
    { german: 'überzeugen (von + D)', russian: 'убеждать (в чём-л.)', example: 'Es war schwer, ihn von unserer Idee zu überzeugen.' },
  ],
  readingText: `
Die digitale Revolution hat die Art und Weise, wie wir Informationen konsumieren und miteinander kommunizieren, tiefgreifend verändert. Soziale Medien und Nachrichtenportale bieten einen schnellen, oft ungefilterten Zugang zu Ereignissen aus aller Welt. Diese unmittelbare Verfügbarkeit birgt jedoch auch die Gefahr einer Informationsüberflutung und der rasanten Verbreitung von Falschmeldungen.
Traditionelle Medien wie Zeitungen und öffentlich-rechtlicher Rundfunk sehen sich zunehmend mit wirtschaftlichen Herausforderungen und einem Vertrauensverlust in Teilen der Bevölkerung konfrontiert. Gleichzeitig wächst ihre Verantwortung, als Korrektiv zu fungieren und qualitativ hochwertigen, überprüften Journalismus anzubieten. Die Unterscheidung zwischen seriöser Berichterstattung und gezielter Desinformation wird für den einzelnen Bürger immer schwieriger, aber auch immer wichtiger.
Eine ausgeprägte Medienkompetenz, die kritisches Denken, Quellenprüfung und das Verständnis für die Funktionsweise von Medienmechanismen einschließt, ist daher unerlässlich. Nur so können Individuen informierte Entscheidungen treffen und aktiv an einer demokratischen Gesellschaft teilhaben, die auf einem faktenbasierten Diskurs beruht. Die Herausforderung besteht darin, die Chancen der digitalen Kommunikation zu nutzen, ohne ihren Risiken unvorbereitet gegenüberzustehen.
`,
  readingComprehensionExercises: [
    {
      id: 'b2-lexik-medien-rq1',
      question: 'Was ist eine der Gefahren der unmittelbaren Verfügbarkeit von Informationen im digitalen Zeitalter laut Text?',
      options: [
        'Eine Verlangsamung des Nachrichtenkonsums.',
        'Eine Informationsüberflutung und die schnelle Verbreitung von Falschmeldungen.',
        'Ein Mangel an verschiedenen Nachrichtenquellen.',
        'Eine Stärkung des Vertrauens in alle Medien.'
      ],
      correctAnswer: 'Eine Informationsüberflutung und die schnelle Verbreitung von Falschmeldungen.',
      explanation: 'Der Text nennt: "...birgt jedoch auch die Gefahr einer Informationsüberflutung und der rasanten Verbreitung von Falschmeldungen."',
    },
    {
      id: 'b2-lexik-medien-rq2',
      question: 'Welche Rolle kommt traditionellen Medien laut Text in der aktuellen Medienlandschaft zu?',
      options: [
        'Sie haben keine relevante Funktion mehr.',
        'Ihre Hauptaufgabe ist die schnelle Verbreitung von Kurznachrichten.',
        'Sie sollen als Korrektiv fungieren und qualitativ hochwertigen Journalismus anbieten.',
        'Sie sind wirtschaftlich stärker als je zuvor.'
      ],
      correctAnswer: 'Sie sollen als Korrektiv fungieren und qualitativ hochwertigen Journalismus anbieten.',
      explanation: 'Im Text steht: "Gleichzeitig wächst ihre Verantwortung, als Korrektiv zu fungieren und qualitativ hochwertigen, überprüften Journalismus anzubieten."',
    },
  ],
  exercises: [
    {
      id: 'b2-lexik-medien-wp1',
      type: 'writing_prompt',
      question: 'Diskutieren Sie die Vor- und Nachteile von sozialen Netzwerken für die politische Meinungsbildung. (ca. 4-5 Sätze)',
      suggestedLength: '4-5 Sätze',
    },
    {
      id: 'b2-lexik-medien-mc1',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt die Fähigkeit, Medieninhalte kritisch zu analysieren und zu bewerten?',
      options: ['Zensur', 'Desinformation', 'Medienkompetenz', 'Berichterstattung'],
      correctAnswer: 'Medienkompetenz',
      explanation: '"Medienkompetenz" ist die Fähigkeit, Medien kritisch zu verstehen und zu nutzen.'
    },
  ],
};
