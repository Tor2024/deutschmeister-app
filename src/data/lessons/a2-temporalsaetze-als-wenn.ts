
import type { Lesson } from '@/types';

// --- Урок A2: Придаточные времени с 'als' и 'wenn' ---
export const lessonA2TemporalsaetzeAlsWenn: Lesson = {
  id: 'a2-temporalsaetze-als-wenn',
  level: 'A2',
  topic: "Придаточные времени с 'als' и 'wenn'",
  theory: `
Придаточные предложения времени (Temporalsätze) отвечают на вопрос "Wann?" (Когда?) и вводятся различными союзами. На уровне А2 важно различать союзы **als** и **wenn**, которые оба могут переводиться как "когда".

**1. Союз \`als\` (когда)**
Используется для описания **однократного, завершенного действия или периода в прошлом**.
   - Это было одно событие или один конкретный отрезок времени в прошлом, и он больше не повторялся в том же контексте.

   *Примеры:*
   *   ***Als** ich 10 Jahre alt war, bekam ich mein erstes Fahrrad.* (Когда мне было 10 лет, я получил свой первый велосипед. – Это был один период в прошлом.)
   *   ***Als** er gestern anrief, war ich nicht zu Hause.* (Когда он вчера позвонил, меня не было дома. – Один конкретный звонок вчера.)
   *   ***Als** wir in Italien Urlaub machten, besuchten wir Rom.* (Когда мы были в отпуске в Италии, мы посетили Рим. – Один конкретный отпуск.)

**2. Союз \`wenn\` (когда; если)**
Используется в нескольких случаях:

   *   **Для многократных, повторяющихся действий в прошлом, настоящем или будущем.**
       Если действие происходило или происходит регулярно, или если оно могло произойти несколько раз. Часто используется с наречием \`immer\` (всегда): \`immer wenn\`.
       *   Прошлое: *Immer **wenn** ich meine Oma besuchte, gab es Kuchen.* (Всегда, когда я навещал бабушку, был пирог.)
       *   Прошлое: ***Wenn** ich als Kind krank war, las mir meine Mutter vor.* (Когда я в детстве болел (каждый раз, когда болел), моя мама мне читала.)
       *   Настоящее: ***Wenn** ich morgens aufstehe, trinke ich zuerst Kaffee.* (Когда я утром встаю (каждый день), я сначала пью кофе.)
       *   Будущее: ***Wenn** wir nächstes Jahr Urlaub haben, fahren wir ans Meer.* (Когда у нас в следующем году будет отпуск, мы поедем на море.)

   *   **Для однократного действия в настоящем или будущем времени.**
       В этом случае \`wenn\` также может иметь условное значение "если".
       *   Настоящее: *Sag mir Bescheid, **wenn** du fertig bist.* (Дай мне знать, когда ты будешь готов.)
       *   Будущее: *Ich rufe dich an, **wenn** ich ankomme.* (Я позвоню тебе, когда приеду.)
       *   Будущее/Условие: ***Wenn** es morgen regnet, bleiben wir zu Hause.* (Если завтра будет дождь, мы останемся дома.)

**Порядок слов:**
В придаточных предложениях времени, вводимых союзами \`als\` и \`wenn\`, спрягаемый глагол всегда стоит **в самом конце предложения**.
Главное и придаточное предложения разделяются запятой. Придаточное может стоять как до, так и после главного предложения.
   *   *Ich war glücklich, **als** ich dich sah.*
   *   ***Als** ich dich sah, war ich glücklich.*

Запомнить разницу между \`als\` (один раз в прошлом) и \`wenn\` (много раз в прошлом/настоящем/будущем или один раз в настоящем/будущем) очень важно для правильного описания событий во времени.
`,
  vocabulary: [
    { german: 'als', russian: 'когда (однократное действие/период в прошлом)', example: 'Als ich klein war, spielte ich viel.' },
    { german: 'wenn', russian: 'когда (повторяющееся действие; однократное в настоящем/будущем); если (условие)', example: 'Wenn ich Zeit habe, lese ich. / Ruf an, wenn du ankommst.' },
    { german: 'immer wenn', russian: 'всегда когда, всякий раз когда', example: 'Immer wenn es schneit, bauen wir einen Schneemann.' },
    { german: 'das Mal (-e)', russian: 'раз', example: 'das erste Mal (первый раз)' },
    { german: 'damals', russian: 'тогда, в то время (часто с als)', example: 'Damals, als ich jung war...' },
    { german: 'jedes Mal', russian: 'каждый раз (часто с wenn)', example: 'Jedes Mal, wenn ich ihn sehe...' },
  ],
  exercises: [
    {
      id: 'a2-temporalsaetze-als-wenn-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: ___ ich gestern nach Hause kam, war niemand da.',
      options: ['Wenn', 'Als', 'Obwohl'],
      correctAnswer: 'Als',
      explanation: 'Действие "вчера пришел домой" – это однократное событие в прошлом, поэтому используется союз "als".',
    },
    {
      id: 'a2-temporalsaetze-als-wenn-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный союз: Immer ___, ich meine Tante besuchte, erzählte sie interessante Geschichten.',
      sentenceParts: ['Immer ', ', ich meine Tante besuchte, erzählte sie interessante Geschichten.'],
      correctAnswer: 'wenn',
      explanation: '"Immer wenn" (всегда когда) указывает на повторяющееся действие в прошлом.',
    },
    {
      id: 'a2-temporalsaetze-als-wenn-ex3',
      type: 'multiple_choice',
      question: 'Какой союз подойдет: ___ du morgen Zeit hast, können wir uns treffen.',
      options: ['Als', 'Wenn', 'Dass'],
      correctAnswer: 'Wenn',
      explanation: 'Речь идет об однократном событии в будущем, которое также может быть условием, поэтому используется "wenn".',
    },
    {
      id: 'a2-temporalsaetze-als-wenn-ex4',
      type: 'translation',
      question: 'Переведите на немецкий: "Когда мне было шесть лет, я пошел в школу."',
      prompt: 'Когда мне было шесть лет, я пошел в школу.',
      languageDirection: 'to_german',
      correctAnswer: 'Als ich sechs Jahre alt war, ging ich in die Schule.',
      explanation: '"Когда мне было шесть лет" - это один конкретный период в прошлом, поэтому используется "als".',
    },
  ],
};
