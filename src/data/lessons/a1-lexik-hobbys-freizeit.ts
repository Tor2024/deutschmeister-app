
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA1LexikHobbysFreizeit: Lesson = {
  id: 'a1-lexik-hobbys-freizeit',
  level: 'A1',
  topic: 'Хобби и свободное время (Hobbys und Freizeit)',
  theory: `
В этом уроке мы выучим слова и фразы, связанные с хобби и тем, как люди проводят свободное время.

**Основные слова и фразы:**
- **das Hobby (-s)** - хобби, увлечение
- **die Freizeit** - свободное время
- **Was sind deine Hobbys?** - Какие у тебя хобби?
- **Mein Hobby ist...** - Мое хобби - это...
- **In meiner Freizeit...** - В мое свободное время я...
- **gern(e)** - охотно (используется для выражения предпочтений, например, "Ich lese gern." - Я люблю читать.)

**Виды деятельности:**
- **lesen** - читать
- **Musik hören** - слушать музыку
- **Freunde treffen** - встречаться с друзьями
- **Sport treiben/machen** - заниматься спортом
- **Fußball spielen** - играть в футбол
- **schwimmen** - плавать
- **Rad fahren** - кататься на велосипеде
- **kochen** - готовить еду
- **backen** - печь
- **malen** - рисовать (красками)
- **zeichnen** - рисовать (карандашом), чертить
- **tanzen** - танцевать
- **singen** - петь
- **reisen** - путешествовать
- **fotografieren** - фотографировать
- **ins Kino gehen** - ходить в кино
- **spazieren gehen** - гулять
- **fernsehen** - смотреть телевизор
- **Computerspiele spielen** - играть в компьютерные игры
`,
  vocabulary: [
    { german: 'das Hobby (-s)', russian: 'хобби, увлечение', example: 'Mein Hobby ist Lesen.' },
    { german: 'die Freizeit', russian: 'свободное время', example: 'Was machst du in deiner Freizeit?' },
    { german: 'lesen (liest)', russian: 'читать', example: 'Ich lese gern Bücher.' },
    { german: 'Musik hören', russian: 'слушать музыку', example: 'Er hört gern Rockmusik.' },
    { german: 'Freunde treffen (trifft)', russian: 'встречаться с друзьями', example: 'Am Wochenende treffe ich meine Freunde.' },
    { german: 'Sport treiben/machen', russian: 'заниматься спортом', example: 'Sie treibt viel Sport.' },
    { german: 'Fußball spielen', russian: 'играть в футбол', example: 'Die Kinder spielen Fußball im Park.' },
    { german: 'schwimmen (schwimmt)', russian: 'плавать', example: 'Im Sommer schwimme ich gern im See.' },
    { german: 'Rad fahren (fährt Rad)', russian: 'кататься на велосипеде', example: 'Wir fahren oft Rad am Fluss.' },
    { german: 'kochen', russian: 'готовить (еду)', example: 'Er kann gut kochen.' },
    { german: 'backen (bäckt)', russian: 'печь', example: 'Meine Oma backt leckere Kuchen.' },
    { german: 'malen', russian: 'рисовать (красками)', example: 'Das Kind malt ein Bild.' },
    { german: 'tanzen', russian: 'танцевать', example: 'Gehen wir heute Abend tanzen?' },
    { german: 'singen', russian: 'петь', example: 'Sie singt im Chor.' },
    { german: 'reisen', russian: 'путешествовать', example: 'Ich möchte gern mehr reisen.' },
    { german: 'fotografieren', russian: 'фотографировать', example: 'Sein Hobby ist Fotografieren.' },
    { german: 'ins Kino gehen', russian: 'ходить в кино', example: 'Wollen wir am Samstag ins Kino gehen?' },
    { german: 'spazieren gehen', russian: 'гулять, идти на прогулку', example: 'Nach dem Abendessen gehen wir spazieren.' },
    { german: 'fernsehen (sieht fern)', russian: 'смотреть телевизор', example: 'Abends sehe ich manchmal fern.' },
    { german: 'gern(e)', russian: 'охотно, с удовольствием', example: 'Ich spiele gerne Klavier.' },
  ],
  readingText: `
Hallo, ich heiße Anna. In meiner Freizeit mache ich viele Dinge.
Ich lese gern Bücher. Mein Lieblingsbuch ist über Tiere.
Am Samstag spiele ich Fußball mit meinen Freunden. Das macht Spaß!
Sonntags gehe ich oft mit meinem Hund spazieren. Manchmal male ich auch Bilder.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-hobbys-freizeit-rq1',
      question: 'Что Анна любит делать в свободное время?',
      options: ['Смотреть телевизор', 'Читать книги', 'Готовить еду', 'Играть в компьютерные игры'],
      correctAnswer: 'Читать книги',
      explanation: 'В тексте сказано: "Ich lese gern Bücher."'
    },
    {
      id: 'a1-lexik-hobbys-freizeit-rq2',
      question: 'С кем Анна играет в футбол по субботам?',
      options: ['С семьей', 'С собакой', 'С друзьями', 'Одна'],
      correctAnswer: 'С друзьями',
      explanation: 'В тексте сказано: "Am Samstag spiele ich Fußball mit meinen Freunden."'
    }
  ],
  exercises: [
    {
      id: 'a1-lexik-hobbys-freizeit-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "читать"?',
      options: ['singen', 'lesen', 'tanzen', 'malen'],
      correctAnswer: 'lesen',
      explanation: '"Lesen" означает "читать".',
    },
    {
      id: 'a1-lexik-hobbys-freizeit-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich ___ gern Musik."',
      sentenceParts: ['Ich ', ' gern Musik.'],
      correctAnswer: 'höre',
      explanation: '"Слушать музыку" - "Musik hören". Для "ich" форма "höre".',
    },
    {
      id: 'a1-lexik-hobbys-freizeit-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мое хобби - плавать."',
      prompt: 'Мое хобби - плавать.',
      languageDirection: 'to_german',
      correctAnswer: 'Mein Hobby ist Schwimmen.',
      explanation: '"Плавать" (как занятие) - "das Schwimmen" или инфинитив "schwimmen". "Mein Hobby ist Schwimmen."',
    },
    {
      id: 'a1-lexik-hobbys-freizeit-ex4',
      type: 'multiple_choice',
      question: 'Что означает "Rad fahren"?',
      options: ['гулять', 'путешествовать', 'кататься на велосипеде', 'играть в футбол'],
      correctAnswer: 'кататься на велосипеде',
      explanation: '"Rad fahren" означает "кататься на велосипеде".',
    },
  ],
};
