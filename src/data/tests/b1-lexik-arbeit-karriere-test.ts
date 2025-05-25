
import type { Test } from '@/types';

export const testB1LexikArbeitKarriere: Test = {
  id: 'b1-lexik-arbeit-karriere-test',
  level: 'B1',
  topic: 'Работа и карьера (Тест)',
  questions: [
    {
      id: 'b1-lexik-arbeit-karriere-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "собеседование (при приеме на работу)"?',
      options: ['der Lebenslauf', 'das Vorstellungsgespräch', 'die Stellenanzeige', 'der Arbeitsvertrag'],
      correctAnswer: 'das Vorstellungsgespräch',
      explanation: '"Das Vorstellungsgespräch" означает "собеседование".',
    },
    {
      id: 'b1-lexik-arbeit-karriere-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Er hat viel ___ im Bereich Marketing."',
      sentenceParts: ['Er hat viel ', ' im Bereich Marketing.'],
      correctAnswer: 'Erfahrung',
      explanation: '"Erfahrung haben in..." означает "иметь опыт в...".',
    },
    {
      id: 'b1-lexik-arbeit-karriere-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Она подала заявление на эту должность."',
      prompt: 'Она подала заявление на эту должность.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie hat sich um diese Stelle beworben.',
      explanation: '"Подавать заявление на должность" - "sich um eine Stelle bewerben".',
    },
    {
      id: 'b1-lexik-arbeit-karriere-test-q4',
      type: 'multiple_choice',
      question: 'Какое слово означает "зарплата"?',
      options: ['die Überstunde', 'die Kündigung', 'das Gehalt', 'die Abteilung'],
      correctAnswer: 'das Gehalt',
      explanation: '"Das Gehalt" означает "зарплата, оклад".',
    },
    {
      id: 'b1-lexik-arbeit-karriere-test-q5',
      type: 'fill_in_the_blank',
      question: 'Дополните фразу: "Für diese Position sind gute Englisch___ erforderlich."',
      sentenceParts: ['Für diese Position sind gute Englisch', ' erforderlich.'],
      correctAnswer: 'kenntnisse',
      explanation: '"Kenntnisse" (мн.ч.) означает "знания". "Englischkenntnisse" - знания английского.',
    },
  ],
};
