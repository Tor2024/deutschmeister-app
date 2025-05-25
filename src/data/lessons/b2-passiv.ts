
import type { Lesson } from '@/types';

// --- Урок B2: Пассивный залог (Passiv) ---
export const lessonB2Passiv: Lesson = {
  id: 'b2-passiv',
  level: 'B2',
  topic: 'Пассивный залог (Passiv)',
  theory: `Пассивный залог используется, когда действие важнее, чем его исполнитель, или исполнитель неизвестен/неважен.
Образуется с помощью вспомогательного глагола "werden" в соответствующей временной форме и Partizip II смыслового глагола.
Пример: Das Auto wird repariert. (Машину ремонтируют / Машина ремонтируется.)
Исполнитель действия (агенс) может быть указан с предлогом "von" (если это лицо или сила) или "durch" (если это средство или причина).
Пример: Das Buch wurde von dem Studenten gelesen. (Книга была прочитана студентом.)

Основные временные формы пассива:
- Präsens Passiv: wird + Partizip II (Das Haus wird gebaut.)
- Präteritum Passiv: wurde + Partizip II (Das Haus wurde gebaut.)
- Perfekt Passiv: ist + Partizip II + worden (Das Haus ist gebaut worden.)
- Plusquamperfekt Passiv: war + Partizip II + worden (Das Haus war gebaut worden.)
- Futur I Passiv: wird + Partizip II + werden (Das Haus wird gebaut werden.)
`,
  exercises: [
    {
      id: 'b2-passiv-ex1',
      type: 'multiple_choice',
      question: 'Преобразуйте предложение в Präsens Passiv: "Der Mechaniker repariert das Auto."',
      options: [
        'Das Auto repariert den Mechaniker.',
        'Das Auto wird repariert.',
        'Das Auto ist repariert worden.'
      ],
      correctAnswer: 'Das Auto wird repariert.',
      explanation: 'Präsens Passiv: werden (в нужной форме) + Partizip II. "repariert" - Partizip II от "reparieren".',
    },
    {
      id: 'b2-passiv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму пассива (Präteritum Passiv): Die Brücke ___ letztes Jahr ___. (bauen)',
      sentenceParts: ['Die Brücke ', ' letztes Jahr ', '.'],
      correctAnswer: 'wurde, gebaut',
      explanation: 'Präteritum Passiv: wurde + Partizip II. "gebaut" - Partizip II от "bauen".',
    },
    {
      id: 'b2-passiv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (используя пассив): "Письмо было написано вчера."',
      prompt: 'Письмо было написано вчера.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Brief wurde gestern geschrieben.',
      explanation: 'Präteritum Passiv. "geschrieben" - Partizip II от "schreiben".',
    },
  ],
};

    