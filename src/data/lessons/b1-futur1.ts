
import type { Lesson } from '@/types';

// --- Урок B1: Будущее время (Futur I) ---
export const lessonB1Futur1: Lesson = {
  id: 'b1-futur1',
  level: 'B1',
  topic: 'Будущее время (Futur I)',
  theory: \`Futur I (простое будущее время) используется в немецком языке для выражения действий или событий, которые произойдут в будущем. Оно также может использоваться для выражения предположений, намерений или обещаний.

**1. Образование Futur I:**
Futur I образуется с помощью вспомогательного глагола **werden** (в соответствующей форме Präsens) и **Infinitiv** (начальной формы) смыслового глагола.
Формула: **werden (спрягаемая форма) + ... + Infinitiv**

**Спряжение вспомогательного глагола \`werden\` в Präsens:**
-   ich werde
-   du wirst
-   er/sie/es wird
-   wir werden
-   ihr werdet
-   sie/Sie werden

**2. Порядок слов в предложении с Futur I:**
-   В простом повествовательном предложении спрягаемая форма глагола \`werden\` стоит на втором месте, а инфинитив смыслового глагола – в конце предложения.
    *Пример: Ich **werde** morgen meine Oma **besuchen**.* (Я завтра навещу свою бабушку.)
    *Пример: Wir **werden** nächstes Jahr nach Spanien **fliegen**.* (Мы в следующем году полетим в Испанию.)
-   В вопросительном предложении без вопросительного слова форма \`werden\` стоит на первом месте.
    *Пример: **Wirst** du mir **helfen**?* (Ты мне поможешь?)
-   В придаточном предложении спрягаемая форма \`werden\` стоит в самом конце, инфинитив смыслового глагола – перед ней.
    *Пример: Ich weiß, dass er bald **kommen wird**.* (Я знаю, что он скоро придет.) (В придаточном: Infinitiv + werden)

**3. Использование Futur I:**
-   **Действия в будущем:**
    *   *Morgen **wird** es **regnen**.* (Завтра будет дождь.)
    *   *Wir **werden** das Projekt nächste Woche **beginnen**.* (Мы начнем проект на следующей неделе.)
-   **Намерения и планы:**
    *   *Ich **werde** mehr Sport **treiben**.* (Я буду больше заниматься спортом.)
    *   *Sie **wird** Deutsch **lernen**.* (Она будет учить немецкий.)
-   **Предположения (Vermutungen) о настоящем или будущем:**
    *   *Er **wird** wohl noch im Büro **sein**.* (Он, вероятно, еще в офисе. – предположение о настоящем)
    *   *Sie **wird** die Prüfung bestimmt **bestehen**.* (Она наверняка сдаст экзамен. – предположение о будущем)
-   **Обещания (Versprechen):**
    *   *Ich **werde** dir immer **helfen**.* (Я всегда буду тебе помогать.)
-   **Категоричное требование или приказ (редко, звучит очень строго):**
    *   *Du **wirst** jetzt deine Hausaufgaben **machen**!* (Ты сейчас же будешь делать свои домашние задания!)

**Важно:** В разговорной немецкой речи для обозначения будущих действий очень часто используется Präsens (настоящее время) в сочетании с обстоятельством времени, указывающим на будущее (например, \`morgen\`, \`nächste Woche\`, \`bald\`).
    *   *Ich **fahre** morgen nach Berlin.* (Я еду завтра в Берлин.) (вместо: Ich **werde** morgen nach Berlin **fahren**.)
Futur I используется, когда нужно особо подчеркнуть будущее время, сделать прогноз, выразить намерение или предположение.

Запоминание спряжения \`werden\` и правильная постановка инфинитива в конец предложения – ключ к использованию Futur I.\`,
  vocabulary: [
    { german: 'werden (ich werde, du wirst, er wird)', russian: 'становиться (вспомогательный глагол для Futur I)', example: 'Ich werde Arzt.' },
    { german: 'der Infinitiv', russian: 'инфинитив (начальная форма глагола)', example: 'Der Infinitiv steht am Ende des Satzes im Futur I.' },
    { german: 'morgen', russian: 'завтра', example: 'Was wirst du morgen machen?' },
    { german: 'übermorgen', russian: 'послезавтра', example: 'Übermorgen werden wir verreisen.' },
    { german: 'bald', russian: 'скоро', example: 'Er wird bald zurück sein.' },
    { german: 'nächste Woche', russian: 'на следующей неделе', example: 'Nächste Woche werde ich viel zu tun haben.' },
    { german: 'nächstes Jahr', russian: 'в следующем году', example: 'Nächstes Jahr werden sie heiraten.' },
    { german: 'die Zukunft', russian: 'будущее', example: 'Was wird die Zukunft bringen?' },
    { german: 'planen', russian: 'планировать', example: 'Wir werden unseren Urlaub planen.' },
    { german: 'versprechen (verspricht)', russian: 'обещать', example: 'Ich werde dir ein Geschenk kaufen, das verspreche ich.' },
    { german: 'vermuten', russian: 'предполагать', example: 'Er wird vermutlich zu spät kommen.' },
  ],
  exercises: [
    {
      id: 'b1-futur1-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму глагола \`werden\` для "ihr":',
      options: ['wird', 'werdet', 'werden', 'wirst'],
      correctAnswer: 'werdet',
      explanation: 'Для местоимения "ihr" (вы) глагол "werden" в Präsens имеет форму "werdet".',
    },
    {
      id: 'b1-futur1-ex2',
      type: 'fill_in_the_blank',
      question: 'Составьте предложение в Futur I: Ich ___ morgen das Museum ___. (besuchen)',
      sentenceParts: ['Ich ', ' morgen das Museum ', '.'],
      correctAnswer: 'werde, besuchen',
      explanation: 'Futur I: ich werde + Infinitiv (besuchen) в конце. "Ich werde morgen das Museum besuchen."',
    },
    {
      id: 'b1-futur1-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Она скоро придет."',
      prompt: 'Она скоро придет.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie wird bald kommen.',
      explanation: 'Futur I: sie wird + bald + Infinitiv (kommen).',
    },
    {
      id: 'b1-futur1-ex4',
      type: 'multiple_choice',
      question: 'Какое предложение выражает предположение в Futur I?',
      options: [
        'Ich werde morgen arbeiten.',
        'Er wird wahrscheinlich schon zu Hause sein.',
        'Wir werden einen Kaffee trinken.'
      ],
      correctAnswer: 'Er wird wahrscheinlich schon zu Hause sein.',
      explanation: 'Слова "wahrscheinlich" (вероятно) указывают на предположение. "Er wird ... sein" - Futur I для предположения о настоящем.',
    },
    {
      id: 'b1-futur1-ex5',
      type: 'fill_in_the_blank',
      question: 'Переделайте предложение из Präsens в Futur I: "Wir lernen für die Prüfung."',
      sentenceParts: ['Wir ', ' für die Prüfung ', '.'],
      correctAnswer: 'werden, lernen',
      explanation: 'Präsens "Wir lernen" становится Futur I "Wir werden lernen".',
    },
  ],
};
