
import type { Lesson } from '@/types';

// --- Урок A1: Притяжательные местоимения (Nominativ, Akkusativ) ---
export const lessonA1Possessivpronomen: Lesson = {
  id: 'a1-possessivpronomen',
  level: 'A1',
  topic: 'Притяжательные местоимения (Nominativ, Akkusativ)',
  theory: `Притяжательные местоимения (Possessivpronomen) показывают, кому что-либо принадлежит. В немецком языке они похожи на слова "мой", "твой", "его", "её" и т.д. Притяжательные местоимения изменяются в зависимости от рода, числа и падежа существительного, к которому они относятся.

**Основные притяжательные местоимения:**
- ich (я) → **mein** (мой)
- du (ты) → **dein** (твой)
- er (он) / es (оно) → **sein** (его)
- sie (она) → **ihr** (её)
- wir (мы) → **unser** (наш)
- ihr (вы, мн.ч. неформ.) → **euer** (ваш)
- sie (они) → **ihr** (их)
- Sie (Вы, вежл.) → **Ihr** (Ваш) (пишется с большой буквы)

**Склонение притяжательных местоимений (похоже на \`kein\`):**

**1. Nominativ (Именительный падеж – кто? что?)**
   Используется, когда существительное с притяжательным местоимением является подлежащим.

   | Род        | Пример с \`mein\` | Перевод        |
   |------------|-----------------|----------------|
   | Мужской (m)| **mein** Bruder | мой брат       |
   | Женский (f)| **meine** Schwester| моя сестра     |
   | Средний (n)| **mein** Kind   | мой ребенок    |
   | Множ. ч. (Pl)| **meine** Eltern| мои родители  |

   *Примеры:*
   *   ***Mein** Hund ist klein.* (Моя собака маленькая.)
   *   ***Deine** Katze schläft.* (Твоя кошка спит.)
   *   ***Sein** Auto ist neu.* (Его машина новая.)
   *   ***Ihre** Tasche (её сумка) ist rot.*
   *   ***Unser** Haus ist groß.* (Наш дом большой.)
   *   ***Eure** Kinder spielen im Garten.* (Ваши дети играют в саду.)
   *   ***Ihre** Bücher (их книги) sind interessant.*
   *   ***Ihr** Name (Ваше имя), bitte?*

**2. Akkusativ (Винительный падеж – кого? что?)**
   Используется, когда существительное с притяжательным местоимением является прямым дополнением. Изменяется только форма для мужского рода.

   | Род        | Пример с \`mein\` | Перевод        |
   |------------|-----------------|----------------|
   | Мужской (m)| **meinen** Bruder| моего брата    |
   | Женский (f)| **meine** Schwester| мою сестру     |
   | Средний (n)| **mein** Kind   | моего ребенка  |
   | Множ. ч. (Pl)| **meine** Eltern| моих родителей |

   *Примеры:*
   *   *Ich sehe **meinen** Freund.* (Я вижу моего друга.)
   *   *Hast du **deine** Hausaufgaben gemacht?* (Ты сделал твое домашнее задание?)
   *   *Er sucht **sein** Buch.* (Он ищет свою книгу.)
   *   *Wir besuchen **unsere** Tante.* (Мы навещаем нашу тетю.)
   *   *Sie liest **ihre** E-Mails (их имейлы).*

Запомните: притяжательные местоимения \`euer\` (ваш) и \`unser\` (наш) могут терять \`-e-\` перед окончанием, если оно начинается с гласной: \`eure\` или \`eure\`, \`unsre\` или \`unsere\`. Но для уровня A1 проще запомнить полные формы.`,
  vocabulary: [
    { german: 'mein', russian: 'мой, моя, моё, мои (основа)' },
    { german: 'dein', russian: 'твой, твоя, твоё, твои (основа)' },
    { german: 'sein', russian: 'его (принадлежащий ему/оно)' },
    { german: 'ihr (притяж.)', russian: 'её; их; Ваш (вежл.)' },
    { german: 'unser', russian: 'наш, наша, наше, наши' },
    { german: 'euer', russian: 'ваш, ваша, ваше, ваши (к группе "ты")' },
    { german: 'der Vater (Väter)', russian: 'отец' },
    { german: 'die Mutter (Mütter)', russian: 'мать' },
    { german: 'das Kind (Kinder)', russian: 'ребенок' },
    { german: 'der Bruder (Brüder)', russian: 'брат' },
    { german: 'die Schwester (Schwestern)', russian: 'сестра' },
    { german: 'das Buch (Bücher)', russian: 'книга' },
    { german: 'die Tasche (Taschen)', russian: 'сумка' },
  ],
  exercises: [
    {
      id: 'a1-possessivpronomen-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Das ist ___ (мой) Ball (м.р.).',
      sentenceParts: ['Das ist ', ' Ball.'],
      correctAnswer: 'mein',
      explanation: 'Nominativ, мужской род: mein Ball.',
    },
    {
      id: 'a1-possessivpronomen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Ich sehe ___ (твой) Hund (м.р.).',
      sentenceParts: ['Ich sehe ', ' Hund.'],
      correctAnswer: 'deinen',
      explanation: 'Akkusativ, мужской род: deinen Hund.',
    },
    {
      id: 'a1-possessivpronomen-ex3',
      type: 'multiple_choice',
      question: 'Какая форма правильная: "Wo ist ___ (её) Schlüssel (м.р.)?"',
      options: ['ihr', 'ihre', 'ihren'],
      correctAnswer: 'ihr',
      explanation: 'Nominativ, мужской род ("der Schlüssel"): ihr Schlüssel.',
    },
    {
      id: 'a1-possessivpronomen-ex4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Wir lieben ___ (наши) Eltern (мн.ч.).',
      sentenceParts: ['Wir lieben ', ' Eltern.'],
      correctAnswer: 'unsere',
      explanation: 'Akkusativ, множественное число: unsere Eltern.',
    },
    {
      id: 'a1-possessivpronomen-ex5',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение: "У него есть ___ (его) сестра."',
      options: ['Er hat sein Schwester.', 'Er hat seine Schwester.', 'Er hat seinen Schwester.'],
      correctAnswer: 'Er hat seine Schwester.',
      explanation: '"Schwester" (сестра) женского рода. Akkusativ, женский род: seine Schwester.',
    },
  ],
};
