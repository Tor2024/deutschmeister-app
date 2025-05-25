
import type { Lesson } from '@/types';

// --- Урок A2: Повелительное наклонение (Imperativ) ---
export const lessonA2Imperativ: Lesson = {
  id: 'a2-imperativ',
  level: 'A2',
  topic: 'Повелительное наклонение (Imperativ)',
  theory: `Повелительное наклонение (Imperativ) используется для выражения команд, приказов, просьб, советов или инструкций. В немецком языке существуют формы Imperativ для \`du\` (ты), \`ihr\` (вы, неформально мн.ч.), \`Sie\` (Вы, вежливо) и \`wir\` (мы).

**1. Образование Imperativ:**

*   **Для \`du\` (ты):**
    *   **Общее правило:** Берется основа глагола (инфинитив без окончания -en) и часто добавляется окончание **-e**. Однако в современной разговорной речи это окончание **-e** часто опускается, особенно у сильных глаголов без изменения корневой гласной и у слабых глаголов, если это не затрудняет произношение.
        *   *machen → mach(e)!* (делай!)
        *   *kommen → komm!* (приходи!)
        *   *sagen → sag(e)!* (скажи!)
    *   **Обязательное -e:** Если основа глагола заканчивается на **-d, -t, -chn, -ffn, -gn, -tm**:
        *   *arbeiten → arbeite!* (работай!)
        *   *öffnen → öffne!* (открой!)
    *   **Сильные глаголы с изменением корневой гласной e → i / e → ie:** Эти глаголы **сохраняют** изменение гласной в Imperativ \`du\`-формы и **не получают** окончание -e.
        *   *geben (gibt) → gib!* (дай!)
        *   *sprechen (spricht) → sprich!* (говори!)
        *   *lesen (liest) → lies!* (читай!)
        *   *sehen (sieht) → sieh!* (смотри!) (иногда *siehe!* для благозвучия)
        *   *helfen (hilft) → hilf!* (помоги!)
    *   **Сильные глаголы с изменением корневой гласной a → ä:** Эти глаголы **НЕ получают умлаут** в Imperativ \`du\`-формы. Окончание -e обычно опускается.
        *   *fahren (fährt) → fahr!* (езжай!) (НЕ fähr!)
        *   *schlafen (schläft) → schlaf!* (спи!)
        *   *tragen (trägt) → trag!* (неси!)
    *   **Глаголы на -eln, -ern:** Окончание **-e** инфинитива отпадает, окончание **-e** императива может добавляться или опускаться. Часто происходит сокращение.
        *   *sammeln → samm(e)le!* (собирай!)
        *   *ändern → änd(e)re!* (измени!)

*   **Для \`ihr\` (вы, неформально мн.ч.):**
    Форма Imperativ полностью совпадает с формой Präsens для \`ihr\`.
    *   *kommen (ihr kommt) → Kommt!* (Приходите!)
    *   *machen (ihr macht) → Macht!* (Делайте!)
    *   *lesen (ihr lest) → Lest!* (Читайте!)

*   **Для \`Sie\` (Вы, вежливо):**
    Форма Imperativ образуется из инфинитива глагола + местоимение \`Sie\`. Местоимение \`Sie\` ставится после глагола.
    *   *Kommen Sie!* (Приходите, пожалуйста!)
    *   *Sprechen Sie bitte langsam!* (Говорите, пожалуйста, медленно!)

*   **Для \`wir\` (мы):**
    Форма Imperativ совпадает с формой Präsens для \`wir\` и используется для побуждения к совместному действию.
    *   *Gehen wir ins Kino!* (Пойдем(те) в кино!)
    *   *Fangen wir an!* (Давайте начнем!)

**2. Особые формы Imperativ:**
Некоторые глаголы имеют особые формы Imperativ, которые нужно запомнить:
*   **sein (быть):**
    *   du: **Sei** ruhig! (Будь спокоен!)
    *   ihr: **Seid** pünktlich! (Будьте вовремя!)
    *   Sie: **Seien Sie** vorsichtig! (Будьте осторожны!)
    *   wir: **Seien wir** optimistisch! (Будем оптимистами!)
*   **haben (иметь):**
    *   du: **Hab(e)** keine Angst! (Не бойся!)
    *   ihr: **Habt** Geduld! (Имейте терпение!)
    *   Sie: **Haben Sie** einen Moment Zeit? (У Вас есть минутка?)
*   **werden (становиться):**
    *   du: **Werde** gesund! (Выздоравливай!)
    *   ihr: **Werdet** kreativ! (Становитесь креативными!)
    *   Sie: **Werden Sie** Mitglied! (Становитесь членом!)

**3. Imperativ с отделяемыми приставками:**
В Imperativ отделяемая приставка ставится в конец предложения.
*   *aufstehen → Steh auf! / Steht auf! / Stehen Sie auf!* (Вставай! / Вставайте!)
*   *mitkommen → Komm mit! / Kommt mit! / Kommen Sie mit!* (Пойдем со мной! / Пойдемте с нами!)
*   *anrufen → Ruf mich an! / Ruft mich an! / Rufen Sie mich an!* (Позвони мне! / Позвоните мне!)

**4. Использование \`bitte\`:**
Для придания просьбе вежливого характера часто используется слово \`bitte\` (пожалуйста), которое может стоять в начале, в конце или внутри предложения.
*   *Bitte hilf mir! / Hilf mir bitte!*

Понимание и правильное использование Imperativ необходимо для повседневного общения.`,
  vocabulary: [
    { german: 'machen (Mach(e)! Macht! Machen Sie!)', russian: 'делать (Делай! Делайте!)', example: 'Mach deine Hausaufgaben!' },
    { german: 'kommen (Komm! Kommt! Kommen Sie!)', russian: 'приходить (Приходи! Приходите!)', example: 'Kommen Sie bitte herein!' },
    { german: 'geben (Gib! Gebt! Geben Sie!)', russian: 'давать (Дай! Дайте!)', example: 'Gib mir das Buch!' },
    { german: 'lesen (Lies! Lest! Lesen Sie!)', russian: 'читать (Читай! Читайте!)', example: 'Lest den Text aufmerksam!' },
    { german: 'sprechen (Sprich! Sprecht! Sprechen Sie!)', russian: 'говорить (Говори! Говорите!)', example: 'Sprich lauter, bitte!' },
    { german: 'fahren (Fahr! Fahrt! Fahren Sie!)', russian: 'ехать (Поезжай! Поезжайте!)', example: 'Fahrt vorsichtig!' },
    { german: 'sein (Sei! Seid! Seien Sie!)', russian: 'быть (Будь! Будьте!)', example: 'Sei nicht traurig!' },
    { german: 'haben (Hab(e)! Habt! Haben Sie!)', russian: 'иметь (Имей! Имейте!)', example: 'Habt keine Angst!' },
    { german: 'aufstehen (Steh auf! Steht auf! Stehen Sie auf!)', russian: 'вставать (Вставай! Вставайте!)', example: 'Steh bitte auf!' },
    { german: 'mitbringen (Bring mit! Bringt mit! Bringen Sie mit!)', russian: 'приносить с собой (Принеси! Принесите!)', example: 'Bringen Sie Ihre Dokumente mit.' },
    { german: 'zuhören (Hör zu! Hört zu! Hören Sie zu!)', russian: 'слушать (внимательно) (Слушай! Слушайте!)', example: 'Hör mir gut zu!' },
    { german: 'bitte', russian: 'пожалуйста', example: 'Setz dich bitte.' },
    { german: 'vorsichtig', russian: 'осторожно, осторожный', example: 'Seien Sie vorsichtig!' },
    { german: 'ruhig', russian: 'спокойный, спокойно', example: 'Bleib ruhig!' },
    { german: 'pünktlich', russian: 'пунктуальный, вовремя', example: 'Seid morgen pünktlich!' },
  ],
  exercises: [
    {
      id: 'a2-imperativ-ex1',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ для глагола "sprechen" (говорить) для \`du\`?',
      options: ['Spreche!', 'Sprichst!', 'Sprich!', 'Sprech!'],
      correctAnswer: 'Sprich!',
      explanation: 'Сильный глагол "sprechen" меняет корневую гласную e → i в Imperativ для \`du\` и не получает окончания -e: sprich!',
    },
    {
      id: 'a2-imperativ-ex2',
      type: 'fill_in_the_blank',
      question: 'Образуйте Imperativ: ___ (ihr, arbeiten) nicht so viel!',
      sentenceParts: ['', ' nicht so viel!'],
      correctAnswer: 'Arbeitet',
      explanation: 'Для \`ihr\` форма Imperativ совпадает с Präsens: ihr arbeitet → Arbeitet!',
    },
    {
      id: 'a2-imperativ-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Помогите мне, пожалуйста!" (вежливая форма)',
      prompt: 'Помогите мне, пожалуйста!',
      languageDirection: 'to_german',
      correctAnswer: 'Helfen Sie mir bitte!',
      explanation: 'Вежливая форма Imperativ от "helfen": Helfen Sie. "Пожалуйста" - bitte. "Мне" - mir (Dativ).',
    },
    {
      id: 'a2-imperativ-ex4',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Imperativ для "fahren" (ехать) для \`du\`: ___ langsam!',
      options: ['Fahr!', 'Fähre!', 'Fährst!', 'Fähr!'],
      correctAnswer: 'Fahr!',
      explanation: 'Сильный глагол "fahren" (Präsens: du fährst) НЕ получает умлаут в Imperativ для \`du\`: fahr!',
    },
    {
      id: 'a2-imperativ-ex5',
      type: 'fill_in_the_blank',
      question: 'Образуйте Imperativ с отделяемой приставкой: ___ (du, mitkommen)!',
      sentenceParts: ['', '!'],
      correctAnswer: 'Komm mit',
      explanation: 'Отделяемая приставка "mit-" у глагола "mitkommen" идет в конец Imperativ-формы: Komm mit!',
    },
    {
      id: 'a2-imperativ-ex6',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ для глагола "sein" (быть) для \`ihr\`?',
      options: ['Sei!', 'Sein!', 'Seien!', 'Seid!'],
      correctAnswer: 'Seid!',
      explanation: 'Глагол "sein" имеет особую форму Imperativ для \`ihr\`: Seid!',
    },
    {
      id: 'a2-imperativ-ex7',
      type: 'translation',
      question: 'Переведите на немецкий: "Давайте почитаем эту книгу!" (форма \`wir\`)',
      prompt: 'Давайте почитаем эту книгу!',
      languageDirection: 'to_german',
      correctAnswer: 'Lesen wir dieses Buch!',
      explanation: 'Imperativ для \`wir\` совпадает с Präsens Indikativ: Lesen wir!',
    },
  ],
};
