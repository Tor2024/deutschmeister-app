
import type { Test, Exercise } from '@/types';

export const testB2IndirekteRede: Test = {
  id: 'b2-indirekte-rede-test',
  level: 'B2',
  topic: 'Косвенная речь (Konjunktiv I & II) (Тест)',
  testType: 'thematic',
  associatedLessonId: 'b2-indirekte-rede',
  questions: [
    {
      id: 'b2-indirekte-rede-test-q1',
      type: 'multiple_choice',
      question: 'Прямая речь: Paul sagt: "Ich lerne fleißig." Косвенная речь: Paul sagt, er ... fleißig.',
      options: ['lernt', 'lerne', 'lernen würde', 'gelernt hätte'],
      correctAnswer: 'lerne',
      explanation: 'Для передачи утверждения в настоящем времени используется Konjunktiv I. Для "er" от "lernen" это "lerne".',
    },
    {
      id: 'b2-indirekte-rede-test-q2',
      type: 'fill_in_the_blank',
      question: 'Прямая речь: Maria fragt: "Hast du meine E-Mail bekommen?" Косвенная речь: Maria fragt, ob ich ihre E-Mail ___ ___ .',
      sentenceParts: ['Maria fragt, ob ich ihre E-Mail ', ' ', '.'],
      correctAnswer: 'bekommen habe', // или bekommen hätte
      explanation: 'Perfekt в прямой речи передается через Konjunktiv Perfekt (Konjunktiv I от haben/sein + Partizip II). Здесь "habe" (Konj.I от haben для "ich") + "bekommen". "bekommen hätte" (Konj.II) также возможно, если "habe" совпадает с индикативом.',
    },
    {
      id: 'b2-indirekte-rede-test-q3',
      type: 'translation',
      question: 'Переведите в косвенную речь: Der Lehrer sagte: "Ihr sollt die Aufgabe bis morgen machen!"',
      prompt: 'Der Lehrer sagte: "Ihr sollt die Aufgabe bis morgen machen!"',
      languageDirection: 'to_german',
      correctAnswer: 'Der Lehrer sagte, wir sollten die Aufgabe bis zum nächsten Tag machen.',
      explanation: 'Передача повеления с "sollen". "Ihr" меняется на "wir" (если пересказывает один из учеников). "sollen" в Konjunktiv II "sollten". "morgen" -> "bis zum nächsten Tag".',
    },
    {
      id: 'b2-indirekte-rede-test-q4',
      type: 'multiple_choice',
      question: 'Прямая речь: Anna meint: "Ich werde vielleicht später kommen." Косвенная речь: Anna meint, sie ... vielleicht später ... .',
      options: ['werde ... kommen', 'würde ... kommen', 'käme ... werden', 'sei ... gekommen'],
      correctAnswer: 'werde ... kommen', // или würde ... kommen
      explanation: 'Futur I в прямой речи передается через Konjunktiv I от "werden" ("werde" для "sie") + Infinitiv. "würde ... kommen" тоже корректно как замена.',
    },
    {
      id: 'b2-indirekte-rede-test-q5',
      type: 'fill_in_the_blank',
      question: 'Прямая речь: "Wo warst du gestern?", fragte sie mich. Косвенная речь: Sie fragte mich, wo ich am Vortag ___ ___ .',
      sentenceParts: ['Sie fragte mich, wo ich am Vortag ', ' ', '.'],
      correctAnswer: 'gewesen sei', // или gewesen wäre
      explanation: 'Präteritum в прямой речи. Косвенная речь: вопросительное слово + Konjunktiv Perfekt (Konj. I от sein ("sei" для "ich") + Partizip II ("gewesen")). "gestern" -> "am Vortag". "gewesen wäre" (Konj.II) тоже возможно.',
    },
  ],
};

