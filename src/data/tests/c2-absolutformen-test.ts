
import type { Test } from '@/types';

export const testC2Absolutformen: Test = {
  id: 'c2-absolutformen-test',
  level: 'C2',
  topic: 'Абсолютные конструкции (Тест)',
  testType: 'thematic',
  associatedLessonId: 'c2-absolutformen',
  questions: [
    {
      id: 'c2-absolutformen-test-q1',
      type: 'multiple_choice',
      question: 'Welche der folgenden Konstruktionen ist ein Beispiel für einen Akkusativ Absolutus?',
      options: [
        'Der Mann, dessen Hut wegflog, ...',
        'Den Mantel schnell anziehend, verließ er das Haus.',
        'Gelangweilt von dem Vortrag, schaute er auf die Uhr.',
        'Den Kopf in den Nacken gelegt, betrachtete er die Sterne.'
      ],
      correctAnswer: 'Den Kopf in den Nacken gelegt, betrachtete er die Sterne.',
      explanation: '"Den Kopf in den Nacken gelegt" ist eine absolute Akkusativkonstruktion, die ein begleitendes Umstand beschreibt.',
    },
    {
      id: 'c2-absolutformen-test-q2',
      type: 'fill_in_the_blank',
      question: 'Vervollständigen Sie den Genitiv Absolutus: "___ (schwer) Herzens verabschiedete er sich."',
      sentenceParts: ['', ' Herzens verabschiedete er sich.'],
      correctAnswer: 'Schweren',
      explanation: 'Im Genitiv Absolutus erhält das Adjektiv die starke Genitiv-Endung: schweren Herzens.',
    },
    {
      id: 'c2-absolutformen-test-q3',
      type: 'multiple_choice',
      question: 'Wie kann der Satz "Während er das Buch las, trank er Tee." mithilfe einer Partizipialkonstruktion (als Adverbialbestimmung) verkürzt werden?',
      options: [
        'Das Buch lesend, trank er Tee.',
        'Gelesen das Buch, trank er Tee.',
        'Das Buch lesender, trank er Tee.',
        'Das Buch wurde lesend Tee getrunken.'
      ],
      correctAnswer: 'Das Buch lesend, trank er Tee.',
      explanation: 'Das Partizip I "lesend" drückt hier die Gleichzeitigkeit der Handlungen aus.',
    },
    {
      id: 'c2-absolutformen-test-q4',
      type: 'short_answer',
      question: 'Nennen Sie ein typisches Merkmal von Absolutformen in Bezug auf ihre syntaktische Verbindung zum Hauptsatz.',
      correctAnswer: 'Sie sind syntaktisch nicht (oder nur lose) mit dem Hauptsatz verbunden / haben kein grammatisches Subjekt, das mit dem Subjekt des Hauptsatzes übereinstimmt (oft).',
      explanation: 'Absolutformen zeichnen sich dadurch aus, dass sie oft kein gemeinsames Subjekt mit dem Hauptsatz haben und grammatisch relativ unabhängig sind.',
    },
  ],
};

    