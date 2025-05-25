
import type { Lesson } from '@/types';

export const lessonA2ModalverbenPerfekt: Lesson = {
  id: 'a2-modalverben-perfekt',
  level: 'A2',
  topic: 'Модальные глаголы в Perfekt',
  theory: `
Модальные глаголы в немецком языке (können, müssen, dürfen, wollen, sollen, mögen) могут использоваться в прошедшем времени Perfekt. Важно помнить, что в устной речи для модальных глаголов чаще используется Präteritum (ich konnte, ich musste и т.д.), но Perfekt также встречается, особенно в определенных конструкциях.

**Существует два основных случая образования Perfekt с модальными глаголами:**

**1. Модальный глагол используется как основной (полнозначный) глагол:**
   Это происходит, когда в предложении нет другого смыслового глагола в инфинитиве.
   - **Образование:** \`haben\` (в Präsens) + Partizip II модального глагола.
   - **Partizip II модальных глаголов:**
     - können → **gekonnt**
     - müssen → **gemusst**
     - dürfen → **gedurft**
     - wollen → **gewollt**
     - sollen → **gesollt**
     - mögen → **gemocht**
   - *Примеры:*
     * *Ich **habe** das nicht **gewollt**.* (Я этого не хотел.)
     * *Sie **hat** das schon immer **gekonnt**.* (Она это уже всегда умела.)
     * *Wir **haben** das nicht **gedurft**.* (Нам этого было нельзя / Мы не имели разрешения.)

**2. Модальный глагол используется с инфинитивом другого (смыслового) глагола:**
   Это более частый случай, когда модальный глагол определяет отношение к действию, выраженному другим глаголом.
   - **Образование (Ersatzinfinitiv / двойной инфинитив):** \`haben\` (в Präsens) + Infinitiv смыслового глагола + **Infinitiv модального глагола**.
   - В этой конструкции вместо Partizip II модального глагола используется его инфинитивная форма. Это особенность немецкого языка.
   - *Примеры:*
     * *Ich **habe** nicht schlafen **können**.* (Я не мог спать.) (НЕ: Ich habe nicht schlafen gekonnt.)
     * *Sie **hat** früh aufstehen **müssen**.* (Она должна была рано встать.)
     * *Wir **haben** ins Kino gehen **wollen**.* (Мы хотели пойти в кино.)
     * *Du **hast** das machen **sollen**.* (Ты должен был это сделать.)
     * *Er **hat** nicht mitkommen **dürfen**.* (Ему нельзя было идти с нами.)

**Порядок слов:**
- В главном предложении вспомогательный глагол \`haben\` стоит на втором месте. Инфинитив смыслового глагола и инфинитив модального глагола стоят в конце предложения, причем инфинитив модального глагола – последним.
  * *Beispiel: Ich **habe** gestern länger arbeiten **müssen**.*
- В придаточном предложении вспомогательный глагол \`haben\` идет в самый конец, перед ним – инфинитив смыслового глагола, а перед ним – инфинитив модального.
  * *Beispiel: ..., weil ich gestern länger arbeiten **müssen habe**.* (Здесь порядок может варьироваться, но для ясности на A2 чаще инфинитив модального + haben). Более корректно и частотно: ..., weil ich gestern habe länger arbeiten müssen. Но для A2 обычно учат, что haben/sein в конце.)
  * Более употребительный порядок для придаточного: *..., weil ich gestern **habe** länger arbeiten **müssen**.* (Вспомогательный глагол \`haben\` идет перед двойным инфинитивом).
  * Однако, если строго следовать правилу "спрягаемый глагол в самый конец в придаточном", то: *..., weil ich länger arbeiten **müssen habe**.*
  * **Для уровня A2 достаточно сосредоточиться на главном предложении.**

Запоминание этих двух правил образования Perfekt для модальных глаголов очень важно.
  `,
  vocabulary: [
    { german: 'gekonnt (Part. II)', russian: 'умел, смог (от können)' },
    { german: 'gemusst (Part. II)', russian: 'был должен (от müssen)' },
    { german: 'gedurft (Part. II)', russian: 'имел разрешение (от dürfen)' },
    { german: 'gewollt (Part. II)', russian: 'хотел (от wollen)' },
    { german: 'gesollt (Part. II)', russian: 'был должен (по совету) (от sollen)' },
    { german: 'gemocht (Part. II)', russian: 'нравился, любил (от mögen)' },
    { german: 'Ersatzinfinitiv', russian: 'замещающий инфинитив (двойной инфинитив)', example: 'Ich habe arbeiten müssen.' },
    { german: 'arbeiten müssen', russian: 'должен был работать (конструкция для Perfekt)', example: 'Er hat lange arbeiten müssen.' },
    { german: 'kommen können', russian: 'мог прийти (конструкция для Perfekt)', example: 'Sie hat nicht kommen können.' },
    { german: 'lernen wollen', russian: 'хотел учиться (конструкция для Perfekt)', example: 'Wir haben Deutsch lernen wollen.' },
  ],
  readingText: `
Gestern hatte ich viel zu tun. Zuerst habe ich meine Hausaufgaben machen müssen. Das hat lange gedauert. Danach habe ich meiner Mutter im Garten helfen wollen, aber es hat plötzlich angefangen zu regnen. Schade!
Am Abend habe ich dann endlich einen Film sehen können, den ich schon lange sehen wollte. Ich habe aber nicht lange fernsehen dürfen, weil ich heute früh aufstehen musste.
  `,
  readingComprehensionExercises: [
    {
      id: 'a2-modalperfekt-rq1',
      question: 'Почему автор не смог помочь маме в саду?',
      options: ['У него не было времени', 'Он не хотел', 'Потому что пошел дождь', 'Он должен был делать уроки'],
      correctAnswer: 'Потому что пошел дождь',
      explanation: 'В тексте сказано: "...aber es hat plötzlich angefangen zu regnen."',
    },
    {
      id: 'a2-modalperfekt-rq2',
      question: 'Что автор смог сделать вечером?',
      options: ['Долго спать', 'Пойти гулять', 'Посмотреть фильм', 'Помочь маме'],
      correctAnswer: 'Посмотреть фильм',
      explanation: 'В тексте сказано: "Am Abend habe ich dann endlich einen Film sehen können..."',
    },
  ],
  exercises: [
    {
      id: 'a2-modalperfekt-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Perfekt: "Ich ___ das nicht ___ (wollen)." (Модальный глагол как основной)',
      options: ['habe ... gewollt', 'bin ... gewollt', 'habe ... wollen', 'bin ... wollen'],
      correctAnswer: 'habe ... gewollt',
      explanation: 'Если модальный глагол используется как основной, Perfekt образуется с "haben" + Partizip II модального глагола (gewollt).',
    },
    {
      id: 'a2-modalperfekt-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную конструкцию Perfekt: "Sie ___ gestern nicht ___ ___ (kommen können)."',
      sentenceParts: ['Sie ', ' gestern nicht ', ' ', '.'],
      correctAnswer: 'hat, kommen können',
      explanation: 'Perfekt с модальным глаголом и инфинитивом другого глагола: haben + Infinitiv + Infinitiv модального глагола. "Sie hat gestern nicht kommen können."',
    },
    {
      id: 'a2-modalperfekt-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы должны были учиться."',
      prompt: 'Мы должны были учиться.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir haben lernen müssen.',
      explanation: 'Perfekt: Wir haben + lernen (Infinitiv) + müssen (Infinitiv).',
    },
    {
      id: 'a2-modalperfekt-ex4',
      type: 'multiple_choice',
      question: 'Какое предложение в Perfekt с модальным глаголом построено правильно?',
      options: [
        'Er hat das Auto reparieren gemusst.',
        'Er hat das Auto müssen reparieren.',
        'Er hat das Auto reparieren müssen.'
      ],
      correctAnswer: 'Er hat das Auto reparieren müssen.',
      explanation: 'Правильный порядок: haben + Infinitiv смыслового глагола + Infinitiv модального глагола.',
    },
  ],
};

    