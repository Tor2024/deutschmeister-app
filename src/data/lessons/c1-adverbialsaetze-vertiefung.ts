
import type { Lesson } from '@/types';

// --- Урок C1: Обстоятельственные придаточные предложения (Adverbialsätze) - Углубленно ---
export const lessonC1AdverbialsaetzeVertiefung: Lesson = {
  id: 'c1-adverbialsaetze-vertiefung',
  level: 'C1',
  topic: 'Обстоятельственные придаточные предложения (Adverbialsätze) - Углубленно',
  theory: `Обстоятельственные придаточные предложения (Adverbialsätze) играют ключевую роль в построении сложных и логически связанных высказываний. Они уточняют обстоятельства, при которых совершается действие главного предложения (время, причина, цель, условие, уступка, образ действия, следствие, противопоставление). В придаточном предложении спрягаемый глагол всегда стоит в конце.

**I. Temporalsätze (Придаточные времени)**
   Отвечают на вопросы: Wann? Seit wann? Bis wann? Wie lange?

   1.  **Одновременность (Gleichzeitigkeit):**
       *   **während** (в то время как, пока – для двух параллельных длительных действий):
           ***Während** er las, hörte sie Musik.* (Пока он читал, она слушала музыку.)
       *   **solange** (пока, до тех пор пока – условие для продолжительности главного действия):
           ***Solange** es regnet, bleiben wir drinnen.* (Пока идет дождь, мы остаемся внутри.)
       *   **seit(dem)** (с тех пор как – указывает на начало действия или состояния, которое продолжается до момента речи или другого момента в прошлом):
           ***Seitdem** er hier wohnt, fühlt er sich wohler.* (С тех пор как он здесь живет, он чувствует себя лучше.)
       *   **sooft** (всякий раз когда, так часто как):
           ***Sooft** ich ihn sehe, ist er gut gelaunt.* (Всякий раз, когда я его вижу, он в хорошем настроении.)

   2.  **Предшествование (Vorzeitigkeit – действие придаточного раньше действия главного):**
       *   **nachdem** (после того как – часто с согласованием времен: Plusquamperfekt в придаточном + Präteritum/Perfekt в главном; или Perfekt в придаточном + Präsens в главном):
           ***Nachdem** sie gefrühstückt hatte, ging sie zur Arbeit.* (После того как она позавтракала, она пошла на работу.)
       *   **sobald / sowie** (как только):
           ***Sobald** er ankommt, werden wir beginnen.* (Как только он прибудет, мы начнем.)

   3.  **Последующее действие (Nachzeitigkeit – действие придаточного позже действия главного):**
       *   **bevor / ehe** (прежде чем, до того как – \`ehe\` более книжное):
           ***Bevor** du eine Entscheidung triffst, solltest du alle Optionen prüfen.* (Прежде чем ты примешь решение, тебе следует проверить все опции.)
       *   **bis** (до тех пор пока, пока не – указывает на конечный момент действия главного предложения):
           *Warte, **bis** ich fertig bin.* (Подожди, пока я не закончу.)

   4.  **Различие \`wenn\` и \`als\` (повторение):**
       *   **wenn:** многократное действие в прошлом/настоящем/будущем; однократное в настоящем/будущем.
           *Immer **wenn** ich ihn sah, freute ich mich.*
           ***Wenn** ich Zeit habe, lese ich.*
       *   **als:** однократное действие или период в прошлом.
           ***Als** ich ein Kind war, spielte ich gern draußen.*

**II. Kausalsätze (Придаточные причины)**
   Отвечают на вопросы: Warum? Aus welchem Grund? Weshalb? (Почему? По какой причине?)

   *   **weil** (потому что, так как – наиболее употребительный союз причины):
       *Ich kann nicht kommen, **weil** ich krank bin.*
   *   **da** (так как, поскольку – часто когда причина уже известна или придаточное стоит перед главным):
       ***Da** das Wetter schön ist, machen wir einen Ausflug.*
   *   **zumal** (тем более что, особенно потому что – вводит дополнительную, усиливающую причину):
       *Er braucht dringend Urlaub, **zumal** er in letzter Zeit sehr viel gearbeitet hat.* (Ему срочно нужен отпуск, тем более что он в последнее время очень много работал.)

**III. Konditionalsätze (Придаточные условия)**
   Отвечают на вопрос: Unter welcher Bedingung? (При каком условии?)

   *   **wenn** (если – для реальных и нереальных условий):
       ***Wenn** du mir hilfst, schaffen wir das schneller.* (реальное)
       ***Wenn** ich Zeit hätte, würde ich reisen.* (нереальное, Konj. II)
   *   **falls / sofern / im Falle, dass** (в случае если, если – часто для менее вероятных или формальных условий):
       ***Falls** es regnet, findet das Konzert drinnen statt.*
       *Ich komme mit, **sofern** ich bis dahin fertig bin.*
   *   **es sei denn, (dass)** (если только не, разве что не):
       *Wir gehen spazieren, **es sei denn, (dass)** es stark regnet.* (Мы пойдем гулять, если только не пойдет сильный дождь.)

**IV. Konzessivsätze (Придаточные уступки)**
   Отвечают на вопрос: Trotz welchen Umstands? (Несмотря на какое обстоятельство?)

   *   **obwohl / obgleich / obschon** (хотя, несмотря на то что – \`obgleich\` и \`obschon\` более книжные):
       ***Obwohl** er sehr müde war, arbeitete er weiter.*
   *   **auch wenn / selbst wenn / wenn auch** (даже если):
       ***Auch wenn** es schwierig wird, geben wir nicht auf.*
   *   **wenngleich** (хотя и, пусть даже – более формально):
       *Er stimmte zu, **wenngleich** er Bedenken hatte.*

**V. Finalsätze (Придаточные цели)**
   Отвечают на вопросы: Wozu? Mit welcher Absicht? Zu welchem Zweck? (Для чего? С какой целью?)

   *   **damit** (чтобы – когда подлежащие в главном и придаточном разные):
       *Ich erkläre es dir noch einmal, **damit** du es besser verstehst.* (Я, ты)
   *   **um ... zu + Infinitiv** (чтобы – когда подлежащие совпадают):
       *Sie lernt Deutsch, **um** in Deutschland studieren **zu** können.* (Она)

**VI. Konsekutivsätze (Придаточные следствия)**
   Отвечают на вопрос: Mit welcher Folge? (С каким следствием/результатом?)

   *   **sodass / so ..., dass ...** (так что / так ..., что ...):
       *Es regnete stark, **sodass** die Straßen überflutet waren.*
       *Er war **so** müde, **dass** er sofort einschlief.*
   *   **solch- ..., dass ...** (такой ..., что ... – перед существительным):
       *Es war **ein solcher** Sturm, **dass** Bäume umfielen.*
   *   **(zu) ..., als dass ...** (слишком ..., чтобы ... – часто с Konj. II, выражает нежелательное или невозможное следствие):
       *Das Auto ist **zu** teuer, **als dass** ich es mir leisten könnte.*

**VII. Modalsätze (Придаточные образа действия)**
    Отвечают на вопросы: Wie? Auf welche Weise? (Как? Каким образом?)

    *   **indem / dadurch, dass ...** (тем что; таким образом, что; посредством того что):
        *Er verbesserte sein Deutsch, **indem** er täglich las.*
        *Man kann Energie sparen, **dadurch, dass** man das Licht ausschaltet.*
    *   **ohne dass ... / ohne ... zu + Infinitiv** (без того чтобы ... / не + деепричастие):
        ***Ohne dass** er es merkte, verging die Zeit.* (разные подлежащие)
        *Sie ging weg, **ohne** ein Wort **zu** sagen.* (одно подлежащее)
    *   **(an)statt dass ... / (an)statt ... zu + Infinitiv** (вместо того чтобы ...):
        ***Anstatt dass** er ihr half, kritisierte er sie nur.* (разные подлежащие)
        ***Anstatt** zu lernen, spielte er Videospiele.* (одно подлежащее)
    *   **je ..., desto/umso ...** (чем ..., тем ... – сравнительное модальное значение):
        ***Je** mehr man übt, **desto** besser wird man.*
    *   **als ob / als wenn / wie wenn** (как будто, как если бы – для нереальных сравнений, всегда с Konj. II):
        *Er tut so, **als ob** er alles wüsste.* (Он делает вид, как будто все знает.)

**VIII. Adversativsätze (Придаточные противительные)**
    Выражают противопоставление.

    *   **während** (в то время как, тогда как – для противопоставления, а не только времени):
        *Er ist sehr gesprächig, **während** sein Bruder eher ruhig ist.*
    *   **wohingegen** (тогда как, напротив – более формально):
        *Manche bevorzugen Tee, **wohingegen** andere Kaffee lieber mögen.*
    *   **(an)statt dass ...** (вместо того чтобы – также имеет противительный оттенок):
        ***Anstatt dass** sie sich entschuldigte, machte sie ihm Vorwürfe.*

Понимание и правильное использование этого широкого спектра союзов и структур придаточных предложений является ключевым для достижения высокого уровня владения немецким языком.`,
  vocabulary: [
    { german: 'während (temporal/adversativ)', russian: 'в то время как, пока / тогда как', example: 'Während er schlief, arbeitete sie. Er ist groß, während sein Bruder klein ist.' },
    { german: 'nachdem', russian: 'после того как', example: 'Nachdem wir gegessen hatten, gingen wir spazieren.' },
    { german: 'bevor / ehe', russian: 'прежде чем, до того как', example: 'Ruf mich an, bevor du kommst.' },
    { german: 'seit(dem)', russian: 'с тех пор как', example: 'Seitdem ich hier wohne, geht es mir besser.' },
    { german: 'bis', russian: 'до тех пор пока, пока не', example: 'Ich warte, bis du fertig bist.' },
    { german: 'solange', russian: 'пока, в течение того времени как', example: 'Solange du artig bist, bekommst du ein Eis.' },
    { german: 'sobald / sowie', russian: 'как только', example: 'Sobald er kommt, fangen wir an.' },
    { german: 'da (kausal)', russian: 'так как, поскольку', example: 'Da es spät ist, müssen wir gehen.' },
    { german: 'zumal', russian: 'тем более что, особенно потому что', example: 'Die Aufgabe ist schwer, zumal wir wenig Zeit haben.' },
    { german: 'falls / sofern', russian: 'в случае если, если', example: 'Falls du Hilfe brauchst, sag Bescheid.' },
    { german: 'es sei denn, (dass)', russian: 'если только не, разве что не', example: 'Wir machen einen Ausflug, es sei denn, es regnet.' },
    { german: 'obgleich / obschon', russian: 'хотя, несмотря на то что (более книжн.)', example: 'Obgleich er krank war, kam er zur Arbeit.' },
    { german: 'wenn auch / auch wenn', russian: 'даже если, хотя и', example: 'Auch wenn es teuer ist, kaufe ich es.' },
    { german: 'sodass / so..., dass...', russian: 'так что / так..., что...', example: 'Er rannte schnell, sodass er den Bus noch erreichte.' },
    { german: 'indem / dadurch, dass...', russian: 'тем что / тем, что...', example: 'Er lernt Vokabeln, indem er sie aufschreibt.' },
    { german: 'ohne dass...', russian: 'без того чтобы (разные подлежащие)', example: 'Er verließ den Raum, ohne dass es jemand bemerkte.' },
    { german: '(an)statt dass...', russian: 'вместо того чтобы (разные подлежащие)', example: 'Anstatt dass er sich ausruhte, arbeitete er weiter.' },
    { german: 'als ob / als wenn / wie wenn', russian: 'как будто, как если бы (+Konj. II)', example: 'Sie sieht aus, als ob sie geweint hätte.' },
    { german: 'wohingegen', russian: 'тогда как, напротив (противительный)', example: 'Der Norden ist kalt, wohingegen der Süden warm ist.' },
  ],
  exercises: [
    {
      id: 'c1-adverbialsaetze-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз для выражения причины: "Ich kann heute nicht kommen, ___ ich einen wichtigen Termin habe."',
      options: ['obwohl', 'damit', 'weil', 'während'],
      correctAnswer: 'weil',
      explanation: 'Союз "weil" (потому что) используется для указания причины.',
    },
    {
      id: 'c1-adverbialsaetze-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящий союз времени: "___ er gefrühstückt hatte, las er die Zeitung."',
      sentenceParts: ['', ' er gefrühstückt hatte, las er die Zeitung.'],
      correctAnswer: 'Nachdem',
      explanation: 'Союз "nachdem" (после того как) указывает на предшествующее действие. Часто используется с Plusquamperfekt в придаточном.',
    },
    {
      id: 'c1-adverbialsaetze-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Хотя было очень холодно, мы пошли гулять."',
      prompt: 'Хотя было очень холодно, мы пошли гулять.',
      languageDirection: 'to_german',
      correctAnswer: 'Obwohl es sehr kalt war, gingen wir spazieren.',
      explanation: 'Союз "obwohl" (хотя) вводит уступительное придаточное предложение.',
    },
    {
      id: 'c1-adverbialsaetze-ex4',
      type: 'multiple_choice',
      question: 'Какой союз используется для выражения цели, если подлежащие в главном и придаточном предложениях совпадают?',
      options: ['damit', 'um...zu', 'weil', 'sodass'],
      correctAnswer: 'um...zu',
      explanation: 'Конструкция "um...zu + Infinitiv" используется для выражения цели, когда подлежащее в обоих частях предложения одно и то же.',
    },
    {
      id: 'c1-adverbialsaetze-ex5',
      type: 'fill_in_the_blank',
      question: 'Заполните пропуск в придаточном следствия: "Der Film war so spannend, ___ ich die Zeit vergaß."',
      sentenceParts: ['Der Film war so spannend, ', ' ich die Zeit vergaß.'],
      correctAnswer: 'dass',
      explanation: 'Конструкция "so..., dass..." (так..., что...) используется для выражения следствия.',
    },
    {
      id: 'c1-adverbialsaetze-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Он похудел тем, что стал меньше есть."',
      prompt: 'Он похудел тем, что стал меньше есть.',
      languageDirection: 'to_german',
      correctAnswer: 'Er hat abgenommen, indem er weniger gegessen hat.',
      // Альтернатива: Er hat dadurch abgenommen, dass er weniger gegessen hat.
      explanation: 'Союз "indem" (тем что) или "dadurch, dass..." используется для выражения образа действия.',
    },
    {
      id: 'c1-adverbialsaetze-ex7',
      type: 'multiple_choice',
      question: 'Какой союз выражает противопоставление и часто переводится как "тогда как"?',
      options: ['solange', 'sobald', 'wohingegen', 'zumal'],
      correctAnswer: 'wohingegen',
      explanation: 'Союз "wohingegen" используется для выражения прямого противопоставления.',
    },
  ],
};
