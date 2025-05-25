
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA1LexikUhrzeitTagesablauf: Lesson = {
  id: 'a1-lexik-uhrzeit-tagesablauf',
  level: 'A1',
  topic: 'Время (часы) и Распорядок дня (Uhrzeit und Tagesablauf)',
  theory: `
В этом уроке мы научимся говорить о времени (сколько сейчас времени) и описывать свой обычный распорядок дня.

**1. Как спросить и сказать время (Die Uhrzeit):**

*   **Вопросы:**
    *   *Wie spät ist es?* (Который час? / Как поздно это есть?)
    *   *Wie viel Uhr ist es?* (Сколько времени?)

*   **Ответы (Официальное время - часто используется на вокзалах, в расписаниях):**
    Сначала часы, потом минуты.
    *   7:00 – Es ist sieben Uhr.
    *   8:10 – Es ist acht Uhr zehn.
    *   9:30 – Es ist neun Uhr dreißig.
    *   14:45 – Es ist vierzehn Uhr fünfundvierzig.

*   **Ответы (Неофициальное, разговорное время):**
    *   **Половина (halb):** Указывает на половину до следующего часа.
        *   7:30 – Es ist **halb acht** (половина восьмого).
        *   10:30 – Es ist **halb elf** (половина одиннадцатого).
    *   **Четверть (Viertel):**
        *   **Viertel nach ...** (четверть после ...):
            *   8:15 – Es ist **Viertel nach acht** (четверть девятого).
        *   **Viertel vor ...** (четверть до ... / без четверти ...):
            *   8:45 – Es ist **Viertel vor neun** (без четверти девять).
    *   **Минуты до/после часа (vor/nach):**
        *   Для минут от 1 до 29 используется \`nach\` (после) или \`vor\` (до).
        *   9:05 – Es ist fünf **nach** neun.
        *   9:20 – Es ist zwanzig **nach** neun (или: zehn **vor** halb zehn).
        *   9:25 – Es ist fünf **vor** halb zehn.
        *   9:35 – Es ist fünf **nach** halb zehn.
        *   9:40 – Es ist zwanzig **vor** zehn (или: zehn **nach** halb zehn).
        *   9:50 – Es ist zehn **vor** zehn.
    *   **Полные часы:** *Es ist genau sieben Uhr.* (Сейчас ровно 7 часов.)

**2. Распорядок дня (Der Tagesablauf):**
   Основные действия в течение дня.
   *   **aufstehen** (вставать): *Ich stehe um 7 Uhr auf.*
   *   **frühstücken** (завтракать): *Ich frühstücke um halb acht.*
   *   **Zähne putzen** (чистить зубы): *Nach dem Frühstück putze ich Zähne.*
   *   **zur Arbeit / zur Schule gehen** (идти на работу / в школу): *Ich gehe um 8 Uhr zur Schule.*
   *   **Mittagessen (essen)** (обедать): *Wir essen um 13 Uhr zu Mittag.*
   *   **Hausaufgaben machen** (делать домашнее задание): *Am Nachmittag mache ich Hausaufgaben.*
   *   **spielen** (играть): *Die Kinder spielen nach der Schule.*
   *   **Abendessen (essen)** (ужинать): *Wir essen um 19 Uhr zu Abend.*
   *   **fernsehen** (смотреть телевизор): *Am Abend sehe ich gern fern.*
   *   **lesen** (читать): *Vor dem Schlafen lese ich ein Buch.*
   *   **schlafen gehen** (идти спать): *Ich gehe um 22 Uhr schlafen.*

**Предлоги времени:**
*   **um ... Uhr:** в ... часов (для точного времени): *um 7 Uhr*
*   **am Morgen / Vormittag / Mittag / Nachmittag / Abend:** утром / до обеда / в полдень / после обеда / вечером.
*   **in der Nacht:** ночью.
`,
  vocabulary: [
    { german: 'die Uhrzeit (-en)', russian: 'время (на часах)' },
    { german: 'Wie spät ist es?', russian: 'Который час?' },
    { german: 'Wie viel Uhr ist es?', russian: 'Сколько времени?' },
    { german: 'Es ist ... Uhr.', russian: 'Сейчас ... часов.' },
    { german: 'halb', russian: 'половина (до следующего часа)', example: 'Es ist halb drei.' },
    { german: 'das Viertel (-)', russian: 'четверть' },
    { german: 'Viertel nach', russian: 'четверть после (15 минут ...-го)', example: 'Viertel nach sieben.' },
    { german: 'Viertel vor', russian: 'без четверти (15 минут до ...)', example: 'Viertel vor neun.' },
    { german: 'vor (zeitlich)', russian: 'до (по времени)' },
    { german: 'nach (zeitlich)', russian: 'после (по времени)' },
    { german: 'genau', russian: 'точно, ровно', example: 'Es ist genau zwölf Uhr.' },
    { german: 'der Tagesablauf (Tagesabläufe)', russian: 'распорядок дня' },
    { german: 'aufstehen (steht auf)', russian: 'вставать', example: 'Ich stehe früh auf.' },
    { german: 'frühstücken', russian: 'завтракать', example: 'Was frühstückst du?' },
    { german: 'Mittagessen essen', russian: 'обедать', example: 'Wir essen um 13 Uhr Mittag.' },
    { german: 'Abendessen essen', russian: 'ужинать', example: 'Wann esst ihr zu Abend?' },
    { german: 'Hausaufgaben machen', russian: 'делать домашнее задание' },
    { german: 'schlafen gehen', russian: 'идти спать', example: 'Die Kinder gehen früh schlafen.' },
    { german: 'fernsehen (sieht fern)', russian: 'смотреть телевизор' },
    { german: 'der Morgen', russian: 'утро' },
    { german: 'der Vormittag', russian: 'первая половина дня, до обеда' },
    { german: 'der Mittag', russian: 'полдень, обед' },
    { german: 'der Nachmittag', russian: 'вторая половина дня, после обеда' },
    { german: 'der Abend', russian: 'вечер' },
    { german: 'die Nacht (Nächte)', russian: 'ночь' },
  ],
  readingText: `
Hallo, ich bin Max. Mein Tag beginnt früh.
Um sechs Uhr dreißig stehe ich auf. Dann putze ich meine Zähne und frühstücke. Ich esse Brot mit Marmelade und trinke Tee.
Um halb acht gehe ich zur Schule. Der Unterricht beginnt um acht Uhr.
Am Nachmittag mache ich meine Hausaufgaben. Um siebzehn Uhr spiele ich Fußball mit meinen Freunden.
Wir essen um neunzehn Uhr zu Abend. Danach sehe ich ein bisschen fern oder lese ein Buch. Um zweiundzwanzig Uhr gehe ich schlafen.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-rq1',
      question: 'Во сколько Макс встает?',
      options: ['В шесть часов', 'В шесть тридцать', 'В семь часов', 'В семь тридцать'],
      correctAnswer: 'В шесть тридцать',
      explanation: 'Im Text steht: "Um sechs Uhr dreißig stehe ich auf." (В шесть часов тридцать я встаю.)'
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-rq2',
      question: 'Что Макс делает в семнадцать часов?',
      options: ['Завтракает', 'Идет в школу', 'Делает домашнее задание', 'Играет в футбол'],
      correctAnswer: 'Играет в футбол',
      explanation: 'Im Text steht: "Um siebzehn Uhr spiele ich Fußball mit meinen Freunden." (В семнадцать часов я играю в футбол с моими друзьями.)'
    }
  ],
  exercises: [
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-ex1',
      type: 'multiple_choice',
      question: 'Как сказать по-немецки "половина десятого" (9:30)?',
      options: ['halb neun', 'neun Uhr dreißig', 'Viertel vor zehn', 'halb zehn'],
      correctAnswer: 'halb zehn',
      explanation: 'Для "половины" используется "halb" + следующий час. 9:30 = halb zehn.',
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ um 7:00 Uhr auf."',
      sentenceParts: ['Ich ', ' um 7:00 Uhr auf.'],
      correctAnswer: 'stehe',
      explanation: 'Глагол "aufstehen" (вставать). Для "ich" форма "stehe", приставка "auf" идет в конец.',
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Который час? - Сейчас без четверти два."',
      prompt: 'Который час? - Сейчас без четверти два.',
      languageDirection: 'to_german',
      correctAnswer: 'Wie spät ist es? - Es ist Viertel vor zwei.',
      explanation: '"Без четверти два" (1:45) - "Es ist Viertel vor zwei".',
    },
    {
      id: 'a1-lexik-uhrzeit-tagesablauf-wp1',
      type: 'writing_prompt',
      question: 'Wann stehst du normalerweise auf und was machst du am Morgen? Schreibe 2-3 Sätze. (Когда ты обычно встаешь и что делаешь утром? Напиши 2-3 предложения.)',
      suggestedLength: '2-3 предложения'
    }
  ],
};
