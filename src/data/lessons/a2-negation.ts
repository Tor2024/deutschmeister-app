
import type { Lesson } from '@/types';

// --- Урок A2: Отрицание (nicht и kein) ---
export const lessonA2Negation: Lesson = {
  id: 'a2-negation',
  level: 'A2',
  topic: 'Отрицание (nicht и kein)',
  theory: \`В немецком языке существует два основных способа выражения отрицания: с помощью слова **kein** и с помощью частицы **nicht**.

**1. Отрицание с \`kein\`**

\`Kein\` используется для отрицания существительных, перед которыми в утвердительной форме стоял бы неопределенный артикль (\`ein\`, \`eine\`) или отсутствовал бы артикль (например, во множественном числе или с неисчисляемыми существительными).

Можно сказать, что \`kein\` – это "не один", "никакой".

\`Kein\` склоняется так же, как неопределенный артикль \`ein\` в единственном числе и как определенный артикль \`die\` (Plural) во множественном числе, но с добавлением буквы \`k\` в начале.

**Склонение \`kein\`:**

| Падеж     | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural) |
|-----------|--------------------------|-------------------------|-----------------------|------------------------------|
| **Nominativ** | kein Mann                | keine Frau              | kein Kind             | keine Kinder                 |
| **Akkusativ** | keinen Mann              | keine Frau              | kein Kind             | keine Kinder                 |
| **Dativ**   | keinem Mann              | keiner Frau             | keinem Kind           | keinen Kindern (+-n к сущ.) |

*Примеры:*
-   *Ich habe **ein** Auto.* (У меня есть машина.) → *Ich habe **kein** Auto.* (У меня нет машины.)
-   *Das ist **eine** Katze.* (Это кошка.) → *Das ist **keine** Katze.* (Это не кошка.)
-   *Sind das Bücher?* (Это книги?) → *Nein, das sind **keine** Bücher.* (Нет, это не книги.)
-   *Ich habe Zeit.* (У меня есть время.) → *Ich habe **keine** Zeit.* (У меня нет времени.)

**2. Отрицание с \`nicht\`**

Частица \`nicht\` используется для отрицания:
-   **Глаголов** (всего действия).
-   **Прилагательных**.
-   **Наречий**.
-   **Местоимений**.
-   **Существительных с определенным артиклем** (\`der\`, \`die\`, \`das\`).
-   **Существительных с притяжательным местоимением** (\`mein\`, \`dein\`, \`sein\` и т.д.).
-   **Предложных групп**.
-   **Всего предложения целиком**.

**Позиция \`nicht\` в предложении:**

*   **После спрягаемого глагола** (если отрицается всё действие и нет других элементов, идущих в конец):
    *   *Ich arbeite heute.* (Я работаю сегодня.) → *Ich arbeite heute **nicht**.* (Я сегодня не работаю.)
    *   *Er versteht das.* (Он это понимает.) → *Er versteht das **nicht**.* (Он этого не понимает.)

*   **Перед отрицаемой частью предложения:**
    *   Перед **прилагательным**: *Das Wetter ist gut.* (Погода хорошая.) → *Das Wetter ist **nicht** gut.* (Погода не хорошая.)
    *   Перед **наречием**: *Er fährt schnell.* (Он едет быстро.) → *Er fährt **nicht** schnell.* (Он едет не быстро.)
    *   Перед **существительным с определенным артиклем или притяжательным местоимением**:
        *   *Ich kenne den Mann.* (Я знаю этого мужчину.) → *Ich kenne den Mann **nicht**.* (Обычно в конце, если существительное – прямой объект)
        *   *Das ist mein Auto.* (Это моя машина.) → *Das ist **nicht** mein Auto.* (Это не моя машина.)
    *   Перед **предложной группой**: *Sie wartet auf den Bus.* (Она ждет автобуса.) → *Sie wartet **nicht** auf den Bus.* (Она не ждет автобуса.)

*   **В конце предложения**, если отрицается глагол, и есть другие части сказуемого, которые должны стоять в конце:
    *   С **модальными глаголами**: *Ich kann schwimmen.* (Я умею плавать.) → *Ich kann **nicht** schwimmen.*
    *   В **Perfekt**: *Ich habe geschlafen.* (Я спал.) → *Ich habe **nicht** geschlafen.*
    *   С **отделяемыми приставками**: *Der Zug kommt heute an.* (Поезд прибывает сегодня.) → *Der Zug kommt heute **nicht** an.*

**Важно:** \`nicht\` никогда не ставится между подлежащим и спрягаемым глаголом в простом предложении.

**3. Другие отрицательные слова (кратко):**
Помимо \`kein\` и \`nicht\`, существуют и другие слова для выражения отрицания:
-   **nichts** – ничего
    *   *Ich sehe **nichts**.* (Я ничего не вижу.)
-   **niemand** – никто
    *   ***Niemand** ist gekommen.* (Никто не пришел.)
-   **nie / niemals** – никогда
    *   *Ich war **nie** in Berlin.* (Я никогда не был в Берлине.)
-   **nirgends / nirgendwo** – нигде
    *   *Meine Schlüssel sind **nirgends**.* (Моих ключей нигде нет.)

Различение и правильное использование \`kein\` и \`nicht\` очень важно для корректной немецкой речи. \`Kein\` связано с отрицанием существительного как такового, а \`nicht\` – с отрицанием действия, качества или конкретного объекта.
\`,
  vocabulary: [
    { german: 'nicht', russian: 'не (отрицательная частица)', example: 'Ich verstehe das nicht.' },
    { german: 'kein, keine, kein', russian: 'не, никакой (отрицательный артикль)', example: 'Ich habe keine Zeit.' },
    { german: 'keinen (Akk. m.)', russian: 'никакого', example: 'Er hat keinen Hund.' },
    { german: 'keinem (Dat. m./n.)', russian: 'никакому', example: 'Ich helfe keinem Betrüger.' },
    { german: 'keiner (Dat. f.)', russian: 'никакой', example: 'Er spricht mit keiner Frau.' },
    { german: 'keine (Nom./Akk. Pl.)', russian: 'никакие', example: 'Hier sind keine Fehler.' },
    { german: 'keinen (Dat. Pl.)', russian: 'никаким', example: 'Sie gibt keinen Kindern Süßigkeiten.' },
    { german: 'nichts', russian: 'ничего', example: 'Ich weiß nichts darüber.' },
    { german: 'niemand', russian: 'никто', example: 'Niemand hat mich angerufen.' },
    { german: 'nie / niemals', russian: 'никогда', example: 'Er lügt nie.' },
    { german: 'nirgends / nirgendwo', russian: 'нигде', example: 'Ich kann mein Handy nirgends finden.' },
    { german: 'die Negation', russian: 'отрицание' },
  ],
  exercises: [
    {
      id: 'a2-negation-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильное отрицание: "Ich habe ___ Idee."',
      options: ['nicht', 'kein', 'keine', 'keinen'],
      correctAnswer: 'keine',
      explanation: 'Существительное "Idee" (ж.р.) здесь используется без определенного артикля, поэтому отрицается с помощью "kein". "Keine Idee" (никакой идеи/нет идеи).',
    },
    {
      id: 'a2-negation-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте \`nicht\` или \`kein\`: Er ist ___ müde.',
      sentenceParts: ['Er ist ', ' müde.'],
      correctAnswer: 'nicht',
      explanation: 'Прилагательное "müde" (усталый) отрицается с помощью "nicht".',
    },
    {
      id: 'a2-negation-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я не могу сегодня прийти."',
      prompt: 'Я не могу сегодня прийти.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich kann heute nicht kommen.',
      explanation: 'С модальным глаголом "kann" частица "nicht" ставится перед инфинитивом "kommen" в конце предложения.',
    },
    {
      id: 'a2-negation-ex4',
      type: 'multiple_choice',
      question: 'Как правильно отрицать: "Das ist mein Buch."?',
      options: [
        'Das ist mein nicht Buch.',
        'Das ist nicht mein Buch.',
        'Das ist kein mein Buch.'
      ],
      correctAnswer: 'Das ist nicht mein Buch.',
      explanation: 'Существительное с притяжательным местоимением ("mein Buch") отрицается с помощью "nicht", которое ставится перед этим словосочетанием.',
    },
    {
      id: 'a2-negation-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте \`nicht\` или \`kein\`: Wir haben ___ Milch mehr.',
      sentenceParts: ['Wir haben ', ' Milch mehr.'],
      correctAnswer: 'keine',
      explanation: '"Milch" (ж.р.) - неисчисляемое существительное, здесь оно без артикля. Отрицается с помощью "keine".',
    },
    {
      id: 'a2-negation-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Она не знает этого человека."',
      prompt: 'Она не знает этого человека.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie kennt diesen Mann nicht.',
      explanation: 'Глагол "kennen" с прямым дополнением "diesen Mann". "Nicht" ставится в конце, так как отрицает все действие по отношению к этому объекту.',
    },
    {
      id: 'a2-negation-ex7',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Er hat ___ Zeit für mich."',
      options: ['nicht', 'keine', 'kein', 'keinen'],
      correctAnswer: 'keine',
      explanation: 'Существительное "Zeit" (ж.р.) в значении "время (вообще)" используется без артикля и отрицается с помощью "keine".',
    }
  ],
};
