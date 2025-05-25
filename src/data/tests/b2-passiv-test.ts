
import type { Test } from '@/types';

export const testB2Passiv: Test = {
  id: 'b2-passiv-test',
  level: 'B2',
  topic: 'Пассивный залог (углубленно) (Тест)',
  questions: [
    {
      id: 'b2-passiv-test-q1',
      type: 'multiple_choice',
      question: 'Преобразуйте предложение в Perfekt Passiv: "Man hat das Haus schnell gebaut."',
      options: [
        'Das Haus wurde schnell gebaut.',
        'Das Haus ist schnell gebaut worden.',
        'Das Haus war schnell gebaut worden.',
        'Das Haus wird schnell gebaut sein.'
      ],
      correctAnswer: 'Das Haus ist schnell gebaut worden.',
      explanation: 'Perfekt Passiv образуется: sein (спрягаемая форма) + Partizip II + worden. "Das Haus ist schnell gebaut worden."',
    },
    {
      id: 'b2-passiv-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму пассива (Präteritum Passiv): "Die Bücher ___ von den Studenten ___ (lesen)."',
      sentenceParts: ['Die Bücher ', ' von den Studenten ', '.'],
      correctAnswer: 'wurden, gelesen',
      explanation: 'Präteritum Passiv для множественного числа: wurden + Partizip II (gelesen). "Die Bücher wurden von den Studenten gelesen."',
    },
    {
      id: 'b2-passiv-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Futur I Passiv): "Проблема будет решена завтра."',
      prompt: 'Проблема будет решена завтра.',
      languageDirection: 'to_german',
      correctAnswer: 'Das Problem wird morgen gelöst werden.',
      explanation: 'Futur I Passiv: wird (вспомогательный для Futur I) + Partizip II (gelöst) + werden (вспомогательный для Passiv в Infinitiv).',
    },
    {
      id: 'b2-passiv-test-q4',
      type: 'multiple_choice',
      question: 'Какое предложение описывает состояние (Zustandspassiv)?',
      options: [
        'Die Tür wird geschlossen.',
        'Die Tür ist geschlossen.',
        'Die Tür schließt sich.'
      ],
      correctAnswer: 'Die Tür ist geschlossen.',
      explanation: 'Zustandspassiv (пассив состояния) образуется с "sein + Partizip II" и описывает результат. "Die Tür ist geschlossen" означает "Дверь закрыта (состояние)".',
    },
    {
      id: 'b2-passiv-test-q5',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в Präsens Passiv с модальным глаголом: "Man muss die Rechnung bezahlen."',
      sentenceParts: ['Die Rechnung ', ' ', '.'],
      correctAnswer: 'muss bezahlt werden',
      explanation: 'Пассив с модальным глаголом в Präsens: модальный глагол (muss) + Partizip II (bezahlt) + werden (Infinitiv). "Die Rechnung muss bezahlt werden."',
    },
    {
      id: 'b2-passiv-test-q6',
      type: 'multiple_choice',
      question: 'Выберите правильный предлог для указания исполнителя (лица): "Der Roman wurde ___ einem bekannten Autor geschrieben."',
      options: ['durch', 'von', 'mit', 'wegen'],
      correctAnswer: 'von',
      explanation: 'Для указания лица, совершившего действие в пассиве, используется предлог "von + Dativ".',
    }
  ],
};
