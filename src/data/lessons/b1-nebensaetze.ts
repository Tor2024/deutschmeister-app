
import type { Lesson } from '@/types';

// --- Урок B1: Придаточные предложения (Nebensätze) (углубленно) ---
export const lessonB1Nebensaetze: Lesson = {
  id: 'b1-nebensaetze',
  level: 'B1',
  topic: 'Придаточные предложения (Nebensätze) (углубленно)',
  theory: `Придаточные предложения (Nebensätze) – это зависимые предложения, которые не могут существовать самостоятельно и всегда относятся к главному предложению (Hauptsatz), уточняя или дополняя его. Они играют роль различных членов предложения.

**Основное правило порядка слов:** В придаточных предложениях спрягаемый глагол (тот, который изменяется по лицам и числам) всегда стоит **в самом конце предложения**. Если в предложении есть отделяемая приставка, она соединяется с глаголом в конце. Если есть модальный глагол и инфинитив смыслового глагола, то модальный глагол стоит в конце, а инфинитив – перед ним.

Придаточные предложения всегда отделяются от главного предложения запятой.

**Типы придаточных предложений и союзы (Subjunktionen), вводящие их:**

**1. Kausalsätze (Придаточные причины) – Warum? Weshalb? (Почему? Отчего? По какой причине?)**
   Объясняют причину действия в главном предложении.
   - **weil** (потому что, так как – вводит причину, которая часто неизвестна собеседнику или является основной):
     *Ich lerne Deutsch, **weil** ich in Deutschland arbeiten möchte.* (Я учу немецкий, потому что хочу работать в Германии.)
     *Wir bleiben zu Hause, **weil** das Wetter schlecht ist.* (Мы остаемся дома, потому что погода плохая.)
   - **da** (так как, поскольку – вводит причину, которая обычно уже известна собеседнику, очевидна, или когда придаточное стоит перед главным):
     ***Da** das Wetter schlecht ist, bleiben wir zu Hause.* (Так как погода плохая, мы остаемся дома.)
     *Er kann heute nicht kommen, **da** er krank ist.* (Он не может сегодня прийти, так как он болен. – причина уже упоминалась или ясна).

**2. Finalsätze (Придаточные цели) – Wozu? Mit welcher Absicht? (Для чего? С какой целью?)**
   Указывают на цель действия в главном предложении.
   - **damit** (чтобы – используется, когда подлежащие (субъекты действия) в главном и придаточном предложениях разные):
     *Ich gebe dir Geld, **damit** du dir ein Buch kaufen kannst.* (Я даю тебе деньги, чтобы ты мог купить себе книгу.) (Подлежащие: ich, du)
     *Die Eltern arbeiten viel, **damit** ihre Kinder eine gute Ausbildung bekommen.* (Родители много работают, чтобы их дети получили хорошее образование.) (Подлежащие: die Eltern, ihre Kinder)
   - **um...zu + Infinitiv** (чтобы – используется, когда подлежащее в главном и придаточном предложениях совпадает. Конструкция: \`um\` + (дополнения/обстоятельства) + \`zu\` + Infinitiv смыслового глагола в конце):
     *Ich lerne Deutsch, **um** in Deutschland arbeiten **zu** können.* (Я учу немецкий, чтобы мочь работать в Германии.) (Подлежащее: ich)
     *Sie treibt Sport, **um** fit **zu** bleiben.* (Она занимается спортом, чтобы оставаться в форме.) (Подлежащее: sie)

**3. Konzessivsätze (Придаточные уступки) – Trotz welchen Umstands? (Несмотря на какое обстоятельство?)**
   Указывают на обстоятельство, вопреки которому совершается действие в главном предложении.
   - **obwohl / obgleich / obschon** (хотя, несмотря на то что – \`obgleich\` и \`obschon\` более книжные):
     ***Obwohl** es regnet, gehen wir spazieren.* (Хотя идет дождь, мы идем гулять.)
     *Er kam zur Party, **obgleich** er sehr müde war.* (Он пришел на вечеринку, хотя был очень уставшим.)
     *Sie hat die Prüfung bestanden, **obwohl** sie nicht viel gelernt hatte.* (Она сдала экзамен, хотя не много учила.)

**4. Konditionalsätze (Придаточные условия) – Unter welcher Bedingung? (При каком условии?)**
   Выражают условие, при котором возможно или происходит действие в главном предложении.
   - **wenn** (если, когда – для реальных, выполнимых условий в настоящем или будущем, а также для повторяющихся действий в прошлом):
     ***Wenn** du Zeit hast, können wir uns treffen.* (Если у тебя будет время, мы можем встретиться.)
     *Ich helfe dir, **wenn** du mich darum bittest.* (Я помогу тебе, если ты меня об этом попросишь.)
     *Immer **wenn** er kam, brachte er Blumen mit.* (Всегда, когда он приходил, он приносил цветы. – повторяющееся в прошлом)
   - **falls** (в случае если, если – выражает условие, которое говорящий считает менее вероятным или гипотетическим):
     ***Falls** es morgen schneit, fahren wir nicht Ski.* (Если (вдруг) завтра пойдет снег, мы не поедем кататься на лыжах.)
     *Nimm einen Schirm mit, **falls** es regnen sollte.* (Возьми зонт, если (на случай если) пойдет дождь.)

**5. Temporalsätze (Придаточные времени) – Wann? Wie lange? Seit wann? Bis wann? (Когда? Как долго? С каких пор? До каких пор?)**
   Указывают на время совершения действия.
   - **als** (когда – для однократного, завершенного действия или периода в прошлом):
     ***Als** ich ein Kind war, spielte ich oft im Garten.* (Когда я был ребенком, я часто играл в саду.)
     ***Als** er gestern ankam, war es schon dunkel.* (Когда он вчера приехал, было уже темно.)
   - **wenn** (когда – для многократных, повторяющихся действий в прошлом, а также для действий в настоящем и будущем времени):
     *Immer **wenn** er lachte, freute ich mich.* (Всегда, когда он смеялся, я радовался.)
     ***Wenn** ich nach Hause komme, koche ich etwas.* (Когда я прихожу домой, я готовлю что-нибудь.)
   - **während** (в то время как, пока – указывает на одновременность двух длительных действий):
     ***Während** ich koche, hört mein Mann Musik.* (Пока я готовлю, мой муж слушает музыку.)
   - **bevor / ehe** (прежде чем, до того как – \`ehe\` более книжное):
     ***Bevor** du gehst, räume dein Zimmer auf.* (Прежде чем ты уйдешь, убери свою комнату.)
     *Wir müssen die Fahrkarten kaufen, **ehe** der Zug abfährt.* (Мы должны купить билеты, до того как поезд отправится.)
   - **nachdem** (после того как – действие в придаточном предложении предшествует действию в главном. Часто используется правило согласования времен: Plusquamperfekt в придаточном + Präteritum/Perfekt в главном, или Perfekt в придаточном + Präsens в главном):
     ***Nachdem** ich gegessen hatte, ging ich spazieren.* (После того как я поел, я пошел гулять.)
     ***Nachdem** er die Arbeit beendet hat, kann er sich ausruhen.* (После того как он закончит работу, он может отдохнуть.)
   - **seit / seitdem** (с тех пор как – указывает на начало действия или состояния, которое продолжается до момента речи):
     ***Seit** ich in Berlin wohne, habe ich viele Freunde gefunden.* (С тех пор как я живу в Берлине, я нашел много друзей.)
   - **bis** (до тех пор пока, пока не – указывает на конечный момент действия):
     *Warte hier, **bis** ich zurückkomme.* (Жди здесь, пока я не вернусь.)
     *Er arbeitete, **bis** er müde war.* (Он работал, пока не устал.)
   - **solange** (пока, в течение того времени как – указывает на одновременность и длительность):
     ***Solange** du hier bist, kannst du mir helfen.* (Пока ты здесь, ты можешь мне помочь.)
     ***Solange** es regnet, bleiben wir drinnen.* (Пока идет дождь, мы остаемся внутри.)

**6. Modalsätze (Придаточные образа действия) – Wie? Auf welche Weise? (Как? Каким образом?)**
   Описывают способ или обстоятельство совершения действия.
   - **indem** (тем что, таким образом что, посредством того что):
     *Er half mir, **indem** er mir Ratschläge gab.* (Он помог мне тем, что дал советы.)
     *Man lernt eine Sprache am besten, **indem** man sie oft spricht.* (Язык лучше всего учится тем, что на нем часто говорят.)
   - **ohne...zu + Infinitiv** (не + деепричастие; без того чтобы – действие в главном предложении происходит без действия, выраженного инфинитивом. Подлежащие совпадают):
     *Er ging weg, **ohne** ein Wort **zu** sagen.* (Он ушел, не сказав ни слова.)
   - **(an)statt...zu + Infinitiv** (вместо того чтобы – действие в главном предложении происходит вместо действия, выраженного инфинитивом. Подлежащие совпадают):
     ***Anstatt** fernzusehen, sollte er lieber lernen.* (Вместо того чтобы смотреть телевизор, ему следовало бы лучше учиться.)

**7. Dass-Sätze (Изъяснительные придаточные)**
   Выполняют роль дополнения или подлежащего.
   - **dass** (что, чтобы): часто используются после глаголов говорения (sagen, erzählen), мышления (denken, glauben, meinen, wissen), чувств (fühlen, hoffen, bedauern), восприятия (sehen, hören), а также после безличных выражений (es ist wichtig/gut/schade/klar, dass...).
     *Ich weiß, **dass** du Recht hast.* (Я знаю, что ты прав.)
     *Es ist wichtig, **dass** du pünktlich kommst.* (Важно, чтобы ты пришел вовремя.)
     *Er sagte, **dass** er müde sei.* (Он сказал, что он устал. – здесь \`sei\` это Konjunktiv I)

**8. Indirekte Fragesätze (Косвенные вопросы)**
   Передают вопрос в косвенной форме.
   - **ob** (ли – для общих вопросов, на которые можно ответить "да" или "нет"):
     *Er fragt, **ob** du morgen Zeit hast.* (Он спрашивает, есть ли у тебя завтра время.)
     *Ich möchte wissen, **ob** der Film schon begonnen hat.* (Я хочу знать, начался ли уже фильм.)
   - **Вопросительные слова (W-Fragen): wer, was, wann, wo, warum, wie, welcher, etc.** (кто, что, когда, где, почему, как, какой и т.д. – для специальных вопросов):
     *Sie möchte wissen, **wann** der Zug ankommt.* (Она хотела бы знать, когда прибывает поезд.)
     *Ich verstehe nicht, **warum** er das gesagt hat.* (Я не понимаю, почему он это сказал.)

Понимание и правильное использование придаточных предложений значительно обогащает речь и является ключевым навыком для уровня B1 и выше. Обращайте внимание на союзы и порядок слов!`,
  audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_nebensaetze_b1.mp3',
  transcript: 'Weil, dass, ob, wenn. Ich weiß nicht, ob er kommt. Wenn das Wetter gut ist, gehen wir spazieren. Nachdem ich gegessen hatte, fühlte ich mich besser.',
  vocabulary: [
    { german: 'weil', russian: 'потому что, так как (причина)', example: 'Ich bleibe zu Hause, weil es regnet.' },
    { german: 'da', russian: 'так как, поскольку (причина, часто в начале)', example: 'Da er krank ist, kommt er nicht.' },
    { german: 'dass', russian: 'что, чтобы (изъяснительное)', example: 'Ich hoffe, dass du bald kommst.' },
    { german: 'ob', russian: 'ли (косвенный общий вопрос)', example: 'Ich frage mich, ob das richtig ist.' },
    { german: 'wenn', russian: 'если (условие); когда (повторяющееся/будущее время)', example: 'Wenn ich Zeit habe, besuche ich dich.' },
    { german: 'als', russian: 'когда (однократное действие в прошлом)', example: 'Als ich jung war, lebte ich auf dem Land.' },
    { german: 'obwohl', russian: 'хотя, несмотря на то что (уступка)', example: 'Obwohl er müde war, arbeitete er weiter.' },
    { german: 'damit', russian: 'чтобы (цель, разные подлежащие)', example: 'Lerne gut, damit du die Prüfung bestehst.' },
    { german: 'um...zu + Infinitiv', russian: 'чтобы (цель, одно подлежащее)', example: 'Ich spare Geld, um ein Auto zu kaufen.' },
    { german: 'während', russian: 'в то время как, пока (одновременность)', example: 'Während sie liest, kocht er.' },
    { german: 'nachdem', russian: 'после того как (предшествование)', example: 'Nachdem er gegessen hatte, ging er schlafen.' },
    { german: 'bevor / ehe', russian: 'прежде чем, до того как', example: 'Bevor du sprichst, denke nach.' },
    { german: 'seit / seitdem', russian: 'с тех пор как (начало и продолжение)', example: 'Seitdem er hier wohnt, ist er glücklicher.' },
    { german: 'bis', russian: 'до тех пор пока, пока не (конечный момент)', example: 'Warte, bis ich fertig bin.' },
    { german: 'solange', russian: 'пока, в течение того времени как (одновременность и длительность)', example: 'Solange es nicht regnet, können wir draußen bleiben.' },
    { german: 'falls', russian: 'в случае если, если (менее вероятно)', example: 'Falls du ihn siehst, grüß ihn von mir.' },
    { german: 'indem', russian: 'тем что, таким образом что (образ действия)', example: 'Man lernt eine Sprache, indem man viel spricht.' },
    { german: 'der Nebensatz (-sätze)', russian: 'придаточное предложение' },
    { german: 'der Hauptsatz (-sätze)', russian: 'главное предложение' },
    { german: 'die Subjunktion (-en) / der Konjunktor (-en)', russian: 'подчинительный союз' },
  ],
  exercises: [
    {
      id: 'b1-nebensaetze-adv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: Ich gehe nicht ins Kino, ___ ich keine Zeit habe.',
      options: ['obwohl', 'damit', 'weil', 'wenn'],
      correctAnswer: 'weil',
      explanation: '"weil" (потому что) используется для указания причины отсутствия времени для похода в кино.',
    },
    {
      id: 'b1-nebensaetze-adv-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол в правильную форму в конце придаточного: Er sagt, dass er dich morgen ___ (besuchen).',
      sentenceParts: ['Er sagt, dass er dich morgen ', '.'],
      correctAnswer: 'besucht',
      explanation: 'В придаточном предложении с союзом "dass" спрягаемый глагол "besucht" (3-е л., ед.ч. от besuchen) ставится в самый конец.',
    },
    {
      id: 'b1-nebensaetze-adv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я не знаю, придёт ли он сегодня."',
      prompt: 'Я не знаю, придёт ли он сегодня.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich weiß nicht, ob er heute kommt.',
      explanation: 'Косвенный общий вопрос вводится союзом "ob". Спрягаемый глагол "kommt" (3-е л., ед.ч. от kommen) ставится в конец придаточного предложения.',
    },
    {
      id: 'b1-nebensaetze-adv-ex4',
      type: 'multiple_choice',
      question: 'Какой союз используется для выражения цели, если подлежащие в главном и придаточном предложениях РАЗНЫЕ?',
      options: ['um...zu', 'damit', 'weil', 'obwohl'],
      correctAnswer: 'damit',
      explanation: '"damit" используется для выражения цели, когда субъекты действия (подлежащие) в главном и придаточном предложениях различаются.',
    },
    {
      id: 'b1-nebensaetze-adv-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение правильным союзом (после того как): ___ sie fleißig gelernt hatte, bestand sie die Prüfung.',
      sentenceParts: ['', ' sie fleißig gelernt hatte, bestand sie die Prüfung.'],
      correctAnswer: 'Nachdem',
      explanation: '"Nachdem" (после того как) указывает на действие, предшествующее действию в главном предложении. Глагол "hatte gelernt" (Plusquamperfekt) уже стоит в конце придаточного.',
    },
    {
      id: 'b1-nebensaetze-adv-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Хотя фильм был длинный, он был интересный."',
      prompt: 'Хотя фильм был длинный, он был интересный.',
      languageDirection: 'to_german',
      correctAnswer: 'Obwohl der Film lang war, war er interessant.',
      explanation: '"Obwohl" (хотя) вводит уступительное придаточное предложение. Спрягаемый глагол "war" в придаточном предложении ставится в конец.',
    },
    {
      id: 'b1-nebensaetze-adv-ex7',
      type: 'multiple_choice',
      question: 'Какой порядок слов в придаточном предложении, вводимом союзом "wenn"?',
      options: [
        'Подлежащее - сказуемое - остальные члены.',
        'Сказуемое - подлежащее - остальные члены.',
        'Спрягаемый глагол в конце предложения.',
        'Спрягаемый глагол в начале предложения.'
      ],
      correctAnswer: 'Спрягаемый глагол в конце предложения.',
      explanation: 'В большинстве придаточных предложений немецкого языка, вводимых подчинительным союзом (как "wenn"), спрягаемый глагол ставится в самый конец.',
    },
    {
      id: 'b1-nebensaetze-adv-ex8',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящий союз и конструкцию для цели (подлежащие совпадают): Ich lerne viel, ___ die Prüfung ___ (bestehen).',
      sentenceParts: ['Ich lerne viel, ', ' die Prüfung ', '.'],
      correctAnswer: 'um, zu bestehen',
      explanation: 'Для выражения цели с совпадающими подлежащими используется конструкция "um ... zu + Infinitiv". "um" ставится перед дополнением, "zu bestehen" в конце. Полностью: Ich lerne viel, um die Prüfung zu bestehen.',
    },
  ],
};

    