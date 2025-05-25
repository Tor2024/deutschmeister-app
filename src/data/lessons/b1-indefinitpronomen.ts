
import type { Lesson } from '@/types';

// --- Урок B1: Неопределенные местоимения (Indefinitpronomen) ---
export const lessonB1Indefinitpronomen: Lesson = {
  id: 'b1-indefinitpronomen',
  level: 'B1',
  topic: 'Неопределенные местоимения (Indefinitpronomen)',
  theory: `Неопределенные местоимения (Indefinitpronomen) используются, когда речь идет о лицах или предметах, которые не конкретизированы, неизвестны, или когда делается обобщение.

**1. \`man\`**
   - Значение: "люди в целом", "кто-то", "один", "некто". Используется для обобщенных утверждений.
   - Грамматика: \`man\` всегда употребляется в единственном числе, а глагол после него ставится в 3-м лице единственного числа. Не склоняется.
   - *Примеры:*
     * ***Man** sagt, dass Deutsch schwer ist.* (Говорят, что немецкий трудный.)
     * *Hier darf **man** nicht rauchen.* (Здесь нельзя курить.)
     * *Wie schreibt **man** dieses Wort?* (Как пишется это слово?)

**2. \`jemand\` (кто-то, кто-нибудь) / \`niemand\` (никто)**
   - Обозначают неопределенное лицо (\`jemand\`) или его отсутствие (\`niemand\`).
   - Грамматика: Могут склоняться, но часто остаются без изменений, особенно в разговорной речи. Если склоняются, то как существительные мужского рода:
     * Nominativ: jemand / niemand
     * Akkusativ: jemand(en) / niemand(en)
     * Dativ: jemand(em) / niemand(em)
   - *Примеры:*
     * ***Jemand** hat angerufen.* (Кто-то звонил.)
     * *Ich habe **niemand(en)** gesehen.* (Я никого не видел.)
     * *Hast du **jemandem** geholfen?* (Ты кому-нибудь помог?)
     * ***Niemand** war zu Hause.* (Никого не было дома.)

**3. \`etwas\` (что-то, что-нибудь) / \`nichts\` (ничего)**
   - Обозначают неопределенный предмет, дело или явление (\`etwas\`) или их отсутствие (\`nichts\`).
   - Грамматика: Не склоняются.
   - После \`etwas\` и \`nichts\` прилагательные, употребленные как существительные, пишутся с большой буквы и получают окончание **-es**: \`etwas Gutes\`, \`nichts Neues\`.
   - *Примеры:*
     * *Ich möchte **etwas** trinken.* (Я хочу что-нибудь выпить.)
     * *Er hat **nichts** gesagt.* (Он ничего не сказал.)
     * *Gibt es **etwas Neues**?* (Есть что-нибудь новое?)
     * *Ich habe heute **nichts Besonderes** gemacht.* (Я сегодня ничего особенного не делал.)

**4. \`alle\` (все)**
   - Обозначает всю совокупность лиц или предметов.
   - Грамматика: Используется во множественном числе, склоняется как определенный артикль \`die\` (Plural).
     * Nominativ: alle
     * Akkusativ: alle
     * Dativ: allen (+ -n к существительному, если требуется)
   - *Примеры:*
     * ***Alle** Studenten sind gekommen.* (Все студенты пришли.)
     * *Ich habe **alle** Bücher gelesen.* (Я прочитал все книги.)
     * *Er hat **allen** Freunden geholfen.* (Он помог всем друзьям.)
     * ***Alles** ist gut.* (\`Alles\` как "всё" в среднем роде ед.ч.)

**5. \`einige\` (некоторые, несколько) / \`manche\` (некоторые)**
   - Обозначают неопределенное количество лиц или предметов.
   - Грамматика: Используются во множественном числе, склоняются как определенный артикль \`die\` (Plural).
   - *Примеры:*
     * ***Einige** Leute sind schon da.* (Некоторые люди уже здесь.)
     * *Ich habe **manche** Fehler gemacht.* (Я сделал некоторые ошибки.)
     * *Mit **einigen** Kollegen verstehe ich mich gut.* (С некоторыми коллегами я хорошо лажу.)

**6. \`viele\` (многие) / \`wenige\` (немногие)**
   - Обозначают большое (\`viele\`) или малое (\`wenige\`) количество.
   - Грамматика: Если стоят перед существительным без артикля, склоняются как прилагательные по сильному типу.
     * Nominativ Plural: viele/wenige
     * Akkusativ Plural: viele/wenige
     * Dativ Plural: vielen/wenigen (+ -n к существительному)
   - *Примеры:*
     * ***Viele** Touristen besuchen diese Stadt.* (Многие туристы посещают этот город.)
     * *Ich habe nur **wenige** Freunde hier.* (У меня здесь лишь немногие друзья.)
     * *Er sprach mit **vielen** Menschen.* (Он говорил со многими людьми.)

**7. \`jeder / jede / jedes\` (каждый / каждая / каждое)**
   - Обозначает каждого отдельного представителя группы.
   - Грамматика: Используется в единственном числе, склоняется как определенный артикль (\`der/die/das\`).
   - *Примеры:*
     * ***Jeder** Student muss diese Prüfung ablegen.* (Каждый студент должен сдать этот экзамен.)
     * *Ich kenne **jede** Straße in dieser Stadt.* (Я знаю каждую улицу в этом городе.)
     * ***Jedes** Kind bekam ein Geschenk.* (Каждый ребенок получил подарок.)

**8. \`einer / eine / eines\` (один, некто) / \`keiner / keine / keines\` (никто, ни один)**
   - Используются как местоимения, заменяющие ранее упомянутое или подразумеваемое существительное.
   - Грамматика: Склоняются как определенный артикль.
   - *Примеры:*
     * *Hast du einen Stift? – Ja, ich habe **einen**.* (У тебя есть ручка? – Да, у меня есть одна.)
     * *Viele waren eingeladen, aber **keiner** ist gekommen.* (Многие были приглашены, но никто не пришел.)
     * *Gibt es hier einen Arzt? – Ich glaube, hier ist **keiner**.* (Здесь есть врач? – Думаю, здесь никого нет.)

Понимание и правильное использование неопределенных местоимений важно для выражения обобщений и неопределенности в немецкой речи.`,
  vocabulary: [
    { german: 'man', russian: 'кто-то, люди (обобщенно)', example: 'Man kann nie wissen.' },
    { german: 'jemand', russian: 'кто-то, кто-нибудь', example: 'Ist jemand da?' },
    { german: 'niemand', russian: 'никто', example: 'Niemand hat geantwortet.' },
    { german: 'etwas', russian: 'что-то, что-нибудь', example: 'Ich muss dir etwas Wichtiges sagen.' },
    { german: 'nichts', russian: 'ничего', example: 'Ich habe nichts gehört.' },
    { german: 'alle', russian: 'все (люди/предметы)', example: 'Alle waren einverstanden.' },
    { german: 'alles', russian: 'всё (абстрактно)', example: 'Alles wird gut.' },
    { german: 'einige', russian: 'некоторые, несколько', example: 'Einige Fragen sind noch offen.' },
    { german: 'manche', russian: 'некоторые (часто с оттенком "кое-какие")', example: 'Manche Leute mögen das nicht.' },
    { german: 'viele', russian: 'многие, много', example: 'Viele Menschen leben in Städten.' },
    { german: 'wenige', russian: 'немногие, мало', example: 'Nur wenige kamen pünktlich.' },
    { german: 'jeder, jede, jedes', russian: 'каждый, каждая, каждое', example: 'Jeder Tag ist ein neuer Anfang.' },
    { german: 'einer, eine, eines (Pronomen)', russian: 'один, одна, одно (как местоимение)', example: 'Kannst du mir einen Stift leihen? Ich habe keinen.' },
    { german: 'keiner, keine, keines (Pronomen)', russian: 'никто, ни один (как местоимение)', example: 'Von den Äpfeln ist keiner mehr da.' },
  ],
  exercises: [
    {
      id: 'b1-indefinitpronomen-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильное местоимение: ___ sagt, dass diese Stadt sehr schön ist.',
      options: ['Jemand', 'Man', 'Etwas', 'Niemand'],
      correctAnswer: 'Man',
      explanation: '\`Man\` используется для обобщенных утверждений ("говорят", "люди говорят").',
    },
    {
      id: 'b1-indefinitpronomen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящее местоимение: Ich habe heute ___ Neues gelernt.',
      sentenceParts: ['Ich habe heute ', ' Neues gelernt.'],
      correctAnswer: 'etwas',
      explanation: '\`etwas\` используется для обозначения "что-то", а прилагательное \`Neues\` пишется с большой буквы.',
    },
    {
      id: 'b1-indefinitpronomen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Никто не знает ответа."',
      prompt: 'Никто не знает ответа.',
      languageDirection: 'to_german',
      correctAnswer: 'Niemand kennt die Antwort.',
      explanation: '\`Niemand\` означает "никто". Глагол "kennen" в 3-м лице ед.ч.',
    },
    {
      id: 'b1-indefinitpronomen-ex4',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "Ich habe mit ___ gesprochen, aber ich erinnere mich nicht an seinen Namen."',
      options: ['jemand', 'jemanden', 'jemandem'],
      correctAnswer: 'jemandem',
      explanation: 'Глагол "sprechen mit" требует Dativ. Dativ от \`jemand\` - \`jemandem\`.',
    },
    {
      id: 'b1-indefinitpronomen-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте местоимение: Von ___ meinen Freunden war ___ da.',
      sentenceParts: ['Von ', ' meinen Freunden war ', ' da.'], // allen, keiner
      correctAnswer: 'allen, keiner',
      explanation: 'Предлог "von" требует Dativ, поэтому "allen". "Keiner" означает "никто из них".',
    },
    {
      id: 'b1-indefinitpronomen-ex6',
      type: 'multiple_choice',
      question: 'Какое местоимение используется для обозначения "каждый отдельный предмет/человек из группы"?',
      options: ['alle', 'manche', 'jeder/jede/jedes', 'einige'],
      correctAnswer: 'jeder/jede/jedes',
      explanation: '\`jeder/jede/jedes\` означает "каждый" и относится к отдельным членам группы.',
    },
  ],
};
