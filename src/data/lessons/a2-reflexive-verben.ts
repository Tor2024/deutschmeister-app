
import type { Lesson } from '@/types';

// --- Урок A2: Возвратные глаголы (Reflexive Verben) ---
export const lessonA2ReflexiveVerben: Lesson = {
  id: 'a2-reflexive-verben',
  level: 'A2',
  topic: 'Возвратные глаголы (Reflexive Verben)',
  theory: `
Возвратные глаголы (Reflexive Verben) – это глаголы, действие которых направлено на само подлежащее (тот, кто выполняет действие). В русском языке это часто глаголы, оканчивающиеся на "-ся" или "-сь" (например, мыться, одеваться).

В немецком языке возвратность выражается с помощью **возвратного местоимения (Reflexivpronomen)**. Для большинства глаголов на уровне A2 это будет возвратное местоимение в **винительном падеже (Akkusativ)**.

**Возвратные местоимения в Akkusativ:**

| Личное местоимение | Возвратное местоимение (Akkusativ) | Перевод      |
|--------------------|------------------------------------|--------------|
| ich (я)            | **mich**                           | меня (себя)  |
| du (ты)            | **dich**                           | тебя (себя)  |
| er/sie/es (он/она/оно)| **sich**                           | себя         |
| wir (мы)           | **uns**                            | нас (себя)   |
| ihr (вы)           | **euch**                           | вас (себя)   |
| sie/Sie (они/Вы)   | **sich**                           | себя         |

**Место возвратного местоимения в предложении:**
- В простом утвердительном предложении возвратное местоимение обычно стоит **сразу после спрягаемого глагола**.
  *Пример: Ich wasche **mich**.* (Я моюсь.)
- Если подлежащее выражено личным местоимением и стоит на первом месте, возвратное местоимение идет после него.
  *Пример: Du freust **dich**.* (Ты радуешься.)
- В вопросе без вопросительного слова (Ja/Nein-Frage): глагол - подлежащее-местоимение - возвратное местоимение.
  *Пример: Freust du **dich**?* (Ты радуешься?)
- В вопросе с вопросительным словом (W-Frage): вопросительное слово - глагол - подлежащее-местоимение - возвратное местоимение.
  *Пример: Worauf freust du **dich**?* (Чему ты радуешься?)

**Примеры распространенных возвратных глаголов (с Akkusativ):**
-   **sich waschen** (мыться): *Ich wasche **mich** jeden Morgen.* (Я моюсь каждое утро.)
-   **sich anziehen** (одеваться): *Er zieht **sich** schnell an.* (Он быстро одевается.) (отделяемая приставка 'an')
-   **sich ausziehen** (раздеваться): *Sie zieht **sich** vor dem Schlafengehen aus.* (Она раздевается перед сном.) (отделяемая приставка 'aus')
-   **sich kämmen** (причесываться): *Kämmst du **dich** oft?* (Ты часто причесываешься?)
-   **sich freuen (über + A / auf + A)** (радоваться чему-л.): *Wir freuen **uns** über das Geschenk.* (Мы радуемся подарку.) *Ich freue **mich** auf die Ferien.* (Я радуюсь каникулам.)
-   **sich treffen (mit + D)** (встречаться с кем-л.): *Sie trifft **sich** heute mit ihren Freunden.* (Она встречается сегодня со своими друзьями.)
-   **sich setzen** (садиться): *Setzen Sie **sich**, bitte!* (Садитесь, пожалуйста!)
-   **sich fühlen** (чувствовать себя): *Wie fühlst du **dich** heute?* (Как ты себя сегодня чувствуешь?)
-   **sich interessieren für + A** (интересоваться чем-л.): *Wofür interessierst du **dich**?* (Чем ты интересуешься?)
-   **sich erinnern an + A** (помнить о, вспоминать): *Erinnerst du **dich** an ihn?* (Ты помнишь его?)
-   **sich ärgern über + A** (злиться, сердиться на кого-л./что-л.): *Ärgere **dich** nicht!* (Не злись!)
-   **sich beeilen** (спешить, торопиться): *Wir müssen **uns** beeilen.* (Мы должны спешить.)
-   **sich erholen** (отдыхать, приходить в себя): *Im Urlaub kann man **sich** gut erholen.* (В отпуске можно хорошо отдохнуть.)
-   **sich vorbereiten auf + A** (готовиться к): *Ich bereite **mich** auf die Prüfung vor.* (Я готовлюсь к экзамену.)

Некоторые глаголы могут быть как возвратными, так и невозвратными, в зависимости от значения (например, *waschen* – стирать что-то, *sich waschen* – мыться).

На уровне A2 важно запомнить основные возвратные глаголы и правильные формы возвратных местоимений в Akkusativ. Существуют также глаголы, требующие возвратное местоимение в Dativ, но они обычно изучаются позже.
`,
  vocabulary: [
    { german: 'mich', russian: 'меня, себе (возвр. Akkusativ для ich)' },
    { german: 'dich', russian: 'тебя, себе (возвр. Akkusativ для du)' },
    { german: 'sich', russian: 'себя, себе (возвр. Akkusativ/Dativ для er/sie/es/sie/Sie)' },
    { german: 'uns', russian: 'нас, себе (возвр. Akkusativ/Dativ для wir)' },
    { german: 'euch', russian: 'вас, себе (возвр. Akkusativ/Dativ для ihr)' },
    { german: 'sich waschen', russian: 'мыться', example: 'Ich wasche mich.' },
    { german: 'sich anziehen', russian: 'одеваться', example: 'Er zieht sich an.' },
    { german: 'sich freuen', russian: 'радоваться', example: 'Wir freuen uns.' },
    { german: 'sich treffen', russian: 'встречаться', example: 'Trefft ihr euch heute?' },
    { german: 'sich setzen', russian: 'садиться', example: 'Bitte setzen Sie sich.' },
    { german: 'sich fühlen', russian: 'чувствовать себя', example: 'Ich fühle mich gut.' },
    { german: 'sich interessieren für + A', russian: 'интересоваться чем-л.', example: 'Sie interessiert sich für Musik.' },
    { german: 'sich erinnern an + A', russian: 'помнить о, вспоминать', example: 'Erinnerst du dich an den Film?' },
    { german: 'sich ärgern über + A', russian: 'злиться, сердиться на', example: 'Ärgere dich nicht über das Wetter.' },
    { german: 'sich beeilen', russian: 'спешить', example: 'Wir müssen uns beeilen.' },
  ],
  exercises: [
    {
      id: 'a2-reflexiv-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное возвратное местоимение: Ich wasche ___ jeden Morgen.',
      sentenceParts: ['Ich wasche ', ' jeden Morgen.'],
      correctAnswer: 'mich',
      explanation: 'Для "ich" возвратное местоимение в Akkusativ - "mich".',
    },
    {
      id: 'a2-reflexiv-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильную форму: "Freust du ___ auf die Party?"',
      options: ['mich', 'dich', 'sich', 'euch'],
      correctAnswer: 'dich',
      explanation: 'Для "du" возвратное местоимение в Akkusativ - "dich".',
    },
    {
      id: 'a2-reflexiv-ex3',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол в правильную форму: Er ___ (sich kämmen) die Haare.',
      sentenceParts: ['Er ', ' die Haare.'],
      correctAnswer: 'kämmt sich',
      explanation: 'Глагол "kämmen" для "er" - "kämmt". Возвратное местоимение "sich".',
    },
    {
      id: 'a2-reflexiv-ex4',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы встречаемся в 7 часов."',
      prompt: 'Мы встречаемся в 7 часов.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir treffen uns um 7 Uhr.',
      explanation: '"Встречаться" - "sich treffen". Для "wir" - "treffen uns".',
    },
    {
      id: 'a2-reflexiv-ex5',
      type: 'multiple_choice',
      question: 'Какое предложение верное?',
      options: [
        'Sie interessiert sich für das Buch.',
        'Sie interessiert dich für das Buch.',
        'Sie interessiert mich für das Buch.'
      ],
      correctAnswer: 'Sie interessiert sich für das Buch.',
      explanation: 'Для "sie" (она) возвратное местоимение - "sich". "sich interessieren für + A".',
    },
  ],
};
