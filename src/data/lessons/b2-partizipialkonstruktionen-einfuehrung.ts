
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonB2PartizipialkonstruktionenEinfuehrung: Lesson = {
  id: 'b2-partizipialkonstruktionen-einfuehrung',
  level: 'B2',
  topic: 'Причастные конструкции (Partizipialkonstruktionen - Введение)',
  theory: `
Причастные конструкции (Partizipialkonstruktionen) – это способы сокращения предложений, в которых причастия (Partizip I или Partizip II) используются в качестве определения к существительному, заменяя собой целые относительные придаточные предложения. Это делает речь более лаконичной и стилистически богатой, особенно в письменном немецком.

**1. Краткое повторение: Partizip I и Partizip II**

*   **Partizip I (Причастие настоящего времени):** Образуется от инфинитива глагола + **-d**. Выражает активное, продолжающееся действие.
    *   *lachen → lachend* (смеющийся)
    *   *arbeiten → arbeitend* (работающий)
*   **Partizip II (Причастие прошедшего времени):** Третья основная форма глагола.
    *   Для слабых глаголов: *ge- + основа + -(e)t* (gemacht, gearbeitet)
    *   Для сильных глаголов: *ge- + (измененная) основа + -en* (gesehen, gegangen)
    *   Используется для образования Perfekt, Plusquamperfekt и Passiv.

**2. Partizip I как атрибут (Partizip I als Attribut)**
   Заменяет относительное придаточное предложение, в котором глагол стоит в активном залоге и описывает одновременное или продолжающееся действие. Причастие склоняется как прилагательное.

   *   *Der Mann, **der dort arbeitet**, ist mein Onkel.*
       → *Der dort **arbeitende** Mann ist mein Onkel.* (Мужчина, работающий там, мой дядя.)
   *   *Die Kinder, **die im Garten spielen**, sind laut.*
       → *Die im Garten **spielenden** Kinder sind laut.* (Дети, играющие в саду, шумные.)
   *   *Ich sehe den Hund, **der auf der Straße läuft**.*
       → *Ich sehe den auf der Straße **laufenden** Hund.* (Я вижу собаку, бегущую по улице.)

**3. Partizip II как атрибут (Partizip II als Attribut)**
   Заменяет относительное придаточное предложение. Значение зависит от типа глагола:

   *   **Для переходных глаголов (die ein Akkusativobjekt haben können):** Partizip II имеет **пассивное значение** и описывает завершенное действие, которое было совершено над определяемым существительным.
       *   *Das Buch, **das gestern veröffentlicht wurde**, ist sehr interessant.*
           → *Das gestern **veröffentlichte** Buch ist sehr interessant.* (Книга, опубликованная вчера, очень интересная.)
       *   *Die Aufgaben, **die von den Schülern gelöst wurden**, waren schwer.*
           → *Die von den Schülern **gelösten** Aufgaben waren schwer.* (Задания, решенные учениками, были трудными.)

   *   **Для непереходных глаголов, образующих Perfekt с \`sein\` (глаголы движения или изменения состояния):** Partizip II имеет **активное значение** и описывает завершенное действие или состояние.
       *   *Der Zug, **der gerade angekommen ist**, hat Verspätung.*
           → *Der gerade **angekommene** Zug hat Verspätung.* (Поезд, только что прибывший, опаздывает.)
       *   *Die Blume, **die gestern aufgeblüht ist**, ist wunderschön.*
           → *Die gestern **aufgeblühte** Blume ist wunderschön.* (Цветок, расцветший вчера, прекрасен.)

**4. Расширенные причастные определения (Erweiterte Partizipialattribute)**
   И Partizip I, и Partizip II могут иметь при себе зависимые слова (дополнения, обстоятельства). Весь этот оборот стоит между артиклем (или другим определителем) и существительным. Причастие при этом склоняется.
   *   *Der **schnell fahrende** Zug* (Быстро едущий поезд)
   *   *Ein **von allen bewundertes** Kunstwerk* (Произведение искусства, восхищающее всех)
   *   *Die **gestern Abend von ihm gesehene** Vorstellung* (Представление, увиденное им вчера вечером)

**Порядок слов и пунктуация:**
   - Причастный оборот как определение стоит перед существительным.
   - Он не отделяется запятыми от существительного, которое определяет.

Использование причастных конструкций в качестве определений делает речь более компактной и характерно для письменного стиля.
  `,
  vocabulary: [
    { german: 'die Partizipialkonstruktion (-en)', russian: 'причастная конструкция / причастный оборот' },
    { german: 'das Partizipialattribut (-e)', russian: 'причастный атрибут (определение)' },
    { german: 'erweitert', russian: 'расширенный', example: 'ein erweitertes Partizipialattribut' },
    { german: 'lachend', russian: 'смеющийся (Part. I)', example: 'das lachende Gesicht' },
    { german: 'arbeitend', russian: 'работающий (Part. I)', example: 'die arbeitende Bevölkerung' },
    { german: 'veröffentlicht', russian: 'опубликованный (Part. II)', example: 'der veröffentlichte Artikel' },
    { german: 'geschrieben', russian: 'написанный (Part. II)', example: 'ein handgeschriebener Brief' },
    { german: 'angekommen', russian: 'прибывший (Part. II)', example: 'die angekommenen Gäste' },
    { german: 'betreffend', russian: 'касающийся, соответствующий (Part. I)', example: 'die betreffenden Dokumente' },
    { german: 'stattfindend', russian: 'происходящий, имеющий место (Part. I)', example: 'die morgen stattfindende Konferenz' },
  ],
  readingText: `
Der Professor, der seit vielen Jahren auf diesem Gebiet forscht, präsentierte seine neuesten, auf umfangreichen Daten basierenden Ergebnisse. Die von ihm entwickelte Methode verspricht, die Behandlung dieser Krankheit grundlegend zu verändern. Die anwesenden Studenten hörten dem Vortrag, der viele interessante Aspekte beleuchtete, aufmerksam zu. Besonders die grafisch dargestellten Statistiken und die daraus abgeleiteten Schlussfolgerungen fanden große Beachtung.
  `,
  readingComprehensionExercises: [
    {
      id: 'b2-partizipialkonstruktionen-einf-rq1',
      type: 'multiple_choice',
      question: 'Was ist "der seit vielen Jahren auf diesem Gebiet forschende Professor"?',
      options: [
        'Ein Professor, der forschen wird.',
        'Ein Professor, der jetzt gerade forscht.',
        'Ein Professor, dessen Forschung abgeschlossen ist.',
        'Ein Professor, der über viele Jahre auf diesem Gebiet geforscht hat und dies möglicherweise noch tut.'
      ],
      correctAnswer: 'Ein Professor, der über viele Jahre auf diesem Gebiet geforscht hat und dies möglicherweise noch tut.',
      explanation: '"forschend" (Partizip I) beschreibt eine andauernde oder charakteristische Tätigkeit.',
    },
    {
      id: 'b2-partizipialkonstruktionen-einf-rq2',
      type: 'multiple_choice',
      question: 'Was bedeutet "die von ihm entwickelte Methode"?',
      options: [
        'Die Methode, die er gerade entwickelt.',
        'Die Methode, die er entwickeln wird.',
        'Die Methode, die von ihm entwickelt wurde.',
        'Eine Methode, die jemand anderes entwickelt hat.'
      ],
      correctAnswer: 'Die Methode, die von ihm entwickelt wurde.',
      explanation: '"entwickelte" (Partizip II) beschreibt ein abgeschlossenes passives Geschehen (die Methode wurde entwickelt).',
    },
  ],
  exercises: [
    {
      id: 'b2-partizipialkonstruktionen-einf-ex1',
      type: 'multiple_choice',
      question: 'Преобразуйте: "Das Mädchen, das am Fenster sitzt, liest ein Buch." в предложение с Partizip I.',
      options: [
        'Das am Fenster sitzende Mädchen liest ein Buch.',
        'Das am Fenster gesessene Mädchen liest ein Buch.',
        'Das Mädchen am Fenster sitzend liest ein Buch.'
      ],
      correctAnswer: 'Das am Fenster sitzende Mädchen liest ein Buch.',
      explanation: 'Partizip I от "sitzen" - "sitzend". Расширенный атрибут: "Das am Fenster sitzende Mädchen".',
    },
    {
      id: 'b2-partizipialkonstruktionen-einf-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: "Der von allen ___ (bewundern, Part. II) Künstler zeigte seine neuen Werke."',
      sentenceParts: ['Der von allen ', ' Künstler zeigte seine neuen Werke.'],
      correctAnswer: 'bewunderte',
      explanation: 'Partizip II от "bewundern" - "bewundert". Склоняется как прилагательное перед существительным мужского рода Nominativ: der bewunderte Künstler.',
    },
    {
      id: 'b2-partizipialkonstruktionen-einf-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя причастную конструкцию: "Информация, упомянутая в докладе, очень важна."',
      prompt: 'Информация, упомянутая в докладе, очень важна.',
      languageDirection: 'to_german',
      correctAnswer: 'Die im Bericht erwähnte Information ist sehr wichtig.',
      explanation: 'Partizip II от "erwähnen" - "erwähnt". "Die im Bericht erwähnte Information".',
    },
    {
      id: 'b2-partizipialkonstruktionen-einf-wp1',
      type: 'writing_prompt',
      question: 'Beschreiben Sie eine Person oder einen Gegenstand mit mindestens zwei Partizipialattributen (einmal Partizip I, einmal Partizip II). Zum Beispiel: "Der schnell sprechende, gut gekleidete Mann..."',
      suggestedLength: '1-2 Sätze',
    },
  ],
};
