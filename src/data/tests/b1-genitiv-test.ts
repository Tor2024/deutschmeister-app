
import type { Test } from '@/types';

export const testB1Genitiv: Test = {
  id: 'b1-genitiv-test',
  level: 'B1',
  topic: 'Падеж Genitiv (Тест)',
  questions: [
    {
      id: 'b1-genitiv-test-q1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Genitiv для "der Mann": Das ist das Fahrrad ___ Mannes.',
      options: ['des', 'dem', 'den', 'der'],
      correctAnswer: 'des',
      explanation: '"Mann" - мужской род. В Genitiv определенный артикль мужского рода - "des". Существительное получает окончание -(e)s: des Mannes.',
    },
    {
      id: 'b1-genitiv-test-q2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное окончание: Die Farbe d___ Auto___ (das Auto) ist rot.',
      sentenceParts: ['Die Farbe d', ' Auto', ' ist rot.'],
      correctAnswer: 'es, s', // des Autos
      explanation: '"Das Auto" (ср.р.). Артикль "des". "Auto" получает окончание -s. Полностью: "Die Farbe des Autos ist rot."',
    },
    {
      id: 'b1-genitiv-test-q3',
      type: 'multiple_choice',
      question: 'Какой предлог из перечисленных требует Genitiv?',
      options: ['mit', 'für', 'wegen', 'zu'],
      correctAnswer: 'wegen',
      explanation: 'Предлог "wegen" (из-за, по причине) требует Genitiv.',
    },
    {
      id: 'b1-genitiv-test-q4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Trotz ___ schlechten Wetter___ (das Wetter) gingen wir spazieren.',
      sentenceParts: ['Trotz ', ' schlechten Wetter', ' gingen wir spazieren.'],
      correctAnswer: 'des, s', // des schlechten Wetters
      explanation: 'Предлог "trotz" требует Genitiv. "Das Wetter" (ср.р.) в Genitiv: "des Wetters". Прилагательное "schlecht" получает окончание -en после "des".',
    },
    {
      id: 'b1-genitiv-test-q5',
      type: 'translation',
      question: 'Переведите на немецкий, используя Genitiv: "Во время урока нельзя есть."',
      prompt: 'Во время урока нельзя есть.',
      languageDirection: 'to_german',
      correctAnswer: 'Während des Unterrichts darf man nicht essen.',
      explanation: 'Предлог "während" требует Genitiv. "Der Unterricht" (м.р.) в Genitiv: "des Unterrichts".',
    },
    {
      id: 'b1-genitiv-test-q6',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "Die Bücher ___ Kinder (мн.ч.) sind neu."',
      options: ['des', 'den', 'der', 'dem'],
      correctAnswer: 'der',
      explanation: '"Kinder" - множественное число. Определенный артикль в Genitiv Plural - "der". "Die Bücher der Kinder".',
    }
  ],
};
