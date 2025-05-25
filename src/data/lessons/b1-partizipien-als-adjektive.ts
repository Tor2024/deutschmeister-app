
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
    *   *Das **singende** Mädchen steht auf der Bühne.* (Поющая девочка стоит на сцене.) (слабое скл., Nom. Sg. N.)
    *   *Ich sehe einen **laufenden** Hund.* (Я вижу бегущую собаку.) (смешанное скл., Akk. Sg. M.)
    *   ***Schreiende** Kinder können anstrengend sein.* (Кричащие дети могут быть утомительны.) (сильное скл., Nom. Pl.)

*   **Замена относительных придаточных:** Partizip I часто заменяет относительное придаточное с глаголом в активном залоге настоящего времени.
    *   *Der Mann, der dort wartet, ist mein Onkel.* → *Der dort **wartende** Mann ist mein Onkel.*
    *   *Die Frau, die am Fenster sitzt, liest ein Buch.* → *Die am Fenster **sitzende** Frau liest ein Buch.*

**II. Partizip II (Причастие прошедшего времени) как прилагательное**

*   **Образование:** Это третья основная форма глагола (например, gemacht, gelesen, gefahren).

*   **Значение:**
    1.  **Для переходных глаголов (transitive Verben):** Выражает **завершенное действие в пассивном залоге**. Существительное, к которому оно относится, является объектом этого действия. Соответствует русским страдательным причастиям прошедшего времени на -нный, -тый.
        *   *Das **gelesene** Buch liegt auf dem Tisch.* (Прочитанная книга лежит на столе.)
            (≈ Das Buch, das gelesen wurde/worden ist...)
        *   *Der **gebackene** Kuchen duftet herrlich.* (Испеченный пирог пахнет чудесно.)
    2.  **Для непереходных глаголов (intransitive Verben), образующих Perfekt с \`sein\`** (глаголы движения или изменения состояния): Выражает **завершенное действие в активном залоге**.
        *   *Der **angekommene** Zug steht auf Gleis 5.* (Прибывший поезд стоит на 5-м пути.)
            (≈ Der Zug, der angekommen ist...)
        *   *Die **eingeschlafenen** Kinder träumen süß.* (Уснувшие дети видят сладкие сны.)
    3.  Для непереходных глаголов, образующих Perfekt с \`haben\`, Partizip II в роли определения используется редко и обычно только в составе сложных слов (\`der Vielgereiste\` – много путешествовавший) или в специальных конструкциях.

*   **Склонение:** Partizip II, используемое как прилагательное, также **склоняется как обычное прилагательное**.
    *   *Ein **verlorenes** Spiel ist kein Grund zur Traurigkeit.* (Проигранная игра – не повод для грусти.) (смешанное скл., Nom. Sg. N.)
    *   *Ich habe die **geschlossene** Tür nicht bemerkt.* (Я не заметил закрытую дверь.) (слабое скл., Akk. Sg. F.)
    *   *Mit **geöffneten** Augen sah er die Welt.* (С открытыми глазами он смотрел на мир.) (сильное скл., Dat. Pl.)

*   **Замена относительных придаточных:**
    *   *Die Aufgabe, die gelöst wurde, war schwer.* → *Die **gelöste** Aufgabe war schwer.*
    *   *Der Brief, der geschrieben worden ist, muss abgeschickt werden.* → *Der **geschriebene** Brief muss abgeschickt werden.*
    *   *Der Gast, der gerade angekommen ist, sucht sein Zimmer.* → *Der gerade **angekommene** Gast sucht sein Zimmer.*

**III. Расширенные причастные атрибуты (Erweiterte Partizipialattribute)**
   Это когда причастие (I или II) имеет при себе зависимые слова (дополнения, обстоятельства). Весь оборот стоит между артиклем/определителем и существительным. Это более сложная конструкция, характерная для письменной речи.
   *   *Der **laut Musik hörende** Nachbar.* (Сосед, громко слушающий музыку.)
   *   *Das **von allen Schülern geliebte** Fach.* (Предмет, любимый всеми учениками.)
   *   *Die **schnell auf den Boden gefallene** Vase ist zerbrochen.* (Ваза, быстро упавшая на пол, разбилась.)

Понимание и использование причастий в роли прилагательных значительно обогащает язык и позволяет избегать громоздких придаточных предложений.
  `,
  vocabulary: [
    { german: 'das Partizip I', russian: 'причастие настоящего времени (Partizip Präsens)', example: 'lachend (смеющийся), singend (поющий)' },
    { german: 'das Partizip II', russian: 'причастие прошедшего времени (Partizip Perfekt)', example: 'gelacht (смеявшийся), gesungen (спетый), gefahren (уехавший)' },
    { german: 'lachend', russian: 'смеющийся', example: 'ein lachendes Kind' },
    { german: 'wartend', russian: 'ждущий', example: 'die wartenden Menschen' },
    { german: 'gelesen', russian: 'прочитанный', example: 'ein viel gelesenes Buch' },
    { german: 'geschrieben', russian: 'написанный', example: 'der geschriebene Text' },
    { german: 'geöffnet', russian: 'открытый', example: 'ein geöffnetes Fenster' },
    { german: 'geschlossen', russian: 'закрытый', example: 'eine geschlossene Tür' },
    { german: 'angekommen', russian: 'прибывший', example: 'der angekommene Gast' },
    { german: 'eingeschlafen', russian: 'уснувший', example: 'das eingeschlafene Baby' },
    { german: 'das Attribut (-e)', russian: 'атрибут, определение (в грамматике)' },
    { german: 'erweitert', russian: 'расширенный', example: 'ein erweitertes Partizipialattribut' },
  ],
  readingText: `
Die kleine Stadt, **am Fluss gelegen**, war bekannt für ihre **gut erhaltenen** Fachwerkhäuser. Jeden Sommer kamen viele Touristen, um die **malerischen**, **von Blumen geschmückten** Gassen zu bewundern. Ein besonders **beliebtes** Ziel war das alte Schloss, **auf einem Hügel thronend** und einen **atemberaubenden** Blick über das Tal bietend.
Die **im Schlossmuseum ausgestellten** Artefakte erzählten von der **jahrhundertelangen**, **von Kriegen und Frieden geprägten** Geschichte der Region. Die Besucher, **von den Erzählungen des Führers fasziniert**, lauschten aufmerksam. Am Abend saßen die **zufrieden nach Hause kehrenden** Gäste oft in den kleinen Cafés, die **hausgemachten** Kuchen anboten.
  `,
  readingComprehensionExercises: [
    {
      id: 'b1-partizipien-adjektive-rq1',
      type: 'multiple_choice',
      question: 'Wofür war die kleine Stadt bekannt?',
      options: ['Für ihre modernen Gebäude', 'Für ihre gut erhaltenen Fachwerkhäuser', 'Für ihre Industrie', 'Für ihre vielen Seen'],
      correctAnswer: 'Für ihre gut erhaltenen Fachwerkhäuser',
      explanation: 'Im Text steht: "...bekannt für ihre **gut erhaltenen** Fachwerkhäuser."',
    },
    {
      id: 'b1-partizipien-adjektive-rq2',
      type: 'multiple_choice',
      question: 'Welche Eigenschaft wird dem Blick vom Schloss zugeschrieben?',
      options: ['langweilig', 'durchschnittlich', 'atemberaubend', 'eingeschränkt'],
      correctAnswer: 'atemberaubend',
      explanation: 'Im Text steht: "...einen **atemberaubenden** Blick über das Tal bietend."',
    },
  ],
  exercises: [
    {
      id: 'b1-partizipien-adjektive-ex1',
      type: 'fill_in_the_blank',
      question: 'Образуйте Partizip I от глагола "schlafen" и вставьте его с правильным окончанием: Das ___ (schlafen) Baby ist süß.',
      sentenceParts: ['Das ', ' Baby ist süß.'],
      correctAnswer: 'schlafende',
      explanation: 'Partizip I от "schlafen" - "schlafend". Перед существительным среднего рода в Nominativ с определенным артиклем "das" окончание -e.',
    },
    {
      id: 'b1-partizipien-adjektive-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "Ich habe ein ___ (schreiben, Part. II) Brief bekommen."',
      options: ['geschrieben', 'geschriebener', 'geschriebenes', 'geschriebenen'],
      correctAnswer: 'geschriebenen',
      explanation: 'Partizip II от "schreiben" - "geschrieben". "Ein Brief" (Akk. M.) -> "einen geschriebenen Brief".',
    },
    {
      id: 'b1-partizipien-adjektive-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя Partizip I как прилагательное: "Бегущие дети смеются."',
      prompt: 'Бегущие дети смеются.',
      languageDirection: 'to_german',
      correctAnswer: 'Die laufenden Kinder lachen.',
      explanation: 'Partizip I от "laufen" - "laufend". Множественное число, Nominativ, с определенным артиклем: die laufenden Kinder.',
    },
    {
      id: 'b1-partizipien-adjektive-ex4',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте относительное придаточное в конструкцию с Partizip II: "Das Auto, das repariert wurde, gehört meinem Vater." → Das ___ Auto gehört meinem Vater.',
      sentenceParts: ['Das ', ' Auto gehört meinem Vater.'],
      correctAnswer: 'reparierte',
      explanation: 'Partizip II от "reparieren" - "repariert". Перед существительным среднего рода в Nominativ с определенным артиклем "das" окончание -e.',
    },
    {
      id: 'b1-partizipien-adjektive-wp1',
      type: 'writing_prompt',
      question: 'Опишите любой предмет или явление, используя как минимум одно Partizip I и одно Partizip II в качестве прилагательных (например, "Die aufgehende Sonne tauchte die verschneiten Berggipfel in ein goldenes Licht").',
      suggestedLength: '1-2 предложения',
    },
  ],
};

