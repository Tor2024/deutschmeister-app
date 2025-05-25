
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB2LexikPolitik: Lesson = {
  id: 'b2-lexik-politik',
  level: 'B2',
  topic: 'Политика: демократия, выборы, миграция',
  theory: `
На уровне B2 важно уметь обсуждать более сложные аспекты политической жизни, понимать основные концепции демократии, избирательных процессов и актуальные вопросы, связанные с миграцией.

**Ключевые аспекты для обсуждения:**
- Политические системы (демократия, диктатура).
- Функционирование парламента, правительства, политических партий.
- Выборы и избирательное право.
- Причины и последствия миграции.
- Интеграция мигрантов.

**Примеры фраз для дискуссии:**
- *Die Gewaltenteilung ist ein fundamentales Prinzip der Demokratie.* (Разделение властей - фундаментальный принцип демократии.)
- *Die Wahlbeteiligung war bei den letzten Wahlen relativ niedrig.* (Явка избирателей на последних выборах была относительно низкой.)
- *Die Integration von Flüchtlingen stellt viele Länder vor große Herausforderungen.* (Интеграция беженцев ставит многие страны перед большими вызовами.)
`,
  vocabulary: [
    { german: 'die Politik', russian: 'политика' },
    { german: 'die Demokratie (-n)', russian: 'демократия', example: 'In einer Demokratie hat das Volk die Macht.' },
    { german: 'die Regierung (-en)', russian: 'правительство', example: 'Die Regierung trifft wichtige Entscheidungen.' },
    { german: 'das Parlament (-e)', russian: 'парламент', example: 'Das Parlament verabschiedet Gesetze.' },
    { german: 'die Partei (-en)', russian: 'партия (политическая)', example: 'Es gibt viele verschiedene politische Parteien.' },
    { german: 'die Wahl (-en)', russian: 'выборы; выбор', example: 'Die nächsten Wahlen finden im Herbst statt.' },
    { german: 'wählen', russian: 'выбирать, голосовать', example: 'Jeder Bürger über 18 darf wählen.' },
    { german: 'der Staat (-en)', russian: 'государство', example: 'Der Staat sorgt für Sicherheit.' },
    { german: 'die Verfassung (-en)', russian: 'конституция', example: 'Die Grundrechte sind in der Verfassung verankert.' },
    { german: 'das Gesetz (-e)', russian: 'закон', example: 'Das Parlament hat ein neues Gesetz beschlossen.' },
    { german: 'die Migration', russian: 'миграция', example: 'Migration ist ein globales Thema.' },
    { german: 'der Migrant (-en, -en) / die Migrantin (-nen)', russian: 'мигрант / мигрантка' },
    { german: 'der Flüchtling (-e)', russian: 'беженец', example: 'Viele Flüchtlinge suchen Schutz in Europa.' },
    { german: 'die Integration', russian: 'интеграция', example: 'Die Integration von Zuwanderern ist eine wichtige Aufgabe.' },
    { german: 'das Asyl', russian: 'убежище (политическое)', example: 'Er hat in Deutschland Asyl beantragt.' },
    { german: 'die Debatte (-n)', russian: 'дебаты, дискуссия', example: 'Es gab eine lebhafte Debatte über das Thema.' },
    { german: 'die Menschenrechte (Pl.)', russian: 'права человека', example: 'Die Menschenrechte müssen respektiert werden.' },
    { german: 'die Opposition (-en)', russian: 'оппозиция', example: 'Die Opposition kritisierte die Regierung.' },
    { german: 'die Koalition (-en)', russian: 'коалиция', example: 'Die Regierung ist eine Koalition aus drei Parteien.' },
  ],
  readingText: `
Demokratie als Staatsform basiert auf dem Prinzip der Volkssouveränität, das heißt, alle Staatsgewalt geht vom Volke aus. Dies manifestiert sich in regelmäßigen, freien und gleichen Wahlen, bei denen die Bürger ihre Vertreter für das Parlament bestimmen. Das Parlament wiederum wählt in vielen Systemen den Regierungschef und kontrolliert die Arbeit der Regierung. Ein weiteres Kennzeichen der Demokratie ist die Gewaltenteilung in Legislative (gesetzgebende Gewalt), Exekutive (ausführende Gewalt) und Judikative (rechtsprechende Gewalt), um Machtmissbrauch vorzubeugen.
Die Herausforderungen für moderne Demokratien sind vielfältig. Dazu gehören die zunehmende politische Polarisierung, die Verbreitung von Desinformation in sozialen Medien, die geringe Wahlbeteiligung bestimmter Bevölkerungsgruppen und der Einfluss von Lobbygruppen. Auch globale Phänomene wie die Migration stellen demokratische Gesellschaften vor komplexe Aufgaben, die sowohl humanitäre Aspekte als auch Fragen der Integration und der gesellschaftlichen Ressourcen betreffen. Eine lebendige Zivilgesellschaft und informierte Bürger sind unerlässlich, um diesen Herausforderungen begegnen zu können.
`,
  readingComprehensionExercises: [
    {
      id: 'b2-lexik-politik-rq1',
      question: 'Worauf basiert Demokratie als Staatsform laut Text?',
      options: [
        'Auf der Macht einer einzelnen Partei.',
        'Auf dem Prinzip der Volkssouveränität.',
        'Auf der Kontrolle der Medien durch die Regierung.',
        'Auf der Abschaffung von Wahlen.'
      ],
      correctAnswer: 'Auf dem Prinzip der Volkssouveränität.',
      explanation: 'Im Text steht: "Demokratie als Staatsform basiert auf dem Prinzip der Volkssouveränität..."',
    },
    {
      id: 'b2-lexik-politik-rq2',
      question: 'Was ist KEINE im Text genannte Herausforderung für moderne Demokratien?',
      options: [
        'Politische Polarisierung.',
        'Verbreitung von Desinformation.',
        'Übermäßiges Wirtschaftswachstum.',
        'Geringe Wahlbeteiligung bestimmter Gruppen.'
      ],
      correctAnswer: 'Übermäßiges Wirtschaftswachstum.',
      explanation: 'Übermäßiges Wirtschaftswachstum wird im Text nicht als direkte Herausforderung für Demokratien genannt, im Gegensatz zu den anderen Optionen.',
    },
  ],
  exercises: [
    {
      id: 'b2-lexik-politik-wp1',
      type: 'writing_prompt',
      question: 'Diskutieren Sie die Rolle von Wahlen in einer Demokratie oder die Herausforderungen der Integration von Migranten in Ihrem Land. (ca. 4-6 Sätze)',
      suggestedLength: '4-6 Sätze',
    },
    {
      id: 'b2-lexik-politik-mc1',
      type: 'multiple_choice',
      question: 'Welcher Begriff bezeichnet die gesetzgebende Gewalt im Staat?',
      options: ['Exekutive', 'Judikative', 'Legislative', 'Föderative'],
      correctAnswer: 'Legislative',
      explanation: 'Die Legislative ist die gesetzgebende Gewalt, typischerweise das Parlament.'
    },
  ],
};
