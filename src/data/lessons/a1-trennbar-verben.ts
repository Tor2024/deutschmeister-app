
import type { Lesson } from '@/types';

// --- Урок A1: Отделяемые приставки глаголов (основы) ---
export const lessonA1TrennbarVerben: Lesson = {
  id: 'a1-trennbar-verben',
  level: 'A1',
  topic: 'Отделяемые приставки глаголов (основы)',
  theory: `
Некоторые глаголы в немецком языке имеют так называемые **отделяемые приставки**. Это короткие слова (часто предлоги или наречия), которые пишутся слитно с глаголом в его начальной форме (инфинитиве), но в некоторых случаях отделяются и занимают другое место в предложении.

**1. Что такое отделяемые приставки?**
   Распространенные отделяемые приставки:
   - **an-** (например, anrufen - звонить)
   - **auf-** (например, aufstehen - вставать)
   - **aus-** (например, ausgehen - выходить гулять)
   - **ein-** (например, einkaufen - делать покупки)
   - **mit-** (например, mitkommen - идти с кем-л.)
   - **vor-** (например, vorstellen - представлять)
   - **zu-** (например, zumachen - закрывать)
   - **fern-** (например, fernsehen - смотреть телевизор)
   - и другие: ab-, her-, hin-, los-, weg- и т.д.

**2. Основное правило для Präsens (настоящего времени) в простом предложении:**
   В простом повествовательном или вопросительном предложении в настоящем времени (Präsens) отделяемая приставка **отделяется** от основной части глагола и уходит в **конец предложения**.
   Сам глагол (его спрягаемая часть) стоит на своем обычном месте (на втором месте в утвердительном предложении или на первом в общем вопросе).

   *Примеры:*
   - Глагол: **aufstehen** (вставать)
     *Ich stehe um 7 Uhr **auf**.* (Я встаю в 7 часов.)
     (Приставка "auf-" ушла в конец, "stehe" спрягается и стоит на 2-м месте.)
   - Глагол: **anrufen** (звонить по телефону)
     *Peter ruft seine Freundin **an**.* (Петер звонит своей подруге.)
   - Глагол: **einkaufen** (делать покупки)
     *Wir kaufen heute im Supermarkt **ein**.* (Мы сегодня делаем покупки в супермаркете.)
   - Глагол: **mitkommen** (идти/ехать с кем-либо)
     *Kommst du heute Abend **mit**?* (Ты пойдешь сегодня вечером с нами?) (Вопрос, глагол "kommst" на 1-м месте, приставка "mit-" в конце)
   - Глагол: **fernsehen** (смотреть телевизор)
     *Meine Familie sieht abends gern **fern**.* (Моя семья вечером любит смотреть телевизор.)

**3. На что обратить внимание:**
   - Ударение в таких глаголах обычно падает на приставку (например, **'auf**stehen).
   - Важно отличать отделяемые приставки от неотделяемых (например, be-, ge-, er-, ver-, zer-, ent-, emp-, miss-), которые никогда не отделяются от глагола. Неотделяемые приставки обычно безударные. (Это тема для будущих уроков).

На начальном этапе важно запомнить основной принцип: приставка отделяется и идет в конец предложения.
`,
  vocabulary: [
    { german: 'trennbar', russian: 'отделяемый (о приставке)' },
    { german: 'die Vorsilbe (-n)', russian: 'приставка' },
    { german: 'anrufen (ruft an)', russian: 'звонить (по телефону)', example: 'Ich rufe dich später an.' },
    { german: 'aufstehen (steht auf)', russian: 'вставать', example: 'Wann stehst du normalerweise auf?' },
    { german: 'einkaufen (kauft ein)', russian: 'делать покупки, закупаться', example: 'Sie kauft Lebensmittel ein.' },
    { german: 'mitkommen (kommt mit)', russian: 'идти/ехать с кем-л., сопровождать', example: 'Kommst du mit ins Kino?' },
    { german: 'zumachen (macht zu)', russian: 'закрывать (дверь, окно)', example: 'Mach bitte die Tür zu!' },
    { german: 'fernsehen (sieht fern)', russian: 'смотреть телевизор', example: 'Er sieht jeden Abend fern.' },
    { german: 'ausgehen (geht aus)', russian: 'выходить (гулять, развлекаться)', example: 'Wir gehen heute Abend aus.' },
    { german: 'vorbereiten (bereitet vor)', russian: 'готовить, подготавливать', example: 'Ich bereite das Essen vor.' },
    { german: 'abholen (holt ab)', russian: 'забирать, встречать (кого-л.)', example: 'Kannst du mich vom Bahnhof abholen?' },
  ],
  exercises: [
    {
      id: 'a1-trennbar-verben-ex1',
      type: 'multiple_choice',
      question: 'В предложении "Ich stehe um 7 Uhr auf." какая часть является отделяемой приставкой?',
      options: ['stehe', 'Uhr', 'auf', 'um'],
      correctAnswer: 'auf',
      explanation: 'В глаголе "aufstehen" приставка "auf-" отделяется и идет в конец предложения.',
    },
    {
      id: 'a1-trennbar-verben-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол "anrufen" в правильную форму: Er ___ seine Tante oft ___.',
      sentenceParts: ['Er ', ' seine Tante oft ', '.'],
      correctAnswer: 'ruft, an',
      explanation: 'Глагол "anrufen" (звонить). "Er ruft an." Приставка "an" идет в конец.',
    },
    {
      id: 'a1-trennbar-verben-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы делаем покупки сегодня."',
      prompt: 'Мы делаем покупки сегодня.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir kaufen heute ein.',
      explanation: 'Глагол "einkaufen" (делать покупки). "Wir kaufen ein." Приставка "ein" идет в конец.',
    },
    {
      id: 'a1-trennbar-verben-ex4',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение:',
      options: [
        'Sie sieht fern jeden Abend.',
        'Sie jeden Abend sieht fern.',
        'Sie sieht jeden Abend fern.'
      ],
      correctAnswer: 'Sie sieht jeden Abend fern.',
      explanation: 'Глагол "fernsehen". Спрягаемая часть "sieht" на втором месте, приставка "fern" в конце.',
    },
  ],
};
