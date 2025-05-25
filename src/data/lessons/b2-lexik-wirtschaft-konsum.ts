
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB2LexikWirtschaftKonsum: Lesson = {
  id: 'b2-lexik-wirtschaft-konsum',
  level: 'B2',
  topic: 'Экономика и потребительство (Wirtschaft und Konsum)',
  theory: `
На уровне B2 важно уметь обсуждать основные экономические концепции, понимать влияние потребительского поведения на рынок и анализировать такие явления, как спрос, предложение, инфляция и реклама.

**Ключевые аспекты для обсуждения:**
- Основные экономические понятия: рынок, спрос, предложение, цена.
- Потребительское поведение и факторы, влияющие на него.
- Роль рекламы и маркетинга.
- Экономические проблемы: инфляция, безработица.
- Личные финансы: бюджет, сбережения, расходы.

**Примеры фраз для дискуссии:**
- *Das Verhältnis von Angebot und Nachfrage beeinflusst die Preisgestaltung maßgeblich.* (Соотношение спроса и предложения существенно влияет на ценообразование.)
- *Werbung zielt oft darauf ab, Bedürfnisse bei den Konsumenten zu wecken.* (Реклама часто нацелена на то, чтобы пробудить потребности у потребителей.)
- *Eine hohe Inflationsrate kann die Kaufkraft der Bevölkerung erheblich schmälern.* (Высокий уровень инфляции может значительно снизить покупательную способность населения.)
`,
  vocabulary: [
    { german: 'die Wirtschaft', russian: 'экономика, хозяйство', example: 'Die deutsche Wirtschaft ist eine der stärksten in Europa.' },
    { german: 'der Konsum', russian: 'потребление', example: 'Nachhaltiger Konsum gewinnt an Bedeutung.' },
    { german: 'der Konsument (-en) / der Verbraucher (-)', russian: 'потребитель', example: 'Der informierte Konsument trifft bewusste Entscheidungen.' },
    { german: 'der Markt (Märkte)', russian: 'рынок', example: 'Der freie Markt basiert auf Wettbewerb.' },
    { german: 'das Angebot (-e)', russian: 'предложение (товаров, услуг)', example: 'Das Angebot an Bioprodukten ist gestiegen.' },
    { german: 'die Nachfrage (nach + D)', russian: 'спрос (на что-л.)', example: 'Die Nachfrage nach Elektroautos wächst.' },
    { german: 'der Preis (-e)', russian: 'цена', example: 'Die Preise für Energie sind stark gestiegen.' },
    { german: 'die Kosten (Pl.)', russian: 'затраты, расходы, издержки', example: 'Wir müssen die Produktionskosten senken.' },
    { german: 'der Gewinn (-e)', russian: 'прибыль, выигрыш', example: 'Das Unternehmen erzielte einen hohen Gewinn.' },
    { german: 'der Verlust (-e)', russian: 'убыток, потеря', example: 'Die Firma machte im letzten Quartal Verluste.' },
    { german: 'die Inflation (-en)', russian: 'инфляция', example: 'Die Inflation führt zu steigenden Lebenshaltungskosten.' },
    { german: 'die Kaufkraft', russian: 'покупательная способность', example: 'Die Kaufkraft der Währung hat abgenommen.' },
    { german: 'die Werbung (-en)', russian: 'реклама', example: 'Werbung beeinflusst unsere Kaufentscheidungen.' },
    { german: 'werben (wirbt, warb, hat geworben) für + A', russian: 'рекламировать что-л.', example: 'Das Unternehmen wirbt für sein neues Produkt.' },
    { german: 'die Marke (-n)', russian: 'бренд, торговая марка', example: 'Diese Marke ist weltweit bekannt.' },
    { german: 'die Qualität (-en)', russian: 'качество', example: 'Die Qualität der Produkte ist sehr hoch.' },
    { german: 'die Dienstleistung (-en)', russian: 'услуга', example: 'Viele Unternehmen bieten heutzutage auch Dienstleistungen an.' },
    { german: 'sparen', russian: 'экономить, копить', example: 'Es ist wichtig, Geld für die Zukunft zu sparen.' },
    { german: 'ausgeben (gibt aus, gab aus, hat ausgegeben) für + A', russian: 'тратить (на что-л.)', example: 'Wofür gibst du dein Geld aus?' },
    { german: 'das Einkommen (-)', russian: 'доход', example: 'Sein monatliches Einkommen ist nicht sehr hoch.' },
    { german: 'die Steuer (-n)', russian: 'налог', example: 'Jeder Bürger muss Steuern zahlen.' },
    { german: 'der Wettbewerb', russian: 'конкуренция', example: 'Der Wettbewerb auf dem Markt ist hart.' },
  ],
  readingText: `
Das Konsumverhalten der Menschen hat sich in den letzten Jahrzehnten stark gewandelt. Früher stand oft die reine Bedürfnisdeckung im Vordergrund, während heute Faktoren wie Markenimage, Nachhaltigkeit und individuelle Selbstverwirklichung eine immer größere Rolle spielen. Die Werbung versucht, diese Trends aufzugreifen und emotionale Verbindungen zu Produkten herzustellen, die über deren reinen Nutzwert hinausgehen.
Gleichzeitig wächst das Bewusstsein für die Folgen eines unreflektierten Konsums. Themen wie Überproduktion, Ressourcenverschwendung und die Arbeitsbedingungen in globalen Lieferketten rücken stärker in den Fokus der öffentlichen Diskussion. Dies führt zu einer steigenden Nachfrage nach fair gehandelten und ökologisch produzierten Waren.
Für Unternehmen bedeutet dies, dass sie sich nicht mehr nur auf den Preis oder die Qualität ihrer Produkte verlassen können. Transparenz in der Herstellung, soziale Verantwortung und ein glaubwürdiges Nachhaltigkeitsmanagement werden zunehmend zu wichtigen Wettbewerbsfaktoren. Der mündige Verbraucher von heute informiert sich, vergleicht und ist bereit, für Produkte, die seinen Werten entsprechen, auch mehr zu bezahlen. Diese Entwicklung stellt eine Herausforderung, aber auch eine Chance für eine zukunftsfähige Wirtschaft dar.
`,
  readingComprehensionExercises: [
    {
      id: 'b2-lexik-wirtschaft-konsum-rq1',
      question: 'Welche Faktoren spielen heute beim Konsumverhalten eine größere Rolle als früher, laut Text?',
      options: [
        'Nur der Preis und die Verfügbarkeit der Produkte.',
        'Markenimage, Nachhaltigkeit und individuelle Selbstverwirklichung.',
        'Ausschließlich die Haltbarkeit der Waren.',
        'Der Einfluss traditioneller Medien.'
      ],
      correctAnswer: 'Markenimage, Nachhaltigkeit und individuelle Selbstverwirklichung.',
      explanation: 'Im Text steht: "...während heute Faktoren wie Markenimage, Nachhaltigkeit und individuelle Selbstverwirklichung eine immer größere Rolle spielen."',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-rq2',
      question: 'Was wird im Text als eine Folge des wachsenden Bewusstseins für unreflektierten Konsum genannt?',
      options: [
        'Ein Rückgang der Produktvielfalt.',
        'Eine sinkende Bedeutung von Qualität.',
        'Eine steigende Nachfrage nach fair gehandelten und ökologisch produzierten Waren.',
        'Eine Abnahme des Interesses an Unternehmensverantwortung.'
      ],
      correctAnswer: 'Eine steigende Nachfrage nach fair gehandelten und ökologisch produzierten Waren.',
      explanation: 'Der Text sagt: "Dies führt zu einer steigenden Nachfrage nach fair gehandelten und ökologisch produzierten Waren."',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-rq3',
      question: 'Was sind laut Text zunehmend wichtige Wettbewerbsfaktoren für Unternehmen?',
      options: [
        'Nur der niedrigste Preis.',
        'Aggressive Werbung und schnelle Produktzyklen.',
        'Transparenz, soziale Verantwortung und Nachhaltigkeitsmanagement.',
        'Die Konzentration auf rein nationale Märkte.'
      ],
      correctAnswer: 'Transparenz, soziale Verantwortung und Nachhaltigkeitsmanagement.',
      explanation: 'Im Text steht: "Transparenz in der Herstellung, soziale Verantwortung und ein glaubwürdiges Nachhaltigkeitsmanagement werden zunehmend zu wichtigen Wettbewerbsfaktoren."',
    }
  ],
  exercises: [
    {
      id: 'b2-lexik-wirtschaft-konsum-ex1',
      type: 'multiple_choice',
      question: 'Was bedeutet "die Nachfrage"?',
      options: ['предложение (товара)', 'цена', 'спрос', 'прибыль'],
      correctAnswer: 'спрос',
      explanation: '"Die Nachfrage" bedeutet "спрос".',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-ex2',
      type: 'fill_in_the_blank',
      question: 'Wenn die Preise allgemein steigen, spricht man von ___.',
      sentenceParts: ['Wenn die Preise allgemein steigen, spricht man von ', '.'],
      correctAnswer: 'Inflation',
      explanation: '"Inflation" ist der allgemeine Anstieg der Preise.',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Реклама влияет на наши решения о покупке."',
      prompt: 'Реклама влияет на наши решения о покупке.',
      languageDirection: 'to_german',
      correctAnswer: 'Werbung beeinflusst unsere Kaufentscheidungen.',
      explanation: '"Werbung" (реклама), "beeinflusst" (влияет), "Kaufentscheidungen" (решения о покупке).',
    },
    {
      id: 'b2-lexik-wirtschaft-konsum-wp1',
      type: 'writing_prompt',
      question: 'Beschreiben Sie Ihr eigenes Konsumverhalten. Worauf achten Sie beim Einkaufen? Welche Rolle spielt Werbung für Sie? (ca. 4-5 Sätze)',
      suggestedLength: '4-5 Sätze',
    }
  ],
};

