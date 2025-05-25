
import type { Lesson } from '@/types';

// --- Урок A2: Порядковые числительные и даты ---
export const lessonA2OrdinalzahlenDatum: Lesson = {
  id: 'a2-ordinalzahlen-datum',
  level: 'A2',
  topic: 'Порядковые числительные и даты',
  theory: `
Порядковые числительные (Ordinalzahlen) указывают на порядок предметов или явлений (первый, второй, третий и т.д.). Они также используются для обозначения дат.

**1. Образование порядковых числительных:**

*   **От 1 до 19:**
    К количественному числительному (Kardinalzahl) добавляется суффикс **-te**.
    *   zwei (2) → der/die/das zwei**te** (второй/ая/ое)
    *   vier (4) → der/die/das vier**te** (четвертый/ая/ое)
    *   sechs (6) → der/die/das sechs**te** (шестой/ая/ое)
    *   neunzehn (19) → der/die/das neunzehn**te** (девятнадцатый/ая/ое)

    **Исключения:**
    *   eins (1) → der/die/das **erste** (первый/ая/ое)
    *   drei (3) → der/die/das **dritte** (третий/ая/ое)
    *   sieben (7) → der/die/das **siebte** (седьмой/ая/ое) (реже: siebente)
    *   acht (8) → der/die/das ach**te** (восьмой/ая/ое) (одна 't')

*   **От 20 и выше:**
    К количественному числительному добавляется суффикс **-ste**.
    *   zwanzig (20) → der/die/das zwanzig**ste** (двадцатый/ая/ое)
    *   einundzwanzig (21) → der/die/das einundzwanzig**ste** (двадцать первый/ая/ое)
    *   hundert (100) → der/die/das hundert**ste** (сотый/ая/ое)

**2. Использование порядковых числительных:**
   Порядковые числительные обычно используются с определенным артиклем и склоняются как прилагательные (по слабому типу после определенного артикля).
   *   *der **erste** Tag* (первый день)
   *   *die **zweite** Woche* (вторая неделя)
   *   *das **dritte** Mal* (третий раз)

**3. Обозначение даты:**

*   **Вопрос о дате:**
    *   *Der wievielte ist heute?* (Какое сегодня число?)
    *   *Den wievielten haben wir heute?* (Какое у нас сегодня число?)

*   **Ответ (сегодня ... число):**
    Используется конструкция: **Heute ist der + порядковое числительное (в Nominativ) + Название месяца (в Nominativ).**
    *   *Heute ist der **erste** Mai.* (Сегодня первое мая.)
    *   *Heute ist der **fünfte** Januar.* (Сегодня пятое января.)
    *   *Heute ist der **zwanzigste** Dezember.* (Сегодня двадцатое декабря.)

*   **Указание на конкретную дату (когда что-то произошло/произойдет):**
    Используется предлог **am** (an + dem) + порядковое числительное с окончанием **-en** (окончание Dativ) + Название месяца.
    *   *Ich habe am **ersten** Mai Geburtstag.* (У меня день рождения первого мая.)
    *   *Wir treffen uns am **zehnten** August.* (Мы встречаемся десятого августа.)
    *   *Die Prüfung ist am **dreiundzwanzigsten** März.* (Экзамен двадцать третьего марта.)

*   **Написание даты цифрами:**
    В немецком языке день и месяц разделяются точкой:
    *   1. Mai
    *   10.08.
    *   am 23.03.2024

Запоминание образования порядковых числительных и конструкций для дат очень важно для повседневного общения.
`,
  vocabulary: [
    { german: 'die Ordinalzahl (-en)', russian: 'порядковое числительное' },
    { german: 'der/die/das erste', russian: 'первый, -ая, -ое', example: 'Das ist mein erstes Auto.' },
    { german: 'der/die/das zweite', russian: 'второй, -ая, -ое', example: 'Die zweite Tür links.' },
    { german: 'der/die/das dritte', russian: 'третий, -ая, -ое', example: 'Er hat den dritten Platz belegt.' },
    { german: 'der/die/das vierte', russian: 'четвертый, -ая, -ое' },
    { german: 'der/die/das zwanzigste', russian: 'двадцатый, -ая, -ое' },
    { german: 'der/die/das einundzwanzigste', russian: 'двадцать первый, -ая, -ое' },
    { german: 'der Januar', russian: 'январь' },
    { german: 'der Februar', russian: 'февраль' },
    { german: 'der März', russian: 'март' },
    { german: 'der April', russian: 'апрель' },
    { german: 'der Mai', russian: 'май' },
    { german: 'der Juni', russian: 'июнь' },
    { german: 'der Juli', russian: 'июль' },
    { german: 'der August', russian: 'август' },
    { german: 'der September', russian: 'сентябрь' },
    { german: 'der Oktober', russian: 'октябрь' },
    { german: 'der November', russian: 'ноябрь' },
    { german: 'der Dezember', russian: 'декабрь' },
    { german: 'Der wievielte ist heute?', russian: 'Какое сегодня число?' },
    { german: 'Heute ist der ...', russian: 'Сегодня ... (число)', example: 'Heute ist der fünfte April.' },
    { german: 'am (+ Dativ)', russian: 'предлог для указания даты ("какого-то числа")', example: 'Mein Geburtstag ist am zehnten Mai.' },
  ],
  exercises: [
    {
      id: 'a2-ordinal-datum-ex1',
      type: 'multiple_choice',
      question: 'Как правильно написать "третий" по-немецки?',
      options: ['der dreite', 'der dreiste', 'der dritte', 'der drittete'],
      correctAnswer: 'der dritte',
      explanation: 'Порядковое числительное от "drei" (три) - "dritte" (исключение).',
    },
    {
      id: 'a2-ordinal-datum-ex2',
      type: 'fill_in_the_blank',
      question: 'Напишите словами: der 22. (двадцать второй)',
      sentenceParts: ['der ', ''],
      correctAnswer: 'zweiundzwanzigste',
      explanation: 'От 20 и выше порядковые числительные образуются с помощью суффикса -ste: zwanzig + ste, einundzwanzig + ste.',
    },
    {
      id: 'a2-ordinal-datum-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Какое сегодня число? - Сегодня пятое июня."',
      prompt: 'Какое сегодня число? - Сегодня пятое июня.',
      languageDirection: 'to_german',
      correctAnswer: 'Der wievielte ist heute? - Heute ist der fünfte Juni.',
      explanation: 'Вопрос "Der wievielte ist heute?" Ответ "Heute ist der + порядковое числительное + месяц".',
    },
    {
      id: 'a2-ordinal-datum-ex4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Die Party ist am (15.) ___ Mai.',
      sentenceParts: ['Die Party ist am ', ' Mai.'],
      correctAnswer: 'fünfzehnten',
      explanation: 'При указании даты с предлогом "am" порядковое числительное получает окончание -en (Dativ): am fünfzehnten Mai.',
    },
  ],
};
