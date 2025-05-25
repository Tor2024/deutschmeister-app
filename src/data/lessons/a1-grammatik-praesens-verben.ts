
import type { Lesson } from '@/types';

export const lessonA1GrammatikPraesensVerben: Lesson = {
  id: 'a1-grammatik-praesens-verben',
  level: 'A1',
  topic: 'Präsens (слабые и частые сильные глаголы)',
  theory: `
Настоящее время (Präsens) используется для описания действий, которые происходят сейчас, регулярно или являются общеизвестными фактами. Большинство глаголов спрягаются (изменяются) по лицам и числам.

**1. Слабые (регулярные) глаголы:**
Они образуют Präsens путем добавления стандартных окончаний к основе глагола (инфинитив без -en).
Окончания:
- ich: -e
- du: -st
- er/sie/es: -t
- wir: -en
- ihr: -t
- sie/Sie: -en

Пример: **machen** (делать), основа: mach-
- ich mache (я делаю)
- du machst (ты делаешь)
- er/sie/es macht (он/она/оно делает)
- wir machen (мы делаем)
- ihr macht (вы делаете)
- sie/Sie machen (они/Вы делаете)

Другие примеры: lernen (учить), spielen (играть), wohnen (жить), kaufen (покупать).

**2. Некоторые частые сильные (нерегулярные) глаголы:**
У этих глаголов во 2-м (du) и 3-м (er/sie/es) лице единственного числа меняется корневая гласная.
*   **e → i/ie**
    *   **sprechen** (говорить): ich spreche, du spr**i**chst, er/sie/es spr**i**cht, wir sprechen, ihr sprecht, sie/Sie sprechen
    *   **lesen** (читать): ich lese, du l**ie**st, er/sie/es l**ie**st, wir lesen, ihr lest, sie/Sie lesen
    *   **geben** (давать): ich gebe, du g**i**bst, er/sie/es g**i**bt, wir geben, ihr gebt, sie/Sie geben
    *   **nehmen** (брать): ich nehme, du n**imm**st, er/sie/es n**imm**t, wir nehmen, ihr nehmt, sie/Sie nehmen (также меняется согласная)
    *   **essen** (есть, кушать): ich esse, du **iss**t, er/sie/es **iss**t, wir essen, ihr esst, sie/Sie essen
*   **a → ä**
    *   **fahren** (ехать): ich fahre, du f**ä**hrst, er/sie/es f**ä**hrt, wir fahren, ihr fahrt, sie/Sie fahren
    *   **schlafen** (спать): ich schlafe, du schl**ä**fst, er/sie/es schl**ä**ft, wir schlafen, ihr schlaft, sie/Sie schlafen

**3. Глагол "werden" (становиться) - как полнозначный:**
\`werden\` также имеет особое спряжение:
- ich werde
- du wirst
- er/sie/es wird
- wir werden
- ihr werdet
- sie/Sie werden
Пример: *Ich **werde** Arzt.* (Я стану врачом.) *Das Wetter **wird** besser.* (Погода становится лучше.)

Запоминайте формы этих глаголов!
  `,
  vocabulary: [
    { german: 'machen', russian: 'делать', example: 'Was machst du?' },
    { german: 'lernen', russian: 'учить', example: 'Wir lernen Deutsch.' },
    { german: 'sprechen (spricht)', russian: 'говорить', example: 'Er spricht Englisch.' },
    { german: 'lesen (liest)', russian: 'читать', example: 'Liest du gern?' },
    { german: 'fahren (fährt)', russian: 'ехать, ездить', example: 'Ich fahre mit dem Auto.' },
    { german: 'geben (gibt)', russian: 'давать', example: 'Gib mir das Buch!' },
    { german: 'nehmen (nimmt)', russian: 'брать', example: 'Er nimmt den Bus.' },
    { german: 'essen (isst)', russian: 'есть, кушать', example: 'Was isst du?' },
    { german: 'schlafen (schläft)', russian: 'спать', example: 'Das Kind schläft.' },
    { german: 'werden (wird)', russian: 'становиться', example: 'Es wird dunkel.' },
  ],
  readingText: `
Anna lernt Deutsch. Sie macht jeden Tag ihre Hausaufgaben. Ihr Bruder Paul fährt gern Fahrrad. Anna liest oft Bücher. Paul spricht gut Englisch. Manchmal essen sie zusammen Pizza. Anna wird bald eine Prüfung haben.
  `,
  readingComprehensionExercises: [
    {
      id: 'a1-praesens-rq1',
      question: 'Что Анна делает каждый день?',
      options: ['Ездит на велосипеде', 'Читает книги', 'Делает домашнее задание', 'Спит'],
      correctAnswer: 'Делает домашнее задание',
      explanation: 'В тексте сказано: "Sie macht jeden Tag ihre Hausaufgaben."'
    },
  ],
  exercises: [
    {
      id: 'a1-praesens-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "lernen": Du ___ Deutsch.',
      sentenceParts: ['Du ', ' Deutsch.'],
      correctAnswer: 'lernst',
      explanation: 'Для "du" окончание -st: du lernst.',
    },
    {
      id: 'a1-praesens-ex2',
      type: 'multiple_choice',
      question: 'Какая форма глагола "fahren" верна для "er"?',
      options: ['fahre', 'fährst', 'fährt', 'fahren'],
      correctAnswer: 'fährt',
      explanation: 'Сильный глагол "fahren", a → ä для "er/sie/es": er fährt.',
    },
    {
      id: 'a1-praesens-ex3',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму глагола "sprechen": Wir ___ laut.',
      sentenceParts: ['Wir ', ' laut.'],
      correctAnswer: 'sprechen',
      explanation: 'Для "wir" форма глагола совпадает с инфинитивом: wir sprechen.',
    },
    {
      id: 'a1-praesens-ex4',
      type: 'writing_prompt',
      question: 'Напиши 2-3 предложения о том, что ты делаешь каждый день, используя изученные глаголы в Präsens.',
      suggestedLength: '2-3 предложения',
    }
  ],
};
