
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonA1LexikOrdinalzahlenDatum: Lesson = {
  id: 'a1-lexik-ordinalzahlen-datum',
  level: 'A1',
  topic: 'Даты и Порядковые числительные (основы)',
  theory: `
В этом уроке мы научимся называть даты и использовать порядковые числительные (первый, второй, третий и т.д.).

**1. Порядковые числительные (Ordinalzahlen):**
Они показывают порядок.
*   **От 1 до 19:** образуются добавлением суффикса **-te** к количественному числительному.
    *   zwei (2) → der/die/das zwei**te** (второй)
    *   vier (4) → der/die/das vier**te** (четвертый)
    *   sechs (6) → der/die/das sechs**te** (шестой)
    *   **Исключения:**
        *   eins (1) → der/die/das **erste** (первый)
        *   drei (3) → der/die/das **dritte** (третий)
        *   sieben (7) → der/die/das **siebte** (седьмой) (иногда siebente)
*   **От 20 и выше:** добавляется суффикс **-ste**.
    *   zwanzig (20) → der/die/das zwanzig**ste** (двадцатый)
    *   Для А1 достаточно знать числа до 31-го для дат: einunddreißig (31) -> der/die/das einunddreißig**ste** (тридцать первый).

Порядковые числительные обычно используются с определенным артиклем и склоняются как прилагательные: *der erste Tag*, *die zweite Woche*.

**2. Как спросить и сказать дату:**
*   **Вопрос:** *Der wievielte ist heute?* (Какое сегодня число?)
*   **Ответ (сегодня ... число):** *Heute ist der + порядковое числительное (в Nominativ) + Название месяца (в Nominativ).*
    *   *Heute ist der **erste** Mai.* (Сегодня первое мая.)
    *   *Heute ist der **fünfte** Januar.* (Сегодня пятое января.)
*   **Указание на конкретную дату (когда что-то происходит):** Используется предлог **am** (an + dem) + порядковое числительное с окончанием **-en** + Название месяца.
    *   *Mein Geburtstag ist **am ersten** Mai.* (Мой день рождения первого мая.)
    *   *Wir treffen uns **am zehnten** August.* (Мы встречаемся десятого августа.)

**Написание даты цифрами:** День и месяц разделяются точкой: 1. Mai; 10.08.
  `,
  vocabulary: [
    { german: 'der/die/das erste', russian: 'первый, -ая, -ое' },
    { german: 'der/die/das zweite', russian: 'второй, -ая, -ое' },
    { german: 'der/die/das dritte', russian: 'третий, -ая, -ое' },
    { german: 'der/die/das vierte', russian: 'четвертый, -ая, -ое' },
    { german: 'der/die/das fünfte', russian: 'пятый, -ая, -ое' },
    { german: 'der/die/das sechste', russian: 'шестой, -ая, -ое' },
    { german: 'der/die/das siebte', russian: 'седьмой, -ая, -ое' },
    { german: 'der/die/das achte', russian: 'восьмой, -ая, -ое' },
    { german: 'der/die/das neunte', russian: 'девятый, -ая, -ое' },
    { german: 'der/die/das zehnte', russian: 'десятый, -ая, -ое' },
    { german: 'der/die/das zwanzigste', russian: 'двадцатый, -ая, -ое' },
    { german: 'der/die/das einunddreißigste', russian: 'тридцать первый, -ая, -ое' },
    { german: 'Der wievielte ist heute?', russian: 'Какое сегодня число?' },
    { german: 'Heute ist der...', russian: 'Сегодня ... (число)', example: 'Heute ist der zweite April.' },
    { german: 'am (+ Datum)', russian: 'какого-то числа (предлог)', example: 'am dritten März' },
    { german: 'der Monat (-e)', russian: 'месяц' },
    { german: 'der Geburtstag (-e)', russian: 'день рождения' },
  ],
  readingText: `
Heute ist der zehnte September. Es ist ein schöner Tag. Die Sonne scheint.
Mein Geburtstag ist am fünften Oktober. Das ist mein Lieblingstag im Jahr!
Am ersten Januar ist Neujahr. Viele Leute feiern diesen Tag.
  `,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-ordinal-datum-rq1',
      question: 'Какое число сегодня, согласно тексту?',
      options: ['Пятое октября', 'Первое января', 'Десятое сентября', 'Второе апреля'],
      correctAnswer: 'Десятое сентября',
      explanation: 'В тексте сказано: "Heute ist der zehnte September."',
    },
    {
      id: 'a1-lexik-ordinal-datum-rq2',
      question: 'Когда у автора день рождения?',
      options: ['1 января', '10 сентября', '5 октября', 'Не указано'],
      correctAnswer: '5 октября',
      explanation: 'В тексте сказано: "Mein Geburtstag ist am fünften Oktober."',
    },
  ],
  exercises: [
    {
      id: 'a1-ordinal-ex1',
      type: 'multiple_choice',
      question: 'Как будет "третий" по-немецки?',
      options: ['der dreite', 'der dritte', 'der dreiste', 'der drite'],
      correctAnswer: 'der dritte',
      explanation: 'Порядковое числительное от "drei" (три) - "dritte".',
    },
    {
      id: 'a1-ordinal-ex2',
      type: 'fill_in_the_blank',
      question: 'Напишите словами: "Heute ist der 7. (седьмой) Mai."',
      sentenceParts: ['Heute ist der ', ' Mai.'],
      correctAnswer: 'siebte',
      explanation: 'Порядковое числительное от "sieben" (семь) - "siebte".',
    },
    {
      id: 'a1-ordinal-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я приду пятого числа."',
      prompt: 'Я приду пятого числа.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich komme am fünften.',
      explanation: 'Для указания даты используется "am" + порядковое числительное с окончанием -en: "am fünften".',
    },
    {
      id: 'a1-ordinal-wp1',
      type: 'writing_prompt',
      question: 'Wann hast du Geburtstag? Schreibe das Datum. (Когда у тебя день рождения? Напиши дату. Пример: Mein Geburtstag ist am ersten Januar.)',
      suggestedLength: '1 предложение',
    },
  ],
};
