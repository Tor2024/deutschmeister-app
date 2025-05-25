
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA1LexikSchuleArbeitEinfach: Lesson = {
  id: 'a1-lexik-schule-arbeit-einfach',
  level: 'A1',
  topic: 'Простая школьная и рабочая лексика',
  theory: `
В этом уроке мы выучим несколько очень простых слов, которые используются, когда мы говорим о школе или простой работе. Это поможет вам рассказать о своей учебе или работе на базовом уровне.
Например, вы сможете сказать, что вы ученик или что вы работаете.
  `,
  vocabulary: [
    { german: 'die Schule (-n)', russian: 'школа', example: 'Ich gehe in die Schule.' },
    { german: 'der Lehrer (-) / die Lehrerin (-nen)', russian: 'учитель / учительница', example: 'Mein Lehrer ist nett.' },
    { german: 'der Schüler (-) / die Schülerin (-nen)', russian: 'ученик / ученица', example: 'Die Schülerin lernt Deutsch.' },
    { german: 'lernen', russian: 'учить, учиться', example: 'Wir lernen zusammen.' },
    { german: 'lesen (liest)', russian: 'читать', example: 'Ich lese ein Buch.' },
    { german: 'schreiben (schreibt)', russian: 'писать', example: 'Du schreibst einen Brief.' },
    { german: 'das Buch (Bücher)', russian: 'книга', example: 'Das ist mein Lieblingsbuch.' },
    { german: 'das Heft (-e)', russian: 'тетрадь', example: 'Ich brauche ein neues Heft.' },
    { german: 'der Stift (-e)', russian: 'ручка, карандаш', example: 'Hast du einen Stift für mich?' },
    { german: 'die Hausaufgabe (-n)', russian: 'домашнее задание', example: 'Ich mache meine Hausaufgaben.' },
    { german: 'die Arbeit (-en)', russian: 'работа, труд', example: 'Mein Vater hat viel Arbeit.' },
    { german: 'arbeiten', russian: 'работать', example: 'Wo arbeitest du?' },
    { german: 'der Beruf (-e)', russian: 'профессия (очень базово)', example: 'Was ist dein Beruf?' },
    { german: 'Geld verdienen', russian: 'зарабатывать деньги (очень просто)', example: 'Er muss Geld verdienen.' },
  ],
  readingText: `
Hallo, ich bin Lisa. Ich bin Schülerin. Ich gehe jeden Tag in die Schule.
In der Schule lerne ich Deutsch und Mathe. Mein Lehrer heißt Herr Schmidt.
Nach der Schule mache ich meine Hausaufgaben. Ich lese gern Bücher und schreibe Geschichten.
Mein Bruder Paul arbeitet. Er verdient Geld.
  `,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-schule-arbeit-einfach-rq1',
      question: 'Кто такая Лиза?',
      options: ['Учительница', 'Ученица', 'Работает', 'Мама'],
      correctAnswer: 'Ученица',
      explanation: 'В тексте сказано: "Ich bin Schülerin." (Я ученица.)',
    },
    {
      id: 'a1-lexik-schule-arbeit-einfach-rq2',
      question: 'Что Лиза делает после школы?',
      options: ['Работает', 'Идет гулять', 'Делает домашние задания', 'Смотрит телевизор'],
      correctAnswer: 'Делает домашние задания',
      explanation: 'В тексте сказано: "Nach der Schule mache ich meine Hausaufgaben."',
    },
  ],
  exercises: [
    {
      id: 'a1-lexik-schule-arbeit-einfach-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "школа"?',
      options: ['die Arbeit', 'die Schule', 'das Büro', 'der Unterricht'],
      correctAnswer: 'die Schule',
      explanation: '"Die Schule" означает "школа".',
    },
    {
      id: 'a1-lexik-schule-arbeit-einfach-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ (читать) gern Bücher."',
      sentenceParts: ['Ich ', ' gern Bücher.'],
      correctAnswer: 'lese',
      explanation: '"Читать" - "lesen". Для "ich" форма "lese".',
    },
    {
      id: 'a1-lexik-schule-arbeit-einfach-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мой учитель добрый."',
      prompt: 'Мой учитель добрый.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Lehrer ist nett.',
      explanation: '"Учитель" - "der Lehrer". "Мой учитель" - "Mein Lehrer". "Добрый/милый" - "nett".',
    },
    {
      id: 'a1-lexik-schule-arbeit-einfach-wp1',
      type: 'writing_prompt',
      question: 'Was machst du in der Schule oder bei deiner Arbeit? Schreibe 1-2 Sätze. (Что ты делаешь в школе или на своей работе? Напиши 1-2 предложения.)',
      suggestedLength: '1-2 предложения',
    },
  ],
};
