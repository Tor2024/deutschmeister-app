
import type { Lesson } from '@/types';

// --- Урок B1: Инфинитивные конструкции с 'zu' (Infinitiv mit zu) ---
export const lessonB1InfinitivMitZu: Lesson = {
  id: 'b1-infinitiv-mit-zu',
  level: 'B1',
  topic: "Инфинитивные конструкции с 'zu' (Infinitiv mit zu)",
  theory: `Инфинитивные конструкции с частицей \`zu\` (Infinitiv mit zu) широко используются в немецком языке для выражения различных зависимых действий или состояний. Они часто заменяют придаточные предложения, делая речь более лаконичной.

**1. Когда используется \`zu\` + Infinitiv?**

   *   **После определенных глаголов:** Многие глаголы требуют после себя инфинитива с частицей \`zu\`.
       *   \`anfangen\`, \`beginnen\` (начинать): *Er fängt an, Deutsch **zu lernen**.*
       *   \`aufhören\` (прекращать): *Sie hört auf, **zu rauchen**.*
       *   \`versuchen\` (пытаться): *Ich versuche, dich **zu verstehen**.*
       *   \`planen\`, \`vorhaben\` (планировать, намереваться): *Wir planen, nächstes Jahr **zu reisen**.*
       *   \`hoffen\` (надеяться): *Ich hoffe, dich bald wieder**zusehen**.* (отделяемая приставка)
       *   \`vergessen\` (забывать): *Er hat vergessen, die Tür ab**zuschließen**.* (отделяемая приставка)
       *   \`versprechen\` (обещать): *Sie verspricht, pünktlich **zu sein**.*
       *   \`bitten\` (просить): *Ich bitte dich, mir **zu helfen**.*
       *   \`empfehlen\` (рекомендовать): *Der Arzt empfiehlt ihm, mehr Sport **zu treiben**.*
       *   \`scheinen\` (казаться): *Er scheint, müde **zu sein**.*
       *   \`brauchen\` (нуждаться – в значении "не нужно что-то делать" с отрицанием \`nicht\`): *Du brauchst nicht **zu warten**.* (Если \`brauchen\` используется без отрицания в значении "нуждаться в чем-то, чтобы сделать что-то", то \`zu\` используется: *Ich brauche Geld, um ein Auto **zu kaufen**.*)
       *   \`helfen\` (помогать): *Er hilft mir, die Aufgabe **zu lösen**.* (но часто и без \`zu\`: *Er hilft mir die Aufgabe lösen.*)
       *   \`lernen\` (учиться делать что-то): *Sie lernt, Klavier **zu spielen**.* (но часто и без \`zu\`: *Sie lernt Klavier spielen.*)

   *   **После выражений с существительным + \`haben\`:**
       *   \`Zeit haben\`: *Ich habe keine Zeit, ins Kino **zu gehen**.*
       *   \`Lust haben\`: *Hast du Lust, mit mir **zu schwimmen**?*
       *   \`Angst haben\`: *Das Kind hat Angst, allein **zu bleiben**.*
       *   \`die Absicht haben\` (иметь намерение): *Er hat die Absicht, ein Haus **zu bauen**.*
       *   \`die Möglichkeit haben\` (иметь возможность): *Wir haben die Möglichkeit, das Projekt **zu ändern**.*

   *   **После выражений с прилагательным/наречием + \`sein\` (часто с \`es ist\`):**
       *   \`wichtig sein\`: *Es ist wichtig, die Regeln **zu beachten**.*
       *   \`gut/schön sein\`: *Es ist schön, dich wieder**zusehen**.*
       *   \`schwierig/leicht sein\`: *Es ist schwierig, diese Aufgabe **zu lösen**.*
       *   \`möglich/unmöglich sein\`: *Ist es möglich, hier **zu parken**?*
       *   \`verboten/erlaubt sein\`: *Es ist verboten, hier Fotos **zu machen**.*
       *   \`gesund sein\`: *Es ist gesund, viel Obst **zu essen**.*

   *   **С конструкциями \`um...zu\`, \`ohne...zu\`, \`(an)statt...zu\`:**
       *   **um ... zu + Infinitiv** (для выражения цели – "чтобы"):
           *Ich lerne Deutsch, **um** in Deutschland studieren **zu** können.* (Я учу немецкий, чтобы мочь учиться в Германии.)
           *Sie spart Geld, **um** eine Reise **zu** machen.* (Она копит деньги, чтобы совершить путешествие.)
       *   **ohne ... zu + Infinitiv** (без того чтобы; не + деепричастие):
           *Er ging weg, **ohne** ein Wort **zu** sagen.* (Он ушел, не сказав ни слова.)
           *Sie hat die Prüfung bestanden, **ohne** viel **zu** lernen.* (Она сдала экзамен, не много учась.)
       *   **(an)statt ... zu + Infinitiv** (вместо того чтобы):
           ***Anstatt** fern**zu**sehen, solltest du lieber lernen.* (Вместо того чтобы смотреть телевизор, тебе следовало бы лучше учиться.)
           *Er spielt Computerspiele, **statt** seine Hausaufgaben **zu** machen.* (Он играет в компьютерные игры вместо того, чтобы делать домашние задания.)

**2. Позиция частицы \`zu\`:**
   - \`zu\` всегда стоит непосредственно **перед инфинитивом**.
     *Beispiel: Es ist Zeit, **zu gehen**.*
   - Если инфинитив имеет **отделяемую приставку**, то \`zu\` ставится **между отделяемой приставкой и основой глагола**. При этом все пишется слитно.
     *Beispiel: Ich versuche, das Fenster **aufzumachen**.* (auf + zu + machen)
     *Beispiel: Hör bitte auf, so laut **mitzusingen**!* (mit + zu + singen)
     *Beispiel: Er hat vor, morgen früh **aufzustehen**.* (auf + zu + stehen)

Инфинитивные конструкции с \`zu\` делают немецкую речь более гибкой и позволяют избегать сложных придаточных предложений.`,
  vocabulary: [
    { german: 'der Infinitiv mit zu', russian: 'инфинитив с частицей "zu"' },
    { german: 'anfangen (fängt an) ... zu', russian: 'начинать (что-л. делать)', example: 'Ich fange an, das Buch zu lesen.' },
    { german: 'aufhören ... zu', russian: 'прекращать (что-л. делать)', example: 'Er hört auf zu rauchen.' },
    { german: 'versuchen ... zu', russian: 'пытаться (что-л. сделать)', example: 'Sie versucht, pünktlich zu sein.' },
    { german: 'planen ... zu', russian: 'планировать (что-л. сделать)', example: 'Wir planen, Urlaub zu machen.' },
    { german: 'hoffen ... zu', russian: 'надеяться (что-л. сделать)', example: 'Ich hoffe, dich bald wiederzusehen.' },
    { german: 'vergessen (vergisst) ... zu', russian: 'забывать (что-л. сделать)', example: 'Ich habe vergessen, dich anzurufen.' },
    { german: 'versprechen (verspricht) ... zu', russian: 'обещать (что-л. сделать)', example: 'Er verspricht, mir zu helfen.' },
    { german: 'Zeit haben ... zu', russian: 'иметь время (что-л. сделать)', example: 'Hast du Zeit, mit mir zu sprechen?' },
    { german: 'Lust haben ... zu', russian: 'иметь желание (что-л. сделать)', example: 'Ich habe keine Lust, heute auszugehen.' },
    { german: 'Angst haben ... zu', russian: 'бояться (что-л. сделать)', example: 'Sie hat Angst, den Test nicht zu bestehen.' },
    { german: 'wichtig sein ... zu', russian: 'быть важным (сделать что-л.)', example: 'Es ist wichtig, gesund zu essen.' },
    { german: 'schwierig sein ... zu', russian: 'быть трудным (сделать что-л.)', example: 'Es ist schwierig, eine neue Sprache zu lernen.' },
    { german: 'um ... zu + Infinitiv', russian: 'чтобы (цель)', example: 'Er lernt, um einen guten Job zu finden.' },
    { german: 'ohne ... zu + Infinitiv', russian: 'без того чтобы; не (делая чего-л.)', example: 'Sie ging, ohne sich zu verabschieden.' },
    { german: '(an)statt ... zu + Infinitiv', russian: 'вместо того чтобы', example: 'Statt zu schlafen, hat er ferngesehen.' },
    { german: 'aufmachen (отделяемая)', russian: 'открывать', example: 'Ich vergesse oft, das Fenster aufzumachen.' },
    { german: 'zuhören (отделяемая)', russian: 'слушать (внимательно)', example: 'Es ist wichtig, gut zuzuhören.' },
  ],
  exercises: [
    {
      id: 'b1-infinitiv-zu-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: Er versucht, ___ (mich anrufen).',
      options: ['mich anrufen', 'mich zu anrufen', 'mich anzurufen', 'anzurufen mich'],
      correctAnswer: 'mich anzurufen',
      explanation: 'После глагола "versuchen" используется "zu + Infinitiv". У глагола "anrufen" отделяемая приставка "an-", поэтому "zu" ставится между приставкой и корнем: anzurufen.',
    },
    {
      id: 'b1-infinitiv-zu-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную конструкцию: Ich habe keine Lust, heute Abend ___ (ausgehen).',
      sentenceParts: ['Ich habe keine Lust, heute Abend ', '.'],
      correctAnswer: 'auszugehen',
      explanation: 'После "Lust haben" используется "zu + Infinitiv". У глагола "ausgehen" отделяемая приставка "aus-", поэтому "auszugehen".',
    },
    {
      id: 'b1-infinitiv-zu-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Важно учить новые слова."',
      prompt: 'Важно учить новые слова.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist wichtig, neue Wörter zu lernen.',
      explanation: 'Конструкция "es ist wichtig, ... zu tun".',
    },
    {
      id: 'b1-infinitiv-zu-ex4',
      type: 'multiple_choice',
      question: 'Какая конструкция используется для выражения цели "чтобы"?',
      options: ['ohne...zu', 'um...zu', '(an)statt...zu', 'es ist Zeit...zu'],
      correctAnswer: 'um...zu',
      explanation: '"um...zu + Infinitiv" используется для выражения цели.',
    },
    {
      id: 'b1-infinitiv-zu-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Sie ging einkaufen, ___ etwas für das Abendessen ___ (kaufen).',
      sentenceParts: ['Sie ging einkaufen, ', ' etwas für das Abendessen ', '.'],
      correctAnswer: 'um, zu kaufen',
      explanation: 'Для выражения цели "чтобы купить" используется "um ... zu kaufen".',
    },
    {
      id: 'b1-infinitiv-zu-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Он ушел, не сказав до свидания."',
      prompt: 'Он ушел, не сказав до свидания.',
      languageDirection: 'to_german',
      correctAnswer: 'Er ging weg, ohne sich zu verabschieden.',
      // Альтернатива: Er ging weg, ohne Tschüss zu sagen.
      explanation: 'Конструкция "ohne ... zu + Infinitiv" (sich verabschieden - прощаться).',
    },
  ],
};
