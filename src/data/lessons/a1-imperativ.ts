
import type { Lesson } from '@/types';

// --- Урок A1: Повелительное наклонение (Imperativ) ---
export const lessonA1Imperativ: Lesson = {
  id: 'a1-imperativ',
  level: 'A1',
  topic: 'Повелительное наклонение (Imperativ)',
  theory: \`
Повелительное наклонение (Imperativ) используется для выражения команд, просьб, советов или инструкций. В немецком языке существуют формы Imperativ для \`du\` (ты), \`ihr\` (вы, неформально мн.ч.) и \`Sie\` (Вы, вежливо).

**1. Образование Imperativ:**

*   **Для \`du\` (ты):**
    *   **Общее правило:** Берется основа глагола (инфинитив без окончания -en).
        *   *machen → mach!* (делай!)
        *   *kommen → komm!* (приходи!)
        *   *lernen → lern!* (учи!)
    *   **Если основа глагола заканчивается на -d, -t, -chn, -ffn, -gn, -tm**, то добавляется окончание **-e**:
        *   *arbeiten → arbeite!* (работай!)
        *   *warten → warte!* (жди!)
    *   **Сильные глаголы с изменением корневой гласной e → i / e → ie** в Präsens сохраняют это изменение в Imperativ \`du\`-формы (и не получают -e):
        *   *geben (du gibst) → gib!* (дай!)
        *   *lesen (du liest) → lies!* (читай!)
        *   *sprechen (du sprichst) → sprich!* (говори!)
        *   *sehen (du siehst) → sieh!* (смотри!)
    *   **Сильные глаголы с изменением корневой гласной a → ä** в Präsens **НЕ получают умлаут** в Imperativ \`du\`-формы:
        *   *fahren (du fährst) → fahr!* (езжай!) (НЕ fähr!)
        *   *schlafen (du schläfst) → schlaf!* (спи!)

*   **Для \`ihr\` (вы, неформально мн.ч.):**
    Форма Imperativ полностью совпадает с формой Präsens для \`ihr\` (т.е. основа + -t).
    *   *kommen (ihr kommt) → Kommt!* (Приходите!)
    *   *machen (ihr macht) → Macht!* (Делайте!)
    *   *lesen (ihr lest) → Lest!* (Читайте!)

*   **Для \`Sie\` (Вы, вежливо):**
    Форма Imperativ образуется из инфинитива глагола + местоимение \`Sie\`. Местоимение \`Sie\` ставится после глагола.
    *   *Kommen Sie!* (Приходите, пожалуйста!)
    *   *Sprechen Sie bitte langsam!* (Говорите, пожалуйста, медленно!)

**2. Слово \`bitte\` (пожалуйста):**
Для придания просьбе вежливого характера часто используется слово \`bitte\`.
*   *Mach **bitte** die Tür zu!* (Закрой, пожалуйста, дверь!)
*   ***Bitte** helfen Sie mir!* (Пожалуйста, помогите мне!)

**3. Особые формы (например, \`sein\`):**
   Глагол \`sein\` (быть) имеет особые формы:
   - du: **Sei** ruhig! (Будь спокоен!)
   - ihr: **Seid** pünktlich! (Будьте вовремя!)
   - Sie: **Seien Sie** vorsichtig! (Будьте осторожны!)

Помните, что в Imperativ для \`du\` и \`ihr\` личное местоимение опускается.
\`,
  vocabulary: [
    { german: 'machen (mach!, macht!, machen Sie!)', russian: 'делать (делай!, делайте!, делайте!)' },
    { german: 'kommen (komm!, kommt!, kommen Sie!)', russian: 'приходить (приходи!, приходите!, приходите!)' },
    { german: 'lesen (lies!, lest!, lesen Sie!)', russian: 'читать (читай!, читайте!, читайте!)' },
    { german: 'sprechen (sprich!, sprecht!, sprechen Sie!)', russian: 'говорить (говори!, говорите!, говорите!)' },
    { german: 'geben (gib!, gebt!, geben Sie!)', russian: 'давать (дай!, дайте!, давайте!)' },
    { german: 'fahren (fahr!, fahrt!, fahren Sie!)', russian: 'ехать (езжай!, езжайте!, езжайте!)' },
    { german: 'sein (sei!, seid!, seien Sie!)', russian: 'быть (будь!, будьте!, будьте!)' },
    { german: 'bitte', russian: 'пожалуйста' },
    { german: 'langsam', russian: 'медленно', example: 'Sprich bitte langsam!' },
    { german: 'ruhig', russian: 'спокойный, спокойно', example: 'Sei ruhig!' },
  ],
  exercises: [
    {
      id: 'a1-imperativ-ex1',
      type: 'fill_in_the_blank',
      question: 'Образуйте Imperativ для "du": ___ (lernen) Deutsch!',
      sentenceParts: ['', ' Deutsch!'],
      correctAnswer: 'Lern',
      explanation: 'Для "du" от глагола "lernen" Imperativ - "Lern!".',
    },
    {
      id: 'a1-imperativ-ex2',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ правильная для "ihr" от глагола "sehen"?',
      options: ['Sieh!', 'Seht!', 'Sehen Sie!', 'Sehet!'],
      correctAnswer: 'Seht!',
      explanation: 'Для "ihr" форма Imperativ совпадает с формой Präsens: ihr seht → Seht!',
    },
    {
      id: 'a1-imperativ-ex3',
      type: 'fill_in_the_blank',
      question: 'Дополните вежливую просьбу (для Sie): ___ ___ bitte das Fenster auf. (aufmachen)',
      sentenceParts: ['', ' bitte das Fenster auf.'],
      correctAnswer: 'Machen Sie',
      explanation: 'Для "Sie" используется инфинитив "aufmachen", но так как приставка отделяемая, "Machen Sie ... auf".',
    },
    {
      id: 'a1-imperativ-ex4',
      type: 'multiple_choice',
      question: 'Какая форма Imperativ для "du" от глагола "geben"?',
      options: ['Gebe!', 'Geb!', 'Gib!', 'Gibst!'],
      correctAnswer: 'Gib!',
      explanation: 'Сильный глагол "geben" меняет корневую гласную e → i в Imperativ для "du": Gib!',
    },
  ],
};
