
import type { Lesson } from '@/types';

// --- Урок B2: Устойчивые сочетания существительных с глаголами (Nomen-Verb-Verbindungen) ---
export const lessonB2NomenVerb: Lesson = {
  id: 'b2-nomen-verb',
  level: 'B2',
  topic: 'Устойчивые сочетания существительных с глаголами (Nomen-Verb-Verbindungen)',
  theory: 'В немецком языке существует множество устойчивых сочетаний, где существительное с определенным глаголом образует смысловое единство (функциональные глаголы). Например: "eine Entscheidung treffen" (принять решение), "Kritik üben an" (критиковать кого-либо/что-либо), "einen Antrag stellen" (подать заявление). Значение таких конструкций часто отличается от суммы значений отдельных слов.',
  exercises: [
    {
      id: 'b2-nomenverb-ex1',
      type: 'multiple_choice',
      question: 'Какой глагол используется в сочетании "___ Einfluss nehmen auf"?',
      options: ['machen', 'nehmen', 'geben', 'haben'],
      correctAnswer: 'nehmen',
      explanation: 'Устойчивое сочетание: "Einfluss nehmen auf" (оказывать влияние на).',
    },
    {
      id: 'b2-nomenverb-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящее существительное: Er hat ___ gestellt, um eine neue Stelle zu bekommen.',
      sentenceParts: ['Er hat einen ', ' gestellt, um eine neue Stelle zu bekommen.'],
      correctAnswer: 'Antrag',
      explanation: 'Устойчивое сочетание: "einen Antrag stellen" (подать заявление).',
    },
    {
      id: 'b2-nomenverb-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Она приняла важное решение."',
      prompt: 'Она приняла важное решение.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie hat eine wichtige Entscheidung getroffen.',
      explanation: '"Принять решение" - "eine Entscheidung treffen".',
    },
  ],
};

    