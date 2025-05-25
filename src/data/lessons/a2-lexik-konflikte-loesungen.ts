
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikKonflikteLoesungen: Lesson = {
  id: 'a2-lexik-konflikte-loesungen',
  level: 'A2',
  topic: 'Простые конфликты и решения в быту',
  theory: `
В этом уроке мы научимся описывать простые бытовые проблемы и конфликты, а также говорить о способах их решения. Это важная лексика для повседневного общения.

**Как описать проблему:**
- *Ich habe ein Problem.* (У меня проблема.)
- *Mein Handy ist kaputt.* (Мой телефон сломан.)
- *Der Fernseher funktioniert nicht.* (Телевизор не работает.)
- *Ich habe meinen Schlüssel verloren.* (Я потерял(а) свой ключ.)
- *Es ist zu laut hier.* (Здесь слишком громко.)

**Как попросить о помощи или предложить решение:**
- *Kannst du mir bitte helfen?* (Ты можешь мне, пожалуйста, помочь?)
- *Was sollen wir machen?* (Что нам делать?)
- *Wir können versuchen, es zu reparieren.* (Мы можем попробовать это починить.)
- *Ich entschuldige mich.* (Я извиняюсь.)
- *Es tut mir leid.* (Мне очень жаль.)
`,
  vocabulary: [
    { german: 'das Problem (-e)', russian: 'проблема', example: 'Ich habe ein Problem mit meinem Computer.' },
    { german: 'der Streit (-igkeiten)', russian: 'ссора, спор', example: 'Die Kinder hatten einen kleinen Streit.' },
    { german: 'das Missverständnis (-se)', russian: 'недоразумение', example: 'Das war nur ein Missverständnis.' },
    { german: 'kaputt', russian: 'сломанный, неисправный', example: 'Meine Uhr ist kaputt.' },
    { german: 'funktionieren', russian: 'работать, функционировать (о технике)', example: 'Der alte Drucker funktioniert noch.' },
    { german: 'verlieren (verliert, verlor, hat verloren)', russian: 'терять', example: 'Ich habe oft meine Schlüssel verloren.' },
    { german: 'zu laut', russian: 'слишком громко', example: 'Die Musik ist zu laut.' },
    { german: 'zu spät', russian: 'слишком поздно', example: 'Es ist schon zu spät.' },
    { german: 'helfen (hilft, half, hat geholfen) (+D)', russian: 'помогать (кому-л.)', example: 'Kannst du mir bitte helfen?' },
    { german: 'reparieren', russian: 'чинить, ремонтировать', example: 'Er kann Fahrräder reparieren.' },
    { german: 'suchen', russian: 'искать', example: 'Ich suche meine Brille.' },
    { german: 'finden (findet, fand, hat gefunden)', russian: 'находить', example: 'Hast du deinen Ring gefunden?' },
    { german: 'sprechen (spricht, sprach, hat gesprochen) (mit+D, über+A)', russian: 'говорить, разговаривать (с, о)', example: 'Wir müssen darüber sprechen.' },
    { german: 'sich entschuldigen (für+A)', russian: 'извиняться (за что-л.)', example: 'Er hat sich für seinen Fehler entschuldigt.' },
    { german: 'die Lösung (-en)', russian: 'решение (проблемы)', example: 'Wir brauchen eine schnelle Lösung.' },
    { german: 'Es tut mir leid.', russian: 'Мне очень жаль.' },
  ],
  readingText: `
Anna und ihr Nachbar Herr Müller hatten ein kleines Problem. Herr Müllers Musik war oft sehr laut am Abend. Anna konnte nicht schlafen.
Eines Tages sprach Anna mit Herrn Müller. Sie sagte: "Entschuldigung, Herr Müller, Ihre Musik ist manchmal sehr laut. Ich kann dann nicht schlafen."
Herr Müller war überrascht. Er sagte: "Oh, das tut mir sehr leid, Anna! Das wusste ich nicht. Ich werde in Zukunft leiser sein."
Anna war froh. Sie sagte: "Vielen Dank, Herr Müller! Das ist sehr nett von Ihnen."
Seitdem ist die Musik von Herrn Müller nicht mehr zu laut, und Anna kann gut schlafen.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-konflikte-rq1',
      question: 'Какая проблема была у Анны?',
      options: ['Ее телевизор был сломан.', 'Музыка ее соседа была слишком громкой.', 'Она потеряла свои ключи.', 'Ее сосед был недружелюбен.'],
      correctAnswer: 'Музыка ее соседа была слишком громкой.',
      explanation: 'В тексте сказано: "Herr Müllers Musik war oft sehr laut am Abend. Anna konnte nicht schlafen."',
    },
    {
      id: 'a2-lexik-konflikte-rq2',
      question: 'Как отреагировал господин Мюллер, когда Анна рассказала ему о проблеме?',
      options: ['Он рассердился.', 'Он сказал, что это не его проблема.', 'Он извинился и пообещал быть тише.', 'Он проигнорировал ее.'],
      correctAnswer: 'Он извинился и пообещал быть тише.',
      explanation: 'В тексте: "Oh, das tut mir sehr leid, Anna! Das wusste ich nicht. Ich werde in Zukunft leiser sein."',
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-konflikte-ex1',
      type: 'multiple_choice',
      question: 'Что означает "kaputt"?',
      options: ['новый', 'дорогой', 'сломанный', 'тихий'],
      correctAnswer: 'сломанный',
      explanation: '"Kaputt" означает "сломанный" или "неисправный".',
    },
    {
      id: 'a2-lexik-konflikte-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Es tut mir ___, das war ein Missverständnis."',
      sentenceParts: ['Es tut mir ', ', das war ein Missverständnis.'],
      correctAnswer: 'leid',
      explanation: 'Устойчивое выражение "Es tut mir leid" означает "Мне очень жаль".',
    },
    {
      id: 'a2-lexik-konflikte-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы должны найти решение."',
      prompt: 'Мы должны найти решение.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir müssen eine Lösung finden.',
      explanation: '"Решение" - "die Lösung". "Найти решение" - "eine Lösung finden".',
    },
    {
      id: 'a2-lexik-konflikte-wp1',
      type: 'writing_prompt',
      question: 'Опишите небольшую проблему, которая у вас когда-то была, и как вы ее решили (2-3 предложения).',
      suggestedLength: '2-3 предложения',
    },
  ],
};
