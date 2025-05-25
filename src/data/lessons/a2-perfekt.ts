
import type { Lesson } from '@/types';

// --- Урок A2: Прошедшее время Perfekt ---
export const lessonA2Perfekt: Lesson = {
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

    