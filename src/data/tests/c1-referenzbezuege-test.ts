
import type { Test } from '@/types';

export const testC1Referenzbezuege: Test = {
  id: 'c1-referenzbezuege-test',
  level: 'C1',
  topic: 'Референциальные связи (Тест)',
  testType: 'thematic',
  associatedLessonId: 'c1-referenzbezuege',
  questions: [
    {
      id: 'c1-referenzbezuege-test-q1',
      type: 'multiple_choice',
      question: 'Welches Wort bezieht sich auf den "Film" im folgenden Satz: "Ich habe gestern einen interessanten Film gesehen. Er hat mir sehr gut gefallen."',
      options: ['Ich', 'gestern', 'Er', 'mir'],
      correctAnswer: 'Er',
      explanation: 'Das Personalpronomen "Er" bezieht sich auf "einen interessanten Film" (maskulin).',
    },
    {
      id: 'c1-referenzbezuege-test-q2',
      type: 'fill_in_the_blank',
      question: 'Vervollständigen Sie den Satz: "Die Studenten diskutierten über die Prüfungsergebnisse. ___ waren sie sehr zufrieden."',
      sentenceParts: ['Die Studenten diskutierten über die Prüfungsergebnisse. ', ' waren sie sehr zufrieden.'],
      correctAnswer: 'Damit',
      explanation: 'Das Pronominaladverb "Damit" (этим, с этим) bezieht sich auf "die Prüfungsergebnisse".',
    },
    {
      id: 'c1-referenzbezuege-test-q3',
      type: 'multiple_choice',
      question: 'Wählen Sie das korrekte Demonstrativpronomen: "Es gibt viele Bücher über dieses Thema. Aber ___ hier ist besonders informativ." (Das Buch)',
      options: ['dieser', 'diese', 'dieses', 'diesen'],
      correctAnswer: 'dieses',
      explanation: 'Das Demonstrativpronomen muss sich auf "das Buch" beziehen (Neutrum, Singular, Nominativ), daher "dieses".',
    },
    {
      id: 'c1-referenzbezuege-test-q4',
      type: 'fill_in_the_blank',
      question: 'Ersetzen Sie die Nominalphrase durch ein Pronominaladverb: "Er interessiert sich für moderne Kunst. Er spricht oft ___ ."',
      sentenceParts: ['Er interessiert sich für moderne Kunst. Er spricht oft ', '.'],
      correctAnswer: 'darüber',
      explanation: '"Sprechen über + Akkusativ (Sache)". Das Pronominaladverb "darüber" ersetzt "über moderne Kunst".',
    },
    {
      id: 'c1-referenzbezuege-test-q5',
      type: 'multiple_choice',
      question: 'Worauf bezieht sich das Wort "dabei" im Satz: "Sie hat einen Plan gemacht und ist genau dabei geblieben."?',
      options: ['Auf "Sie"', 'Auf "einen Plan"', 'Auf "genau"', 'Auf den gesamten vorherigen Sachverhalt (Plan gemacht)'],
      correctAnswer: 'Auf "einen Plan"',
      explanation: '"Dabei bleiben" bezieht sich hier auf das Festhalten an "einem Plan". "Bei + dem Plan".',
    },
  ],
};

