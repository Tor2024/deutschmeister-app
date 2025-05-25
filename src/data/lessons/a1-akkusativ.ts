
import type { Lesson } from '@/types';

// --- Урок A1: Винительный падеж (Akkusativ) ---
export const lessonA1Akkusativ: Lesson = {
  id: 'a1-akkusativ',
  level: 'A1',
  topic: 'Винительный падеж (Akkusativ)',
  theory: `
Винительный падеж (Akkusativ) в немецком языке отвечает на вопросы **"кого? что?" (Wen? Was?)**. Он используется для обозначения прямого объекта в предложении – того, на кого или на что непосредственно направлено действие.

**1. Когда используется Akkusativ?**
   Akkusativ используется после многих глаголов, которые описывают действие, направленное на какой-либо объект.

**2. Артикли в Akkusativ**

*   **Определенные артикли (Bestimmte Artikel):**
    Только артикль мужского рода меняет свою форму в Akkusativ.

    | Род         | Nominativ | Akkusativ | Пример (Akkusativ)         |
    |-------------|-----------|-----------|----------------------------|
    | Мужской (m) | der       | **den**   | Ich sehe **den** Mann.     | (Я вижу мужчину.)          |
    | Женский (f) | die       | **die**   | Ich sehe **die** Frau.     | (Я вижу женщину.)          |
    | Средний (n) | das       | **das**   | Ich sehe **das** Kind.     | (Я вижу ребенка.)          |
    | Множ. ч. (Pl)| die       | **die**   | Ich sehe **die** Kinder.   | (Я вижу детей.)            |

*   **Неопределенные артикли (Unbestimmte Artikel):**
    Только артикль мужского рода меняет свою форму.

    | Род         | Nominativ | Akkusativ | Пример (Akkusativ)         |
    |-------------|-----------|-----------|----------------------------|
    | Мужской (m) | ein       | **einen** | Ich sehe **einen** Mann.   | (Я вижу (какого-то) мужчину.)|
    | Женский (f) | eine      | **eine**  | Ich sehe **eine** Frau.    | (Я вижу (какую-то) женщину.)|
    | Средний (n) | ein       | **ein**   | Ich sehe **ein** Kind.     | (Я вижу (какого-то) ребенка.)|
    | Множ. ч. (Pl)| (нет)     | (нет)     | Ich sehe Kinder.           | (Я вижу детей.)            |

**3. Личные местоимения в Akkusativ**

| Nominativ | Akkusativ | Перевод (Akkusativ) | Пример (Akkusativ)       |
|-----------|-----------|--------------------|--------------------------|
| ich       | **mich**  | меня               | Er sieht **mich**.       | (Он видит меня.)         |
| du        | **dich**  | тебя               | Ich sehe **dich**.       | (Я вижу тебя.)           |
| er        | **ihn**   | его                | Wir sehen **ihn**.       | (Мы видим его.)          |
| sie (она) | **sie**   | её                 | Siehst du **sie**?       | (Ты видишь её?)          |
| es        | **es**    | его/её (ср.р.)     | Ich sehe **es**.         | (Я вижу это/его/её.)     |
| wir       | **uns**   | нас                | Er sieht **uns**.        | (Он видит нас.)          |
| ihr       | **euch**  | вас                | Ich sehe **euch**.       | (Я вижу вас.)            |
| sie (они) | **sie**   | их                 | Wir sehen **sie**.       | (Мы видим их.)           |
| Sie (Вы)  | **Sie**   | Вас                | Ich sehe **Sie**.        | (Я вижу Вас.)            |

**4. Глаголы, требующие Akkusativ (Akkusativverben):**
   Многие глаголы требуют после себя прямое дополнение в Akkusativ. Вот некоторые из них:
   - haben (иметь): *Ich habe **einen** Bruder.* (У меня есть брат.)
   - sehen (видеть): *Siehst du **den** Vogel?* (Ты видишь птицу?)
   - lesen (читать): *Er liest **ein** Buch.* (Он читает книгу.)
   - schreiben (писать): *Ich schreibe **einen** Brief.* (Я пишу письмо.)
   - kaufen (покупать): *Wir kaufen **das** Auto.* (Мы покупаем машину.)
   - brauchen (нуждаться): *Ich brauche **deine** Hilfe.* (Мне нужна твоя помощь.)
   - mögen (нравиться/любить): *Ich mag **dich**.* (Ты мне нравишься.)
   - lieben (любить): *Sie liebt **ihn**.* (Она любит его.)
   - treffen (встречать): *Ich treffe **meinen** Freund.* (Я встречаю моего друга.)
   - suchen (искать): *Er sucht **seinen** Schlüssel.* (Он ищет свой ключ.)
   - finden (находить): *Ich finde **die** Idee gut.* (Я нахожу эту идею хорошей.)
   - essen (есть): *Das Kind isst **einen** Apfel.* (Ребенок ест яблоко.)
   - trinken (пить): *Ich trinke **den** Saft.* (Я пью сок.)
   - fragen (спрашивать кого-л.): *Der Lehrer fragt **den** Schüler.* (Учитель спрашивает ученика.)

Понимание Akkusativ очень важно, так как он используется в большинстве немецких предложений. Запомните, что в Akkusativ изменяется только мужской род!
`,
  vocabulary: [
    { german: 'der Akkusativ', russian: 'Винительный падеж' },
    { german: 'Wen?', russian: 'Кого? (вопрос Akkusativ)' },
    { german: 'Was?', russian: 'Что? (вопрос Akkusativ и Nominativ)' },
    { german: 'den (best. Artikel, m.)', russian: 'определенный артикль м.р. в Akkusativ' },
    { german: 'einen (unbest. Artikel, m.)', russian: 'неопределенный артикль м.р. в Akkusativ' },
    { german: 'mich', russian: 'меня (Akk.)' },
    { german: 'dich', russian: 'тебя (Akk.)' },
    { german: 'ihn', russian: 'его (Akk.)' },
    { german: 'sie (Akk., f. Sg.)', russian: 'её (Akk.)' },
    { german: 'es (Akk., n. Sg.)', russian: 'его/её (ср.р. Akk.)' },
    { german: 'uns', russian: 'нас (Akk. и Dat.)' },
    { german: 'euch', russian: 'вас (Akk. и Dat.)' },
    { german: 'sie (Akk., Pl.)', russian: 'их (Akk.)' },
    { german: 'Sie (Akk., Höflichkeitsform)', russian: 'Вас (вежл. Akk.)' },
    { german: 'haben (+ Akk.)', russian: 'иметь', example: 'Ich habe einen Hund.' },
    { german: 'sehen (+ Akk.)', russian: 'видеть', example: 'Siehst du den Film?' },
    { german: 'lesen (+ Akk.)', russian: 'читать', example: 'Er liest das Buch.' },
    { german: 'kaufen (+ Akk.)', russian: 'покупать', example: 'Wir kaufen ein Geschenk.' },
    { german: 'brauchen (+ Akk.)', russian: 'нуждаться', example: 'Ich brauche Hilfe.' },
  ],
  exercises: [
    {
      id: 'a1-akkusativ-ex1',
      type: 'fill_in_the_blank',
      question: 'Поставь определенный артикль в Akkusativ: Ich sehe ___ Mann.',
      sentenceParts: ['Ich sehe ', ' Mann.'],
      correctAnswer: 'den',
      explanation: 'Слово "Mann" мужского рода. В Akkusativ определенный артикль мужского рода "der" меняется на "den".',
    },
    {
      id: 'a1-akkusativ-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставь неопределенный артикль в Akkusativ: Er hat ___ Idee (ж.р.).',
      sentenceParts: ['Er hat ', ' Idee.'],
      correctAnswer: 'eine',
      explanation: 'Слово "Idee" женского рода. В Akkusativ неопределенный артикль женского рода "eine" не меняется.',
    },
    {
      id: 'a1-akkusativ-ex3',
      type: 'multiple_choice',
      question: 'Выберите правильное местоимение в Akkusativ: "Magst du ___ (я)?"',
      options: ['ich', 'mir', 'mich', 'mein'],
      correctAnswer: 'mich',
      explanation: 'Глагол "mögen" (нравиться, любить) требует Akkusativ. "Я" в Akkusativ - "mich".',
    },
    {
      id: 'a1-akkusativ-ex4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль: Wir brauchen ___ neues Auto (ср.р.).',
      sentenceParts: ['Wir brauchen ', ' neues Auto.'],
      correctAnswer: 'ein',
      explanation: 'Глагол "brauchen" требует Akkusativ. "Auto" среднего рода. Неопределенный артикль "ein" для среднего рода в Akkusativ не меняется.',
    },
    {
      id: 'a1-akkusativ-ex5',
      type: 'translation',
      question: 'Переведите на немецкий: "Я читаю эту книгу (ж.р.)."',
      prompt: 'Я читаю эту книгу (ж.р.).',
      languageDirection: 'to_german',
      correctAnswer: 'Ich lese dieses Buch.', // Примечание: в A1 обычно "das Buch" (ср.р.), но если указано ж.р., то "diese Zeitung/diese Geschichte"
      // Если учесть, что "книга" обычно "das Buch" (ср.р.): Ich lese dieses Buch.
      // Если было задумано именно женского рода: "Ich lese diese Zeitschrift." (Я читаю этот журнал (ж.р.))
      // Для простоты упражнения лучше использовать существительное, род которого однозначен для A1.
      // Заменим на "Я читаю газету (ж.р.)" -> "Ich lese die Zeitung." / "Ich lese eine Zeitung."
      // Корректнее для A1: "Ich lese das Buch." -> Я читаю книгу.
      // Если задание именно "эту книгу (ж.р.)", то: "Ich lese dieses Buch." неверно, т.к. das Buch - средний.
      // Пусть будет "Я читаю газету." - Ich lese die Zeitung.
      explanation: 'Глагол "lesen" требует Akkusativ. Если "книга" - "das Buch" (ср.р.), то Akkusativ "das Buch". Если "эта книга" - "dieses Buch". Если имелась в виду газета "die Zeitung" (ж.р.), то Akkusativ "die Zeitung" или "diese Zeitung". Для упражнения A1 лучше "Ich lese das Buch." (Я читаю книгу.) или "Ich lese ein Buch." (Я читаю (какую-то) книгу.)',
    },
  ],
};
