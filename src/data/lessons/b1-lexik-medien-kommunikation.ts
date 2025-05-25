
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB1LexikMedienKommunikation: Lesson = {
  id: 'b1-lexik-medien-kommunikation',
  level: 'B1',
  topic: 'СМИ и коммуникация (Medien und Kommunikation)',
  theory: `
В этом уроке мы изучим лексику, связанную со средствами массовой информации (СМИ) и различными формами коммуникации. В современном мире умение ориентироваться в информационном пространстве и эффективно общаться очень важно.

**Основные виды СМИ:**
- **das Fernsehen:** телевидение
- **das Radio:** радио
- **die Zeitung (-en):** газета
- **die Zeitschrift (-en):** журнал
- **das Internet:** интернет
- **die Webseite / die Website (-s):** веб-сайт, интернет-страница
- **soziale Netzwerke (Pl.):** социальные сети (например, Facebook, Instagram)
- **der Blog (-s):** блог
- **der Podcast (-s):** подкаст

**Виды информации и контента:**
- **die Nachrichten (Pl.):** новости
- **der Artikel (-):** статья
- **der Bericht (-e):** отчет, сообщение
- **die Sendung (-en):** передача (теле-, радио-)
- **der Film (-e):** фильм
- **die Serie (-n):** сериал
- **die Werbung (-en):** реклама
- **die Information (-en):** информация

**Коммуникация:**
- **kommunizieren:** общаться, коммуницировать
- **sprechen (spricht, sprach, hat gesprochen):** говорить, разговаривать
- **sich unterhalten (unterhält sich, unterhielt sich, hat sich unterhalten):** беседовать, общаться
- **diskutieren (über + A):** дискутировать, обсуждать (что-либо)
- **telefonieren (mit + D):** говорить по телефону (с кем-либо)
- **anrufen (ruft an, rief an, hat angerufen):** звонить по телефону (кому-либо)
- **schreiben (schreibt, schrieb, hat geschrieben):** писать
- **die E-Mail (-s):** электронное письмо
- **die SMS (Pl. SMS):** СМС-сообщение
- **die Nachricht (-en) (auch: Botschaft):** сообщение, известие
- **die Meinung (-en):** мнение
- **argumentieren:** аргументировать
- **informieren (über + A):** информировать (о чем-либо)

**Полезные фразы:**
- *Ich sehe gern Nachrichten im Fernsehen.* (Я люблю смотреть новости по телевизору.)
- *Liest du oft Zeitungen oder Zeitschriften?* (Ты часто читаешь газеты или журналы?)
- *Welche Webseiten besuchst du regelmäßig?* (Какие веб-сайты ты регулярно посещаешь?)
- *Wir müssen über dieses wichtige Thema sprechen/diskutieren.* (Мы должны поговорить/обсудить эту важную тему.)
- *Kann ich dich später anrufen?* (Могу я тебе позвонить позже?)
- *Was ist deine Meinung dazu?* (Каково твое мнение по этому поводу?)
`,
  vocabulary: [
    { german: 'die Medien (Pl.)', russian: 'СМИ, средства массовой информации' },
    { german: 'das Fernsehen', russian: 'телевидение', example: 'Abends sehe ich oft Fernsehen.' },
    { german: 'das Radio (-s)', russian: 'радио', example: 'Ich höre gern Radio im Auto.' },
    { german: 'die Zeitung (-en)', russian: 'газета', example: 'Hast du heute schon die Zeitung gelesen?' },
    { german: 'die Zeitschrift (-en)', russian: 'журнал', example: 'Diese Zeitschrift erscheint monatlich.' },
    { german: 'das Internet', russian: 'интернет', example: 'Ohne Internet kann ich nicht arbeiten.' },
    { german: 'die Webseite (-s) / die Website (-s)', russian: 'веб-сайт, интернет-страница' },
    { german: 'soziale Netzwerke (Pl.)', russian: 'социальные сети', example: 'Viele Jugendliche nutzen soziale Netzwerke.' },
    { german: 'die Nachrichten (Pl.)', russian: 'новости', example: 'Die Nachrichten kommen um 20 Uhr.' },
    { german: 'der Artikel (-)', russian: 'статья', example: 'Ich habe einen interessanten Artikel gelesen.' },
    { german: 'kommunizieren', russian: 'общаться, коммуницировать', example: 'Es ist wichtig, offen zu kommunizieren.' },
    { german: 'telefonieren (mit + D)', russian: 'говорить по телефону (с кем-л.)', example: 'Sie telefoniert oft mit ihrer Freundin.' },
    { german: 'anrufen (ruft an)', russian: 'звонить (кому-л.)', example: 'Ruf mich bitte morgen an!' },
    { german: 'die E-Mail (-s)', russian: 'электронное письмо', example: 'Ich muss noch einige E-Mails beantworten.' },
    { german: 'die Information (-en)', russian: 'информация', example: 'Wo finde ich mehr Informationen dazu?' },
    { german: 'die Meinung (-en)', russian: 'мнение', example: 'Das ist nur meine persönliche Meinung.' },
    { german: 'diskutieren (über + A)', russian: 'дискутировать, обсуждать (что-л.)', example: 'Wir haben lange über Politik diskutiert.' },
    { german: 'die Werbung (-en)', russian: 'реклама', example: 'Ich mag keine Werbung im Fernsehen.' },
    { german: 'die Sendung (-en)', russian: 'передача (ТВ, радио)', example: 'Meine Lieblingssendung kommt am Freitag.' },
  ],
  readingText: `
Die Medienlandschaft hat sich in den letzten Jahrzehnten stark verändert. Früher waren Zeitungen, Radio und Fernsehen die Hauptinformationsquellen. Heute spielt das Internet eine dominierende Rolle. Viele Menschen lesen Nachrichten online auf Webseiten von Zeitungen oder Nachrichtenportalen. Auch soziale Netzwerke sind zu wichtigen Plattformen für den Informationsaustausch und die Meinungsbildung geworden.

Diese Entwicklung hat sowohl Vor- als auch Nachteile. Einerseits ist der Zugang zu Informationen schneller und einfacher geworden. Man kann sich jederzeit und überall über aktuelle Ereignisse informieren. Andererseits ist es oft schwierig, die Glaubwürdigkeit von Informationen im Internet zu überprüfen. Fake News und Desinformation können sich sehr schnell verbreiten und die öffentliche Meinung manipulieren.

Deshalb ist Medienkompetenz heute wichtiger denn je. Das bedeutet, dass man lernen muss, Informationen kritisch zu hinterfragen, Quellen zu überprüfen und verschiedene Perspektiven zu berücksichtigen. Eine informierte und kritische Auseinandersetzung mit Medieninhalten ist entscheidend für eine funktionierende Demokratie.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-lexik-medien-kommunikation-rq1',
      question: 'Welche Rolle spielt das Internet heute laut Text bei der Informationsbeschaffung?',
      options: [
        'Eine untergeordnete Rolle.',
        'Keine Rolle, da Zeitungen wichtiger sind.',
        'Eine dominierende Rolle.',
        'Nur eine Rolle für junge Leute.'
      ],
      correctAnswer: 'Eine dominierende Rolle.',
      explanation: 'Im Text steht: "Heute spielt das Internet eine dominierende Rolle."'
    },
    {
      id: 'b1-lexik-medien-kommunikation-rq2',
      question: 'Was ist laut Text ein Nachteil der Informationsverbreitung im Internet?',
      options: [
        'Der Zugang zu Informationen ist zu langsam.',
        'Informationen sind nur für bestimmte Nutzergruppen zugänglich.',
        'Es ist oft schwierig, die Glaubwürdigkeit von Informationen zu überprüfen.',
        'Es gibt zu wenige Informationsquellen online.'
      ],
      correctAnswer: 'Es ist oft schwierig, die Glaubwürdigkeit von Informationen zu überprüfen.',
      explanation: 'Im Text wird erwähnt: "Andererseits ist es oft schwierig, die Glaubwürdigkeit von Informationen im Internet zu überprüfen."'
    },
    {
      id: 'b1-lexik-medien-kommunikation-rq3',
      question: 'Was versteht man unter Medienkompetenz im Kontext des Textes?',
      options: [
        'Die Fähigkeit, schnell im Internet zu surfen.',
        'Das Wissen, wie man soziale Netzwerke benutzt.',
        'Die Fähigkeit, Informationen kritisch zu hinterfragen und Quellen zu überprüfen.',
        'Das Abonnieren vieler verschiedener Zeitungen.'
      ],
      correctAnswer: 'Die Fähigkeit, Informationen kritisch zu hinterfragen und Quellen zu überprüfen.',
      explanation: 'Medienkompetenz wird im Text als die Fähigkeit beschrieben, "...Informationen kritisch zu hinterfragen, Quellen zu überprüfen und verschiedene Perspektiven zu berücksichtigen."'
    }
  ],
  exercises: [
    {
      id: 'b1-lexik-medien-kommunikation-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "газета"?',
      options: ['die Zeitschrift', 'das Buch', 'die Zeitung', 'der Artikel'],
      correctAnswer: 'die Zeitung',
      explanation: '"Die Zeitung" означает "газета".',
    },
    {
      id: 'b1-lexik-medien-kommunikation-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ jeden Tag die Nachrichten im Internet."',
      sentenceParts: ['Ich ', ' jeden Tag die Nachrichten im Internet.'],
      correctAnswer: 'lese', // или 'sehe', 'höre' в зависимости от контекста новостей
      explanation: '"Lesen" (читать) - подходящий глагол для новостей в интернете. Также возможны "sehen" (смотреть) или "hören" (слушать).',
    },
    {
      id: 'b1-lexik-medien-kommunikation-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы должны поговорить об этом."',
      prompt: 'Мы должны поговорить об этом.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir müssen darüber sprechen.',
      explanation: '"Говорить об этом" - "darüber sprechen" (sprechen über + Akkusativ; "das" становится "darüber").',
    },
    {
      id: 'b1-lexik-medien-kommunikation-ex4',
      type: 'multiple_choice',
      question: 'Какое слово означает "мнение"?',
      options: ['die Information', 'die Werbung', 'die Meinung', 'die Diskussion'],
      correctAnswer: 'die Meinung',
      explanation: '"Die Meinung" означает "мнение".',
    },
    {
      id: 'b1-lexik-medien-kommunikation-wp1',
      type: 'writing_prompt',
      question: 'Welche Rolle spielen soziale Medien in Ihrem Leben? Schreiben Sie 3-4 Sätze. (Какую роль социальные сети играют в вашей жизни? Напишите 3-4 предложения.)',
      suggestedLength: '3-4 Sätze'
    }
  ],
};
