
import type { Test } from '@/types';

export const testB1LexikMedienKommunikation: Test = {
  id: 'b1-lexik-medien-kommunikation-test',
  level: 'B1',
  topic: 'СМИ и коммуникация (Тест)',
  questions: [
    {
      id: 'b1-lexik-medien-kommunikation-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "социальные сети"?',
      options: ['die Zeitungen', 'soziale Netzwerke', 'das Radio', 'die Webseiten'],
      correctAnswer: 'soziale Netzwerke',
      explanation: '"Soziale Netzwerke" (Plural) означает "социальные сети".',
    },
    {
      id: 'b1-lexik-medien-kommunikation-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Er ___ oft mit seinen Freunden über Politik."',
      sentenceParts: ['Er ', ' oft mit seinen Freunden über Politik.'],
      correctAnswer: 'diskutiert', // или spricht
      explanation: '"Diskutieren über + A" (дискутировать о) или "sprechen über + A" (говорить о).',
    },
    {
      id: 'b1-lexik-medien-kommunikation-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я каждый день читаю новости в интернете."',
      prompt: 'Я каждый день читаю новости в интернете.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich lese jeden Tag Nachrichten im Internet.',
      explanation: '"Новости" - "Nachrichten (Pl.)", "в интернете" - "im Internet".',
    },
    {
      id: 'b1-lexik-medien-kommunikation-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "звонить по телефону (кому-либо)"?',
      options: ['telefonieren', 'schreiben', 'anrufen', 'informieren'],
      correctAnswer: 'anrufen',
      explanation: '"Anrufen" (ruft an) означает "звонить (кому-либо)". "Telefonieren mit + D" - говорить по телефону с кем-либо.',
    },
  ],
};
