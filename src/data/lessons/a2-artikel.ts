
import type { Lesson } from '@/types';

// --- Урок A2: Артикли в немецком языке (углубленно) ---
export const lessonA2Artikel: Lesson = {
  id: 'a2-artikel',
  level: 'A2',
  topic: 'Артикли в немецком языке (углубленно)',
  theory: `Артикль – это служебное слово, которое употребляется с существительными и указывает на их род, число и падеж, а также на определённость или неопределённость.

**1. Определенные артикли (Bestimmte Artikel): der, die, das**
Используются, когда речь идет о конкретном, уже известном или уникальном предмете/лице.
-   **der**: мужской род (maskulin), единственное число. Пример: **der** Mann (этот/тот самый мужчина)
-   **die**: женский род (feminin), единственное число. Пример: **die** Frau (эта/та самая женщина)
-   **das**: средний род (neutral), единственное число. Пример: **das** Kind (этот/тот самый ребенок)
-   **die**: множественное число (plural) для всех родов. Пример: **die** Männer, **die** Frauen, **die** Kinder

**2. Неопределенные артикли (Unbestimmte Artikel): ein, eine, ein**
Используются, когда предмет/лицо упоминается впервые, или речь идет об одном из многих. Неопределенный артикль также используется в конструкциях типа "Das ist ein..." (Это есть...).
-   **ein**: мужской род (maskulin), единственное число. Пример: **ein** Mann (какой-то/один мужчина)
-   **eine**: женский род (feminin), единственное число. Пример: **eine** Frau (какая-то/одна женщина)
-   **ein**: средний род (neutral), единственное число. Пример: **ein** Kind (какой-то/один ребенок)
-   Во множественном числе неопределенный артикль **отсутствует**. Вместо него может использоваться слово "viele" (многие), "einige" (некоторые), числительное или просто существительное без артикля, если контекст позволяет. Пример: Männer (мужчины), Frauen (женщины), Kinder (дети). Ich sehe viele Kinder. (Я вижу много детей.)

**3. Падежи (для уровня А2 важны Именительный и Винительный):**

*   **Именительный падеж (Nominativ) – кто? что? (Wer? Was?)**
    Используется для подлежащего в предложении – того, кто/что выполняет действие.
    *   der Mann, ein Mann (мужчина)
    *   die Frau, eine Frau (женщина)
    *   das Kind, ein Kind (ребенок)
    *   die Kinder (дети)

    Примеры:
    *   **Der Mann** liest. (Мужчина читает.)
    *   **Ein Kind** spielt. (Ребенок играет.)

*   **Винительный падеж (Akkusativ) – кого? что? (Wen? Was?)**
    Используется для прямого дополнения – объекта, на который направлено действие. Многие глаголы требуют Akkusativ (например, sehen, haben, kaufen, lesen, brauchen, lieben, besuchen, fragen, verstehen).
    *   **den** Mann, **einen** Mann (мужской род изменяется!)
    *   die Frau, eine Frau (женский род не изменяется)
    *   das Kind, ein Kind (средний род не изменяется)
    *   die Kinder (множественное число не изменяется по сравнению с Nominativ)

    Примеры:
    *   Ich sehe **einen Mann**. (Я вижу мужчину.)
    *   Er liest **das Buch**. (Он читает книгу.)
    *   Sie kauft **eine Tasche**. (Она покупает сумку.)

**4. Отрицательный артикль (Negativartikel): kein, keine, kein**
Используется для отрицания существительного с неопределенным артиклем или существительного без артикля во множественном числе. Склоняется как неопределенный артикль.
-   Nominativ:
    *   kein Mann (не мужчина)
    *   keine Frau (не женщина)
    *   kein Kind (не ребенок)
    *   keine Kinder (не дети)
-   Akkusativ:
    *   **keinen** Mann
    *   keine Frau
    *   kein Kind
    *   keine Kinder

    Примеры:
    *   Das ist **kein** Tisch. (Это не стол.)
    *   Ich habe **keine** Zeit. (У меня нет времени.)
    *   Er sieht **keinen** Hund. (Он не видит собаку.)

**5. Когда использовать определенный, а когда неопределенный артикль?**
-   **Неопределенный (ein/eine/ein):**
    *   Когда предмет/лицо упоминается впервые: Da ist **eine** Katze. (Там кошка.)
    *   Когда говорим об одном из многих, не выделяя конкретный: Das ist **ein** Stuhl. (Это (один) стул.)
    *   После глагола "haben" (иметь) и "brauchen" (нуждаться), если речь о чем-то неопределенном: Ich habe **einen** Bruder. (У меня есть (один) брат.) Sie braucht **ein** Buch. (Ей нужна (какая-то) книга.)
    *   В восклицаниях с "was für ein...": Was für **ein** schöner Tag! (Какой прекрасный день!)
-   **Определенный (der/die/das):**
    *   Когда предмет/лицо уже упоминался или известен собеседникам: Da ist eine Katze. **Die** Katze ist schwarz. (Там кошка. Эта кошка черная.)
    *   Когда предмет/лицо единственный в своем роде или конкретизирован контекстом: **Die** Sonne scheint. (Солнце светит.) **Der** Hund meines Freundes. (Собака моего друга.)
    *   С названиями рек, озер, морей, гор, улиц, планет: **der** Rhein (Рейн), **die** Alpen (Альпы), **die** Erde (Земля).
    *   С датами: heute ist **der** erste Mai (сегодня первое мая).
    *   С большинством названий стран, если они употребляются с артиклем (например, **die** Schweiz, **die** Türkei, **die** USA - мн.ч.). Большинство стран среднего рода используются без артикля (Deutschland, Frankreich).
    *   С абстрактными понятиями, если они конкретизированы: **Die** Liebe ist ein schönes Gefühl. (Любовь - прекрасное чувство.)
    *   С прилагательными в превосходной степени: **Der** höchste Berg. (Самая высокая гора.)

**Артикли во множественном числе:**
- Определенный артикль для всех родов во множественном числе – **die**.
  Пример: der Tisch → die Tische; die Frau → die Frauen; das Buch → die Bücher.
- Неопределенный артикль во множественном числе отсутствует.
- Отрицательный артикль во множественном числе – **keine**.
  Пример: Ich habe keine Bücher. (У меня нет книг.)

Запоминание правильного использования артиклей требует практики и внимания к контексту. Слушайте, читайте и старайтесь активно использовать артикли в своей речи!
`,
  audio: 'https://storage.googleapis.com/stg_public_misc/audio/placeholder_artikel_a2.mp3',
  transcript: 'Der, die, das. Ein, eine, ein. Das ist ein Haus. Das Haus ist groß. Der Mann liest ein Buch. Ich sehe einen Hund. Ich habe keinen Hund.',
  vocabulary: [
    { german: 'der Mann (Männer)', russian: 'мужчина (мужчины)', example: 'Der Mann ist groß.' },
    { german: 'die Frau (Frauen)', russian: 'женщина (женщины)', example: 'Die Frau liest ein Buch.' },
    { german: 'das Kind (Kinder)', russian: 'ребенок (дети)', example: 'Das Kind spielt im Garten.' },
    { german: 'der Tisch (Tische)', russian: 'стол (столы)', example: 'Der Tisch ist aus Holz.' },
    { german: 'die Lampe (Lampen)', russian: 'лампа (лампы)', example: 'Die Lampe steht auf dem Tisch.' },
    { german: 'das Buch (Bücher)', russian: 'книга (книги)', example: 'Ich lese das Buch.' },
    { german: 'sehen (sieht, sah, hat gesehen)', russian: 'видеть', example: 'Ich sehe einen Vogel.' },
    { german: 'haben (hat, hatte, hat gehabt)', russian: 'иметь', example: 'Wir haben keine Zeit.' },
    { german: 'kaufen (kauft, kaufte, hat gekauft)', russian: 'покупать', example: 'Sie kauft ein Kleid.' },
    { german: 'Nominativ', russian: 'Именительный падеж (кто? что?)' },
    { german: 'Akkusativ', russian: 'Винительный падеж (кого? что?)' },
    { german: 'bestimmter Artikel', russian: 'определенный артикль' },
    { german: 'unbestimmter Artikel', russian: 'неопределенный артикль' },
    { german: 'Negativartikel (kein, keine)', russian: 'отрицательный артикль' },
    { german: 'Plural', russian: 'множественное число' },
  ],
  exercises: [
    {
      id: 'a2-artikel-adv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный **определенный** артикль для слова "Tisch" (стол, мужской род) в именительном падеже:',
      options: ['der', 'die', 'das', 'den'],
      correctAnswer: 'der',
      explanation: 'Слово "Tisch" мужского рода, в именительном падеже используется определенный артикль "der".',
    },
    {
      id: 'a2-artikel-adv-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильный **неопределенный** артикль для слова "Lampe" (лампа, женский род) в именительном падеже:',
      options: ['ein', 'eine', 'einen', 'eines'],
      correctAnswer: 'eine',
      explanation: 'Слово "Lampe" женского рода, в именительном падеже используется неопределенный артикль "eine".',
    },
    {
      id: 'a2-artikel-adv-ex3',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный артикль: Ich kaufe ___ Apfel (m).',
      sentenceParts: ['Ich kaufe ', ' Apfel (m).'],
      correctAnswer: 'einen',
      explanation: 'Глагол "kaufen" (покупать) требует винительного падежа (Akkusativ). "Apfel" мужского рода, поэтому неопределенный артикль в Akkusativ - "einen".',
    },
    {
      id: 'a2-artikel-adv-ex4',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенный артикль: Siehst du ___ Sterne (pl) am Himmel?',
      sentenceParts: ['Siehst du ', ' Sterne (pl) am Himmel?'],
      correctAnswer: 'die',
      explanation: '"Sterne" (звезды) - множественное число. Речь идет о конкретных звездах на небе (они уже известны или подразумеваются), поэтому используется определенный артикль "die".',
    },
    {
      id: 'a2-artikel-adv-ex5',
      type: 'multiple_choice',
      question: 'Какое предложение верное?',
      options: [
        'Ich habe ein Schwester.',
        'Ich habe eine Schwester.',
        'Ich habe einen Schwester.'
      ],
      correctAnswer: 'Ich habe eine Schwester.',
      explanation: '"Schwester" (сестра) - женского рода. Глагол "haben" требует винительного падежа. Неопределенный артикль для женского рода в Akkusativ - "eine".',
    },
    {
      id: 'a2-artikel-adv-ex6',
      type: 'fill_in_the_blank',
      question: 'Вставьте отрицательный артикль: Das ist Milch. Das ist ___ Wasser.',
      sentenceParts: ['Das ist Milch. Das ist ', ' Wasser.'],
      correctAnswer: 'kein',
      explanation: '"Wasser" (вода) среднего рода. Отрицательный артикль для среднего рода в именительном падеже - "kein".',
    },
    {
      id: 'a2-artikel-adv-ex7',
      type: 'translation',
      question: 'Переведите на немецкий: "У меня нет машины (средний род)."',
      prompt: 'У меня нет машины (средний род).',
      languageDirection: 'to_german',
      correctAnswer: 'Ich habe kein Auto.',
      explanation: '"Auto" среднего рода. Глагол "haben" требует Akkusativ. Отрицательный артикль "kein" для среднего рода в Akkusativ не меняется и остается "kein".',
    },
  ],
};

    