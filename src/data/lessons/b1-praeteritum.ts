
import type { Lesson } from '@/types';

// --- Урок B1: Прошедшее время Präteritum (углубленно) ---
export const lessonB1Praeteritum: Lesson = {
  id: 'b1-praeteritum',
  level: 'B1',
  topic: 'Прошедшее время Präteritum (углубленно)',
  theory: `Präteritum (простое прошедшее время), также известное как Imperfekt, используется преимущественно в письменной речи для описания событий и действий в прошлом. Оно характерно для рассказов, романов, официальных отчетов, новостей и повествований. В устной речи для выражения прошедшего времени чаще используется Perfekt, однако глаголы \`sein\`, \`haben\` и модальные глаголы очень часто употребляются в Präteritum и в устной речи.

**1. Слабые (регулярные) глаголы (Schwache / Regelmäßige Verben)**
Слабые глаголы образуют Präteritum путем добавления суффикса **-te-** к основе глагола и последующих личных окончаний.
Формула: Основа глагола + **-te-** + личное окончание.
Личные окончания в Präteritum для слабых глаголов:
-   ich: **-te**
-   du: **-test**
-   er/sie/es: **-te**
-   wir: **-ten**
-   ihr: **-tet**
-   sie/Sie: **-ten**

Пример: **lernen** (учить), основа: **lern-**
-   ich lern**te** (я учил/а)
-   du lern**test** (ты учил/а)
-   er/sie/es lern**te** (он/она/оно учил/а)
-   wir lern**ten** (мы учили)
-   ihr lern**tet** (вы учили)
-   sie/Sie lern**ten** (они/Вы учили)

Другие примеры:
-   machen (делать): ich mach**te**, du mach**test**, er mach**te**, ...
-   spielen (играть): ich spiel**te**, du spiel**test**, er spiel**te**, ...
-   fragen (спрашивать): ich frag**te**, du frag**test**, er frag**te**, ...

**Особенность:** Если основа слабого глагола заканчивается на **-d, -t, -m, -n** (причем перед -m или -n стоит другой согласный, кроме l, r, h), то для благозвучия перед суффиксом **-te-** добавляется гласная **-e-**.
Пример: **arbeiten** (работать), основа: **arbeit-**
-   ich arbeit**ete**
-   du arbeit**etest**
-   er/sie/es arbeit**ete**
-   wir arbeit**eten**
-   ihr arbeit**etet**
-   sie/Sie arbeit**eten**
Другие примеры: warten (ждал) - wartete, antworten (отвечал) - antwortete, öffnen (открывал) - öffnete.

**2. Сильные (нерегулярные) глаголы (Starke / Unregelmäßige Verben)**
Сильные глаголы образуют Präteritum путем **изменения корневой гласной**, а иногда и согласной. У них **нет суффикса -te-**.
Важная особенность: в 1-м и 3-м лице единственного числа (ich, er/sie/es) у сильных глаголов в Präteritum **нет окончания**.
Формы Präteritum сильных глаголов необходимо запоминать.

Личные окончания в Präteritum для сильных глаголов (присоединяются к измененной основе):
-   ich: (измененная основа) — нет окончания
-   du: (измененная основа) + **-st**
-   er/sie/es: (измененная основа) — нет окончания
-   wir: (измененная основа) + **-en**
-   ihr: (измененная основа) + **-t**
-   sie/Sie: (измененная основа) + **-en**

Примеры:
-   **gehen** (идти) → Präteritum основа **ging**:
    -   ich ging (я шел/шла)
    -   du gingst (ты шел/шла)
    -   er/sie/es ging (он/она/оно шел/шла)
    -   wir gingen (мы шли)
    -   ihr gingt (вы шли)
    -   sie/Sie gingen (они/Вы шли)
-   **sehen** (видеть) → **sah**: ich sah, du sahst, er sah, wir sahen, ihr saht, sie sahen.
-   **sprechen** (говорить) → **sprach**: ich sprach, du sprachst, er sprach, wir sprachen, ihr spracht, sie sprachen.
-   **kommen** (приходить) → **kam**: ich kam, du kamst, er kam, wir kamen, ihr kamt, sie kamen.
-   **lesen** (читать) → **las**: ich las, du las(e)st, er las, wir lasen, ihr las(e)t, sie lasen. (Если измененная основа заканчивается на -s, -ß, -z, то для ‘du’ может добавляться -est или просто -t, если -s уже есть).
-   **schreiben** (писать) → **schrieb**: ich schrieb, du schriebst, er schrieb, wir schrieben, ihr schriebt, sie schrieben.

**3. Глаголы "sein" (быть) и "haben" (иметь)**
Эти глаголы имеют особые, полностью нерегулярные формы Präteritum, которые очень часто используются как в письменной, так и в устной речи:
*   **sein (быть):**
    -   ich **war**
    -   du **warst**
    -   er/sie/es **war**
    -   wir **waren**
    -   ihr **wart**
    -   sie/Sie **waren**
*   **haben (иметь):**
    -   ich **hatte**
    -   du **hattest**
    -   er/sie/es **hatte**
    -   wir **hatten**
    -   ihr **hattet**
    -   sie/Sie **hatten**

**4. Модальные глаголы (Modalverben)**
Модальные глаголы также часто используются в Präteritum в устной и письменной речи. Они спрягаются по типу сильных глаголов: 1-е и 3-е лицо единственного числа совпадают и не имеют окончания. Если у модального глагола есть умлаут в инфинитиве (können, müssen, dürfen, mögen), он исчезает в Präteritum.
-   können (мочь, уметь) → **konnte**: ich konnte, du konntest, er/sie/es konnte, wir konnten, ihr konntet, sie/Sie konnten.
-   müssen (быть должным) → **musste**: ich musste, du musstest, er/sie/es musste, ...
-   dürfen (мочь, иметь разрешение) → **durfte**: ich durfte, du durftest, er/sie/es durfte, ...
-   wollen (хотеть) → **wollte**: ich wollte, du wolltest, er/sie/es wollte, ... (слабое образование, но без умлаута)
-   sollen (быть должным, следовать) → **sollte**: ich sollte, du solltest, er/sie/es sollte, ... (слабое образование)
-   mögen (любить, нравиться) → **mochte**: ich mochte, du mochtest, er/sie/es mochte, ... (значение "любил, нравилось")

**Когда использовать Präteritum, а когда Perfekt?**
-   **Präteritum:**
    *   Преимущественно в письменной речи (книги, газеты, рассказы, официальные документы).
    *   В устной речи для глаголов \`sein\`, \`haben\`, модальных глаголов.
    *   Для некоторых других часто используемых глаголов (например, \`wissen -> wusste\`, \`denken -> dachte\`, \`gehen -> ging\`, \`kommen -> kam\`) в устных рассказах, особенно в северной Германии.
    *   Для описания состояний, длительных действий или последовательности событий в прошлом в повествовании.
-   **Perfekt:**
    *   Преимущественно в устной речи для завершенных действий в прошлом, результат которых часто важен для настоящего.
    *   В письменной речи, если нужно подчеркнуть результат действия для настоящего момента (например, в личных письмах, email).

Запоминание форм Präteritum, особенно для сильных глаголов, требует регулярной практики и заучивания.`,
  vocabulary: [
    { german: 'lernen (lernte)', russian: 'учить, изучать (пр.: он учил)', example: 'Er lernte fleißig für die Prüfung.' },
    { german: 'machen (machte)', russian: 'делать (пр.: мы делали)', example: 'Wir machten einen Ausflug.' },
    { german: 'arbeiten (arbeitete)', russian: 'работать (пр.: она работала)', example: 'Sie arbeitete den ganzen Tag.' },
    { german: 'spielen (spielte)', russian: 'играть (пр.: дети играли)', example: 'Die Kinder spielten im Garten.' },
    { german: 'wohnen (wohnte)', russian: 'жить, проживать (пр.: я жил)', example: 'Ich wohnte früher in Berlin.' },
    { german: 'fragen (fragte)', russian: 'спрашивать (пр.: он спросил)', example: 'Er fragte mich nach dem Weg.' },
    { german: 'sagen (sagte)', russian: 'сказать (пр.: она сказала)', example: 'Sie sagte nichts.' },
    { german: 'kaufen (kaufte)', russian: 'покупать (пр.: я купил)', example: 'Ich kaufte ein neues Buch.' },
    { german: 'antworten (antwortete)', russian: 'отвечать (пр.: ты ответил)', example: 'Du antwortetest schnell.' },

    { german: 'sein (war, warst, war, waren, wart, waren)', russian: 'быть (пр.: я был, ты был, он был, мы были, вы были, они были)', example: 'Ich war gestern krank. Wir waren im Urlaub.' },
    { german: 'haben (hatte, hattest, hatte, hatten, hattet, hatten)', russian: 'иметь (пр.: я имел, ты имел, он имел, мы имели, вы имели, они имели)', example: 'Wir hatten viel Spaß. Er hatte keine Zeit.' },

    { german: 'gehen (ging)', russian: 'идти (пр.: он шел)', example: 'Er ging nach Hause.' },
    { german: 'kommen (kam)', russian: 'приходить (пр.: она пришла)', example: 'Sie kam zu spät.' },
    { german: 'sehen (sah)', russian: 'видеть (пр.: я видел)', example: 'Ich sah einen interessanten Film.' },
    { german: 'sprechen (sprach)', russian: 'говорить (пр.: президент говорил)', example: 'Der Präsident sprach zur Nation.' },
    { german: 'lesen (las)', russian: 'читать (пр.: ты читал)', example: 'Du lasest das Buch sehr schnell.' },
    { german: 'schreiben (schrieb)', russian: 'писать (пр.: он писал)', example: 'Er schrieb einen langen Brief.' },
    { german: 'fahren (fuhr)', russian: 'ехать (пр.: мы ехали)', example: 'Wir fuhren ans Meer.' },
    { german: 'schlafen (schlief)', russian: 'спать (пр.: ребенок спал)', example: 'Das Baby schlief ruhig.' },
    { german: 'essen (aß)', russian: 'есть, кушать (пр.: они ели)', example: 'Sie aßen Pizza zum Abendessen.' },
    { german: 'trinken (trank)', russian: 'пить (пр.: я пил)', example: 'Ich trank ein Glas Wasser.' },
    { german: 'finden (fand)', russian: 'находить (пр.: он нашел)', example: 'Er fand seinen Schlüssel.' },
    { german: 'geben (gab)', russian: 'давать (пр.: она дала)', example: 'Sie gab mir ein Geschenk.' },
    { german: 'nehmen (nahm)', russian: 'брать (пр.: он взял)', example: 'Er nahm den Regenschirm mit.' },

    { german: 'können (konnte)', russian: 'мочь, уметь (пр.: я мог)', example: 'Als Kind konnte ich gut schwimmen.' },
    { german: 'müssen (musste)', russian: 'быть должным (пр.: мы должны были)', example: 'Wir mussten lange warten.' },
    { german: 'wollen (wollte)', russian: 'хотеть (пр.: он хотел)', example: 'Er wollte uns besuchen.' },
    { german: 'sollen (sollte)', russian: 'быть должным (по совету/правилу) (пр.: ты должен был)', example: 'Du solltest das früher sagen.' },
    { german: 'dürfen (durfte)', russian: 'мочь (иметь разрешение) (пр.: я мог)', example: 'Ich durfte als Kind lange aufbleiben.' },
    { german: 'Präteritum / Imperfekt', russian: 'Претерит / Имперфект (простое прошедшее время)' },
  ],
  exercises: [
    {
      id: 'b1-praeteritum-ex1',
      type: 'multiple_choice',
      question: 'Какая форма Präteritum глагола "machen" (делать) для "er"?',
      options: ['machte', 'machtest', 'gemacht', 'machten'],
      correctAnswer: 'machte',
      explanation: '"Machen" - слабый глагол. Präteritum для "er/sie/es" образуется добавлением суффикса -te к основе: mach + te = machte.',
    },
    {
      id: 'b1-praeteritum-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол "sein" в Präteritum: Gestern ___ ich im Kino.',
      sentenceParts: ['Gestern ', ' ich im Kino.'],
      correctAnswer: 'war',
      explanation: 'Präteritum от глагола "sein" для местоимения "ich" (я) - "war".',
    },
    {
      id: 'b1-praeteritum-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Präteritum): "Она читала книгу."',
      prompt: 'Она читала книгу.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie las ein Buch.',
      explanation: '"Lesen" - сильный глагол. Его форма Präteritum для "sie" (она) - "las".',
    },
    {
      id: 'b1-praeteritum-ex4',
      type: 'multiple_choice',
      question: 'Какая форма Präteritum глагола "antworten" (отвечать) для "du"?',
      options: ['antwortet', 'antwortetest', 'antworttest', 'antworten'],
      correctAnswer: 'antwortetest',
      explanation: 'Основа глагола "antworten" заканчивается на -t. Для слабых глаголов с такой основой в Präteritum перед суффиксом -te- и окончанием -st (для "du") добавляется -e-: antwort + e + te + st = antwortetest.',
    },
    {
      id: 'b1-praeteritum-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте глагол в Präteritum: Wir ___ gestern unsere Freunde nicht. (sehen)',
      sentenceParts: ['Wir ', ' gestern unsere Freunde nicht.'],
      correctAnswer: 'sahen',
      explanation: 'Präteritum от сильного глагола "sehen" (видеть) для местоимения "wir" (мы) - "sahen".',
    },
    {
      id: 'b1-praeteritum-ex6',
      type: 'translation',
      question: 'Переведите на немецкий (используя Präteritum): "Мы хотели пойти в кино."',
      prompt: 'Мы хотели пойти в кино.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir wollten ins Kino gehen.',
      explanation: 'Präteritum от модального глагола "wollen" (хотеть) для "wir" (мы) - "wollten". Инфинитив основного глагола "gehen" (пойти) ставится в конце предложения.',
    },
    {
      id: 'b1-praeteritum-ex7',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение в Präteritum, используя глагол "haben": Er ___ keine Zeit für uns.',
      options: ['hat', 'gehabt', 'hatte', 'hättest'],
      correctAnswer: 'hatte',
      explanation: 'Präteritum от глагола "haben" (иметь) для местоимения "er" (он) - "hatte".',
    },
  ],
};

    