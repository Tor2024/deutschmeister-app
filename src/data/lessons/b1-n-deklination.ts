
import type { Lesson } from '@/types';

// --- Урок B1: n-Deklination (Слабое склонение существительных мужского рода) ---
export const lessonB1NDeklination: Lesson = {
  id: 'b1-n-deklination',
  level: 'B1',
  topic: 'n-Deklination (Слабое склонение существительных)',
  theory: `n-Deklination (также известное как слабое склонение) – это особый тип склонения, которому следует определенная группа существительных в немецком языке. Подавляющее большинство этих существительных – мужского рода. Характерной чертой является то, что они получают окончание **-(e)n** во всех падежах единственного числа, кроме именительного (Nominativ Singular), а также во всех падежах множественного числа.

**1. Какие существительные относятся к n-Deklination?**

*   **Существительные мужского рода (Maskulina), обозначающие живых существ (людей и животных) и оканчивающиеся в Nominativ Singular на -e:**
    *   der Junge (мальчик) → des Junge**n**, dem Junge**n**, den Junge**n**; die Junge**n**
    *   der Kollege (коллега) → des Kollege**n**, dem Kollege**n**, den Kollege**n**; die Kollege**n**
    *   der Kunde (клиент) → des Kunde**n**
    *   der Experte (эксперт) → des Experte**n**
    *   der Löwe (лев) → des Löwe**n**
    *   der Hase (заяц) → des Hase**n**
    *   der Affe (обезьяна) → des Affe**n**
    *   der Zeuge (свидетель) → des Zeuge**n**

*   **Существительные мужского рода (часто интернациональные слова или обозначающие профессии/национальности), оканчивающиеся на:**
    *   **-ant**: der Praktikant (практикант), der Demonstrant (демонстрант), der Elefant (слон) → des Praktikant**en**
    *   **-and**: der Doktorand (докторант) → des Doktorand**en**
    *   **-ent**: der Student (студент), der Präsident (президент), der Produzent (продюсер) → des Student**en**
    *   **-ist**: der Polizist (полицейский), der Tourist (турист), der Journalist (журналист) → des Polizist**en**
    *   **-at**: der Diplomat (дипломат), der Soldat (солдат), der Kandidat (кандидат) → des Diplomat**en**
    *   **-ot**: der Pilot (пилот) → des Pilot**en**
    *   **-ad**: der Kamerad (товарищ) → des Kamerad**en**
    *   **-graf / -graph**: der Fotograf (фотограф), der Biograf (биограф) → des Fotograf**en**
    *   **-soph**: der Philosoph (философ) → des Philosoph**en**
    *   **-log(e)**: der Biologe (биолог), der Soziologe (социолог) → des Biologe**n**

*   **Некоторые другие существительные мужского рода, которые нужно запомнить:**
    *   der Mensch (человек) → des Mensch**en**
    *   der Herr (господин) → **des Herrn**, dem Herrn, den Herrn; **die Herren** (особая форма!)
    *   der Nachbar (сосед) → des Nachbar**n**
    *   der Bauer (крестьянин) → des Bauer**n**
    *   der Prinz (принц) → des Prinz**en**
    *   der Held (герой) → des Held**en**
    *   der Bär (медведь) → des Bär**en**
    *   der Fürst (князь) → des Fürst**en**
    *   der Graf (граф) → des Graf**en**
    *   der Ochs (бык) → des Ochs**en**

*   **Одно существительное среднего рода:**
    *   das Herz (сердце) → des Herz**ens** (особое окончание в Genitiv Sg!), dem Herz**en**, das Herz (Akk. Sg. без окончания); **die Herzen** (Plural)

**2. Таблица склонения (пример с "der Student"):**

| Падеж         | Единственное число      | Множественное число |
|---------------|------------------------|---------------------|
| **Nominativ** | der Student            | die Student**en**   |
| **Akkusativ** | den Student**en**        | die Student**en**   |
| **Dativ**     | dem Student**en**        | den Student**en**   |
| **Genitiv**   | des Student**en**        | der Student**en**   |

**Важно:**
-   Артикль во множественном числе для этих существительных всегда **die**.
-   В Nominativ Singular существительные n-Deklination не имеют окончания **-(e)n**.
-   Не путайте с обычным образованием множественного числа (например, "der Lehrer" - "die Lehrer", это не n-Deklination).

Знание существительных n-Deklination важно для правильного построения фраз, так как ошибки в падежных окончаниях этих слов сразу заметны.`,
  vocabulary: [
    { german: 'die n-Deklination', russian: 'n-склонение (слабое склонение)', example: 'Der Junge gehört zur n-Deklination.' },
    { german: 'der Junge, des Jungen, die Jungen', russian: 'мальчик, мальчика, мальчики', example: 'Ich sehe den Jungen.' },
    { german: 'der Kollege, des Kollegen, die Kollegen', russian: 'коллега, коллеги, коллеги', example: 'Er spricht mit seinem Kollegen.' },
    { german: 'der Kunde, des Kunden, die Kunden', russian: 'клиент, клиента, клиенты', example: 'Der Verkäufer bedient den Kunden.' },
    { german: 'der Student, des Studenten, die Studenten', russian: 'студент, студента, студенты', example: 'Das Buch des Studenten liegt hier.' },
    { german: 'der Präsident, des Präsidenten, die Präsidenten', russian: 'президент, президента, президенты', example: 'Die Rede des Präsidenten war lang.' },
    { german: 'der Polizist, des Polizisten, die Polizisten', russian: 'полицейский, полицейского, полицейские', example: 'Der Polizist regelt den Verkehr.' },
    { german: 'der Mensch, des Menschen, die Menschen', russian: 'человек, человека, люди', example: 'Die Rechte des Menschen sind unantastbar.' },
    { german: 'der Herr, des Herrn, die Herren', russian: 'господин, господина, господа', example: 'Guten Tag, Herr Müller!' },
    { german: 'der Nachbar, des Nachbarn, die Nachbarn', russian: 'сосед, соседа, соседи', example: 'Ich helfe meinem Nachbarn.' },
    { german: 'das Herz, des Herzens, die Herzen', russian: 'сердце, сердца, сердца (ср.р.)', example: 'Er hat ein gutes Herz. / Die Untersuchung des Herzens.' },
    { german: 'der Experte (-n, -n)', russian: 'эксперт', example: 'Wir fragen den Experten.' },
    { german: 'der Diplomat (-en, -en)', russian: 'дипломат', example: 'Der Diplomat reist viel.' },
    { german: 'der Tourist (-en, -en)', russian: 'турист', example: 'Die Stadt ist voll von Touristen.' },
  ],
  exercises: [
    {
      id: 'b1-n-deklination-ex1',
      type: 'multiple_choice',
      question: 'Какое окончание имеет существительное "der Junge" в Akkusativ Singular?',
      options: ['-e', '-en', '-s', 'нет окончания'],
      correctAnswer: '-en',
      explanation: '"Der Junge" относится к n-Deklination и получает окончание -(e)n во всех падежах единственного числа, кроме Nominativ. Akkusativ: den Jungen.',
    },
    {
      id: 'b1-n-deklination-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Ich spreche mit dem (Präsident) ___ .',
      sentenceParts: ['Ich spreche mit dem (Präsident) ', '.'],
      correctAnswer: 'Präsidenten',
      explanation: 'Предлог "mit" требует Dativ. "Der Präsident" - существительное n-Deklination. Dativ Singular: dem Präsidenten.',
    },
    {
      id: 'b1-n-deklination-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я вижу этого человека."',
      prompt: 'Я вижу этого человека.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich sehe diesen Menschen.',
      explanation: '"Der Mensch" относится к n-Deklination. Глагол "sehen" требует Akkusativ. Akkusativ Singular: den Menschen. С "diesen" (Akk. m. Sg.): diesen Menschen.',
    },
    {
      id: 'b1-n-deklination-ex4',
      type: 'multiple_choice',
      question: 'Какое из этих существительных НЕ относится к n-Deklination?',
      options: ['der Tisch', 'der Kunde', 'der Polizist', 'der Name'],
      correctAnswer: 'der Tisch',
      explanation: '"Der Tisch" склоняется по сильному типу (des Tisches). "Der Kunde", "der Polizist" и "der Name" (des Namens) относятся к n-Deklination (или смешанному в случае "Name").',
    },
    {
      id: 'b1-n-deklination-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Das Auto des (Nachbar) ___ ist neu.',
      sentenceParts: ['Das Auto des (Nachbar) ', ' ist neu.'],
      correctAnswer: 'Nachbarn',
      explanation: '"Der Nachbar" - существительное n-Deklination. Genitiv Singular: des Nachbarn.',
    },
    {
      id: 'b1-n-deklination-ex6',
      type: 'multiple_choice',
      question: 'Какая форма правильна для "Herr" в Dativ Singular?',
      options: ['dem Herr', 'dem Herren', 'dem Herrn', 'dem Herrs'],
      correctAnswer: 'dem Herrn',
      explanation: 'Существительное "der Herr" имеет особую форму склонения: Genitiv Sg. des Herrn, Dativ Sg. dem Herrn, Akkusativ Sg. den Herrn, Plural die Herren.',
    },
  ],
};
