
import type { Lesson } from '@/types';

// --- Урок A2: Указательные местоимения (Demonstrativpronomen) ---
export const lessonA2Demonstrativpronomen: Lesson = {
  id: 'a2-demonstrativpronomen',
  level: 'A2',
  topic: 'Указательные местоимения (dieser, jener)',
  theory: `Указательные местоимения (Demonstrativpronomen) служат для того, чтобы указать на конкретный предмет, лицо или понятие, выделить его из ряда других. Они как бы говорят: "вот этот", "именно тот".

**1. \`dieser, diese, dieses\` (этот, эта, это, эти)**
   Это наиболее часто используемые указательные местоимения. Они указывают на:
   - Предмет или лицо, находящееся **близко** к говорящему (в пространстве или времени).
   - Предмет или лицо, которое **только что было упомянуто**.

   \`Dieser, diese, dieses\` склоняются так же, как определенные артикли (\`der, die, das\`). Они получают те же самые родовые и падежные окончания.

   **Склонение в Nominativ (Именительный падеж - кто? что?):**
   | Род         | Местоимение | Пример                   | Перевод                  |
   |-------------|-------------|--------------------------|--------------------------|
   | Мужской (m) | dies**er**  | dies**er** Mann          | этот мужчина            |
   | Женский (f) | dies**e**   | dies**e** Frau           | эта женщина             |
   | Средний (n) | dies**es**  | dies**es** Kind          | этот ребенок            |
   | Множ. ч. (Pl)| dies**e**   | dies**e** Leute          | эти люди                 |

   **Склонение в Akkusativ (Винительный падеж - кого? что?):**
   | Род         | Местоимение | Пример                   | Перевод                  |
   |-------------|-------------|--------------------------|--------------------------|
   | Мужской (m) | dies**en**  | Ich sehe dies**en** Mann. | Я вижу этого мужчину.    |
   | Женский (f) | dies**e**   | Ich sehe dies**e** Frau.  | Я вижу эту женщину.     |
   | Средний (n) | dies**es**  | Ich sehe dies**es** Kind. | Я вижу этого ребенка.    |
   | Множ. ч. (Pl)| dies**e**   | Ich sehe dies**e** Leute. | Я вижу этих людей.       |

   *Примеры:*
   - *Ich nehme **diesen** Stuhl, nicht **jenen**.* (Я возьму этот стул, а не тот.)
   - ***Dieses** Haus gefällt mir sehr gut.* (Этот дом мне очень нравится.)
   - *Kennst du **diese** Frau?* (Ты знаешь эту женщину?)

**2. \`jener, jene, jenes\` (тот, та, то, те)**
   Эти местоимения указывают на:
   - Предмет или лицо, находящееся **дальше** от говорящего.
   - Предмет или лицо, противопоставляемое тому, на которое указывает \`dieser\`.

   \`Jener, jene, jenes\` склоняются так же, как \`dieser, diese, dieses\`.
   *Примеры:*
   - ***Jenes** Gebäude dort drüben ist die Universität.* (То здание вон там – это университет.)
   - *Ich mag **diesen** Film, aber **jener** Film war langweilig.* (Мне нравится этот фильм, а тот фильм был скучным.)

   **Важно:** В современном разговорном немецком языке местоимения \`jener, jene, jenes\` используются реже. Вместо них часто говорят \`der/die/das da\` (тот/та/то вон там) или просто используют определенный артикль, а удаленность передается контекстом или жестами.

Запоминание окончаний, совпадающих с окончаниями определенных артиклей, поможет вам правильно использовать указательные местоимения.`,
  vocabulary: [
    { german: 'dieser', russian: 'этот (м.р., Nom.)' },
    { german: 'diese', russian: 'эта (ж.р., Nom./Akk.); эти (мн.ч., Nom./Akk.)' },
    { german: 'dieses', russian: 'это (ср.р., Nom./Akk.)' },
    { german: 'diesen', russian: 'этого (м.р., Akk.)' },
    { german: 'diesem', russian: 'этому (м.р./ср.р., Dat. – для сведения, основной фокус A2 на Nom/Akk)' },
    { german: 'dieser (f. Dat.)', russian: 'этой (ж.р., Dat. – для сведения)' },
    { german: 'jener', russian: 'тот (м.р., Nom.)' },
    { german: 'jene', russian: 'та (ж.р., Nom./Akk.); те (мн.ч., Nom./Akk.)' },
    { german: 'jenes', russian: 'то (ср.р., Nom./Akk.)' },
    { german: 'das Demonstrativpronomen (-pronomen)', russian: 'указательное местоимение' },
    { german: 'der Stuhl (Stühle)', russian: 'стул', example: 'Dieser Stuhl ist bequem.' },
    { german: 'das Haus (Häuser)', russian: 'дом', example: 'Jenes Haus ist sehr alt.' },
  ],
  exercises: [
    {
      id: 'a2-demonstrativpronomen-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "dieser": ___ Apfel (м.р.) ist rot.',
      sentenceParts: ['', ' Apfel ist rot.'],
      correctAnswer: 'Dieser',
      explanation: 'Nominativ, мужской род: dieser Apfel.',
    },
    {
      id: 'a2-demonstrativpronomen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "dieser": Ich kaufe ___ Buch (ср.р.).',
      sentenceParts: ['Ich kaufe ', ' Buch.'],
      correctAnswer: 'dieses',
      explanation: 'Akkusativ, средний род: dieses Buch.',
    },
    {
      id: 'a2-demonstrativpronomen-ex3',
      type: 'multiple_choice',
      question: 'Какая форма правильная: "Magst du ___ Schuhe (мн.ч., Akkusativ)?"',
      options: ['diesen', 'diese', 'dieser'],
      correctAnswer: 'diese',
      explanation: 'Akkusativ, множественное число: diese Schuhe.',
    },
    {
      id: 'a2-demonstrativpronomen-ex4',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "jener": Dort steht ___ Mann (м.р., Nominativ).',
      sentenceParts: ['Dort steht ', ' Mann.'],
      correctAnswer: 'jener',
      explanation: 'Nominativ, мужской род: jener Mann.',
    },
  ],
};
