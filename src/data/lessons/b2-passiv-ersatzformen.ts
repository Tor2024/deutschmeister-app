
import type { Lesson } from '@/types';

// --- Урок B2: Альтернативы пассивному залогу (Passiv-Ersatzformen) ---
export const lessonB2PassivErsatzformen: Lesson = {
  id: 'b2-passiv-ersatzformen',
  level: 'B2',
  topic: 'Альтернативы пассивному залогу (Passiv-Ersatzformen)',
  theory: `Пассивный залог (Passiv) часто используется в немецком языке, но его чрезмерное употребление может сделать текст монотонным или тяжеловесным. Существуют различные конструкции, которые могут заменять пассив, придавая речи стилистическое разнообразие или смещая акценты. Эти конструкции называются Passiv-Ersatzformen или Passivumschreibungen.

**1. Конструкции с \`man\` (\`man\`-Sätze)**
   Это одна из самых распространенных альтернатив. Неопределенно-личное местоимение \`man\` указывает на то, что действие совершается неопределенным лицом или группой лиц.
   *   Пассив: *Es **wird gesagt**, dass Deutsch schwer ist.* (Говорится, что немецкий трудный.)
   *   Альтернатива: ***Man sagt**, dass Deutsch schwer ist.* (Говорят, что немецкий трудный.)
   *   Пассив: *Hier **darf nicht geraucht werden**.* (Здесь нельзя курить.)
   *   Альтернатива: *Hier **darf man nicht rauchen**.* (Здесь нельзя курить.)

**2. Возвратные глаголы с пассивным значением (Reflexive Verben mit passivischer Bedeutung)**
   Некоторые возвратные глаголы могут выражать пассивное значение, указывая на то, что что-то "делается само собой" или "легко поддается" какому-либо действию.
   *   *Das Buch **liest sich** gut.* (Книга хорошо читается. / Книгу легко читать.) (вместо: Das Buch kann gut gelesen werden.)
   *   *Die Tür **öffnet sich** schwer.* (Дверь открывается с трудом.) (вместо: Die Tür kann schwer geöffnet werden.)
   *   *Dieses Material **fühlt sich** weich **an**.* (Этот материал на ощупь мягкий.)

**3. Конструкция \`sein + zu + Infinitiv\`**
   Эта конструкция выражает необходимость (эквивалент пассива с \`müssen\`) или возможность (эквивалент пассива с \`können\`).
   *   *Die Aufgabe **ist zu lösen**.* (Задание должно быть решено / можно решить.) (вместо: Die Aufgabe muss/kann gelöst werden.)
   *   *Diese Regeln **sind zu beachten**.* (Эти правила должны соблюдаться.) (вместо: Diese Regeln müssen beachtet werden.)
   *   *Das Problem **ist** nicht leicht **zu verstehen**.* (Проблему нелегко понять.) (вместо: Das Problem kann nicht leicht verstanden werden.)

**4. Конструкция \`sich lassen + Infinitiv\`**
   Эта конструкция выражает возможность и часто переводится как "можно что-то сделать" или "что-то поддается какому-либо действию".
   *   *Das Problem **lässt sich lösen**.* (Проблему можно решить. / Проблема решаема.) (вместо: Das Problem kann gelöst werden.)
   *   *Der Text **lässt sich** leicht **übersetzen**.* (Текст легко переводится. / Текст можно легко перевести.)
   *   *Nicht alle Fragen **lassen sich** so einfach **beantworten**.* (Не на все вопросы можно так просто ответить.)

**5. Прилагательные на \`-bar\`, \`-lich\`, \`-wert\`, \`-fähig\` и др.**
   Многие прилагательные, образованные от глаголов, могут выражать пассивное значение возможности или долженствования.
   *   **-bar** (указывает на возможность):
       *   *lösbar* (решаемый) → *Das Problem ist lösbar.* (Проблема решаема.) (вместо: Das Problem kann gelöst werden.)
       *   *essbar* (съедобный), *sichtbar* (видимый), *machbar* (выполнимый)
   *   **-lich** (часто указывает на возможность или долженствование):
       *   *verständlich* (понятный) → *Der Text ist verständlich.* (Текст понятен.)
       *   *erhältlich* (имеющийся в продаже), *unglaublich* (невероятный)
   *   **-wert/-würdig** (достойный чего-л.):
       *   *lesenswert* (достойный прочтения) → *Das Buch ist lesenswert.* (Книга достойна прочтения.)
       *   *sehenswert* (достойный просмотра), *bemerkenswert* (замечательный)
   *   **-fähig** (способный к чему-л., часто в сложных словах):
       *   *transportfähig* (транспортабельный)

**6. Некоторые активные глаголы с пассивным значением в контексте**
   Некоторые глаголы в активном залоге могут иметь пассивное значение в зависимости от контекста, особенно когда описываются свойства предмета.
   *   *Das Kleid **verkauft sich** gut.* (Платье хорошо продается.)
   *   *Dieser Wein **trinkt sich** angenehm.* (Это вино пьется приятно.)

Использование этих альтернатив делает речь более разнообразной и естественной. Важно понимать, какой оттенок смысла передает каждая из конструкций.`,
  vocabulary: [
    { german: 'die Passiv-Ersatzform (-en)', russian: 'альтернатива пассивному залогу, описательная форма пассива' },
    { german: 'man (als Passiv-Ersatz)', russian: 'неопределенно-личное местоимение (как замена пассива)', example: 'Man muss die Regeln lernen.' },
    { german: 'sich lesen (liest sich)', russian: 'читаться (о книге, тексте)', example: 'Der Roman liest sich sehr spannend.' },
    { german: 'sich öffnen (öffnet sich)', russian: 'открываться (самостоятельно)', example: 'Die Tür öffnet sich automatisch.' },
    { german: 'sein + zu + Infinitiv', russian: 'быть (каким-л.) для выполнения (необходимость/возможность)', example: 'Die Aufgabe ist bis morgen zu erledigen.' },
    { german: 'sich lassen + Infinitiv', russian: 'позволять себя (что-л. делать), поддаваться (чему-л.)', example: 'Das Fenster lässt sich nicht öffnen.' },
    { german: '-bar (Suffix)', russian: 'суффикс прилагательных (возможность)', example: 'essbar (съедобный), trinkbar (питьевой)' },
    { german: '-lich (Suffix)', russian: 'суффикс прилагательных (возможность, свойство)', example: 'verständlich (понятный), erstaunlich (удивительный)' },
    { german: '-wert (Suffix)', russian: 'суффикс прилагательных (достойный)', example: 'sehenswert (достойный просмотра)' },
    { german: 'bekommen (passivähnlich)', russian: 'получать (иногда как замена пассива с дательным падежом)', example: 'Er bekommt ein Geschenk (von mir) geschickt. (вместо: Ein Geschenk wird ihm geschickt.)' },
    { german: 'erhalten (passivähnlich)', russian: 'получать (формально, как замена пассива)', example: 'Die Informationen sind zu erhalten. (Информацию можно получить.)' },
  ],
  exercises: [
    {
      id: 'b2-passiversatz-ex1',
      type: 'multiple_choice',
      question: 'Какая конструкция с \`man\` заменяет пассивное предложение: "Es wird viel diskutiert."?',
      options: ['Man diskutiert viel.', 'Man wird viel diskutieren.', 'Man hat viel diskutiert.'],
      correctAnswer: 'Man diskutiert viel.',
      explanation: 'Пассив в Präsens "Es wird diskutiert" соответствует активной конструкции с "man" в Präsens: "Man diskutiert".',
    },
    {
      id: 'b2-passiversatz-ex2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте, используя \`sein + zu + Infinitiv\`: "Diese Aufgabe muss schnell erledigt werden."',
      sentenceParts: ['Diese Aufgabe ', ' schnell ', '.'],
      correctAnswer: 'ist, zu erledigen',
      explanation: 'Пассив с модальным глаголом "muss erledigt werden" (должна быть выполнена) заменяется на "ist zu erledigen".',
    },
    {
      id: 'b2-passiversatz-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя альтернативу пассиву: "Эту книгу легко читать."',
      prompt: 'Эту книгу легко читать.',
      languageDirection: 'to_german',
      correctAnswer: 'Dieses Buch liest sich leicht.',
      // Альтернатива: Dieses Buch lässt sich leicht lesen. / Dieses Buch ist leicht zu lesen.
      explanation: 'Конструкция "sich lesen" выражает, что книга легко поддается чтению.',
    },
    {
      id: 'b2-passiversatz-ex4',
      type: 'multiple_choice',
      question: 'Какое прилагательное на "-bar" является подходящей заменой для "Das Problem kann gelöst werden"?',
      options: ['Das Problem ist lösbar.', 'Das Problem ist gelöstbar.', 'Das Problem ist losbar.'],
      correctAnswer: 'Das Problem ist lösbar.',
      explanation: 'Прилагательное "lösbar" (решаемый) образуется от глагола "lösen" и суффикса "-bar", выражая возможность.',
    },
    {
      id: 'b2-passiversatz-ex5',
      type: 'fill_in_the_blank',
      question: 'Замените пассив на конструкцию с \`sich lassen + Infinitiv\`: "Der Computer kann nicht repariert werden."',
      sentenceParts: ['Der Computer ', ' nicht ', '.'],
      correctAnswer: 'lässt sich, reparieren',
      explanation: 'Пассив "kann nicht repariert werden" заменяется на "lässt sich nicht reparieren".',
    },
  ],
};
