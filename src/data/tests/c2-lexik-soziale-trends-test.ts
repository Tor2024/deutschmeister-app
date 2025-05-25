
import type { Test } from '@/types';

export const testC2LexikSozialeTrends: Test = {
  id: 'c2-lexik-soziale-trends-test',
  level: 'C2',
  topic: 'Современные общественные тенденции (Тест)',
  questions: [
    {
      id: 'c2-lexik-soziale-trends-test-q1',
      type: 'multiple_choice',
      question: 'Welcher Begriff beschreibt den Prozess der zunehmenden Vereinzelung und Fokussierung auf das Individuum in der Gesellschaft?',
      options: ['Die Globalisierung', 'Die Individualisierung', 'Die soziale Kohäsion', 'Der demografische Wandel'],
      correctAnswer: 'Die Individualisierung',
      explanation: '"Die Individualisierung" bezieht sich auf den Trend, dass das Individuum und seine Bedürfnisse stärker in den Vordergrund treten.',
    },
    {
      id: 'c2-lexik-soziale-trends-test-q2',
      type: 'fill_in_the_blank',
      question: 'Der ___ Wandel stellt viele westliche Gesellschaften vor Herausforderungen bezüglich der Renten- und Gesundheitssysteme.',
      sentenceParts: ['Der ', ' Wandel stellt viele westliche Gesellschaften vor Herausforderungen bezüglich der Renten- und Gesundheitssysteme.'],
      correctAnswer: 'demografische',
      explanation: '"Der demografische Wandel" (демографические изменения), insbesondere die Alterung der Bevölkerung, ist hier gemeint.',
    },
    {
      id: 'c2-lexik-soziale-trends-test-q3',
      type: 'translation',
      question: 'Переведите на немецкий: "Необходимо разрабатывать стратегии для содействия социальной сплоченности."',
      prompt: 'Необходимо разрабатывать стратегии для содействия социальной сплоченности.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist notwendig, Strategien zur Förderung der sozialen Kohäsion zu entwickeln.',
      explanation: 'Ключевые слова: "notwendig" (необходимо), "Strategien entwickeln" (разрабатывать стратегии), "Förderung der sozialen Kohäsion" (содействие социальной сплоченности).',
    },
    {
      id: 'c2-lexik-soziale-trends-test-q4',
      type: 'multiple_choice',
      question: 'Was bedeutet "die Polarisierung" im gesellschaftlichen Kontext?',
      options: [
        'Die Zunahme der kulturellen Vielfalt.',
        'Die Verstärkung von Gegensätzen und die Spaltung der Gesellschaft in extreme Lager.',
        'Die Verbesserung der digitalen Infrastruktur.',
        'Die Abnahme der politischen Partizipation.'
      ],
      correctAnswer: 'Die Verstärkung von Gegensätzen und die Spaltung der Gesellschaft in extreme Lager.',
      explanation: '"Die Polarisierung" beschreibt die Zuspitzung von Meinungsverschiedenheiten und die Bildung von gegensätzlichen Gruppen.',
    },
  ],
};
