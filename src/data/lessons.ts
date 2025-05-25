
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
    audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_artikel_a2.mp3', 
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
    id: 'a2-pluralbildung',
    level: 'A2',
    topic: 'Образование множественного числа существительных (Pluralbildung)',
    theory: 'В немецком языке существует несколько способов образования множественного числа существительных. Основные окончания: -e (der Tag - die Tage), -er (das Kind - die Kinder, часто с умлаутом), -n/-en (die Frau - die Frauen), -s (das Auto - die Autos). Некоторые существительные получают умлаут без окончания (der Apfel - die Äpfel) или не изменяются (der Lehrer - die Lehrer). Род существительного часто влияет на способ образования множественного числа.',
    exercises: [
      {
        id: 'a2-plural-ex1',
        type: 'multiple_choice',
        question: 'Какое множественное число у слова "das Buch"?',
        options: ['die Buch', 'die Büchen', 'die Bücher', 'die Buchs'],
        correctAnswer: 'die Bücher',
        explanation: 'Слово "das Buch" образует множественное число с окончанием -er и умлаутом: die Bücher.',
      },
      {
        id: 'a2-plural-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму: Zwei ___ (Katze) spielen im Garten.',
        sentenceParts: ['Zwei ', ' (Katze) spielen im Garten.'],
        correctAnswer: 'Katzen',
        explanation: 'Множественное число от "die Katze" - "die Katzen".',
      },
      {
        id: 'a2-plural-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "много детей"',
        prompt: 'много детей',
        languageDirection: 'to_german',
        correctAnswer: 'viele Kinder',
        explanation: '"Kind" (ребенок) во множественном числе "Kinder". "Много" переводится как "viele".',
      },
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
    id: 'b1-relativsaetze',
    level: 'B1',
    topic: 'Относительные придаточные предложения (Relativsätze)',
    theory: 'Относительные придаточные предложения уточняют существительное из главного предложения. Они вводятся относительными местоимениями (der, die, das, dem, den, dessen, deren и др.), которые согласуются в роде и числе с существительным, к которому относятся, а падеж определяется их функцией в придаточном предложении. Глагол в относительном предложении стоит в конце. Пример: "Der Mann, der dort steht, ist mein Bruder." (Мужчина, который там стоит, мой брат.)',
    exercises: [
      {
        id: 'b1-relativ-ex1',
        type: 'multiple_choice',
        question: 'Выберите правильное относительное местоимение: Das ist das Haus, ___ ich gebaut habe.',
        options: ['der', 'die', 'das', 'dem'],
        correctAnswer: 'das',
        explanation: 'Относительное местоимение "das" относится к "das Haus" (средний род, винительный падеж в придаточном предложении, так как "ich habe das Haus gebaut").',
      },
      {
        id: 'b1-relativ-ex2',
        type: 'fill_in_the_blank',
        question: 'Объедините предложения, используя относительное придаточное: Die Frau ist nett. Ich habe der Frau geholfen.',
        sentenceParts: ['Die Frau, ', ', ist nett.'],
        correctAnswer: 'der ich geholfen habe',
        explanation: 'Относительное местоимение "der" относится к "die Frau" и стоит в дательном падеже.',
      },
      {
        id: 'b1-relativ-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "Книга, которую я читаю, очень интересная."',
        prompt: 'Книга, которую я читаю, очень интересная.',
        languageDirection: 'to_german',
        correctAnswer: 'Das Buch, das ich lese, ist sehr interessant.',
        explanation: '"Das Buch" (средний род), "которую" (винительный падеж в придаточном) -> "das". Глагол "lese" в конце придаточного.',
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
  },
  {
    id: 'b2-nomen-verb',
    level: 'B2',
    topic: 'Устойчивые сочетания существительных с глаголами (Nomen-Verb-Verbindungen)',
    theory: 'В немецком языке существует множество устойчивых сочетаний, где существительное с определенным глаголом образует смысловое единство (функциональные глаголы). Например: "eine Entscheidung treffen" (принять решение), "Kritik üben an" (критиковать кого-либо/что-либо), "einen Antrag stellen" (подать заявление). Значение таких конструкций часто отличается от суммы значений отдельных слов.',
    exercises: [
      {
        id: 'b2-nomenverb-ex1',
        type: 'multiple_choice',
        question: 'Какой глагол используется в сочетании "___ Einfluss nehmen auf"?',
        options: ['machen', 'nehmen', 'geben', 'haben'],
        correctAnswer: 'nehmen',
        explanation: 'Устойчивое сочетание: "Einfluss nehmen auf" (оказывать влияние на).',
      },
      {
        id: 'b2-nomenverb-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте подходящее существительное: Er hat ___ gestellt, um eine neue Stelle zu bekommen.',
        sentenceParts: ['Er hat einen ', ' gestellt, um eine neue Stelle zu bekommen.'],
        correctAnswer: 'Antrag',
        explanation: 'Устойчивое сочетание: "einen Antrag stellen" (подать заявление).',
      },
      {
        id: 'b2-nomenverb-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "Она приняла важное решение."',
        prompt: 'Она приняла важное решение.',
        languageDirection: 'to_german',
        correctAnswer: 'Sie hat eine wichtige Entscheidung getroffen.',
        explanation: '"Принять решение" - "eine Entscheidung treffen".',
      },
    ],
  },
  {
    id: 'c1-indirekte-rede',
    level: 'C1',
    topic: 'Косвенная речь (Indirekte Rede)',
    theory: 'Косвенная речь используется для передачи чужих высказываний. Часто требует использования Konjunktiv I. Если форма Konjunktiv I совпадает с Präsens Indikativ, используется Konjunktiv II. При передаче вопросов используется союз "ob" (для общих вопросов) или вопросительное слово. Происходит также сдвиг местоимений и временных указателей. Пример: Er sagte: "Ich komme morgen." -> Er sagte, er komme am nächsten Tag / er würde am nächsten Tag kommen.',
    exercises: [
      {
        id: 'c1-indirekte-ex1',
        type: 'multiple_choice',
        question: 'Преобразуйте в косвенную речь (Konjunktiv I): Sie sagt: "Ich habe viel Arbeit."',
        options: ['Sie sagt, sie hat viel Arbeit.', 'Sie sagt, sie habe viel Arbeit.', 'Sie sagt, sie hätte viel Arbeit.'],
        correctAnswer: 'Sie sagt, sie habe viel Arbeit.',
        explanation: 'Konjunktiv I от "hat" (3 л. ед.ч.) - "habe".',
      },
      {
        id: 'c1-indirekte-ex2',
        type: 'fill_in_the_blank',
        question: 'Преобразуйте в косвенную речь: Er fragte mich: "Kommst du mit?"',
        sentenceParts: ['Er fragte mich, ob ich ', '.'],
        correctAnswer: 'mitkomme',
        explanation: 'Общий вопрос вводится союзом "ob", глагол "mitkomme" (Konjunktiv I от "mitkommen" для "ich") ставится в конец.',
      },
      {
        id: 'c1-indirekte-ex3',
        type: 'translation',
        question: 'Переведите на немецкий используя косвенную речь: "Учитель сказал, что мы должны сделать домашнее задание."',
        prompt: 'Учитель сказал, что мы должны сделать домашнее задание.',
        languageDirection: 'to_german',
        correctAnswer: 'Der Lehrer sagte, wir müssten die Hausaufgaben machen.',
        explanation: '"müssen" в Konjunktiv I для "wir" - "müssen". Так как совпадает с индикативом, часто используется Konjunktiv II "müssten" для ясности.',
      },
    ],
  },
  {
    id: 'c2-stilmittel',
    level: 'C2',
    topic: 'Стилистические средства и языковые регистры',
    theory: 'На уровне C2 важно не только правильно говорить, но и понимать нюансы языка, различные стилистические приемы (метафора, ирония, гипербола и т.д.) и уметь использовать разные языковые регистры (официальный, неофициальный, научный, разговорный) в зависимости от ситуации. Анализ текста включает выявление этих элементов и понимание их функции.',
    exercises: [
      {
        id: 'c2-stilmittel-ex1',
        type: 'multiple_choice',
        question: 'Какое стилистическое средство используется во фразе "Er kämpfte wie ein Löwe"?',
        options: ['Metapher (Метафора)', 'Vergleich (Сравнение)', 'Ironie (Ирония)', 'Hyperbel (Гипербола)'],
        correctAnswer: 'Vergleich (Сравнение)',
        explanation: 'Использование союза "wie" (как) указывает на сравнение.',
      },
      {
        id: 'c2-stilmittel-ex2',
        type: 'multiple_choice',
        question: 'Для какого типа текста характерен высокий процент использования пассивного залога, безличных конструкций и терминологии?',
        options: ['Личное письмо другу', 'Газетная статья о происшествии', 'Научная работа', 'Рекламный слоган'],
        correctAnswer: 'Научная работа',
        explanation: 'Научный стиль часто характеризуется объективностью, что достигается через пассив, безличные конструкции и точную терминологию.',
      },
      {
        id: 'c2-stilmittel-ex3',
        type: 'fill_in_the_blank',
        question: 'Фраза "Das hat ja wieder toll geklappt!" сказанная после очевидной неудачи, является примером ___.',
        sentenceParts: ['Фраза "Das hat ja wieder toll geklappt!" сказанная после очевидной неудачи, является примером ', '.'],
        correctAnswer: 'Ironie',
        explanation: 'Ирония – это выражение, в котором истинный смысл противоположен буквальному.',
      },
    ],
  },
];

    