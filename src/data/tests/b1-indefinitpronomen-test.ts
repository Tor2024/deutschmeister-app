
import type { Test } from '@/types';

export const testB1Indefinitpronomen: Test = {
  id: 'b1-indefinitpronomen-test',
  level: 'B1',
  topic: 'Неопределенные местоимения (Тест)',
  questions: [
    {
      id: 'b1-indefinit-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильное местоимение: "___ muss die Regeln lernen."',
      options: ['Jeder', 'Manche', 'Man', 'Etwas'],
      correctAnswer: 'Man',
      explanation: 'Местоимение "man" используется для обобщенных утверждений ("нужно", "люди должны"). Глагол после "man" всегда в 3-м лице ед.ч.',
    },
    {
      id: 'b1-indefinit-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное местоимение: "Hat ___ angerufen, als ich weg war?"',
      sentenceParts: ['Hat ', ' angerufen, als ich weg war?'],
      correctAnswer: 'jemand',
      explanation: '"Jemand" (кто-то, кто-нибудь) используется для обозначения неопределенного лица.',
    },
    {
      id: 'b1-indefinit-test-q3',
      type: 'multiple_choice',
      question: 'Какое местоимение означает "ничего"?',
      options: ['niemand', 'keiner', 'nichts', 'man'],
      correctAnswer: 'nichts',
      explanation: '"Nichts" означает "ничего". "Niemand" - никто, "keiner" - ни один (из группы).',
    },
    {
      id: 'b1-indefinit-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "___ Studenten haben die Prüfung bestanden, aber nicht ___."',
      sentenceParts: ['', ' Studenten haben die Prüfung bestanden, aber nicht ', '.'],
      correctAnswer: 'Viele, alle', // Или 'Einige, alle' или 'Manche, alle'
      explanation: 'Возможные варианты: "Viele Studenten..." (Многие студенты...), "Einige Studenten..." (Некоторые студенты...). "aber nicht alle" (но не все).',
    },
    {
      id: 'b1-indefinit-test-q5',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "___ (Jeder) von uns muss mithelfen."',
      options: ['Jeder', 'Jeden', 'Jedem', 'Jedes'],
      correctAnswer: 'Jeder',
      explanation: '"Jeder" здесь является подлежащим и стоит в Nominativ мужского рода (подразумевается "jeder Mensch" или "jeder Einzelne").',
    },
    {
      id: 'b1-indefinit-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "У меня есть несколько идей."',
      prompt: 'У меня есть несколько идей.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich habe einige Ideen.',
      explanation: '"Несколько" можно перевести как "einige". "Ideen" - множественное число.',
    }
  ],
};
