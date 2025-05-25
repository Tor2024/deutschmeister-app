
import type { Lesson } from '@/types';

// --- Урок A1: Порядок слов в простом предложении (Основы) ---
export const lessonA1SatzbauGrundlagen: Lesson = {
  id: 'a1-satzbau-grundlagen',
  level: 'A1',
  topic: 'Порядок слов в простом предложении (Основы)',
  theory: `Порядок слов в немецком предложении имеет свои правила, особенно это касается места глагола. На начальном этапе мы рассмотрим самые основные структуры.

**1. Утвердительное предложение (Aussagesatz)**
В простом утвердительном предложении спрягаемый глагол (та часть глагола, которая изменяется по лицам: ich lerne, du lernst) всегда стоит на **втором месте**.

*   **Прямой порядок слов:**
    Подлежащее (кто? что?) — Глагол (спрягаемый) — Остальные части предложения.
    *   *Ich lerne Deutsch.* (Я учу немецкий.)
        (1. Ich - подлежащее, 2. lerne - глагол, 3. Deutsch - дополнение)
    *   *Wir wohnen in Berlin.* (Мы живем в Берлине.)
        (1. Wir, 2. wohnen, 3. in Berlin)

*   **Обратный порядок слов:**
    Если на первом месте стоит не подлежащее, а другой член предложения (например, обстоятельство времени или места), то глагол все равно остается на втором месте, а подлежащее идет сразу после глагола.
    Обстоятельство (напр. времени) — Глагол (спрягаемый) — Подлежащее — Остальные части предложения.
    *   *Heute lerne ich Deutsch.* (Сегодня я учу немецкий.)
        (1. Heute, 2. lerne, 3. ich, 4. Deutsch)
    *   *In Berlin wohnen wir.* (В Берлине мы живем.)
        (1. In Berlin, 2. wohnen, 3. wir)

**2. Вопросительное предложение (Fragesatz)**

*   **Общий вопрос (Ja/Nein-Frage – вопрос, на который можно ответить "да" или "нет"):**
    Спрягаемый глагол стоит на **первом месте**.
    Глагол (спрягаемый) — Подлежащее — Остальные части предложения?
    *   *Lernst du Deutsch?* (Ты учишь немецкий?)
        (1. Lernst, 2. du, 3. Deutsch?)
    *   *Wohnen Sie in Berlin?* (Вы живете в Берлине?)
        (1. Wohnen, 2. Sie, 3. in Berlin?)

*   **Специальный вопрос (W-Frage – вопрос с вопросительным словом):**
    Вопросительное слово (Wer? Was? Wo? Wann? Wie? Warum? и т.д.) стоит на **первом месте**. Спрягаемый глагол – на **втором месте**.
    Вопросительное слово — Глагол (спрягаемый) — Подлежащее — Остальные части предложения?
    *   *Was lernst du?* (Что ты учишь?)
        (1. Was, 2. lernst, 3. du?)
    *   *Wo wohnen Sie?* (Где Вы живете?)
        (1. Wo, 2. wohnen, 3. Sie?)

Запоминание этих базовых правил поможет вам правильно строить свои первые немецкие предложения!`,
  vocabulary: [
    { german: 'der Satzbau', russian: 'порядок слов, построение предложения' },
    { german: 'der Aussagesatz (-sätze)', russian: 'утвердительное (повествовательное) предложение' },
    { german: 'der Fragesatz (-sätze)', russian: 'вопросительное предложение' },
    { german: 'die Ja/Nein-Frage (-n)', russian: 'общий вопрос (да/нет)' },
    { german: 'die W-Frage (-n)', russian: 'специальный вопрос (с вопросительным словом)' },
    { german: 'das Subjekt (-e)', russian: 'подлежащее' },
    { german: 'das Verb (-en)', russian: 'глагол' },
    { german: 'Wer?', russian: 'Кто?' },
    { german: 'Was?', russian: 'Что?' },
    { german: 'Wo?', russian: 'Где?' },
    { german: 'Wann?', russian: 'Когда?' },
    { german: 'Wie?', russian: 'Как?' },
    { german: 'Warum?', russian: 'Почему?' },
    { german: 'heute', russian: 'сегодня', example: 'Heute ist Montag.' },
    { german: 'hier', russian: 'здесь', example: 'Ich bin hier.' },
  ],
  exercises: [
    {
      id: 'a1-satzbau-grundlagen-ex1',
      type: 'multiple_choice',
      question: 'На каком месте стоит спрягаемый глагол в простом немецком утвердительном предложении?',
      options: ['На первом', 'На втором', 'На третьем', 'В конце'],
      correctAnswer: 'На втором',
      explanation: 'В простом утвердительном предложении спрягаемый глагол всегда стоит на втором месте.',
    },
    {
      id: 'a1-satzbau-grundlagen-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставьте слова в правильном порядке (прямой порядок): (ich / gern / Kaffee / trinke)',
      sentenceParts: ['', ' ', ' ', '.'],
      correctAnswer: 'Ich trinke gern Kaffee',
      explanation: 'Прямой порядок: Ich (подлежащее) trinke (глагол) gern Kaffee.',
    },
    {
      id: 'a1-satzbau-grundlagen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Ты играешь в футбол?"',
      prompt: 'Ты играешь в футбол?',
      languageDirection: 'to_german',
      correctAnswer: 'Spielst du Fußball?',
      explanation: 'Это общий вопрос (Ja/Nein-Frage). Глагол "spielst" на первом месте, затем подлежащее "du".',
    },
    {
      id: 'a1-satzbau-grundlagen-ex4',
      type: 'fill_in_the_blank',
      question: 'Составьте специальный вопрос: (wo / Sie / wohnen?)',
      sentenceParts: ['', ' ', ' ', '?'],
      correctAnswer: 'Wo wohnen Sie',
      explanation: 'Специальный вопрос: Wo (вопросительное слово) wohnen (глагол) Sie (подлежащее)?',
    },
    {
      id: 'a1-satzbau-grundlagen-ex5',
      type: 'multiple_choice',
      question: 'Какое предложение имеет обратный порядок слов?',
      options: [
        'Mein Freund kommt heute.',
        'Heute kommt mein Freund.',
        'Kommt mein Freund heute?'
        ],
      correctAnswer: 'Heute kommt mein Freund.',
      explanation: 'В предложении "Heute kommt mein Freund" на первом месте стоит обстоятельство времени "Heute", глагол "kommt" на втором, а подлежащее "mein Freund" после глагола.',
    },
  ],
};
