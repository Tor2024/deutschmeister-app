
import type { Test } from '@/types';

export const testC1ErweiterteKonnektorenStil: Test = {
  id: 'c1-erweiterte-konnektoren-stil-test',
  level: 'C1',
  topic: 'Продвинутые коннекторы и структуры высокого стиля (Тест)',
  testType: 'thematic',
  associatedLessonId: 'c1-erweiterte-konnektoren-stil',
  questions: [
    {
      id: 'c1-konnektoren-test-q1',
      type: 'multiple_choice',
      question: 'Welcher Konnektor drückt eine Bedingung aus, unter der etwas NICHT geschieht?',
      options: ['vorausgesetzt, dass', 'sofern', 'es sei denn, dass', 'infolgedessen'],
      correctAnswer: 'es sei denn, dass',
      explanation: '"Es sei denn, dass" bedeutet "если только не / разве что не" und führt eine Ausnahmebedingung ein.',
    },
    {
      id: 'c1-konnektoren-test-q2',
      type: 'fill_in_the_blank',
      question: 'Die Prüfung war sehr schwer; ___ haben die meisten Studenten gut abgeschnitten.',
      sentenceParts: ['Die Prüfung war sehr schwer; ', ' haben die meisten Studenten gut abgeschnitten.'],
      correctAnswer: 'dennoch', // oder trotzdem, nichtsdestotrotz, gleichwohl
      explanation: 'Konnektoren wie "dennoch" (тем не менее) leiten einen Gegensatz ein und erfordern oft Inversion.',
    },
    {
      id: 'c1-konnektoren-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Ввиду сложных обстоятельств, встреча была отложена."',
      prompt: 'Ввиду сложных обстоятельств, встреча была отложена.',
      languageDirection: 'to_german',
      correctAnswer: 'Angesichts der schwierigen Umstände wurde das Treffen verschoben.',
      explanation: '"Angesichts (+ Genitiv)" bedeutet "ввиду / учитывая".',
    },
    {
      id: 'c1-konnektoren-test-q4',
      type: 'multiple_choice',
      question: 'Welche Konjunktion leitet einen Konsekutivsatz ein, der eine Folge ausdrückt?',
      options: ['wiewohl', 'wohingegen', 'somit', 'mangels'],
      correctAnswer: 'somit', // oder infolgedessen, demzufolge
      explanation: '"Somit" (таким образом, следовательно) ist ein konsekutives Adverb, das eine Folge einleitet und Inversion erfordert.',
    },
    {
      id: 'c1-konnektoren-test-q5',
      type: 'fill_in_the_blank',
      question: 'Er investiert viel Zeit in sein Hobby, ___ seine Noten in der Schule darunter leiden.',
      sentenceParts: ['Er investiert viel Zeit in sein Hobby, ', ' seine Noten in der Schule darunter leiden.'],
      correctAnswer: 'wohingegen', // oder während im adversativen Sinne
      explanation: '"Wohingegen" (тогда как) oder "während" (в противительном значении) leiten einen Gegensatz ein.',
    },
  ],
};

    