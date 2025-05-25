
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikFesteTraditionen: Lesson = {
  id: 'a2-lexik-feste-traditionen',
  level: 'A2',
  topic: 'Праздники и традиции (Feste und Traditionen)',
  theory: `
В этом уроке мы познакомимся с названиями некоторых важных праздников и традиций в немецкоязычных странах, а также выучим полезные слова и фразы, связанные с празднованием.

**Основные праздники:**
- **Weihnachten:** Рождество (24-26 декабря) - самый важный семейный праздник.
- **Silvester und Neujahr:** Канун Нового года (31 декабря) и Новый год (1 января).
- **Ostern:** Пасха (весенний праздник, дата меняется).
- **der Geburtstag:** День рождения.

**Традиции и слова:**
- **feiern:** праздновать
- **gratulieren (zum Geburtstag/zu Weihnachten):** поздравлять (с днем рождения/с Рождеством)
- **das Geschenk (-e):** подарок
- **die Einladung (-en):** приглашение
- **der Gast (Gäste):** гость
- **der Weihnachtsbaum (Weihnachtsbäume):** рождественская ёлка
- **die Ostereier (Pl.):** пасхальные яйца
- **Frohe Weihnachten!** Счастливого Рождества!
- **Guten Rutsch ins neue Jahr!** С наступающим Новым годом! (букв. "Хорошего скольжения в новый год!")
- **Frohes neues Jahr!** С Новым годом!
- **Alles Gute zum Geburtstag!** Всего хорошего на день рождения! / С днем рождения!
`,
  vocabulary: [
    { german: 'das Fest (-e)', russian: 'праздник' },
    { german: 'Weihnachten', russian: 'Рождество', example: 'Zu Weihnachten schmücken wir den Baum.' },
    { german: 'Silvester', russian: 'Канун Нового года (31 декабря)' },
    { german: 'Neujahr', russian: 'Новый год (1 января)', example: 'An Neujahr besuchen wir Freunde.' },
    { german: 'Ostern', russian: 'Пасха', example: 'Zu Ostern suchen die Kinder Eier.' },
    { german: 'der Geburtstag (-e)', russian: 'день рождения', example: 'Wann hast du Geburtstag?' },
    { german: 'feiern', russian: 'праздновать', example: 'Wir feiern heute Abend.' },
    { german: 'gratulieren (+D, zu+D)', russian: 'поздравлять (кого-л. с чем-л.)', example: 'Ich gratuliere dir zum Geburtstag.' },
    { german: 'das Geschenk (-e)', russian: 'подарок', example: 'Was wünschst du dir als Geschenk?' },
    { german: 'die Einladung (-en)', russian: 'приглашение', example: 'Danke für die Einladung!' },
    { german: 'der Gast (Gäste)', russian: 'гость', example: 'Wir haben heute Abend Gäste.' },
    { german: 'der Weihnachtsbaum (¨-e)', russian: 'рождественская ёлка' },
    { german: 'das Osterei (-er)', russian: 'пасхальное яйцо' },
    { german: 'Frohe Weihnachten!', russian: 'Счастливого Рождества!' },
    { german: 'Guten Rutsch!', russian: 'С Наступающим (Новым годом)!' },
    { german: 'Frohes Neues Jahr!', russian: 'С Новым Годом!' },
    { german: 'Alles Gute zum Geburtstag!', russian: 'Всего хорошего на день рождения!' },
  ],
  readingText: `
Familie Müller feiert Weihnachten. Im Wohnzimmer steht ein großer Weihnachtsbaum. Der Baum ist mit bunten Kugeln und Lichtern geschmückt.
Am Heiligabend (24. Dezember) gibt es Geschenke. Die Kinder, Anna und Tim, sind sehr aufgeregt. Sie singen Weihnachtslieder und essen Plätzchen.
Oma und Opa kommen auch zu Besuch. Es ist ein schönes Familienfest. Alle freuen sich und wünschen sich "Frohe Weihnachten!".
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
