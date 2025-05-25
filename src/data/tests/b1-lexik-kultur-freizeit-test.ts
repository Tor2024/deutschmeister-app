
import type { Test } from '@/types';

export const testB1LexikKulturFreizeit: Test = {
  id: 'b1-lexik-kultur-freizeit-test',
  level: 'B1',
  topic: 'Культура, Искусство и Свободное время (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b1-lexik-kultur-freizeit-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "выставка"?',
      options: ['das Konzert', 'die Oper', 'die Ausstellung', 'das Theater'],
      correctAnswer: 'die Ausstellung',
      explanation: '"Die Ausstellung" означает "выставка".',
    },
    {
      id: 'b1-lexik-kultur-freizeit-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich interessiere mich sehr ___ moderne Kunst."',
      sentenceParts: ['Ich interessiere mich sehr ', ' moderne Kunst.'],
      correctAnswer: 'für',
      explanation: 'Глагол "sich interessieren" используется с предлогом "für + Akkusativ".',
    },
    {
      id: 'b1-lexik-kultur-freizeit-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Этот спектакль мне очень понравился."',
      prompt: 'Этот спектакль мне очень понравился.',
      languageDirection: 'to_german',
      correctAnswer: 'Dieses Theaterstück hat mir sehr gut gefallen.',
      explanation: 'Глагол "gefallen" используется с дательным падежом (мне - mir). "Этот спектакль" - "Dieses Theaterstück".',
    },
    {
      id: 'b1-lexik-kultur-freizeit-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "сюжет" (например, фильма или книги)?',
      options: ['die Atmosphäre', 'die Kritik', 'die Handlung', 'das Meisterwerk'],
      correctAnswer: 'die Handlung',
      explanation: '"Die Handlung" означает "сюжет, действие".',
    },
    {
        id: 'b1-lexik-kultur-freizeit-test-q5',
        type: 'fill_in_the_blank',
        question: 'Дополните фразу: "Am Wochenende ___ ich gern neue Restaurants aus." (пробовать, испытывать)',
        sentenceParts: ['Am Wochenende ', ' ich gern neue Restaurants aus.'],
        correctAnswer: 'probiere',
        explanation: '"Ausprobieren" (пробовать, испытывать) - глагол с отделяемой приставкой. "Ich probiere aus".',
      },
  ],
};
