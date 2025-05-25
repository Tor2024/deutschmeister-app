
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
      { german: 'Nominativ', russian: 'Именительный падеж (кто? что?)' },
      { german: 'Akkusativ', russian: 'Винительный падеж (кого? что?)' },
      { german: 'bestimmter Artikel', russian: 'определенный артикль' },
      { german: 'unbestimmter Artikel', russian: 'неопределенный артикль' },
      { german: 'Negativartikel', russian: 'отрицательный артикль' },
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
        question: 'Переведите на немецкий: "У меня нет машины (средний род)."',
        prompt: 'У меня нет машины (средний род).',
        languageDirection: 'to_german',
        correctAnswer: 'Ich habe kein Auto.',
        explanation: '"Auto" среднего рода. "Haben" требует Akkusativ. Отрицательный артикль "kein" для среднего рода в Akkusativ не меняется.',
      },
    ],
  },
  {
    id: 'a2-verben-praesens',
    level: 'A2',
    topic: 'Спряжение глаголов в настоящем времени (Präsens) (углубленно)',
    theory: `Спряжение глаголов в настоящем времени (Präsens) – одна из фундаментальных тем в немецком языке. Глаголы изменяются по лицам и числам.

**1. Слабые (регулярные) глаголы (Schwache / Regelmäßige Verben)**
Большинство глаголов относятся к этой группе. Они образуют формы Präsens путем добавления стандартных окончаний к основе глагола.
Основа глагола получается путем отбрасывания окончания инфинитива (-en или -n).
Пример: **lernen** (учить), основа: **lern-**
-   ich: lern**e** (я учу)
-   du: lern**st** (ты учишь)
-   er/sie/es: lern**t** (он/она/оно учит)
-   wir: lern**en** (мы учим)
-   ihr: lern**t** (вы учите)
-   sie/Sie: lern**en** (они/Вы учите)

Другие примеры: machen (делать), spielen (играть), wohnen (жить), kaufen (покупать), arbeiten (работать).

**2. Сильные (нерегулярные) глаголы (Starke / Unregelmäßige Verben)**
У этих глаголов при спряжении в Präsens происходит изменение корневой гласной во 2-м и 3-м лице единственного числа (du, er/sie/es). Окончания при этом в основном такие же, как у слабых глаголов (кроме случаев, когда основа заканчивается на -t/-d, см. ниже).
Основные модели изменения для уровня A2:
*   **e → i**: geben (давать) -> du g**i**bst, er g**i**bt. Примеры: nehmen (брать - du nimmst, er nimmt), sprechen (говорить - du sprichst, er spricht), treffen (встречать - du triffst, er trifft), helfen (помогать - du hilfst, er hilft).
*   **e → ie**: lesen (читать) -> du l**ie**st, er l**ie**st. Примеры: sehen (видеть - du siehst, er sieht), empfehlen (рекомендовать - du empfiehlst, er empfiehlt).
*   **a → ä**: fahren (ехать) -> du f**ä**hrst, er f**ä**hrt. Примеры: schlafen (спать - du schläfst, er schläft), tragen (носить - du trägst, er trägt), waschen (мыть - du wäschst, er wäscht), laufen (бежать - du läufst, er läuft).

Пример: **fahren** (ехать), основа: **fahr-**
-   ich: fahre
-   du: f**ä**hrst
-   er/sie/es: f**ä**hrt
-   wir: fahren
-   ihr: fahrt (без умлаута!)
-   sie/Sie: fahren

**3. Особые случаи спряжения:**
*   **Глаголы, основа которых заканчивается на -d, -t, -m, -n (если перед -m/-n нет -l- или -r- и это не сильный глагол с изменением только корневой гласной)**:
    Перед окончаниями **-st** (du) и **-t** (er/sie/es, ihr) добавляется гласная **-e-** для удобства произношения.
    Пример: **arbeiten** (работать), основа: **arbeit-**
    -   du: arbeit**e**st
    -   er/sie/es: arbeit**e**t
    -   ihr: arbeit**e**t
    Другие примеры: finden (находить) -> du findest, er findet, ihr findet; atmen (дышать); öffnen (открывать).
    Исключение: kommen (du kommst, er kommt), lernen (du lernst, er lernt).

*   **Глаголы, основа которых заканчивается на -s, -ss, -ß, -z, -x**:
    Во 2-м лице единственного числа (du) окончание будет **-t** вместо **-st** (так как 's' уже есть в основе).
    Пример: **heißen** (называться), основа: **heiß-**
    -   du: heiß**t** (а не heißst)
    Другие примеры: tanzen (танцевать) -> du tanzt; sitzen (сидеть) -> du sitzt; reisen (путешествовать) -> du reist.

**4. Глаголы "sein" (быть) и "haben" (иметь)**
Эти важнейшие глаголы имеют полностью особое спряжение, которое нужно запомнить:
*   **sein (быть):**
    -   ich bin
    -   du bist
    -   er/sie/es ist
    -   wir sind
    -   ihr seid
    -   sie/Sie sind
*   **haben (иметь):**
    -   ich habe
    -   du hast
    -   er/sie/es hat
    -   wir haben
    -   ihr habt
    -   sie/Sie haben

**5. Модальные глаголы (Modalverben)**
Модальные глаголы (können, müssen, dürfen, sollen, wollen, mögen) также имеют особенности спряжения в Präsens: 1-е и 3-е лицо единственного числа совпадают и часто не имеют окончания. Корневая гласная часто меняется. Подробнее в отдельном уроке.
Пример: **können** (мочь)
-   ich: kann
-   du: kannst
-   er/sie/es: kann

Помните, что практика – ключ к успеху в спряжении глаголов!`,
    vocabulary: [
      { german: 'lernen', russian: 'учить, изучать', example: 'Ich lerne Deutsch.' },
      { german: 'sprechen', russian: 'говорить', example: 'Du sprichst sehr gut Englisch.' },
      { german: 'lesen', russian: 'читать', example: 'Er liest ein interessantes Buch.' },
      { german: 'fahren', russian: 'ехать, ездить', example: 'Wir fahren am Wochenende ans Meer.' },
      { german: 'arbeiten', russian: 'работать', example: 'Ihr arbeitet viel.' },
      { german: 'sein', russian: 'быть', example: 'Sie sind Studenten.' },
      { german: 'haben', russian: 'иметь', example: 'Ich habe eine Frage.' },
      { german: 'wohnen', russian: 'жить, проживать', example: 'Wo wohnst du?' },
      { german: 'spielen', russian: 'играть', example: 'Die Kinder spielen im Garten.' },
      { german: 'heißen', russian: 'называться', example: 'Wie heißt du?' },
      { german: 'geben', russian: 'давать', example: 'Er gibt mir ein Geschenk.'},
      { german: 'nehmen', russian: 'брать', example: 'Ich nehme den Bus.'},
      { german: 'schlafen', russian: 'спать', example: 'Das Baby schläft.'},
      { german: 'finden', russian: 'находить', example: 'Ich finde meinen Schlüssel nicht.'},
      { german: 'tanzen', russian: 'танцевать', example: 'Sie tanzen gern.'}
    ],
    exercises: [
      {
        id: 'a2-verben-praesens-adv-ex1',
        type: 'multiple_choice',
        question: 'Какая форма глагола "wohnen" (жить) верна для местоимения "ihr"?',
        options: ['wohne', 'wohnst', 'wohnt', 'wohnen'],
        correctAnswer: 'wohnt',
        explanation: 'Для местоимения "ihr" (вы, мн.ч., неформ.) к основе глагола "wohn-" добавляется окончание "-t".',
      },
      {
        id: 'a2-verben-praesens-adv-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму глагола "sehen" (видеть): Du ___ den Film.',
        sentenceParts: ['Du ', ' den Film.'],
        correctAnswer: 'siehst',
        explanation: 'Глагол "sehen" - сильный, корневая гласная "e" меняется на "ie" во 2-м лице ед.ч. (du siehst).',
      },
      {
        id: 'a2-verben-praesens-adv-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "Он спит долго."',
        prompt: 'Он спит долго.',
        languageDirection: 'to_german',
        correctAnswer: 'Er schläft lange.',
        explanation: 'Глагол "schlafen" (спать) - сильный, "a" меняется на "ä" в 3-м лице ед.ч. (er schläft).',
      },
      {
        id: 'a2-verben-praesens-adv-ex4',
        type: 'multiple_choice',
        question: 'Какая форма глагола "finden" (находить) верна для "er/sie/es"?',
        options: ['findt', 'findet', 'findst', 'find'],
        correctAnswer: 'findet',
        explanation: 'Основа глагола "finden" заканчивается на -d, поэтому для 3-го лица ед.ч. добавляется -et: "findet".',
      },
      {
        id: 'a2-verben-praesens-adv-ex5',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму глагола "sein": Wir ___ Freunde.',
        sentenceParts: ['Wir ', ' Freunde.'],
        correctAnswer: 'sind',
        explanation: 'Глагол "sein" (быть) для "wir" (мы) имеет форму "sind".',
      },
      {
        id: 'a2-verben-praesens-adv-ex6',
        type: 'multiple_choice',
        question: 'Какая форма глагола "reisen" (путешествовать) верна для "du"?',
        options: ['reist', 'reises', 'reisst', 'reisen'],
        correctAnswer: 'reist',
        explanation: 'Основа глагола "reisen" заканчивается на -s. Во 2-м лице ед.ч. (du) окончание "-t" (а не "-st"): du reist.',
      },
       {
        id: 'a2-verben-praesens-adv-ex7',
        type: 'translation',
        question: 'Переведите на немецкий: "У вас (вежл. форма) есть машина?"',
        prompt: 'У вас (вежл. форма) есть машина?',
        languageDirection: 'to_german',
        correctAnswer: 'Haben Sie ein Auto?',
        explanation: 'Глагол "haben" (иметь) для "Sie" (Вы, вежл.) имеет форму "haben".',
      }
    ],
  },
  {
    id: 'a2-pluralbildung',
    level: 'A2',
    topic: 'Образование множественного числа существительных (углубленно)',
    theory: `Образование множественного числа в немецком языке – одна из сложных тем, так как существует несколько моделей и много исключений. Определенный артикль для всех существительных во множественном числе всегда **die**.

**Основные модели образования множественного числа:**

**1. Окончание -e:**
   - Многие односложные существительные мужского рода (часто с умлаутом корневой гласной a, o, u → ä, ö, ü).
     Примеры: der Tag → die Tag**e** (день), der Sohn → die S**ö**hn**e** (сын), der Stuhl → die St**ü**hl**e** (стул), der Gast → die G**ä**st**e** (гость).
   - Некоторые существительные среднего рода (иногда с умлаутом).
     Примеры: das Jahr → die Jahr**e** (год), das Heft → die Heft**e** (тетрадь), das Bein → die Bein**e** (нога).
   - Некоторые существительные женского рода (часто с умлаутом).
     Примеры: die Hand → die H**ä**nd**e** (рука), die Nacht → die N**ä**cht**e** (ночь), die Stadt → die St**ä**dt**e** (город).

**2. Окончание -(e)n:**
   - Большинство существительных женского рода (особенно многосложные, оканчивающиеся на -e, -ei, -heit, -keit, -schaft, -ung, -ion, -tät).
     Примеры: die Frau → die Frau**en** (женщина), die Tür → die Tür**en** (дверь), die Zeitung → die Zeitung**en** (газета), die Frage → die Frage**n** (вопрос).
   - Существительные мужского рода так называемого "слабого склонения" (n-Deklination). Эти существительные получают -(e)n во всех падежах кроме Nominativ Singular. Во множественном числе они также имеют -(e)n.
     Примеры: der Junge → die Junge**n** (мальчик), der Kunde → die Kunde**n** (клиент), der Name → die Name**n** (имя), der Mensch → die Mensch**en** (человек).
   - Некоторые существительные среднего рода, особенно заимствованные или оканчивающиеся на -e.
     Примеры: das Auge → die Auge**n** (глаз), das Bett → die Bett**en** (кровать), das Interesse → die Interesse**n** (интерес), das Ende → die Ende**n** (конец).

**3. Окончание -er:**
   - Многие односложные существительные среднего рода (почти всегда с умлаутом, если он возможен у корневой гласной a, o, u).
     Примеры: das Kind → die Kind**er** (ребенок), das Buch → die B**ü**ch**er** (книга), das Haus → die H**ä**us**er** (дом), das Land → die L**ä**nd**er** (страна).
   - Некоторые существительные мужского рода (также часто с умлаутом).
     Примеры: der Mann → die M**ä**nn**er** (мужчина), der Wald → die W**ä**ld**er** (лес), der Geist → die Geist**er** (дух).

**4. Окончание -s:**
   - Многие заимствованные слова, особенно из английского и французского языков, оканчивающиеся на гласные (кроме -e), или на некоторые согласные.
     Примеры: das Auto → die Auto**s** (автомобиль), das Hotel → die Hotel**s** (отель), das Hobby → die Hobby**s** (хобби), das Team → die Team**s** (команда), der Job → die Job**s** (работа).
   - Сокращения и аббревиатуры.
     Примеры: der PKW → die PKW**s** (легковой автомобиль), die WG → die WG**s** (коммунальная квартира).
   - Некоторые существительные, оканчивающиеся на гласную (кроме -e), например, имена собственные или родства.
     Примеры: die Oma → die Oma**s** (бабушка), der Opa → die Opa**s** (дедушка).

**5. Без окончания (с умлаутом или без):**
   - Существительные мужского и среднего рода, оканчивающиеся на **-er, -el, -en** (часто с умлаутом корневой гласной, если это возможно у мужского рода, средний род обычно без умлаута).
     Примеры: der Lehrer → die Lehrer (учитель), der Apfel → die **Ä**pfel (яблоко), das Mädchen → die Mädchen (девочка), das Zimmer → die Zimmer (комната), der Computer → die Computer, der Vogel → die V**ö**gel (птица), das Fenster → die Fenster.
   - Некоторые другие существительные.

**Важные моменты:**
-   Неопределенный артикль (ein/eine) во множественном числе отсутствует. Вместо него может использоваться слово "viele" (многие), "einige" (некоторые) или числительное.
-   Принадлежность к определенному роду не всегда однозначно указывает на тип образования множественного числа, поэтому форму множественного числа лучше запоминать вместе с существительным и его артиклем.
-   Обращайте внимание на словари: там всегда указывается форма множественного числа.

Запоминание форм множественного числа требует практики и внимания к деталям.`,
    vocabulary: [
      { german: 'der Tag, die Tage', russian: 'день, дни', example: 'Ich arbeite fünf Tage die Woche.' },
      { german: 'die Frau, die Frauen', russian: 'женщина, женщины', example: 'Viele Frauen arbeiten hier.' },
      { german: 'das Kind, die Kinder', russian: 'ребенок, дети', example: 'Die Kinder spielen im Park.' },
      { german: 'das Auto, die Autos', russian: 'автомобиль, автомобили', example: 'Auf der Straße stehen viele Autos.' },
      { german: 'der Apfel, die Äpfel', russian: 'яблоко, яблоки', example: 'Ich kaufe drei Äpfel.' },
      { german: 'der Lehrer, die Lehrer', russian: 'учитель, учителя (м.р.)', example: 'Die Lehrer sind sehr nett.' },
      { german: 'das Buch, die Bücher', russian: 'книга, книги', example: 'In der Bibliothek gibt es viele Bücher.' },
      { german: 'die Stadt, die Städte', russian: 'город, города', example: 'Wir besuchen verschiedene Städte.' },
      { german: 'der Junge, die Jungen', russian: 'мальчик, мальчики', example: 'Die Jungen spielen Fußball.' },
      { german: 'das Mädchen, die Mädchen', russian: 'девочка, девочки', example: 'Die Mädchen singen Lieder.' },
      { german: 'die Hand, die Hände', russian: 'рука (кисть), руки'},
      { german: 'der Stuhl, die Stühle', russian: 'стул, стулья'},
      { german: 'die Tür, die Türen', russian: 'дверь, двери'},
      { german: 'das Zimmer, die Zimmer', russian: 'комната, комнаты'},
      { german: 'das Hobby, die Hobbys', russian: 'хобби, хобби (мн.ч.)'}
    ],
    exercises: [
      {
        id: 'a2-plural-adv-ex1',
        type: 'multiple_choice',
        question: 'Какое множественное число у слова "das Haus"?',
        options: ['die Hause', 'die Hausen', 'die Häuser', 'die Hauses'],
        correctAnswer: 'die Häuser',
        explanation: 'Слово "das Haus" (ср.р.) образует множественное число с окончанием -er и умлаутом: die Häuser.',
      },
      {
        id: 'a2-plural-adv-ex2',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму мн.ч.: Zwei ___ (Katze, f) spielen im Garten.',
        sentenceParts: ['Zwei ', ' spielen im Garten.'], // Placeholder for Katze, f
        correctAnswer: 'Katzen',
        explanation: 'Множественное число от "die Katze" (ж.р.) - "die Katzen" (окончаanie -n).',
      },
      {
        id: 'a2-plural-adv-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "Эти яблоки красные."',
        prompt: 'Эти яблоки красные.',
        languageDirection: 'to_german',
        correctAnswer: 'Diese Äpfel sind rot.',
        explanation: '"Der Apfel" (м.р.) во множественном числе "die Äpfel" (умлаут, без изменения окончания -el).',
      },
      {
        id: 'a2-plural-adv-ex4',
        type: 'multiple_choice',
        question: 'Как будет "стол" (der Tisch) во множественном числе?',
        options: ['die Tischen', 'die Tische', 'die Tischer', 'die Tischs'],
        correctAnswer: 'die Tische',
        explanation: 'Слово "der Tisch" (м.р.) образует множественное число с окончанием -e: die Tische.',
      },
      {
        id: 'a2-plural-adv-ex5',
        type: 'fill_in_the_blank',
        question: 'Напишите множественное число слова "das Foto": Viele ___ hängen an der Wand.',
        sentenceParts: ['Viele ', ' hängen an der Wand.'], // Placeholder for Foto, n
        correctAnswer: 'Fotos',
        explanation: 'Заимствованное слово "das Foto" (ср.р.) образует множественное число с окончанием -s: die Fotos.',
      },
      {
        id: 'a2-plural-adv-ex6',
        type: 'multiple_choice',
        question: 'Выберите правильное множественное число для "der Bruder" (брат):',
        options: ['die Brudern', 'die Brüder', 'die Bruder', 'die Bruders'],
        correctAnswer: 'die Brüder',
        explanation: 'Слово "der Bruder" (м.р., оканчивается на -er) образует множественное число с умлаутом без дополнительного окончания: die Brüder.',
      },
      {
        id: 'a2-plural-adv-ex7',
        type: 'translation',
        question: 'Переведите на немецкий: "В комнате три окна."',
        prompt: 'В комнате три окна.',
        languageDirection: 'to_german',
        correctAnswer: 'Im Zimmer sind drei Fenster.',
        explanation: '"Das Fenster" (ср.р., оканчивается на -er) не меняет форму во множественном числе: die Fenster.',
      },
    ],
  },
  {
    id: 'b1-nebensaetze',
    level: 'B1',
    topic: 'Придаточные предложения (Nebensätze) (углубленно)',
    theory: `Придаточные предложения (Nebensätze) – это зависимые предложения, которые не могут существовать самостоятельно и всегда относятся к главному предложению (Hauptsatz). Они выполняют роль различных членов предложения или уточняют его.

**Основное правило порядка слов:** В придаточных предложениях спрягаемый глагол (тот, который изменяется по лицам и числам) всегда стоит **в самом конце**. Если в предложении есть отделяемая приставка, она соединяется с глаголом в конце. Если есть модальный глагол и инфинитив, то модальный глагол стоит в конце, а инфинитив перед ним.

Придаточные предложения отделяются от главного запятой.

**Типы придаточных предложений и союзы (Subjunktionen):**

**1. Kausalsätze (Придаточные причины) – Warum? Weshalb? (Почему? Отчего?)**
   - **weil** (потому что, так как – причина часто неизвестна собеседнику):
     *Ich lerne Deutsch, **weil** ich in Deutschland arbeiten möchte.* (Я учу немецкий, потому что хочу работать в Германии.)
   - **da** (так как, поскольку – причина обычно уже известна собеседнику или очевидна):
     ***Da** das Wetter schlecht ist, bleiben wir zu Hause.* (Так как погода плохая, мы остаемся дома.)

**2. Finalsätze (Придаточные цели) – Wozu? Mit welcher Absicht? (Для чего? С какой целью?)**
   - **damit** (чтобы – когда подлежащие в главном и придаточном предложениях разные):
     *Ich gebe dir Geld, **damit** du dir ein Buch kaufen kannst.* (Я даю тебе деньги, чтобы ты мог купить себе книгу.)
   - **um...zu + Infinitiv** (чтобы – когда подлежащие в главном и придаточном предложениях совпадают. \`um\` стоит перед доп. членами, \`zu\` перед инфинитивом):
     *Ich lerne Deutsch, **um** in Deutschland arbeiten **zu** können.* (Я учу немецкий, чтобы мочь работать в Германии.)

**3. Konzessivsätze (Придаточные уступки) – Trotz welchen Umstands? (Несмотря на какое обстоятельство?)**
   - **obwohl / obgleich / obschon** (хотя, несмотря на то что):
     ***Obwohl** es regnet, gehen wir spazieren.* (Хотя идет дождь, мы идем гулять.)
     *Er kam zur Party, **obgleich** er sehr müde war.* (Он пришел на вечеринку, хотя был очень уставшим.)

**4. Konditionalsätze (Придаточные условия) – Unter welcher Bedingung? (При каком условии?)**
   - **wenn** (если, когда – для реальных условий в настоящем, будущем или повторяющихся действий в прошлом):
     ***Wenn** du Zeit hast, können wir uns treffen.* (Если у тебя будет время, мы можем встретиться.)
   - **falls** (в случае если, если – менее вероятное условие):
     ***Falls** es morgen schneit, fahren wir nicht Ski.* (Если завтра пойдет снег, мы не поедем кататься на лыжах.)

**5. Temporalsätze (Придаточные времени) – Wann? Wie lange? Seit wann? Bis wann? (Когда? Как долго? С каких пор? До каких пор?)**
   - **als** (когда – для однократного действия в прошлом):
     ***Als** ich ein Kind war, spielte ich oft im Garten.* (Когда я был ребенком, я часто играл в саду.)
   - **wenn** (когда – для многократных действий в прошлом, настоящем и будущем):
     *Immer **wenn** er lachte, freute ich mich.* (Всегда, когда он смеялся, я радовался.)
     ***Wenn** ich nach Hause komme, koche ich etwas.* (Когда я прихожу домой, я готовлю что-нибудь.)
   - **während** (в то время как, пока):
     ***Während** ich koche, hört mein Mann Musik.* (Пока я готовлю, мой муж слушает музыку.)
   - **bevor / ehe** (прежде чем, до того как):
     ***Bevor** du gehst, räume dein Zimmer auf.* (Прежде чем ты уйдешь, убери свою комнату.)
   - **nachdem** (после того как – действие в придаточном предшествует действию в главном; часто с Plusquamperfekt в придаточном и Präteritum/Perfekt в главном):
     ***Nachdem** ich gegessen hatte, ging ich spazieren.* (После того как я поел, я пошел гулять.)
   - **seit / seitdem** (с тех пор как):
     ***Seit** ich in Berlin wohne, habe ich viele Freunde gefunden.* (С тех пор как я живу в Берлине, я нашел много друзей.)
   - **bis** (до тех пор пока, пока не):
     *Warte hier, **bis** ich zurückkomme.* (Жди здесь, пока я не вернусь.)
   - **solange** (пока, в течение того времени как):
     ***Solange** du hier bist, kannst du mir helfen.* (Пока ты здесь, ты можешь мне помочь.)


**6. Modalsätze (Придаточные образа действия) – Wie? Auf welche Weise? (Как? Каким образом?)**
   - **indem** (тем что, таким образом что):
     *Er half mir, **indem** er mir Ratschläge gab.* (Он помог мне тем, что дал советы.)
   - **ohne...zu + Infinitiv** (не + деепричастие; без того чтобы):
     *Er ging weg, **ohne** ein Wort **zu** sagen.* (Он ушел, не сказав ни слова.)
   - **(an)statt...zu + Infinitiv** (вместо того чтобы):
     ***Anstatt** fernzusehen, sollte er lieber lernen.* (Вместо того чтобы смотреть телевизор, ему следовало бы лучше учиться.)

**7. Dass-Sätze (Изъяснительные придаточные)**
   - **dass** (что, чтобы): часто используются после глаголов говорения, мышления, чувств (wissen, sagen, denken, glauben, hoffen, meinen, fühlen, sehen, hören), а также после безличных выражений (es ist wichtig/gut/schade/klar, dass...).
     *Ich weiß, **dass** du Recht hast.* (Я знаю, что ты прав.)
     *Es ist wichtig, **dass** du pünktlich kommst.* (Важно, чтобы ты пришел вовремя.)

**8. Indirekte Fragesätze (Косвенные вопросы)**
   - **ob** (ли – для общих вопросов без вопросительного слова, т.е. на которые можно ответить да/нет):
     *Er fragt, **ob** du morgen Zeit hast.* (Он спрашивает, есть ли у тебя завтра время.)
     *Ich möchte wissen, **ob** der Film schon begonnen hat.* (Я хочу знать, начался ли уже фильм.)
   - **Вопросительные слова (W-Fragen): wer, was, wann, wo, warum, wie, welcher, etc.** (кто, что, когда, где, почему, как, какой и т.д.):
     *Sie möchte wissen, **wann** der Zug ankommt.* (Она хотела бы знать, когда прибывает поезд.)
     *Ich verstehe nicht, **warum** er das gesagt hat.* (Я не понимаю, почему он это сказал.)

Понимание и правильное использование придаточных предложений значительно обогащает речь и является ключевым навыком для уровня B1 и выше.`,
    audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_nebensaetze_b1.mp3',
    transcript: 'Weil, dass, ob, wenn. Ich weiß nicht, ob er kommt. Wenn das Wetter gut ist, gehen wir spazieren. Nachdem ich gegessen hatte, fühlte ich mich besser.',
    vocabulary: [
      { german: 'weil', russian: 'потому что, так как (причина)', example: 'Ich bleibe zu Hause, weil es regnet.' },
      { german: 'dass', russian: 'что, чтобы (изъяснительное)', example: 'Ich hoffe, dass du bald kommst.' },
      { german: 'ob', russian: 'ли (косвенный вопрос)', example: 'Ich frage mich, ob das richtig ist.' },
      { german: 'wenn', russian: 'если, когда (условие, повторяющееся/будущее время)', example: 'Wenn ich Zeit habe, besuche ich dich.' },
      { german: 'als', russian: 'когда (однократное в прошлом)', example: 'Als ich jung war, lebte ich auf dem Land.' },
      { german: 'obwohl', russian: 'хотя, несмотря на то что', example: 'Obwohl er müde war, arbeitete er weiter.' },
      { german: 'damit', russian: 'чтобы (цель, разные подлежащие)', example: 'Lerne gut, damit du die Prüfung bestehst.' },
      { german: 'um...zu', russian: 'чтобы (цель, одно подлежащее)', example: 'Ich spare Geld, um ein Auto zu kaufen.' },
      { german: 'während', russian: 'в то время как, пока', example: 'Während sie liest, kocht er.' },
      { german: 'nachdem', russian: 'после того как', example: 'Nachdem er gegessen hatte, ging er schlafen.' },
      { german: 'bevor', russian: 'прежде чем', example: 'Bevor du sprichst, denke nach.' },
      { german: 'seitdem/seit', russian: 'с тех пор как', example: 'Seitdem er hier wohnt, ist er glücklicher.' },
      { german: 'bis', russian: 'до тех пор пока', example: 'Warte, bis ich fertig bin.' },
      { german: 'falls', russian: 'в случае если, если (менее вероятно)', example: 'Falls du ihn siehst, grüß ihn von mir.'},
      { german: 'indem', russian: 'тем что, таким образом что', example: 'Man lernt eine Sprache, indem man viel spricht.' },
      { german: 'solange', russian: 'пока, в течение того времени как', example: 'Solange es nicht regnet, können wir draußen bleiben.' },
    ],
    exercises: [
      {
        id: 'b1-nebensaetze-adv-ex1',
        type: 'multiple_choice',
        question: 'Выберите правильный союз: Ich gehe nicht ins Kino, ___ ich keine Zeit habe.',
        options: ['obwohl', 'damit', 'weil', 'wenn'],
        correctAnswer: 'weil',
        explanation: '"weil" (потому что) используется для указания причины.',
      },
      {
        id: 'b1-nebensaetze-adv-ex2',
        type: 'fill_in_the_blank',
        question: 'Поставьте глагол в правильную форму: Er sagt, dass er dich morgen ___ (besuchen).',
        sentenceParts: ['Er sagt, dass er dich morgen ', '.'],
        correctAnswer: 'besucht',
        explanation: 'В придаточном предложении с "dass" спрягаемый глагол "besucht" ставится в конец.',
      },
      {
        id: 'b1-nebensaetze-adv-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "Я не знаю, придёт ли он сегодня."',
        prompt: 'Я не знаю, придёт ли он сегодня.',
        languageDirection: 'to_german',
        correctAnswer: 'Ich weiß nicht, ob er heute kommt.',
        explanation: 'Косвенный вопрос вводится союзом "ob", глагол "kommt" в конце.',
      },
      {
        id: 'b1-nebensaetze-adv-ex4',
        type: 'multiple_choice',
        question: 'Какой союз используется для выражения цели, если подлежащие в главном и придаточном предложениях РАЗНЫЕ?',
        options: ['um...zu', 'damit', 'weil', 'obwohl'],
        correctAnswer: 'damit',
        explanation: '"damit" используется для цели, когда субъекты действия в главном и придаточном предложениях различаются.',
      },
      {
        id: 'b1-nebensaetze-adv-ex5',
        type: 'fill_in_the_blank',
        question: 'Дополните предложение правильным союзом и поставьте глагол в конец: ___ sie fleißig gelernt hatte, bestand sie die Prüfung. (после того как)',
        sentenceParts: ['', ' sie fleißig gelernt hatte, bestand sie die Prüfung.'],
        correctAnswer: 'Nachdem',
        explanation: '"Nachdem" (после того как) указывает на предшествующее действие. Глагол "hatte gelernt" уже стоит в конце (Plusquamperfekt).',
      },
      {
        id: 'b1-nebensaetze-adv-ex6',
        type: 'translation',
        question: 'Переведите на немецкий: "Хотя фильм был длинный, он был интересный."',
        prompt: 'Хотя фильм был длинный, он был интересный.',
        languageDirection: 'to_german',
        correctAnswer: 'Obwohl der Film lang war, war er interessant.',
        explanation: '"Obwohl" (хотя) вводит уступительное придаточное. Глагол "war" в конце придаточного.',
      },
      {
        id: 'b1-nebensaetze-adv-ex7',
        type: 'multiple_choice',
        question: 'Какой порядок слов в придаточном предложении, вводимом союзом "wenn"?',
        options: [
          'Подлежащее - сказуемое - остальные члены.',
          'Сказуемое - подлежащее - остальные члены.',
          'Спрягаемый глагол в конце предложения.',
          'Спрягаемый глагол в начале предложения.'
        ],
        correctAnswer: 'Спрягаемый глагол в конце предложения.',
        explanation: 'В большинстве придаточных предложений немецкого языка, вводимых союзом, спрягаемый глагол ставится в самый конец.',
      },
      {
        id: 'b1-nebensaetze-adv-ex8',
        type: 'fill_in_the_blank',
        question: 'Вставьте подходящий союз: Ich lerne viel, ___ ich die Prüfung bestehen kann. (цель, разные подлежащие)',
        sentenceParts: ['Ich lerne viel, ', ' ich die Prüfung bestehen kann.'],
        correctAnswer: 'damit',
        explanation: 'Для выражения цели с разными подлежащими (ich/ich) используется союз "damit". Глагол "kann" в конце.',
      },
    ],
  },
  {
    id: 'b1-relativsaetze',
    level: 'B1',
    topic: 'Относительные придаточные предложения (Relativsätze) (углубленно)',
    theory: `Относительные придаточные предложения (Relativsätze) – это зависимые предложения, которые дают дополнительную информацию о существительном или местоимении в главном предложении. Существительное, к которому относится придаточное предложение, называется **антецедентом** (Bezugswort). Относительные предложения всегда отделяются запятыми.

**Основное правило порядка слов:** Как и в других придаточных предложениях, спрягаемый глагол в относительном предложении стоит **в самом конце**.

**1. Относительные местоимения (Relativpronomen)**
В качестве относительных местоимений чаще всего используются формы определенного артикля: **der, die, das**.
-   **Род и число** относительного местоимения определяются антецедентом в главном предложении.
-   **Падеж** относительного местоимения определяется его функцией (подлежащее, дополнение и т.д.) **внутри самого относительного предложения**.

**Таблица склонения относительных местоимений (der, die, das):**

| Падеж       | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural) |
|-------------|--------------------------|-------------------------|-----------------------|-------------------------------|
| **Nominativ** (кто? что?) | der                      | die                     | das                   | die                           |
| **Akkusativ** (кого? что?) | den                      | die                     | das                   | die                           |
| **Dativ** (кому? чему?)   | dem                      | der                     | dem                   | **denen** + **n** (к сущ.)     |
| _Genitiv_ (чей? чья? чьё?) | _dessen_                 | _deren_                 | _dessen_              | _deren_                       |

*Примечание: Genitiv (родительный падеж) с \`dessen/deren\` более характерен для уровней выше B1, но полезно знать о его существовании.*

**Примеры:**
-   Nominativ:
    *   *Der Mann, **der** dort steht, ist mein Lehrer.* (Мужчина, **который** там стоит, мой учитель.) (der Mann → der steht)
    *   *Die Frau, **die** Deutsch lernt, ist sehr fleißig.* (Женщина, **которая** учит немецкий, очень прилежная.) (die Frau → die lernt)
    *   *Das Kind, **das** spielt, lacht.* (Ребенок, **который** играет, смеется.) (das Kind → das spielt)
    *   *Die Bücher, **die** auf dem Tisch liegen, sind neu.* (Книги, **которые** лежат на столе, новые.) (die Bücher → die liegen)

-   Akkusativ:
    *   *Der Film, **den** ich gestern gesehen habe, war spannend.* (Фильм, **который** я вчера видел, был увлекательным.) (ich habe den Film gesehen)
    *   *Die Tasche, **die** du gekauft hast, gefällt mir.* (Сумка, **которую** ты купила, мне нравится.) (du hast die Tasche gekauft)
    *   *Das Auto, **das** er repariert, ist alt.* (Машина, **которую** он ремонтирует, старая.) (er repariert das Auto)
    *   *Die Freunde, **die** wir eingeladen haben, kommen bald.* (Друзья, **которых** мы пригласили, скоро придут.) (wir haben die Freunde eingeladen)

-   Dativ:
    *   *Der Kollege, **dem** ich geholfen habe, war dankbar.* (Коллега, **которому** я помог, был благодарен.) (ich habe dem Kollegen geholfen)
    *   *Die Studentin, **der** der Professor eine Frage stellt, antwortet gut.* (Студентка, **которой** профессор задает вопрос, отвечает хорошо.) (der Professor stellt der Studentin eine Frage)
    *   *Das Mädchen, **dem** das Fahrrad gehört, ist meine Schwester.* (Девочка, **которой** принадлежит велосипед, моя сестра.) (das Fahrrad gehört dem Mädchen)
    *   *Die Leute, **denen** wir das Geschenk gegeben haben, freuten sich sehr.* (Люди, **которым** мы дали подарок, очень обрадовались.) (wir haben den Leuten das Geschenk gegeben). Обратите внимание на **-n** у существительного во мн.ч. в Dativ, если оно его требует (Leute**n**).

**2. Относительные местоимения с предлогами**
Если в относительном предложении есть глагол, требующий предлога, этот предлог ставится **перед** относительным местоимением. Падеж относительного местоимения определяется этим предлогом.
-   *Der Stuhl, **auf dem** die Katze sitzt, ist bequem.* (Стул, **на котором** сидит кошка, удобный.) (sitzen auf + Dativ)
-   *Das Thema, **über das** wir sprechen, ist interessant.* (Тема, **о которой** мы говорим, интересная.) (sprechen über + Akkusativ)
-   *Die Freunde, **mit denen** ich ins Kino gehe, sind nett.* (Друзья, **с которыми** я иду в кино, милые.) (gehen mit + Dativ)

**3. Относительное местоимение "was"**
Местоимение **was** (что) используется, когда антецедент:
-   Неопределенное местоимение, такое как **alles** (всё), **nichts** (ничего), **etwas** (что-то), **vieles** (многое), **weniges** (немногое).
    *   *Alles, **was** er sagt, ist wahr.* (Всё, **что** он говорит, правда.)
    *   *Das ist etwas, **was** ich nicht verstehe.* (Это что-то, **чего** я не понимаю.)
-   Существительное, образованное от прилагательного в превосходной степени и употребленное в среднем роде (Superlativ).
    *   *Das Schönste, **was** ich je gesehen habe, war dieser Sonnenuntergang.* (Самое красивое, **что** я когда-либо видел, был этот закат.)
-   Целое предыдущее предложение.
    *   *Er hat die Prüfung bestanden, **was** uns alle sehr gefreut hat.* (Он сдал экзамен, **что** нас всех очень обрадовало.)

**4. Относительные наречия "wo", "wohin", "woher"**
Когда антецедент обозначает место, вместо предлога + относительное местоимение можно использовать относительные наречия:
-   **wo** (где – для указания места):
    *   *Die Stadt, **wo** ich geboren wurde, ist sehr klein.* (Город, **где** я родился, очень маленький.)
    *   Можно также: *Die Stadt, **in der** ich geboren wurde, ...*
-   **wohin** (куда – для указания направления движения к месту):
    *   *Das Land, **wohin** er reisen möchte, ist Italien.* (Страна, **куда** он хочет поехать, – Италия.)
    *   Можно также: *Das Land, **in das** er reisen möchte, ...*
-   **woher** (откуда – для указания направления движения от места):
    *   *Der Ort, **woher** sie kommt, liegt in den Bergen.* (Место, **откуда** она родом, находится в горах.)
    *   Можно также: *Der Ort, **aus dem** sie kommt, ...*

Понимание и правильное использование относительных предложений делает речь более связной, точной и естественной.`,
    vocabulary: [
      { german: 'der, die, das (Relativpronomen)', russian: 'который, которая, которое (относ. местоимения)', example: 'Der Mann, der lacht.' },
      { german: 'welcher, welche, welches', russian: 'который, которая, которое (альтернатива der/die/das, реже)', example: 'Das Buch, welches ich las.' },
      { german: 'Nominativ', russian: 'Именительный падеж (кто? что?)' },
      { german: 'Akkusativ', russian: 'Винительный падеж (кого? что?)' },
      { german: 'Dativ', russian: 'Дательный падеж (кому? чему?)' },
      { german: 'dessen', russian: 'чей, которого (Genitiv м.р., ср.р.)', example: 'Der Autor, dessen Buch ich liebe.' },
      { german: 'deren', russian: 'чья, которой, которых (Genitiv ж.р., мн.ч.)', example: 'Die Frau, deren Auto neu ist.' },
      { german: 'das Bezugswort', russian: 'антецедент (слово, к которому относится местоимение)' },
      { german: 'der Satz, die Sätze', russian: 'предложение, предложения' },
      { german: 'der Hauptsatz', russian: 'главное предложение' },
      { german: 'der Nebensatz', russian: 'придаточное предложение' },
      { german: 'die Präposition, die Präpositionen', russian: 'предлог, предлоги', example: 'Der Tisch, auf dem das Buch liegt.' },
      { german: 'was (Relativpronomen)', russian: 'что (относ. местоимение после alles, nichts и т.д.)', example: 'Alles, was du sagst, ist wichtig.' },
      { german: 'wo (Relativadverb)', russian: 'где (относительное наречие места)', example: 'Die Stadt, wo ich wohne.' },
      { german: 'stehen (steht, stand, hat gestanden)', russian: 'стоять' },
      { german: 'sehen (sieht, sah, hat gesehen)', russian: 'видеть' },
      { german: 'helfen (hilft, half, hat geholfen) + Dativ', russian: 'помогать (кому-л.)' },
      { german: 'sprechen (spricht, sprach, hat gesprochen) über + Akkusativ', russian: 'говорить (о чём-л.)' },
      { german: 'gehören (gehört, gehörte, hat gehört) + Dativ', russian: 'принадлежать (кому-л.)' },
    ],
    exercises: [
      {
        id: 'b1-relativ-adv-ex1',
        type: 'multiple_choice',
        question: 'Выберите правильное относительное местоимение: Das ist der Kuchen, ___ meine Mutter gebacken hat.',
        options: ['der', 'die', 'das', 'den'],
        correctAnswer: 'den',
        explanation: 'Антецедент "der Kuchen" (м.р.). В придаточном предложении "meine Mutter hat den Kuchen gebacken", поэтому "Kuchen" стоит в Akkusativ. Относительное местоимение для м.р. Akkusativ - "den".',
      },
      {
        id: 'b1-relativ-adv-ex2',
        type: 'fill_in_the_blank',
        question: 'Дополните предложение относительным местоимением: Die Kinder, mit ___ wir gespielt haben, sind sehr lustig.',
        sentenceParts: ['Die Kinder, mit ', ' wir gespielt haben, sind sehr lustig.'],
        correctAnswer: 'denen',
        explanation: 'Антецедент "Die Kinder" (мн.ч.). Предлог "mit" требует Dativ. Относительное местоимение для мн.ч. Dativ - "denen".',
      },
      {
        id: 'b1-relativ-adv-ex3',
        type: 'translation',
        question: 'Переведите на немецкий: "Вот книга, о которой я тебе рассказывал."',
        prompt: 'Вот книга, о которой я тебе рассказывал.',
        languageDirection: 'to_german',
        correctAnswer: 'Hier ist das Buch, von dem ich dir erzählt habe.',
        explanation: 'Антецедент "das Buch" (ср.р.). "Erzählen von + Dativ". Относительное местоимение для ср.р. Dativ с предлогом "von" - "von dem". Глагол "habe erzählt" в конце.',
      },
      {
        id: 'b1-relativ-adv-ex4',
        type: 'multiple_choice',
        question: 'Какое относительное местоимение используется после "alles"?',
        options: ['der', 'die', 'das', 'was'],
        correctAnswer: 'was',
        explanation: 'После неопределенных местоимений, таких как "alles", "nichts", "etwas", используется относительное местоимение "was".',
      },
      {
        id: 'b1-relativ-adv-ex5',
        type: 'fill_in_the_blank',
        question: 'Объедините два предложения в одно с относительным придаточным: Das ist der Mann. Der Mann wohnt nebenan.',
        sentenceParts: ['Das ist der Mann, ', ' nebenan wohnt.'],
        correctAnswer: 'der',
        explanation: 'Антецедент "der Mann" (м.р.). В придаточном предложении "der Mann" является подлежащим (Nominativ). Относительное местоимение для м.р. Nominativ - "der".',
      },
      {
        id: 'b1-relativ-adv-ex6',
        type: 'multiple_choice',
        question: 'Выберите правильный вариант для места: Das ist die Stadt, ___ ich studiere.',
        options: ['in der', 'wo', 'in die', 'auf der'],
        correctAnswer: 'in der',
        explanation: 'Антецедент "die Stadt" (ж.р.). "Studiere in der Stadt" (Dativ). Можно использовать "in der" или "wo". "Wo" указывает на место.',
      },
      {
        id: 'b1-relativ-adv-ex7',
        type: 'translation',
        question: 'Переведите на немецкий: "Учительница, которой я подарил цветы, была очень рада."',
        prompt: 'Учительница, которой я подарил цветы, была очень рада.',
        languageDirection: 'to_german',
        correctAnswer: 'Die Lehrerin, der ich Blumen geschenkt habe, war sehr froh.',
        explanation: 'Антецедент "Die Lehrerin" (ж.р.). "Ich habe der Lehrerin Blumen geschenkt" (Dativ). Относительное местоимение для ж.р. Dativ - "der".',
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

