
import type { Test } from '@/types';

export const testB1LexikUmweltWetter: Test = {
  id: 'b1-lexik-umwelt-wetter-test',
  level: 'B1',
  topic: 'Окружающая среда и погода (Тест)',
  questions: [
    {
      id: 'b1-lexik-umwelt-wetter-test-q1',
      type: 'multiple_choice',
      question: 'Как по-немецки "прогноз погоды"?',
      options: ['der Sonnenschein', 'die Temperatur', 'der Wetterbericht', 'die Wolke'],
      correctAnswer: 'der Wetterbericht',
      explanation: '"Der Wetterbericht" означает "прогноз погоды".',
    },
    {
      id: 'b1-lexik-umwelt-wetter-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Im Sommer ___ die Sonne oft und es ist warm."',
      sentenceParts: ['Im Sommer ', ' die Sonne oft und es ist warm.'],
      correctAnswer: 'scheint',
      explanation: '"Scheinen" (светить). Для "die Sonne" (она) форма "scheint".',
    },
    {
      id: 'b1-lexik-umwelt-wetter-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Загрязнение окружающей среды – это большая проблема."',
      prompt: 'Загрязнение окружающей среды – это большая проблема.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Umweltverschmutzung ist ein großes Problem.',
      explanation: '"Загрязнение окружающей среды" - "die Umweltverschmutzung".',
    },
    {
      id: 'b1-lexik-umwelt-wetter-test-q4',
      type: 'multiple_choice',
      question: 'Какое действие помогает экономить энергию?',
      options: ['Müll produzieren', 'Wasser verschmutzen', 'Licht ausschalten', 'Mehr Auto fahren'],
      correctAnswer: 'Licht ausschalten',
      explanation: 'Выключение света ("Licht ausschalten") помогает экономить энергию.',
    },
    {
        id: 'b1-lexik-umwelt-wetter-test-q5',
        type: 'fill_in_the_blank',
        question: 'Дополните фразу: "Viele Menschen versuchen, ___ Produkte zu kaufen."',
        sentenceParts: ['Viele Menschen versuchen, ', ' Produkte zu kaufen.'],
        correctAnswer: 'umweltfreundliche',
        explanation: '"Umweltfreundlich" означает "экологичный". Прилагательное здесь склоняется.',
      },
  ],
};

    