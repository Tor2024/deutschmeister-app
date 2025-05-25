
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonB2IndirekteRede: Lesson = {
  id: 'b2-indirekte-rede',
  level: 'B2',
  topic: 'Косвенная речь (Indirekte Rede mit Konjunktiv I & II)',
  theory: `
Косвенная речь (Indirekte Rede) используется для передачи чужих высказываний, мыслей или вопросов, не цитируя их дословно. На уровне B2 важно уверенно использовать Konjunktiv I для косвенной речи и знать, когда его следует заменять на Konjunktiv II или конструкцию с 'würde'.

**1. Основные принципы и Konjunktiv I:**
   - Главное предложение обычно содержит глагол говорения или мышления (sagen, fragen, meinen, berichten, erzählen и т.д.).
   - Придаточное предложение косвенной речи часто вводится союзом **dass** (для утверждений), который может опускаться. Если 'dass' опускается, порядок слов в придаточном может быть как в главном (но глагол все равно в Konjunktiv I/II).
   - Глагол в придаточном предложении (или в независимом предложении косвенной речи) ставится в **Konjunktiv I**.

   **Образование Konjunktiv I:**
   - Основа инфинитива + окончания: -e, -est, -e, -en, -et, -en.
   - *Пример (kommen):* ich komme, du kommest, er/sie/es komme, wir kommen, ihr kommet, sie/Sie kommen.
   - *Sein:* ich sei, du sei(e)st, er/sie/es sei, wir seien, ihr sei(e)t, sie/Sie seien.
   - *Haben:* ich habe, du habest, er/sie/es habe, wir haben, ihr habet, sie/Sie haben.
   - *Modalverben (основа инфинитива):* könne, müsse, dürfe, solle, wolle, möge.

   *Пример:*
   - Прямая речь: *Er sagt: "Ich **habe** keine Zeit."*
   - Косвенная речь: *Er sagt, er **habe** keine Zeit.* (или: *Er sagt, dass er keine Zeit **habe**.*)

**2. Правило замены (Ersatzregel): Konjunktiv II или \`würde\` + Infinitiv**
   Если форма Konjunktiv I **совпадает** с формой Präsens Indikativ (часто для ich, wir, sie/Sie), то для ясности используется **Konjunktiv II**.
   Если форма Konjunktiv II совпадает с Präteritum Indikativ (у слабых глаголов) или звучит устаревше, используется конструкция **\`würde\` + Infinitiv**.
   *Пример:*
   - Прямая речь: *Sie sagen: "Wir **kommen** morgen."* (Indikativ: kommen)
   - Konjunktiv I: *Sie sagen, sie **kommen** morgen.* (Неясно, Konjunktiv I или Indikativ)
   - Konjunktiv II (лучше): *Sie sagen, sie **kämen** morgen.*
   - \`würde\`-форма (тоже хорошо): *Sie sagen, sie **würden** morgen **kommen**.*

**3. Передача вопросов в косвенной речи:**
   - **Общие вопросы (Ja/Nein-Fragen):** Вводятся союзом **ob** (ли). Глагол в Konjunktiv I/II в конце.
     *Прямая: Er fragt: "Hast du Zeit?"*
     *Косвенная: Er fragt, ob ich Zeit **habe** / **hätte**.*
   - **Специальные вопросы (W-Fragen):** Вводятся тем же вопросительным словом. Глагол в Konjunktiv I/II в конце.
     *Прямая: Sie fragt: "Wann beginnt der Unterricht?"*
     *Косвенная: Sie fragt, wann der Unterricht **beginne**.*

**4. Передача повелительных предложений (Imperativ):**
   Обычно через модальный глагол **sollen** (или **mögen**) в Konjunktiv I/II.
   *Прямая: Der Lehrer sagt: "Lernt die Vokabeln!"*
   *Косвенная: Der Lehrer sagt, wir **sollten** die Vokabeln **lernen**.*

**5. Изменение местоимений и обстоятельств времени/места:**
   Необходимо адаптировать местоимения (ich → er/sie), притяжательные местоимения (mein → sein/ihr) и указатели времени/места (heute → an jenem Tag, hier → dort) в зависимости от перспективы говорящего.

**6. Косвенная речь для прошедших времен:**
   - Если в прямой речи Präteritum, Perfekt или Plusquamperfekt, то в косвенной речи используется **Konjunktiv Perfekt** (Konj. I от haben/sein + Partizip II) или **Konjunktiv Plusquamperfekt** (Konj. II от haben/sein + Partizip II, если Konj. Perfekt неоднозначен).
     *Прямая: Er sagte: "Ich **war** krank." / "Ich **bin** krank **gewesen**."*
     *Косвенная: Er sagte, er **sei** krank **gewesen**.* (или: ...er **wäre** krank **gewesen**.)
     *Прямая: Sie erzählte: "Ich **hatte** das schon **gemacht**."*
     *Косвенная: Sie erzählte, sie **habe** das schon **gemacht**.* (или: ...sie **hätte** das schon **gemacht**.)

Умение правильно использовать косвенную речь, особенно с Konjunktiv, является важным признаком владения языком на уровне B2.
  `,
  vocabulary: [
    { german: 'die Indirekte Rede', russian: 'косвенная речь' },
    { german: 'der Konjunktiv I', russian: 'Конъюнктив I', example: 'Er sagt, er komme später.' },
    { german: 'der Konjunktiv II', russian: 'Конъюнктив II', example: 'Wenn er käme, wäre es Konjunktiv II.' },
    { german: 'würde + Infinitiv', russian: 'форма с würde (для косвенной речи и Konj. II)', example: 'Er meinte, er würde das nicht tun.' },
    { german: 'dass (Konjunktion)', russian: 'что (союз)', example: 'Sie hofft, dass alles gut geht.' },
    { german: 'ob (Konjunktion)', russian: 'ли (союз)', example: 'Ich frage, ob du Zeit hast.' },
    { german: 'sagen', russian: 'говорить, сказать', example: 'Er sagte, er sei müde.' },
    { german: 'fragen', russian: 'спрашивать', example: 'Sie fragte, wann er zurückkomme.' },
    { german: 'erzählen', russian: 'рассказывать', example: 'Er erzählte, dass er eine Reise gemacht habe.' },
    { german: 'behaupten', russian: 'утверждать', example: 'Der Zeuge behauptete, er sei unschuldig.' },
    { german: 'berichten', russian: 'сообщать, докладывать', example: 'Die Zeitung berichtete, dass die Verhandlungen erfolgreich gewesen seien.' },
    { german: 'die Pronomenverschiebung', russian: 'сдвиг местоимений' },
    { german: 'die Zeitenverschiebung', russian: 'сдвиг времен (в косвенной речи)' },
    { german: 'sei (Konj. I von sein)', russian: 'форма "быть" в Konj. I', example: 'Er sagt, er sei im Büro.' },
    { german: 'habe (Konj. I von haben)', russian: 'форма "иметь" в Konj. I', example: 'Sie meint, sie habe das Geld.' },
  ],
  readingText: `
In der gestrigen Teamsitzung teilte der Projektmanager mit, dass die aktuelle Deadline für das Projekt möglicherweise nicht eingehalten werden könne. Er erklärte, die Verzögerung sei auf unvorhergesehene technische Schwierigkeiten zurückzuführen. Einige Teammitglieder fragten daraufhin, ob es einen Plan B gäbe und welche Schritte nun unternommen würden, um das Projekt wieder auf Kurs zu bringen. Der Manager antwortete, man arbeite bereits intensiv an Lösungen und werde das Team in Kürze über die weiteren Maßnahmen informieren. Er bat alle, vorerst Ruhe zu bewahren und sich weiterhin auf ihre Aufgaben zu konzentrieren.
  `,
  readingComprehensionExercises: [
    {
      id: 'b2-indirekte-rede-rq1',
      type: 'multiple_choice',
      question: 'Was teilte der Projektmanager in der Teamsitzung mit?',
      options: [
        'Dass das Projekt früher als geplant fertig sein werde.',
        'Dass die aktuelle Deadline möglicherweise nicht eingehalten werden könne.',
        'Dass es keine technischen Schwierigkeiten gebe.',
        'Dass das Team zusätzliche Aufgaben bekommen werde.'
      ],
      correctAnswer: 'Dass die aktuelle Deadline möglicherweise nicht eingehalten werden könne.',
      explanation: 'Im Text steht: "...dass die aktuelle Deadline für das Projekt möglicherweise nicht eingehalten werden könne."',
    },
    {
      id: 'b2-indirekte-rede-rq2',
      type: 'multiple_choice',
      question: 'Worauf, laut Projektmanager, ist die Verzögerung zurückzuführen?',
      options: [
        'Auf mangelnde Motivation im Team.',
        'Auf unvorhergesehene technische Schwierigkeiten.',
        'Auf eine Änderung der Projektziele.',
        'Auf fehlende finanzielle Mittel.'
      ],
      correctAnswer: 'Auf unvorhergesehene technische Schwierigkeiten.',
      explanation: 'Er erklärte, die Verzögerung sei auf unvorhergesehene technische Schwierigkeiten zurückzuführen.',
    }
  ],
  exercises: [
    {
      id: 'b2-indirekte-rede-ex1',
      type: 'multiple_choice',
      question: 'Прямая речь: "Ich gehe ins Kino." Косвенная речь: Er sagt, ...',
      options: ['dass er ins Kino geht.', 'dass er ins Kino gehe.', 'dass er ins Kino ginge.'],
      correctAnswer: 'dass er ins Kino gehe.',
      explanation: 'Präsens в прямой речи передается через Konjunktiv I ("gehe") в косвенной.',
    },
    {
      id: 'b2-indirekte-rede-ex2',
      type: 'fill_in_the_blank',
      question: 'Прямая речь: Sie fragt: "Hast du das Buch gelesen?" Косвенная речь: Sie fragt, ob ich das Buch gelesen ___ .',
      sentenceParts: ['Sie fragt, ob ich das Buch gelesen ', '.'],
      correctAnswer: 'habe', // или hätte
      explanation: 'Perfekt в прямой речи передается через Konjunktiv Perfekt (Konjunktiv I от haben/sein + Partizip II). Здесь "habe". Если бы "habe" совпадало с Indikativ, можно было бы использовать "hätte".',
    },
    {
      id: 'b2-indirekte-rede-ex3',
      type: 'translation',
      question: 'Переведите в косвенную речь: Der Arzt sagte zu mir: "Sie müssen mehr Wasser trinken!"',
      prompt: 'Der Arzt sagte zu mir: "Sie müssen mehr Wasser trinken!"',
      languageDirection: 'to_german',
      correctAnswer: 'Der Arzt sagte zu mir, ich solle mehr Wasser trinken.',
      explanation: 'Повелительное наклонение (через "müssen") передается с помощью "sollen" в Konjunktiv (здесь "solle" для ich, или "sollte" как замена).',
    },
    {
      id: 'b2-indirekte-rede-ex4',
      type: 'writing_prompt',
      question: 'Dein Freund sagt: "Ich war gestern sehr beschäftigt und konnte dich nicht anrufen." Berichte das in indirekter Rede.',
      suggestedLength: '1-2 Sätze',
    }
  ],
};

