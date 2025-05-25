
import type { Lesson } from '@/types';

// --- Урок A2: Спряжение глаголов в настоящем времени (Präsens) (углубленно) ---
export const lessonA2VerbenPraesens: Lesson = {
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

    