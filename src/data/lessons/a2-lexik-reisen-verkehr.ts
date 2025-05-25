
import type { Lesson } from '@/types';

export const lessonA2LexikReisenVerkehr: Lesson = {
  id: 'a2-lexik-reisen-verkehr',
  level: 'A2',
  topic: 'Путешествия и транспорт (Reisen und Verkehr)',
  theory: `
В этом уроке мы выучим слова и фразы, связанные с путешествиями и различными видами транспорта. Эта лексика поможет вам ориентироваться в поездках, покупать билеты и спрашивать дорогу.

**Основные вопросы и фразы:**
- *Wo ist der Bahnhof / die Haltestelle / der Flughafen?* (Где вокзал / остановка / аэропорт?)
- *Wann fährt der nächste Zug/Bus nach...?* (Когда отправляется следующий поезд/автобус в...?)
- *Ich möchte eine Fahrkarte nach [Город], bitte.* (Я хотел бы билет до [Город], пожалуйста.)
- *Einfach oder hin und zurück?* (В одну сторону или туда и обратно?)
- *Auf welchem Gleis fährt der Zug ab?* (С какого пути отправляется поезд?)
- *Muss ich umsteigen?* (Мне нужно делать пересадку?)
`,
  vocabulary: [
    { german: 'reisen', russian: 'путешествовать', example: 'Ich reise gern mit dem Zug.' },
    { german: 'fahren (fährt)', russian: 'ехать, ездить, водить', example: 'Wir fahren mit dem Auto in den Urlaub.' },
    { german: 'fliegen (fliegt)', russian: 'летать', example: 'Das Flugzeug fliegt nach New York.' },
    { german: 'der Zug (Züge)', russian: 'поезд', example: 'Der Zug kommt pünktlich an.' },
    { german: 'das Auto (-s)', russian: 'автомобиль, машина', example: 'Mein Auto ist rot.' },
    { german: 'das Flugzeug (-e)', russian: 'самолет', example: 'Das Flugzeug startet um 10 Uhr.' },
    { german: 'der Bus (Busse)', russian: 'автобус', example: 'Ich nehme den Bus zur Arbeit.' },
    { german: 'das Fahrrad (Fahrräder)', russian: 'велосипед', example: 'Am Wochenende fahre ich gern Fahrrad.' },
    { german: 'die U-Bahn (-en)', russian: 'метро', example: 'Die U-Bahn ist sehr schnell.' },
    { german: 'die Straßenbahn (-en)', russian: 'трамвай', example: 'Die Straßenbahn hält direkt vor dem Museum.' },
    { german: 'der Bahnhof (Bahnhöfe)', russian: 'вокзал', example: 'Der Hauptbahnhof ist sehr groß.' },
    { german: 'der Flughafen (Flughäfen)', russian: 'аэропорт', example: 'Wir müssen um 7 Uhr am Flughafen sein.' },
    { german: 'die Haltestelle (-n)', russian: 'остановка (автобуса, трамвая)', example: 'Wo ist die nächste Bushaltestelle?' },
    { german: 'das Gleis (-e)', russian: 'железнодорожный путь, платформа', example: 'Der Zug nach Hamburg fährt von Gleis 5 ab.' },
    { german: 'die Fahrkarte (-n) / das Ticket (-s)', russian: 'билет (на транспорт)', example: 'Haben Sie Ihre Fahrkarte dabei?' },
    { german: 'der Koffer (-)', russian: 'чемодан', example: 'Mein Koffer ist sehr schwer.' },
    { german: 'das Gepäck', russian: 'багаж (собират.)', example: 'Wie viel Gepäck darf ich mitnehmen?' },
    { german: 'einsteigen (steigt ein)', russian: 'входить, садиться (в транспорт)', example: 'Bitte einsteigen, der Zug fährt gleich ab!' },
    { german: 'aussteigen (steigt aus)', russian: 'выходить (из транспорта)', example: 'An der nächsten Station müssen wir aussteigen.' },
    { german: 'umsteigen (steigt um)', russian: 'пересаживаться (на другой транспорт)', example: 'In Frankfurt müssen wir umsteigen.' },
    { german: 'ankommen (kommt an)', russian: 'прибывать', example: 'Wann kommt der Zug in Berlin an?' },
    { german: 'abfahren (fährt ab)', russian: 'отправляться, отъезжать', example: 'Der Bus fährt um 10:30 Uhr ab.' },
    { german: 'die Verspätung (-en)', russian: 'опоздание', example: 'Der Zug hat 10 Minuten Verspätung.' },
  ],
  readingText: `
Anna und Paul planen eine Reise nach Berlin. Sie möchten mit dem Zug fahren, weil das bequem ist. Am Freitagmorgen gehen sie zum Bahnhof.
Am Schalter kaufen sie zwei Fahrkarten. "Einfach oder hin und zurück?", fragt die Verkäuferin. "Hin und zurück, bitte", antwortet Anna. Die Fahrkarten kosten zusammen 80 Euro.
Ihr Zug fährt von Gleis 7 ab. Sie haben noch etwas Zeit und trinken einen Kaffee im Bahnhofscafé. Um 10:15 Uhr steigen sie in den Zug ein. Die Reise dauert vier Stunden. Sie freuen sich schon auf Berlin!
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-reisen-verkehr-rq1',
      question: 'Куда Анна и Пауль планируют поехать?',
      options: ['Гамбург', 'Мюнхен', 'Берлин', 'Франкфурт'],
      correctAnswer: 'Берлин',
      explanation: 'В тексте сказано: "Anna und Paul planen eine Reise nach Berlin."'
    },
    {
      id: 'a2-lexik-reisen-verkehr-rq2',
      question: 'Почему они выбрали поезд?',
      options: ['Потому что это дешево', 'Потому что это быстро', 'Потому что это удобно', 'Потому что у них нет машины'],
      correctAnswer: 'Потому что это удобно',
      explanation: 'В тексте сказано: "Sie möchten mit dem Zug fahren, weil das bequem ist."'
    },
    {
      id: 'a2-lexik-reisen-verkehr-rq3',
      question: 'Что они делают перед посадкой в поезд?',
      options: ['Покупают сувениры', 'Идут в музей', 'Пьют кофе в кафе на вокзале', 'Читают газету'],
      correctAnswer: 'Пьют кофе в кафе на вокзале',
      explanation: 'В тексте сказано: "Sie haben noch etwas Zeit und trinken einen Kaffee im Bahnhofscafé."'
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-reisen-verkehr-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "аэропорт"?',
      options: ['der Bahnhof', 'die Haltestelle', 'der Flughafen', 'das Gleis'],
      correctAnswer: 'der Flughafen',
      explanation: '"Der Flughafen" означает "аэропорт".',
    },
    {
      id: 'a2-lexik-reisen-verkehr-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный глагол: "Ich möchte eine Fahrkarte nach Berlin ___ (купить)."',
      sentenceParts: ['Ich möchte eine Fahrkarte nach Berlin ', '.'],
      correctAnswer: 'kaufen', // или buchen (забронировать)
      explanation: '"Купить" по-немецки "kaufen". "Buchen" (бронировать) также подходит.',
    },
    {
      id: 'a2-lexik-reisen-verkehr-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы едем на поезде."',
      prompt: 'Мы едем на поезде.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir fahren mit dem Zug.',
      explanation: '"Ехать на поезде" - "mit dem Zug fahren".',
    },
    {
      id: 'a2-lexik-reisen-verkehr-ex4',
      type: 'multiple_choice',
      question: 'Что означает "umsteigen"?',
      options: ['входить', 'выходить', 'пересаживаться', 'прибывать'],
      correctAnswer: 'пересаживаться',
      explanation: '"Umsteigen" означает "пересаживаться" (на другой вид транспорта).',
    },
    {
      id: 'a2-lexik-reisen-verkehr-wp1',
      type: 'writing_prompt',
      question: 'Beschreiben Sie eine kurze Reise, die Sie gemacht haben, oder Ihr Lieblingsverkehrsmittel. (Опишите короткую поездку, которую вы совершили, или ваш любимый вид транспорта.)',
      suggestedLength: '3-4 Sätze'
    }
  ],
};
