import type { Lesson, MultipleChoiceExercise } from '@/types';

const commonMCExercise: MultipleChoiceExercise = {
  id: 'mc1',
  type: 'multiple_choice',
  question: 'Какое слово является существительным?',
  options: ['бегать', 'стол', 'красивый', 'быстро'],
  correctAnswer: 'стол',
  explanation: 'Слово "стол" обозначает предмет и отвечает на вопрос "что?", поэтому это существительное.',
};

const commonTranslationExercise = {
  id: 'tr1',
  type: 'translation',
  question: 'Переведите на немецкий: "Добрый день"',
  prompt: 'Добрый день',
  languageDirection: 'to_german',
  correctAnswer: 'Guten Tag',
  explanation: '"Guten Tag" является стандартным приветствием в немецком языке, означающим "Добрый день".'
} as const;

const commonFillBlankExercise = {
  id: 'fb1',
  type: 'fill_in_the_blank',
  question: 'Вставьте пропущенное слово: Ich ___ Student.',
  sentenceParts: ['Ich ', ' Student.'],
  correctAnswer: 'bin',
  explanation: 'Глагол "sein" (быть) в первом лице единственного числа (Ich) имеет форму "bin".'
} as const;


export const MOCK_LESSONS: Lesson[] = [
  {
    id: 'a2-artikel',
    level: 'A2',
    topic: 'Артикли в немецком языке',
    theory: 'В немецком языке существительные всегда употребляются с артиклем. Артикли бывают определенные (der, die, das) и неопределенные (ein, eine). Выбор артикля зависит от рода, числа и падежа существительного. Например, "der Mann" (мужчина), "die Frau" (женщина), "das Kind" (ребенок).',
    audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_artikel_a2.mp3', // Placeholder URL
    transcript: 'Der, die, das. Ein, eine, ein. Das ist ein Haus. Das Haus ist groß. Der Mann liest ein Buch.',
    exercises: [
      {
        id: 'a2-artikel-ex1',
        type: 'multiple_choice',
        question: 'Выберите правильный артикль для слова "Buch" (книга, средний род):',
        options: ['der', 'die', 'das'],
        correctAnswer: 'das',
        explanation: 'Слово "Buch" среднего рода (neutral), поэтому используется определенный артикль "das" или неопределенный "ein".',
      },
      {
        id: 'a2-artikel-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте пропущенный артикль: ___ Katze schläft.',
        sentenceParts: ['', ' Katze schläft.'],
        correctAnswer: 'Die',
        explanation: 'Слово "Katze" (кошка) женского рода, поэтому используется "die". В начале предложения пишется с большой буквы.',
      },
       commonTranslationExercise,
    ],
  },
  {
    id: 'a2-verben-praesens',
    level: 'A2',
    topic: 'Спряжение глаголов в настоящем времени (Präsens)',
    theory: 'Большинство немецких глаголов в настоящем времени спрягаются по определенным правилам, добавляя окончания к основе глагола. Например, глагол "lernen" (учить): ich lerne, du lernst, er/sie/es lernt, wir lernen, ihr lernt, sie/Sie lernen.',
    exercises: [
      {
        id: 'a2-verben-ex1',
        type: 'multiple_choice',
        question: 'Какая форма глагола "spielen" (играть) верна для местоимения "du"?',
        options: ['spiele', 'spielst', 'spielt'],
        correctAnswer: 'spielst',
        explanation: 'Для местоимения "du" (ты) к основе глагола "spiel-" добавляется окончание "-st".',
      },
      commonMCExercise,
    ],
  },
  {
    id: 'b1-nebensaetze',
    level: 'B1',
    topic: 'Придаточные предложения (Nebensätze)',
    theory: 'Придаточные предложения в немецком языке обычно вводятся союзами (weil, dass, ob, wenn и др.) и имеют измененный порядок слов: спрягаемый глагол ставится в конец предложения. Например: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte." (Я учу немецкий, потому что хочу работать в Германии.)',
    audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_nebensaetze_b1.mp3',
    transcript: 'Weil, dass, ob, wenn. Ich weiß nicht, ob er kommt. Wenn das Wetter gut ist, gehen wir spazieren.',
    exercises: [
      {
        id: 'b1-nebensaetze-ex1',
        type: 'fill_in_the_blank',
        question: 'Дополните предложение: Er sagt, dass er müde ___.',
        sentenceParts: ['Er sagt, dass er müde ', '.'],
        correctAnswer: 'ist',
        explanation: 'В придаточном предложении, вводимом союзом "dass", глагол "sein" (в форме "ist" для "er") ставится в конец.',
      },
      {
        id: 'b1-nebensaetze-ex2',
        type: 'translation',
        question: 'Переведите на немецкий: "Я не знаю, придет ли он."',
        prompt: 'Я не знаю, придет ли он.',
        languageDirection: 'to_german',
        correctAnswer: 'Ich weiß nicht, ob er kommt.',
        explanation: 'Союз "ли" переводится как "ob". Глагол "kommt" ставится в конец придаточного предложения.',
      },
    ],
  },
  {
    id: 'b2-konjunktiv2',
    level: 'B2',
    topic: 'Сослагательное наклонение II (Konjunktiv II)',
    theory: 'Konjunktiv II используется для выражения нереальных желаний, предположений, вежливых просьб. Образуется от формы Präteritum сильных глаголов с умлаутом (если возможно) или с помощью вспомогательного глагола "würden" + инфинитив. Например: "Wenn ich Zeit hätte, würde ich reisen." (Если бы у меня было время, я бы путешествовал.)',
    exercises: [
       commonFillBlankExercise,
      {
        id: 'b2-konjunktiv2-ex1',
        type: 'multiple_choice',
        question: 'Выберите правильную форму Konjunktiv II для "Ich habe Geld":',
        options: ['Ich habe Geld gehabt', 'Ich hätte Geld', 'Ich würde Geld haben'],
        correctAnswer: 'Ich hätte Geld',
        explanation: 'Konjunktiv II от "haben" - "hätte".',
      },
    ],
  }
];
