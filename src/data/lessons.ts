
import type { Lesson, MultipleChoiceExercise, VocabularyItem } from '@/types';

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
    topic: 'Артикли в немецком языке (углубленно)',
    theory: `Артикль – это служебное слово, которое употребляется с существительными и указывает на их род, число и падеж, а также на определённость или неопределённость.

**1. Определенные артикли (Bestimmte Artikel): der, die, das**
Используются, когда речь идет о конкретном, уже известном или уникальном предмете/лице.
-   **der**: мужской род (maskulin), единственное число. Пример: **der** Mann (этот/тот самый мужчина)
-   **die**: женский род (feminin), единственное число. Пример: **die** Frau (эта/та самая женщина)
-   **das**: средний род (neutral), единственное число. Пример: **das** Kind (этот/тот самый ребенок)
-   **die**: множественное число (plural) для всех родов. Пример: **die** Männer, **die** Frauen, **die** Kinder

**2. Неопределенные артикли (Unbestimmte Artikel): ein, eine, ein**
Используются, когда предмет/лицо упоминается впервые, или речь идет об одном из многих.
-   **ein**: мужской род (maskulin), единственное число. Пример: **ein** Mann (какой-то/один мужчина)
-   **eine**: женский род (feminin), единственное число. Пример: **eine** Frau (какая-то/одна женщина)
-   **ein**: средний род (neutral), единственное число. Пример: **ein** Kind (какой-то/один ребенок)
-   Во множественном числе неопределенный артикль **отсутствует**. Пример: Männer (мужчины), Frauen (женщины), Kinder (дети).

**3. Падежи (для уровня А2 важны Именительный и Винительный):**

*   **Именительный падеж (Nominativ) – кто? что? (подлежащее)**
    *   der Mann, ein Mann
    *   die Frau, eine Frau
    *   das Kind, ein Kind
    *   die Kinder (нет неопределенного артикля)

*   **Винительный падеж (Akkusativ) – кого? что? (прямое дополнение)**
    *   **den** Mann, **einen** Mann (мужской род изменяется!)
    *   die Frau, eine Frau (женский род не изменяется)
    *   das Kind, ein Kind (средний род не изменяется)
    *   die Kinder (нет неопределенного артикля)

    Пример: Ich sehe **einen** Mann. (Я вижу мужчину.) Der Mann liest **das** Buch. (Мужчина читает книгу.)

**4. Отрицательный артикль (Negativartikel): kein, keine, kein**
Используется для отрицания существительного с неопределенным артиклем или существительного без артикля во множественном числе. Склоняется как неопределенный артикль.
-   Nominativ: kein Mann, keine Frau, kein Kind, keine Kinder
-   Akkusativ: **keinen** Mann, keine Frau, kein Kind, keine Kinder

    Пример: Das ist **kein** Tisch. (Это не стол.) Ich habe **keine** Zeit. (У меня нет времени.)

**Когда использовать определенный, а когда неопределенный артикль?**
-   **Неопределенный (ein/eine):**
    *   Когда предмет упоминается впервые: Da ist **eine** Katze. (Там кошка.)
    *   Когда говорим об одном из многих: Das ist **ein** Stuhl. (Это (один) стул.)
-   **Определенный (der/die/das):**
    *   Когда предмет уже упоминался: Da ist eine Katze. **Die** Katze ist schwarz. (Там кошка. Эта кошка черная.)
    *   Когда предмет единственный в своем роде или конкретизирован: **Die** Sonne scheint. (Солнце светит.) **Der** Hund meines Freundes. (Собака моего друга.)
    *   С названиями рек, гор, морей, стран (с артиклем, например, die Schweiz).
`,
    audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_artikel_a2.mp3', 
    transcript: 'Der, die, das. Ein, eine, ein. Das ist ein Haus. Das Haus ist groß. Der Mann liest ein Buch. Ich sehe einen Hund. Ich habe keinen Hund.',
    vocabulary: [
      { german: 'der Mann', russian: 'мужчина', example: 'Der Mann ist groß.' },
      { german: 'die Frau', russian: 'женщина', example: 'Die Frau liest ein Buch.' },
      { german: 'das Kind', russian: 'ребенок', example: 'Das Kind spielt im Garten.' },
      { german: 'der Tisch', russian: 'стол', example: 'Der Tisch ist aus Holz.' },
      { german: 'die Lampe', russian: 'лампа', example: 'Die Lampe steht auf dem Tisch.' },
      { german: 'das Buch', russian: 'книга', example: 'Ich lese das Buch.' },
      { german: 'sehen', russian: 'видеть', example: 'Ich sehe einen Vogel.' },
      { german: 'haben', russian: 'иметь', example: 'Wir haben keine Zeit.' },
    ],
    exercises: [
      {
        id: 'a2-artikel-adv-ex1',
        type: 'multiple_choice',
        question: 'Выберите правильный **определенный** артикль для слова "Tisch" (стол, мужской род) в именительном падеже:',
        options: ['der', 'die', 'das', 'den'],
        correctAnswer: 'der',
        explanation: 'Слово "Tisch" мужского рода, в именительном падеже используется артикль "der".',
      },
      {
        id: 'a2-artikel-adv-ex2',
        type: 'multiple_choice',
        question: 'Выберите правильный **неопределенный** артикль для слова "Lampe" (лампа, женский род) в именительном падеже:',
        options: ['ein', 'eine', 'einen', 'eines'],
        correctAnswer: 'eine',
        explanation: 'Слово "Lampe" женского рода, в именительном падеже используется неопределенный артикль "eine".',
      },
      {
        id: 'a2-artikel-adv-ex3',
        type: 'fill_in_the_blank',
        question: 'Вставьте пропущенный артикль: Ich kaufe ___ Apfel (m).',
        sentenceParts: ['Ich kaufe ', ' Apfel (m).'],
        correctAnswer: 'einen',
        explanation: 'Глагол "kaufen" (покупать) требует винительного падежа (Akkusativ). "Apfel" мужского рода, поэтому неопределенный артикль в Akkusativ - "einen".',
      },
      {
        id: 'a2-artikel-adv-ex4',
        type: 'fill_in_the_blank',
        question: 'Вставьте пропущенный артикль: Siehst du ___ Sterne (pl) am Himmel?',
        sentenceParts: ['Siehst du ', ' Sterne (pl) am Himmel?'],
        correctAnswer: 'die',
        explanation: '"Sterne" (звезды) - множественное число. Речь идет о конкретных звездах на небе, поэтому используется определенный артикль "die".',
      },
      {
        id: 'a2-artikel-adv-ex5',
        type: 'multiple_choice',
        question: 'Какое предложение верное?',
        options: [
          'Ich habe ein Schwester.', 
          'Ich habe eine Schwester.', 
          'Ich habe einen Schwester.'
        ],
        correctAnswer: 'Ich habe eine Schwester.',
        explanation: '"Schwester" (сестра) - женского рода. Глагол "haben" требует винительного падежа. Неопределенный артикль для женского рода в Akkusativ - "eine".',
      },
      {
        id: 'a2-artikel-adv-ex6',
        type: 'fill_in_the_blank',
        question: 'Вставьте отрицательный артикль: Das ist Milch. Das ist ___ Wasser.',
        sentenceParts: ['Das ist Milch. Das ist ', ' Wasser.'],
        correctAnswer: 'kein',
        explanation: '"Wasser" (вода) среднего рода. Отрицательный артикль для среднего рода в именительном падеже - "kein".',
      },
      {
        id: 'a2-artikel-adv-ex7',
        type: 'translation',
        question: 'Переведите на немецкий: "У меня есть собака. Собака большая."',
        prompt: 'У меня есть собака. Собака большая.',
        languageDirection: 'to_german',
        correctAnswer: 'Ich habe einen Hund. Der Hund ist groß.',
        explanation: 'Первое упоминание "собака" (Hund, m.) - неопределенный артикль в Akkusativ "einen". Второе упоминание - определенный артикль в Nominativ "der".',
      },
    ],
  },
  {
    id: 'a2-verben-praesens',
    level: 'A2',
    topic: 'Спряжение глаголов в настоящем времени (Präsens)',
    theory: 'Большинство немецких глаголов в настоящем времени спрягаются по определенным правилам, добавляя окончания к основе глагола. Например, глагол "lernen" (учить): ich lerne, du lernst, er/sie/es lernt, wir lernen, ihr lernt, sie/Sie lernen. Некоторые сильные глаголы меняют корневую гласную во 2-м и 3-м лице единственного числа (например, e -> i/ie: sprechen - du sprichst, er spricht; lesen - du liest, er liest; a -> ä: fahren - du fährst, er fährt). Глаголы "sein" (быть) и "haben" (иметь) имеют особые формы спряжения.',
    exercises: [
      {
        id: 'a2-verben-ex1',
        type: 'multiple_choice',
        question: 'Какая форма глагола "spielen" (играть) верна для местоимения "ihr"?',
        options: ['spiele', 'spielst', 'spielt', 'spielen'],
        correctAnswer: 'spielt',
        explanation: 'Для местоимения "ihr" (вы, мн.ч., неформ.) к основе глагола "spiel-" добавляется окончание "-t".',
      },
      {
        id: 'a2-verben-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму глагола "lesen": Du ___ ein Buch.',
        sentenceParts: ['Du ', ' ein Buch.'],
        correctAnswer: 'liest',
        explanation: 'Глагол "lesen" - сильный, корневая гласная "e" меняется на "ie" во 2-м лице ед.ч. (du liest).',
      },
      {
        id: 'a2-verben-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "Мы работаем сегодня."',
        prompt: 'Мы работаем сегодня.',
        languageDirection: 'to_german',
        correctAnswer: 'Wir arbeiten heute.',
        explanation: 'Глагол "arbeiten" (работать) для "wir" (мы) имеет форму "arbeiten".',
      }
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
    id: 'b1-praeteritum',
    level: 'B1',
    topic: 'Прошедшее время Präteritum',
    theory: `Präteritum (простое прошедшее время) используется в основном в письменной речи (рассказы, романы, новости) для описания событий в прошлом. 
Слабые глаголы (regelmäßige Verben) образуют Präteritum путем добавления суффикса -te- к основе глагола и личных окончаний:
ich lernte, du lerntest, er/sie/es lernte, wir lernten, ihr lerntet, sie/Sie lernten.
Пример: ich spielte (я играл), er arbeitete (он работал).

Сильные глаголы (unregelmäßige Verben) образуют Präteritum путем изменения корневой гласной (иногда и согласной). Эти формы нужно запоминать.
Пример: ich ging (я шел от gehen), du sahst (ты видел от sehen), er sprach (он говорил от sprechen).

Глаголы "haben" и "sein" в Präteritum:
sein: ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren.
haben: ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten.`,
    exercises: [
      {
        id: 'b1-praeteritum-ex1',
        type: 'multiple_choice',
        question: 'Какая форма Präteritum глагола "machen" (делать) для "er"?',
        options: ['machte', 'machtest', 'gemacht', 'machte'],
        correctAnswer: 'machte',
        explanation: '"Machen" - слабый глагол, Präteritum для "er/sie/es" - основа + -te: machte.',
      },
      {
        id: 'b1-praeteritum-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте глагол "sein" в Präteritum: Gestern ___ ich im Kino.',
        sentenceParts: ['Gestern ', ' ich im Kino.'],
        correctAnswer: 'war',
        explanation: 'Präteritum от "sein" для "ich" - "war".',
      },
      {
        id: 'b1-praeteritum-ex3',
        type: 'translation',
        question: 'Переведите на немецкий (используя Präteritum): "Она читала книгу."',
        prompt: 'Она читала книгу.',
        languageDirection: 'to_german',
        correctAnswer: 'Sie las ein Buch.',
        explanation: '"Lesen" - сильный глагол, Präteritum "las".',
      },
    ],
  },
  {
    id: 'b2-konjunktiv2',
    level: 'B2',
    topic: 'Сослагательное наклонение II (Konjunktiv II)',
    theory: 'Konjunktiv II используется для выражения нереальных желаний, предположений, вежливых просьб. Образуется от формы Präteritum сильных глаголов с умлаутом (если возможно) или с помощью вспомогательного глагола "würden" + инфинитив. Например: "Wenn ich Zeit hätte, würde ich reisen." (Если бы у меня было время, я бы путешествовал.)',
    exercises: [
      {
        id: 'b2-konjunktiv2-ex1',
        type: 'multiple_choice',
        question: 'Выберите правильную форму Konjunktiv II для "Ich habe Geld":',
        options: ['Ich habe Geld gehabt', 'Ich hätte Geld', 'Ich würde Geld haben'],
        correctAnswer: 'Ich hätte Geld',
        explanation: 'Konjunktiv II от "haben" - "hätte".',
      },
       {
        id: 'b2-konjunktiv2-ex2',
        type: 'fill_in_the_blank',
        question: 'Дополните предложение в Konjunktiv II: Wenn er mehr lernen ___, ___ er die Prüfung bestehen.',
        sentenceParts: ['Wenn er mehr lernen ', ', ', ' er die Prüfung bestehen.'],
        correctAnswer: 'würde, würde', // или könnte / sollte в зависимости от контекста, но würden...würden самый частый
        explanation: 'Для большинства глаголов Konjunktiv II образуется с "würde" + Infinitiv. "Wenn er mehr lernen würde, würde er die Prüfung bestehen." (Если бы он больше учился, он бы сдал экзамен.)',
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
    id: 'b2-passiv',
    level: 'B2',
    topic: 'Пассивный залог (Passiv)',
    theory: `Пассивный залог используется, когда действие важнее, чем его исполнитель, или исполнитель неизвестен/неважен.
Образуется с помощью вспомогательного глагола "werden" в соответствующей временной форме и Partizip II смыслового глагола.
Пример: Das Auto wird repariert. (Машину ремонтируют / Машина ремонтируется.)
Исполнитель действия (агенс) может быть указан с предлогом "von" (если это лицо или сила) или "durch" (если это средство или причина).
Пример: Das Buch wurde von dem Studenten gelesen. (Книга была прочитана студентом.)

Основные временные формы пассива:
- Präsens Passiv: wird + Partizip II (Das Haus wird gebaut.)
- Präteritum Passiv: wurde + Partizip II (Das Haus wurde gebaut.)
- Perfekt Passiv: ist + Partizip II + worden (Das Haus ist gebaut worden.)
- Plusquamperfekt Passiv: war + Partizip II + worden (Das Haus war gebaut worden.)
- Futur I Passiv: wird + Partizip II + werden (Das Haus wird gebaut werden.)
`,
    exercises: [
      {
        id: 'b2-passiv-ex1',
        type: 'multiple_choice',
        question: 'Преобразуйте предложение в Präsens Passiv: "Der Mechaniker repariert das Auto."',
        options: [
          'Das Auto repariert den Mechaniker.', 
          'Das Auto wird repariert.', 
          'Das Auto ist repariert worden.'
        ],
        correctAnswer: 'Das Auto wird repariert.',
        explanation: 'Präsens Passiv: werden (в нужной форме) + Partizip II. "repariert" - Partizip II от "reparieren".',
      },
      {
        id: 'b2-passiv-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму пассива (Präteritum Passiv): Die Brücke ___ letztes Jahr ___. (bauen)',
        sentenceParts: ['Die Brücke ', ' letztes Jahr ', '.'],
        correctAnswer: 'wurde, gebaut',
        explanation: 'Präteritum Passiv: wurde + Partizip II. "gebaut" - Partizip II от "bauen".',
      },
      {
        id: 'b2-passiv-ex3',
        type: 'translation',
        question: 'Переведите на немецкий (используя пассив): "Письмо было написано вчера."',
        prompt: 'Письмо было написано вчера.',
        languageDirection: 'to_german',
        correctAnswer: 'Der Brief wurde gestern geschrieben.',
        explanation: 'Präteritum Passiv. "geschrieben" - Partizip II от "schreiben".',
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
    id: 'c1-partizipialkonstruktionen',
    level: 'C1',
    topic: 'Причастные обороты (Partizipialkonstruktionen)',
    theory: `Причастные обороты с Partizip I (Present Participle) и Partizip II (Past Participle) позволяют сделать речь более лаконичной и стилистически разнообразной, заменяя придаточные предложения.
Partizip I (основа + -d): выражает одновременное, активное действие.
Пример: Das singende Mädchen (поющая девочка) = Das Mädchen, das singt.
Der schnell fahrende Zug (быстро едущий поезд) = Der Zug, der schnell fährt.

Partizip II (форма для Perfekt): выражает предшествующее действие (в переходных глаголах) или пассивное состояние.
Пример: Das gelesene Buch (прочитанная книга) = Das Buch, das gelesen wurde/ist.
Die geöffnete Tür (открытая дверь) = Die Tür, die geöffnet wurde/ist.

Расширенные причастные обороты (Erweiterte Partizipialattribute) включают другие члены предложения:
Пример: Der von seiner Mutter geliebte Sohn. (Сын, любимый своей матерью.)
Das auf dem Tisch liegende Buch. (Книга, лежащая на столе.)
Эти конструкции часто используются в официальном и письменном стилях.`,
    exercises: [
      {
        id: 'c1-partizip-ex1',
        type: 'multiple_choice',
        question: 'Какое предложение содержит правильный причастный оборот с Partizip I?',
        options: [
          'Das Kind, das spielt, ist laut.', 
          'Das spielende Kind ist laut.', 
          'Das gespielte Kind ist laut.'
        ],
        correctAnswer: 'Das spielende Kind ist laut.',
        explanation: '"spielend" (играющий) - Partizip I от "spielen", описывает одновременное активное действие.',
      },
      {
        id: 'c1-partizip-ex2',
        type: 'fill_in_the_blank',
        question: 'Замените относительное придаточное предложение причастным оборотом: Der Brief, der gestern geschrieben wurde, ...',
        sentenceParts: ['Der gestern ', ' Brief ...'],
        correctAnswer: 'geschriebene',
        explanation: '"geschrieben" - Partizip II от "schreiben". Причастный оборот: "der gestern geschriebene Brief".',
      },
      {
        id: 'c1-partizip-ex3',
        type: 'translation',
        question: 'Переведите на немецкий, используя причастный оборот: "Женщина, говорящая по-немецки, очень дружелюбна."',
        prompt: 'Женщина, говорящая по-немецки, очень дружелюбна.',
        languageDirection: 'to_german',
        correctAnswer: 'Die Deutsch sprechende Frau ist sehr freundlich.',
        explanation: '"Deutsch sprechend" - расширенное причастие I.',
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
  {
    id: 'c2-nominalstil-verbalstil',
    level: 'C2',
    topic: 'Номинальный и вербальный стили (Nominalstil vs. Verbalstil)',
    theory: `В немецком языке существует тенденция к использованию номинального стиля (Nominalstil), особенно в официальной, научной и письменной речи. Номинальный стиль характеризуется преобладанием существительных (часто отглагольных) и причастных оборотов вместо глагольных конструкций и придаточных предложений. Вербальный стиль (Verbalstil) более характерен для устной и неформальной речи, он использует больше глаголов и придаточных предложений.
Умение переключаться между этими стилями и понимать их особенности важно для уровня C2.

Примеры трансформации из вербального в номинальный стиль:
-   **Вербально:** Als er das Projekt beendet hatte, war er sehr müde. (Когда он закончил проект, он был очень уставшим.)
    **Номинально:** Nach Beendigung des Projekts war er sehr müde. (После завершения проекта он был очень уставшим.)
-   **Вербально:** Man erwartet, dass die Preise steigen. (Ожидается, что цены вырастут.)
    **Номинально:** Eine Steigerung der Preise wird erwartet. / Man erwartet eine Preissteigerung. (Ожидается рост цен.)

Характерные черты номинального стиля:
-   Отглагольные существительные на -ung, -tion, -heit, -keit, -schaft и др.
-   Предложные конструкции вместо глаголов.
-   Причастные обороты.
-   Более формальный и абстрактный характер изложения.
`,
    exercises: [
      {
        id: 'c2-nominal-ex1',
        type: 'multiple_choice',
        question: 'Какое из предложений написано в номинальном стиле?',
        options: [
          'Weil das Wetter schlecht war, blieben wir zu Hause.', 
          'Wegen des schlechten Wetters blieben wir zu Hause.', 
          'Wir blieben zu Hause, da das Wetter schlecht war.'
        ],
        correctAnswer: 'Wegen des schlechten Wetters blieben wir zu Hause.',
        explanation: 'Использование предлога "wegen" с существительным "des schlechten Wetters" вместо придаточного предложения с "weil" или "da" характерно для номинального стиля.',
      },
      {
        id: 'c2-nominal-ex2',
        type: 'fill_in_the_blank',
        question: 'Трансформируйте в номинальный стиль: "Man untersucht die Ursachen des Problems." (Исследуют причины проблемы.)',
        sentenceParts: ['Eine ', ' der Ursachen des Problems findet statt.'], // Ответ подразумевает "Untersuchung"
        correctAnswer: 'Untersuchung',
        explanation: '"Untersuchung" (исследование) - отглагольное существительное от "untersuchen". Полный вариант: "Eine Untersuchung der Ursachen des Problems findet statt." или "Die Untersuchung der Ursachen des Problems..."',
      },
      {
        id: 'c2-nominal-ex3',
        type: 'translation',
        question: 'Переведите на немецкий, используя преимущественно номинальный стиль: "Благодаря улучшению экономической ситуации, создаются новые рабочие места."',
        prompt: 'Благодаря улучшению экономической ситуации, создаются новые рабочие места.',
        languageDirection: 'to_german',
        correctAnswer: 'Dank der Verbesserung der wirtschaftlichen Lage entstehen neue Arbeitsplätze.',
        // Альтернатива: Durch die Verbesserung der wirtschaftlichen Lage kommt es zur Schaffung neuer Arbeitsplätze.
        explanation: '"Verbesserung" (улучшение) - отглагольное существительное. Конструкция с "Dank" или "Durch" + существительное типична для номинального стиля.',
      },
    ],
  },
];

    
    
