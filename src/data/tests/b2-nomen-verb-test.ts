
import type { Test } from '@/types';

export const testB2NomenVerb: Test = {
  id: 'b2-nomen-verb-test',
  level: 'B2',
  topic: 'Устойчивые сочетания (Nomen-Verb) (Тест)',
  questions: [
    {
      id: 'b2-nomenverb-test-q1',
      type: 'multiple_choice',
      question: 'Какой глагол используется в устойчивом сочетании "___ eine wichtige Rolle spielen"?',
      options: ['machen', 'nehmen', 'spielen', 'treffen'],
      correctAnswer: 'spielen',
      explanation: 'Устойчивое сочетание: "eine Rolle spielen" (играть роль).',
    },
    {
      id: 'b2-nomenverb-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящее существительное: "Der Redner übte scharfe ___ an der aktuellen Politik."',
      sentenceParts: ['Der Redner übte scharfe ', ' an der aktuellen Politik.'],
      correctAnswer: 'Kritik',
      explanation: 'Устойчивое сочетание: "Kritik üben an + Dativ" (критиковать что-либо).',
    },
    {
      id: 'b2-nomenverb-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя Nomen-Verb-Verbindung: "Мы должны принять меры."',
      prompt: 'Мы должны принять меры.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir müssen Maßnahmen treffen.', // или ergreifen
      explanation: '"Принять меры" - "Maßnahmen treffen" или "Maßnahmen ergreifen".',
    },
    {
      id: 'b2-nomenverb-test-q4',
      type: 'multiple_choice',
      question: 'Выберите правильный предлог: "Er nimmt Einfluss ___ die Entscheidung."',
      options: ['auf', 'an', 'mit', 'für'],
      correctAnswer: 'auf',
      explanation: 'Устойчивое сочетание: "Einfluss nehmen auf + Akkusativ" (оказывать влияние на).',
    },
    {
      id: 'b2-nomenverb-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните NVV: "Es ist wichtig, ___ auf andere Menschen zu nehmen."',
      sentenceParts: ['Es ist wichtig, ', ' auf andere Menschen zu nehmen.'],
      correctAnswer: 'Rücksicht',
      explanation: 'Устойчивое сочетание: "Rücksicht nehmen auf + Akkusativ" (принимать во внимание, считаться с).',
    },
    {
      id: 'b2-nomenverb-test-q6',
      type: 'multiple_choice',
      question: 'Какой глагол используется с "zur Verfügung", чтобы означать "быть в распоряжении"?',
      options: ['stellen', 'stehen', 'bringen', 'kommen'],
      correctAnswer: 'stehen',
      explanation: '"Zur Verfügung stehen" (Dat) - быть в распоряжении. "Zur Verfügung stellen" (Dat) - предоставить в распоряжение.',
    }
  ],
};
