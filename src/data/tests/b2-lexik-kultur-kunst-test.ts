
import type { Test } from '@/types';

export const testB2LexikKulturKunst: Test = {
  id: 'b2-lexik-kultur-kunst-test',
  level: 'B2',
  topic: 'Культура и искусство (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'b2-lexik-kultur-kunst-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "живопись"?',
      options: ['die Skulptur', 'die Malerei', 'die Architektur', 'die Literatur'],
      correctAnswer: 'die Malerei',
      explanation: '"Die Malerei" означает "живопись".',
    },
    {
      id: 'b2-lexik-kultur-kunst-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Dieses ___ (произведение) wurde von einem berühmten Künstler geschaffen."',
      sentenceParts: ['Dieses ', ' wurde von einem berühmten Künstler geschaffen.'],
      correctAnswer: 'Werk',
      explanation: '"Произведение (искусства)" по-немецки "das Werk".',
    },
    {
      id: 'b2-lexik-kultur-kunst-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы идем сегодня на концерт."',
      prompt: 'Мы идем сегодня на концерт.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir gehen heute ins Konzert.',
      explanation: '"Идти на концерт" - "ins Konzert gehen".',
    },
    {
      id: 'b2-lexik-kultur-kunst-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "режиссер"?',
      options: ['der Schauspieler', 'der Musiker', 'der Regisseur', 'der Maler'],
      correctAnswer: 'der Regisseur',
      explanation: '"Der Regisseur" означает "режиссер".',
    },
    {
      id: 'b2-lexik-kultur-kunst-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните фразу: "Die ___ der Renaissance ist weltberühmt."',
      sentenceParts: ['Die ', ' der Renaissance ist weltberühmt.'],
      correctAnswer: 'Kunst', // или Malerei, Architektur, Skulptur
      explanation: '"Die Kunst" (искусство) или более конкретные виды искусства, такие как "die Malerei" (живопись), подходят сюда.',
    },
  ],
};
