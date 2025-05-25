
import type { Lesson } from '@/types';

// --- Урок A2: Личные местоимения в Akkusativ и Dativ ---
export const lessonA2PersonalpronomenAkkDat: Lesson = {
  id: 'a2-personalpronomen-akk-dat',
  level: 'A2',
  topic: 'Личные местоимения в Akkusativ и Dativ',
  theory: `Личные местоимения (Personalpronomen) заменяют существительные, обозначающие лица или предметы, и изменяются по падежам. На уровне А2 очень важно правильно использовать их в винительном (Akkusativ) и дательном (Dativ) падежах.

**1. Личные местоимения в Nominativ (Именительный падеж – кто? что?)**
Это основные формы, которые вы уже знаете:
-   ich (я)
-   du (ты)
-   er (он)
-   sie (она)
-   es (оно)
-   wir (мы)
-   ihr (вы, мн.ч. неформ.)
-   sie (они)
-   Sie (Вы, вежл.)

**2. Личные местоимения в Akkusativ (Винительный падеж – кого? что?)**
Akkusativ используется для прямого дополнения – объекта, на который непосредственно направлено действие. Многие глаголы требуют Akkusativ.

| Nominativ | Akkusativ | Пример (с глаголом "sehen" - видеть) |
|-----------|-----------|---------------------------------------|
| ich       | **mich**  | Er sieht **mich**. (Он видит меня.)     |
| du        | **dich**  | Ich sehe **dich**. (Я вижу тебя.)       |
| er        | **ihn**   | Wir sehen **ihn**. (Мы видим его.)      |
| sie       | **sie**   | Siehst du **sie**? (Ты видишь её?)      |
| es        | **es**    | Ich sehe **es**. (Я вижу это/его/её - ср.р.) |
| wir       | **uns**   | Er sieht **uns**. (Он видит нас.)       |
| ihr       | **euch**  | Ich sehe **euch**. (Я вижу вас.)        |
| sie (они) | **sie**   | Wir sehen **sie**. (Мы видим их.)       |
| Sie (Вы)  | **Sie**   | Ich sehe **Sie**. (Я вижу Вас.)         |

**Глаголы, часто требующие Akkusativ:** haben (иметь), sehen (видеть), hören (слышать), lesen (читать), schreiben (писать), kaufen (покупать), lieben (любить), fragen (спрашивать), verstehen (понимать), besuchen (посещать), treffen (встречать), brauchen (нуждаться), suchen (искать), finden (находить), kennen (знать, быть знакомым).

**3. Личные местоимения в Dativ (Дательный падеж – кому? чему?)**
Dativ используется для косвенного дополнения – лица или предмета, которому что-то дается, адресуется, или в пользу/ущерб которого совершается действие.

| Nominativ | Dativ     | Пример (с глаголом "helfen" - помогать) |
|-----------|-----------|----------------------------------------|
| ich       | **mir**   | Kannst du **mir** helfen? (Можешь мне помочь?) |
| du        | **dir**   | Ich helfe **dir**. (Я помогаю тебе.)     |
| er        | **ihm**   | Wir helfen **ihm**. (Мы помогаем ему.)   |
| sie       | **ihr**   | Er hilft **ihr**. (Он помогает ей.)      |
| es        | **ihm**   | Ich helfe **ihm**. (Я помогаю ему - ср.р.) |
| wir       | **uns**   | Könnt ihr **uns** helfen? (Можете нам помочь?) |
| ihr       | **euch**  | Wir helfen **euch**. (Мы помогаем вам.)  |
| sie (они) | **ihnen** | Ich helfe **ihnen**. (Я помогаю им.)     |
| Sie (Вы)  | **Ihnen** | Kann ich **Ihnen** helfen? (Могу я Вам помочь?) |

**Глаголы, часто требующие Dativ:** helfen (помогать), danken (благодарить), geben (давать), sagen (говорить кому-то), erzählen (рассказывать кому-то), zeigen (показывать кому-то), schenken (дарить кому-то), antworten (отвечать кому-то), gefallen (нравиться кому-то), gehören (принадлежать кому-то), passen (подходить кому-то), schmecken (быть вкусным кому-то).

**Примеры с обоими падежами:**
*   Ich gebe **dir** (Dativ) **das Buch** (Akkusativ). (Я даю тебе книгу.)
*   Er zeigt **uns** (Dativ) **seine Fotos** (Akkusativ). (Он показывает нам свои фотографии.)

Запоминание форм личных местоимений в Akkusativ и Dativ, а также глаголов, управляющих этими падежами, очень важно для правильного общения.
`,
  vocabulary: [
    { german: 'ich - mich - mir', russian: 'я - меня (Akk) - мне (Dat)' },
    { german: 'du - dich - dir', russian: 'ты - тебя (Akk) - тебе (Dat)' },
    { german: 'er - ihn - ihm', russian: 'он - его (Akk) - ему (Dat)' },
    { german: 'sie (она) - sie - ihr', russian: 'она - её (Akk) - ей (Dat)' },
    { german: 'es - es - ihm', russian: 'оно - его/её (Akk ср.р.) - ему/ей (Dat ср.р.)' },
    { german: 'wir - uns - uns', russian: 'мы - нас (Akk) - нам (Dat)' },
    { german: 'ihr (вы) - euch - euch', russian: 'вы (мн.ч. неформ.) - вас (Akk) - вам (Dat)' },
    { german: 'sie (они) - sie - ihnen', russian: 'они - их (Akk) - им (Dat)' },
    { german: 'Sie (Вы) - Sie - Ihnen', russian: 'Вы (вежл.) - Вас (Akk) - Вам (Dat)' },
    { german: 'sehen (sieht)', russian: 'видеть (+Akk)', example: 'Ich sehe dich.' },
    { german: 'fragen', russian: 'спрашивать (+Akk)', example: 'Er fragt mich etwas.' },
    { german: 'lieben', russian: 'любить (+Akk)', example: 'Sie liebt ihn.' },
    { german: 'helfen (hilft)', russian: 'помогать (+Dat)', example: 'Kannst du mir helfen?' },
    { german: 'danken', russian: 'благодарить (+Dat)', example: 'Ich danke dir für das Geschenk.' },
    { german: 'geben (gibt)', russian: 'давать (+Dat +Akk)', example: 'Er gibt ihr ein Buch.' },
    { german: 'gefallen (gefällt)', russian: 'нравиться (+Dat)', example: 'Das Bild gefällt mir.' },
    { german: 'gehören', russian: 'принадлежать (+Dat)', example: 'Das Auto gehört ihm.' },
  ],
  exercises: [
    {
      id: 'a2-personalpronomen-akkdat-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильное местоимение: Der Lehrer fragt ___ (меня).',
      options: ['ich', 'mich', 'mir'],
      correctAnswer: 'mich',
      explanation: 'Глагол "fragen" (спрашивать) требует Akkusativ. "Меня" в Akkusativ - "mich".',
    },
    {
      id: 'a2-personalpronomen-akkdat-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте местоимение в правильной форме: Ich gebe ___ (ты) mein Buch.',
      sentenceParts: ['Ich gebe ', ' mein Buch.'],
      correctAnswer: 'dir',
      explanation: 'Глагол "geben" (давать) используется с Dativ для лица, которому что-то дают. "Тебе" в Dativ - "dir".',
    },
    {
      id: 'a2-personalpronomen-akkdat-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы помогаем ему."',
      prompt: 'Мы помогаем ему.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir helfen ihm.',
      explanation: 'Глагол "helfen" (помогать) требует Dativ. "Ему" в Dativ - "ihm".',
    },
    {
      id: 'a2-personalpronomen-akkdat-ex4',
      type: 'multiple_choice',
      question: 'Какая форма правильная: "Siehst du ___ (они)?"',
      options: ['ihnen', 'sie (Akk)', 'ihr'],
      correctAnswer: 'sie (Akk)',
      explanation: 'Глагол "sehen" (видеть) требует Akkusativ. "Их" (когда "они" - люди или предметы) в Akkusativ - "sie".',
    },
    {
      id: 'a2-personalpronomen-akkdat-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте местоимение: Das Geschenk ist für ___ (она).',
      sentenceParts: ['Das Geschenk ist für ', '.'],
      correctAnswer: 'sie',
      explanation: 'Предлог "für" (для) всегда требует Akkusativ. "Её" (когда "она" - лицо) в Akkusativ - "sie".',
    },
    {
      id: 'a2-personalpronomen-akkdat-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Kannst du ___ (нам) das erklären?"',
      options: ['wir', 'uns (Akk)', 'uns (Dat)'],
      correctAnswer: 'uns (Dat)',
      explanation: 'Глагол "erklären" (объяснять) здесь подразумевает "объяснять кому-то (Dat) что-то (Akk)". "Нам" в Dativ - "uns".',
    },
  ],
};
