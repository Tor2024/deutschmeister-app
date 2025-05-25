
import type { Lesson } from '@/types';

// --- Урок B1: Падеж Genitiv (Родительный падеж) ---
export const lessonB1Genitiv: Lesson = {
  id: 'b1-genitiv',
  level: 'B1',
  topic: 'Падеж Genitiv (Родительный падеж)',
  theory: `Genitiv (родительный падеж) в немецком языке отвечает на вопросы "Wessen?" (Чей? Чья? Чьё? Чьи?). Он используется для выражения принадлежности, части целого, происхождения, а также после определенных предлогов и глаголов.

**1. Образование Genitiv для существительных:**

*   **Мужской (Maskulinum) и Средний (Neutrum) род:**
    К существительным в единственном числе добавляется окончание **-s** или **-es**.
    -   Окончание **-es** обычно добавляется к:
        -   Односложным существительным: *des Mann**es*** (мужчины), *des Kind**es*** (ребенка), *des Buch**es*** (книги).
        -   Существительным, оканчивающимся на -s, -ß, -x, -z, -sch: *des Glas**es*** (стакана), *des Platz**es*** (места).
    -   Окончание **-s** обычно добавляется к:
        -   Многосложным существительным, не оканчивающимся на шипящий: *des Lehrer**s*** (учителя), *des Auto**s*** (автомобиля), *des Computer**s*** (компьютера).
        -   Существительным, оканчивающимся на неударную гласную или -h: *des Opa**s*** (дедушки), *des Schuh**s*** (ботинка).

*   **Женский (Femininum) род и Множественное число (Plural):**
    Существительные женского рода в единственном числе и все существительные во множественном числе **не получают** окончания в Genitiv. Изменяются только артикли и сопровождающие слова.
    *   *der Frau* (женщины), *der Mutter* (матери)
    *   *der Kinder* (детей), *der Bücher* (книг)

**2. Артикли и притяжательные местоимения в Genitiv:**

| Род/Число        | Определенный артикль | Неопределенный артикль | Отрицат. артикль | Притяж. местоим. (mein) |
|-----------------|-----------------------|------------------------|-------------------|---------------------------|
| Мужской (m)     | **des**               | ein**es**              | kein**es**        | mein**es**                |
| Женский (f)     | **der**               | ein**er**              | kein**er**        | mein**er**                |
| Средний (n)     | **des**               | ein**es**              | kein**es**        | mein**es**                |
| Множ. число (Pl)| **der**               | — (нет)                | kein**er**        | mein**er**                |

*Примеры:*
*   *das Auto **des Mannes*** (машина мужчины)
*   *die Tasche **einer Frau*** (сумка (какой-то) женщины)
*   *die Farbe **meines Hauses*** (цвет моего дома)
*   *die Bücher **der Studenten*** (книги студентов)

**3. Предлоги, всегда требующие Genitiv:**
   Некоторые предлоги всегда управляют родительным падежом. Основные из них:
   -   **wegen** (из-за, по причине): ***Wegen des schlechten Wetters** bleiben wir zu Hause.* (Из-за плохой погоды мы остаемся дома.)
   -   **trotz** (несмотря на): ***Trotz des Regens** ging er spazieren.* (Несмотря на дождь, он пошел гулять.)
   -   **während** (во время, в течение): ***Während des Unterrichts** darf man nicht sprechen.* (Во время урока нельзя разговаривать.)
   -   **(an)statt / statt** (вместо): ***Anstatt eines Kuchens** kaufte sie Obst.* (Вместо пирога она купила фрукты.)
   -   **außerhalb** (вне, за пределами): *Das Dorf liegt **außerhalb der Stadt**.* (Деревня находится за пределами города.)
   -   **innerhalb** (внутри, в течение): *Das Problem muss **innerhalb einer Woche** gelöst werden.* (Проблема должна быть решена в течение недели.)
   -   **diesseits** (по эту сторону): *Diesseits des Flusses.*
   -   **jenseits** (по ту сторону): *Jenseits der Berge.*
   -   **laut** (согласно - может быть и с Dativ): *Laut des Gesetzes...*
   -   **mithilfe / mit Hilfe** (с помощью): *Mithilfe seines Freundes...*
   -   **zugunsten** (в пользу): *Eine Entscheidung zugunsten der Mitarbeiter.*
   -   **infolge** (вследствие): *Infolge des Unfalls...*

**4. Использование Genitiv для выражения принадлежности (Possessivgenitiv):**
   Это классический способ указать на принадлежность, особенно в письменной речи.
   *   *Das ist **das Haus meines Bruders**.* (Это дом моего брата.)
   *   ***Annas Buch** liegt auf dem Tisch.* (Книга Анны лежит на столе. – Для имен собственных, оканчивающихся не на -s, -x, -z, просто добавляется -s. Если имя оканчивается на -s, -x, -z, ставится апостроф: Max' Buch)

**5. Разговорная замена Genitiv:**
   В устной речи, особенно при выражении принадлежности, Genitiv часто заменяется конструкцией **von + Dativ**.
   *   *das Auto **des Mannes*** (лит.) → *das Auto **von dem Mann*** (разг.)
   *   *die Tasche **meiner Schwester*** (лит.) → *die Tasche **von meiner Schwester*** (разг.)
   Однако в официальной и письменной речи предпочтительнее использовать Genitiv.

Genitiv придает речи большую точность и является важным элементом грамотного немецкого языка.`,
  vocabulary: [
    { german: 'der Genitiv', russian: 'родительный падеж', example: 'Der Genitiv antwortet auf die Frage "Wessen?".' },
    { german: 'wessen?', russian: 'чей? чья? чьё? чьи?' },
    { german: 'des (Gen. m/n)', russian: 'определенный артикль (м.р./ср.р.)', example: 'der Titel des Buches' },
    { german: 'der (Gen. f/Pl.)', russian: 'определенный артикль (ж.р./мн.ч.)', example: 'die Farbe der Blume, die Namen der Kinder' },
    { german: 'eines (Gen. m/n)', russian: 'неопределенный артикль (м.р./ср.р.)', example: 'der Rat eines Freundes' },
    { german: 'einer (Gen. f)', russian: 'неопределенный артикль (ж.р.)', example: 'die Hilfe einer Nachbarin' },
    { german: 'wegen (+Gen)', russian: 'из-за, по причине', example: 'Wegen des Nebels konnten wir nichts sehen.' },
    { german: 'trotz (+Gen)', russian: 'несмотря на', example: 'Trotz der Schwierigkeiten hat er es geschafft.' },
    { german: 'während (+Gen)', russian: 'во время, в течение', example: 'Während des Films war es sehr ruhig.' },
    { german: '(an)statt (+Gen)', russian: 'вместо', example: 'Statt eines Kaffees trank er Tee.' },
    { german: 'außerhalb (+Gen)', russian: 'вне, за пределами', example: 'Das Geschäft liegt außerhalb des Stadtzentrums.' },
    { german: 'innerhalb (+Gen)', russian: 'внутри, в течение (периода)', example: 'Innerhalb der Mauern der Burg.' },
    { german: 'die Zugehörigkeit', russian: 'принадлежность', example: 'Der Genitiv drückt oft Zugehörigkeit aus.' },
    { german: 'der Besitzer', russian: 'владелец', example: 'Der Besitzer des Hauses.' },
  ],
  exercises: [
    {
      id: 'b1-genitiv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Genitiv для "der Vater": Das ist das Auto ___ Vaters.',
      options: ['des', 'dem', 'den', 'der'],
      correctAnswer: 'des',
      explanation: '"Vater" - мужской род. В Genitiv определенный артикль мужского рода - "des". Существительное получает окончание -s: des Vaters.',
    },
    {
      id: 'b1-genitiv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное окончание: Das Ende d___ Film___ war überraschend.',
      sentenceParts: ['Das Ende d', ' Film', ' war überraschend.'], // des, es
      correctAnswer: 'es, es',
      explanation: '"Der Film" (м.р.). Артикль "des". "Film" - односложное, поэтому окончание "-es". Полностью: "Das Ende des Filmes war überraschend." (Допустимо и "des Films", но "-es" здесь предпочтительнее).',
    },
    {
      id: 'b1-genitiv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя Genitiv: "Несмотря на дождь, мы пошли гулять."',
      prompt: 'Несмотря на дождь, мы пошли гулять.',
      languageDirection: 'to_german',
      correctAnswer: 'Trotz des Regens gingen wir spazieren.',
      explanation: 'Предлог "trotz" требует Genitiv. "Der Regen" (м.р.) в Genitiv: "des Regens".',
    },
    {
      id: 'b1-genitiv-ex4',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: Die Bücher ___ Kinder liegen auf dem Boden.',
      options: ['des', 'den', 'der', 'dem'],
      correctAnswer: 'der',
      explanation: '"Kinder" - множественное число. Определенный артикль в Genitiv Plural - "der". "Die Bücher der Kinder".',
    },
    {
      id: 'b1-genitiv-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение предлогом, требующим Genitiv: ___ des starken Verkehrs kamen wir zu spät.',
      sentenceParts: ['', ' des starken Verkehrs kamen wir zu spät.'],
      correctAnswer: 'Wegen',
      explanation: 'Предлог "wegen" (из-за) требует Genitiv и подходит по смыслу.',
    },
    {
      id: 'b1-genitiv-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Это сумка моей сестры."',
      prompt: 'Это сумка моей сестры.',
      languageDirection: 'to_german',
      correctAnswer: 'Das ist die Tasche meiner Schwester.',
      explanation: 'Притяжательное местоимение "mein" перед существительным женского рода ("Schwester") в Genitiv имеет форму "meiner".',
    },
  ],
};
