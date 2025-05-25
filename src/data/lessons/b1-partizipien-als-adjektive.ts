
import type { Lesson } from '@/types';

// --- Урок B1: Причастие I и II как прилагательное (Partizipien als Adjektive) ---
export const lessonB1PartizipienAlsAdjektive: Lesson = {
  id: 'b1-partizipien-als-adjektive',
  level: 'B1',
  topic: 'Причастие I и II как прилагательное (Partizipien als Adjektive)',
  theory: `
Причастия в немецком языке (Partizipien) могут использоваться не только для образования времен (Perfekt, Plusquamperfekt, Passiv), но и как прилагательные, описывающие существительные. Это очень распространенный способ сделать речь более описательной и лаконичной, заменяя относительные придаточные предложения.

**I. Partizip I (Причастие настоящего времени) как прилагательное**

*   **Образование:** Инфинитив глагола + **-d**
    *   lachen (смеяться) → lachend (смеющийся)
    *   singen (петь) → singend (поющий)
    *   warten (ждать) → wartend (ждущий)

*   **Значение:** Описывает **активное, продолжающееся действие или состояние**, которое происходит одновременно с действием сказуемого или является характерным для определяемого существительного. Часто соответствует русскому причастию на -ущий/-ющий, -ащий/-ящий.

*   **Склонение:** Когда Partizip I используется как определение перед существительным, оно **склоняется как обычное прилагательное** по всем трем типам склонения (слабому, смешанному, сильному) в зависимости от артикля и падежа.
    *   *Das **singende** Mädchen steht auf der Bühne.* (Поющая девочка стоит на сцене.)
    *   *Ich sehe einen **laufenden** Hund.* (Я вижу бегущую собаку.)
    *   ***Schreiende** Kinder können anstrengend sein.* (Кричащие дети могут быть утомительны.)

*   **Замена относительных придаточных:** Partizip I часто заменяет относительное придаточное с глаголом в активном залоге настоящего времени.
    *   *Der Mann, der dort wartet, ist mein Onkel.* → *Der dort **wartende** Mann ist mein Onkel.*

**II. Partizip II (Причастие прошедшего времени) как прилагательное**

*   **Образование:** Это третья основная форма глагола (например, gemacht, gelesen, gefahren).

*   **Значение:**
    1.  **Для переходных глаголов (transitive Verben):** Выражает **завершенное действие в пассивном залоге**. Существительное, к которому оно относится, является объектом этого действия. Соответствует русским страдательным причастиям прошедшего времени на -нный, -тый.
        *   *Das **gelesene** Buch liegt auf dem Tisch.* (Прочитанная книга лежит на столе.)
    2.  **Для непереходных глаголов (intransitive Verben), образующих Perfekt с \`sein\`** (глаголы движения или изменения состояния): Выражает **завершенное действие в активном залоге**.
        *   *Der **angekommene** Zug steht auf Gleis 5.* (Прибывший поезд стоит на 5-м пути.)

*   **Склонение:** Partizip II, используемое как прилагательное, также **склоняется как обычное прилагательное**.
    *   *Ein **verlorenes** Spiel ist kein Grund zur Traurigkeit.* (Проигранная игра – не повод для грусти.)
    *   *Ich habe die **geschlossene** Tür nicht bemerkt.* (Я не заметил закрытую дверь.)

*   **Замена относительных придаточных:**
    *   *Die Aufgabe, die gelöst wurde, war schwer.* → *Die **gelöste** Aufgabe war schwer.*
    *   *Der Gast, der gerade angekommen ist, sucht sein Zimmer.* → *Der gerade **angekommene** Gast sucht sein Zimmer.*

Понимание и использование причастий в роли прилагательных значительно обогащает язык.
`,
  vocabulary: [
    { german: 'das Partizip I', russian: 'причастие настоящего времени (Partizip Präsens)' },
    { german: 'das Partizip II', russian: 'причастие прошедшего времени (Partizip Perfekt)' },
    { german: 'lachend', russian: 'смеющийся', example: 'ein lachendes Kind' },
    { german: 'singend', russian: 'поющий', example: 'die singende Frau' },
    { german: 'wartend', russian: 'ждущий', example: 'der wartende Mann' },
    { german: 'gelesen', russian: 'прочитанный', example: 'das gelesene Buch' },
    { german: 'geschrieben', russian: 'написанный', example: 'der geschriebene Brief' },
    { german: 'geöffnet', russian: 'открытый', example: 'ein geöffnetes Fenster' },
    { german: 'geschlossen', russian: 'закрытый', example: 'die geschlossene Tür' },
    { german: 'angekommen', russian: 'прибывший', example: 'der angekommene Gast' },
  ],
  readingText: `
Der **in der Sonne liegende** Hund döste vor sich hin. Die **auf der Bank sitzenden** Leute unterhielten sich leise. Ein **gerade gelandetes** Flugzeug rollte langsam zur Parkposition. Die **frisch gestrichenen** Wände des Hauses leuchteten in der Nachmittagssonne. Viele **auf den Bus wartende** Fahrgäste schauten ungeduldig auf ihre Uhren. Das **vom Kind gemalte** Bild war sehr farbenfroh.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-partizipien-adjektive-rq1',
      type: 'multiple_choice',
      question: 'Was tat der Hund?',
      options: ['Er rannte im Park.', 'Er döste in der Sonne.', 'Er bellte laut.', 'Er spielte mit einem Ball.'],
      correctAnswer: 'Er döste in der Sonne.',
      explanation: 'Im Text steht: "Der in der Sonne liegende Hund döste vor sich hin."',
    },
    {
      id: 'b1-partizipien-adjektive-rq2',
      type: 'multiple_choice',
      question: 'Wie waren die Wände des Hauses?',
      options: ['Alt und verfallen', 'Frisch gestrichen und leuchtend', 'Dunkel und unauffällig', 'Noch nicht fertig'],
      correctAnswer: 'Frisch gestrichen und leuchtend',
      explanation: 'Im Text steht: "Die frisch gestrichenen Wände des Hauses leuchteten in der Nachmittagssonne."',
    },
  ],
  exercises: [
    {
      id: 'b1-partizipien-adjektive-ex1',
      type: 'fill_in_the_blank',
      question: 'Образуйте Partizip I от глагола "tanzen" и вставьте его с правильным окончанием: Das ___ (tanzen) Paar sieht glücklich aus.',
      sentenceParts: ['Das ', ' Paar sieht glücklich aus.'],
      correctAnswer: 'tanzende',
      explanation: 'Partizip I от "tanzen" - "tanzend". Перед существительным среднего рода в Nominativ с определенным артиклем "das" окончание -e.',
    },
    {
      id: 'b1-partizipien-adjektive-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "Ich habe einen ___ (backen, Part. II) Kuchen gegessen."',
      options: ['gebacken', 'gebackener', 'gebackenes', 'gebackenen'],
      correctAnswer: 'gebackenen',
      explanation: 'Partizip II от "backen" - "gebacken". "Einen Kuchen" (Akk. Maskulin) требует окончания -en у прилагательного: einen gebackenen Kuchen.',
    },
    {
      id: 'b1-partizipien-adjektive-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя Partizip I как прилагательное: "Плачущий ребенок хочет к маме."',
      prompt: 'Плачущий ребенок хочет к маме.',
      languageDirection: 'to_german',
      correctAnswer: 'Das weinende Kind will zu seiner Mama.',
      explanation: 'Partizip I от "weinen" - "weinend". Перед существительным среднего рода в Nominativ с определенным артиклем: das weinende Kind.',
    },
    {
      id: 'b1-partizipien-adjektive-ex4',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте относительное придаточное в конструкцию с Partizip II: "Das Auto, das repariert wurde, ist teuer." → Das ___ Auto ist teuer.',
      sentenceParts: ['Das ', ' Auto ist teuer.'],
      correctAnswer: 'reparierte',
      explanation: 'Partizip II от "reparieren" - "repariert". Перед существительным среднего рода в Nominativ с определенным артиклем "das" окончание -e.',
    },
    {
      id: 'b1-partizipien-adjektive-wp1',
      type: 'writing_prompt',
      question: 'Опиши человека или предмет, используя как минимум одно Partizip I и одно Partizip II в качестве прилагательных (например, "Der interessante, viel gelesene Roman...").',
      suggestedLength: '1-2 предложения',
    },
  ],
};
