
import type { Lesson } from '@/types';

// --- Урок A2: Притяжательные местоимения (Possessivpronomen) ---
export const lessonA2Possessivpronomen: Lesson = {
  id: 'a2-possessivpronomen',
  level: 'A2',
  topic: 'Притяжательные местоимения (Possessivpronomen)',
  theory: `Притяжательные местоимения (Possessivpronomen) указывают на принадлежность предмета или лица кому-либо. В русском языке это слова "мой", "твой", "его", "её", "наш", "ваш", "их". В немецком языке они также зависят от лица, которому что-то принадлежит, и согласуются в роде, числе и падеже с существительным, к которому относятся.

**1. Основные формы притяжательных местоимений (в Nominativ Singular Maskulinum):**
-   ich (я) → **mein** (мой)
-   du (ты) → **dein** (твой)
-   er (он) → **sein** (его)
-   sie (она) → **ihr** (её)
-   es (оно) → **sein** (его)
-   wir (мы) → **unser** (наш)
-   ihr (вы, мн.ч. неформ.) → **euer** (ваш)
-   sie (они) → **ihr** (их)
-   Sie (Вы, вежл.) → **Ihr** (Ваш)

**2. Согласование с существительным:**
Притяжательные местоимения изменяются по роду, числу и падежу так же, как неопределенный артикль "ein/eine" или отрицательный артикль "kein/keine".

**Таблица склонения (окончания притяжательных местоимений):**

| Падеж     | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural) |
|-----------|--------------------------|-------------------------|-----------------------|------------------------------|
| **Nominativ** | - (mein)                 | **-e** (meine)          | - (mein)              | **-e** (meine)               |
| **Akkusativ** | **-en** (meinen)         | **-e** (meine)          | - (mein)              | **-e** (meine)               |
| **Dativ**   | **-em** (meinem)         | **-er** (meiner)        | **-em** (meinem)      | **-en** (meinen) + **-n** к сущ.*|

*Примечание по Dativ Plural: к существительному в дательном падеже множественного числа часто добавляется окончание **-n**, если оно его еще не имеет (например, den Kindern, meinen Freunden).

**Примеры склонения с "mein":**

*   **Nominativ (кто? что?)**
    *   **Mein** Bruder ist nett. (Мой брат милый.) - м.р.
    *   **Meine** Schwester lernt Deutsch. (Моя сестра учит немецкий.) - ж.р.
    *   **Mein** Kind spielt. (Мой ребенок играет.) - ср.р.
    *   **Meine** Bücher sind interessant. (Мои книги интересные.) - мн.ч.

*   **Akkusativ (кого? что?)**
    *   Ich sehe **meinen** Bruder. (Я вижу моего брата.) - м.р.
    *   Hast du **meine** Schwester gesehen? (Ты видел мою сестру?) - ж.р.
    *   Er nimmt **mein** Kind an die Hand. (Он берет моего ребенка за руку.) - ср.р.
    *   Sie liest **meine** Bücher. (Она читает мои книги.) - мн.ч.

*   **Dativ (кому? чему?)**
    *   Ich helfe **meinem** Bruder. (Я помогаю моему брату.) - м.р.
    *   Das Geschenk ist von **meiner** Schwester. (Подарок от моей сестры.) - ж.р.
    *   Ich spiele mit **meinem** Kind. (Я играю с моим ребенком.) - ср.р.
    *   Wir gehen mit **meinen** Freunden ins Kino. (Мы идем с моими друзьями в кино.) - мн.ч.

**Особенности для "unser" и "euer":**
-   Если к **unser** или **euer** добавляется окончание, начинающееся с **-e** (например, -e, -en, -em, -er), то **-e-** в корне этих местоимений может выпадать для благозвучия:
    *   unser → uns**re** Schwester (наша сестра), uns**rem** Bruder (нашему брату)
    *   euer → eu**re** Katze (ваша кошка), eu**rem** Hund (вашей собаке)
    Однако формы uns**ere**, eu**ere** также допустимы и часто используются.

**Притяжательные местоимения без последующего существительного (selbstständige Possessivpronomen):**
Иногда притяжательные местоимения могут употребляться самостоятельно, заменяя существительное. В этом случае они принимают окончания определенного артикля. Это более характерно для уровней B1 и выше, но полезно знать.
Пример: *Ist das dein Auto? - Ja, das ist **meins**.* (Это твоя машина? - Да, это моя.) *Wem gehört der Stift? - Das ist **seiner**.* (Кому принадлежит ручка? - Это его.)

Запоминание склонения притяжательных местоимений очень важно, так как они постоянно используются в речи.`,
  vocabulary: [
    { german: 'mein, meine, mein', russian: 'мой, моя, моё', example: 'Das ist mein Haus.' },
    { german: 'dein, deine, dein', russian: 'твой, твоя, твоё', example: 'Ist das dein Fahrrad?' },
    { german: 'sein, seine, sein (er/es)', russian: 'его (принадлежащий ему/оно)', example: 'Sein Name ist Max.' },
    { german: 'ihr, ihre, ihr (sie/Sie/sie pl.)', russian: 'её; их; Ваш/Ваша/Ваше', example: 'Ihre Tasche ist neu. Ihre Kinder sind klein. Ihr Auto ist schnell.' },
    { german: 'unser, unsere, unser', russian: 'наш, наша, наше', example: 'Unser Lehrer ist sehr nett.' },
    { german: 'euer, eure, euer', russian: 'ваш, ваша, ваше (к группе людей)', example: 'Wo sind eure Bücher?' },
    { german: 'der Bruder (Brüder)', russian: 'брат (братья)', example: 'Mein Bruder wohnt in Berlin.' },
    { german: 'die Schwester (Schwestern)', russian: 'сестра (сёстры)', example: 'Seine Schwester ist Ärztin.' },
    { german: 'das Kind (Kinder)', russian: 'ребенок (дети)', example: 'Ihr Kind geht schon in die Schule.' },
    { german: 'die Eltern (Plural)', russian: 'родители', example: 'Meine Eltern sind zu Hause.' },
    { german: 'der Freund (Freunde)', russian: 'друг (друзья)', example: 'Ich treffe heute meinen Freund.' },
    { german: 'die Freundin (Freundinnen)', russian: 'подруга (подруги)', example: 'Deine Freundin ist sehr sympathisch.' },
    { german: 'das Buch (Bücher)', russian: 'книга (книги)', example: 'Unser Buch liegt auf dem Tisch.' },
    { german: 'das Auto (Autos)', russian: 'машина (машины)', example: 'Euer Auto ist kaputt.' },
  ],
  exercises: [
    {
      id: 'a2-possessiv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: Das ist ___ (мой) Vater.',
      options: ['mein', 'meine', 'meinen', 'meinem'],
      correctAnswer: 'mein',
      explanation: '"Vater" - мужской род, Nominativ. "Mein Vater".',
    },
    {
      id: 'a2-possessiv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте притяжательное местоимение: Ich liebe ___ (моя) Mutter.',
      sentenceParts: ['Ich liebe ', ' Mutter.'],
      correctAnswer: 'meine',
      explanation: 'Глагол "lieben" требует Akkusativ. "Mutter" - женский род. Akkusativ, женский род от "mein" - "meine".',
    },
    {
      id: 'a2-possessiv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Где его книга?" (книга - das Buch)',
      prompt: 'Где его книга?',
      languageDirection: 'to_german',
      correctAnswer: 'Wo ist sein Buch?',
      explanation: '"Книга" (das Buch) - средний род. "Его" - "sein". Nominativ, средний род - "sein Buch".',
    },
    {
      id: 'a2-possessiv-ex4',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: Wir helfen ___ (нашим) Freunden.',
      options: ['unser', 'unsere', 'unseren', 'unserem'],
      correctAnswer: 'unseren',
      explanation: 'Глагол "helfen" требует Dativ. "Freunde" - множественное число. Dativ, множественное число от "unser" - "unseren". Существительное "Freunden" уже имеет окончание -n.',
    },
    {
      id: 'a2-possessiv-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте притяжательное местоимение: Das Kind spielt mit ___ (его, принадлежащим "оно" - ср.р.) Ball.',
      sentenceParts: ['Das Kind spielt mit ', ' Ball.'],
      correctAnswer: 'seinem',
      explanation: 'Предлог "mit" требует Dativ. "Ball" - мужской род. "Его" (принадлежащим "оно" - das Kind) - "sein". Dativ, мужской род от "sein" - "seinem".',
    },
    {
      id: 'a2-possessiv-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Ваша (к группе людей) квартира большая." (квартира - die Wohnung)',
      prompt: 'Ваша (к группе людей) квартира большая.',
      languageDirection: 'to_german',
      correctAnswer: 'Eure Wohnung ist groß.',
      explanation: '"Квартира" (die Wohnung) - женский род. "Ваша" (к группе людей) - "euer". Nominativ, женский род - "eure Wohnung".',
    },
     {
      id: 'a2-possessiv-ex7',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: Siehst du ___ (ее) Tasche?',
      options: ['ihr', 'ihre', 'ihren', 'ihrem'],
      correctAnswer: 'ihre',
      explanation: '"Tasche" - женский род. Глагол "sehen" требует Akkusativ. Akkusativ, женский род от "ihr" (её) - "ihre".',
    },
  ],
};
