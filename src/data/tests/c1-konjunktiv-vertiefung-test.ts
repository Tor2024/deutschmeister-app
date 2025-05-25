
import type { Test } from '@/types';

export const testC1KonjunktivVertiefung: Test = {
  id: 'c1-konjunktiv-vertiefung-test',
  level: 'C1',
  topic: 'Konjunktiv I und II (Углубленное применение) (Тест)',
  questions: [
    {
      id: 'c1-konj-vert-test-q1',
      type: 'multiple_choice',
      question: 'Преобразуйте в нереальное условие в прошлом: "Ich hatte keine Zeit, deshalb konnte ich das Projekt nicht beenden."',
      options: [
        'Wenn ich Zeit hätte, würde ich das Projekt beenden.',
        'Wenn ich Zeit gehabt hätte, hätte ich das Projekt beenden können.',
        'Wenn ich Zeit gehabt hätte, wäre ich das Projekt beendet.'
      ],
      correctAnswer: 'Wenn ich Zeit gehabt hätte, hätte ich das Projekt beenden können.',
      explanation: 'Нереальное условие в прошлом: Konjunktiv II от haben/sein + Partizip II. "Wenn ich Zeit gehabt hätte, hätte ich das Projekt beenden können." (с модальным глаголом в Infinitiv Perfekt Passiv).',
    },
    {
      id: 'c1-konj-vert-test-q2',
      type: 'fill_in_the_blank',
      question: 'Косвенная речь. Sie sagte: "Ich war gestern Abend sehr müde." -> Sie sagte, sie ___ gestern Abend sehr müde ___ .',
      sentenceParts: ['Sie sagte, sie ', ' gestern Abend sehr müde ', '.'],
      correctAnswer: 'sei, gewesen', // или wäre gewesen
      explanation: 'Präteritum в прямой речи переходит в Konjunktiv Perfekt: Konjunktiv I от sein ("sei" для "sie") + Partizip II ("gewesen"). Если "sei" неясно, можно использовать "wäre ... gewesen".',
    },
    {
      id: 'c1-konj-vert-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий (нереальное желание в прошлом): "Если бы я только не пропустил тот поезд!"',
      prompt: 'Если бы я только не пропустил тот поезд!',
      languageDirection: 'to_german',
      correctAnswer: 'Wenn ich jenen Zug nur nicht verpasst hätte!',
      explanation: 'Нереальное желание в прошлом: "wenn ... verpasst hätte" (hätte + Partizip II).',
    },
    {
      id: 'c1-konj-vert-test-q4',
      type: 'multiple_choice',
      question: 'Прямая речь: Der Student dachte: "Ich habe die Frage nicht verstanden." Косвенная речь (выберите наиболее подходящий вариант):',
      options: [
        'Der Student dachte, er habe die Frage nicht verstanden.',
        'Der Student dachte, er hätte die Frage nicht verstanden.',
        'Der Student dachte, er verstände die Frage nicht.'
      ],
      correctAnswer: 'Der Student dachte, er habe die Frage nicht verstanden.',
      explanation: 'Perfekt в прямой речи. Косвенная речь: Konjunktiv Perfekt (Konj. I от haben + Partizip II). "habe ... verstanden". "hätte...verstanden" тоже возможно для выражения сомнения или если Konj I неясен.',
    },
    {
      id: 'c1-konj-vert-test-q5',
      type: 'fill_in_the_blank',
      question: 'Завершите нереальное условие в прошлом: Wenn wir früher losgefahren ___ , ___ wir den Stau vermieden.',
      sentenceParts: ['Wenn wir früher losgefahren ', ' , ', ' wir den Stau vermieden.'],
      correctAnswer: 'wären, hätten',
      explanation: 'Первая часть: wären + losgefahren (fahren с sein). Вторая часть: hätten + vermieden (vermeiden с haben).',
    }
  ],
};
