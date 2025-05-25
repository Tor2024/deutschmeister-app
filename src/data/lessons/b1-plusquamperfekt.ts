
import type { Lesson } from '@/types';

// --- Урок B1: Предпрошедшее время Plusquamperfekt ---
export const lessonB1Plusquamperfekt: Lesson = {
  id: 'b1-plusquamperfekt',
  level: 'B1',
  topic: 'Предпрошедшее время (Plusquamperfekt)',
  theory: `Plusquamperfekt (предпрошедшее время, или "давнопрошедшее время") используется в немецком языке для описания действия, которое произошло и завершилось **до** другого действия или момента в прошлом. Это время помогает установить последовательность событий в прошлом. Часто оно используется в сочетании с Präteritum или Perfekt, которые описывают последующее действие.

**1. Образование Plusquamperfekt:**
Plusquamperfekt образуется с помощью вспомогательного глагола **haben** или **sein** в их формах **Präteritum** (\`hatte\` или \`war\`) и **Partizip II** (причастия II) смыслового глагола.
Формула: **hatte/war (в Präteritum) + Partizip II**

**Спряжение вспомогательных глаголов в Präteritum:**
*   **hatte (от haben):**
    *   ich hatte
    *   du hattest
    *   er/sie/es hatte
    *   wir hatten
    *   ihr hattet
    *   sie/Sie hatten
*   **war (от sein):**
    *   ich war
    *   du warst
    *   er/sie/es war
    *   wir waren
    *   ihr wart
    *   sie/Sie waren

**2. Выбор вспомогательного глагола: \`hatte\` или \`war\`?**
Правила выбора вспомогательного глагола \`hatte\` или \`war\` в Plusquamperfekt точно такие же, как и для выбора \`haben\` или \`sein\` в Perfekt:
*   **С глаголом \`war\` Plusquamperfekt образуют:**
    1.  Глаголы движения, обозначающие перемещение (например, gehen, fahren, fliegen, kommen, laufen, reisen).
    2.  Глаголы изменения состояния (например, aufstehen, einschlafen, sterben, wachsen, aufwachen).
    3.  Глаголы: sein, bleiben, werden.
*   **С глаголом \`hatte\` Plusquamperfekt образуют:**
    1.  Большинство других глаголов, включая все переходные глаголы (требующие Akkusativ), возвратные глаголы, модальные глаголы (когда используются без другого инфинитива) и многие непереходные глаголы, не обозначающие движение или изменение состояния.

**3. Порядок слов в предложении с Plusquamperfekt:**
*   **В главном предложении:** вспомогательный глагол \`hatte\` или \`war\` стоит на втором месте, а Partizip II – в конце предложения.
    *   *Ich **hatte** das Buch schon **gelesen**, bevor der Film begann.* (Я уже прочитал книгу до того, как начался фильм.)
    *   *Sie **war** nach Hause **gegangen**, als ich anrief.* (Она ушла домой, когда я позвонил.)
*   **В придаточном предложении:** вспомогательный глагол \`hatte\` или \`war\` стоит в самом конце, перед ним – Partizip II.
    *   *Nachdem er die Arbeit **beendet hatte**, machte er eine Pause.* (После того как он закончил работу, он сделал перерыв.)
    *   *Obwohl sie viel **gelernt hatte**, bestand sie die Prüfung nicht.* (Хотя она много учила, она не сдала экзамен.)

**4. Использование Plusquamperfekt (Vorvergangenheit):**
Plusquamperfekt подчеркивает, что одно действие в прошлом предшествовало другому действию в прошлом.
*   *Als ich am Bahnhof ankam (Präteritum), **war** der Zug schon **abgefahren** (Plusquamperfekt).* (Когда я прибыл на вокзал, поезд уже уехал.)
*   *Er konnte das Auto nicht kaufen (Präteritum), weil er sein Geld **verloren hatte** (Plusquamperfekt).* (Он не мог купить машину, потому что он потерял свои деньги.)
*   *Nachdem wir das Museum **besichtigt hatten** (Plusquamperfekt), gingen wir essen (Präteritum).* (После того как мы осмотрели музей, мы пошли есть.)

Запоминание форм Präteritum для \`haben\` и \`sein\` и правил выбора вспомогательного глагола являются ключевыми для правильного использования Plusquamperfekt.`,
  vocabulary: [
    { german: 'das Plusquamperfekt', russian: 'предпрошедшее время', example: 'Das Plusquamperfekt drückt die Vorvergangenheit aus.' },
    { german: 'die Vorvergangenheit', russian: 'предшествование в прошлом' },
    { german: 'hatte (Präteritum von haben)', russian: 'имел (вспомогательный глагол)', example: 'Ich hatte gegessen.' },
    { german: 'war (Präteritum von sein)', russian: 'был (вспомогательный глагол)', example: 'Er war gegangen.' },
    { german: 'nachdem (+ Nebensatz mit Plusquamperfekt)', russian: 'после того как', example: 'Nachdem er gefrühstückt hatte, ging er zur Arbeit.' },
    { german: 'bevor (+ Nebensatz)', russian: 'прежде чем, до того как', example: 'Ich hatte meine Hausaufgaben gemacht, bevor meine Freunde kamen.' },
    { german: 'als (Temporalsatz in der Vergangenheit)', russian: 'когда (однократное действие в прошлом)', example: 'Als ich anrief, war er schon gegangen.' },
    { german: 'lesen (gelesen)', russian: 'читать (прочитанный)', example: 'Sie hatte das Buch bereits gelesen.' },
    { german: 'gehen (gegangen)', russian: 'идти (ушедший)', example: 'Er war schon gegangen, als sie ankam.' },
    { german: 'ankommen (angekommen)', russian: 'прибывать (прибывший)', example: 'Der Brief war gestern angekommen.' },
    { german: 'verlieren (verloren)', russian: 'терять (потерянный)', example: 'Er hatte seinen Schlüssel verloren.' },
    { german: 'essen (gegessen)', russian: 'есть (съевший)', example: 'Wir hatten schon gegessen.' },
  ],
  exercises: [
    {
      id: 'b1-plusquamperfekt-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный вспомогательный глагол: Nachdem ich meine Arbeit ___ (beenden), ging ich nach Hause.',
      options: ['hatte beendet', 'war beendet', 'habe beendet', 'bin beendet'],
      correctAnswer: 'hatte beendet',
      explanation: 'Plusquamperfekt образуется с "hatte" или "war" + Partizip II. Глагол "beenden" требует "haben" в Perfekt, следовательно, "hatte" в Plusquamperfekt.',
    },
    {
      id: 'b1-plusquamperfekt-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол "sein" в Präteritum для Plusquamperfekt: Als der Wecker klingelte, ___ ich schon ___. (aufwachen)',
      sentenceParts: ['Als der Wecker klingelte, ', ' ich schon ', '.'],
      correctAnswer: 'war, aufgewacht',
      explanation: 'Глагол "aufwachen" (просыпаться) - изменение состояния, требует "sein" в Perfekt/Plusquamperfekt. Präteritum от "sein" для "ich" - "war". Partizip II от "aufwachen" - "aufgewacht". "war ich schon aufgewacht".',
    },
    {
      id: 'b1-plusquamperfekt-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он уже позавтракал, когда ему позвонили."',
      prompt: 'Он уже позавтракал, когда ему позвонили.',
      languageDirection: 'to_german',
      correctAnswer: 'Er hatte schon gefrühstückt, als man ihn anrief.',
      explanation: 'Действие "позавтракал" (Plusquamperfekt: hatte gefrühstückt) произошло до действия "позвонили" (Präteritum: anrief).',
    },
    {
      id: 'b1-plusquamperfekt-ex4',
      type: 'multiple_choice',
      question: 'Какое предложение построено правильно?',
      options: [
        'Bevor er kam, wir hatten das Essen gekocht.',
        'Bevor er kam, hatten wir das Essen gekocht.',
        'Bevor er kam, wir das Essen gekocht hatten.'
      ],
      correctAnswer: 'Bevor er kam, hatten wir das Essen gekocht.',
      explanation: 'В главном предложении ("hatten wir das Essen gekocht") вспомогательный глагол "hatten" стоит на втором месте (после придаточного "Bevor er kam", которое занимает первую позицию), Partizip II "gekocht" - в конце.',
    },
    {
      id: 'b1-plusquamperfekt-ex5',
      type: 'fill_in_the_blank',
      question: 'Образуйте Plusquamperfekt: Sie ___ (verlieren) ihre Tasche, bevor sie in den Zug einstieg.',
      sentenceParts: ['Sie ', ' ihre Tasche, bevor sie in den Zug einstieg.'],
      correctAnswer: 'hatte verloren',
      explanation: 'Глагол "verlieren" образует Perfekt с "haben". Plusquamperfekt: hatte verloren.',
    },
  ],
};
