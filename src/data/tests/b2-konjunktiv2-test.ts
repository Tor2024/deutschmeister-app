
import type { Test } from '@/types';

export const testB2Konjunktiv2: Test = {
  id: 'b2-konjunktiv2-test',
  level: 'B2',
  topic: 'Konjunktiv II (Тест)',
  questions: [
    {
      id: 'b2-konj2-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Konjunktiv II для "Ich habe mehr Zeit":',
      options: ['Ich habe mehr Zeit gehabt', 'Ich hätte mehr Zeit', 'Ich würde mehr Zeit haben', 'Ich wäre mehr Zeit'],
      correctAnswer: 'Ich hätte mehr Zeit',
      explanation: 'Konjunktiv II от "haben" - "hätte". "Ich hätte mehr Zeit" означает "Если бы у меня было больше времени / Я бы хотел иметь больше времени".',
    },
    {
      id: 'b2-konj2-test-q2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение в Konjunktiv II (нереальное условие в прошлом): "Wenn er das gewusst ___ , ___ er anders reagiert."',
      sentenceParts: ['Wenn er das gewusst ', ' , ', ' er anders reagiert.'],
      correctAnswer: 'hätte, hätte',
      explanation: 'Нереальное условие в прошлом: Konjunktiv II от вспомогательного глагола (здесь "haben" -> "hätte") + Partizip II. "Wenn er das gewusst hätte, hätte er anders reagiert."',
    },
    {
      id: 'b2-konj2-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Konjunktiv II): "На вашем месте я бы этого не делал."',
      prompt: 'На вашем месте я бы этого не делал.',
      languageDirection: 'to_german',
      correctAnswer: 'An Ihrer Stelle würde ich das nicht tun.',
      explanation: 'Выражение гипотетического действия с помощью "würde" + Infinitiv ("tun"). "An Ihrer Stelle" - на Вашем месте.',
    },
    {
      id: 'b2-konj2-test-q4',
      type: 'multiple_choice',
      question: 'Какая форма Konjunktiv II глагола "können" для "wir"?',
      options: ['kann', 'konnten', 'könnten', 'können'],
      correctAnswer: 'könnten',
      explanation: 'Konjunktiv II от "können" для "wir" - "könnten".',
    },
    {
      id: 'b2-konj2-test-q5',
      type: 'fill_in_the_blank',
      question: 'Сформулируйте вежливую просьбу: "___ Sie mir bitte die Tür öffnen?"',
      sentenceParts: ['', ' Sie mir bitte die Tür öffnen?'],
      correctAnswer: 'Würden', // Или Könnten
      explanation: 'Для вежливых просьб используется Konjunktiv II модальных глаголов или "würde". "Würden Sie..." или "Könnten Sie...".',
    },
    {
      id: 'b2-konj2-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий (нереальное желание в прошлом): "Если бы мы только поехали в отпуск!"',
      prompt: 'Если бы мы только поехали в отпуск!',
      languageDirection: 'to_german',
      correctAnswer: 'Wenn wir nur in den Urlaub gefahren wären!',
      explanation: 'Нереальное желание в прошлом: "wenn ... gefahren wären" (wären + Partizip II от fahren).',
    }
  ],
};
