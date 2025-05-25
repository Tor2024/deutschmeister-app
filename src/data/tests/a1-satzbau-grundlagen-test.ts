
import type { Test } from '@/types';

export const testA1SatzbauGrundlagen: Test = {
  id: 'a1-satzbau-grundlagen-test',
  level: 'A1',
  topic: 'Порядок слов (Основы) (Тест)',
  questions: [
    {
      id: 'a1-satzbau-test-q1',
      type: 'multiple_choice',
      question: 'На каком месте стоит спрягаемый глагол в простом немецком утвердительном предложении с прямым порядком слов?',
      options: ['На первом', 'На втором', 'На третьем', 'В конце'],
      correctAnswer: 'На втором',
      explanation: 'В простом утвердительном предложении спрягаемый глагол всегда стоит на втором месте.',
    },
    {
      id: 'a1-satzbau-test-q2',
      type: 'multiple_choice',
      question: 'Выберите предложение с правильным прямым порядком слов:',
      options: [
          'Ich Deutsch lerne.',
          'Lerne ich Deutsch.',
          'Ich lerne Deutsch.'
      ],
      correctAnswer: 'Ich lerne Deutsch.',
      explanation: 'Прямой порядок слов: Подлежащее (Ich) - Глагол (lerne) - Дополнение (Deutsch).',
    },
    {
      id: 'a1-satzbau-test-q3',
      type: 'multiple_choice',
      question: 'Как начинается общий вопрос (Ja/Nein-Frage)?',
      options: ['С подлежащего', 'С вопросительного слова', 'Со спрягаемого глагола', 'С дополнения'],
      correctAnswer: 'Со спрягаемого глагола',
      explanation: 'Общий вопрос (Ja/Nein-Frage) начинается со спрягаемого глагола.',
    },
    {
      id: 'a1-satzbau-test-q4',
      type: 'fill_in_the_blank',
      question: 'Поставьте слова в правильном порядке для специального вопроса: (wo / du / wohnst?)',
      sentenceParts: ['', ' ', ' ', '?'],
      correctAnswer: 'Wo wohnst du',
      explanation: 'Специальный вопрос: Вопросительное слово (Wo) - Глагол (wohnst) - Подлежащее (du)?',
    },
    {
      id: 'a1-satzbau-test-q5',
      type: 'multiple_choice',
      question: 'Выберите предложение с правильным обратным порядком слов:',
      options: [
        'Heute ich gehe ins Kino.',
        'Heute gehe ich ins Kino.',
        'Ich gehe heute ins Kino.'
      ],
      correctAnswer: 'Heute gehe ich ins Kino.',
      explanation: 'При обратном порядке слов на первом месте стоит обстоятельство (Heute), затем глагол (gehe), затем подлежащее (ich).',
    }
  ],
};
