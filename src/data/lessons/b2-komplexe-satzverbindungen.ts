
import type { Lesson } from '@/types';

// --- Урок B2: Сложные союзы и многокомпонентные коннекторы (Komplexe Satzverbindungen) ---
export const lessonB2KomplexeSatzverbindungen: Lesson = {
  id: 'b2-komplexe-satzverbindungen',
  level: 'B2',
  topic: 'Сложные союзы и коннекторы (Doppelkonjunktionen, mehrteilige Konnektoren)',
  theory: `Сложные союзы и многокомпонентные коннекторы (Doppelkonjunktionen und mehrteilige Konnektoren) используются для установления более точных и разнообразных логических связей между частями предложения или целыми предложениями. Они обогащают речь и позволяют выражать более сложные мысли.

**1. Двойные союзы (Doppelkonjunktionen):**
   Двойные союзы состоят из двух частей, которые обрамляют или связывают соединяемые элементы.

   *   **entweder ... oder** (или ... или; либо ... либо)
       Указывает на выбор между двумя возможностями.
       *Beispiel: Du kannst **entweder** mit dem Bus fahren **oder** ein Taxi nehmen.* (Ты можешь либо поехать на автобусе, либо взять такси.)
       *Beispiel: Wir treffen uns **entweder** heute Abend **oder** morgen früh.*

   *   **weder ... noch** (ни ... ни)
       Используется для двойного отрицания; обе части одинаково отрицаются.
       *Beispiel: Er hat **weder** Geld **noch** Zeit.* (У него нет ни денег, ни времени.)
       *Beispiel: Sie konnte **weder** kommen **noch** anrufen.* (Она не смогла ни прийти, ни позвонить.)
       (Обратите внимание: глагол после "weder...noch" стоит в утвердительной форме, так как отрицание уже выражено союзом.)

   *   **sowohl ... als auch** (как ... так и; и ... и)
       Соединяет два равноправных элемента, подчеркивая, что оба верны или присутствуют.
       *Beispiel: Er spricht **sowohl** Englisch **als auch** Spanisch.* (Он говорит как на английском, так и на испанском.)
       *Beispiel: **Sowohl** die Studenten **als auch** die Professoren waren mit dem Ergebnis zufrieden.*

   *   **nicht nur ... sondern auch** (не только ... но и)
       Подчеркивает, что к первому элементу добавляется еще и второй, часто более важный или неожиданный.
       *Beispiel: Sie ist **nicht nur** intelligent, **sondern auch** sehr fleißig.* (Она не только умна, но и очень прилежна.)
       *Beispiel: Er hat **nicht nur** das Buch gelesen, **sondern auch** einen Film darüber gesehen.*

   *   **je ... desto/umso** (чем ... тем)
       Выражает пропорциональную зависимость между двумя действиями или качествами.
       **Порядок слов:**
       - В части предложения с **je**: союз \`je\` + сравнительная степень прилагательного/наречия + (подлежащее + остальные члены предложения) + глагол в конце.
       - В части предложения с **desto/umso**: союз \`desto/umso\` + сравнительная степень прилагательного/наreчия + глагол + подлежащее + (остальные члены предложения).
       *Beispiel: **Je** mehr man lernt, **desto** besser versteht man.* (Чем больше учишься, тем лучше понимаешь.)
       *Beispiel: **Je** schneller er fuhr, **umso** gefährlicher wurde es.* (Чем быстрее он ехал, тем опаснее становилось.)

**2. Другие многокомпонентные коннекторы и наречия:**

   *   **einerseits ... andererseits** (с одной стороны ... с другой стороны)
       Используется для противопоставления двух аспектов или точек зрения.
       *Beispiel: **Einerseits** möchte ich reisen, **andererseits** habe ich nicht viel Geld.*
       *Beispiel: Das Projekt hat **einerseits** viele Vorteile, **andererseits** gibt es auch einige Risiken.*
       (Порядок слов после \`einerseits\` и \`andererseits\` может быть прямым или обратным, если они начинают предложение или его часть.)

   *   **zwar ..., aber/jedoch/dennoch** (хотя/правда ..., но/однако/тем не менее)
       Выражает уступку: признается первый факт, но затем вводится контраргумент или ограничение.
       *Beispiel: Das Wetter ist **zwar** schön, **aber** es ist ziemlich kalt.* (Погода, правда, хорошая, но довольно холодно.)
       *Beispiel: Er hat **zwar** viel Erfahrung, **jedoch** fehlt ihm die notwendige Qualifikation.* (У него, хотя, и много опыта, однако ему не хватает необходимой квалификации.)

   *   **teils ... teils** (частично ... частично; отчасти ... отчасти)
       Указывает, что что-то состоит из двух или более частей или имеет разные аспекты.
       *Beispiel: Die Studenten waren **teils** zufrieden, **teils** enttäuscht von den Ergebnissen.*
       *Beispiel: Das Publikum reagierte **teils** mit Applaus, **teils** mit Schweigen.*

Знание и использование этих конструкций делает речь более структурированной, логичной и выразительной, что особенно важно на уровне B2.`,
  vocabulary: [
    { german: 'die Doppelkonjunktion (-en)', russian: 'двойной союз' },
    { german: 'der mehrteilige Konnektor (-en)', russian: 'многокомпонентный коннектор' },
    { german: 'entweder ... oder', russian: 'или ... или; либо ... либо', example: 'Entweder du gehst oder ich.' },
    { german: 'weder ... noch', russian: 'ни ... ни', example: 'Er mag weder Kaffee noch Tee.' },
    { german: 'sowohl ... als auch', russian: 'как ... так и; и ... и', example: 'Sie ist sowohl klug als auch schön.' },
    { german: 'nicht nur ... sondern auch', russian: 'не только ... но и', example: 'Er ist nicht nur mein Kollege, sondern auch mein Freund.' },
    { german: 'je ... desto/umso', russian: 'чем ... тем', example: 'Je länger ich warte, desto ungeduldiger werde ich.' },
    { german: 'einerseits ... andererseits', russian: 'с одной стороны ... с другой стороны', example: 'Einerseits ist die Stadt schön, andererseits ist sie sehr laut.' },
    { german: 'zwar ..., aber/jedoch/dennoch', russian: 'хотя/правда ..., но/однако/тем не менее', example: 'Es ist zwar teuer, aber es lohnt sich.' },
    { german: 'teils ... teils', russian: 'частично ... частично', example: 'Die Meinungen waren teils positiv, teils negativ.' },
  ],
  exercises: [
    {
      id: 'b2-komplexekonj-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный двойной союз: "___ er arbeitet viel, ___ er hat auch Zeit für seine Hobbys."',
      options: ['Weder ... noch', 'Nicht nur ... sondern auch', 'Entweder ... oder', 'Sowohl ... als auch'],
      correctAnswer: 'Nicht nur ... sondern auch',
      explanation: '"Не только ..., но и" подходит по смыслу: "Он не только много работает, но и у него есть время на хобби".',
    },
    {
      id: 'b2-komplexekonj-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте вторую часть двойного союза: "Ich möchte ___ Äpfel ___ Birnen kaufen."',
      sentenceParts: ['Ich möchte sowohl Äpfel ', ' Birnen kaufen.'],
      correctAnswer: 'als auch',
      explanation: 'Союз "sowohl ... als auch" (как ... так и).',
    },
    {
      id: 'b2-komplexekonj-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Чем больше ты читаешь, тем умнее ты становишься."',
      prompt: 'Чем больше ты читаешь, тем умнее ты становишься.',
      languageDirection: 'to_german',
      correctAnswer: 'Je mehr du liest, desto klüger wirst du.',
      explanation: 'Конструкция "je ... desto". В части с "je" глагол в конце ("je mehr du liest"), в части с "desto" сравнительная степень прилагательного идет сразу после "desto", затем глагол и подлежащее ("desto klüger wirst du").',
    },
    {
      id: 'b2-komplexekonj-ex4',
      type: 'multiple_choice',
      question: 'Какая конструкция используется для выражения выбора между двумя вариантами?',
      options: ['weder ... noch', 'sowohl ... als auch', 'entweder ... oder', 'je ... desto'],
      correctAnswer: 'entweder ... oder',
      explanation: '"Entweder ... oder" (либо ... либо) используется для представления альтернатив.',
    },
    {
      id: 'b2-komplexekonj-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Das Auto ist ___ sehr alt, ___ es fährt noch gut."',
      sentenceParts: ['Das Auto ist ', ' sehr alt, ', ' es fährt noch gut.'],
      correctAnswer: 'zwar, aber', // или jedoch, dennoch
      explanation: 'Конструкция "zwar ..., aber/jedoch/dennoch" (хотя/правда ..., но/однако). "Das Auto ist zwar sehr alt, aber es fährt noch gut."',
    },
    {
      id: 'b2-komplexekonj-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Он не ест ни мясо, ни рыбу."',
      prompt: 'Он не ест ни мясо, ни рыбу.',
      languageDirection: 'to_german',
      correctAnswer: 'Er isst weder Fleisch noch Fisch.',
      explanation: 'Для двойного отрицания используется "weder ... noch". Глагол "isst" стоит в утвердительной форме.',
    },
  ],
};
