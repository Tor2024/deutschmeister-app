
import type { Lesson, MultipleChoiceExercise, VocabularyItem } from '@/types';

// --- Урок A2: Артикли в немецком языке (углубленно) ---
const lessonA2Artikel: Lesson = {
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
Используются, когда предмет/лицо упоминается впервые, или речь идет об одном из многих. Неопределенный артикль также используется в конструкциях типа "Das ist ein..." (Это есть...).
-   **ein**: мужской род (maskulin), единственное число. Пример: **ein** Mann (какой-то/один мужчина)
-   **eine**: женский род (feminin), единственное число. Пример: **eine** Frau (какая-то/одна женщина)
-   **ein**: средний род (neutral), единственное число. Пример: **ein** Kind (какой-то/один ребенок)
-   Во множественном числе неопределенный артикль **отсутствует**. Вместо него может использоваться слово "viele" (многие), "einige" (некоторые), числительное или просто существительное без артикля, если контекст позволяет. Пример: Männer (мужчины), Frauen (женщины), Kinder (дети). Ich sehe viele Kinder. (Я вижу много детей.)

**3. Падежи (для уровня А2 важны Именительный и Винительный):**

*   **Именительный падеж (Nominativ) – кто? что? (Wer? Was?)**
    Используется для подлежащего в предложении – того, кто/что выполняет действие.
    *   der Mann, ein Mann (мужчина)
    *   die Frau, eine Frau (женщина)
    *   das Kind, ein Kind (ребенок)
    *   die Kinder (дети)

    Примеры:
    *   **Der Mann** liest. (Мужчина читает.)
    *   **Ein Kind** spielt. (Ребенок играет.)

*   **Винительный падеж (Akkusativ) – кого? что? (Wen? Was?)**
    Используется для прямого дополнения – объекта, на который направлено действие. Многие глаголы требуют Akkusativ (например, sehen, haben, kaufen, lesen, brauchen, lieben, besuchen, fragen, verstehen).
    *   **den** Mann, **einen** Mann (мужской род изменяется!)
    *   die Frau, eine Frau (женский род не изменяется)
    *   das Kind, ein Kind (средний род не изменяется)
    *   die Kinder (множественное число не изменяется по сравнению с Nominativ)

    Примеры:
    *   Ich sehe **einen Mann**. (Я вижу мужчину.)
    *   Er liest **das Buch**. (Он читает книгу.)
    *   Sie kauft **eine Tasche**. (Она покупает сумку.)

**4. Отрицательный артикль (Negativartikel): kein, keine, kein**
Используется для отрицания существительного с неопределенным артиклем или существительного без артикля во множественном числе. Склоняется как неопределенный артикль.
-   Nominativ:
    *   kein Mann (не мужчина)
    *   keine Frau (не женщина)
    *   kein Kind (не ребенок)
    *   keine Kinder (не дети)
-   Akkusativ:
    *   **keinen** Mann
    *   keine Frau
    *   kein Kind
    *   keine Kinder

    Примеры:
    *   Das ist **kein** Tisch. (Это не стол.)
    *   Ich habe **keine** Zeit. (У меня нет времени.)
    *   Er sieht **keinen** Hund. (Он не видит собаку.)

**5. Когда использовать определенный, а когда неопределенный артикль?**
-   **Неопределенный (ein/eine/ein):**
    *   Когда предмет/лицо упоминается впервые: Da ist **eine** Katze. (Там кошка.)
    *   Когда говорим об одном из многих, не выделяя конкретный: Das ist **ein** Stuhl. (Это (один) стул.)
    *   После глагола "haben" (иметь) и "brauchen" (нуждаться), если речь о чем-то неопределенном: Ich habe **einen** Bruder. (У меня есть (один) брат.) Sie braucht **ein** Buch. (Ей нужна (какая-то) книга.)
    *   В восклицаниях с "was für ein...": Was für **ein** schöner Tag! (Какой прекрасный день!)
-   **Определенный (der/die/das):**
    *   Когда предмет/лицо уже упоминался или известен собеседникам: Da ist eine Katze. **Die** Katze ist schwarz. (Там кошка. Эта кошка черная.)
    *   Когда предмет/лицо единственный в своем роде или конкретизирован контекстом: **Die** Sonne scheint. (Солнце светит.) **Der** Hund meines Freundes. (Собака моего друга.)
    *   С названиями рек, озер, морей, гор, улиц, планет: **der** Rhein (Рейн), **die** Alpen (Альпы), **die** Erde (Земля).
    *   С датами: heute ist **der** erste Mai (сегодня первое мая).
    *   С большинством названий стран, если они употребляются с артиклем (например, **die** Schweiz, **die** Türkei, **die** USA - мн.ч.). Большинство стран среднего рода используются без артикля (Deutschland, Frankreich).
    *   С абстрактными понятиями, если они конкретизированы: **Die** Liebe ist ein schönes Gefühl. (Любовь - прекрасное чувство.)
    *   С прилагательными в превосходной степени: **Der** höchste Berg. (Самая высокая гора.)

**Артикли во множественном числе:**
- Определенный артикль для всех родов во множественном числе – **die**.
  Пример: der Tisch → die Tische; die Frau → die Frauen; das Buch → die Bücher.
- Неопределенный артикль во множественном числе отсутствует.
- Отрицательный артикль во множественном числе – **keine**.
  Пример: Ich habe keine Bücher. (У меня нет книг.)

Запоминание правильного использования артиклей требует практики и внимания к контексту. Слушайте, читайте и старайтесь активно использовать артикли в своей речи!
`,
  audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_artikel_a2.mp3',
  transcript: 'Der, die, das. Ein, eine, ein. Das ist ein Haus. Das Haus ist groß. Der Mann liest ein Buch. Ich sehe einen Hund. Ich habe keinen Hund.',
  vocabulary: [
    { german: 'der Mann (Männer)', russian: 'мужчина (мужчины)', example: 'Der Mann ist groß.' },
    { german: 'die Frau (Frauen)', russian: 'женщина (женщины)', example: 'Die Frau liest ein Buch.' },
    { german: 'das Kind (Kinder)', russian: 'ребенок (дети)', example: 'Das Kind spielt im Garten.' },
    { german: 'der Tisch (Tische)', russian: 'стол (столы)', example: 'Der Tisch ist aus Holz.' },
    { german: 'die Lampe (Lampen)', russian: 'лампа (лампы)', example: 'Die Lampe steht auf dem Tisch.' },
    { german: 'das Buch (Bücher)', russian: 'книга (книги)', example: 'Ich lese das Buch.' },
    { german: 'sehen (sieht, sah, hat gesehen)', russian: 'видеть', example: 'Ich sehe einen Vogel.' },
    { german: 'haben (hat, hatte, hat gehabt)', russian: 'иметь', example: 'Wir haben keine Zeit.' },
    { german: 'kaufen (kauft, kaufte, hat gekauft)', russian: 'покупать', example: 'Sie kauft ein Kleid.' },
    { german: 'Nominativ', russian: 'Именительный падеж (кто? что?)' },
    { german: 'Akkusativ', russian: 'Винительный падеж (кого? что?)' },
    { german: 'bestimmter Artikel', russian: 'определенный артикль' },
    { german: 'unbestimmter Artikel', russian: 'неопределенный артикль' },
    { german: 'Negativartikel (kein, keine)', russian: 'отрицательный артикль' },
    { german: 'Plural', russian: 'множественное число' },
  ],
  exercises: [
    {
      id: 'a2-artikel-adv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный **определенный** артикль для слова "Tisch" (стол, мужской род) в именительном падеже:',
      options: ['der', 'die', 'das', 'den'],
      correctAnswer: 'der',
      explanation: 'Слово "Tisch" мужского рода, в именительном падеже используется определенный артикль "der".',
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
      explanation: '"Sterne" (звезды) - множественное число. Речь идет о конкретных звездах на небе (они уже известны или подразумеваются), поэтому используется определенный артикль "die".',
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
      explanation: '"Auto" среднего рода. Глагол "haben" требует Akkusativ. Отрицательный артикль "kein" для среднего рода в Akkusativ не меняется и остается "kein".',
    },
  ],
};

// --- Урок A2: Спряжение глаголов в настоящем времени (Präsens) (углубленно) ---
const lessonA2VerbenPraesens: Lesson = {
  id: 'a2-verben-praesens',
  level: 'A2',
  topic: 'Спряжение глаголов в настоящем времени (Präsens) (углубленно)',
  theory: `Спряжение глаголов в настоящем времени (Präsens) – одна из фундаментальных тем в немецком языке. Глаголы изменяются по лицам и числам, чтобы согласоваться с подлежащим.

**1. Слабые (регулярные) глаголы (Schwache / Regelmäßige Verben)**
Большинство глаголов в немецком языке относятся к этой группе. Они образуют формы Präsens предсказуемо, путем добавления стандартных личных окончаний к основе глагола.
Основа глагола получается путем отбрасывания окончания инфинитива (-en или -n).

Стандартные личные окончания:
-   ich: **-e**
-   du: **-st**
-   er/sie/es (он/она/оно): **-t**
-   wir: **-en** (совпадает с инфинитивом)
-   ihr (вы, мн.ч., неформ.): **-t**
-   sie/Sie (они/Вы, вежл.): **-en** (совпадает с инфинитивом)

Пример: **lernen** (учить), основа: **lern-**
-   ich lern**e** (я учу)
-   du lern**st** (ты учишь)
-   er/sie/es lern**t** (он/она/оно учит)
-   wir lern**en** (мы учим)
-   ihr lern**t** (вы учите)
-   sie/Sie lern**en** (они/Вы учите)

Другие примеры слабых глаголов: machen (делать), spielen (играть), wohnen (жить), kaufen (покупать), sagen (говорить), fragen (спрашивать).

**2. Сильные (нерегулярные) глаголы (Starke / Unregelmäßige Verben)**
У этих глаголов при спряжении в Präsens происходит **изменение корневой гласной** во 2-м и 3-м лице единственного числа (du, er/sie/es). Личные окончания при этом в основном такие же, как у слабых глаголов (кроме 3-го лица ед.ч., где окончание -t, и 2-го лица ед.ч., где окончание -st, но без изменения гласной у 'ihr'). Формы сильных глаголов нужно запоминать.

Основные модели изменения корневой гласной для уровня A2:
*   **e → i**: geben (давать) -> du g**i**bst, er/sie/es g**i**bt.
    Примеры: nehmen (брать) -> du n**imm**st, er n**imm**t (также меняется согласная); sprechen (говорить) -> du spr**i**chst, er spr**i**cht; treffen (встречать) -> du tr**i**ffst, er tr**i**fft; helfen (помогать) -> du h**i**lfst, er h**i**lft; essen (есть) -> du **iss**t, er **iss**t.
*   **e → ie**: lesen (читать) -> du l**ie**st, er/sie/es l**ie**st.
    Примеры: sehen (видеть) -> du s**ie**hst, er s**ie**ht; empfehlen (рекомендовать) -> du empf**ie**hlst, er empf**ie**hlt.
*   **a → ä**: fahren (ехать) -> du f**ä**hrst, er/sie/es f**ä**hrt.
    Примеры: schlafen (спать) -> du schl**ä**fst, er schl**ä**ft; tragen (носить) -> du tr**ä**gst, er tr**ä**gt; waschen (мыть) -> du w**ä**schst, er w**ä**scht; laufen (бежать) -> du l**äu**fst, er l**äu**ft (a + umlaut + u = äu).

Пример: **fahren** (ехать), основа: **fahr-**
-   ich fahre
-   du f**ä**hrst (изменение гласной + окончание -st)
-   er/sie/es f**ä**hrt (изменение гласной + окончание -t)
-   wir fahren
-   ihr fahrt (без изменения гласной!)
-   sie/Sie fahren

**3. Особые случаи спряжения:**
*   **Глаголы, основа которых заканчивается на -d, -t, или -m, -n (если перед -m/-n стоит другой согласный, кроме -l- или -r-):**
    Перед личными окончаниями **-st** (du) и **-t** (er/sie/es, ihr) добавляется гласная **-e-** для удобства произношения.
    Пример: **arbeiten** (работать), основа: **arbeit-**
    -   du: arbeit**e**st
    -   er/sie/es: arbeit**e**t
    -   ihr: arbeit**e**t
    Другие примеры: finden (находить) -> du findest, er findet, ihr findet; atmen (дышать) -> du atmest, er atmet, ihr atmet; öffnen (открывать) -> du öffnest, er öffnet, ihr öffnet.

*   **Глаголы, основа которых заканчивается на -s, -ss, -ß, -z, -x**:
    Во 2-м лице единственного числа (du) личное окончание будет **-t** вместо **-st** (так как звук 's' уже присутствует в основе).
    Пример: **heißen** (называться), основа: **heiß-**
    -   du: heiß**t** (а не heißst)
    Другие примеры: tanzen (танцевать) -> du tanzt; sitzen (сидеть) -> du sitzt; reisen (путешествовать) -> du reist.

**4. Глаголы "sein" (быть) и "haben" (иметь)**
Эти важнейшие глаголы имеют полностью особое спряжение в Präsens, которое необходимо выучить наизусть:
*   **sein (быть):**
    -   ich bin (я есть)
    -   du bist (ты есть)
    -   er/sie/es ist (он/она/оно есть)
    -   wir sind (мы есть)
    -   ihr seid (вы есть)
    -   sie/Sie sind (они/Вы есть)
*   **haben (иметь):**
    -   ich habe (я имею)
    -   du hast (ты имеешь)
    -   er/sie/es hat (он/она/оно имеет)
    -   wir haben (мы имеем)
    -   ihr habt (вы имеете)
    -   sie/Sie haben (они/Вы имеете)

**5. Модальные глаголы (Modalverben)**
Модальные глаголы (können, müssen, dürfen, sollen, wollen, mögen/möchte) также имеют особенности спряжения в Präsens: 1-е и 3-е лицо единственного числа (ich, er/sie/es) совпадают и часто не имеют окончания. Корневая гласная также может меняться. Подробнее они рассматриваются в отдельном уроке, но для примера:
*   **können** (мочь, уметь): ich kann, du kannst, er/sie/es kann.
*   **möchten** (хотел бы): ich möchte, du möchtest, er/sie/es möchte.

Помните, что регулярная практика – ключ к уверенному использованию глаголов в настоящем времени!`,
  vocabulary: [
    { german: 'lernen', russian: 'учить, изучать', example: 'Ich lerne Deutsch jeden Tag.' },
    { german: 'sprechen (spricht)', russian: 'говорить', example: 'Du sprichst sehr gut Englisch.' },
    { german: 'lesen (liest)', russian: 'читать', example: 'Er liest ein interessantes Buch.' },
    { german: 'fahren (fährt)', russian: 'ехать, ездить', example: 'Wir fahren am Wochenende ans Meer.' },
    { german: 'arbeiten', russian: 'работать', example: 'Ihr arbeitet sehr viel.' },
    { german: 'sein (ist)', russian: 'быть', example: 'Sie sind gute Studenten.' },
    { german: 'haben (hat)', russian: 'иметь', example: 'Ich habe eine wichtige Frage.' },
    { german: 'wohnen', russian: 'жить, проживать', example: 'Wo wohnst du jetzt?' },
    { german: 'spielen', russian: 'играть', example: 'Die Kinder spielen gern im Garten.' },
    { german: 'heißen', russian: 'называться', example: 'Wie heißt du?' },
    { german: 'geben (gibt)', russian: 'давать', example: 'Er gibt mir ein schönes Geschenk.' },
    { german: 'nehmen (nimmt)', russian: 'брать', example: 'Ich nehme den Bus zur Arbeit.' },
    { german: 'schlafen (schläft)', russian: 'спать', example: 'Das Baby schläft jetzt.' },
    { german: 'finden', russian: 'находить', example: 'Ich finde meinen Schlüssel nicht.' },
    { german: 'tanzen', russian: 'танцевать', example: 'Sie tanzen gern Walzer.' },
    { german: 'kaufen', russian: 'покупать', example: 'Was kaufst du im Supermarkt?' },
    { german: 'helfen (hilft)', russian: 'помогать', example: 'Er hilft seiner Mutter.' },
    { german: 'essen (isst)', russian: 'есть, кушать', example: 'Was isst du zum Frühstück?' },
    { german: 'treffen (trifft)', russian: 'встречать', example: 'Ich treffe meine Freundin heute Abend.' }
  ],
  exercises: [
    {
      id: 'a2-verben-praesens-adv-ex1',
      type: 'multiple_choice',
      question: 'Какая форма глагола "wohnen" (жить) верна для местоимения "ihr"?',
      options: ['wohne', 'wohnst', 'wohnt', 'wohnen'],
      correctAnswer: 'wohnt',
      explanation: 'Для местоимения "ihr" (вы, мн.ч., неформ.) к основе слабого глагола "wohn-" добавляется окончание "-t".',
    },
    {
      id: 'a2-verben-praesens-adv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "sehen" (видеть): Du ___ den Film.',
      sentenceParts: ['Du ', ' den Film.'],
      correctAnswer: 'siehst',
      explanation: 'Глагол "sehen" - сильный, корневая гласная "e" меняется на "ie" во 2-м лице ед.ч. (du). Окончание "-st". Получается "du siehst".',
    },
    {
      id: 'a2-verben-praesens-adv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он спит долго."',
      prompt: 'Он спит долго.',
      languageDirection: 'to_german',
      correctAnswer: 'Er schläft lange.',
      explanation: 'Глагол "schlafen" (спать) - сильный, корневая гласная "a" меняется на "ä" в 3-м лице ед.ч. (er). Окончание "-t". Получается "er schläft".',
    },
    {
      id: 'a2-verben-praesens-adv-ex4',
      type: 'multiple_choice',
      question: 'Какая форма глагола "finden" (находить) верна для "er/sie/es"?',
      options: ['findt', 'findet', 'findst', 'find'],
      correctAnswer: 'findet',
      explanation: 'Основа глагола "finden" заканчивается на -d, поэтому для 3-го лица ед.ч. добавляется -et для благозвучия: "findet".',
    },
    {
      id: 'a2-verben-praesens-adv-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "sein": Wir ___ Freunde.',
      sentenceParts: ['Wir ', ' Freunde.'],
      correctAnswer: 'sind',
      explanation: 'Глагол "sein" (быть) имеет особую форму спряжения. Для "wir" (мы) это форма "sind".',
    },
    {
      id: 'a2-verben-praesens-adv-ex6',
      type: 'multiple_choice',
      question: 'Какая форма глагола "reisen" (путешествовать) верна для "du"?',
      options: ['reist', 'reises', 'reisst', 'reisen'],
      correctAnswer: 'reist',
      explanation: 'Основа глагола "reisen" заканчивается на -s. Во 2-м лице ед.ч. (du) окончание будет "-t" (а не "-st"), так как "s" уже есть: du reist.',
    },
    {
      id: 'a2-verben-praesens-adv-ex7',
      type: 'translation',
      question: 'Переведите на немецкий: "У вас (вежл. форма) есть машина?"',
      prompt: 'У вас (вежл. форма) есть машина?',
      languageDirection: 'to_german',
      correctAnswer: 'Haben Sie ein Auto?',
      explanation: 'Глагол "haben" (иметь) для вежливой формы "Sie" (Вы) имеет форму "haben". Порядок слов в вопросе: глагол - подлежащее.',
    }
  ],
};

// --- Урок A2: Образование множественного числа существительных (Pluralbildung) (углубленно) ---
const lessonA2Pluralbildung: Lesson = {
  id: 'a2-pluralbildung',
  level: 'A2',
  topic: 'Образование множественного числа существительных (Pluralbildung) (углубленно)',
  theory: `Образование множественного числа в немецком языке – одна из сложных тем, так как существует несколько моделей и много исключений. Однако есть определенные закономерности. Определенный артикль для всех существительных во множественном числе всегда **die**.

**Основные модели образования множественного числа:**

**1. Окончание -e:**
   - Многие односложные существительные мужского рода (часто с умлаутом корневой гласной a, o, u → ä, ö, ü).
     Примеры: der Tag → die Tag**e** (день), der Sohn → die S**ö**hn**e** (сын), der Stuhl → die St**ü**hl**e** (стул), der Gast → die G**ä**st**e** (гость), der Hund → die Hund**e** (собака).
   - Некоторые существительные среднего рода (реже с умлаутом).
     Примеры: das Jahr → die Jahr**e** (год), das Heft → die Heft**e** (тетрадь), das Bein → die Bein**e** (нога), das Schiff → die Schiff**e** (корабль).
   - Некоторые существительные женского рода (часто с умлаутом).
     Примеры: die Hand → die H**ä**nd**e** (рука), die Nacht → die N**ä**cht**e** (ночь), die Stadt → die St**ä**dt**e** (город), die Nuss → die N**ü**ss**e** (орех).

**2. Окончание -(e)n:**
   - **Большинство** существительных женского рода, особенно многосложные или оканчивающиеся на:
     - **-e**: die Lampe → die Lampe**n** (лампа), die Tasche → die Tasche**n** (сумка)
     - **-ei**: die Bäckerei → die Bäckerei**en** (пекарня)
     - **-heit**: die Freiheit → die Freiheit**en** (свобода)
     - **-keit**: die Möglichkeit → die Möglichkeit**en** (возможность)
     - **-schaft**: die Freundschaft → die Freundschaft**en** (дружба)
     - **-ung**: die Zeitung → die Zeitung**en** (газета)
     - **-ion**: die Nation → die Nation**en** (нация)
     - **-tät**: die Universität → die Universität**en** (университет)
     - **-ur**: die Kultur → die Kultur**en** (культура)
     - Также многие другие, например: die Frau → die Frau**en** (женщина), die Tür → die Tür**en** (дверь).
   - Существительные мужского рода так называемого "слабого склонения" (n-Deklination). Эти существительные получают окончание -(e)n во всех падежах кроме Nominativ Singular. Во множественном числе они также имеют -(e)n.
     Примеры: der Junge → die Junge**n** (мальчик), der Kunde → die Kunde**n** (клиент), der Name → die Name**n** (имя), der Mensch → die Mensch**en** (человек), der Präsident → die Präsident**en** (президент).
   - Некоторые существительные среднего рода, особенно заимствованные или оканчивающиеся на -e.
     Примеры: das Auge → die Auge**n** (глаз), das Bett → die Bett**en** (кровать), das Interesse → die Interesse**n** (интерес), das Ende → die Ende**n** (конец).
     Исключения: das Käse (сыр) -> die Käse (без изменения)

**3. Окончание -er:**
   - Многие односложные существительные среднего рода (почти всегда с умлаутом, если он возможен у корневой гласной a, o, u).
     Примеры: das Kind → die Kind**er** (ребенок), das Buch → die B**ü**ch**er** (книга), das Haus → die H**ä**us**er** (дом), das Land → die L**ä**nd**er** (страна), das Licht -> die Licht**er** (свет, огни).
   - Некоторые существительные мужского рода (также часто с умлаутом).
     Примеры: der Mann → die M**ä**nn**er** (мужчина), der Wald → die W**ä**ld**er** (лес), der Geist → die Geist**er** (дух), der Gott -> die Gött**er** (бог).

**4. Окончание -s:**
   - Многие заимствованные слова, особенно из английского и французского языков, оканчивающиеся на гласные -a, -i, -o, -u, -y или на некоторые согласные.
     Примеры: das Auto → die Auto**s** (автомобиль), das Hotel → die Hotel**s** (отель), das Hobby → die Hobby**s** (хобби), das Team → die Team**s** (команда), der Job → die Job**s** (работа), das Kino -> die Kino**s** (кинотеатр), das Büro -> die Büro**s** (офис).
   - Сокращения и аббревиатуры.
     Примеры: der PKW → die PKW**s** (легковой автомобиль), die WG → die WG**s** (коммунальная квартира), der LKW -> die LKW**s** (грузовик).
   - Некоторые немецкие существительные, оканчивающиеся на гласную (кроме безударной -e).
     Примеры: die Oma → die Oma**s** (бабушка), der Opa → die Opa**s** (дедушка), die Mutti -> die Mutti**s** (мамочка).

**5. Без окончания (нулевое окончание):**
   - Существительные мужского и среднего рода, оканчивающиеся в единственном числе на **-er, -el, -en**.
     - Мужской род часто получает умлаут (если корневая гласная a, o, u).
       Примеры: der Lehrer → die Lehrer (учитель), der Apfel → die **Ä**pfel (яблоко), der Wagen → die Wagen (автомобиль, но чаще die Wägen/Wagen), der Vogel → die V**ö**gel (птица).
     - Средний род обычно умлаут не получает.
       Примеры: das Mädchen → die Mädchen (девочка), das Zimmer → die Zimmer (комната), das Fenster → die Fenster (окно), das Messer -> die Messer (нож).
   - Некоторые другие существительные, например, das Gebäude -> die Gebäude (здание).

**Важные моменты:**
-   Неопределенный артикль (ein/eine) во множественном числе отсутствует. Вместо него может использоваться слово "viele" (многие), "einige" (некоторые), числительное или просто существительное без артикля.
-   Принадлежность к определенному роду не всегда однозначно указывает на тип образования множественного числа, поэтому форму множественного числа лучше всего запоминать вместе с существительным, его артиклем и значением.
-   Обращайте внимание на словари: там всегда указывается форма множественного числа (часто сокращенно, например, "-e", "-en", "-¨er").

Запоминание форм множественного числа требует практики и внимания к деталям. Создавайте ассоциации и старайтесь использовать слова во множественном числе в контексте.`,
  vocabulary: [
    { german: 'der Tag, die Tage', russian: 'день, дни', example: 'Ich arbeite fünf Tage die Woche.' },
    { german: 'die Frau, die Frauen', russian: 'женщина, женщины', example: 'Viele Frauen arbeiten hier.' },
    { german: 'das Kind, die Kinder', russian: 'ребенок, дети', example: 'Die Kinder spielen im Park.' },
    { german: 'das Auto, die Autos', russian: 'автомобиль, автомобили', example: 'Auf der Straße stehen viele Autos.' },
    { german: 'der Apfel, die Äpfel', russian: 'яблоко, яблоки', example: 'Ich kaufe drei Äpfel.' },
    { german: 'der Lehrer, die Lehrer', russian: 'учитель, учителя (м.р.)', example: 'Die Lehrer sind sehr nett.' },
    { german: 'das Buch, die Bücher', russian: 'книга, книги', example: 'In der Bibliothek gibt es viele Bücher.' },
    { german: 'die Stadt, die Städte', russian: 'город, города', example: 'Wir besuchen verschiedene Städte.' },
    { german: 'der Junge, die Jungen', russian: 'мальчик, мальчики (слабое склонение)', example: 'Die Jungen spielen Fußball.' },
    { german: 'das Mädchen, die Mädchen', russian: 'девочка, девочки (окончание -chen)', example: 'Die Mädchen singen Lieder.' },
    { german: 'die Hand, die Hände', russian: 'рука (кисть), руки (окончание -e, умлаут)' },
    { german: 'der Stuhl, die Stühle', russian: 'стул, стулья (окончание -e, умлаут)' },
    { german: 'die Tür, die Türen', russian: 'дверь, двери (окончание -en)' },
    { german: 'das Zimmer, die Zimmer', russian: 'комната, комнаты (окончание -er, -el, -en, без изменения)' },
    { german: 'das Hobby, die Hobbys', russian: 'хобби, хобби (мн.ч., окончание -s)' },
    { german: 'die Zeitung, die Zeitungen', russian: 'газета, газеты (окончание -ung -> -ungen)' }
  ],
  exercises: [
    {
      id: 'a2-plural-adv-ex1',
      type: 'multiple_choice',
      question: 'Какое множественное число у слова "das Haus" (дом, ср.р.)?',
      options: ['die Hause', 'die Hausen', 'die Häuser', 'die Hauses'],
      correctAnswer: 'die Häuser',
      explanation: 'Слово "das Haus" (ср.р.) образует множественное число с окончанием -er и умлаутом корневой гласной "a" на "ä": die Häuser.',
    },
    {
      id: 'a2-plural-adv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму мн.ч.: Zwei ___ (Katze, f) spielen im Garten.',
      sentenceParts: ['Zwei ', ' spielen im Garten.'],
      correctAnswer: 'Katzen',
      explanation: 'Множественное число от "die Katze" (ж.р.) - "die Katzen" (окончание -n, так как основа на -e).',
    },
    {
      id: 'a2-plural-adv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Эти яблоки красные."',
      prompt: 'Эти яблоки красные.',
      languageDirection: 'to_german',
      correctAnswer: 'Diese Äpfel sind rot.',
      explanation: '"Der Apfel" (м.р., оканчивается на -el) во множественном числе "die Äpfel" (умлаут корневой гласной, без изменения окончания -el).',
    },
    {
      id: 'a2-plural-adv-ex4',
      type: 'multiple_choice',
      question: 'Как будет "стол" (der Tisch, м.р.) во множественном числе?',
      options: ['die Tischen', 'die Tische', 'die Tischer', 'die Tischs'],
      correctAnswer: 'die Tische',
      explanation: 'Слово "der Tisch" (м.р.) образует множественное число с окончанием -e: die Tische.',
    },
    {
      id: 'a2-plural-adv-ex5',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число слова "das Foto" (фото, ср.р.): Viele ___ hängen an der Wand.',
      sentenceParts: ['Viele ', ' hängen an der Wand.'],
      correctAnswer: 'Fotos',
      explanation: 'Заимствованное слово "das Foto" (ср.р.), оканчивающееся на -o, образует множественное число с окончанием -s: die Fotos.',
    },
    {
      id: 'a2-plural-adv-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильное множественное число для "der Bruder" (брат, м.р.):',
      options: ['die Brudern', 'die Brüder', 'die Bruder', 'die Bruders'],
      correctAnswer: 'die Brüder',
      explanation: 'Слово "der Bruder" (м.р., оканчивается на -er) образует множественное число с умлаутом корневой гласной "u" на "ü" без дополнительного окончания: die Brüder.',
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
};

// --- Урок A2: Прошедшее время Perfekt ---
const lessonA2Perfekt: Lesson = {
  id: 'a2-perfekt',
  level: 'A2',
  topic: 'Прошедшее время Perfekt',
  theory: `Perfekt – это сложное (составное) прошедшее время, которое используется для описания завершенных действий в прошлом. В устной речи это наиболее употребительное время для рассказа о прошлом.

**1. Образование Perfekt:**
Perfekt образуется с помощью вспомогательного глагола **haben** или **sein** в настоящем времени (Präsens) и **Partizip II** (причастия II) смыслового глагола.
Формула: **haben/sein (в Präsens) + Partizip II**

Порядок слов:
- В простом повествовательном предложении вспомогательный глагол стоит на втором месте, а Partizip II – в конце предложения.
  *Пример: Ich **habe** ein Buch **gelesen**.* (Я прочитал книгу.)
- В вопросительном предложении без вопросительного слова вспомогательный глагол стоит на первом месте.
  *Пример: **Hast** du das Buch **gelesen**?* (Ты прочитал книгу?)
- В придаточном предложении вспомогательный глагол стоит в самом конце, перед ним – Partizip II.
  *Пример: ..., weil ich das Buch **gelesen habe**.* (...потому что я прочитал книгу.)


**2. Выбор вспомогательного глагола: haben или sein?**

*   **С глаголом sein Perfekt образуют:**
    1.  **Глаголы движения**, обозначающие перемещение из одной точки в другую:
        *   gehen (идти) → ist gegangen
        *   fahren (ехать) → ist gefahren
        *   fliegen (лететь) → ist geflogen
        *   kommen (приходить) → ist gekommen
        *   laufen (бежать) → ist gelaufen
        *   reisen (путешествовать) → ist gereist
        *   schwimmen (плыть) → ist geschwommen (если есть указание на направление или цель)
    2.  **Глаголы изменения состояния**:
        *   aufstehen (вставать) → ist aufgestanden
        *   einschlafen (засыпать) → ist eingeschlafen
        *   sterben (умирать) → ist gestorben
        *   wachsen (расти) → ist gewachsen
        *   aufwachen (просыпаться) → ist aufgewacht
    3.  **Глаголы**:
        *   **sein** (быть) → ist gewesen (Я был – Ich bin gewesen)
        *   **bleiben** (оставаться) → ist geblieben (Я остался – Ich bin geblieben)
        *   **werden** (становиться) → ist geworden (Он стал врачом – Er ist Arzt geworden)
        *   passieren (случаться) → ist passiert
        *   geschehen (происходить) → ist geschehen

*   **С глаголом haben Perfekt образуют:**
    1.  **Большинство других глаголов**, включая:
        *   **Все переходные глаголы** (те, которые требуют прямого дополнения в Akkusativ): lesen (читать что-то), sehen (видеть что-то), kaufen (покупать что-то), machen (делать что-то).
            *Пример: Ich habe einen Brief **geschrieben**.* (Я написал письмо.)
        *   **Все возвратные глаголы** (с частицей sich): sich waschen (мыться), sich freuen (радоваться).
            *Пример: Er hat **sich** gefreut.* (Он обрадовался.)
        *   **Модальные глаголы** (können, müssen, dürfen, wollen, sollen, mögen), когда они употребляются самостоятельно (без другого инфинитива) или когда Partizip II заменяется инфинитивом в конструкциях с другим инфинитивом (что более характерно для B1 и выше). Для A2 достаточно знать: *Ich habe das gekonnt.* (Я это смог).
        *   **Безличные глаголы**, выражающие состояние природы (если нет изменения состояния): regnen (дождить), schneien (снежить).
            *Пример: Es hat gestern **geregnet**.* (Вчера шел дождь.)
        *   Многие другие непереходные глаголы, не обозначающие движение или изменение состояния: arbeiten (работать), schlafen (спать), spielen (играть), helfen (помогать).

**3. Образование Partizip II:**

*   **Слабые (регулярные) глаголы:**
    Образуют Partizip II по формуле: **ge- + основа глагола + -(e)t**
    *   machen → **ge**mach**t**
    *   lernen → **ge**lern**t**
    *   spielen → **ge**spiel**t**
    *   arbeiten → arbeit + et → **ge**arbeit**et** (если основа заканчивается на -t, -d, -chn, -ffn, -gn, -tm)
    *   **Глаголы с неотделяемыми приставками** (be-, ge-, er-, ver-, zer-, ent-, emp-, miss-) образуют Partizip II **без приставки ge-**:
        *   besuchen → besuch**t**
        *   erzählen → erzähl**t**
    *   **Глаголы, оканчивающиеся на -ieren**, образуют Partizip II **без приставки ge-** и с окончанием **-t**:
        *   studieren → studier**t**
        *   fotografieren → fotografier**t**

*   **Сильные (нерегулярные) глаголы:**
    Образуют Partizip II по формуле: **ge- + (часто измененная) основа глагола + -en**
    Формы Partizip II сильных глаголов нужно запоминать!
    *   sehen → **ge**seh**en**
    *   sprechen → **ge**sproch**en**
    *   schreiben → **ge**schrieb**en**
    *   trinken → **ge**trunk**en**
    *   helfen → **ge**holf**en**
    *   **Сильные глаголы с отделяемыми приставками**: приставка \`ge-\` ставится между отделяемой приставкой и корнем.
        *   aufstehen → auf**ge**stand**en**
        *   mitkommen → mit**ge**komm**en**
    *   **Сильные глаголы с неотделяемыми приставками** образуют Partizip II **без приставки ge-**, но с изменением корня и окончанием **-en**:
        *   verstehen → verstand**en**
        *   beginnen → begonn**en**

*   **Смешанные глаголы (Mischverben):**
    Имеют признаки слабых (окончание -t) и сильных (изменение корневой гласной) глаголов.
    *   denken → **ge**dach**t**
    *   bringen → **ge**brach**t**
    *   kennen → **ge**kann**t**
    *   wissen → **ge**wuss**t**

Запоминание форм Partizip II и правильный выбор вспомогательного глагола являются ключом к успешному использованию времени Perfekt.`,
  vocabulary: [
    { german: 'machen (hat gemacht)', russian: 'делать (сделал)', example: 'Ich habe meine Hausaufgaben gemacht.' },
    { german: 'lernen (hat gelernt)', russian: 'учить (учил)', example: 'Wir haben Deutsch gelernt.' },
    { german: 'spielen (hat gespielt)', russian: 'играть (играл)', example: 'Die Kinder haben im Park gespielt.' },
    { german: 'arbeiten (hat gearbeitet)', russian: 'работать (работал)', example: 'Er hat viel gearbeitet.' },
    { german: 'kaufen (hat gekauft)', russian: 'покупать (купил)', example: 'Sie hat ein Kleid gekauft.' },
    { german: 'kochen (hat gekocht)', russian: 'готовить (готовил)', example: 'Meine Mutter hat Suppe gekocht.' },
    { german: 'hören (hat gehört)', russian: 'слышать, слушать (слышал)', example: 'Hast du die Musik gehört?' },
    { german: 'sagen (hat gesagt)', russian: 'говорить, сказать (сказал)', example: 'Was hat er gesagt?' },
    { german: 'fragen (hat gefragt)', russian: 'спрашивать (спросил)', example: 'Ich habe ihn gefragt.' },
    { german: 'studieren (hat studiert)', russian: 'учиться (в вузе) (учился)', example: 'Er hat in Berlin studiert.' },
    { german: 'fotografieren (hat fotografiert)', russian: 'фотографировать (фотографировал)', example: 'Wir haben viele Fotos fotografiert.' },

    { german: 'gehen (ist gegangen)', russian: 'идти (шел)', example: 'Ich bin ins Kino gegangen.' },
    { german: 'fahren (ist gefahren)', russian: 'ехать (ехал)', example: 'Sie ist nach Deutschland gefahren.' },
    { german: 'fliegen (ist geflogen)', russian: 'лететь (летел)', example: 'Wir sind nach Spanien geflogen.' },
    { german: 'kommen (ist gekommen)', russian: 'приходить (пришел)', example: 'Er ist gestern gekommen.' },
    { german: 'aufstehen (ist aufgestanden)', russian: 'вставать (встал)', example: 'Ich bin um 7 Uhr aufgestanden.' },
    { german: 'bleiben (ist geblieben)', russian: 'оставаться (остался)', example: 'Er ist zu Hause geblieben.' },
    { german: 'sein (ist gewesen)', russian: 'быть (был)', example: 'Wo bist du gewesen?' },

    { german: 'lesen (hat gelesen)', russian: 'читать (читал)', example: 'Ich habe das Buch gelesen.' },
    { german: 'sehen (hat gesehen)', russian: 'видеть (видел)', example: 'Hast du den Film gesehen?' },
    { german: 'schreiben (hat geschrieben)', russian: 'писать (писал)', example: 'Sie hat einen Brief geschrieben.' },
    { german: 'sprechen (hat gesprochen)', russian: 'говорить (говорил)', example: 'Wir haben lange gesprochen.' },
    { german: 'trinken (hat getrunken)', russian: 'пить (пил)', example: 'Er hat Kaffee getrunken.' },
    { german: 'essen (hat gegessen)', russian: 'есть (ел)', example: 'Was habt ihr gegessen?' },
    { german: 'helfen (hat geholfen)', russian: 'помогать (помог)', example: 'Er hat mir geholfen.' },
    { german: 'nehmen (hat genommen)', russian: 'брать (взял)', example: 'Ich habe den Bus genommen.' },
    { german: 'geben (hat gegeben)', russian: 'давать (дал)', example: 'Sie hat mir ein Geschenk gegeben.' },
    { german: 'schlafen (hat geschlafen)', russian: 'спать (спал)', example: 'Das Baby hat gut geschlafen.' },
    { german: 'verstehen (hat verstanden)', russian: 'понимать (понял)', example: 'Hast du alles verstanden?' },
    { german: 'Partizip II', russian: 'Причастие II (для Perfekt)' },
    { german: 'Hilfsverb (haben/sein)', russian: 'Вспомогательный глагол (haben/sein)' },
  ],
  exercises: [
    {
      id: 'a2-perfekt-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный вспомогательный глагол для Perfekt: Ich ___ gestern ins Kino ___. (gehen)',
      options: ['habe ... gegangen', 'bin ... gegangen', 'habe ... gegeht', 'bin ... gegeht'],
      correctAnswer: 'bin ... gegangen',
      explanation: 'Глагол "gehen" (идти) - это глагол движения, поэтому Perfekt образуется с вспомогательным глаголом "sein". Partizip II от "gehen" - "gegangen".',
    },
    {
      id: 'a2-perfekt-ex2',
      type: 'fill_in_the_blank',
      question: 'Образуйте Partizip II от глагола "lernen": ge___t',
      sentenceParts: ['ge', 't'],
      correctAnswer: 'lern',
      explanation: '"lernen" - слабый глагол. Partizip II: ge + lern + t = gelernt.',
    },
    {
      id: 'a2-perfekt-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Perfekt): "Он купил новую машину."',
      prompt: 'Он купил новую машину.',
      languageDirection: 'to_german',
      correctAnswer: 'Er hat ein neues Auto gekauft.',
      explanation: 'Глагол "kaufen" (покупать) образует Perfekt с "haben". Partizip II - "gekauft".',
    },
    {
      id: 'a2-perfekt-ex4',
      type: 'multiple_choice',
      question: 'Какое Partizip II у глагола "sehen" (видеть)?',
      options: ['geseht', 'gesehen', 'gesieht', 'gesah'],
      correctAnswer: 'gesehen',
      explanation: '"sehen" - сильный глагол. Его Partizip II - "gesehen". Эту форму нужно запомнить.',
    },
    {
      id: 'a2-perfekt-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму Perfekt: Wir ___ gestern viel ___. (arbeiten)',
      sentenceParts: ['Wir ', ' gestern viel ', '.'],
      correctAnswer: 'haben, gearbeitet',
      explanation: 'Глагол "arbeiten" (работать) образует Perfekt с "haben". Partizip II - "gearbeitet". "Wir haben gestern viel gearbeitet."',
    },
    {
      id: 'a2-perfekt-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение в Perfekt: "Я остался дома."',
      options: ['Ich habe zu Hause geblieben.', 'Ich bin zu Hause geblieben.', 'Ich bin zu Hause gebleiben.', 'Ich habe zu Hause gebleiben.'],
      correctAnswer: 'Ich bin zu Hause geblieben.',
      explanation: 'Глагол "bleiben" (оставаться) образует Perfekt с "sein". Partizip II - "geblieben".',
    },
    {
      id: 'a2-perfekt-ex7',
      type: 'translation',
      question: 'Переведите на немецкий (используя Perfekt): "Что ты вчера делал?"',
      prompt: 'Что ты вчера делал?',
      languageDirection: 'to_german',
      correctAnswer: 'Was hast du gestern gemacht?',
      explanation: 'Вопросительное слово "Was" на первом месте, затем вспомогательный глагол "hast", подлежащее "du", обстоятельство времени "gestern", Partizip II "gemacht" в конце.',
    },
    {
      id: 'a2-perfekt-ex8',
      type: 'fill_in_the_blank',
      question: 'Образуйте Partizip II от глагола "studieren": studier___',
      sentenceParts: ['studier', ''],
      correctAnswer: 't',
      explanation: 'Глаголы на -ieren образуют Partizip II без приставки ge- и с окончанием -t: studiert.',
    },
  ],
};

