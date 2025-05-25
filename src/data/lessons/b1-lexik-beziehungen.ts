
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB1LexikBeziehungen: Lesson = {
  id: 'b1-lexik-beziehungen',
  level: 'B1',
  topic: 'Межличностные отношения (Zwischenmenschliche Beziehungen)',
  theory: `
В этом уроке мы изучим лексику, необходимую для обсуждения различных типов межличностных отношений, таких как дружба, семья и партнерские отношения. Мы научимся описывать качества людей, выражать чувства и обсуждать аспекты общения.

**Ключевые аспекты:**
- Описание друзей и членов семьи.
- Обсуждение качеств, важных в отношениях.
- Выражение симпатии, антипатии, доверия и других эмоций.
- Разрешение конфликтов и поддержание отношений.

**Полезные фразы:**
- *Was macht eine gute Freundschaft aus?* (Что характеризует хорошую дружбу?)
- *In meiner Familie legen wir viel Wert auf Ehrlichkeit.* (В моей семье мы придаем большое значение честности.)
- *Es ist wichtig, Kompromisse eingehen zu können.* (Важно уметь идти на компромиссы.)
`,
  vocabulary: [
    { german: 'die Beziehung (-en)', russian: 'отношение, связь', example: 'Sie haben eine gute Beziehung zueinander.' },
    { german: 'die Freundschaft (-en)', russian: 'дружба', example: 'Freundschaft muss man pflegen.' },
    { german: 'der Freund (-e) / die Freundin (-nen)', russian: 'друг / подруга', example: 'Mein bester Freund heißt Paul.' },
    { german: 'die Liebe', russian: 'любовь (без мн.ч.)', example: 'Liebe ist ein starkes Gefühl.' },
    { german: 'der Partner (-) / die Partnerin (-nen)', russian: 'партнер / партнерша', example: 'Sie sucht einen zuverlässigen Partner.' },
    { german: 'die Familie (-n)', russian: 'семья (углубленно)', example: 'Meine Familie unterstützt mich immer.' },
    { german: 'vertrauen (+D)', russian: 'доверять (кому-л.)', example: 'Ich vertraue dir vollkommen.' },
    { german: 'das Vertrauen', russian: 'доверие (без мн.ч.)', example: 'Vertrauen ist die Basis jeder Beziehung.' },
    { german: 'ehrlich', russian: 'честный', example: 'Ein ehrlicher Freund sagt die Wahrheit.' },
    { german: 'zuverlässig', russian: 'надежный', example: 'Sie ist eine sehr zuverlässige Kollegin.' },
    { german: 'hilfsbereit', russian: 'готовый помочь, отзывчивый', example: 'Unsere Nachbarn sind sehr hilfsbereit.' },
    { german: 'tolerant', russian: 'терпимый, толерантный', example: 'Man sollte tolerant gegenüber anderen Meinungen sein.' },
    { german: 'der Streit (-igkeiten)', russian: 'ссора, спор', example: 'Wir hatten gestern einen kleinen Streit.' },
    { german: 'sich streiten (streitet sich, stritt sich, hat sich gestritten)', russian: 'ссориться', example: 'Warum streitet ihr euch immer?' },
    { german: 'sich versöhnen', russian: 'мириться', example: 'Nach dem Streit haben sie sich schnell wieder versöhnt.' },
    { german: 'der Kompromiss (-e)', russian: 'компромисс', example: 'Manchmal muss man Kompromisse finden.' },
    { german: 'Verständnis haben für + A', russian: 'иметь понимание к (кому-л./чему-л.)', example: 'Ich habe Verständnis für deine Situation.' },
    { german: 'unterstützen', russian: 'поддерживать', example: 'Gute Freunde unterstützen sich gegenseitig.' },
    { german: 'zusammenhalten (hält zusammen)', russian: 'держаться вместе, быть сплоченными', example: 'In schwierigen Zeiten muss die Familie zusammenhalten.' },
  ],
  readingText: `
Was macht eine gute Freundschaft aus? Für viele Menschen ist Vertrauen die wichtigste Grundlage. Einem echten Freund kann man alles erzählen, ohne Angst haben zu müssen, verurteilt zu werden. Ehrlichkeit spielt ebenfalls eine große Rolle. Es ist besser, eine unangenehme Wahrheit zu hören, als in einer Lüge zu leben.
Gute Freunde sind auch füreinander da, wenn es schwierig wird. Sie bieten Unterstützung an, hören zu und helfen, Lösungen für Probleme zu finden. Gemeinsame Interessen und Hobbys können eine Freundschaft stärken, sind aber nicht immer entscheidend. Wichtiger ist oft, dass man ähnliche Werte teilt und sich gegenseitig respektiert, auch wenn man nicht immer derselben Meinung ist.
Natürlich gibt es auch in den besten Freundschaften mal Meinungsverschiedenheiten oder Streit. Entscheidend ist dann, wie man damit umgeht. Die Bereitschaft, Fehler einzugestehen, sich zu entschuldigen und Kompromisse zu finden, ist ein Zeichen wahrer Freundschaft. Letztendlich bereichern gute Freunde unser Leben und geben uns Halt und Freude.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-lexik-beziehungen-rq1',
      question: 'Was ist laut Text die wichtigste Grundlage für eine gute Freundschaft?',
      options: ['Gemeinsame Hobbys', 'Immer derselben Meinung sein', 'Vertrauen', 'Regelmäßige Geschenke'],
      correctAnswer: 'Vertrauen',
      explanation: 'Im Text steht: "Für viele Menschen ist Vertrauen die wichtigste Grundlage."',
    },
    {
      id: 'b1-lexik-beziehungen-rq2',
      question: 'Was ist laut Text wichtiger als gemeinsame Interessen in einer Freundschaft?',
      options: ['Ähnliche politische Ansichten', 'Gleicher Musikgeschmack', 'Ähnliche Werte und gegenseitiger Respekt', 'Häufige Treffen'],
      correctAnswer: 'Ähnliche Werte und gegenseitiger Respekt',
      explanation: 'Im Text heißt es: "Wichtiger ist oft, dass man ähnliche Werte teilt und sich gegenseitig respektiert..."',
    },
    {
      id: 'b1-lexik-beziehungen-rq3',
      question: 'Was ist ein Zeichen wahrer Freundschaft, wenn es zu Streit kommt?',
      options: ['Den Kontakt sofort abbrechen', 'Immer auf seiner Meinung bestehen', 'Die Bereitschaft, Fehler einzugestehen und Kompromisse zu finden', 'Den Streit ignorieren'],
      correctAnswer: 'Die Bereitschaft, Fehler einzugestehen und Kompromisse zu finden',
      explanation: 'Der Text nennt: "Die Bereitschaft, Fehler einzugestehen, sich zu entschuldigen und Kompromisse zu finden, ist ein Zeichen wahrer Freundschaft."',
    }
  ],
  exercises: [
    {
      id: 'b1-lexik-beziehungen-ex1',
      type: 'multiple_choice',
      question: 'Was bedeutet "zuverlässig"?',
      options: ['честный', 'ревнивый', 'надежный', 'терпимый'],
      correctAnswer: 'надежный',
      explanation: '"Zuverlässig" означает "надежный".',
    },
    {
      id: 'b1-lexik-beziehungen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "In einer guten Beziehung ist ___ (доверие) sehr wichtig."',
      sentenceParts: ['In einer guten Beziehung ist ', ' sehr wichtig.'],
      correctAnswer: 'Vertrauen',
      explanation: '"Доверие" по-немецки "das Vertrauen".',
    },
    {
      id: 'b1-lexik-beziehungen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы часто ссоримся, но быстро миримся."',
      prompt: 'Мы часто ссоримся, но быстро миримся.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir streiten uns oft, aber wir versöhnen uns schnell wieder.',
      explanation: '"Ссориться" - "sich streiten", "мириться" - "sich versöhnen".',
    },
    {
      id: 'b1-lexik-beziehungen-wp1',
      type: 'writing_prompt',
      question: 'Beschreiben Sie, was für Sie eine gute Freundschaft ausmacht oder welche Eigenschaften ein guter Partner haben sollte. (ca. 4-5 Sätze)',
      suggestedLength: '4-5 Sätze'
    }
  ],
};
