
import type { Test } from '@/types';

export const testC1IndirekteRede: Test = {
  id: 'c1-indirekte-rede-test',
  level: 'C1',
  topic: 'Косвенная речь (Тест)',
  testType: 'thematic',
  questions: [
    {
      id: 'c1-indirekte-test-q1',
      type: 'multiple_choice',
      question: 'Преобразуйте в косвенную речь (Konjunktiv I): Peter sagt: "Ich habe viel Arbeit."',
      options: ['Peter sagt, er hat viel Arbeit.', 'Peter sagt, er habe viel Arbeit.', 'Peter sagt, er hätte viel Arbeit.'],
      correctAnswer: 'Peter sagt, er habe viel Arbeit.',
      explanation: 'Konjunktiv I от "hat" (3 л. ед.ч. для "er") - "habe". Местоимение "ich" меняется на "er".',
    },
    {
      id: 'c1-indirekte-test-q2',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в косвенную речь: Maria fragt: "Kommst du morgen mit?"',
      sentenceParts: ['Maria fragt, ob ich am folgenden Tag ', '.'],
      correctAnswer: 'mitkomme', // или mitkäme / mitkommen würde
      explanation: 'Общий вопрос вводится союзом "ob". Глагол "mitkomme" (Konjunktiv I от "mitkommen" для "ich") ставится в конец. "morgen" меняется на "am folgenden Tag". Альтернативно, если "mitkomme" совпадает с индикативом, можно использовать "mitkäme" (Konj. II) или "mitkommen würde".',
    },
    {
      id: 'c1-indirekte-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий используя косвенную речь: "Учитель сказал, что мы должны были прочитать текст."',
      prompt: 'Учитель сказал, что мы должны были прочитать текст.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Lehrer sagte, wir hätten den Text lesen sollen.',
      explanation: 'Прямая речь в прошлом (модальный глагол в прошлом). Косвенная речь требует Konjunktiv Perfekt или Plusquamperfekt модального глагола. "hätten ... lesen sollen" (Konjunktiv II Plusquamperfekt от "sollen").',
    },
    {
      id: 'c1-indirekte-test-q4',
      type: 'multiple_choice',
      question: 'Прямая речь: Der Chef befahl: "Arbeiten Sie schneller!" Какая форма косвенной речи наиболее корректna?',
      options: [
        'Der Chef befahl, sie arbeiten schneller.',
        'Der Chef befahl, sie sollten schneller arbeiten.',
        'Der Chef befahl, ob sie schneller arbeiten.'
      ],
      correctAnswer: 'Der Chef befahl, sie sollten schneller arbeiten.',
      explanation: 'Передача повеления в косвенной речи часто осуществляется через "sollen" в Konjunktiv (здесь "sollten" как Konj. II, так как Konj. I "sollen" совпадает с индикативом для "sie/Sie").',
    },
    {
      id: 'c1-indirekte-test-q5',
      type: 'fill_in_the_blank',
      question: 'Косвенная речь: Sie erzählte, sie ___ am Vortag im Theater ___. (sein - Perfekt Indikativ в прямой речи)',
      sentenceParts: ['Sie erzählte, sie ', ' am Vortag im Theater ', '.'],
      correctAnswer: 'sei, gewesen',
      explanation: 'Прошедшее время (Perfekt) в прямой речи переходит в Konjunktiv Perfekt в косвенной: Konjunktiv I от вспомогательного глагола "sein" (т.е. "sei") + Partizip II ("gewesen").',
    },
    {
      id: 'c1-indirekte-test-q6',
      type: 'translation',
      question: 'Переведите: Er fragte, wann der Zug abfahre.',
      prompt: 'Er fragte, wann der Zug abfahre.',
      languageDirection: 'from_german',
      correctAnswer: 'Он спросил, когда отправляется поезд.',
      explanation: 'Косвенный специальный вопрос. "abfahre" - Konjunktiv I от "abfahren".',
    },
    {
      id: 'c1-indirekte-test-q7',
      type: 'multiple_choice',
      question: 'Прямая речь: "Wir werden das Projekt erfolgreich abschließen", versicherte der Manager. Косвенная речь:',
      options: [
        'Der Manager versicherte, sie werden das Projekt erfolgreich abschließen.',
        'Der Manager versicherte, sie würden das Projekt erfolgreich abschließen.',
        'Der Manager versicherte, dass sie das Projekt erfolgreich abgeschlossen hätten.'
      ],
      correctAnswer: 'Der Manager versicherte, sie würden das Projekt erfolgreich abschließen.',
      explanation: 'Futur I в прямой речи передается через Konjunktiv I от "werden" ("werde", "werdest", "werde"...) или, как здесь, через "würde" + Infinitiv для "sie" (они), так как "werden" в Konj. I совпадает с индикативом.',
    }
  ]
};
