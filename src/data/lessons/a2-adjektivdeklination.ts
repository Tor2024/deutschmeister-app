
import type { Lesson } from '@/types';

// --- Урок A2: Склонение прилагательных (Adjektivdeklination) – Основы ---
export const lessonA2Adjektivdeklination: Lesson = {
  id: 'a2-adjektivdeklination',
  level: 'A2',
  topic: 'Склонение прилагательных (Adjektivdeklination) – Основы',
  theory: `
Прилагательные (Adjektive) в немецком языке описывают существительные. Когда прилагательное стоит перед существительным, оно изменяет свое окончание. Это изменение называется склонением прилагательных. Окончание зависит от:
1.  **Артикля** (или другого слова), стоящего перед прилагательным.
2.  **Рода** (Maskulinum, Femininum, Neutrum) существительного.
3.  **Числа** (Singular, Plural) существительного.
4.  **Падежа** (Nominativ, Akkusativ, Dativ, Genitiv) существительного.

На уровне А2 мы сосредоточимся на **Nominativ** (Именительный падеж – кто? что?) и **Akkusativ** (Винительный падеж – кого? что?).

**Три основных типа склонения прилагательных:**

**1. Слабое склонение (Schwache Deklination): После определенного артикля (\`der\`, \`die\`, \`das\`, \`die\` (Pl.))**
   Артикль уже показывает род, число и падеж, поэтому прилагательное получает "слабые" окончания: **-e** или **-en**.

   | Падеж     | Мужской (der)        | Женский (die)        | Средний (das)        | Множ. ч. (die)       |
   |-----------|----------------------|----------------------|----------------------|----------------------|
   | **Nominativ** | der gut**e** Mann    | die gut**e** Frau    | das gut**e** Kind    | die gut**en** Kinder |
   | **Akkusativ** | den gut**en** Mann   | die gut**e** Frau    | das gut**e** Kind    | die gut**en** Kinder |

   *Примеры:*
   *   *Der **kleine** Hund spielt.* (Маленькая собака играет.)
   *   *Ich sehe das **neue** Auto.* (Я вижу новую машину.)
   *   *Die **netten** Leute helfen uns.* (Милые люди помогают нам.)

**2. Смешанное склонение (Gemischte Deklination): После неопределенного артикля (\`ein\`, \`eine\`), отрицания \`kein\`, притяжательных местоимений (\`mein\`, \`dein\` и т.д.)**
   Здесь прилагательное иногда должно "подсказать" род, если артикль этого не делает четко (как \`ein\` для м.р. и ср.р. в Nominativ).

   | Падеж     | Мужской (ein)        | Женский (eine)       | Средний (ein)        | Множ. ч. (keine/meine) |
   |-----------|----------------------|----------------------|----------------------|------------------------|
   | **Nominativ** | ein gut**er** Mann   | eine gut**e** Frau   | ein gut**es** Kind   | meine gut**en** Kinder |
   | **Akkusativ** | einen gut**en** Mann | eine gut**e** Frau   | ein gut**es** Kind   | meine gut**en** Kinder |

   *Примеры:*
   *   *Das ist ein **interessantes** Buch.* (Это интересная книга.)
   *   *Ich habe einen **alten** Computer.* (У меня есть старый компьютер.)
   *   *Keine **schlechten** Nachrichten!* (Никаких плохих новостей!)

**3. Сильное склонение (Starke Deklination): Без артикля перед прилагательным**
   Если перед прилагательным нет артикля, оно само принимает на себя функцию указания рода, числа и падежа, получая "сильные" окончания, похожие на окончания определенного артикля.

   | Падеж     | Мужской              | Женский              | Средний              | Множ. ч.             |
   |-----------|----------------------|----------------------|----------------------|----------------------|
   | **Nominativ** | gut**er** Wein       | gut**e** Milch       | gut**es** Bier       | gut**e** Freunde     |
   | **Akkusativ** | gut**en** Wein       | gut**e** Milch       | gut**es** Bier       | gut**e** Freunde     |

   *Примеры:*
   *   ***Kalter** Kaffee schmeckt nicht gut.* (Холодный кофе не вкусный.)
   *   *Ich trinke gern **frische** Milch.* (Я люблю пить свежее молоко.)
   *   *Er hat **gute** Ideen.* (У него хорошие идеи.)

Запоминание этих правил требует практики, но это очень важно для правильной речи!
`,
  vocabulary: [
    { german: 'das Adjektiv (-e)', russian: 'прилагательное' },
    { german: 'die Deklination (-en)', russian: 'склонение' },
    { german: 'schwach', russian: 'слабый (о склонении)', example: 'schwache Deklination' },
    { german: 'gemischt', russian: 'смешанный (о склонении)', example: 'gemischte Deklination' },
    { german: 'stark', russian: 'сильный (о склонении)', example: 'starke Deklination' },
    { german: 'gut', russian: 'хороший', example: 'ein guter Film' },
    { german: 'schlecht', russian: 'плохой', example: 'schlechtes Wetter' },
    { german: 'neu', russian: 'новый', example: 'meine neue Tasche' },
    { german: 'alt', russian: 'старый', example: 'der alte Baum' },
    { german: 'groß', russian: 'большой', example: 'ein großes Haus' },
    { german: 'klein', russian: 'маленький', example: 'kleine Kinder' },
    { german: 'interessant', russian: 'интересный', example: 'interessante Bücher' },
  ],
  exercises: [
    {
      id: 'a2-adjdekl-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное окончание: Der alt___ Mann sitzt auf der Bank.',
      sentenceParts: ['Der alt', ' Mann sitzt auf der Bank.'],
      correctAnswer: 'e',
      explanation: 'После определенного артикля "der" (Nominativ, мужской род) прилагательное "alt" получает окончание -e (слабое склонение).',
    },
    {
      id: 'a2-adjdekl-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Ich habe ein ___ Auto." (rot)',
      options: ['rotes', 'rote', 'roten', 'roter'],
      correctAnswer: 'rotes',
      explanation: 'После неопределенного артикля "ein" и перед существительным среднего рода "Auto" (Akkusativ) прилагательное "rot" получает окончание -es (смешанное склонение).',
    },
    {
      id: 'a2-adjdekl-ex3',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное окончание: Sie trinkt frisch___ Saft (м.р., Akkusativ).',
      sentenceParts: ['Sie trinkt frisch', ' Saft.'],
      correctAnswer: 'en',
      explanation: 'Перед существительным "Saft" (мужской род, Akkusativ) нет артикля, поэтому прилагательное "frisch" получает окончание -en (сильное склонение).',
    },
    {
      id: 'a2-adjdekl-ex4',
      type: 'multiple_choice',
      question: 'Какое окончание у прилагательного "neu" в фразе "meine neu___ Schuhe (Plural, Nominativ)"?',
      options: ['-e', '-en', '-es', 'нет окончания'],
      correctAnswer: '-en',
      explanation: 'После притяжательного местоимения во множественном числе (здесь "meine", Nominativ Plural) прилагательное "neu" получает окончание -en (смешанное склонение -> слабое во мн.ч.).',
    },
    {
      id: 'a2-adjdekl-ex5',
      type: 'translation',
      question: 'Переведите на немецкий: "Это маленькая, милая кошка." (Katze - ж.р.)',
      prompt: 'Это маленькая, милая кошка.',
      languageDirection: 'to_german',
      correctAnswer: 'Das ist eine kleine, nette Katze.',
      explanation: 'После неопределенного артикля "eine" (Nominativ, женский род) прилагательные "klein" и "nett" получают окончание -e (смешанное склонение).',
    },
  ],
};
