
import type { Test } from '@/types';

export const testA2VerbenPraesens: Test = {
  id: 'a2-verben-praesens-test',
  level: 'A2',
  topic: 'Спряжение глаголов в Präsens (углубленно) (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-verben-praesens-test-q1',
      type: 'multiple_choice',
      question: 'Какая форма глагола "arbeiten" (работать) верна для местоимения "er"?',
      options: ['arbeitet', 'arbeitst', 'arbeit', 'arbeiten'],
      correctAnswer: 'arbeitet',
      explanation: 'Основа глагола "arbeiten" заканчивается на -t, поэтому для 3-го лица ед.ч. (er/sie/es) добавляется окончание -et: arbeitet.',
    },
    {
      id: 'a2-verben-praesens-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "lesen" (читать): Du ___ ein Buch.',
      sentenceParts: ['Du ', ' ein Buch.'],
      correctAnswer: 'liest',
      explanation: 'Глагол "lesen" - сильный, корневая гласная "e" меняется на "ie" во 2-м лице ед.ч. (du). Окончание "-st". Получается "du liest".',
    },
    {
      id: 'a2-verben-praesens-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильную форму для глагола "fahren" (ехать) и местоимения "er":',
      options: ['er fahrt', 'er fährt', 'er fahret', 'er fahren'],
      correctAnswer: 'er fährt',
      explanation: 'Глагол "fahren" - сильный, корневая гласная "a" меняется на "ä" в 3-м лице ед.ч. (er). Окончание "-t". Получается "er fährt".',
    },
    {
      id: 'a2-verben-praesens-test-q4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "heißen" (называться): Wie ___ Sie?',
      sentenceParts: ['Wie ', ' Sie?'],
      correctAnswer: 'heißen',
      explanation: 'Для вежливой формы "Sie" глагол "heißen" имеет форму "heißen".',
    },
    {
      id: 'a2-verben-praesens-test-q5',
      type: 'multiple_choice',
      question: 'Какая форма глагола "geben" (давать) верна для "ihr"?',
      options: ['gibt', 'gebt', 'giebt', 'geben'],
      correctAnswer: 'gebt',
      explanation: 'Глагол "geben" - сильный, но для "ihr" (вы, мн.ч. неформ.) корневая гласная не меняется. Окончание "-t". Получается "ihr gebt".',
    },
    {
      id: 'a2-verben-praesens-test-q6',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "sein": ___ ihr müde?',
      sentenceParts: ['', ' ihr müde?'],
      correctAnswer: 'Seid',
      explanation: 'Глагол "sein" (быть) имеет особую форму спряжения. Для "ihr" (вы) это форма "seid".',
    }
  ],
};
