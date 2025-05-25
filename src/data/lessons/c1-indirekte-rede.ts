
import type { Lesson } from '@/types';

// --- Урок C1: Косвенная речь (Indirekte Rede) ---
export const lessonC1IndirekteRede: Lesson = {
  id: 'c1-indirekte-rede',
  level: 'C1',
  topic: 'Косвенная речь (Indirekte Rede)',
  theory: `Косвенная речь (Indirekte Rede) используется для передачи чужих высказываний, мыслей, вопросов или команд, не цитируя их дословно. Она позволяет интегрировать чужую речь в собственное повествование. Ключевым грамматическим инструментом для косвенной речи в немецком языке является **Konjunktiv I**.

**1. Основное правило: Использование Konjunktiv I**
   Konjunktiv I образуется от основы инфинитива глагола с добавлением следующих окончаний:
   - ich: -e  (z.B. ich gehe)
   - du: -est (z.B. du gehest)
   - er/sie/es: -e (z.B. er gehe)
   - wir: -en (z.B. wir gehen)
   - ihr: -et (z.B. ihr gehet)
   - sie/Sie: -en (z.B. sie gehen)

   *Примеры сильных глаголов (без изменения корневой гласной в Konjunktiv I, в отличие от Präsens Indikativ):*
   - nehmen: ich nehme, du nehmest, er nehme
   - sehen: ich sehe, du sehest, er sehe

   *Глаголы \`sein\` и \`haben\` в Konjunktiv I:*
   - **sein:** ich sei, du sei(e)st, er/sie/es sei, wir seien, ihr sei(e)t, sie/Sie seien
   - **haben:** ich habe, du habest, er/sie/es habe, wir haben, ihr habet, sie/Sie haben

   *Модальные глаголы в Konjunktiv I (сохраняют основу инфинитива):*
   - können: ich könne, du könnest, er könne
   - müssen: ich müsse, du müssest, er müsse
   - dürfen: ich dürfe, du dürfest, er dürfe
   - wollen: ich wolle, du wollest, er wolle
   - sollen: ich solle, du sollest, er solle
   - mögen: ich möge, du mögest, er möge

**2. Правило замены (Ersatzregel): Konjunktiv II или \`würde\` + Infinitiv**
   Если форма Konjunktiv I совпадает с формой Präsens Indikativ (что часто случается для \`ich\`, \`wir\`, \`sie/Sie\` у большинства глаголов), то для ясности используется **Konjunktiv II**.
   Если и форма Konjunktiv II совпадает с Präteritum Indikativ (у слабых глаголов) или звучит слишком устаревшей, используется конструкция **\`würde\` + Infinitiv**.

   *Пример:*
   - Прямая речь: Er sagt: "Ich **komme** morgen." (Präsens Indikativ)
   - Konjunktiv I: Er sagt, er **komme** morgen. (Форма "komme" совпадает для "ich" и "er")
   - Употребление Konjunktiv II (предпочтительно, если Konj I от "kommen" не ясен): Er sagt, er **käme** morgen.
   - Употребление \`würde\`: Er sagt, er **würde** morgen **kommen**.

**3. Передача утвердительных предложений**
   Часто вводится союзом \`dass\`, который может опускаться (тогда глагол в косвенной речи остается в конце, но это уже не придаточное, а самостоятельное предложение с Konjunktiv).
   - Прямая речь: Anna sagt: "Ich bin müde."
   - Косвенная речь: Anna sagt, **dass sie müde sei**. / Anna sagt, **sie sei müde**.

**4. Передача вопросов**
   - **Общие вопросы (Ja/Nein-Fragen):** Вводятся союзом \`ob\`. Порядок слов как в придаточном предложении (глагол в Konjunktiv I/II в конце).
     - Прямая речь: Er fragt: "Kommst du heute Abend?"
     - Косвенная речь: Er fragt, **ob ich heute Abend komme** (Konj. I) / **käme** (Konj. II) / **kommen würde**.
   - **Специальные вопросы (W-Fragen):** Вводятся тем же вопросительным словом. Порядок слов как в придаточном.
     - Прямая речь: Sie fragt: "Wann beginnt der Film?"
     - Косвенная речь: Sie fragt, **wann der Film beginne** (Konj. I).

**5. Передача повелительных предложений (Imperativ)**
   Повелительное наклонение в косвенной речи обычно передается:
   - С помощью модального глагола \`sollen\` (реже \`mögen\`) в Konjunktiv I или II + Infinitiv.
     - Прямая речь: Der Lehrer sagt: "Macht die Hausaufgaben!"
     - Косвенная речь: Der Lehrer sagt, wir **sollten** die Hausaufgaben **machen**.
   - Через инфинитивную конструкцию с \`zu\` после глаголов как \`bitten\`, \`auffordern\`.
     - Прямая речь: Sie bittet: "Hilf mir bitte!"
     - Косвенная речь: Sie bittet mich, **ihr zu helfen**.

**6. Сдвиг местоимений (Pronomenverschiebung)**
   Личные и притяжательные местоимения изменяются в соответствии с перспективой говорящего.
   - Прямая речь: Peter sagt: "**Ich** gehe zu **meinem** Bruder."
   - Косвенная речь: Peter sagt, **er** gehe zu **seinem** Bruder.

**7. Сдвиг временных и пространственных указателей (Adverbienverschiebung)**
   Указатели времени и места также могут изменяться.
   - heute → an jenem Tag / damals
   - morgen → am folgenden Tag / am nächsten Tag
   - gestern → am Vortag / am Tag zuvor
   - hier → dort
   *Пример:*
   - Прямая речь: Eva sagte: "Ich war **gestern hier**."
   - Косвенная речь: Eva sagte, sie sei **am Vortag dort** gewesen.

**8. Согласование времен (Zeitenverschiebung)**
   - **Präsens** в прямой речи → **Konjunktiv I Präsens** в косвенной.
     *Er sagt: "Ich lerne." → Er sagt, er lerne.*
   - **Vergangenheit (Präteritum, Perfekt, Plusquamperfekt)** в прямой речи → **Konjunktiv Perfekt** (Konj. I от haben/sein + Partizip II) или **Konjunktiv Plusquamperfekt** (Konj. II от haben/sein + Partizip II) в косвенной.
     *Sie sagte: "Ich las ein Buch / Ich habe ein Buch gelesen." → Sie sagte, sie habe ein Buch gelesen.*
     *Er erzählte: "Ich war im Kino gewesen." → Er erzählte, er sei im Kino gewesen.*
     Часто для простоты, если действие очевидно в прошлом, может использоваться Konjunktiv I Präteritum (если такая форма существует и отличается от индикатива) или Konjunktiv II Präteritum.
   - **Futur I** в прямой речи → **Konjunktiv I von \`werden\` + Infinitiv** или **\`würde\` + Infinitiv**.
     *Er meint: "Ich werde bald kommen." → Er meint, er werde bald kommen / er würde bald kommen.*

Косвенная речь — сложная тема, требующая хорошего понимания Konjunktiv I и II, а также внимания к контекстуальным изменениям.`,
  vocabulary: [
    { german: 'die Indirekte Rede', russian: 'косвенная речь' },
    { german: 'der Konjunktiv I', russian: 'конъюнктив I (сослагательное наклонение I)', example: 'Er sagt, er sei krank.' },
    { german: 'der Konjunktiv II', russian: 'конъюнктив II (сослагательное наклонение II)', example: 'Er sagte, er käme später (wenn Konj. I = Indikativ).' },
    { german: 'würde + Infinitiv', russian: 'конструкция "würde" с инфинитивом (замена Konj. II)', example: 'Sie meinte, sie würde uns helfen.' },
    { german: 'sagen', russian: 'говорить, сказать', example: 'Er sagte, dass er müde sei.' },
    { german: 'fragen', russian: 'спрашивать', example: 'Sie fragte, ob ich Zeit hätte.' },
    { german: 'antworten', russian: 'отвечать', example: 'Er antwortete, er wisse es nicht.' },
    { german: 'erzählen', russian: 'рассказывать', example: 'Oma erzählte, sie habe früher auf dem Land gelebt.' },
    { german: 'meinen', russian: 'полагать, иметь в виду', example: 'Er meinte, das Wetter werde besser.' },
    { german: 'behaupten', russian: 'утверждать', example: 'Der Zeuge behauptete, er habe nichts gesehen.' },
    { german: 'berichten', russian: 'сообщать, докладывать', example: 'Die Zeitung berichtete, der Unfall sei glimpflich ausgegangen.' },
    { german: 'dass (Konjunktion)', russian: 'что (союз, вводящий косвенную речь)', example: 'Ich weiß, dass du Recht hast.' },
    { german: 'ob (Konjunktion)', russian: 'ли (союз, вводящий косвенный общий вопрос)', example: 'Er fragte, ob wir mitkommen wollten.' },
    { german: 'die Aussage (-n)', russian: 'высказывание, утверждение' },
    { german: 'die Frage (-n)', russian: 'вопрос' },
    { german: 'die Aufforderung (-en)', russian: 'требование, призыв, команда' },
    { german: 'die Pronomenverschiebung', russian: 'сдвиг местоимений' },
    { german: 'die Zeitenverschiebung', russian: 'сдвиг (согласование) времен' },
  ],
  exercises: [
    {
      id: 'c1-indirekte-ex1',
      type: 'multiple_choice',
      question: 'Преобразуйте в косвенную речь (Konjunktiv I): Peter sagt: "Ich habe viel Arbeit."',
      options: ['Peter sagt, er hat viel Arbeit.', 'Peter sagt, er habe viel Arbeit.', 'Peter sagt, er hätte viel Arbeit.'],
      correctAnswer: 'Peter sagt, er habe viel Arbeit.',
      explanation: 'Konjunktiv I от "hat" (3 л. ед.ч. для "er") - "habe". Местоимение "ich" меняется на "er".',
    },
    {
      id: 'c1-indirekte-ex2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в косвенную речь: Maria fragt: "Kommst du morgen mit?"',
      sentenceParts: ['Maria fragt, ob ich am folgenden Tag ', '.'],
      correctAnswer: 'mitkomme', // или mitkäme / mitkommen würde
      explanation: 'Общий вопрос вводится союзом "ob". Глагол "mitkomme" (Konjunktiv I от "mitkommen" для "ich") ставится в конец. "morgen" меняется на "am folgenden Tag". Альтернативно, если "mitkomme" совпадает с индикативом, можно использовать "mitkäme" (Konj. II) или "mitkommen würde".',
    },
    {
      id: 'c1-indirekte-ex3',
      type: 'translation',
      question: 'Переведите на немецкий используя косвенную речь: "Учитель сказал, что мы должны были прочитать текст."',
      prompt: 'Учитель сказал, что мы должны были прочитать текст.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Lehrer sagte, wir hätten den Text lesen sollen.',
      explanation: 'Прямая речь в прошлом (модальный глагол в прошлом). Косвенная речь требует Konjunktiv Perfekt или Plusquamperfekt модального глагола. "hätten ... lesen sollen" (Konjunktiv II Plusquamperfekt от "sollen").',
    },
    {
      id: 'c1-indirekte-ex4',
      type: 'multiple_choice',
      question: 'Прямая речь: Der Chef befahl: "Arbeiten Sie schneller!" Какая форма косвенной речи наиболее корректna?',
      options: [
        'Der Chef befahl, sie arbeiten schneller.',
        'Der Chef befahl, sie sollten schneller arbeiten.',
        'Der Chef befahl, ob sie schneller arbeiten.'
      ],
      correctAnswer: 'Der Chef befahl, sie sollten schneller arbeiten.',
      explanation: 'Передача повеления в косвенной речи часто осуществляется через "sollen" в Konjunktiv (здесь "sollten" как Konj. II, так как Konj. I "sollen" совпадает с индикативом для "sie/Sie").',
    },
    {
      id: 'c1-indirekte-ex5',
      type: 'fill_in_the_blank',
      question: 'Косвенная речь: Sie erzählte, sie ___ am Vortag im Theater ___. (sein - Perfekt Indikativ в прямой речи)',
      sentenceParts: ['Sie erzählte, sie ', ' am Vortag im Theater ', '.'],
      correctAnswer: 'sei, gewesen',
      explanation: 'Прошедшее время (Perfekt) в прямой речи переходит в Konjunktiv Perfekt в косвенной: Konjunktiv I от вспомогательного глагола "sein" (т.е. "sei") + Partizip II ("gewesen").',
    },
    {
      id: 'c1-indirekte-ex6',
      type: 'translation',
      question: 'Переведите: Er fragte, wann der Zug abfahre.',
      prompt: 'Er fragte, wann der Zug abfahre.',
      languageDirection: 'from_german',
      correctAnswer: 'Он спросил, когда отправляется поезд.',
      explanation: 'Косвенный специальный вопрос. "abfahre" - Konjunktiv I от "abfahren".',
    },
    {
      id: 'c1-indirekte-ex7',
      type: 'multiple_choice',
      question: 'Прямая речь: "Wir werden das Projekt erfolgreich abschließen", versicherte der Manager. Косвенная речь:',
      options: [
        'Der Manager versicherte, sie werden das Projekt erfolgreich abschließen.',
        'Der Manager versicherte, sie würden das Projekt erfolgreich abschließen.',
        'Der Manager versicherte, dass sie das Projekt erfolgreich abgeschlossen hätten.'
      ],
      correctAnswer: 'Der Manager versicherte, sie würden das Projekt erfolgreich abschließen.',
      explanation: 'Futur I в прямой речи передается через Konjunktiv I от "werden" ("werde", "werdest", "werde"...) или, как здесь, через "würde" + Infinitiv для "sie" (они), так как "werden" в Konj. I совпадает с индикативом.',
    }
  ]
};
