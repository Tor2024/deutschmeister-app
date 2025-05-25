
import type { Lesson } from '@/types';

// --- Урок B2: Сослагательное наклонение II (Konjunktiv II) ---
export const lessonB2Konjunktiv2: Lesson = {
  id: 'b2-konjunktiv2',
  level: 'B2',
  topic: 'Сослагательное наклонение II (Konjunktiv II)',
  theory: 'Konjunktiv II используется для выражения нереальных желаний, предположений, вежливых просьб. Образуется от формы Präteritum сильных глаголов с умлаутом (если возможно) или с помощью вспомогательного глагола "würden" + инфинитив. Например: "Wenn ich Zeit hätte, würde ich reisen." (Если бы у меня было время, я бы путешествовал.)',
  exercises: [
    {
      id: 'b2-konjunktiv2-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Konjunktiv II для "Ich habe Geld":',
      options: ['Ich habe Geld gehabt', 'Ich hätte Geld', 'Ich würde Geld haben'],
      correctAnswer: 'Ich hätte Geld',
      explanation: 'Konjunktiv II от "haben" - "hätte".',
    },
    {
      id: 'b2-konjunktiv2-ex2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение в Konjunktiv II: Wenn er mehr lernen ___, ___ er die Prüfung bestehen.',
      sentenceParts: ['Wenn er mehr lernen ', ', ', ' er die Prüfung bestehen.'],
      correctAnswer: 'würde, würde', // или könnte / sollte в зависимости от контекста, но würden...würden самый частый
      explanation: 'Для большинства глаголов Konjunktiv II образуется с "würde" + Infinitiv. "Wenn er mehr lernen würde, würde er die Prüfung bestehen." (Если бы он больше учился, он бы сдал экзамен.)',
    },
  ],
};

    