// --- Урок B1: Придаточные предложения (Nebensätze) (углубленно) ---
const lessonB1Nebensaetze: Lesson = {
  id: 'b1-nebensaetze',
  level: 'B1',
  topic: 'Придаточные предложения (Nebensätze) (углубленно)',
  theory: `Придаточные предложения (Nebensätze) – это зависимые предложения, которые не могут существовать самостоятельно и всегда относятся к главному предложению (Hauptsatz), уточняя или дополняя его. Они играют роль различных членов предложения.

**Основное правило порядка слов:** В придаточных предложениях спрягаемый глагол (тот, который изменяется по лицам и числам) всегда стоит **в самом конце предложения**. Если в предложении есть отделяемая приставка, она соединяется с глаголом в конце. Если есть модальный глагол и инфинитив смыслового глагола, то модальный глагол стоит в конце, а инфинитив – перед ним.

Придаточные предложения всегда отделяются от главного предложения запятой.

**Типы придаточных предложений и союзы (Subjunktionen), вводящие их:**

**1. Kausalsätze (Придаточные причины) – Warum? Weshalb? (Почему? Отчего? По какой причине?)**
   Объясняют причину действия в главном предложении.
   - **weil** (потому что, так как – вводит причину, которая часто неизвестна собеседнику или является основной):
     *Ich lerne Deutsch, **weil** ich in Deutschland arbeiten möchte.* (Я учу немецкий, потому что хочу работать в Германии.)
     *Wir bleiben zu Hause, **weil** das Wetter schlecht ist.* (Мы остаемся дома, потому что погода плохая.)
   - **da** (так как, поскольку – вводит причину, которая обычно уже известна собеседнику, очевидна, или когда придаточное стоит перед главным):
     ***Da** das Wetter schlecht ist, bleiben wir zu Hause.* (Так как погода плохая, мы остаемся дома.)
     *Er kann heute nicht kommen, **da** er krank ist.* (Он не может сегодня прийти, так как он болен. – причина уже упоминалась или ясна).

**2. Finalsätze (Придаточные цели) – Wozu? Mit welcher Absicht? (Для чего? С какой целью?)**
   Указывают на цель действия в главном предложении.
   - **damit** (чтобы – используется, когда подлежащие (субъекты действия) в главном и придаточном предложениях разные):
     *Ich gebe dir Geld, **damit** du dir ein Buch kaufen kannst.* (Я даю тебе деньги, чтобы ты мог купить себе книгу.) (Подлежащие: ich, du)
     *Die Eltern arbeiten viel, **damit** ihre Kinder eine gute Ausbildung bekommen.* (Родители много работают, чтобы их дети получили хорошее образование.) (Подлежащие: die Eltern, ihre Kinder)
   - **um...zu + Infinitiv** (чтобы – используется, когда подлежащее в главном и придаточном предложениях совпадает. Конструкция: \`um\` + (дополнения/обстоятельства) + \`zu\` + Infinitiv смыслового глагола в конце):
     *Ich lerne Deutsch, **um** in Deutschland arbeiten **zu** können.* (Я учу немецкий, чтобы мочь работать в Германии.) (Подлежащее: ich)
     *Sie treibt Sport, **um** fit **zu** bleiben.* (Она занимается спортом, чтобы оставаться в форме.) (Подлежащее: sie)

**3. Konzessivsätze (Придаточные уступки) – Trotz welchen Umstands? (Несмотря на какое обстоятельство?)**
   Указывают на обстоятельство, вопреки которому совершается действие в главном предложении.
   - **obwohl / obgleich / obschon** (хотя, несмотря на то что – \`obgleich\` и \`obschon\` более книжные):
     ***Obwohl** es regnet, gehen wir spazieren.* (Хотя идет дождь, мы идем гулять.)
     *Er kam zur Party, **obgleich** er sehr müde war.* (Он пришел на вечеринку, хотя был очень уставшим.)
     *Sie hat die Prüfung bestanden, **obwohl** sie nicht viel gelernt hatte.* (Она сдала экзамен, хотя не много учила.)

**4. Konditionalsätze (Придаточные условия) – Unter welcher Bedingung? (При каком условии?)**
   Выражают условие, при котором возможно или происходит действие в главном предложении.
   - **wenn** (если, когда – для реальных, выполнимых условий в настоящем или будущем, а также для повторяющихся действий в прошлом):
     ***Wenn** du Zeit hast, können wir uns treffen.* (Если у тебя будет время, мы можем встретиться.)
     *Ich helfe dir, **wenn** du mich darum bittest.* (Я помогу тебе, если ты меня об этом попросишь.)
     *Immer **wenn** er kam, brachte er Blumen mit.* (Всегда, когда он приходил, он приносил цветы. – повторяющееся в прошлом)
   - **falls** (в случае если, если – выражает условие, которое говорящий считает менее вероятным или гипотетическим):
     ***Falls** es morgen schneit, fahren wir nicht Ski.* (Если (вдруг) завтра пойдет снег, мы не поедем кататься на лыжах.)
     *Nimm einen Schirm mit, **falls** es regnen sollte.* (Возьми зонт, если (на случай если) пойдет дождь.)

**5. Temporalsätze (Придаточные времени) – Wann? Wie lange? Seit wann? Bis wann? (Когда? Как долго? С каких пор? До каких пор?)**
   Указывают на время совершения действия.
   - **als** (когда – для однократного, завершенного действия или периода в прошлом):
     ***Als** ich ein Kind war, spielte ich oft im Garten.* (Когда я был ребенком, я часто играл в саду.)
     ***Als** er gestern ankam, war es schon dunkel.* (Когда он вчера приехал, было уже темно.)
   - **wenn** (когда – для многократных, повторяющихся действий в прошлом, а также для действий в настоящем и будущем времени):
     *Immer **wenn** er lachte, freute ich mich.* (Всегда, когда он смеялся, я радовался.)
     ***Wenn** ich nach Hause komme, koche ich etwas.* (Когда я прихожу домой, я готовлю что-нибудь.)
   - **während** (в то время как, пока – указывает на одновременность двух длительных действий):
     ***Während** ich koche, hört mein Mann Musik.* (Пока я готовлю, мой муж слушает музыку.)
   - **bevor / ehe** (прежде чем, до того как – \`ehe\` более книжное):
     ***Bevor** du gehst, räume dein Zimmer auf.* (Прежде чем ты уйдешь, убери свою комнату.)
     *Wir müssen die Fahrkarten kaufen, **ehe** der Zug abfährt.* (Мы должны купить билеты, до того как поезд отправится.)
   - **nachdem** (после того как – действие в придаточном предложении предшествует действию в главном. Часто используется правило согласования времен: Plusquamperfekt в придаточном + Präteritum/Perfekt в главном, или Perfekt в придаточном + Präsens в главном):
     ***Nachdem** ich gegessen hatte, ging ich spazieren.* (После того как я поел, я пошел гулять.)
     ***Nachdem** er die Arbeit beendet hat, kann er sich ausruhen.* (После того как он закончит работу, он может отдохнуть.)
   - **seit / seitdem** (с тех пор как – указывает на начало действия или состояния, которое продолжается до момента речи):
     ***Seit** ich in Berlin wohne, habe ich viele Freunde gefunden.* (С тех пор как я живу в Берлине, я нашел много друзей.)
   - **bis** (до тех пор пока, пока не – указывает на конечный момент действия):
     *Warte hier, **bis** ich zurückkomme.* (Жди здесь, пока я не вернусь.)
     *Er arbeitete, **bis** er müde war.* (Он работал, пока не устал.)
   - **solange** (пока, в течение того времени как – указывает на одновременность и длительность):
     ***Solange** du hier bist, kannst du mir helfen.* (Пока ты здесь, ты можешь мне помочь.)
     ***Solange** es regnet, bleiben wir drinnen.* (Пока идет дождь, мы остаемся внутри.)

**6. Modalsätze (Придаточные образа действия) – Wie? Auf welche Weise? (Как? Каким образом?)**
   Описывают способ или обстоятельство совершения действия.
   - **indem** (тем что, таким образом что, посредством того что):
     *Er half mir, **indem** er mir Ratschläge gab.* (Он помог мне тем, что дал советы.)
     *Man lernt eine Sprache am besten, **indem** man sie oft spricht.* (Язык лучше всего учится тем, что на нем часто говорят.)
   - **ohne...zu + Infinitiv** (не + деепричастие; без того чтобы – действие в главном предложении происходит без действия, выраженного инфинитивом. Подлежащие совпадают):
     *Er ging weg, **ohne** ein Wort **zu** sagen.* (Он ушел, не сказав ни слова.)
   - **(an)statt...zu + Infinitiv** (вместо того чтобы – действие в главном предложении происходит вместо действия, выраженного инфинитивом. Подлежащие совпадают):
     ***Anstatt** fernzusehen, sollte er lieber lernen.* (Вместо того чтобы смотреть телевизор, ему следовало бы лучше учиться.)

**7. Dass-Sätze (Изъяснительные придаточные)**
   Выполняют роль дополнения или подлежащего.
   - **dass** (что, чтобы): часто используются после глаголов говорения (sagen, erzählen), мышления (denken, glauben, meinen, wissen), чувств (fühlen, hoffen, bedauern), восприятия (sehen, hören), а также после безличных выражений (es ist wichtig/gut/schade/klar, dass...).
     *Ich weiß, **dass** du Recht hast.* (Я знаю, что ты прав.)
     *Es ist wichtig, **dass** du pünktlich kommst.* (Важно, чтобы ты пришел вовремя.)
     *Er sagte, **dass** er müde sei.* (Он сказал, что он устал. – здесь \`sei\` это Konjunktiv I)

**8. Indirekte Fragesätze (Косвенные вопросы)**
   Передают вопрос в косвенной форме.
   - **ob** (ли – для общих вопросов, на которые можно ответить "да" или "нет"):
     *Er fragt, **ob** du morgen Zeit hast.* (Он спрашивает, есть ли у тебя завтра время.)
     *Ich möchte wissen, **ob** der Film schon begonnen hat.* (Я хочу знать, начался ли уже фильм.)
   - **Вопросительные слова (W-Fragen): wer, was, wann, wo, warum, wie, welcher, etc.** (кто, что, когда, где, почему, как, какой и т.д. – для специальных вопросов):
     *Sie möchte wissen, **wann** der Zug ankommt.* (Она хотела бы знать, когда прибывает поезд.)
     *Ich verstehe nicht, **warum** er das gesagt hat.* (Я не понимаю, почему он это сказал.)

Понимание и правильное использование придаточных предложений значительно обогащает речь и является ключевым навыком для уровня B1 и выше. Обращайте внимание на союзы и порядок слов!`,
  audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_nebensaetze_b1.mp3',
  transcript: 'Weil, dass, ob, wenn. Ich weiß nicht, ob er kommt. Wenn das Wetter gut ist, gehen wir spazieren. Nachdem ich gegessen hatte, fühlte ich mich besser.',
  vocabulary: [
    { german: 'weil', russian: 'потому что, так как (причина)', example: 'Ich bleibe zu Hause, weil es regnet.' },
    { german: 'da', russian: 'так как, поскольку (причина, часто в начале)', example: 'Da er krank ist, kommt er nicht.' },
    { german: 'dass', russian: 'что, чтобы (изъяснительное)', example: 'Ich hoffe, dass du bald kommst.' },
    { german: 'ob', russian: 'ли (косвенный общий вопрос)', example: 'Ich frage mich, ob das richtig ist.' },
    { german: 'wenn', russian: 'если (условие); когда (повторяющееся/будущее время)', example: 'Wenn ich Zeit habe, besuche ich dich.' },
    { german: 'als', russian: 'когда (однократное действие в прошлом)', example: 'Als ich jung war, lebte ich auf dem Land.' },
    { german: 'obwohl', russian: 'хотя, несмотря на то что (уступка)', example: 'Obwohl er müde war, arbeitete er weiter.' },
    { german: 'damit', russian: 'чтобы (цель, разные подлежащие)', example: 'Lerne gut, damit du die Prüfung bestehst.' },
    { german: 'um...zu + Infinitiv', russian: 'чтобы (цель, одно подлежащее)', example: 'Ich spare Geld, um ein Auto zu kaufen.' },
    { german: 'während', russian: 'в то время как, пока (одновременность)', example: 'Während sie liest, kocht er.' },
    { german: 'nachdem', russian: 'после того как (предшествование)', example: 'Nachdem er gegessen hatte, ging er schlafen.' },
    { german: 'bevor / ehe', russian: 'прежде чем, до того как', example: 'Bevor du sprichst, denke nach.' },
    { german: 'seit / seitdem', russian: 'с тех пор как (начало и продолжение)', example: 'Seitdem er hier wohnt, ist er glücklicher.' },
    { german: 'bis', russian: 'до тех пор пока, пока не (конечный момент)', example: 'Warte, bis ich fertig bin.' },
    { german: 'solange', russian: 'пока, в течение того времени как (одновременность и длительность)', example: 'Solange es nicht regnet, können wir draußen bleiben.' },
    { german: 'falls', russian: 'в случае если, если (менее вероятно)', example: 'Falls du ihn siehst, grüß ihn von mir.' },
    { german: 'indem', russian: 'тем что, таким образом что (образ действия)', example: 'Man lernt eine Sprache, indem man viel spricht.' },
    { german: 'der Nebensatz (-sätze)', russian: 'придаточное предложение' },
    { german: 'der Hauptsatz (-sätze)', russian: 'главное предложение' },
    { german: 'die Subjunktion (-en) / der Konjunktor (-en)', russian: 'подчинительный союз' },
  ],
  exercises: [
    {
      id: 'b1-nebensaetze-adv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный союз: Ich gehe nicht ins Kino, ___ ich keine Zeit habe.',
      options: ['obwohl', 'damit', 'weil', 'wenn'],
      correctAnswer: 'weil',
      explanation: '"weil" (потому что) используется для указания причины отсутствия времени для похода в кино.',
    },
    {
      id: 'b1-nebensaetze-adv-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол в правильную форму в конце придаточного: Er sagt, dass er dich morgen ___ (besuchen).',
      sentenceParts: ['Er sagt, dass er dich morgen ', '.'],
      correctAnswer: 'besucht',
      explanation: 'В придаточном предложении с союзом "dass" спрягаемый глагол "besucht" (3-е л., ед.ч. от besuchen) ставится в самый конец.',
    },
    {
      id: 'b1-nebensaetze-adv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я не знаю, придёт ли он сегодня."',
      prompt: 'Я не знаю, придёт ли он сегодня.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich weiß nicht, ob er heute kommt.',
      explanation: 'Косвенный общий вопрос вводится союзом "ob". Спрягаемый глагол "kommt" (3-е л., ед.ч. от kommen) ставится в конец придаточного предложения.',
    },
    {
      id: 'b1-nebensaetze-adv-ex4',
      type: 'multiple_choice',
      question: 'Какой союз используется для выражения цели, если подлежащие в главном и придаточном предложениях РАЗНЫЕ?',
      options: ['um...zu', 'damit', 'weil', 'obwohl'],
      correctAnswer: 'damit',
      explanation: '"damit" используется для выражения цели, когда субъекты действия (подлежащие) в главном и придаточном предложениях различаются.',
    },
    {
      id: 'b1-nebensaetze-adv-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение правильным союзом (после того как): ___ sie fleißig gelernt hatte, bestand sie die Prüfung.',
      sentenceParts: ['', ' sie fleißig gelernt hatte, bestand sie die Prüfung.'],
      correctAnswer: 'Nachdem',
      explanation: '"Nachdem" (после того как) указывает на действие, предшествующее действию в главном предложении. Глагол "hatte gelernt" (Plusquamperfekt) уже стоит в конце придаточного.',
    },
    {
      id: 'b1-nebensaetze-adv-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Хотя фильм был длинный, он был интересный."',
      prompt: 'Хотя фильм был длинный, он был интересный.',
      languageDirection: 'to_german',
      correctAnswer: 'Obwohl der Film lang war, war er interessant.',
      explanation: '"Obwohl" (хотя) вводит уступительное придаточное предложение. Спрягаемый глагол "war" в придаточном предложении ставится в конец.',
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
      explanation: 'В большинстве придаточных предложений немецкого языка, вводимых подчинительным союзом (как "wenn"), спрягаемый глагол ставится в самый конец.',
    },
    {
      id: 'b1-nebensaetze-adv-ex8',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящий союз и конструкцию для цели (подлежащие совпадают): Ich lerne viel, ___ die Prüfung ___ (bestehen).',
      sentenceParts: ['Ich lerne viel, ', ' die Prüfung ', '.'],
      correctAnswer: 'um, zu bestehen',
      explanation: 'Для выражения цели с совпадающими подлежащими используется конструкция "um ... zu + Infinitiv". "um" ставится перед дополнением, "zu bestehen" в конце. Полностью: Ich lerne viel, um die Prüfung zu bestehen.',
    },
  ],
};

