
import type { Test } from '@/types';

export const testC1LexikInterkulturelleKommunikation: Test = {
  id: 'c1-lexik-interkulturelle-kommunikation-test',
  level: 'C1',
  topic: 'Межкультурная коммуникация (Тест)',
  testType: 'thematic',
  associatedLessonId: 'c1-lexik-interkulturelle-kommunikation',
  questions: [
    {
      id: 'c1-lexik-interkulturell-test-q1',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt die Fähigkeit, effektiv mit Menschen aus anderen Kulturen zu interagieren?',
      options: ['Die Globalisierung', 'Die interkulturelle Kompetenz', 'Das Stereotyp', 'Die Anpassung'],
      correctAnswer: 'Die interkulturelle Kompetenz',
      explanation: '"Die interkulturelle Kompetenz" ist die Fähigkeit zur erfolgreichen Interaktion mit Vertretern anderer Kulturen.',
    },
    {
      id: 'c1-lexik-interkulturell-test-q2',
      type: 'fill_in_the_blank',
      question: 'Unterschiedliche ___ (ценности) können in der interkulturellen Kommunikation zu Konflikten führen.',
      sentenceParts: ['Unterschiedliche ', ' können in der interkulturellen Kommunikation zu Konflikten führen.'],
      correctAnswer: 'Werte',
      explanation: '"Die Werte" (Plural) ist das passende Wort.',
    },
    {
      id: 'c1-lexik-interkulturell-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Важно избегать стереотипов и предрассудков."',
      prompt: 'Важно избегать стереотипов и предрассудков.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist wichtig, Stereotypen und Vorurteile zu vermeiden.',
      explanation: 'Ключевые слова: "Stereotypen", "Vorurteile", "vermeiden".',
    },
    {
      id: 'c1-lexik-interkulturell-test-q4',
      type: 'multiple_choice',
      question: 'Was ist KEINE Strategie für erfolgreiche interkulturelle Kommunikation?',
      options: [
        'Aktives Zuhören',
        'Beharren auf den eigenen kulturellen Normen',
        'Geduld und Flexibilität zeigen',
        'Umgangssprachliche Ausdrücke exzessiv verwenden'
      ],
      correctAnswer: 'Beharren auf den eigenen kulturellen Normen',
      explanation: 'Das Beharren auf eigenen Normen kann zu Missverständnissen führen; Flexibilität ist wichtig. Exzessive Umgangssprache kann auch hinderlich sein.',
    },
  ],
};

    