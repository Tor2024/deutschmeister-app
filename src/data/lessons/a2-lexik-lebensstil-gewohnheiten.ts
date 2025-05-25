
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikLebensstilGewohnheiten: Lesson = {
  id: 'a2-lexik-lebensstil-gewohnheiten',
  level: 'A2',
  topic: 'Образ жизни и привычки (Lebensstil und Gewohnheiten)',
  theory: `
В этом уроке мы поговорим о том, как описывать свой образ жизни и привычки. Это поможет вам рассказывать о своем дне, о том, что вы делаете регулярно, и о том, что полезно или вредно для здоровья.

**Основные слова и фразы:**
- **die Gewohnheit (-en)** - привычка
- **der Lebensstil (-e)** - образ жизни
- **täglich** - ежедневно
- **regelmäßig** - регулярно
- **gesund leben** - вести здоровый образ жизни
- **sich ernähren** - питаться
- **Sport treiben** - заниматься спортом
- **genug schlafen** - достаточно спать
- **Stress vermeiden** - избегать стресса

**Примеры:**
- *Meine tägliche Gewohnheit ist es, morgens Kaffee zu trinken.* (Моя ежедневная привычка - пить кофе по утрам.)
- *Er versucht, einen gesunden Lebensstil zu führen.* (Он старается вести здоровый образ жизни.)
- *Ich treibe regelmäßig Sport.* (Я регулярно занимаюсь спортом.)
`,
  vocabulary: [
    { german: 'die Gewohnheit (-en)', russian: 'привычка', example: 'Rauchen ist eine schlechte Gewohnheit.' },
    { german: 'der Lebensstil (-e)', russian: 'образ жизни', example: 'Ein aktiver Lebensstil ist gesund.' },
    { german: 'täglich', russian: 'ежедневно', example: 'Ich putze täglich meine Zähne.' },
    { german: 'wöchentlich', russian: 'еженедельно', example: 'Wir gehen wöchentlich einkaufen.' },
    { german: 'oft', russian: 'часто', example: 'Er besucht oft seine Großeltern.' },
    { german: 'manchmal', russian: 'иногда', example: 'Manchmal gehe ich ins Kino.' },
    { german: 'selten', russian: 'редко', example: 'Ich esse selten Fleisch.' },
    { german: 'nie', russian: 'никогда', example: 'Sie trinkt nie Alkohol.' },
    { german: 'regelmäßig', russian: 'регулярно', example: 'Es ist wichtig, regelmäßig Sport zu treiben.' },
    { german: 'gesund leben', russian: 'вести здоровый образ жизни', example: 'Viele Menschen möchten gesund leben.' },
    { german: 'sich ernähren (gesund/ungesund)', russian: 'питаться (здорово/нездорово)', example: 'Wie ernährst du dich?' },
    { german: 'die Ernährung', russian: 'питание', example: 'Eine ausgewogene Ernährung ist wichtig.' },
    { german: 'Sport treiben/machen', russian: 'заниматься спортом', example: 'Welchen Sport treibst du gern?' },
    { german: 'genug schlafen (schläft genug)', russian: 'достаточно спать', example: 'Kinder sollten genug schlafen.' },
    { german: 'der Stress', russian: 'стресс', example: 'Zu viel Arbeit verursacht Stress.' },
    { german: 'Stress vermeiden (vermeidet Stress)', russian: 'избегать стресса', example: 'Versuche, Stress zu vermeiden.' },
    { german: 'rauchen', russian: 'курить', example: 'Rauchen ist ungesund.' },
    { german: 'Alkohol trinken', russian: 'пить алкоголь', example: 'Er trinkt selten Alkohol.' },
    { german: 'früh aufstehen (steht früh auf)', russian: 'рано вставать', example: 'Ich stehe jeden Tag früh auf.' },
    { german: 'spät ins Bett gehen', russian: 'поздно ложиться спать', example: 'Am Wochenende gehe ich oft spät ins Bett.' },
    { german: 'Zeit verbringen (mit + D)', russian: 'проводить время (с кем-л.)', example: 'Ich verbringe gern Zeit mit meiner Familie.' },
  ],
  readingText: `
Marias Lebensstil ist ziemlich gesund. Sie steht jeden Morgen um sieben Uhr auf und macht zuerst ein paar Dehnübungen. Zum Frühstück isst sie meistens Haferbrei mit Früchten und trinkt grünen Tee. Sie fährt mit dem Fahrrad zur Arbeit, auch wenn das Wetter nicht immer gut ist. Das ist ihre tägliche Dosis Sport.
Während der Arbeit versucht Maria, jede Stunde eine kleine Pause zu machen und sich zu bewegen. Mittags isst sie oft einen Salat oder Gemüse mit Hühnchen. Sie trinkt viel Wasser über den Tag verteilt.
Nach der Arbeit geht sie zweimal pro Woche ins Fitnessstudio. Abends kocht sie gern selbst und achtet darauf, nicht zu spät zu essen. Bevor sie schlafen geht, liest sie oft ein Buch, um sich zu entspannen. Sie glaubt, dass regelmäßige Bewegung und eine ausgewogene Ernährung wichtig für ein langes und gesundes Leben sind.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-lebensstil-rq1',
      question: 'Wie fährt Maria zur Arbeit?',
      options: ['Mit dem Auto', 'Mit dem Bus', 'Mit dem Fahrrad', 'Zu Fuß'],
      correctAnswer: 'Mit dem Fahrrad',
      explanation: 'Im Text steht: "Sie fährt mit dem Fahrrad zur Arbeit..."',
    },
    {
      id: 'a2-lexik-lebensstil-rq2',
      question: 'Was macht Maria zweimal pro Woche nach der Arbeit?',
      options: ['Sie trifft Freunde.', 'Sie geht einkaufen.', 'Sie geht ins Fitnessstudio.', 'Sie sieht fern.'],
      correctAnswer: 'Sie geht ins Fitnessstudio.',
      explanation: 'Im Text steht: "Nach der Arbeit geht sie zweimal pro Woche ins Fitnessstudio."',
    },
  ],
  exercises: [
    {
      id: 'a2-lexik-lebensstil-ex1',
      type: 'multiple_choice',
      question: 'Was bedeutet "regelmäßig"?',
      options: ['иногда', 'редко', 'регулярно', 'никогда'],
      correctAnswer: 'регулярно',
      explanation: '"Regelmäßig" означает "регулярно".',
    },
    {
      id: 'a2-lexik-lebensstil-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Um gesund zu bleiben, sollte man genug ___ (спать)."',
      sentenceParts: ['Um gesund zu bleiben, sollte man genug ', '.'],
      correctAnswer: 'schlafen',
      explanation: '"Спать" по-немецки "schlafen".',
    },
    {
      id: 'a2-lexik-lebensstil-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я стараюсь избегать стресса."',
      prompt: 'Я стараюсь избегать стресса.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich versuche, Stress zu vermeiden.',
      explanation: '"Избегать стресса" - "Stress vermeiden".',
    },
    {
      id: 'a2-lexik-lebensstil-wp1',
      type: 'writing_prompt',
      question: 'Beschreiben Sie Ihren typischen Tagesablauf oder eine wichtige Gewohnheit. (2-3 Sätze)',
      suggestedLength: '2-3 Sätze',
    },
  ],
};
