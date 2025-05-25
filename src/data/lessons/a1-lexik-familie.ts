
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA1LexikFamilie: Lesson = {
  id: 'a1-lexik-familie',
  level: 'A1',
  topic: 'Семья и друзья (Familie und Freunde)',
  theory: `
В этом уроке мы выучим основные слова, связанные с семьей и друзьями. Умение рассказать о своей семье – важная часть повседневного общения.

**Основные члены семьи:**
- **die Familie** - семья
- **die Eltern** (мн.ч.) - родители
  - **die Mutter (Mütter)** - мама
  - **der Vater (Väter)** - папа
- **die Geschwister** (мн.ч.) - братья и сестры (собирательно)
  - **der Bruder (Brüder)** - брат
  - **die Schwester (Schwestern)** - сестра
- **das Kind (Kinder)** - ребенок (дети)
  - **der Sohn (Söhne)** - сын
  - **die Tochter (Töchter)** - дочь
- **die Großeltern** (мн.ч.) - бабушка и дедушка
  - **die Großmutter (Großmütter) / die Oma (Omas)** - бабушка
  - **der Großvater (Großväter) / der Opa (Opas)** - дедушка
- **der Ehemann (Ehemänner)** - муж
- **die Ehefrau (Ehefrauen)** - жена

**Другие родственники и друзья:**
- **der Onkel (Onkel)** - дядя
- **die Tante (Tanten)** - тетя
- **der Freund (Freunde)** - друг
- **die Freundin (Freundinnen)** - подруга

**Полезные фразы:**
- *Das ist meine Mutter.* (Это моя мама.)
- *Ich habe einen Bruder und eine Schwester.* (У меня есть брат и сестра.)
- *Wie viele Geschwister hast du?* (Сколько у тебя братьев и сестер?)
- *Meine Oma heißt Anna.* (Мою бабушку зовут Анна.)
- *Sind Sie verheiratet?* (Вы женаты/замужем?)
- *Ich bin ledig.* (Я холост/незамужем.)
`,
  vocabulary: [
    { german: 'die Familie (-n)', russian: 'семья' },
    { german: 'die Eltern (Pl.)', russian: 'родители' },
    { german: 'die Mutter (Mütter)', russian: 'мама, мать', example: 'Meine Mutter ist Ärztin.' },
    { german: 'der Vater (Väter)', russian: 'папа, отец', example: 'Mein Vater arbeitet viel.' },
    { german: 'die Geschwister (Pl.)', russian: 'братья и сестры', example: 'Hast du Geschwister?' },
    { german: 'der Bruder (Brüder)', russian: 'брат', example: 'Mein Bruder ist Student.' },
    { german: 'die Schwester (Schwestern)', russian: 'сестра', example: 'Ihre Schwester wohnt in Berlin.' },
    { german: 'das Kind (Kinder)', russian: 'ребенок, дети', example: 'Das Kind spielt im Garten.' },
    { german: 'der Sohn (Söhne)', russian: 'сын', example: 'Unser Sohn geht in die Schule.' },
    { german: 'die Tochter (Töchter)', russian: 'дочь', example: 'Seine Tochter lernt Klavier.' },
    { german: 'die Großeltern (Pl.)', russian: 'бабушка и дедушка' },
    { german: 'die Großmutter (Großmütter) / die Oma (-s)', russian: 'бабушка', example: 'Meine Oma backt gern Kuchen.' },
    { german: 'der Großvater (Großväter) / der Opa (-s)', russian: 'дедушка', example: 'Mein Opa erzählt Geschichten.' },
    { german: 'der Ehemann (Ehemänner)', russian: 'муж', example: 'Ihr Ehemann ist Ingenieur.' },
    { german: 'die Ehefrau (Ehefrauen)', russian: 'жена', example: 'Sein Ehefrau kommt aus Spanien.' },
    { german: 'der Onkel (Onkel)', russian: 'дядя' },
    { german: 'die Tante (Tanten)', russian: 'тетя' },
    { german: 'der Freund (Freunde)', russian: 'друг', example: 'Das ist mein bester Freund.' },
    { german: 'die Freundin (Freundinnen)', russian: 'подруга', example: 'Ich treffe meine Freundin.' },
    { german: 'verheiratet', russian: 'женат, замужем', example: 'Bist du verheiratet?' },
    { german: 'ledig', russian: 'холост, незамужем', example: 'Er ist noch ledig.' },
  ],
  readingText: `
Hallo, ich bin Leon. Das ist meine Familie.
Mein Vater heißt Paul und meine Mutter heißt Maria.
Ich habe einen Bruder. Er heißt Tim. Tim ist klein.
Ich habe auch eine Schwester. Sie heißt Lena. Lena ist nett.
Wir haben einen Hund. Der Hund heißt Bello. Bello ist groß.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-familie-rq1',
      question: 'Как зовут папу Леона?',
      options: ['Тим', 'Пауль', 'Белло', 'Леон'],
      correctAnswer: 'Пауль',
      explanation: 'В тексте сказано: "Mein Vater heißt Paul..." (Моего папу зовут Пауль).'
    },
    {
      id: 'a1-lexik-familie-rq2',
      question: 'Какая сестра у Леона?',
      options: ['Маленькая', 'Большая', 'Добрая/Милая', 'Злая'],
      correctAnswer: 'Добрая/Милая',
      explanation: 'В тексте сказано: "Sie heißt Lena. Lena ist nett." (Ее зовут Лена. Лена милая/добрая).'
    },
    {
      id: 'a1-lexik-familie-rq3',
      question: 'Кто такой Белло?',
      options: ['Брат', 'Папа', 'Собака', 'Друг'],
      correctAnswer: 'Собака',
      explanation: 'В тексте сказано: "Wir haben einen Hund. Der Hund heißt Bello." (У нас есть собака. Собаку зовут Белло).'
    }
  ],
  exercises: [
    {
      id: 'a1-lexik-familie-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "родители"?',
      options: ['die Kinder', 'die Eltern', 'die Großeltern', 'die Geschwister'],
      correctAnswer: 'die Eltern',
      explanation: '"Die Eltern" означает "родители".',
    },
    {
      id: 'a1-lexik-familie-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Meine ___ (сестра) heißt Lisa."',
      sentenceParts: ['Meine ', ' heißt Lisa.'],
      correctAnswer: 'Schwester',
      explanation: '"Сестра" по-немецки "die Schwester".',
    },
    {
      id: 'a1-lexik-familie-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "У меня есть один брат."',
      prompt: 'У меня есть один брат.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich habe einen Bruder.',
      explanation: '"Брат" - "der Bruder". В Akkusativ после "habe" - "einen Bruder".',
    },
    {
      id: 'a1-lexik-familie-ex4',
      type: 'multiple_choice',
      question: 'Что означает "verheiratet"?',
      options: ['холост/незамужем', 'разведен(а)', 'женат/замужем', 'вдовец/вдова'],
      correctAnswer: 'женат/замужем',
      explanation: '"Verheiratet" означает "женат/замужем".',
    },
  ],
};
