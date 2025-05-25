
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikElektronikTechnik: Lesson = {
  id: 'a2-lexik-elektronik-technik',
  level: 'A2',
  topic: 'Электроника и техника (базовые понятия)',
  theory: `
В этом уроке мы познакомимся с базовой лексикой, связанной с электронными устройствами и техникой, которой мы пользуемся каждый день. Мы научимся называть основные устройства и говорить о простых действиях и проблемах с ними.

**Основные устройства:**
- **das Handy / das Smartphone:** мобильный телефон / смартфон
- **der Computer:** компьютер
- **der Laptop:** ноутбук
- **das Tablet:** планшет
- **der Fernseher:** телевизор
- **die Kamera:** камера, фотоаппарат
- **der Drucker:** принтер
- **die Maus:** мышь (компьютерная)
- **die Tastatur:** клавиатура
- **der Bildschirm:** экран, монитор

**Действия и состояния:**
- **einschalten:** включать (например, den Computer einschalten)
- **ausschalten:** выключать (den Fernseher ausschalten)
- **kaputt:** сломанный, неисправный (Mein Handy ist kaputt.)
- **funktionieren:** работать, функционировать (Der Drucker funktioniert nicht.)
- **reparieren:** ремонтировать (Kann man das reparieren?)
- **aufladen:** заряжать (Ich muss mein Handy aufladen.)
- **drucken:** печатать (Ich muss dieses Dokument drucken.)

**Интернет и E-Mail:**
- **das Internet:** интернет
- **das WLAN:** Wi-Fi
- **eine E-Mail schreiben / senden / bekommen:** писать / отправлять / получать электронное письмо

**Полезные фразы:**
- *Mein Computer ist sehr alt.* (Мой компьютер очень старый.)
- *Der Akku von meinem Smartphone ist leer.* (Батарея моего смартфона разряжена.)
- *Funktioniert das WLAN hier?* (Здесь работает Wi-Fi?)
- *Ich brauche einen neuen Drucker.* (Мне нужен новый принтер.)
`,
  vocabulary: [
    { german: 'das Handy (-s)', russian: 'мобильный телефон', example: 'Hast du dein Handy dabei?' },
    { german: 'das Smartphone (-s)', russian: 'смартфон', example: 'Moderne Smartphones können sehr viel.' },
    { german: 'der Computer (-)', russian: 'компьютер', example: 'Ich arbeite oft am Computer.' },
    { german: 'der Laptop (-s)', russian: 'ноутбук', example: 'Ein Laptop ist praktisch für unterwegs.' },
    { german: 'das Tablet (-s)', russian: 'планшет', example: 'Kinder spielen gern auf dem Tablet.' },
    { german: 'der Fernseher (-)', russian: 'телевизор', example: 'Abends sehen wir manchmal Fernseher.' },
    { german: 'die Kamera (-s)', russian: 'камера, фотоаппарат', example: 'Ich mache gern Fotos mit meiner Kamera.' },
    { german: 'der Drucker (-)', russian: 'принтер', example: 'Der Drucker hat kein Papier mehr.' },
    { german: 'einschalten', russian: 'включать', example: 'Kannst du bitte das Licht einschalten?' },
    { german: 'ausschalten', russian: 'выключать', example: 'Vergiss nicht, den Computer auszuschalten.' },
    { german: 'kaputt', russian: 'сломанный, неисправный', example: 'Meine Waschmaschine ist kaputt.' },
    { german: 'funktionieren', russian: 'работать, функционировать', example: 'Diese alte Uhr funktioniert immer noch.' },
    { german: 'reparieren', russian: 'ремонтировать, чинить', example: 'Man kann nicht alles reparieren.' },
    { german: 'aufladen (lädt auf)', russian: 'заряжать (батарею)', example: 'Ich muss den Akku meines Handys aufladen.' },
    { german: 'das Internet', russian: 'интернет', example: 'Wir haben zu Hause schnelles Internet.' },
    { german: 'die E-Mail (-s)', russian: 'электронное письмо', example: 'Ich habe dir eine E-Mail geschickt.' },
  ],
  readingText: `
Lisa hat ein Problem mit ihrem Laptop. Gestern Abend hat er noch gut funktioniert, aber heute Morgen kann sie ihn nicht mehr einschalten. Der Bildschirm bleibt schwarz. Lisa braucht ihren Laptop für die Hausaufgaben.
Sie fragt ihren Vater um Hilfe. "Papa, mein Laptop ist kaputt! Kannst du ihn dir bitte ansehen?"
Ihr Vater schaut sich den Laptop an. Er prüft das Kabel und den Akku. "Vielleicht ist der Akku ganz leer. Wir müssen ihn zuerst aufladen", sagt er. Nach einer Stunde versuchen sie es wieder. Jetzt funktioniert der Laptop! Lisa ist sehr froh.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-elektronik-technik-rq1',
      question: 'Какая проблема была у Лизы с ноутбуком?',
      options: ['Он работал слишком медленно', 'Он не включался', 'Клавиатура не работала', 'Не было интернета'],
      correctAnswer: 'Он не включался',
      explanation: 'В тексте сказано: "...heute Morgen kann sie ihn nicht mehr einschalten. Der Bildschirm bleibt schwarz."',
    },
    {
      id: 'a2-lexik-elektronik-technik-rq2',
      question: 'Что предположил папа Лизы в качестве причины проблемы?',
      options: ['Ноутбук слишком старый', 'Аккумулятор полностью разряжен', 'Вирус на компьютере', 'Сломался экран'],
      correctAnswer: 'Аккумулятор полностью разряжен',
      explanation: 'Папа говорит: "Vielleicht ist der Akku ganz leer. Wir müssen ihn zuerst aufladen".',
    },
  ],
  exercises: [
    {
      id: 'a2-lexik-elektronik-technik-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "включать" (например, компьютер)?',
      options: ['ausschalten', 'reparieren', 'einschalten', 'drucken'],
      correctAnswer: 'einschalten',
      explanation: '"Einschalten" означает "включать".',
    },
    {
      id: 'a2-lexik-elektronik-technik-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Mein Handy-Akku ist leer, ich muss ihn ___."',
      sentenceParts: ['Mein Handy-Akku ist leer, ich muss ihn ', '.'],
      correctAnswer: 'aufladen',
      explanation: '"Aufladen" означает "заряжать".',
    },
    {
      id: 'a2-lexik-elektronik-technik-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Телевизор не работает."',
      prompt: 'Телевизор не работает.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Fernseher funktioniert nicht.',
      explanation: '"Работать/функционировать" (о технике) - "funktionieren".',
    },
    {
      id: 'a2-lexik-elektronik-technik-ex4',
      type: 'multiple_choice',
      question: 'Какое устройство используется для печати документов?',
      options: ['die Maus', 'der Bildschirm', 'der Drucker', 'die Tastatur'],
      correctAnswer: 'der Drucker',
      explanation: '"Der Drucker" (принтер) используется для печати.',
    },
    {
      id: 'a2-lexik-elektronik-technik-wp1',
      type: 'writing_prompt',
      question: 'Welche elektronischen Geräte benutzt du jeden Tag und wofür? (Какими электронными устройствами ты пользуешься каждый день и для чего? 2-3 предложения)',
      suggestedLength: '2-3 предложения',
    },
  ],
};
