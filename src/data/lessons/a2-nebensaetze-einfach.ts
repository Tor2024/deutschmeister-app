
import type { Lesson } from '@/types';

// --- Урок A2: Простые придаточные предложения (dass, weil, wenn, ob) ---
export const lessonA2NebensaetzeEinfach: Lesson = {
  id: 'a2-nebensaetze-einfach',
  level: 'A2',
  topic: 'Простые придаточные предложения (dass, weil, wenn, ob)',
  theory: `Придаточные предложения (Nebensätze) – это зависимые предложения, которые дополняют или уточняют главное предложение. В немецком языке в придаточном предложении спрягаемый глагол всегда стоит **в самом конце**. Придаточное предложение отделяется от главного запятой.

На уровне А2 важно освоить наиболее употребительные союзы, вводящие придаточные предложения:

**1. Союз "dass" (что, чтобы)**
Используется для введения изъяснительных придаточных предложений. Они часто следуют за глаголами говорения, мышления, чувств или безличными выражениями.
   - Глаголы говорения: *sagen* (говорить), *erzählen* (рассказывать), *antworten* (отвечать), *fragen* (спрашивать, может вводить и \`ob\`-предложение).
     *Пример: Er sagt, **dass** er müde ist.* (Он говорит, что он устал.)
   - Глаголы мышления: *denken* (думать), *glauben* (верить, полагать), *wissen* (знать), *meinen* (полагать, иметь в виду).
     *Пример: Ich glaube, **dass** das Wetter morgen gut wird.* (Я думаю, что погода завтра будет хорошей.)
   - Глаголы чувств: *hoffen* (надеяться), *sich freuen* (радоваться), *Angst haben* (бояться).
     *Пример: Wir hoffen, **dass** du bald kommst.* (Мы надеемся, что ты скоро придешь.)
   - Безличные выражения: *Es ist wichtig, dass...* (Важно, чтобы...), *Es ist gut, dass...* (Хорошо, что...), *Es ist schade, dass...* (Жаль, что...).
     *Пример: Es ist wichtig, **dass** du pünktlich bist.* (Важно, чтобы ты был вовремя.)

**2. Союз "weil" (потому что)**
Используется для введения придаточных предложений причины. Отвечает на вопрос "Warum?" (Почему?).
   *Пример: Ich lerne Deutsch, **weil** ich in Deutschland studieren möchte.* (Я учу немецкий, потому что хочу учиться в Германии.)
   *Пример: Sie kommt heute nicht, **weil** sie krank ist.* (Она сегодня не придет, потому что она больна.)

**3. Союз "wenn" (если; когда)**
Многозначный союз:
   - **Условное значение ("если")**: выражает условие, при котором совершается действие главного предложения.
     *Пример: **Wenn** du Zeit hast, besuchen wir unsere Freunde.* (Если у тебя будет время, мы навестим наших друзей.)
     *Пример: Ich helfe dir, **wenn** du meine Hilfe brauchst.* (Я помогу тебе, если тебе нужна моя помощь.)
   - **Временное значение ("когда")**:
     - Для многократных, повторяющихся действий в настоящем или прошлом.
       *Пример: **Wenn** es regnet, bleiben wir zu Hause.* (Когда (каждый раз, когда) идет дождь, мы остаемся дома.)
       *Пример: Immer **wenn** ich ihn sah, war er fröhlich.* (Всегда, когда я его видел, он был весел.)
     - Для однократного действия в будущем.
       *Пример: **Wenn** du ankommst, ruf mich an.* (Когда ты приедешь, позвони мне.)
     (Для однократного действия в прошлом используется союз "als".)

**4. Союз "ob" (ли)**
Используется для введения косвенных общих вопросов (вопросов, на которые можно ответить "да" или "нет"). Часто следует после глаголов *fragen* (спрашивать), *wissen wollen* (хотеть знать), *sich fragen* (спрашивать себя), *nicht wissen* (не знать).
   *Пример: Ich frage mich, **ob** er heute kommt.* (Я спрашиваю себя, придет ли он сегодня.)
   *Пример: Sie weiß nicht, **ob** das richtig ist.* (Она не знает, правильно ли это.)
   *Пример: Kannst du mir sagen, **ob** der Supermarkt noch geöffnet ist?* (Можешь мне сказать, открыт ли еще супермаркет?)

**Порядок слов в придаточных предложениях с модальными глаголами или в Perfekt:**
Если в придаточном предложении есть модальный глагол или оно стоит в Perfekt, то спрягаемый модальный или вспомогательный глагол идет в самый конец, а инфинитив или Partizip II – перед ним.
   - *Ich weiß, dass er gut singen **kann**.* (Я знаю, что он умеет хорошо петь.)
   - *Er lernt Deutsch, weil er eine Prüfung bestanden **hat**.* (Он учит немецкий, потому что он сдал экзамен.)
   - *Sie fragt, ob wir den Film gesehen **haben**.* (Она спрашивает, видели ли мы фильм.)

Помните: глагол в конец!`,
  vocabulary: [
    { german: 'dass', russian: 'что, чтобы (союз)', example: 'Ich hoffe, dass du gesund bist.' },
    { german: 'weil', russian: 'потому что, так как (союз)', example: 'Er lernt viel, weil er eine Prüfung hat.' },
    { german: 'wenn', russian: 'если; когда (союз)', example: 'Wenn es schön ist, gehen wir spazieren.' },
    { german: 'ob', russian: 'ли (союз в косвенном вопросе)', example: 'Ich weiß nicht, ob er kommt.' },
    { german: 'sagen', russian: 'говорить, сказать', example: 'Er sagt, dass er keine Zeit hat.' },
    { german: 'denken', russian: 'думать', example: 'Ich denke, dass es eine gute Idee ist.' },
    { german: 'glauben', russian: 'верить, полагать', example: 'Sie glaubt, dass er die Wahrheit sagt.' },
    { german: 'wissen (weiß, wusste, hat gewusst)', russian: 'знать', example: 'Weißt du, ob der Bus schon weg ist?' },
    { german: 'hoffen', russian: 'надеяться', example: 'Wir hoffen, dass alles gut wird.' },
    { german: 'fragen', russian: 'спрашивать', example: 'Er fragt, ob du mitkommen möchtest.' },
    { german: 'wichtig', russian: 'важный, важно', example: 'Es ist wichtig, dass du das verstehst.' },
    { german: 'krank', russian: 'больной', example: 'Er ist zu Hause, weil er krank ist.' },
    { german: 'die Zeit', russian: 'время', example: 'Wenn ich Zeit habe, lese ich.' },
    { german: 'das Wetter', russian: 'погода', example: 'Ich weiß nicht, ob das Wetter morgen gut wird.' },
  ],
  exercises: [
    {
      id: 'a2-nebensaetze-einfach-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: Ich bleibe heute zu Hause, ___ ich müde bin.',
      options: ['dass', 'ob', 'weil', 'wenn'],
      correctAnswer: 'weil',
      explanation: 'Союз "weil" (потому что) используется для указания причины.',
    },
    {
      id: 'a2-nebensaetze-einfach-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол в правильную форму в конце придаточного: Sie sagt, dass sie morgen ___ (kommen).',
      sentenceParts: ['Sie sagt, dass sie morgen ', '.'],
      correctAnswer: 'kommt',
      explanation: 'В придаточном предложении с "dass" спрягаемый глагол ("kommt" от "kommen" для "sie") ставится в конец.',
    },
    {
      id: 'a2-nebensaetze-einfach-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я не знаю, есть ли у него время."',
      prompt: 'Я не знаю, есть ли у него время.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich weiß nicht, ob er Zeit hat.',
      explanation: 'Косвенный общий вопрос вводится союзом "ob". Спрягаемый глагол "hat" (от "haben" для "er") ставится в конец придаточного.',
    },
    {
      id: 'a2-nebensaetze-einfach-ex4',
      type: 'multiple_choice',
      question: 'Какой союз нужно использовать, чтобы соединить: "Ich gehe spazieren. Das Wetter ist schön."',
      options: ['weil', 'dass', 'wenn', 'ob'],
      correctAnswer: 'wenn',
      explanation: 'Можно использовать "wenn" в значении "если" (условие) или "когда" (временное): "Ich gehe spazieren, wenn das Wetter schön ist." (Я иду гулять, если/когда погода хорошая). "Weil" тоже возможно, если причина важнее: "Ich gehe spazieren, weil das Wetter schön ist."',
    },
    {
      id: 'a2-nebensaetze-einfach-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный союз: Er fragt mich, ___ ich ihm helfen kann.',
      sentenceParts: ['Er fragt mich, ', ' ich ihm helfen kann.'],
      correctAnswer: 'ob',
      explanation: 'Для косвенного общего вопроса (могу ли я ему помочь?) используется союз "ob". Глагол "kann" уже стоит в конце.',
    },
    {
      id: 'a2-nebensaetze-einfach-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Я думаю, что этот фильм интересный."',
      prompt: 'Я думаю, что этот фильм интересный.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich denke, dass dieser Film interessant ist.',
      explanation: 'Изъяснительное придаточное вводится союзом "dass". Спрягаемый глагол "ist" ставится в конец.',
    },
  ],
};