// --- Урок B1: Относительные придаточные предложения (Relativsätze) (углубленно) ---
const lessonB1Relativsaetze: Lesson = {
  id: 'b1-relativsaetze',
  level: 'B1',
  topic: 'Относительные придаточные предложения (Relativsätze) (углубленно)',
  theory: `Относительные придаточные предложения (Relativsätze) – это зависимые предложения, которые дают дополнительную информацию о существительном или местоимении в главном предложении. Существительное или местоимение, к которому относится относительное предложение, называется **антецедентом** (Bezugswort). Относительные предложения всегда отделяются от главного предложения запятыми.

**Основное правило порядка слов:** Как и в других придаточных предложениях, спрягаемый глагол в относительном предложении стоит **в самом конце**.

**1. Относительные местоимения (Relativpronomen)**
В качестве относительных местоимений чаще всего используются формы определенного артикля: **der, die, das** (и их формы в других падежах).
-   **Род (Genus) и число (Numerus)** относительного местоимения определяются родом и числом антецедента в главном предложении.
-   **Падеж (Kasus)** относительного местоимения определяется его синтаксической функцией (подлежащее, прямое/косвенное дополнение и т.д.) **внутри самого относительного предложения**.

**Таблица склонения основных относительных местоимений (der, die, das):**

| Падеж       | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural) |
|-------------|--------------------------|-------------------------|-----------------------|-------------------------------|
| **Nominativ** (кто? что?) | der                      | die                     | das                   | die                           |
| **Akkusativ** (кого? что?) | den                      | die                     | das                   | die                           |
| **Dativ** (кому? чему?)   | dem                      | der                     | dem                   | **denen** + **-n** (к сущ. в Dativ Plural, если требуется)     |
| **Genitiv** (чей? чья? чьё? чьи?) | **dessen**               | **deren**               | **dessen**            | **deren**                     |

*Примечание: Genitiv (родительный падеж) с \`dessen/deren\` очень важен и часто используется для выражения принадлежности.*

**Примеры:**

*   **Nominativ (относительное местоимение – подлежащее в придаточном):**
    *   *Der Mann, **der** dort steht, ist mein Lehrer.* (Мужчина, **который** там стоит, мой учитель.) (Антецедент: Der Mann (м.р., ед.ч.). В придат.: der steht – Nominativ)
    *   *Die Frau, **die** Deutsch lernt, ist sehr fleißig.* (Женщина, **которая** учит немецкий, очень прилежная.) (Антецедент: Die Frau (ж.р., ед.ч.). В придат.: die lernt – Nominativ)
    *   *Das Kind, **das** spielt, lacht.* (Ребенок, **который** играет, смеется.) (Антецедент: Das Kind (ср.р., ед.ч.). В придат.: das spielt – Nominativ)
    *   *Die Bücher, **die** auf dem Tisch liegen, sind neu.* (Книги, **которые** лежат на столе, новые.) (Антецедент: Die Bücher (мн.ч.). В придат.: die liegen – Nominativ)

*   **Akkusativ (относительное местоимение – прямое дополнение в придаточном):**
    *   *Der Film, **den** ich gestern gesehen habe, war spannend.* (Фильм, **который** я вчера видел, был увлекательным.) (Антецедент: Der Film (м.р., ед.ч.). В придат.: ich habe den Film gesehen – Akkusativ)
    *   *Die Tasche, **die** du gekauft hast, gefällt mir.* (Сумка, **которую** ты купила, мне нравится.) (Антецедент: Die Tasche (ж.р., ед.ч.). В придат.: du hast die Tasche gekauft – Akkusativ)
    *   *Das Auto, **das** er repariert, ist alt.* (Машина, **которую** он ремонтирует, старая.) (Антецедент: Das Auto (ср.р., ед.ч.). В придат.: er repariert das Auto – Akkusativ)
    *   *Die Freunde, **die** wir eingeladen haben, kommen bald.* (Друзья, **которых** мы пригласили, скоро придут.) (Антецедент: Die Freunde (мн.ч.). В придат.: wir haben die Freunde eingeladen – Akkusativ)

*   **Dativ (относительное местоимение – косвенное дополнение в придаточном):**
    *   *Der Kollege, **dem** ich geholfen habe, war dankbar.* (Коллега, **которому** я помог, был благодарен.) (Антецедент: Der Kollege (м.р., ед.ч.). В придат.: ich habe dem Kollegen geholfen – Dativ)
    *   *Die Studentin, **der** der Professor eine Frage stellt, antwortet gut.* (Студентка, **которой** профессор задает вопрос, отвечает хорошо.) (Антецедент: Die Studentin (ж.р., ед.ч.). В придат.: der Professor stellt der Studentin eine Frage – Dativ)
    *   *Das Mädchen, **dem** das Fahrrad gehört, ist meine Schwester.* (Девочка, **которой** принадлежит велосипед, моя сестра.) (Антецедент: Das Mädchen (ср.р., ед.ч.). В придат.: das Fahrrad gehört dem Mädchen – Dativ)
    *   *Die Leute, **denen** wir das Geschenk gegeben haben, freuten sich sehr.* (Люди, **которым** мы дали подарок, очень обрадовались.) (Антецедент: Die Leute (мн.ч.). В придат.: wir haben den Leuten das Geschenk gegeben – Dativ. Обратите внимание на окончание **-n** у существительного Leute**n** в Dativ Plural, если оно его требует).

*   **Genitiv (относительное местоимение выражает принадлежность):**
    *   *Der Mann, **dessen** Auto kaputt ist, kommt zu spät.* (Мужчина, **чья** машина сломана, опоздает.) (Антецедент: Der Mann (м.р., ед.ч.))
    *   *Die Frau, **deren** Kinder im Garten spielen, liest ein Buch.* (Женщина, **чьи** дети играют в саду, читает книгу.) (Антецедент: Die Frau (ж.р., ед.ч.))
    *   *Das Haus, **dessen** Dach rot ist, gehört meinem Onkel.* (Дом, **чья** крыша красная, принадлежит моему дяде.) (Антецедент: Das Haus (ср.р., ед.ч.))
    *   *Die Studenten, **deren** Prüfungsergebnisse gut waren, feierten.* (Студенты, **чьи** результаты экзаменов были хорошими, праздновали.) (Антецедент: Die Studenten (мн.ч.))

**2. Относительные местоимения с предлогами**
Если в относительном предложении есть глагол или выражение, требующее определенного предлога, этот предлог ставится **перед** относительным местоимением. Падеж относительного местоимения определяется этим предлогом.
-   *Der Stuhl, **auf dem** die Katze sitzt, ist bequem.* (Стул, **на котором** сидит кошка, удобный.) (sitzen auf + Dativ)
-   *Das Thema, **über das** wir sprechen, ist interessant.* (Тема, **о которой** мы говорим, интересная.) (sprechen über + Akkusativ)
-   *Die Freunde, **mit denen** ich ins Kino gehe, sind nett.* (Друзья, **с которыми** я иду в кино, милые.) (gehen mit + Dativ)
-   *Der Film, **für den** er sich interessiert, läuft heute Abend.* (Фильм, **которым** он интересуется, идет сегодня вечером.) (sich interessieren für + Akkusativ)

**3. Относительное местоимение "was"**
Местоимение **was** (что) используется в качестве относительного местоимения, когда антецедент (Bezugswort):
-   Неопределенное местоимение, такое как **alles** (всё), **nichts** (ничего), **etwas** (что-то), **manches** (некоторое), **vieles** (многое), **weniges** (немногое).
    *   *Alles, **was** er sagt, ist wahr.* (Всё, **что** он говорит, правда.)
    *   *Das ist etwas, **was** ich nicht verstehe.* (Это что-то, **чего** (что) я не понимаю.)
-   Существительное, образованное от прилагательного в превосходной степени и употребленное в среднем роде (субстантивированный суперлатив среднего рода).
    *   *Das Schönste, **was** ich je gesehen habe, war dieser Sonnenuntergang.* (Самое красивое, **что** я когда-либо видел, был этот закат.)
    *   *Das Beste, **was** du tun kannst, ist ehrlich zu sein.* (Лучшее, **что** ты можешь сделать, это быть честным.)
-   Целое предыдущее предложение (когда придаточное относится ко всему содержанию главного предложения).
    *   *Er hat die Prüfung bestanden, **was** uns alle sehr gefreut hat.* (Он сдал экзамен, **что** нас всех очень обрадовало.)
    *   *Sie kommt heute nicht, **was** schade ist.* (Она сегодня не придет, **что** жаль.)

**4. Относительные наречия "wo", "wohin", "woher" (Relativadverbien)**
Когда антецедент обозначает место или направление, вместо конструкции "предлог + относительное местоимение" можно использовать относительные наречия:
-   **wo** (где – для указания статического места):
    *   *Die Stadt, **wo** ich geboren wurde, ist sehr klein.* (Город, **где** я родился, очень маленький.)
    *   Эквивалентно: *Die Stadt, **in der** ich geboren wurde, ...*
-   **wohin** (куда – для указания направления движения к месту):
    *   *Das Land, **wohin** er reisen möchte, ist Italien.* (Страна, **куда** он хочет поехать, – Италия.)
    *   Эквивалентно: *Das Land, **in das** er reisen möchte, ...*
-   **woher** (откуда – для указания направления движения от места):
    *   *Der Ort, **woher** sie kommt, liegt in den Bergen.* (Место, **откуда** она родом, находится в горах.)
    *   Эквивалентно: *Der Ort, **aus dem** sie kommt, ...*

Использование относительных наречий часто делает речь более краткой и естественной, особенно в устной речи.

Понимание и правильное использование относительных предложений делает речь более связной, точной и стилистически богатой. Это важный навык для свободного владения немецким языком.`,
  vocabulary: [
    { german: 'der, die, das (Relativpronomen)', russian: 'который, которая, которое (основные относит. местоимения)', example: 'Der Mann, der lacht, ist mein Freund.' },
    { german: 'den (Relativpronomen, Akk. Mask.)', russian: 'которого (вин.п. м.р.)', example: 'Der Kuchen, den ich gebacken habe.' },
    { german: 'dem (Relativpronomen, Dat. Mask./Neut.)', russian: 'которому (дат.п. м.р./ср.р.)', example: 'Der Freund, dem ich helfe.' },
    { german: 'der (Relativpronomen, Dat. Fem.)', russian: 'которой (дат.п. ж.р.)', example: 'Die Frau, der ich danke.' },
    { german: 'denen (Relativpronomen, Dat. Plural)', russian: 'которым (дат.п. мн.ч.)', example: 'Die Kinder, denen ich Süßigkeiten gebe.' },
    { german: 'dessen (Genitiv Mask./Neut.)', russian: 'чей, которого (род.п. м.р., ср.р.)', example: 'Der Autor, dessen Buch ich liebe.' },
    { german: 'deren (Genitiv Fem./Plural)', russian: 'чья, которой, которых (род.п. ж.р., мн.ч.)', example: 'Die Frau, deren Auto neu ist.' },
    { german: 'was (Relativpronomen)', russian: 'что (после alles, nichts, Bezug auf ganzen Satz)', example: 'Alles, was du sagst, ist wichtig.' },
    { german: 'wo (Relativadverb)', russian: 'где (относительное наречие места)', example: 'Die Stadt, wo ich wohne, ist schön.' },
    { german: 'wohin (Relativadverb)', russian: 'куда (относительное наречие направления)', example: 'Das Land, wohin wir reisen.' },
    { german: 'woher (Relativadverb)', russian: 'откуда (относительное наречие направления)', example: 'Der Ort, woher er kommt.' },
    { german: 'das Bezugswort (-wörter)', russian: 'антецедент (определяемое слово)' },
    { german: 'die Präposition, die Präpositionen', russian: 'предлог, предлоги', example: 'Der Tisch, auf dem das Buch liegt.' },
    { german: 'stehen (steht, stand, hat gestanden)', russian: 'стоять', example: 'Der Baum, der im Garten steht.' },
    { german: 'sehen (sieht, sah, hat gesehen)', russian: 'видеть', example: 'Der Film, den wir sahen.' },
    { german: 'helfen (hilft, half, hat geholfen) + Dativ', russian: 'помогать (кому-л.)', example: 'Die Person, der ich half.' },
    { german: 'sprechen (spricht, sprach, hat gesprochen) über + Akkusativ', russian: 'говорить (о чём-л.)', example: 'Das Thema, über das wir sprachen.' },
    { german: 'gehören (gehört, gehörte, hat gehört) + Dativ', russian: 'принадлежать (кому-л.)', example: 'Das Haus, das ihm gehört.' },
    { german: 'sich interessieren für + Akkusativ', russian: 'интересоваться (чем-л.)', example: 'Das Buch, für das sie sich interessiert.' }
  ],
  exercises: [
    {
      id: 'b1-relativ-adv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильное относительное местоимение: Das ist der Kuchen, ___ meine Mutter gebacken hat.',
      options: ['der', 'die', 'das', 'den'],
      correctAnswer: 'den',
      explanation: 'Антецедент "der Kuchen" (мужской род, ед.ч.). В придаточном предложении "meine Mutter hat den Kuchen gebacken", то есть "Kuchen" является прямым дополнением и стоит в Akkusativ. Относительное местоимение для мужского рода Akkusativ - "den".',
    },
    {
      id: 'b1-relativ-adv-ex2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение относительным местоимением: Die Kinder, mit ___ wir gespielt haben, sind sehr lustig.',
      sentenceParts: ['Die Kinder, mit ', ' wir gespielt haben, sind sehr lustig.'],
      correctAnswer: 'denen',
      explanation: 'Антецедент "Die Kinder" (множественное число). Предлог "mit" всегда требует Dativ. Относительное местоимение для множественного числа Dativ - "denen".',
    },
    {
      id: 'b1-relativ-adv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Вот книга, о которой я тебе рассказывал."',
      prompt: 'Вот книга, о которой я тебе рассказывал.',
      languageDirection: 'to_german',
      correctAnswer: 'Hier ist das Buch, von dem ich dir erzählt habe.',
      explanation: 'Антецедент "das Buch" (средний род, ед.ч.). Глагол "erzählen" часто используется с предлогом "von + Dativ" (рассказывать о ком-л./чём-л.). Относительное местоимение для среднего рода Dativ с предлогом "von" - "von dem". Спрягаемый глагол "habe" в конце придаточного.',
    },
    {
      id: 'b1-relativ-adv-ex4',
      type: 'multiple_choice',
      question: 'Какое относительное местоимение используется после слова "alles"?',
      options: ['der', 'die', 'das', 'was'],
      correctAnswer: 'was',
      explanation: 'После неопределенных местоимений, таких как "alles", "nichts", "etwas", "vieles", а также после субстантивированных суперлативов среднего рода и для ссылки на всё предыдущее предложение, используется относительное местоимение "was".',
    },
    {
      id: 'b1-relativ-adv-ex5',
      type: 'fill_in_the_blank',
      question: 'Объедините два предложения в одно с относительным придаточным: Das ist der Mann. Der Mann wohnt nebenan.',
      sentenceParts: ['Das ist der Mann, ', ' nebenan wohnt.'],
      correctAnswer: 'der',
      explanation: 'Антецедент "der Mann" (мужской род, ед.ч.). В придаточном предложении "der Mann" является подлежащим (Nominativ). Относительное местоимение для мужского рода Nominativ - "der". Спрягаемый глагол "wohnt" в конце.',
    },
    {
      id: 'b1-relativ-adv-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант для места: Das ist die Stadt, ___ ich studiere.',
      options: ['in der', 'wohin', 'aus der', 'deren'],
      correctAnswer: 'in der',
      explanation: 'Антецедент "die Stadt" (женский род, ед.ч.). Глагол "studieren" используется с предлогом "in + Dativ" для указания места учебы (studieren in der Stadt). Поэтому относительное местоимение с предлогом будет "in der". Альтернативно можно использовать "wo", но "in der" более точно передает грамматическую связь.',
    },
    {
      id: 'b1-relativ-adv-ex7',
      type: 'translation',
      question: 'Переведите на немецкий: "Учительница, которой я подарил цветы, была очень рада."',
      prompt: 'Учительница, которой я подарил цветы, была очень рада.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Lehrerin, der ich Blumen geschenkt habe, war sehr froh.',
      explanation: 'Антецедент "Die Lehrerin" (женский род, ед.ч.). В придаточном предложении "ich habe der Lehrerin Blumen geschenkt", "der Lehrerin" является косвенным дополнением в Dativ. Относительное местоимение для женского рода Dativ - "der". Спрягаемый глагол "habe" в конце придаточного.',
    },
    {
      id: 'b1-relativ-adv-ex8',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное относительное местоимение Genitiv: Das ist der Autor, ___ Bücher Bestseller sind.',
      sentenceParts: ['Das ist der Autor, ', ' Bücher Bestseller sind.'],
      correctAnswer: 'dessen',
      explanation: 'Антецедент "der Autor" (мужской род, ед.ч.). "Bücher" принадлежат автору. Относительное местоимение Genitiv для мужского рода ед.ч. - "dessen" (чей).',
    },
  ],
};

