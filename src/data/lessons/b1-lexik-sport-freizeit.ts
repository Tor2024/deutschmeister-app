
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonB1LexikSportFreizeit: Lesson = {
  id: 'b1-lexik-sport-freizeit',
  level: 'B1',
  topic: 'Спорт и активный отдых (Sport und aktive Freizeitgestaltung)',
  theory: `
На уровне B1 важно уметь обсуждать свои спортивные предпочтения, говорить о пользе активного образа жизни и планировать различные виды активного досуга.

**Основные направления для обсуждения:**
- Популярные виды спорта и их правила (в общих чертах).
- Влияние спорта на здоровье и самочувствие.
- Планирование и описание активного отдыха (походы, велотуры, поездки).
- Обсуждение спортивных мероприятий.

**Полезные фразы:**
- *Welche Sportart treibst du gern?* (Каким видом спорта ты любишь заниматься?)
- *Ich gehe regelmäßig ins Fitnessstudio, um mich fit zu halten.* (Я регулярно хожу в фитнес-студию, чтобы поддерживать себя в форме.)
- *Am Wochenende planen wir eine Wanderung in den Bergen.* (На выходных мы планируем поход в горы.)
- *Mannschaftssportarten fördern den Teamgeist.* (Командные виды спорта способствуют командному духу.)
`,
  vocabulary: [
    { german: 'der Sport', russian: 'спорт', example: 'Sport ist gesund.' },
    { german: 'die Sportart (-en)', russian: 'вид спорта', example: 'Welche Sportart magst du am liebsten?' },
    { german: 'Sport treiben / Sport machen', russian: 'заниматься спортом', example: 'Man sollte regelmäßig Sport treiben.' },
    { german: 'trainieren', russian: 'тренироваться', example: 'Die Mannschaft trainiert jeden Tag.' },
    { german: 'sich fit halten (hält sich fit)', russian: 'поддерживать себя в форме', example: 'Er hält sich durch Joggen fit.' },
    { german: 'der Fußball', russian: 'футбол', example: 'Fußball ist in Deutschland sehr beliebt.' },
    { german: 'der Basketball', russian: 'баскетбол' },
    { german: 'das Tennis', russian: 'теннис' },
    { german: 'das Schwimmen', russian: 'плавание', example: 'Schwimmen ist gut für den Rücken.' },
    { german: 'das Radfahren', russian: 'езда на велосипеде', example: 'Radfahren in der Natur macht Spaß.' },
    { german: 'das Laufen / das Joggen', russian: 'бег / бег трусцой', example: 'Morgens gehe ich oft joggen.' },
    { german: 'das Skifahren', russian: 'катание на лыжах' },
    { german: 'das Wandern', russian: 'пеший туризм, поход', example: 'Wandern in den Alpen ist wunderschön.' },
    { german: 'das Fitnessstudio (-s)', russian: 'фитнес-студия, тренажерный зал', example: 'Sie geht dreimal pro Woche ins Fitnessstudio.' },
    { german: 'der Wettbewerb (-e)', russian: 'соревнование, конкурс', example: 'Er hat an einem wichtigen Wettbewerb teilgenommen.' },
    { german: 'die Mannschaft (-en)', russian: 'команда', example: 'Unsere Mannschaft hat gewonnen.' },
    { german: 'gewinnen (gewinnt, gewann, hat gewonnen)', russian: 'выигрывать, побеждать', example: 'Wer wird das Spiel gewinnen?' },
    { german: 'verlieren (verliert, verlor, hat verloren)', russian: 'проигрывать, терять', example: 'Leider haben wir das Spiel verloren.' },
    { german: 'aktiv', russian: 'активный', example: 'Ein aktiver Lebensstil ist wichtig.' },
    { german: 'die Freizeitgestaltung', russian: 'организация досуга' },
  ],
  readingText: `
Regelmäßige körperliche Aktivität ist ein wesentlicher Bestandteil eines gesunden Lebensstils. Sport hilft nicht nur dabei, das körperliche Wohlbefinden zu steigern und Krankheiten vorzubeugen, sondern wirkt sich auch positiv auf die psychische Gesundheit aus. Viele Menschen finden im Sport einen Ausgleich zum oft stressigen Berufsalltag und eine Möglichkeit, den Kopf freizubekommen.
Die Auswahl an Sportarten ist riesig, sodass für fast jeden Geschmack und jede körperliche Verfassung etwas dabei ist. Ob Mannschaftssportarten wie Fußball oder Volleyball, die den Teamgeist fördern, Einzelsportarten wie Schwimmen oder Laufen, die Ausdauer trainieren, oder entspannende Aktivitäten wie Yoga oder Pilates – wichtig ist vor allem die Regelmäßigkeit.
Neben dem organisierten Sport im Verein oder Fitnessstudio bieten sich auch zahlreiche Möglichkeiten für aktive Freizeitgestaltung in der Natur an. Wanderungen, Fahrradtouren oder einfach lange Spaziergänge sind nicht nur gut für den Körper, sondern ermöglichen es auch, die Umgebung zu erkunden und die Schönheit der Natur zu genießen. Die Planung solcher Aktivitäten kann bereits Vorfreude wecken und zu einem positiven Erlebnis beitragen.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-lexik-sport-freizeit-rq1',
      type: 'multiple_choice',
      question: 'Welche positiven Auswirkungen hat Sport laut Text neben dem körperlichen Wohlbefinden?',
      options: [
        'Er führt immer zu beruflichem Erfolg.',
        'Er wirkt sich positiv auf die psychische Gesundheit aus.',
        'Er garantiert den Sieg bei Wettbewerben.',
        'Er ist nur in Fitnessstudios effektiv.'
      ],
      correctAnswer: 'Er wirkt sich positiv auf die psychische Gesundheit aus.',
      explanation: 'Im Text steht: "...wirkt sich auch positiv auf die psychische Gesundheit aus."',
    },
    {
      id: 'b1-lexik-sport-freizeit-rq2',
      type: 'multiple_choice',
      question: 'Was wird im Text als besonders wichtig für die positive Wirkung von Sport betont?',
      options: [
        'Die Wahl einer möglichst teuren Sportart.',
        'Das Training nur mit professionellen Trainern.',
        'Die Regelmäßigkeit der sportlichen Betätigung.',
        'Die Teilnahme an möglichst vielen Wettbewerben.'
      ],
      correctAnswer: 'Die Regelmäßigkeit der sportlichen Betätigung.',
      explanation: 'Der Text sagt: "...wichtig ist vor allem die Regelmäßigkeit."',
    },
  ],
  exercises: [
    {
      id: 'b1-lexik-sport-freizeit-ex1',
      type: 'multiple_choice',
      question: 'Was bedeutet "die Mannschaft"?',
      options: ['тренер', 'соревнование', 'команда', 'стадион'],
      correctAnswer: 'команда',
      explanation: '"Die Mannschaft" bedeutet "команда".',
    },
    {
      id: 'b1-lexik-sport-freizeit-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный глагол: "Um fit zu bleiben, muss man regelmäßig ___."',
      sentenceParts: ['Um fit zu bleiben, muss man regelmäßig ', '.'],
      correctAnswer: 'trainieren', // или Sport treiben
      explanation: '"Trainieren" (тренироваться) или "Sport treiben" (заниматься спортом) подходят сюда.',
    },
    {
      id: 'b1-lexik-sport-freizeit-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы часто ходим в походы по выходным."',
      prompt: 'Мы часто ходим в походы по выходным.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir gehen am Wochenende oft wandern.',
      // Альтернатива: Wir machen am Wochenende oft Wanderungen.
      explanation: '"Ходить в походы" - "wandern gehen" или "Wanderungen machen".',
    },
    {
      id: 'b1-lexik-sport-freizeit-wp1',
      type: 'writing_prompt',
      question: 'Welche Sportart mögen Sie am liebsten und warum? Oder wie verbringen Sie Ihre Freizeit aktiv? (Beschreiben Sie in 3-4 Sätzen)',
      suggestedLength: '3-4 Sätze',
      explanation: 'Какой вид спорта вам нравится больше всего и почему? Или как вы активно проводите свободное время? (Опишите в 3-4 предложениях)',
    }
  ],
};
