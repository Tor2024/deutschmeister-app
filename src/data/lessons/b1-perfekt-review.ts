
import type { Lesson } from '@/types';

// --- Урок B1: Perfekt vs. Präteritum (Применение и различия) ---
export const lessonB1PerfektReview: Lesson = {
  id: 'b1-perfekt-review',
  level: 'B1',
  topic: 'Perfekt vs. Präteritum (Применение и различия)',
  theory: `
В немецком языке для выражения прошедшего времени используются в основном два времени: Perfekt и Präteritum. Хотя оба они переводятся на русский язык прошедшим временем, их употребление различается в зависимости от стиля речи и типа глагола.

**1. Perfekt (Прошедшее время)**
   - **Образование:** \`haben\` или \`sein\` (в Präsens) + Partizip II смыслового глагола.
   - **Употребление:**
     *   **Устная речь:** Это основное разговорное время для описания прошедших событий.
         *Beispiel: Ich **habe** gestern meine Freunde **getroffen**.* (Я вчера встретил своих друзей.)
         *Beispiel: Wir **sind** ins Kino **gegangen**.* (Мы пошли в кино.)
     *   **Личная переписка:** В письмах, email друзьям и знакомым.
     *   Когда результат действия важен для настоящего момента.
         *Beispiel: Ich **habe** meine Schlüssel **verloren** (und kann jetzt nicht nach Hause).* (Я потерял ключи (и теперь не могу попасть домой).)

**2. Präteritum (Прошедшее простое/повествовательное время)**
   - **Образование:**
     *   Слабые глаголы: основа + \`-te-\` + окончания (ich lern**te**, du lern**test**...).
     *   Сильные глаголы: изменение корневой гласной, особые окончания (ich g**i**ng, du g**i**ngst...).
   - **Употребление:**
     *   **Письменная речь:** Это основное время для рассказов, романов, газетных статей, официальных отчетов, исторических описаний. Оно придает повествованию более объективный и дистанцированный характер.
         *Beispiel: Es **war** einmal ein König, der **hatte** drei Töchter.* (Жил-был король, у которого было три дочери.)
         *Beispiel: Der Zweite Weltkrieg **begann** 1939.* (Вторая мировая война началась в 1939 году.)
     *   **Глаголы \`sein\`, \`haben\` и модальные глаголы:** Эти глаголы очень часто используются в Präteritum даже в устной речи, так как их формы Perfekt могут быть громоздкими или менее употребительными в разговоре.
         *   *sein → war*: *Ich **war** gestern müde.* (Я вчера был уставшим.) (вместо: *Ich bin gestern müde gewesen.*)
         *   *haben → hatte*: *Wir **hatten** keine Zeit.* (У нас не было времени.) (вместо: *Wir haben keine Zeit gehabt.*)
         *   *können → konnte*: *Ich **konnte** nicht kommen.* (Я не мог прийти.)
         *   *müssen → musste*: *Er **musste** arbeiten.* (Он должен был работать.)
         *   *wollen → wollte*: *Sie **wollte** das nicht.* (Она этого не хотела.)
     *   Некоторые другие употребительные глаголы (\`wissen\`, \`denken\`, \`gehen\`, \`kommen\`, \`finden\`, \`sehen\` и др.) также могут использоваться в Präteritum в устных рассказах, особенно в некоторых регионах Германии.

**Сравнение:**

| Ситуация                                  | Perfekt                                      | Präteritum                                 |
|-------------------------------------------|----------------------------------------------|--------------------------------------------|
| **Разговор о вчерашнем дне** (устно)      | Ich **habe** gut **geschlafen**.             | Ich **schlief** gut. (менее типично)       |
|                                           | Er **ist** spät **gekommen**.                | Er **kam** spät. (тоже возможно)         |
| **Рассказ в книге**                       | (редко, для особых эффектов)                | Der Held **kämpfte** tapfer.               |
| **"Я был болен"** (устно)                 | Ich **bin** krank **gewesen**. (реже)        | Ich **war** krank. (более типично)         |
| **"У меня была идея"** (устно)            | Ich **habe** eine Idee **gehabt**. (реже)    | Ich **hatte** eine Idee. (более типично)   |
| **"Я хотел помочь"** (устно)             | Ich **habe** helfen **wollen**. (особая форма) | Ich **wollte** helfen. (более типично)   |

**Важно:** Нет строгого правила, которое бы запрещало использовать Präteritum в устной речи (кроме sein/haben/модальных) или Perfekt в письменной. Однако указанные тенденции очень сильны и отражают стилистические нормы немецкого языка. Для уровня B1 важно начать чувствовать эту разницу и правильно выбирать время в зависимости от контекста.
  `,
  vocabulary: [
    { german: 'das Perfekt', russian: 'прошедшее время Перфект', example: 'Im Perfekt erzählt man meistens.' },
    { german: 'das Präteritum', russian: 'прошедшее время Претерит', example: 'Märchen stehen oft im Präteritum.' },
    { german: 'mündliche Sprache', russian: 'устная речь' },
    { german: 'schriftliche Sprache', russian: 'письменная речь' },
    { german: 'erzählen (erzählte / hat erzählt)', russian: 'рассказывать', example: 'Sie erzählte eine Geschichte.' },
    { german: 'berichten (berichtete / hat berichtet)', russian: 'сообщать, докладывать', example: 'Die Zeitung berichtete über den Unfall.' },
    { german: 'sein (war / ist gewesen)', russian: 'быть', example: 'Wo warst du gestern? / Ich bin noch nie dort gewesen.' },
    { german: 'haben (hatte / hat gehabt)', russian: 'иметь', example: 'Früher hatte ich ein Fahrrad. / Hast du schon gegessen gehabt?' },
    { german: 'können (konnte / hat gekonnt)', russian: 'мочь, уметь', example: 'Ich konnte das nicht glauben.' },
    { german: 'müssen (musste / hat gemusst)', russian: 'быть должным', example: 'Wir mussten schnell handeln.' },
  ],
  readingText: `
Die Wahl zwischen Perfekt und Präteritum hängt oft vom Kontext und der gewünschten stilistischen Wirkung ab. In einem lebhaften Gespräch über das Wochenende wird man eher Sätze hören wie: "Wir sind wandern gegangen und haben danach in einem netten Café Kuchen gegessen." Diese Sätze im Perfekt klingen natürlich und direkt.
Stellt man sich jedoch vor, dieselben Ereignisse würden in einem Roman beschrieben, könnte es so aussehen: "Sie wanderten durch den sonnigen Wald. Die Vögel sangen, und ein leichter Wind wehte. Später kehrten sie in einem kleinen Café ein, wo sie duftenden Kuchen aßen und Kaffee tranken." Hier schafft das Präteritum eine erzählerische Distanz und einen fließenden Berichtscharakter.
Besonders deutlich wird der Unterschied bei den Hilfs- und Modalverben. Niemand würde im Alltag sagen: *"Ich bin gestern sehr müde gewesen."* Viel natürlicher klingt: *"Ich war gestern sehr müde."* Ähnlich verhält es sich mit *"Ich habe keine Zeit gehabt."* gegenüber *"Ich hatte keine Zeit."*
  `,
  readingComprehensionExercises: [
    {
      id: 'b1-perfekt-review-rq1',
      question: 'In welcher Kommunikationssituation wird Perfekt bevorzugt?',
      options: ['In formellen Berichten', 'In Märchen und Romanen', 'In der alltäglichen mündlichen Kommunikation', 'In historischen Abhandlungen'],
      correctAnswer: 'In der alltäglichen mündlichen Kommunikation',
      explanation: 'Perfekt ist das Haupttempus für die Beschreibung vergangener Ereignisse in der gesprochenen Sprache.',
    },
    {
      id: 'b1-perfekt-review-rq2',
      question: 'Welche Verben werden auch in der gesprochenen Sprache häufig im Präteritum verwendet?',
      options: ['Alle schwachen Verben', 'Nur starke Verben mit Vokalwechsel', 'Die Verben "sein", "haben" und Modalverben', 'Verben, die Bewegung ausdrücken'],
      correctAnswer: 'Die Verben "sein", "haben" und Modalverben',
      explanation: 'Die Präteritumformen von "sein", "haben" und Modalverben sind in der gesprochenen Sprache sehr gebräuchlich.',
    },
  ],
  exercises: [
    {
      id: 'b1-perfekt-review-ex1',
      type: 'multiple_choice',
      question: 'Wann verwendet man typischerweise das Präteritum?',
      options: ['In E-Mails an Freunde', 'Beim Erzählen von Witzen', 'In Zeitungsartikeln und Romanen', 'In Telefongesprächen'],
      correctAnswer: 'In Zeitungsartikeln und Romanen',
      explanation: 'Das Präteritum ist das typische Erzähltempus der Schriftsprache.',
    },
    {
      id: 'b1-perfekt-review-ex2',
      type: 'fill_in_the_blank',
      question: 'Ergänze den Satz im Perfekt: Gestern Abend ___ ich einen Film ___. (sehen)',
      sentenceParts: ['Gestern Abend ', ' ich einen Film ', '.'],
      correctAnswer: 'habe, gesehen',
      explanation: 'Perfekt von "sehen" mit "ich": habe gesehen.',
    },
    {
      id: 'b1-perfekt-review-ex3',
      type: 'translation',
      question: 'Übersetze ins Deutsche (verwende die typische Form für mündliche Erzählung): "Я вчера был в Берлине."',
      prompt: 'Я вчера был в Берлине.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich war gestern in Berlin.',
      explanation: 'Für "sein" wird im mündlichen Bericht über Vergangenes meist das Präteritum "war" verwendet.',
    },
    {
      id: 'b1-perfekt-review-ex4',
      type: 'writing_prompt',
      question: 'Erzähle kurz (2-3 Sätze), was du letztes Wochenende gemacht hast. Versuche, Perfekt für die meisten Verben zu verwenden, aber Präteritum für "sein" und "haben", falls passend.',
      suggestedLength: '2-3 Sätze',
    }
  ],
};
