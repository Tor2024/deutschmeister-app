
import type { Test } from '@/types';

export const testA2ModalverbenPerfekt: Test = {
  id: 'a2-modalverben-perfekt-test',
  level: 'A2',
  topic: 'Модальные глаголы в Perfekt (Тест)',
  testType: 'thematic',
  associatedLessonId: 'a2-modalverben-perfekt',
  questions: [
    {
      id: 'a2-modalperfekt-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Perfekt: "Das ___ ich nicht ___ (können)." (Модальный глагол как основной)',
      options: ['habe ... gekonnt', 'bin ... gekonnt', 'habe ... können', 'bin ... können'],
      correctAnswer: 'habe ... gekonnt',
      explanation: 'Если модальный глагол используется как основной, Perfekt образуется с "haben" + Partizip II модального глагола (gekonnt). "Das habe ich nicht gekonnt."',
    },
    {
      id: 'a2-modalperfekt-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную конструкцию Perfekt: "Er ___ leider nicht ___ ___ (mitkommen dürfen)."',
      sentenceParts: ['Er ', ' leider nicht ', ' ', '.'],
      correctAnswer: 'hat, mitkommen dürfen',
      explanation: 'Perfekt с модальным глаголом и инфинитивом другого глагола: haben + Infinitiv + Infinitiv модального глагола. "Er hat leider nicht mitkommen dürfen."',
    },
    {
      id: 'a2-modalperfekt-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Она хотела посмотреть этот фильм."',
      prompt: 'Она хотела посмотреть этот фильм.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie hat diesen Film sehen wollen.',
      explanation: 'Perfekt: Sie hat + diesen Film sehen (Infinitiv) + wollen (Infinitiv).',
    },
    {
      id: 'a2-modalperfekt-test-q4',
      type: 'multiple_choice',
      question: 'Какое предложение в Perfekt с модальным глаголом построено правильно?',
      options: [
        'Wir haben früher aufstehen gemusst.',
        'Wir haben früher müssen aufstehen.',
        'Wir haben früher aufstehen müssen.'
      ],
      correctAnswer: 'Wir haben früher aufstehen müssen.',
      explanation: 'Правильный порядок: haben + (обстоятельства) + Infinitiv смыслового глагола + Infinitiv модального глагола.',
    },
     {
      id: 'a2-modalperfekt-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Ich ___ nicht schwimmen ___ (dürfen), weil das Wasser zu kalt war."',
      sentenceParts: ['Ich ', ' nicht schwimmen ', ', weil das Wasser zu kalt war.'],
      correctAnswer: 'habe, dürfen',
      explanation: 'Perfekt: ich habe + nicht schwimmen (Infinitiv) + dürfen (Infinitiv).',
    },
  ],
};

    