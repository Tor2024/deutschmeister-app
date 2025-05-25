
import type { Lesson } from '@/types';

// --- Урок B1: Придаточные следствия (Konsekutivsätze) ---
export const lessonB1Konsekutivsaetze: Lesson = {
  id: 'b1-konsekutivsaetze',
  level: 'B1',
  topic: 'Придаточные следствия (Konsekutivsätze)',
  theory: `Придаточные предложения следствия (Konsekutivsätze) указывают на следствие или результат действия, состояния или качества, описанного в главном предложении.

**1. Конструкция \`so..., dass...\` (так..., что...)**
   Это наиболее частый способ выражения следствия. В главном предложении перед прилагательным или наречием, которое характеризует причину следствия, ставится слово \`so\` (так). Придаточное предложение следствия вводится союзом \`dass\` (что).
   *   *Das Wetter war **so** schlecht, **dass** wir nicht spazieren gehen konnten.* (Погода была такой плохой, что мы не могли пойти гулять.)
   *   *Er spricht **so** schnell, **dass** ich ihn kaum verstehe.* (Он говорит так быстро, что я его едва понимаю.)
   *   *Sie hat **so** viel gearbeitet, **dass** sie sehr müde ist.* (Она так много работала, что очень устала.)

**2. Конструкция \`solch-..., dass...\` (такой..., что...)**
   Если \`so\` должно было бы относиться к существительному (т.е. "такой + существительное"), то вместо \`so\` используется \`solch-\`. Местоимение \`solch-\` склоняется как прилагательное перед этим существительным.
   *   *Es war **solch ein** schöner Tag, **dass** wir den ganzen Tag draußen verbrachten.* (Был такой прекрасный день, что мы провели весь день на улице.)
   *   *Er hatte **solchen** Hunger, **dass** er drei Portionen aß.* (У него был такой голод, что он съел три порции.)
   *   *Wir hatten **solches** Glück, **dass** wir die letzten Karten bekamen.* (Нам так повезло / У нас была такая удача, что мы получили последние билеты.)

**3. Более формальные варианты: \`dermaßen..., dass...\` / \`derart..., dass...\` (настолько..., что...)**
   Эти конструкции являются синонимами \`so..., dass...\` и используются чаще в письменной или более формальной речи.
   *   *Der Lärm war **dermaßen** laut, **dass** niemand schlafen konnte.* (Шум был настолько громким, что никто не мог спать.)
   *   *Die Aufgabe war **derart** kompliziert, **dass** wir Hilfe brauchten.* (Задание было настолько сложным, что нам понадобилась помощь.)

**4. Конструкция \`(zu)..., als dass...\` (слишком..., чтобы...)**
   Эта конструкция выражает негативное следствие. Она указывает, что из-за слишком высокой степени какого-либо качества (выраженного через \`zu + прилагательное/наречие\` в главном предложении), следствие, описанное в придаточном предложении (вводимом \`als dass\`), не может произойти или нецелесообразно. В придаточном предложении с \`als dass\` часто используется Konjunktiv II.
   *   *Er ist **zu** müde, **als dass** er jetzt noch arbeiten könnte.* (Он слишком устал, чтобы он мог сейчас еще работать. / Он слишком устал, чтобы работать сейчас.)
   *   *Das Wasser ist **zu** kalt, **als dass** man darin schwimmen könnte.* (Вода слишком холодная, чтобы в ней можно было плавать.)
   Эту конструкцию также можно выразить через \`so..., dass ... nicht ...\`:
   *   *Er ist **so** müde, **dass** er jetzt nicht mehr arbeiten kann.*

**5. Порядок слов:**
   В придаточных предложениях следствия, вводимых союзами \`dass\` или \`als dass\`, спрягаемый глагол всегда стоит **в самом конце предложения**.

Запоминание этих конструкций поможет вам точнее выражать причинно-следственные связи в немецком языке.`,
  vocabulary: [
    { german: 'so..., dass', russian: 'так..., что', example: 'Er war so müde, dass er einschlief.' },
    { german: 'solch-, solche, solches', russian: 'такой, такая, такое', example: 'Es war ein solcher Sturm, dass Bäume umfielen.' },
    { german: 'dermaßen', russian: 'настолько, до такой степени', example: 'Sie war dermaßen aufgeregt, dass sie kein Wort sagen konnte.' },
    { german: 'derart', russian: 'настолько, такого рода', example: 'Der Film war derart langweilig, dass viele Zuschauer gingen.' },
    { german: 'zu ..., als dass', russian: 'слишком ..., чтобы', example: 'Das Auto ist zu teuer, als dass ich es kaufen könnte.' },
    { german: 'die Folge (-n)', russian: 'следствие, результат', example: 'Die Folge seines Handelns war unerwartet.' },
    { german: 'das Ergebnis (-se)', russian: 'результат, итог', example: 'Das Ergebnis der Untersuchung war eindeutig.' },
    { german: 'die Konsequenz (-en)', russian: 'последствие, вывод', example: 'Das Rauchen hat ernste gesundheitliche Konsequenzen.' },
    { german: 'müde', russian: 'усталый', example: 'Nach der Arbeit bin ich immer sehr müde.' },
    { german: 'schnell', russian: 'быстрый, быстро', example: 'Er fährt so schnell, dass es gefährlich ist.' },
    { german: 'kalt', russian: 'холодный', example: 'Es ist so kalt, dass die Flüsse zufrieren.' },
  ],
  exercises: [
    {
      id: 'b1-konsekutiv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант для соединения предложений: "Das Essen war sehr lecker. Ich habe viel gegessen."',
      options: [
        'Das Essen war so lecker, dass ich viel gegessen habe.',
        'Das Essen war zu lecker, als dass ich viel gegessen hätte.',
        'Das Essen war solches lecker, dass ich viel gegessen habe.'
      ],
      correctAnswer: 'Das Essen war so lecker, dass ich viel gegessen habe.',
      explanation: 'Конструкция "so + прилагательное (lecker), dass..." используется для выражения следствия.',
    },
    {
      id: 'b1-konsekutiv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящие слова: Er hatte ___ Durst, ___ er eine ganze Flasche Wasser trank.',
      sentenceParts: ['Er hatte ', ' Durst, ', ' er eine ganze Flasche Wasser trank.'],
      correctAnswer: 'solchen, dass',
      explanation: 'При существительном ("Durst" - мужской род) используется "solchen" (склоняется как прилагательное в Akkusativ). Придаточное вводится союзом "dass".',
    },
    {
      id: 'b1-konsekutiv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Фильм был настолько скучным, что я заснул."',
      prompt: 'Фильм был настолько скучным, что я заснул.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Film war so langweilig, dass ich eingeschlafen bin.',
      // Альтернатива: Der Film war dermaßen langweilig, dass ich eingeschlafen bin.
      explanation: 'Используется конструкция "so + прилагательное (langweilig), dass...".',
    },
    {
      id: 'b1-konsekutiv-ex4',
      type: 'multiple_choice',
      question: 'Какая конструкция используется для выражения негативного следствия "слишком..., чтобы..."?',
      options: ['so...dass', 'solch-...dass', 'zu..., als dass...'],
      correctAnswer: 'zu..., als dass...',
      explanation: 'Конструкция "zu + Adjektiv/Adverb, als dass..." выражает, что что-то невозможно или нецелесообразно из-за высокой степени качества.',
    },
    {
      id: 'b1-konsekutiv-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Das Buch ist ___ kompliziert, ___ ich es ohne Wörterbuch verstehen könnte.',
      sentenceParts: ['Das Buch ist ', ' kompliziert, ', ' ich es ohne Wörterbuch verstehen könnte.'],
      correctAnswer: 'zu, als dass',
      explanation: 'Здесь выражается, что книга слишком сложная, чтобы понять ее без словаря. Используется "zu..., als dass...".',
    },
  ],
};
