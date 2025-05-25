
import type { Lesson } from '@/types';

export const lessonA2LexikInDerStadt: Lesson = {
  id: 'a2-lexik-in-der-stadt',
  level: 'A2',
  topic: 'В городе / Ориентация (In der Stadt / Orientierung)',
  theory: `
В этом уроке мы выучим слова и фразы, которые помогут вам ориентироваться в городе, спрашивать дорогу и понимать объяснения.

**Как спросить дорогу:**
- *Entschuldigung, wie komme ich zum Bahnhof / zur Post / zum Museum?* (Извините, как мне пройти к вокзалу / на почту / к музею?)
- *Entschuldigung, wo ist die nächste Apotheke / Bushaltestelle?* (Извините, где ближайшая аптека / автобусная остановка?)
- *Ist das weit von hier?* (Это далеко отсюда?)

**Как объяснить дорогу:**
- *Gehen Sie geradeaus.* (Идите прямо.)
- *Biegen Sie links / rechts ab.* (Поверните налево / направо.)
- *Die erste / zweite / dritte Straße links / rechts.* (Первая / вторая / третья улица налево / направо.)
- *Überqueren Sie die Straße.* (Перейдите улицу.)
- *Es ist neben dem Kino.* (Это рядом с кинотеатром.)
- *Es ist gegenüber der Bank.* (Это напротив банка.)
- *Es ist an der Ecke.* (Это на углу.)
`,
  vocabulary: [
    { german: 'die Stadt (Städte)', russian: 'город' },
    { german: 'der Weg (-e)', russian: 'дорога, путь', example: 'Können Sie mir den Weg zeigen?' },
    { german: 'die Straße (-n)', russian: 'улица', example: 'Diese Straße ist sehr lang.' },
    { german: 'der Platz (Plätze)', russian: 'площадь', example: 'Der Marktplatz ist im Zentrum.' },
    { german: 'der Bahnhof (Bahnhöfe)', russian: 'вокзал', example: 'Der Zug fährt vom Hauptbahnhof ab.' },
    { german: 'die Bushaltestelle (-n)', russian: 'автобусная остановка', example: 'Wo ist die nächste Bushaltestelle?' },
    { german: 'die Post', russian: 'почта (без мн.ч.)', example: 'Ich muss zur Post gehen.' },
    { german: 'die Bank (-en)', russian: 'банк', example: 'Die Bank öffnet um 9 Uhr.' },
    { german: 'das Kino (-s)', russian: 'кинотеатр', example: 'Gehen wir heute Abend ins Kino?' },
    { german: 'das Restaurant (-s)', russian: 'ресторан', example: 'Wir essen heute im Restaurant.' },
    { german: 'der Supermarkt (Supermärkte)', russian: 'супермаркет', example: 'Ich kaufe Lebensmittel im Supermarkt.' },
    { german: 'die Apotheke (-n)', russian: 'аптека', example: 'Medikamente bekommt man in der Apotheke.' },
    { german: 'das Museum (Museen)', russian: 'музей', example: 'Das Museum ist sehr interessant.' },
    { german: 'das Krankenhaus (Krankenhäuser)', russian: 'больница' },
    { german: 'die Schule (-n)', russian: 'школа' },
    { german: 'links', russian: 'налево', example: 'Biegen Sie hier links ab.' },
    { german: 'rechts', russian: 'направо', example: 'Die Post ist auf der rechten Seite.' },
    { german: 'geradeaus', russian: 'прямо', example: 'Gehen Sie immer geradeaus.' },
    { german: 'abbiegen (biegt ab)', russian: 'поворачивать', example: 'An der nächsten Kreuzung müssen Sie rechts abbiegen.' },
    { german: 'überqueren', russian: 'пересекать, переходить', example: 'Wir müssen die Straße überqueren.' },
    { german: 'neben (+Dativ)', russian: 'рядом с, около', example: 'Die Apotheke ist neben der Bank.' },
    { german: 'vor (+Dativ/Akkusativ)', russian: 'перед', example: 'Das Auto steht vor dem Haus.' },
    { german: 'hinter (+Dativ/Akkusativ)', russian: 'за, позади', example: 'Der Park ist hinter dem Museum.' },
    { german: 'zwischen (+Dativ/Akkusativ)', russian: 'между', example: 'Der Laden ist zwischen der Post und der Bank.' },
    { german: 'an der Ecke', russian: 'на углу', example: 'Das Café ist an der Ecke.' },
    { german: 'weit', russian: 'далеко', example: 'Ist es weit zum Bahnhof?' },
    { german: 'nah(e)', russian: 'близко', example: 'Die U-Bahn-Station ist ganz nah.' },
    { german: 'fragen nach (+Dativ)', russian: 'спрашивать о (дороге)', example: 'Ich frage nach dem Weg.' },
  ],
  readingText: `
Max ist neu in der Stadt und sucht den Supermarkt. Er fragt eine Frau auf der Straße: "Entschuldigung, wie komme ich zum nächsten Supermarkt?"
Die Frau antwortet: "Das ist ganz einfach. Gehen Sie diese Straße geradeaus bis zur großen Kreuzung. An der Kreuzung sehen Sie eine Ampel. Dort biegen Sie rechts ab. Dann gehen Sie noch etwa 100 Meter geradeaus. Der Supermarkt ist dann auf der linken Seite, direkt neben der Post."
Max bedankt sich: "Vielen Dank für Ihre Hilfe!" Die Frau lächelt und sagt: "Gern geschehen!"
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-in-der-stadt-rq1',
      question: 'Что ищет Макс?',
      options: ['Банк', 'Музей', 'Супермаркет', 'Аптеку'],
      correctAnswer: 'Супермаркет',
      explanation: 'В тексте сказано: "Max ist neu in der Stadt und sucht den Supermarkt."'
    },
    {
      id: 'a2-lexik-in-der-stadt-rq2',
      question: 'Куда Макс должен повернуть на перекрестке с светофором?',
      options: ['Налево', 'Направо', 'Прямо', 'Назад'],
      correctAnswer: 'Направо',
      explanation: 'Женщина говорит: "Dort biegen Sie rechts ab."'
    },
    {
      id: 'a2-lexik-in-der-stadt-rq3',
      question: 'Где находится супермаркет после поворота?',
      options: ['Справа, рядом с банком', 'Слева, рядом с почтой', 'Справа, напротив парка', 'Слева, за углом'],
      correctAnswer: 'Слева, рядом с почтой',
      explanation: 'Женщина объясняет: "Der Supermarkt ist dann auf der linken Seite, direkt neben der Post."'
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-stadt-ex1',
      type: 'multiple_choice',
      question: 'Как сказать по-немецки "Поверните направо"?',
      options: ['Gehen Sie geradeaus.', 'Biegen Sie links ab.', 'Biegen Sie rechts ab.', 'Überqueren Sie die Straße.'],
      correctAnswer: 'Biegen Sie rechts ab.',
      explanation: '"Biegen Sie rechts ab." означает "Поверните направо".',
    },
    {
      id: 'a2-lexik-stadt-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Entschuldigung, wie komme ich ___ Post?" (к почте)',
      sentenceParts: ['Entschuldigung, wie komme ich ', ' Post?'],
      correctAnswer: 'zur',
      explanation: 'Чтобы спросить дорогу к месту женского рода (die Post), используется "zur" (zu + der).',
    },
    {
      id: 'a2-lexik-stadt-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Супермаркет находится рядом с банком."',
      prompt: 'Супермаркет находится рядом с банком.',
      languageDirection: 'to_german',
      correctAnswer: 'Der Supermarkt ist neben der Bank.',
      explanation: '"Рядом с" - "neben". Предлог "neben" требует Dativ, если отвечает на вопрос "где?". "Die Bank" в Dativ - "der Bank".',
    },
    {
      id: 'a2-lexik-stadt-ex4',
      type: 'multiple_choice',
      question: 'Какое слово означает "вокзал"?',
      options: ['die Bushaltestelle', 'der Flughafen', 'der Bahnhof', 'das Gleis'],
      correctAnswer: 'der Bahnhof',
      explanation: '"Der Bahnhof" означает "вокзал".',
    },
  ],
};
