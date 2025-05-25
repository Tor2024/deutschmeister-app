
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikBriefeEmails: Lesson = {
  id: 'a2-lexik-briefe-emails',
  level: 'A2',
  topic: 'Лексика для электронной переписки и писем (Einfache E-Mails und Briefe)',
  theory: `
В этом уроке мы научимся писать простые неофициальные письма и электронные сообщения (E-Mails) на немецком языке. Важно знать основные фразы для приветствия, основной части и прощания.

**Структура простого письма/E-Mail:**
1.  **Приветствие (Anrede):**
    *   *Liebe Anna,* (Дорогая Анна,)
    *   *Lieber Max,* (Дорогой Макс,)
    *   *Hallo Peter,* (Привет, Петер,)
    *   Для более официальных, но все еще личных писем: *Sehr geehrte Frau Müller,* (Уважаемая госпожа Мюллер,) / *Sehr geehrter Herr Schmidt,* (Уважаемый господин Шмидт,) (Это уже ближе к B1, но полезно знать).
2.  **Вступление (Einleitung):** Часто начинается с маленькой буквы, если обращение заканчивается запятой.
    *   *wie geht es dir?* (Как у тебя дела?)
    *   *danke für deine E-Mail / deinen Brief.* (Спасибо за твое письмо.)
    *   *ich hoffe, es geht dir gut.* (Надеюсь, у тебя все хорошо.)
    *   *ich schreibe dir, weil ich eine Frage habe / dich einladen möchte.* (Я пишу тебе, потому что у меня есть вопрос / я хочу тебя пригласить.)
3.  **Основная часть (Hauptteil):** Здесь вы излагаете цель вашего письма.
    *   *Ich möchte dich zu meiner Geburtstagsparty am Samstag einladen.* (Я хочу пригласить тебя на мой день рождения в субботу.)
    *   *Kannst du mir vielleicht bei meinen Hausaufgaben helfen?* (Ты не мог бы мне помочь с домашним заданием?)
    *   *Ich wollte dir von meinem Urlaub erzählen.* (Я хотел тебе рассказать о своем отпуске.)
4.  **Заключение (Schluss):**
    *   *Ich freue mich auf deine Antwort.* (Я с нетерпением жду твоего ответа.)
    *   *Schreib mir bald!* (Напиши мне скоро!)
    *   *Was denkst du darüber?* (Что ты думаешь об этом?)
5.  **Прощальная формула (Grußformel):**
    *   *Viele Grüße* (Большой привет)
    *   *Liebe Grüße* (С наилучшими пожеланиями / Сердечный привет) - часто используется
    *   *Herzliche Grüße* (Сердечные пожелания)
    *   Для более формальных: *Mit freundlichen Grüßen* (С дружеским приветом / С уважением)
6.  **Подпись (Unterschrift):**
    *   *Dein/e [Твое имя]* (Твой/Твоя ...)

Помните о вежливости и ясности изложения.
`,
  vocabulary: [
    { german: 'der Brief (-e)', russian: 'письмо (бумажное)', example: 'Ich schreibe einen Brief an meine Oma.' },
    { german: 'die E-Mail (-s)', russian: 'электронное письмо', example: 'Hast du meine E-Mail bekommen?' },
    { german: 'Liebe/r...', russian: 'Дорогая/Дорогой...', example: 'Liebe Maria, ...' },
    { german: 'Hallo...', russian: 'Привет...', example: 'Hallo Paul, ...' },
    { german: 'Wie geht es dir/Ihnen?', russian: 'Как у тебя/Вас дела?' },
    { german: 'Danke für...', russian: 'Спасибо за...', example: 'Danke für deine schnelle Antwort.' },
    { german: 'ich schreibe dir/Ihnen, weil...', russian: 'я пишу тебе/Вам, потому что...', example: 'Ich schreibe dir, weil ich Hilfe brauche.' },
    { german: 'einladen (lädt ein)', russian: 'приглашать', example: 'Ich möchte dich zum Essen einladen.' },
    { german: 'die Einladung (-en)', russian: 'приглашение' },
    { german: 'die Antwort (-en)', russian: 'ответ', example: 'Ich warte auf deine Antwort.' },
    { german: 'antworten (auf + A)', russian: 'отвечать (на что-л.)' },
    { german: 'Viele Grüße / Liebe Grüße', russian: 'Большой привет / С наилучшими пожеланиями (в конце письма)' },
    { german: 'Mit freundlichen Grüßen', russian: 'С уважением (более формально)' },
    { german: 'Bis bald!', russian: 'До скорого!' },
    { german: 'schicken / senden', russian: 'отправлять, посылать', example: 'Ich schicke dir die Fotos per E-Mail.' },
    { german: 'die Anlage (-n) / der Anhang (Anhänge)', russian: 'приложение (к письму)', example: 'Im Anhang findest du die Dokumente.' },
  ],
  readingText: `
Liebe Anna,

wie geht es dir? Mir geht es gut.
Ich schreibe dir, weil ich dich zu meiner Geburtstagsparty einladen möchte. Die Party ist am nächsten Samstag um 18 Uhr bei mir zu Hause.
Es gibt Kuchen und Musik. Meine Freunde kommen auch.
Kannst du kommen? Bitte gib mir bald Bescheid.

Viele Grüße
Dein Max
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-briefe-emails-rq1',
      question: 'Почему Макс пишет Анне?',
      options: ['Чтобы спросить, как у нее дела', 'Чтобы пригласить ее на день рождения', 'Чтобы рассказать о своем отпуске', 'Чтобы попросить о помощи'],
      correctAnswer: 'Чтобы пригласить ее на день рождения',
      explanation: 'В тексте сказано: "Ich schreibe dir, weil ich dich zu meiner Geburtstagsparty einladen möchte."',
    },
    {
      id: 'a2-lexik-briefe-emails-rq2',
      question: 'Когда состоится вечеринка?',
      options: ['В эту субботу в 6 вечера', 'В следующую субботу в 6 вечера', 'В следующую пятницу в 18:00', 'В эту пятницу вечером'],
      correctAnswer: 'В следующую субботу в 6 вечера',
      explanation: 'В тексте: "Die Party ist am nächsten Samstag um 18 Uhr..." (18 Uhr = 6 вечера).',
    },
  ],
  exercises: [
    {
      id: 'a2-lexik-briefe-emails-ex1',
      type: 'multiple_choice',
      question: 'Какой фразой обычно заканчивают неофициальное письмо другу?',
      options: ['Mit freundlichen Grüßen', 'Hochachtungsvoll', 'Viele Grüße', 'Sehr geehrte/r'],
      correctAnswer: 'Viele Grüße',
      explanation: '"Viele Grüße" или "Liebe Grüße" - типичные прощальные формулы в неофициальных письмах.',
    },
    {
      id: 'a2-lexik-briefe-emails-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящее обращение для письма подруге Лене: "___ Lena,"',
      sentenceParts: ['', ' Lena,'],
      correctAnswer: 'Liebe',
      explanation: 'Для женского имени используется "Liebe".',
    },
    {
      id: 'a2-lexik-briefe-emails-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Спасибо за твое письмо."',
      prompt: 'Спасибо за твое письмо.',
      languageDirection: 'to_german',
      correctAnswer: 'Danke für deinen Brief.', // или Danke für deine E-Mail.
      explanation: '"Danke für + Akkusativ". "Dein Brief" (м.р.) в Akkusativ -> "deinen Brief".',
    },
    {
      id: 'a2-lexik-briefe-emails-wp1',
      type: 'writing_prompt',
      question: 'Напиши короткий email другу (2-3 предложения), чтобы спросить, как у него дела и что он делает на выходных.',
      suggestedLength: '2-3 предложения',
    },
  ],
};
