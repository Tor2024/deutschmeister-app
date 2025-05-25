
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikSchuleKurse: Lesson = {
  id: 'a2-lexik-schule-kurse',
  level: 'A2',
  topic: 'Школьная жизнь и курсы (Schulleben und Kurse)',
  theory: `
В этом уроке мы расширим словарный запас, связанный со школой, учебным процессом и посещением различных курсов. Это поможет вам рассказывать о своем опыте обучения и понимать информацию, связанную с образованием.

**Основные понятия:**
- **die Schule (-n):** школа
- **der Unterricht:** урок, занятие (как процесс)
- **das Fach (Fächer):** учебный предмет
- **der Stundenplan (Stundenpläne):** расписание уроков
- **die Pause (-n):** перемена, перерыв
- **die Hausaufgaben (Pl.):** домашние задания
- **die Prüfung (-en):** экзамен, контрольная работа, тест
- **die Note (-n):** оценка
- **das Zeugnis (-se):** табель, аттестат
- **der Kurs (-e):** курс
- **der Sprachkurs (-e):** языковой курс
- **sich anmelden für + A:** записываться на (что-л.)
- **teilnehmen an + D:** участвовать в (чём-л.)

**Полезные фразы:**
- *Welches Fach magst du am liebsten?* (Какой предмет тебе нравится больше всего?)
- *Ich muss für die Prüfung lernen.* (Мне нужно учиться к экзамену.)
- *Hast du deine Hausaufgaben gemacht?* (Ты сделал свои домашние задания?)
- *Ich möchte mich für einen Deutschkurs anmelden.* (Я хотел бы записаться на курс немецкого языка.)
`,
  vocabulary: [
    { german: 'die Schule (-n)', russian: 'школа', example: 'Meine Kinder gehen gerne in die Schule.' },
    { german: 'der Unterricht', russian: 'урок, занятие (процесс)', example: 'Der Unterricht beginnt um 8 Uhr.' },
    { german: 'das Fach (Fächer)', russian: 'предмет (учебный)', example: 'Mathe ist mein Lieblingsfach.' },
    { german: 'der Stundenplan (Stundenpläne)', russian: 'расписание уроков', example: 'Kannst du mir den Stundenplan zeigen?' },
    { german: 'die Pause (-n)', russian: 'перемена, перерыв', example: 'In der Pause spielen wir Fußball.' },
    { german: 'die Hausaufgaben (Pl.)', russian: 'домашние задания', example: 'Hast du viele Hausaufgaben bekommen?' },
    { german: 'die Prüfung (-en)', russian: 'экзамен, тест', example: 'Die Prüfung war nicht einfach.' },
    { german: 'eine Prüfung bestehen', russian: 'сдать экзамен', example: 'Ich hoffe, ich bestehe die Prüfung.' },
    { german: 'durch eine Prüfung fallen', russian: 'провалить экзамен', example: 'Leider ist er durch die Prüfung gefallen.' },
    { german: 'die Note (-n)', russian: 'оценка, отметка', example: 'Sie hat eine gute Note bekommen.' },
    { german: 'das Zeugnis (-se)', russian: 'табель, аттестат', example: 'Am Ende des Schuljahres gibt es Zeugnisse.' },
    { german: 'der Schüler (-) / die Schülerin (-nen)', russian: 'ученик / ученица' },
    { german: 'der Lehrer (-) / die Lehrerin (-nen)', russian: 'учитель / учительница' },
    { german: 'lernen', russian: 'учить, учиться', example: 'Wir lernen Deutsch zusammen.' },
    { german: 'unterrichten', russian: 'преподавать', example: 'Frau Meier unterrichtet Englisch.' },
    { german: 'der Kurs (-e)', russian: 'курс', example: 'Ich besuche einen Computerkurs.' },
    { german: 'der Sprachkurs (-e)', russian: 'языковой курс', example: 'Der Deutsch-Sprachkurs ist sehr intensiv.' },
    { german: 'sich anmelden für + A', russian: 'записываться на что-л.', example: 'Er hat sich für einen Schwimmkurs angemeldet.' },
    { german: 'teilnehmen an + D (nimmt teil)', russian: 'участвовать в чём-л.', example: 'Möchtest du am Wettbewerb teilnehmen?' },
    { german: 'der Teilnehmer (-) / die Teilnehmerin (-nen)', russian: 'участник / участница' },
    { german: 'das Zertifikat (-e)', russian: 'сертификат', example: 'Nach dem Kurs bekommt man ein Zertifikat.' },
  ],
  readingText: `
Lisa besucht die 8. Klasse einer Realschule. Ihr Schultag beginnt um 7:45 Uhr. Ihr Lieblingsfach ist Englisch, weil die Lehrerin sehr nett ist und der Unterricht immer interessant ist. Mathematik mag sie nicht so gern, aber sie weiß, dass es ein wichtiges Fach ist.
Nach der Schule muss Lisa Hausaufgaben machen. Manchmal sind es viele, besonders vor einer Prüfung.
Neben der Schule besucht Lisa zweimal pro Woche einen Tanzkurs. Sie tanzt sehr gern und hat dort viele Freundinnen gefunden. Am Ende des Jahres gibt es immer eine kleine Aufführung, auf die sich alle Teilnehmer freuen.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-schule-kurse-rq1',
      question: 'Какой любимый предмет у Лизы в школе?',
      options: ['Математика', 'Немецкий', 'Английский', 'История'],
      correctAnswer: 'Английский',
      explanation: 'Im Text steht: "Ihr Lieblingsfach ist Englisch..."',
    },
    {
      id: 'a2-lexik-schule-kurse-rq2',
      question: 'Какой курс Лиза посещает помимо школы?',
      options: ['Музыкальный курс', 'Спортивный курс', 'Танцевальный курс', 'Компьютерный курс'],
      correctAnswer: 'Танцевальный курс',
      explanation: 'Im Text steht: "Neben der Schule besucht Lisa zweimal pro Woche einen Tanzkurs."',
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-schule-kurse-ex1',
      type: 'multiple_choice',
      question: 'Was ist "der Stundenplan"?',
      options: ['Домашнее задание', 'Оценка', 'Расписание уроков', 'Учебный предмет'],
      correctAnswer: 'Расписание уроков',
      explanation: '"Der Stundenplan" ist das Расписание уроков.',
    },
    {
      id: 'a2-lexik-schule-kurse-ex2',
      type: 'fill_in_the_blank',
      question: 'Ich möchte mich für einen Deutsch___ anmelden.',
      sentenceParts: ['Ich möchte mich für einen Deutsch', ' anmelden.'],
      correctAnswer: 'kurs',
      explanation: '"Deutschkurs" означает "курс немецкого языка".',
    },
    {
      id: 'a2-lexik-schule-kurse-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я должен учиться к экзамену."',
      prompt: 'Я должен учиться к экзамену.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich muss für die Prüfung lernen.',
      explanation: '"Учиться к экзамену" - "für die Prüfung lernen".',
    },
    {
      id: 'a2-lexik-schule-kurse-ex4',
      type: 'writing_prompt',
      question: 'Erzähle von deinem Lieblingsfach in der Schule oder einem Kurs, den du besuchst/besuchen möchtest. (2-3 Sätze)',
      suggestedLength: '2-3 Sätze',
    }
  ],
};
