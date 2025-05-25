
import type { Lesson } from '@/types';

// --- Урок B2: Пассивный залог (Passiv) ---
export const lessonB2Passiv: Lesson = {
  id: 'b2-passiv',
  level: 'B2',
  topic: 'Пассивный залог (Passiv)',
  theory: `Пассивный залог (Passiv) используется, когда само действие или его результат важнее, чем исполнитель этого действия, или когда исполнитель неизвестен, неважен или его не хотят называть.

**1. Vorgangspassiv (Пассив действия/процесса)**
   Vorgangspassiv описывает само действие, процесс. Он образуется с помощью вспомогательного глагола **werden** (в соответствующей временной форме) и **Partizip II** смыслового глагола.

   **Образование Vorgangspassiv в различных временах:**

   *   **Präsens Passiv:** \`Subjekt + wird (спрягается) + ... + Partizip II\`
       *   *Das Auto **wird repariert**.* (Машину ремонтируют / Машина ремонтируется.)
       *   *Die Briefe **werden geschrieben**.* (Письма пишутся.)

   *   **Präteritum Passiv:** \`Subjekt + wurde (спрягается) + ... + Partizip II\`
       *   *Das Auto **wurde repariert**.* (Машину ремонтировали / Машина была отремонтирована.)
       *   *Die Fenster **wurden geputzt**.* (Окна были помыты.)

   *   **Perfekt Passiv:** \`Subjekt + ist (спрягается) + ... + Partizip II + **worden**\`
       (Обратите внимание: Partizip II от \`werden\` в пассивных конструкциях – \`worden\`, а не \`geworden\`)
       *   *Das Auto **ist repariert worden**.* (Машина была отремонтирована (и это результат к настоящему моменту).)
       *   *Das Essen **ist gekocht worden**.* (Еда была приготовлена.)

   *   **Plusquamperfekt Passiv:** \`Subjekt + war (спрягается) + ... + Partizip II + **worden**\`
       *   *Das Auto **war repariert worden**, bevor er kam.* (Машина была отремонтирована до того, как он пришел.)
       *   *Die Rechnung **war schon bezahlt worden**.* (Счет уже был оплачен.)

   *   **Futur I Passiv:** \`Subjekt + wird (спрягается) + ... + Partizip II + **werden**\`
       (Здесь два глагола \`werden\`: первый – вспомогательный для Futur I, второй – вспомогательный для Passiv в инфинитиве)
       *   *Das Auto **wird repariert werden**.* (Машина будет отремонтирована.)
       *   *Die Prüfung **wird vorbereitet werden**.* (Экзамен будет подготовлен.)

   **Указание исполнителя действия (Agens):**
   Если необходимо указать, кем или чем совершено действие:
   -   **von + Dativ:** для лиц, организаций, природных сил.
       *   *Der Roman **wurde von** einem berühmten Schriftsteller **geschrieben**.* (Роман был написан известным писателем.)
       *   *Das Haus **wurde vom** Sturm **zerstört**.* (Дом был разрушен штормом.) (vom = von dem)
   -   **durch + Akkusativ:** для указания средства, инструмента, причины (часто безличной).
       *   *Die Tür **wurde durch** einen Schlüssel **geöffnet**.* (Дверь была открыта ключом.)
       *   *Viele Probleme **werden durch** Kommunikation **gelöst**.* (Многие проблемы решаются посредством общения.)

   **Passiv с модальными глаголами:**
   Модальный глагол спрягается, \`werden\` и Partizip II стоят в конце.
   -   Präsens: *Das Auto **muss repariert werden**.* (Машину нужно отремонтировать.)
   -   Präteritum: *Das Auto **musste repariert werden**.* (Машину нужно было отремонтировать.)
   -   Perfekt: *Das Auto **hat repariert werden müssen**.* (Машину нужно было отремонтировать.) (Особая форма: Infinitiv модального глагола вместо Partizip II, когда есть другой Infinitiv).
   -   Plusquamperfekt: *Das Auto **hatte repariert werden müssen**.*

**2. Zustandspassiv (Пассив состояния)**
   Zustandspassiv описывает результат действия, состояние предмета после того, как действие над ним было совершено. Он образуется с помощью вспомогательного глагола **sein** (в соответствующей временной форме) и **Partizip II** смыслового глагола.

   **Образование Zustandspassiv:**
   *   **Präsens:** \`Subjekt + ist (спрягается) + ... + Partizip II\`
       *   *Das Fenster **ist geöffnet**.* (Окно открыто. – результат действия "открыть")
       *   *Die Aufgabe **ist erledigt**.* (Задание выполнено.)
   *   **Präteritum:** \`Subjekt + war (спрягается) + ... + Partizip II\`
       *   *Das Fenster **war geöffnet**.* (Окно было открыто.)
       *   *Die Tür **war geschlossen**.* (Дверь была закрыта.)
   *   Perfekt, Plusquamperfekt, Futur I для Zustandspassiv образуются реже и сложнее, основной акцент на Präsens и Präteritum.

   **Разница между Vorgangspassiv и Zustandspassiv:**
   -   Vorgangspassiv (с \`werden\`): подчеркивает сам процесс, действие.
       *   *Die Tür **wird geöffnet**.* (Дверь открыва**ют** / Дверь открыва**ется** - процесс.)
   -   Zustandspassiv (с \`sein\`): подчеркивает результат действия, состояние.
       *   *Die Tür **ist geöffnet**.* (Дверь откры**та** - состояние.)

**Когда использовать пассив?**
-   Когда действие важнее исполнителя.
-   Когда исполнитель неизвестен или неважен.
-   В официальных текстах, инструкциях, научных работах для придания объективности.

Пассивный залог – это мощный инструмент для выражения различных оттенков смысла и смещения акцентов в предложении.`,
  vocabulary: [
    { german: 'werden (wird, wurde, ist geworden)', russian: 'становиться (вспомогательный глагол для Vorgangspassiv)', example: 'Das Essen wird gekocht.' },
    { german: 'sein (ist, war, ist gewesen)', russian: 'быть (вспомогательный глагол для Zustandspassiv)', example: 'Die Tür ist geschlossen.' },
    { german: 'das Partizip II', russian: 'причастие II', example: 'gebaut, gelesen, geschrieben' },
    { german: 'worden', russian: 'форма Partizip II от "werden" в пассивных конструкциях Perfekt/Plusquamperfekt', example: 'Das Buch ist gelesen worden.' },
    { german: 'von (+ Dativ)', russian: 'от, кем (для указания агенса)', example: 'Der Brief wurde von mir geschrieben.' },
    { german: 'durch (+ Akkusativ)', russian: 'через, посредством (для указания средства/причины)', example: 'Das Problem wurde durch Diskussion gelöst.' },
    { german: 'der Vorgangspassiv', russian: 'пассив действия/процесса', example: 'Im Vorgangspassiv steht das Handeln im Vordergrund.' },
    { german: 'der Zustandspassiv', russian: 'пассив состояния/результата', example: 'Der Zustandspassiv beschreibt ein Ergebnis.' },
    { german: 'der Agens', russian: 'исполнитель действия, агенс' },
    { german: 'reparieren (repariert)', russian: 'ремонтировать (отремонтированный)', example: 'Das Auto wird repariert. / Das Auto ist repariert.' },
    { german: 'bauen (gebaut)', russian: 'строить (построенный)', example: 'Ein neues Haus wird gebaut. / Ein neues Haus ist gebaut.' },
    { german: 'öffnen (geöffnet)', russian: 'открывать (открытый)', example: 'Das Fenster wird geöffnet. / Das Fenster ist geöffnet.' },
    { german: 'schließen (geschlossen)', russian: 'закрывать (закрытый)', example: 'Die Tür wird geschlossen. / Die Tür ist geschlossen.' },
    { german: 'einladen (eingeladen)', russian: 'приглашать (приглашенный)', example: 'Die Gäste werden eingeladen. / Die Gäste sind eingeladen.' },
  ],
  exercises: [
    {
      id: 'b2-passiv-ex1',
      type: 'multiple_choice',
      question: 'Преобразуйте предложение в Präsens Passiv: "Der Lehrer erklärt die Regel."',
      options: [
        'Die Regel erklärt den Lehrer.',
        'Die Regel wird erklärt.',
        'Die Regel ist erklärt worden.',
        'Die Regel wurde erklärt.'
      ],
      correctAnswer: 'Die Regel wird erklärt.',
      explanation: 'Präsens Passiv: Subjekt (Die Regel) + wird (форма от werden) + Partizip II (erklärt). Агенс (der Lehrer) опускается, если не указано иное.',
    },
    {
      id: 'b2-passiv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму пассива (Präteritum Passiv): Das Lied ___ oft im Radio ___. (spielen)',
      sentenceParts: ['Das Lied ', ' oft im Radio ', '.'],
      correctAnswer: 'wurde, gespielt',
      explanation: 'Präteritum Passiv: wurde (форма Präteritum от werden) + Partizip II (gespielt). "Das Lied wurde oft im Radio gespielt."',
    },
    {
      id: 'b2-passiv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Perfekt Passiv): "Книга была прочитана (мною). Опционально укажите агенс."',
      prompt: 'Книга была прочитана (мною).',
      languageDirection: 'to_german',
      correctAnswer: 'Das Buch ist (von mir) gelesen worden.',
      explanation: 'Perfekt Passiv: ist + Partizip II (gelesen) + worden. Агенс "von mir" можно добавить.',
    },
    {
      id: 'b2-passiv-ex4',
      type: 'multiple_choice',
      question: 'Какое предложение описывает состояние (Zustandspassiv)?',
      options: [
        'Die Suppe wird gekocht.',
        'Die Suppe ist gekocht.',
        'Die Suppe wurde gekocht.'
      ],
      correctAnswer: 'Die Suppe ist gekocht.',
      explanation: 'Zustandspassiv (пассив состояния) образуется с "sein + Partizip II" и описывает результат. "Die Suppe ist gekocht" означает "Суп (уже) сварен / готов".',
    },
    {
      id: 'b2-passiv-ex5',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в Futur I Passiv: Man wird das Problem lösen.',
      sentenceParts: ['Das Problem ', ' ', '.'],
      correctAnswer: 'wird gelöst werden',
      explanation: 'Futur I Passiv: wird (вспомогательный для Futur I) + Partizip II (gelöst) + werden (вспомогательный для Passiv в Infinitiv). "Das Problem wird gelöst werden."',
    },
    {
      id: 'b2-passiv-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Ошибка была допущена из-за невнимательности."',
      prompt: 'Ошибка была допущена из-за невнимательности.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Fehler wurde durch Unachtsamkeit gemacht.',
      // Возможен также вариант: Der Fehler ist durch Unachtsamkeit gemacht worden. (Perfekt Passiv)
      explanation: 'Präteritum Passiv. Исполнитель/причина (невнимательность - Unachtsamkeit) указывается через "durch + Akkusativ", так как это причина/обстоятельство, а не активное лицо.',
    },
    {
      id: 'b2-passiv-ex7',
      type: 'multiple_choice',
      question: 'Как правильно сказать "Окна должны быть помыты" в Präsens Passiv с модальным глаголом?',
      options: [
        'Die Fenster müssen putzen.',
        'Die Fenster müssen geputzt werden.',
        'Die Fenster werden müssen geputzt.',
        'Die Fenster sind geputzt müssen.'
      ],
      correctAnswer: 'Die Fenster müssen geputzt werden.',
      explanation: 'Пассив с модальным глаголом в Präsens: модальный глагол (müssen) + Partizip II (geputzt) + werden (Infinitiv).',
    },
  ],
};
