
import type { Lesson } from '@/types';

// --- Урок A1: Немецкий алфавит и первые приветствия ---
export const lessonA1AlphabetBegruessungen: Lesson = {
  id: 'a1-alphabet-begruessungen',
  level: 'A1',
  topic: 'Немецкий алфавит и первые приветствия',
  theory: `
Добро пожаловать в мир немецкого языка! Начнем с самых основ: алфавита и простых фраз.

**1. Немецкий алфавит (Das deutsche Alphabet)**
Немецкий алфавит основан на латинском и состоит из 26 букв:
A a (а)       B b (бэ)      C c (цэ)      D d (дэ)
E e (э)       F f (эф)      G g (ге)      H h (ха)
I i (и)       J j (йот)     K k (ка)      L l (эль)
M m (эм)      N n (эн)      O o (о)       P p (пэ)
Q q (ку)      R r (эр)      S s (эс)      T t (тэ)
U u (у)       V v (фау)     W w (вэ)      X x (икс)
Y y (ипсилон) Z z (цет)

**Особые символы:**
-   **Умлауты (Umlaute):**
    *   **Ä ä** (а-умлаут, произносится примерно как русское "э" в слове "этот")
    *   **Ö ö** (о-умлаут, похож на "ё" в слове "лёд", но губы более округлены)
    *   **Ü ü** (у-умлаут, похож на "ю" в слове "люк", но губы вытянуты вперед трубочкой)
-   **Эсцет (Eszett):**
    *   **ß** (произносится как долгое "с"). В Швейцарии вместо \`ß\` всегда пишется \`ss\`. После реформы правописания \`ß\` используется после долгих гласных и дифтонгов, а \`ss\` – после кратких гласных.

**2. Базовые правила чтения (для начала):**
-   **ei** читается как "ай" (mein - мой)
-   **ie** читается как долгое "и" (die - эта/артикль)
-   **eu, äu** читается как "ой" (heute - сегодня, Häuser - дома)
-   **ch**: после a, o, u, au читается как русское "х" (Bach - ручей). После i, e, ä, ö, ü, ei, eu, äu читается как мягкое "хь" (ich - я). В начале слова иностранного происхождения может читаться как "к" (Chor - хор) или "ш" (Chef - шеф).
-   **sch** читается как "ш" (Schule - школа)
-   **sp, st** в начале слова или корня читаются как "шп", "шт" (Sport - спорт, Stadt - город)
-   **s** перед гласной или между гласными читается как "з" (Sonne - солнце, lesen - читать). В остальных случаях как "с".

**3. Первые фразы (Erste Sätze)**

*   **Приветствия (Begrüßungen):**
    *   **Hallo!** – Привет! (неформально)
    *   **Guten Morgen!** – Доброе утро! (до полудня)
    *   **Guten Tag!** – Добрый день! (примерно с 12 до 18 часов)
    *   **Guten Abend!** – Добрый вечер! (после 18 часов)

*   **Прощания (Verabschiedungen):**
    *   **Tschüss!** – Пока! (неформально)
    *   **Auf Wiedersehen!** – До свидания! (формально)
    *   **Bis bald!** – До скорого!
    *   **Gute Nacht!** - Спокойной ночи! (говорят перед сном)

*   **Вежливость (Höflichkeit):**
    *   **Bitte.** – Пожалуйста (в ответ на спасибо); Прошу (когда что-то предлагаем).
    *   **Danke.** – Спасибо.
    *   **Entschuldigung.** – Извините. / Простите.

*   **Как представиться:**
    *   **Ich heiße [Имя].** – Меня зовут [Имя].
    *   **Mein Name ist [Имя].** – Мое имя [Имя].
    *   **Ich bin [Имя].** - Я [Имя].

*   **Как спросить "Как дела?" и ответить:**
    *   **Wie geht es Ihnen?** (Как у Вас дела? – вежливо, к одному или нескольким лицам)
    *   **Wie geht's? / Wie geht es dir?** (Как дела? / Как у тебя дела? – неформально)
    *   Ответы:
        *   **Danke, gut. Und Ihnen/dir?** – Спасибо, хорошо. А у Вас/тебя?
        *   **Sehr gut, danke.** – Очень хорошо, спасибо.
        *   **Es geht.** – Нормально. / Пойдет.
        *   **Nicht so gut.** – Не очень хорошо.

Это самые первые шаги. Постарайтесь запомнить эти фразы и буквы!
`,
  vocabulary: [
    { german: 'Hallo', russian: 'Привет' },
    { german: 'Guten Morgen', russian: 'Доброе утро' },
    { german: 'Guten Tag', russian: 'Добрый день' },
    { german: 'Guten Abend', russian: 'Добрый вечер' },
    { german: 'Gute Nacht', russian: 'Спокойной ночи' },
    { german: 'Tschüss', russian: 'Пока' },
    { german: 'Auf Wiedersehen', russian: 'До свидания' },
    { german: 'Bis bald', russian: 'До скорого' },
    { german: 'Bitte', russian: 'Пожалуйста / Прошу' },
    { german: 'Danke', russian: 'Спасибо' },
    { german: 'Entschuldigung', russian: 'Извините / Простите' },
    { german: 'Ja', russian: 'Да' },
    { german: 'Nein', russian: 'Нет' },
    { german: 'Wie geht es Ihnen?', russian: 'Как у Вас дела? (вежл.)' },
    { german: 'Wie geht\'s? / Wie geht es dir?', russian: 'Как дела? / Как у тебя дела? (неформ.)' },
    { german: 'Gut, danke.', russian: 'Хорошо, спасибо.' },
    { german: 'Ich heiße...', russian: 'Меня зовут...' },
    { german: 'Mein Name ist...', russian: 'Мое имя...' },
    { german: 'Ä, ä (A-Umlaut)', russian: 'Буква А-умлаут' },
    { german: 'Ö, ö (O-Umlaut)', russian: 'Буква О-умлаут' },
    { german: 'Ü, ü (U-Umlaut)', russian: 'Буква У-умлаут' },
    { german: 'ß (Eszett)', russian: 'Буква Эсцет (острое S)' },
  ],
  exercises: [
    {
      id: 'a1-alphabet-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки сказать "Спасибо"?',
      options: ['Bitte', 'Hallo', 'Danke', 'Tschüss'],
      correctAnswer: 'Danke',
      explanation: '"Danke" означает "Спасибо".',
    },
    {
      id: 'a1-alphabet-ex2',
      type: 'fill_in_the_blank',
      question: 'Дополните диалог: A: Guten Tag! B: ___ Tag!',
      sentenceParts: ['A: Guten Tag! B: ', ' Tag!'],
      correctAnswer: 'Guten',
      explanation: 'В ответ на "Guten Tag" обычно говорят "Guten Tag".',
    },
    {
      id: 'a1-alphabet-ex3',
      type: 'multiple_choice',
      question: 'Какая фраза используется для прощания более формально?',
      options: ['Tschüss', 'Hallo', 'Auf Wiedersehen', 'Guten Morgen'],
      correctAnswer: 'Auf Wiedersehen',
      explanation: '"Auf Wiedersehen" - это формальное "До свидания". "Tschüss" - неформальное "Пока".',
    },
    {
      id: 'a1-alphabet-ex4',
      type: 'fill_in_the_blank',
      question: 'Как спросить у друга "Как дела?": ___ geht es ___?',
      sentenceParts: ['', ' geht es ', '?'],
      correctAnswer: 'Wie, dir',
      explanation: 'Неформальный вопрос "Как дела?" - "Wie geht es dir?" или сокращенно "Wie geht\'s?".',
    },
    {
      id: 'a1-alphabet-ex5',
      type: 'multiple_choice',
      question: 'Как читается буквосочетание "ei" в немецком языке?',
      options: ['ай', 'ии', 'ой', 'эй'],
      correctAnswer: 'ай',
      explanation: 'Буквосочетание "ei" обычно читается как "ай", например, в слове "mein" (мой).',
    },
  ],
};
