
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA1LexikWochentageMonateJahreszeiten: Lesson = {
  id: 'a1-lexik-wochentage-monate-jahreszeiten',
  level: 'A1',
  topic: 'Дни недели, месяцы, времена года',
  theory: `
В этом уроке мы выучим названия дней недели, месяцев и времен года на немецком языке. Эта лексика очень важна для повседневного общения, планирования и понимания дат.

**Дни недели (Die Wochentage)**
Все дни недели в немецком языке мужского рода (der).
- der Montag - понедельник
- der Dienstag - вторник
- der Mittwoch - среда
- der Donnerstag - четверг
- der Freitag - пятница
- der Samstag / der Sonnabend - суббота
- der Sonntag - воскресенье

**Месяцы (Die Monate)**
Все месяцы в немецком языке также мужского рода (der).
- der Januar - январь
- der Februar - февраль
- der März - март
- der April - апрель
- der Mai - май
- der Juni - июнь
- der Juli - июль
- der August - август
- der September - сентябрь
- der Oktober - октябрь
- der November - ноябрь
- der Dezember - декабрь

**Времена года (Die Jahreszeiten)**
Все времена года мужского рода (der).
- der Frühling - весна
- der Sommer - лето
- der Herbst - осень
- der Winter - зима

**Полезные фразы:**
- *Welcher Tag ist heute?* - Какой сегодня день?
- *Heute ist Dienstag.* - Сегодня вторник.
- *Morgen ist Mittwoch.* - Завтра среда.
- *Gestern war Montag.* - Вчера был понедельник.
- *Ich habe am Freitag frei.* - У меня в пятницу выходной.
- *Mein Geburtstag ist im Mai.* - Мой день рождения в мае.
- *Im Sommer ist es warm.* - Летом тепло.
`,
  vocabulary: [
    { german: 'der Montag', russian: 'понедельник' },
    { german: 'der Dienstag', russian: 'вторник' },
    { german: 'der Mittwoch', russian: 'среда' },
    { german: 'der Donnerstag', russian: 'четверг' },
    { german: 'der Freitag', russian: 'пятница' },
    { german: 'der Samstag / der Sonnabend', russian: 'суббота' },
    { german: 'der Sonntag', russian: 'воскресенье' },
    { german: 'die Woche (-n)', russian: 'неделя', example: 'Eine Woche hat sieben Tage.' },
    { german: 'heute', russian: 'сегодня', example: 'Heute ist ein schöner Tag.' },
    { german: 'morgen', russian: 'завтра', example: 'Was machst du morgen?' },
    { german: 'gestern', russian: 'вчера', example: 'Gestern war ich im Kino.' },
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
    { german: 'der Monat (-e)', russian: 'месяц', example: 'Das Jahr hat zwölf Monate.' },
    { german: 'der Frühling', russian: 'весна', example: 'Im Frühling blühen die Blumen.' },
    { german: 'der Sommer', russian: 'лето', example: 'Im Sommer fahren wir ans Meer.' },
    { german: 'der Herbst', russian: 'осень', example: 'Im Herbst fallen die Blätter.' },
    { german: 'der Winter', russian: 'зима', example: 'Im Winter schneit es oft.' },
    { german: 'die Jahreszeit (-en)', russian: 'время года', example: 'Meine Lieblingsjahreszeit ist der Sommer.' },
  ],
  readingText: `
Mein Lieblingsmonat ist der Juli. Im Juli ist es oft warm und sonnig. Das ist Sommer!
Am Montag und Dienstag gehe ich zur Arbeit. Am Mittwoch habe ich frei.
Der Winter beginnt im Dezember. Im Winter ist es kalt. Manchmal schneit es. Der Januar und Februar sind auch Wintermonate.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-wochentage-rq1',
      question: 'Какой любимый месяц автора текста?',
      options: ['Январь', 'Май', 'Июль', 'Декабрь'],
      correctAnswer: 'Июль',
      explanation: 'В тексте сказано: "Mein Lieblingsmonat ist der Juli."'
    },
    {
      id: 'a1-lexik-wochentage-rq2',
      question: 'В какой день недели у автора выходной?',
      options: ['Понедельник', 'Вторник', 'Среда', 'Пятница'],
      correctAnswer: 'Среда',
      explanation: 'В тексте сказано: "Am Mittwoch habe ich frei."'
    }
  ],
  exercises: [
    {
      id: 'a1-lexik-wochentage-ex1',
      type: 'multiple_choice',
      question: 'Какой день недели следует за пятницей (Freitag)?',
      options: ['Sonntag', 'Mittwoch', 'Samstag', 'Dienstag'],
      correctAnswer: 'Samstag',
      explanation: 'После пятницы (Freitag) идет суббота (Samstag).',
    },
    {
      id: 'a1-lexik-wochentage-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное время года: "Nach dem Sommer kommt der ___."',
      sentenceParts: ['Nach dem Sommer kommt der ', '.'],
      correctAnswer: 'Herbst',
      explanation: 'После лета (Sommer) наступает осень (Herbst).',
    },
    {
      id: 'a1-lexik-wochentage-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой день рождения в июле."',
      prompt: 'Мой день рождения в июле.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Geburtstag ist im Juli.',
      explanation: '"В июле" переводится как "im Juli" (in dem Juli).',
    },
    {
      id: 'a1-lexik-wochentage-ex4',
      type: 'multiple_choice',
      question: 'Какой род у всех месяцев в немецком языке?',
      options: ['мужской (der)', 'женский (die)', 'средний (das)', 'разный'],
      correctAnswer: 'мужской (der)',
      explanation: 'Все названия месяцев в немецком языке мужского рода (der Januar, der Februar и т.д.).',
    },
    {
      id: 'a1-lexik-wochentage-wp1',
      type: 'writing_prompt',
      question: 'Напиши, какой твой любимый день недели или месяц и почему. (2-3 предложения)',
      suggestedLength: '2-3 предложения'
    }
  ],
};
