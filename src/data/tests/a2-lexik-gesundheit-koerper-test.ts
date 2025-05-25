
import type { Test } from '@/types';

export const testA2LexikGesundheitKoerper: Test = {
  id: 'a2-lexik-gesundheit-koerper-test',
  level: 'A2',
  topic: 'Здоровье и тело (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'a2-lexik-gesundheit-koerper-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "аптека"?',
      options: ['das Krankenhaus', 'die Praxis', 'die Apotheke', 'der Notfall'],
      correctAnswer: 'die Apotheke',
      explanation: '"Die Apotheke" означает "аптека".',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich habe starke ___ (боли) im Rücken."',
      sentenceParts: ['Ich habe starke ', ' im Rücken.'],
      correctAnswer: 'Schmerzen',
      explanation: '"Боль" по-немецки "der Schmerz", во множественном числе "die Schmerzen".',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мое горло болит."',
      prompt: 'Мое горло болит.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Hals tut weh.',
      explanation: '"Горло" - "der Hals". "Болеть" (о части тела) - "weh tun".',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "быть здоровым"?',
      options: ['krank sein', 'Fieber haben', 'gesund sein', 'Husten haben'],
      correctAnswer: 'gesund sein',
      explanation: '"Gesund sein" означает "быть здоровым".',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-test-q5',
      type: 'fill_in_the_blank',
      question: 'Заполните пропуск: "Er fühlt sich heute nicht gut, er hat ___."',
      sentenceParts: ['Er fühlt sich heute nicht gut, er hat ', '.'],
      correctAnswer: 'Fieber', // Можно также Schnupfen, Husten и т.д. в зависимости от контекста урока
      explanation: '"Fieber" (температура/жар) - частый симптом плохого самочувствия.',
    },
  ],
};
