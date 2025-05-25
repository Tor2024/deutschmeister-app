
import type { Lesson } from '@/types';

export const lessonB1LexikUmweltWetter: Lesson = {
  id: 'b1-lexik-umwelt-wetter',
  level: 'B1',
  topic: 'Окружающая среда и погода (Umwelt und Wetter)',
  theory: `
В этом уроке мы изучим лексику, связанную с погодой и основными понятиями защиты окружающей среды. Умение обсуждать эти темы становится все более важным.

**Основные вопросы о погоде:**
- *Wie ist das Wetter heute/morgen?* (Какая сегодня/завтра погода?)
- *Wie viel Grad haben wir?* (Сколько у нас градусов?)
- *Scheint die Sonne? Regnet es? Schneit es?* (Солнце светит? Дождь идет? Снег идет?)

**Обсуждение окружающей среды:**
- *Was können wir für den Umweltschutz tun?* (Что мы можем сделать для защиты окружающей среды?)
- *Mülltrennung ist wichtig.* (Сортировка мусора важна.)
`,
  vocabulary: [
    { german: 'das Wetter', russian: 'погода', example: 'Das Wetter ist heute schön.' },
    { german: 'die Sonne', russian: 'солнце', example: 'Die Sonne scheint.' },
    { german: 'scheinen (scheint, schien, hat geschienen)', russian: 'светить' },
    { german: 'der Regen', russian: 'дождь', example: 'Ich mag den Regen im Sommer.' },
    { german: 'regnen (es regnet)', russian: 'идти (о дожде)', example: 'Es regnet schon den ganzen Tag.' },
    { german: 'die Wolke (-n)', russian: 'облако, туча', example: 'Der Himmel ist voller Wolken.' },
    { german: 'wolkig / bewölkt', russian: 'облачно', example: 'Heute ist es wolkig.' },
    { german: 'der Wind (-e)', russian: 'ветер', example: 'Der Wind ist heute stark.' },
    { german: 'windig', russian: 'ветрено' },
    { german: 'der Schnee', russian: 'снег', example: 'Im Winter liegt hier viel Schnee.' },
    { german: 'schneien (es schneit)', russian: 'идти (о снеге)', example: 'Es fängt an zu schneien.' },
    { german: 'kalt', russian: 'холодный, холодно', example: 'Mir ist kalt.' },
    { german: 'warm', russian: 'теплый, тепло', example: 'Das Wasser ist angenehm warm.' },
    { german: 'heiß', russian: 'жаркий, горячий', example: 'Im Sommer kann es sehr heiß werden.' },
    { german: 'kühl', russian: 'прохладный', example: 'Ein kühler Wind weht.' },
    { german: 'die Temperatur (-en)', russian: 'температура', example: 'Die Temperatur steigt.' },
    { german: 'der Grad (-e)', russian: 'градус', example: 'Wir haben heute 25 Grad.' },
    { german: 'der Wetterbericht (-e)', russian: 'прогноз погоды', example: 'Was sagt der Wetterbericht für morgen?' },
    { german: 'die Umwelt', russian: 'окружающая среда', example: 'Wir müssen unsere Umwelt schützen.' },
    { german: 'der Umweltschutz', russian: 'защита окружающей среды', example: 'Umweltschutz geht uns alle an.' },
    { german: 'verschmutzen', russian: 'загрязнять', example: 'Fabriken verschmutzen die Luft.' },
    { german: 'die Umweltverschmutzung', russian: 'загрязнение окружающей среды' },
    { german: 'sauber', russian: 'чистый', example: 'Die Luft hier ist sehr sauber.' },
    { german: 'der Müll', russian: 'мусор', example: 'Wirf den Müll in den Eimer.' },
    { german: 'Müll trennen', russian: 'сортировать мусор', example: 'In Deutschland muss man den Müll trennen.' },
    { german: 'das Recycling', russian: 'переработка отходов', example: 'Recycling ist gut für die Umwelt.' },
    { german: 'Energie sparen', russian: 'экономить энергию', example: 'Man kann Energie sparen, indem man das Licht ausschaltet.' },
    { german: 'umweltfreundlich', russian: 'экологичный, безопасный для окружающей среды', example: 'Ich versuche, umweltfreundliche Produkte zu kaufen.' },
  ],
  readingText: `
Das Wetter spielt eine große Rolle in unserem Alltag. Es beeinflusst unsere Kleidung, unsere Aktivitäten und sogar unsere Stimmung. In Deutschland sind die vier Jahreszeiten – Frühling, Sommer, Herbst und Winter – deutlich ausgeprägt, und jede hat ihren eigenen Charakter. Im Frühling wird es wärmer, die Natur erwacht und die Tage werden länger. Der Sommer kann heiß und sonnig sein, ideal für Aktivitäten im Freien. Der Herbst bringt bunte Blätter und oft mildere Temperaturen, aber auch mehr Regen und Wind. Im Winter kann es kalt werden und schneien, besonders in den Bergregionen.

Neben dem täglichen Wetter rückt auch das Thema Klimawandel und Umweltschutz immer mehr in den Fokus. Extreme Wetterereignisse wie Hitzewellen oder starke Regenfälle nehmen zu. Viele Menschen versuchen daher, umweltbewusster zu leben. Dazu gehört zum Beispiel, Energie zu sparen, Müll zu trennen und zu recyceln oder weniger Fleisch zu essen. Jeder kleine Beitrag kann helfen, unsere Umwelt für zukünftige Generationen zu erhalten.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-lexik-umwelt-wetter-rq1',
      question: 'Welche Jahreszeit wird im Text als ideal für Aktivitäten im Freien beschrieben?',
      options: ['Frühling', 'Sommer', 'Herbst', 'Winter'],
      correctAnswer: 'Sommer',
      explanation: 'Im Text steht: "Der Sommer kann heiß und sonnig sein, ideal für Aktivitäten im Freien."',
    },
    {
      id: 'b1-lexik-umwelt-wetter-rq2',
      question: 'Was gehört laut Text zu einem umweltbewussten Leben?',
      options: ['Mehr Fleisch essen', 'Weniger Müll produzieren und mehr Energie verbrauchen', 'Energie sparen und Müll trennen', 'Weniger Zeit im Freien verbringen'],
      correctAnswer: 'Energie sparen und Müll trennen',
      explanation: 'Der Text nennt als Beispiele für umweltbewusstes Leben: "...Energie zu sparen, Müll zu trennen und zu recyceln..."',
    },
  ],
  exercises: [
    {
      id: 'b1-lexik-umwelt-wetter-ex1',
      type: 'multiple_choice',
      question: 'Wie fragt man nach der heutigen Temperatur?',
      options: ['Wie scheint die Sonne?', 'Regnet es heute?', 'Wie viel Grad haben wir?', 'Ist es windig?'],
      correctAnswer: 'Wie viel Grad haben wir?',
      explanation: 'Die Frage "Wie viel Grad haben wir?" используется для уточнения температуры.',
    },
    {
      id: 'b1-lexik-umwelt-wetter-ex2',
      type: 'fill_in_the_blank',
      question: 'Im Winter kann es oft ___ und es ist kalt.',
      sentenceParts: ['Im Winter kann es oft ', ' und es ist kalt.'],
      correctAnswer: 'schneien',
      explanation: 'Im Winter schneit es oft (идет снег).',
    },
    {
      id: 'b1-lexik-umwelt-wetter-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы должны защищать природу."',
      prompt: 'Мы должны защищать природу.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir müssen die Natur schützen.',
      explanation: '"Защищать природу" - "die Natur schützen".',
    },
    {
      id: 'b1-lexik-umwelt-wetter-wp1',
      type: 'writing_prompt',
      question: 'Beschreiben Sie das typische Wetter in Ihrer Lieblingsjahreszeit oder erklären Sie, warum Umweltschutz für Sie wichtig ist. (3-4 Sätze)',
      suggestedLength: '3-4 Sätze',
    },
  ],
};

    