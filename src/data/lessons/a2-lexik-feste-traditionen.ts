
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikFesteTraditionen: Lesson = {
  id: 'a2-lexik-feste-traditionen',
  level: 'A2',
  topic: 'Праздники и традиции (Feste und Traditionen)',
  theory: `
В этом уроке мы познакомимся с названиями некоторых важных праздников и традиций в немецкоязычных странах, а также выучим полезные слова и фразы, связанные с празднованием. На уровне А2 мы расширим наши знания по сравнению с А1.

**Основные праздники (расширенно):**
- **Weihnachten:** Рождество (24-26 декабря). Важнейший семейный праздник.
  - **der Heiligabend:** Сочельник (24 декабря) - вечер, когда обычно дарят подарки.
  - **der erste/zweite Weihnachtsfeiertag:** Первый/второй день Рождества (25/26 декабря).
  - **der Adventskranz:** рождественский венок (с четырьмя свечами).
  - **der Weihnachtsmarkt:** рождественский базар.
- **Silvester und Neujahr:** Канун Нового года (31 декабря) и Новый год (1 января).
  - **das Feuerwerk:** фейерверк.
- **Ostern:** Пасха (весенний праздник, дата меняется).
  - **der Osterhase:** пасхальный заяц.
  - **Ostereier suchen:** искать пасхальные яйца.
- **der Geburtstag:** День рождения.
  - **die Geburtstagstorte:** именинный торт.
  - **das Geburtstagslied:** песня "С днем рождения".
- **Karneval / Fasching / Fastnacht:** Карнавал (в разных регионах называется по-разному, зимне-весенний период перед постом).
- **der Tag der Deutschen Einheit:** День немецкого единства (3 октября, национальный праздник Германии).

**Традиции и слова (расширенно):**
- **feiern:** праздновать
- **gratulieren (zum Geburtstag/zu Weihnachten):** поздравлять (с днем рождения/с Рождеством)
- **einladen (lädt ein, lud ein, hat eingeladen) zu + D:** приглашать (на что-л.)
- **das Geschenk (-e):** подарок
- **schenken:** дарить
- **die Einladung (-en):** приглашение
- **der Gast (Gäste):** гость
- **der Gastgeber / die Gastgeberin:** хозяин / хозяйка (принимающие гостей)
- **sich freuen auf + A:** радоваться (предстоящему)
- **sich freuen über + A:** радоваться (свершившемуся)
- **Frohe Weihnachten!** Счастливого Рождества!
- **Guten Rutsch (ins neue Jahr)!** С наступающим Новым годом!
- **Frohes neues Jahr! / Ein frohes neues Jahr!** С Новым годом!
- **Frohe Ostern!** Светлой Пасхи!
- **Herzlichen Glückwunsch zum Geburtstag! / Alles Gute zum Geburtstag!** Сердечные поздравления с днем рождения! / Всего хорошего на день рождения!
- **Viel Spaß!** Желаю хорошо провести время! / Веселись!
`,
  vocabulary: [
    { german: 'das Fest (-e)', russian: 'праздник' },
    { german: 'Weihnachten', russian: 'Рождество', example: 'Zu Weihnachten schmücken wir den Baum.' },
    { german: 'der Heiligabend', russian: 'Сочельник (24 декабря)' },
    { german: 'der Weihnachtsmarkt (-märkte)', russian: 'рождественский базар/ярмарка' },
    { german: 'Silvester', russian: 'Канун Нового года (31 декабря)' },
    { german: 'Neujahr', russian: 'Новый год (1 января)', example: 'An Neujahr besuchen wir Freunde.' },
    { german: 'das Feuerwerk (-e)', russian: 'фейерверк', example: 'Um Mitternacht gibt es ein großes Feuerwerk.' },
    { german: 'Ostern', russian: 'Пасха', example: 'Zu Ostern suchen die Kinder Eier.' },
    { german: 'der Osterhase (-n)', russian: 'пасхальный заяц' },
    { german: 'der Geburtstag (-e)', russian: 'день рождения', example: 'Wann hast du Geburtstag?' },
    { german: 'die Geburtstagstorte (-n)', russian: 'именинный торт' },
    { german: 'feiern', russian: 'праздновать', example: 'Wir feiern heute Abend.' },
    { german: 'gratulieren (+D, zu+D)', russian: 'поздравлять (кого-л. с чем-л.)', example: 'Ich gratuliere dir zum Geburtstag.' },
    { german: 'einladen (lädt ein) zu + D', russian: 'приглашать на', example: 'Ich lade dich zu meiner Party ein.' },
    { german: 'das Geschenk (-e)', russian: 'подарок', example: 'Was wünschst du dir als Geschenk?' },
    { german: 'schenken', russian: 'дарить', example: 'Was schenkst du ihm?' },
    { german: 'der Gast (Gäste)', russian: 'гость', example: 'Wir haben heute Abend Gäste.' },
    { german: 'Frohe Weihnachten!', russian: 'Счастливого Рождества!' },
    { german: 'Guten Rutsch!', russian: 'С Наступающим (Новым годом)!' },
    { german: 'Frohes Neues Jahr!', russian: 'С Новым Годом!' },
    { german: 'Herzlichen Glückwunsch!', russian: 'Сердечные поздравления!' },
  ],
  readingText: `
Familie Müller feiert Weihnachten. Im Wohnzimmer steht ein großer Weihnachtsbaum. Der Baum ist mit bunten Kugeln und Lichtern geschmückt.
Am Heiligabend (24. Dezember) gibt es Geschenke. Die Kinder, Anna und Tim, sind sehr aufgeregt. Sie singen Weihnachtslieder und essen Plätzchen.
Oma und Opa kommen auch zu Besuch. Es ist ein schönes Familienfest. Alle freuen sich und wünschen sich "Frohe Weihnachten!".
Am ersten Weihnachtsfeiertag kocht Frau Müller ein traditionelles Essen: Gänsebraten mit Rotkohl und Klößen.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-feste-traditionen-rq1',
      question: 'Какой праздник отмечает семья Мюллер?',
      options: ['Ostern', 'Geburtstag', 'Weihnachten', 'Neujahr'],
      correctAnswer: 'Weihnachten',
      explanation: 'В тексте сказано: "Familie Müller feiert Weihnachten."',
    },
    {
      id: 'a2-lexik-feste-traditionen-rq2',
      question: 'Что делают дети Анна и Тим на Рождество?',
      options: ['Ищут пасхальные яйца', 'Поют рождественские песни и едят печенье', 'Запускают фейерверки', 'Идут в школу'],
      correctAnswer: 'Поют рождественские песни и едят печенье',
      explanation: 'В тексте сказано: "Sie singen Weihnachtslieder und essen Plätzchen."',
    },
  ],
  exercises: [
    {
      id: 'a2-lexik-feste-traditionen-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "подарок"?',
      options: ['die Feier', 'das Geschenk', 'der Gast', 'die Kerze'],
      correctAnswer: 'das Geschenk',
      explanation: '"Das Geschenk" означает "подарок".',
    },
    {
      id: 'a2-lexik-feste-traditionen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ dir zum Geburtstag!"',
      sentenceParts: ['Ich ', ' dir zum Geburtstag!'],
      correctAnswer: 'gratuliere',
      explanation: '"Gratulieren" (поздравлять) + Dativ (dir).',
    },
    {
      id: 'a2-lexik-feste-traditionen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы празднуем сегодня вечером."',
      prompt: 'Мы празднуем сегодня вечером.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir feiern heute Abend.',
      explanation: '"Праздновать" - "feiern". "Сегодня вечером" - "heute Abend".',
    },
    {
      id: 'a2-lexik-feste-traditionen-wp1',
      type: 'writing_prompt',
      question: 'Erzähle von deinem Lieblingsfest. Was machst du an diesem Tag? (Расскажи о своем любимом празднике. Что ты делаешь в этот день? 2-3 предложения)',
      suggestedLength: '2-3 предложения',
    },
  ],
};
