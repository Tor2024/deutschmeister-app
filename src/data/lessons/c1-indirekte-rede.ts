
import type { Lesson } from '@/types';

// --- Урок C1: Косвенная речь (Indirekte Rede) ---
export const lessonC1IndirekteRede: Lesson = {
  id: 'c1-indirekte-rede',
  level: 'C1',
  topic: 'Косвенная речь (Indirekte Rede)',
  theory: 'Косвенная речь используется для передачи чужих высказываний. Часто требует использования Konjunktiv I. Если форма Konjunktiv I совпадает с Präsens Indikativ, используется Konjunktiv II. При передаче вопросов используется союз "ob" (для общих вопросов) или вопросительное слово. Происходит также сдвиг местоимений и временных указателей. Пример: Er sagte: "Ich komme morgen." -> Er sagte, er komme am nächsten Tag / er würde am nächsten Tag kommen.',
  exercises: [
    {
      id: 'c1-indirekte-ex1',
      type: 'multiple_choice',
      question: 'Преобразуйте в косвенную речь (Konjunktiv I): Sie sagt: "Ich habe viel Arbeit."',
      options: ['Sie sagt, sie hat viel Arbeit.', 'Sie sagt, sie habe viel Arbeit.', 'Sie sagt, sie hätte viel Arbeit.'],
      correctAnswer: 'Sie sagt, sie habe viel Arbeit.',
      explanation: 'Konjunktiv I от "hat" (3 л. ед.ч.) - "habe".',
    },
    {
      id: 'c1-indirekte-ex2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в косвенную речь: Er fragte mich: "Kommst du mit?"',
      sentenceParts: ['Er fragte mich, ob ich ', '.'],
      correctAnswer: 'mitkomme',
      explanation: 'Общий вопрос вводится союзом "ob", глагол "mitkomme" (Konjunktiv I от "mitkommen" для "ich") ставится в конец.',
    },
    {
      id: 'c1-indirekte-ex3',
      type: 'translation',
      question: 'Переведите на немецкий используя косвенную речь: "Учитель сказал, что мы должны сделать домашнее задание."',
      prompt: 'Учитель сказал, что мы должны сделать домашнее задание.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Lehrer sagte, wir müssten die Hausaufgaben machen.',
      explanation: '"müssen" в Konjunktiv I для "wir" - "müssen". Так как совпадает с индикативом, часто используется Konjunktiv II "müssten" для ясности.',
    },
  ],
};

    