// --- Урок B1: Прошедшее время Präteritum (углубленно) ---
const lessonB1Praeteritum: Lesson = {
  id: 'b1-praeteritum',
  level: 'B1',
  topic: 'Прошедшее время Präteritum (углубленно)',
  theory: `Präteritum (простое прошедшее время), также известное как Imperfekt, используется преимущественно в письменной речи для описания событий и действий в прошлом. Оно характерно для рассказов, романов, официальных отчетов, новостей и повествований. В устной речи для выражения прошедшего времени чаще используется Perfekt, однако глаголы \`sein\`, \`haben\` и модальные глаголы очень часто употребляются в Präteritum и в устной речи.

**1. Слабые (регулярные) глаголы (Schwache / Regelmäßige Verben)**
Слабые глаголы образуют Präteritum путем добавления суффикса **-te-** к основе глагола и последующих личных окончаний.
Формула: Основа глагола + **-te-** + личное окончание.
Личные окончания в Präteritum для слабых глаголов:
-   ich: **-te**
-   du: **-test**
-   er/sie/es: **-te**
-   wir: **-ten**
-   ihr: **-tet**
-   sie/Sie: **-ten**

Пример: **lernen** (учить), основа: **lern-**
-   ich lern**te** (я учил/а)
-   du lern**test** (ты учил/а)
-   er/sie/es lern**te** (он/она/оно учил/а)
-   wir lern**ten** (мы учили)
-   ihr lern**tet** (вы учили)
-   sie/Sie lern**ten** (они/Вы учили)

Другие примеры:
-   machen (делать): ich mach**te**, du mach**test**, er mach**te**, ...
-   spielen (играть): ich spiel**te**, du spiel**test**, er spiel**te**, ...
-   fragen (спрашивать): ich frag**te**, du frag**test**, er frag**te**, ...

**Особенность:** Если основа слабого глагола заканчивается на **-d, -t, -m, -n** (причем перед -m или -n стоит другой согласный, кроме l, r, h), то для благозвучия перед суффиксом **-te-** добавляется гласная **-e-**.
Пример: **arbeiten** (работать), основа: **arbeit-**
-   ich arbeit**ete**
-   du arbeit**etest**
-   er/sie/es arbeit**ete**
-   wir arbeit**eten**
-   ihr arbeit**etet**
-   sie/Sie arbeit**eten**
Другие примеры: warten (ждал) - wartete, antworten (отвечал) - antwortete, öffnen (открывал) - öffnete.

**2. Сильные (нерегулярные) глаголы (Starke / Unregelmäßige Verben)**
Сильные глаголы образуют Präteritum путем **изменения корневой гласной**, а иногда и согласной. У них **нет суффикса -te-**.
Важная особенность: в 1-м и 3-м лице единственного числа (ich, er/sie/es) у сильных глаголов в Präteritum **нет окончания**.
Формы Präteritum сильных глаголов необходимо запоминать.

Личные окончания в Präteritum для сильных глаголов (присоединяются к измененной основе):
-   ich: (измененная основа) — нет окончания
-   du: (измененная основа) + **-st**
-   er/sie/es: (измененная основа) — нет окончания
-   wir: (измененная основа) + **-en**
-   ihr: (измененная основа) + **-t**
-   sie/Sie: (измененная основа) + **-en**

Примеры:
-   **gehen** (идти) → Präteritum основа **ging**:
    -   ich ging (я шел/шла)
    -   du gingst (ты шел/шла)
    -   er/sie/es ging (он/она/оно шел/шла)
    -   wir gingen (мы шли)
    -   ihr gingt (вы шли)
    -   sie/Sie gingen (они/Вы шли)
-   **sehen** (видеть) → **sah**: ich sah, du sahst, er sah, wir sahen, ihr saht, sie sahen.
-   **sprechen** (говорить) → **sprach**: ich sprach, du sprachst, er sprach, wir sprachen, ihr spracht, sie sprachen.
-   **kommen** (приходить) → **kam**: ich kam, du kamst, er kam, wir kamen, ihr kamt, sie kamen.
-   **lesen** (читать) → **las**: ich las, du las(e)st, er las, wir lasen, ihr las(e)t, sie lasen. (Если измененная основа заканчивается на -s, -ß, -z, то для ‘du’ может добавляться -est или просто -t, если -s уже есть).
-   **schreiben** (писать) → **schrieb**: ich schrieb, du schriebst, er schrieb, wir schrieben, ihr schriebt, sie schrieben.

**3. Глаголы "sein" (быть) и "haben" (иметь)**
Эти глаголы имеют особые, полностью нерегулярные формы Präteritum, которые очень часто используются как в письменной, так и в устной речи:
*   **sein (быть):**
    -   ich **war**
    -   du **warst**
    -   er/sie/es **war**
    -   wir **waren**
    -   ihr **wart**
    -   sie/Sie **waren**
*   **haben (иметь):**
    -   ich **hatte**
    -   du **hattest**
    -   er/sie/es **hatte**
    -   wir **hatten**
    -   ihr **hattet**
    -   sie/Sie **hatten**

**4. Модальные глаголы (Modalverben)**
Модальные глаголы также часто используются в Präteritum в устной и письменной речи. Они спрягаются по типу сильных глаголов: 1-е и 3-е лицо единственного числа совпадают и не имеют окончания. Если у модального глагола есть умлаут в инфинитиве (können, müssen, dürfen, mögen), он исчезает в Präteritum.
-   können (мочь, уметь) → **konnte**: ich konnte, du konntest, er/sie/es konnte, wir konnten, ihr konntet, sie/Sie konnten.
-   müssen (быть должным) → **musste**: ich musste, du musstest, er/sie/es musste, ...
-   dürfen (мочь, иметь разрешение) → **durfte**: ich durfte, du durftest, er/sie/es durfte, ...
-   wollen (хотеть) → **wollte**: ich wollte, du wolltest, er/sie/es wollte, ... (слабое образование, но без умлаута)
-   sollen (быть должным, следовать) → **sollte**: ich sollte, du solltest, er/sie/es sollte, ... (слабое образование)
-   mögen (любить, нравиться) → **mochte**: ich mochte, du mochtest, er/sie/es mochte, ... (значение "любил, нравилось")

**Когда использовать Präteritum, а когда Perfekt?**
-   **Präteritum:**
    *   Преимущественно в письменной речи (книги, газеты, рассказы, официальные документы).
    *   В устной речи для глаголов \`sein\`, \`haben\`, модальных глаголов.
    *   Для некоторых других часто используемых глаголов (например, \`wissen -> wusste\`, \`denken -> dachte\`, \`gehen -> ging\`, \`kommen -> kam\`) в устных рассказах, особенно в северной Германии.
    *   Для описания состояний, длительных действий или последовательности событий в прошлом в повествовании.
-   **Perfekt:**
    *   Преимущественно в устной речи для завершенных действий в прошлом, результат которых часто важен для настоящего.
    *   В письменной речи, если нужно подчеркнуть результат действия для настоящего момента (например, в личных письмах, email).

Запоминание форм Präteritum, особенно для сильных глаголов, требует регулярной практики и заучивания.`,
  vocabulary: [
    { german: 'lernen (lernte)', russian: 'учить, изучать (пр.: он учил)', example: 'Er lernte fleißig für die Prüfung.' },
    { german: 'machen (machte)', russian: 'делать (пр.: мы делали)', example: 'Wir machten einen Ausflug.' },
    { german: 'arbeiten (arbeitete)', russian: 'работать (пр.: она работала)', example: 'Sie arbeitete den ganzen Tag.' },
    { german: 'spielen (spielte)', russian: 'играть (пр.: дети играли)', example: 'Die Kinder spielten im Garten.' },
    { german: 'wohnen (wohnte)', russian: 'жить, проживать (пр.: я жил)', example: 'Ich wohnte früher in Berlin.' },
    { german: 'fragen (fragte)', russian: 'спрашивать (пр.: он спросил)', example: 'Er fragte mich nach dem Weg.' },
    { german: 'sagen (sagte)', russian: 'сказать (пр.: она сказала)', example: 'Sie sagte nichts.' },
    { german: 'kaufen (kaufte)', russian: 'покупать (пр.: я купил)', example: 'Ich kaufte ein neues Buch.' },
    { german: 'antworten (antwortete)', russian: 'отвечать (пр.: ты ответил)', example: 'Du antwortetest schnell.' },

    { german: 'sein (war, warst, war, waren, wart, waren)', russian: 'быть (пр.: я был, ты был, он был, мы были, вы были, они были)', example: 'Ich war gestern krank. Wir waren im Urlaub.' },
    { german: 'haben (hatte, hattest, hatte, hatten, hattet, hatten)', russian: 'иметь (пр.: я имел, ты имел, он имел, мы имели, вы имели, они имели)', example: 'Wir hatten viel Spaß. Er hatte keine Zeit.' },

    { german: 'gehen (ging)', russian: 'идти (пр.: он шел)', example: 'Er ging nach Hause.' },
    { german: 'kommen (kam)', russian: 'приходить (пр.: она пришла)', example: 'Sie kam zu spät.' },
    { german: 'sehen (sah)', russian: 'видеть (пр.: я видел)', example: 'Ich sah einen interessanten Film.' },
    { german: 'sprechen (sprach)', russian: 'говорить (пр.: президент говорил)', example: 'Der Präsident sprach zur Nation.' },
    { german: 'lesen (las)', russian: 'читать (пр.: ты читал)', example: 'Du lasest das Buch sehr schnell.' },
    { german: 'schreiben (schrieb)', russian: 'писать (пр.: он писал)', example: 'Er schrieb einen langen Brief.' },
    { german: 'fahren (fuhr)', russian: 'ехать (пр.: мы ехали)', example: 'Wir fuhren ans Meer.' },
    { german: 'schlafen (schlief)', russian: 'спать (пр.: ребенок спал)', example: 'Das Baby schlief ruhig.' },
    { german: 'essen (aß)', russian: 'есть, кушать (пр.: они ели)', example: 'Sie aßen Pizza zum Abendessen.' },
    { german: 'trinken (trank)', russian: 'пить (пр.: я пил)', example: 'Ich trank ein Glas Wasser.' },
    { german: 'finden (fand)', russian: 'находить (пр.: он нашел)', example: 'Er fand seinen Schlüssel.' },
    { german: 'geben (gab)', russian: 'давать (пр.: она дала)', example: 'Sie gab mir ein Geschenk.' },
    { german: 'nehmen (nahm)', russian: 'брать (пр.: он взял)', example: 'Er nahm den Regenschirm mit.' },

    { german: 'können (konnte)', russian: 'мочь, уметь (пр.: я мог)', example: 'Als Kind konnte ich gut schwimmen.' },
    { german: 'müssen (musste)', russian: 'быть должным (пр.: мы должны были)', example: 'Wir mussten lange warten.' },
    { german: 'wollen (wollte)', russian: 'хотеть (пр.: он хотел)', example: 'Er wollte uns besuchen.' },
    { german: 'sollen (sollte)', russian: 'быть должным (по совету/правилу) (пр.: ты должен был)', example: 'Du solltest das früher sagen.' },
    { german: 'dürfen (durfte)', russian: 'мочь (иметь разрешение) (пр.: я мог)', example: 'Ich durfte als Kind lange aufbleiben.' },
    { german: 'Präteritum / Imperfekt', russian: 'Претерит / Имперфект (простое прошедшее время)' },
  ],
  exercises: [
    {
      id: 'b1-praeteritum-ex1',
      type: 'multiple_choice',
      question: 'Какая форма Präteritum глагола "machen" (делать) для "er"?',
      options: ['machte', 'machtest', 'gemacht', 'machten'],
      correctAnswer: 'machte',
      explanation: '"Machen" - слабый глагол. Präteritum для "er/sie/es" образуется добавлением суффикса -te к основе: mach + te = machte.',
    },
    {
      id: 'b1-praeteritum-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол "sein" в Präteritum: Gestern ___ ich im Kino.',
      sentenceParts: ['Gestern ', ' ich im Kino.'],
      correctAnswer: 'war',
      explanation: 'Präteritum от глагола "sein" для местоимения "ich" (я) - "war".',
    },
    {
      id: 'b1-praeteritum-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Präteritum): "Она читала книгу."',
      prompt: 'Она читала книгу.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie las ein Buch.',
      explanation: '"Lesen" - сильный глагол. Его форма Präteritum для "sie" (она) - "las".',
    },
    {
      id: 'b1-praeteritum-ex4',
      type: 'multiple_choice',
      question: 'Какая форма Präteritum глагола "antworten" (отвечать) для "du"?',
      options: ['antwortet', 'antwortetest', 'antworttest', 'antworten'],
      correctAnswer: 'antwortetest',
      explanation: 'Основа глагола "antworten" заканчивается на -t. Для слабых глаголов с такой основой в Präteritum перед суффиксом -te- и окончанием -st (для "du") добавляется -e-: antwort + e + te + st = antwortetest.',
    },
    {
      id: 'b1-praeteritum-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол в Präteritum: Wir ___ gestern unsere Freunde nicht. (sehen)',
      sentenceParts: ['Wir ', ' gestern unsere Freunde nicht.'],
      correctAnswer: 'sahen',
      explanation: 'Präteritum от сильного глагола "sehen" (видеть) для местоимения "wir" (мы) - "sahen".',
    },
    {
      id: 'b1-praeteritum-ex6',
      type: 'translation',
      question: 'Переведите на немецкий (используя Präteritum): "Мы хотели пойти в кино."',
      prompt: 'Мы хотели пойти в кино.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir wollten ins Kino gehen.',
      explanation: 'Präteritum от модального глагола "wollen" (хотеть) для "wir" (мы) - "wollten". Инфинитив основного глагола "gehen" (пойти) ставится в конце предложения.',
    },
    {
      id: 'b1-praeteritum-ex7',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение в Präteritum, используя глагол "haben": Er ___ keine Zeit für uns.',
      options: ['hat', 'gehabt', 'hatte', 'hättest'],
      correctAnswer: 'hatte',
      explanation: 'Präteritum от глагола "haben" (иметь) для местоимения "er" (он) - "hatte".',
    },
  ],
};

