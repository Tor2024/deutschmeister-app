
import type { Test } from '@/types';

export const testC2NominalstilVerbalstil: Test = {
  id: 'c2-nominalstil-verbalstil-test',
  level: 'C2',
  topic: 'Номинальный и вербальный стили (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c2-nomverb-stil-test-q1',
      type: 'multiple_choice',
      question: 'Трансформируйте предложение в номинальный стиль: "Die Wissenschaftler untersuchen die Auswirkungen des Klimawandels."',
      options: [
        'Die Auswirkungen des Klimawandels werden von den Wissenschaftlern untersucht.',
        'Die Untersuchung der Auswirkungen des Klimawandels durch die Wissenschaftler.',
        'Untersucht werden die Auswirkungen des Klimawandels von den Wissenschaftlern.'
      ],
      correctAnswer: 'Die Untersuchung der Auswirkungen des Klimawandels durch die Wissenschaftler.',
      explanation: 'Глагол "untersuchen" номинализируется в "die Untersuchung". Используются предложные конструкции для указания объекта и субъекта.',
    },
    {
      id: 'c2-nomverb-stil-test-q2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в вербальный стиль: "Trotz der schnellen Lösung des Problems blieben einige Fragen offen."',
      sentenceParts: ['Obwohl das Problem schnell ', ' wurde, blieben einige Fragen offen.'],
      correctAnswer: 'gelöst',
      explanation: 'Номинальная конструкция "Trotz der schnellen Lösung des Problems" вербализуется в уступительное придаточное.',
    },
    {
      id: 'c2-nomverb-stil-test-q3',
      type: 'multiple_choice',
      question: 'Какое из следующих предложений написано преимущественно в вербальном стиле?',
      options: [
        'Die Durchführung weiterer Tests ist zur Bestätigung der Hypothese erforderlich.',
        'Man muss weitere Tests durchführen, um die Hypothese zu bestätigen.',
        'Die Erfordernis der Durchführung weiterer Tests zur Hypothesenbestätigung ist unbestritten.'
      ],
      correctAnswer: 'Man muss weitere Tests durchführen, um die Hypothese zu bestätigen.',
      explanation: 'Это предложение использует активные глагольные конструкции ("muss durchführen", "um zu bestätigen") и менее насыщено отглагольными существительными.',
    },
    {
      id: 'c2-nomverb-stil-test-q4',
      type: 'translation',
      question: 'Переведите на немецкий, используя номинальный стиль: "Увеличение эффективности привело к снижению затрат."',
      prompt: 'Увеличение эффективности привело к снижению затрат.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Steigerung der Effizienz führte zur Reduzierung der Kosten.',
      explanation: 'Используются отглагольные существительные "Steigerung" и "Reduzierung".',
    },
    {
      id: 'c2-nomverb-stil-test-q5',
      type: 'fill_in_the_blank',
      question: 'Замените вербальную конструкцию номинальной: "Wenn man die Anweisungen genau befolgt, vermeidet man Fehler." (Если точно следовать инструкциям, избегаются ошибки.)',
      sentenceParts: ['Bei genauer ', ' der Anweisungen werden Fehler vermieden.'],
      correctAnswer: 'Befolgung',
      explanation: 'Глагол "befolgen" номинализируется в "die Befolgung".',
    },
  ],
};
