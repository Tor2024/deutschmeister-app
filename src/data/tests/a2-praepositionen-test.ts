
import type { Test } from '@/types';

export const testA2Praepositionen: Test = {
  id: 'a2-praepositionen-test',
  level: 'A2',
  topic: 'Предлоги (Dativ, Akkusativ, Wechselpräpositionen) (Тест)',
  questions: [
    {
      id: 'a2-praep-test-q1',
      type: 'multiple_choice',
      question: 'Какой падеж требует предлог "mit"?',
      options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'],
      correctAnswer: 'Dativ',
      explanation: 'Предлог "mit" (с) всегда требует Dativ.',
    },
    {
      id: 'a2-praep-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль: Ich gehe ohne ___ (mein Regenschirm, м.р.).',
      sentenceParts: ['Ich gehe ohne ', '.'],
      correctAnswer: 'meinen Regenschirm',
      explanation: 'Предлог "ohne" (без) всегда требует Akkusativ. "Mein Regenschirm" (м.р.) в Akkusativ становится "meinen Regenschirm".',
    },
    {
      id: 'a2-praep-test-q3',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение: "Книга лежит ___ стол (der Tisch)." (Вопрос "Wo?")',
      options: [
        'Das Buch liegt auf den Tisch.',
        'Das Buch liegt auf dem Tisch.',
        'Das Buch liegt unter den Tisch.'
      ],
      correctAnswer: 'Das Buch liegt auf dem Tisch.',
      explanation: 'Предлог "auf" (на горизонтальной поверхности) с вопросом "Wo?" (Где?) требует Dativ. "Der Tisch" (м.р.) в Dativ становится "dem Tisch".',
    },
    {
      id: 'a2-praep-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Wir fahren ___ (die Stadt, ж.р.) ___ (der Park, м.р.). (Используйте "durch" и "zu")',
      sentenceParts: ['Wir fahren ', ' Stadt ', ' Park.'], // durch die, zum
      correctAnswer: 'durch die, zum',
      explanation: '"durch" требует Akkusativ (die Stadt). "zu" требует Dativ (der Park -> dem Park; zu + dem = zum).',
    },
    {
      id: 'a2-praep-test-q5',
      type: 'multiple_choice',
      question: 'Вставьте правильную форму: "Ich stelle die Vase ___ Tisch." (Wohin?)',
      options: ['auf dem', 'auf den', 'an dem', 'unter dem'],
      correctAnswer: 'auf den',
      explanation: 'Вопрос "Wohin?" (Куда?) с предлогом "auf" (на горизонтальную поверхность) требует Akkusativ. "Der Tisch" (мужской род) в Akkusativ - "den Tisch".',
    },
    {
      id: 'a2-praep-test-q6',
      type: 'translation',
      question: 'Переведите на немецкий: "После школы я иду к моему другу."',
      prompt: 'После школы я иду к моему другу.',
      languageDirection: 'to_german',
      correctAnswer: 'Nach der Schule gehe ich zu meinem Freund.',
      explanation: '"Nach" + Dativ (der Schule). "Zu" + Dativ (meinem Freund).',
    }
  ],
};
