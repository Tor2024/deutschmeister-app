
import type { Test } from '@/types';

export const testB1PartizipienAlsAdjektive: Test = {
  id: 'b1-partizipien-als-adjektive-test',
  level: 'B1',
  topic: 'Причастие I и II как прилагательное (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b1-partizipien-als-adjektive',
  questions: [
    {
      id: 'b1-partizipien-adjektive-test-q1',
      type: 'multiple_choice',
      question: 'Какое Partizip I от глагола "sprechen"?',
      options: ['gesprochen', 'sprechend', 'sprach', 'spreche'],
      correctAnswer: 'sprechend',
      explanation: 'Partizip I образуется: Infinitiv + d. sprechen → sprechend.',
    },
    {
      id: 'b1-partizipien-adjektive-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: "Der ___ (ankommen, Part. II) Zug steht auf Gleis 3."',
      sentenceParts: ['Der ', ' Zug steht auf Gleis 3.'],
      correctAnswer: 'angekommene',
      explanation: 'Partizip II от "ankommen" - "angekommen". Перед существительным мужского рода в Nominativ с определенным артиклем "der" окончание -e.',
    },
    {
      id: 'b1-partizipien-adjektive-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий, используя Partizip II как прилагательное: "Украденная картина была найдена."',
      prompt: 'Украденная картина была найдена.',
      languageDirection: 'to_german',
      correctAnswer: 'Das gestohlene Bild wurde gefunden.',
      explanation: 'Partizip II от "stehlen" - "gestohlen". "Das Bild" (ср.р.), Nominativ: das gestohlene Bild.',
    },
    {
      id: 'b1-partizipien-adjektive-test-q4',
      type: 'multiple_choice',
      question: 'Какое значение обычно имеет Partizip II от переходного глагола, когда оно используется как прилагательное?',
      options: ['Активное, продолжающееся действие', 'Активное, завершенное действие', 'Пассивное, завершенное действие', 'Пассивное, продолжающееся действие'],
      correctAnswer: 'Пассивное, завершенное действие',
      explanation: 'Partizip II от переходных глаголов в атрибутивной функции обычно имеет пассивное значение и указывает на завершенность действия (например, "das geschriebene Buch" - написанная книга).',
    },
    {
      id: 'b1-partizipien-adjektive-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Die ___ (lächeln, Part. I) Frau ist meine Nachbarin."',
      sentenceParts: ['Die ', ' Frau ist meine Nachbarin.'],
      correctAnswer: 'lächelnde',
      explanation: 'Partizip I от "lächeln" - "lächelnd". Перед существительным женского рода в Nominativ с определенным артиклем "die" окончание -e.',
    },
  ],
};

