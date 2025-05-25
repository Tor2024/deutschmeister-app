
import type { Lesson } from '@/types';

// --- Урок C2: Номинальный и вербальный стили (Nominalstil vs. Verbalstil) ---
export const lessonC2NominalstilVerbalstil: Lesson = {
  id: 'c2-nominalstil-verbalstil',
  level: 'C2',
  topic: 'Номинальный и вербальный стили (Nominalstil vs. Verbalstil)',
  theory: `В немецком языке существует тенденция к использованию номинального стиля (Nominalstil), особенно в официальной, научной и письменной речи. Номинальный стиль характеризуется преобладанием существительных (часто отглагольных) и причастных оборотов вместо глагольных конструкций и придаточных предложений. Вербальный стиль (Verbalstil) более характерен для устной и неформальной речи, он использует больше глаголов и придаточных предложений.
Умение переключаться между этими стилями и понимать их особенности важно для уровня C2.

Примеры трансформации из вербального в номинальный стиль:
-   **Вербально:** Als er das Projekt beendet hatte, war er sehr müde. (Когда он закончил проект, он был очень уставшим.)
    **Номинально:** Nach Beendigung des Projekts war er sehr müde. (После завершения проекта он был очень уставшим.)
-   **Вербально:** Man erwartet, dass die Preise steigen. (Ожидается, что цены вырастут.)
    **Номинально:** Eine Steigerung der Preise wird erwartet. / Man erwartet eine Preissteigerung. (Ожидается рост цен.)

Характерные черты номинального стиля:
-   Отглагольные существительные на -ung, -tion, -heit, -keit, -schaft и др.
-   Предложные конструкции вместо глаголов.
-   Причастные обороты.
-   Более формальный и абстрактный характер изложения.
`,
  exercises: [
    {
      id: 'c2-nominal-ex1',
      type: 'multiple_choice',
      question: 'Какое из предложений написано в номинальном стиле?',
      options: [
        'Weil das Wetter schlecht war, blieben wir zu Hause.',
        'Wegen des schlechten Wetters blieben wir zu Hause.',
        'Wir blieben wir zu Hause, da das Wetter schlecht war.'
      ],
      correctAnswer: 'Wegen des schlechten Wetters blieben wir zu Hause.',
      explanation: 'Использование предлога "wegen" с существительным "des schlechten Wetters" вместо придаточного предложения с "weil" или "da" характерно для номинального стиля.',
    },
    {
      id: 'c2-nominal-ex2',
      type: 'fill_in_the_blank',
      question: 'Трансформируйте в номинальный стиль: "Man untersucht die Ursachen des Problems." (Исследуют причины проблемы.)',
      sentenceParts: ['Eine ', ' der Ursachen des Problems findet statt.'], // Ответ подразумевает "Untersuchung"
      correctAnswer: 'Untersuchung',
      explanation: '"Untersuchung" (исследование) - отглагольное существительное от "untersuchen". Полный вариант: "Eine Untersuchung der Ursachen des Problems findet statt." или "Die Untersuchung der Ursachen des Problems..."',
    },
    {
      id: 'c2-nominal-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя преимущественно номинальный стиль: "Благодаря улучшению экономической ситуации, создаются новые рабочие места."',
      prompt: 'Благодаря улучшению экономической ситуации, создаются новые рабочие места.',
      languageDirection: 'to_german',
      correctAnswer: 'Dank der Verbesserung der wirtschaftlichen Lage entstehen neue Arbeitsplätze.',
      // Альтернатива: Durch die Verbesserung der wirtschaftlichen Lage kommt es zur Schaffung neuer Arbeitsplätze.
      explanation: '"Verbesserung" (улучшение) - отглагольное существительное. Конструкция с "Dank" или "Durch" + существительное типична для номинального стиля.',
    },
  ],
};

    