// --- Урок B2: Сослагательное наклонение II (Konjunktiv II) ---
const lessonB2Konjunktiv2: Lesson = {
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
};

// --- Урок B2: Устойчивые сочетания существительных с глаголами (Nomen-Verb-Verbindungen) ---
const lessonB2NomenVerb: Lesson = {
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
};

// --- Урок B2: Пассивный залог (Passiv) ---
const lessonB2Passiv: Lesson = {
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
};

// --- Урок C1: Косвенная речь (Indirekte Rede) ---
const lessonC1IndirekteRede: Lesson = {
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
};

// --- Урок C1: Причастные обороты (Partizipialkonstruktionen) ---
const lessonC1Partizipialkonstruktionen: Lesson = {
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
};

// --- Урок C2: Стилистические средства и языковые регистры ---
const lessonC2Stilmittel: Lesson = {
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
};

// --- Урок C2: Номинальный и вербальный стили (Nominalstil vs. Verbalstil) ---
const lessonC2NominalstilVerbalstil: Lesson = {
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
        'Wir blieben wir zu Hause, da das Wetter schlecht war.' // Исправлена опечатка
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
};

export const MOCK_LESSONS: Lesson[] = [
  lessonA2Artikel,
  lessonA2VerbenPraesens,
  lessonA2Pluralbildung,
  lessonA2Perfekt,
  lessonB1Nebensaetze,
  lessonB1Relativsaetze,
  lessonB1Praeteritum,
  lessonB2Konjunktiv2,
  lessonB2NomenVerb,
  lessonB2Passiv,
  lessoC1IndirekteRede,
  lessoC1Partizipialkonstruktionen,
  lessoC2Stilmittel,
  lessoC2NominalstilVerbalstil,
];

