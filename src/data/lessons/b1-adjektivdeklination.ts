
import type { Lesson } from '@/types';

// --- Урок B1: Склонение прилагательных (Adjektivdeklination) ---
export const lessonB1Adjektivdeklination: Lesson = {
  id: 'b1-adjektivdeklination',
  level: 'B1',
  topic: 'Склонение прилагательных (Adjektivdeklination)',
  theory: `Склонение прилагательных (Adjektivdeklination) – это изменение окончаний прилагательных в зависимости от рода, числа, падежа существительного, которое оно определяет, а также от того, какое слово (артикль, местоимение или его отсутствие) стоит перед прилагательным.

**Три типа склонения прилагательных:**

**1. Слабое склонение (Schwache Deklination)**
   Используется после:
   - Определенного артикля (der, die, das, die (Pl.))
   - Указательных местоимений (dieser, jener, derselbe, derjenige)
   - Местоимений (jeder, mancher, solcher, welcher, alle)
   Окончания прилагательных в основном **-e** или **-en**. Артикль уже четко указывает род, число и падеж.

   | Падеж       | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural) |
   |-------------|--------------------------|-------------------------|-----------------------|------------------------------|
   | **Nominativ** | der gut**e** Mann        | die gut**e** Frau       | das gut**e** Kind     | die gut**en** Kinder         |
   | **Akkusativ** | den gut**en** Mann       | die gut**e** Frau       | das gut**e** Kind     | die gut**en** Kinder         |
   | **Dativ**   | dem gut**en** Mann       | der gut**en** Frau      | dem gut**en** Kind    | den gut**en** Kinder**n**    |
   | **Genitiv**   | des gut**en** Mann**es** | der gut**en** Frau      | des gut**en** Kind**es**| der gut**en** Kinder         |

   *Примеры:*
   - *Der alt**e** Baum steht im Garten.* (Старое дерево стоит в саду.)
   - *Ich sehe die neu**e** Studentin.* (Я вижу новую студентку.)
   - *Wir helfen dem klein**en** Jungen.* (Мы помогаем маленькому мальчику.)
   - *Das Auto dies**es** reich**en** Mannes ist teuer.* (Машина этого богатого мужчины дорогая.)

**2. Смешанное склонение (Gemischte Deklination)**
   Используется после:
   - Неопределенного артикля (ein, eine)
   - Отрицательного артикля (kein, keine)
   - Притяжательных местоимений (mein, dein, sein, ihr, unser, euer, ihr/Ihr)
   Прилагательное получает "сильные" окончания в Nominativ Singular (м.р., ж.р., ср.р.) и Akkusativ Singular (ж.р., ср.р.), когда артикль не показывает однозначно род. В остальных случаях окончания "слабые" (-en).

   | Падеж       | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural)* |
   |-------------|--------------------------|-------------------------|-----------------------|-------------------------------|
   | **Nominativ** | ein gut**er** Mann       | eine gut**e** Frau      | ein gut**es** Kind    | meine gut**en** Kinder        |
   | **Akkusativ** | einen gut**en** Mann     | eine gut**e** Frau      | ein gut**es** Kind    | meine gut**en** Kinder        |
   | **Dativ**   | einem gut**en** Mann     | einer gut**en** Frau    | einem gut**en** Kind  | meinen gut**en** Kinder**n**  |
   | **Genitiv**   | eines gut**en** Mann**es**| einer gut**en** Frau   | eines gut**en** Kind**es**| meiner gut**en** Kinder       |
   *\* Во множественном числе после \`keine\` и притяжательных местоимений прилагательное склоняется по слабому типу (всегда \`-en\`).*

   *Примеры:*
   - *Ein neu**er** Film läuft im Kino.* (Новый фильм идет в кино.)
   - *Ich habe keine gut**e** Idee.* (У меня нет хорошей идеи.)
   - *Das ist sein schnell**es** Auto.* (Это его быстрая машина.)
   - *Wir besuchen unsere alt**en** Freunde.* (Мы навещаем наших старых друзей.)

**3. Сильное склонение (Starke Deklination)**
   Используется, когда перед прилагательным **нет артикля** или другого слова, указывающего род, число и падеж. Прилагательное само берет на себя эту функцию, получая окончания, схожие с окончаниями определенного артикля.
   Используется также после количественных числительных (zwei, drei,...), после \`viele\`, \`wenige\`, \`einige\`, \`mehrere\`.

   | Падеж       | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural) |
   |-------------|--------------------------|-------------------------|-----------------------|------------------------------|
   | **Nominativ** | gut**er** Wein           | gut**e** Milch          | gut**es** Bier        | gut**e** Weine               |
   | **Akkusativ** | gut**en** Wein           | gut**e** Milch          | gut**es** Bier        | gut**e** Weine               |
   | **Dativ**   | gut**em** Wein           | gut**er** Milch         | gut**em** Bier        | gut**en** Weine**n**         |
   | **Genitiv**   | gut**en** Wein**es**     | gut**er** Milch         | gut**en** Bier**es**  | gut**er** Weine              |
   *(Обратите внимание на Genitiv Singular Maskulin/Neutrum: окончание \`-en\` у прилагательного)*

   *Примеры:*
   - *Kalt**es** Wasser schmeckt gut.* (Холодная вода вкусная.)
   - *Ich trinke gern stark**en** Kaffee.* (Я люблю пить крепкий кофе.)
   - *Er hat viele interessant**e** Bücher.* (У него много интересных книг.)
   - *Bei schlecht**em** Wetter bleiben wir zu Hause.* (При плохой погоде мы остаемся дома.)

Запоминание этих правил и окончаний требует практики. Важно всегда обращать внимание на слово, стоящее перед прилагательным (или его отсутствие).`,
  vocabulary: [
    { german: 'die Adjektivdeklination', russian: 'склонение прилагательных' },
    { german: 'schwache Deklination', russian: 'слабое склонение', example: 'Nach "der" folgt die schwache Deklination.' },
    { german: 'gemischte Deklination', russian: 'смешанное склонение', example: 'Nach "ein" folgt die gemischte Deklination.' },
    { german: 'starke Deklination', russian: 'сильное склонение', example: 'Ohne Artikel folgt die starke Deklination.' },
    { german: 'gut', russian: 'хороший', example: 'ein guter Freund, das gute Buch' },
    { german: 'neu', russian: 'новый', example: 'die neue Tasche, ein neues Auto' },
    { german: 'alt', russian: 'старый', example: 'der alte Mann, alte Häuser' },
    { german: 'klein', russian: 'маленький', example: 'ein kleines Kind, kleine Probleme' },
    { german: 'groß', russian: 'большой', example: 'der große Baum, große Städte' },
    { german: 'interessant', russian: 'интересный', example: 'ein interessantes Thema, interessante Filme' },
    { german: 'schön', russian: 'красивый, прекрасный', example: 'eine schöne Blume, schönes Wetter' },
    { german: 'der Nominativ', russian: 'именительный падеж' },
    { german: 'der Akkusativ', russian: 'винительный падеж' },
    { german: 'der Dativ', russian: 'дательный падеж' },
    { german: 'der Genitiv', russian: 'родительный падеж (упомянут для полноты)' },
  ],
  exercises: [
    {
      id: 'b1-adjektivdeklination-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильное окончание: Das ist der schnell___ Zug.',
      options: ['-e', '-er', '-es', '-en'],
      correctAnswer: '-e',
      explanation: 'После определенного артикля "der" (мужской род, Nominativ) используется слабое склонение, окончание -e: der schnelle Zug.',
    },
    {
      id: 'b1-adjektivdeklination-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте окончание прилагательного: Ich habe ein___ neu___ Fahrrad gekauft.',
      sentenceParts: ['Ich habe ein', ' neu', ' Fahrrad gekauft.'],
      correctAnswer: 'es', // ein neues Fahrrad
      explanation: 'После неопределенного артикля "ein" (средний род "das Fahrrad", Akkusativ) используется смешанное склонение. Для среднего рода Akkusativ окончание -es: ein neues Fahrrad.',
    },
    {
      id: 'b1-adjektivdeklination-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я пью холодное молоко."',
      prompt: 'Я пью холодное молоко.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich trinke kalte Milch.',
      explanation: 'Перед "Milch" (женский род) нет артикля, поэтому используется сильное склонение. Akkusativ, женский род, окончание -e: kalte Milch.',
    },
    {
      id: 'b1-adjektivdeklination-ex4',
      type: 'multiple_choice',
      question: 'Какое окончание у прилагательного "interessant" в фразе: "Wir sprechen mit den interessant___ Studenten"?',
      options: ['-e', '-en', '-em', '-er'],
      correctAnswer: '-en',
      explanation: 'После определенного артикля "den" (Dativ Plural) используется слабое склонение, окончание -en: den interessanten Studenten.',
    },
    {
      id: 'b1-adjektivdeklination-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Mein___ alt___ Freund wohnt in Berlin.',
      sentenceParts: ['Mein', ' alt', ' Freund wohnt in Berlin.'],
      correctAnswer: 'er', // Mein alter Freund
      explanation: 'После притяжательного местоимения "mein" (мужской род "der Freund", Nominativ) используется смешанное склонение. Для мужского рода Nominativ окончание -er: mein alter Freund.',
    },
    {
      id: 'b1-adjektivdeklination-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Хорошие книги дорогие."',
      prompt: 'Хорошие книги дорогие.',
      languageDirection: 'to_german',
      correctAnswer: 'Gute Bücher sind teuer.',
      explanation: 'Перед "Bücher" (множественное число) нет артикля, поэтому используется сильное склонение. Nominativ Plural, окончание -e: Gute Bücher.',
    },
    {
      id: 'b1-adjektivdeklination-ex7',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Das ist das Auto mein___ reich___ Onkels."',
      options: ['-es -es', '-en -en', '-em -en', '-er -en'],
      correctAnswer: '-en -en',
      explanation: 'Genitiv мужского рода ("des Onkels"). После притяжательного местоимения "mein" в Genitiv (meines) прилагательное склоняется по слабому типу: meines reichen Onkels. В данном случае вопрос подразумевает "моего богатого дяди", где "моего" относится к дяде, а не к машине. Если бы "моего" относилось к "авто", то "das Auto meines reichen Onkels". Окончания прилагательного в Genitiv после "meines" будут -en.',
    },
  ],
};
