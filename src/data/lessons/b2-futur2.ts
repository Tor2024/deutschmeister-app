
import type { Lesson } from '@/types';

// --- Урок B2: Будущее совершенное время (Futur II) ---
export const lessonB2Futur2: Lesson = {
  id: 'b2-futur2',
  level: 'B2',
  topic: 'Будущее совершенное время (Futur II)',
  theory: `Futur II (будущее совершенное время) используется в немецком языке для выражения двух основных идей:

**1. Завершенное действие в будущем (Vollendete Zukunft):**
   Это действие, которое будет завершено к определенному моменту в будущем или до начала другого будущего действия. Часто используются временные указатели, такие как \`bis dahin\` (к тому времени), \`bis morgen Abend\` (к завтрашнему вечеру), \`in einem Jahr\` (через год, когда говорим о результате).
   *Пример: Bis nächstes Jahr **werde** ich mein Studium **abgeschlossen haben**.* (К следующему году я закончу свою учебу.)
   *Пример: Wenn du ankommst, **werden** wir schon **gegessen haben**.* (Когда ты приедешь, мы уже поедим.)

**2. Предположение о завершенном действии в прошлом или настоящем (Vermutung über Vergangenes/Gegenwärtiges):**
   Futur II также используется для выражения сильного предположения или вывода о том, что какое-то действие уже произошло (в прошлом) или какое-то состояние уже наступило (в настоящем, но результат виден). Часто сопровождается наречиями вероятности, такими как \`wohl\` (вероятно), \`sicherlich\` (наверняка), \`vermutlich\` (предположительно), \`wahrscheinlich\` (вероятно).
   *Пример: Er ist nicht zur Arbeit gekommen. Er **wird wohl krank geworden sein**.* (Он не пришел на работу. Он, вероятно, заболел.)
   *Пример: Das Licht ist aus. Sie **werden sicherlich schon schlafen gegangen sein**.* (Свет выключен. Они, наверняка, уже пошли спать.)
   *Пример: Du siehst müde aus. Du **wirst vermutlich schlecht geschlafen haben**.* (Ты выглядишь уставшим. Ты, предположительно, плохо спал.)

**Образование Futur II:**
Формула: **werden (спрягаемая форма в Präsens) + Partizip II смыслового глагола + Infinitiv \`haben\` или \`sein\`**

-   Вспомогательный глагол **werden** спрягается в Präsens:
    -   ich werde
    -   du wirst
    -   er/sie/es wird
    -   wir werden
    -   ihr werdet
    -   sie/Sie werden
-   **Partizip II** – это третья основная форма смыслового глагола (например, gemacht, gelesen, gefahren).
-   Выбор вспомогательного глагола **haben** или **sein** в инфинитиве в конце предложения зависит от того, с каким вспомогательным глаголом основной смысловой глагол образует Perfekt:
    -   Если глагол образует Perfekt с \`haben\` (большинство глаголов), то в Futur II используется инфинитив \`haben\`.
        *Beispiel: lernen → Perfekt: hat gelernt → Futur II: wird gelernt **haben***
    -   Если глагол образует Perfekt с \`sein\` (глаголы движения, изменения состояния, а также sein, bleiben, werden), то в Futur II используется инфинитив \`sein\`.
        *Beispiel: gehen → Perfekt: ist gegangen → Futur II: wird gegangen **sein***

**Порядок слов:**
-   В главном предложении: спрягаемая форма \`werden\` стоит на втором месте, а Partizip II и инфинитив \`haben\`/\`sein\` – в конце предложения (Partizip II перед haben/sein).
    *   *Ich **werde** bis morgen die Aufgabe **gemacht haben**.*
-   В придаточном предложении: спрягаемая форма \`werden\` стоит в самом конце, перед ней – Partizip II и инфинитив \`haben\`/\`sein\`.
    *   *Ich hoffe, dass er bis dahin die Prüfung **bestanden haben wird**.*

Futur II используется реже, чем Futur I, но его знание необходимо для точного выражения временных отношений и предположений на продвинутом уровне.`,
  vocabulary: [
    { german: 'das Futur II', russian: 'будущее совершенное время' },
    { german: 'die vollendete Zukunft', russian: 'завершенное будущее (одно из значений Futur II)' },
    { german: 'die Vermutung (-en)', russian: 'предположение', example: 'Das ist nur eine Vermutung über die Vergangenheit.' },
    { german: 'werden (als Hilfsverb für Futur II)', russian: 'вспомогательный глагол для Futur II', example: 'Er wird es geschafft haben.' },
    { german: 'das Partizip II', russian: 'причастие II (третья форма глагола)' },
    { german: 'haben (als Infinitiv im Futur II)', russian: 'инфинитив "haben" в Futur II', example: 'Sie wird das Buch gelesen haben.' },
    { german: 'sein (als Infinitiv im Futur II)', russian: 'инфинитив "sein" в Futur II', example: 'Er wird schon angekommen sein.' },
    { german: 'wohl', russian: 'вероятно, пожалуй (для предположений)', example: 'Er wird wohl zu Hause sein.' },
    { german: 'sicherlich', russian: 'наверняка, несомненно', example: 'Sie wird sicherlich die Prüfung bestanden haben.' },
    { german: 'vermutlich', russian: 'предположительно', example: 'Er wird vermutlich den Zug verpasst haben.' },
    { german: 'wahrscheinlich', russian: 'вероятно', example: 'Es wird wahrscheinlich morgen regnen.' },
    { german: 'bis dahin', russian: 'к тому времени, до тех пор', example: 'Bis dahin werde ich die Arbeit erledigt haben.' },
  ],
  exercises: [
    {
      id: 'b2-futur2-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную конструкцию Futur II для выражения предположения: "Он, вероятно, забыл встречу."',
      options: [
        'Er wird wohl den Termin vergessen.',
        'Er wird wohl den Termin vergessen haben.',
        'Er hat wohl den Termin vergessen werden.',
        'Er würde wohl den Termin vergessen haben.'
      ],
      correctAnswer: 'Er wird wohl den Termin vergessen haben.',
      explanation: 'Предположение о прошлом событии выражается через Futur II: werden (wird) + Partizip II (vergessen) + haben (Infinitiv). "Wohl" усиливает предположение.',
    },
    {
      id: 'b2-futur2-ex2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение в Futur II (завершенное действие в будущем): Bis zum Abend ___ wir die ganze Wohnung ___ (aufräumen).',
      sentenceParts: ['Bis zum Abend ', ' wir die ganze Wohnung ', '.'],
      correctAnswer: 'werden, aufgeräumt haben',
      explanation: 'Futur II: werden + Partizip II (aufgeräumt) + haben. "Wir werden ... aufgeräumt haben".',
    },
    {
      id: 'b2-futur2-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя Futur II: "К следующей неделе они, должно быть, уже переедут."',
      prompt: 'К следующей неделе они, должно быть, уже переедут.',
      languageDirection: 'to_german',
      correctAnswer: 'Bis nächste Woche werden sie wohl schon umgezogen sein.',
      // Альтернатива: Bis nächste Woche dürften sie schon umgezogen sein. (с subjektives dürfen)
      explanation: 'Предположение о завершенном действии к моменту в будущем. "umziehen" образует Perfekt с "sein", поэтому в Futur II используется инфинитив "sein".',
    },
    {
      id: 'b2-futur2-ex4',
      type: 'multiple_choice',
      question: 'Какая из функций НЕ является типичной для Futur II?',
      options: [
        'Выражение действия, которое завершится к моменту в будущем.',
        'Выражение сильного предположения о прошлом событии.',
        'Описание текущего, продолжающегося действия.',
        'Выражение предположения о настоящем состоянии.'
      ],
      correctAnswer: 'Описание текущего, продолжающегося действия.',
      explanation: 'Для описания текущего, продолжающегося действия используется Präsens. Futur II связан с завершенностью или предположениями о завершенности.',
    },
    {
      id: 'b2-futur2-ex5',
      type: 'fill_in_the_blank',
      question: 'Образуйте Futur II: "Sie (schreiben) den Bericht bis Freitag fertig."',
      sentenceParts: ['Sie ', ' den Bericht bis Freitag fertig ', '.'],
      correctAnswer: 'wird, geschrieben haben',
      explanation: 'Futur II: wird + Partizip II (geschrieben) + haben.',
    },
  ],
};
