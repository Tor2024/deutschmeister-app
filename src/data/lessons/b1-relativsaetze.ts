
import type { Lesson } from '@/types';

// --- Урок B1: Относительные придаточные предложения (Relativsätze) (углубленно) ---
export const lessonB1Relativsaetze: Lesson = {
  id: 'b1-relativsaetze',
  level: 'B1',
  topic: 'Относительные придаточные предложения (Relativsätze) (углубленно)',
  theory: `Относительные придаточные предложения (Relativsätze) – это зависимые предложения, которые дают дополнительную информацию о существительном или местоимении в главном предложении. Существительное или местоимение, к которому относится относительное предложение, называется **антецедентом** (Bezugswort). Относительные предложения всегда отделяются от главного предложения запятыми.

**Основное правило порядка слов:** Как и в других придаточных предложениях, спрягаемый глагол в относительном предложении стоит **в самом конце**.

**1. Относительные местоимения (Relativpronomen)**
В качестве относительных местоимений чаще всего используются формы определенного артикля: **der, die, das** (и их формы в других падежах).
-   **Род (Genus) и число (Numerus)** относительного местоимения определяются родом и числом антецедента в главном предложении.
-   **Падеж (Kasus)** относительного местоимения определяется его синтаксической функцией (подлежащее, прямое/косвенное дополнение и т.д.) **внутри самого относительного предложения**.

**Таблица склонения основных относительных местоимений (der, die, das):**

| Падеж       | Мужской род (Maskulinum) | Женский род (Femininum) | Средний род (Neutrum) | Множественное число (Plural) |
|-------------|--------------------------|-------------------------|-----------------------|-------------------------------|
| **Nominativ** (кто? что?) | der                      | die                     | das                   | die                           |
| **Akkusativ** (кого? что?) | den                      | die                     | das                   | die                           |
| **Dativ** (кому? чему?)   | dem                      | der                     | dem                   | **denen** + **-n** (к сущ. в Dativ Plural, если требуется)     |
| **Genitiv** (чей? чья? чьё? чьи?) | **dessen**               | **deren**               | **dessen**            | **deren**                     |

*Примечание: Genitiv (родительный падеж) с \`dessen/deren\` очень важен и часто используется для выражения принадлежности.*

**Примеры:**

*   **Nominativ (относительное местоимение – подлежащее в придаточном):**
    *   *Der Mann, **der** dort steht, ist mein Lehrer.* (Мужчина, **который** там стоит, мой учитель.) (Антецедент: Der Mann (м.р., ед.ч.). В придат.: der steht – Nominativ)
    *   *Die Frau, **die** Deutsch lernt, ist sehr fleißig.* (Женщина, **которая** учит немецкий, очень прилежная.) (Антецедент: Die Frau (ж.р., ед.ч.). В придат.: die lernt – Nominativ)
    *   *Das Kind, **das** spielt, lacht.* (Ребенок, **который** играет, смеется.) (Антецедент: Das Kind (ср.р., ед.ч.). В придат.: das spielt – Nominativ)
    *   *Die Bücher, **die** auf dem Tisch liegen, sind neu.* (Книги, **которые** лежат на столе, новые.) (Антецедент: Die Bücher (мн.ч.). В придат.: die liegen – Nominativ)

*   **Akkusativ (относительное местоимение – прямое дополнение в придаточном):**
    *   *Der Film, **den** ich gestern gesehen habe, war spannend.* (Фильм, **который** я вчера видел, был увлекательным.) (Антецедент: Der Film (м.р., ед.ч.). В придат.: ich habe den Film gesehen – Akkusativ)
    *   *Die Tasche, **die** du gekauft hast, gefällt mir.* (Сумка, **которую** ты купила, мне нравится.) (Антецедент: Die Tasche (ж.р., ед.ч.). В придат.: du hast die Tasche gekauft – Akkusativ)
    *   *Das Auto, **das** er repariert, ist alt.* (Машина, **которую** он ремонтирует, старая.) (Антецедент: Das Auto (ср.р., ед.ч.). В придат.: er repariert das Auto – Akkusativ)
    *   *Die Freunde, **die** wir eingeladen haben, kommen bald.* (Друзья, **которых** мы пригласили, скоро придут.) (Антецедент: Die Freunde (мн.ч.). В придат.: wir haben die Freunde eingeladen – Akkusativ)

*   **Dativ (относительное местоимение – косвенное дополнение в придаточном):**
    *   *Der Kollege, **dem** ich geholfen habe, war dankbar.* (Коллега, **которому** я помог, был благодарен.) (Антецедент: Der Kollege (м.р., ед.ч.). В придат.: ich habe dem Kollegen geholfen – Dativ)
    *   *Die Studentin, **der** der Professor eine Frage stellt, antwortet gut.* (Студентка, **которой** профессор задает вопрос, отвечает хорошо.) (Антецедент: Die Studentin (ж.р., ед.ч.). В придат.: der Professor stellt der Studentin eine Frage – Dativ)
    *   *Das Mädchen, **dem** das Fahrrad gehört, ist meine Schwester.* (Девочка, **которой** принадлежит велосипед, моя сестра.) (Антецедент: Das Mädchen (ср.р., ед.ч.). В придат.: das Fahrrad gehört dem Mädchen – Dativ)
    *   *Die Leute, **denen** wir das Geschenk gegeben haben, freuten sich sehr.* (Люди, **которым** мы дали подарок, очень обрадовались.) (Антецедент: Die Leute (мн.ч.). В придат.: wir haben den Leuten das Geschenk gegeben – Dativ. Обратите внимание на окончание **-n** у существительного Leute**n** в Dativ Plural, если оно его требует).

*   **Genitiv (относительное местоимение выражает принадлежность):**
    *   *Der Mann, **dessen** Auto kaputt ist, kommt zu spät.* (Мужчина, **чья** машина сломана, опоздает.) (Антецедент: Der Mann (м.р., ед.ч.))
    *   *Die Frau, **deren** Kinder im Garten spielen, liest ein Buch.* (Женщина, **чьи** дети играют в саду, читает книгу.) (Антецедент: Die Frau (ж.р., ед.ч.))
    *   *Das Haus, **dessen** Dach rot ist, gehört meinem Onkel.* (Дом, **чья** крыша красная, принадлежит моему дяде.) (Антецедент: Das Haus (ср.р., ед.ч.))
    *   *Die Studenten, **deren** Prüfungsergebnisse gut waren, feierten.* (Студенты, **чьи** результаты экзаменов были хорошими, праздновали.) (Антецедент: Die Studenten (мн.ч.))

**2. Относительные местоимения с предлогами**
Если в относительном предложении есть глагол или выражение, требующее определенного предлога, этот предлог ставится **перед** относительным местоимением. Падеж относительного местоимения определяется этим предлогом.
-   *Der Stuhl, **auf dem** die Katze sitzt, ist bequem.* (Стул, **на котором** сидит кошка, удобный.) (sitzen auf + Dativ)
-   *Das Thema, **über das** wir sprechen, ist interessant.* (Тема, **о которой** мы говорим, интересная.) (sprechen über + Akkusativ)
-   *Die Freunde, **mit denen** ich ins Kino gehe, sind nett.* (Друзья, **с которыми** я иду в кино, милые.) (gehen mit + Dativ)
-   *Der Film, **für den** er sich interessiert, läuft heute Abend.* (Фильм, **которым** он интересуется, идет сегодня вечером.) (sich interessieren für + Akkusativ)

**3. Относительное местоимение "was"**
Местоимение **was** (что) используется в качестве относительного местоимения, когда антецедент (Bezugswort):
-   Неопределенное местоимение, такое как **alles** (всё), **nichts** (ничего), **etwas** (что-то), **manches** (некоторое), **vieles** (многое), **weniges** (немногое).
    *   *Alles, **was** er sagt, ist wahr.* (Всё, **что** он говорит, правда.)
    *   *Das ist etwas, **was** ich nicht verstehe.* (Это что-то, **чего** (что) я не понимаю.)
-   Существительное, образованное от прилагательного в превосходной степени и употребленное в среднем роде (субстантивированный суперлатив среднего рода).
    *   *Das Schönste, **was** ich je gesehen habe, war dieser Sonnenuntergang.* (Самое красивое, **что** я когда-либо видел, был этот закат.)
    *   *Das Beste, **was** du tun kannst, ist ehrlich zu sein.* (Лучшее, **что** ты можешь сделать, это быть честным.)
-   Целое предыдущее предложение (когда придаточное относится ко всему содержанию главного предложения).
    *   *Er hat die Prüfung bestanden, **was** uns alle sehr gefreut hat.* (Он сдал экзамен, **что** нас всех очень обрадовало.)
    *   *Sie kommt heute nicht, **was** schade ist.* (Она сегодня не придет, **что** жаль.)

**4. Относительные наречия "wo", "wohin", "woher" (Relativadverbien)**
Когда антецедент обозначает место или направление, вместо конструкции "предлог + относительное местоимение" можно использовать относительные наречия:
-   **wo** (где – для указания статического места):
    *   *Die Stadt, **wo** ich geboren wurde, ist sehr klein.* (Город, **где** я родился, очень маленький.)
    *   Эквивалентно: *Die Stadt, **in der** ich geboren wurde, ...*
-   **wohin** (куда – для указания направления движения к месту):
    *   *Das Land, **wohin** er reisen möchte, ist Italien.* (Страна, **куда** он хочет поехать, – Италия.)
    *   Эквивалентно: *Das Land, **in das** er reisen möchte, ...*
-   **woher** (откуда – для указания направления движения от места):
    *   *Der Ort, **woher** sie kommt, liegt in den Bergen.* (Место, **откуда** она родом, находится в горах.)
    *   Эквивалентно: *Der Ort, **aus dem** sie kommt, ...*

Использование относительных наречий часто делает речь более краткой и естественной, особенно в устной речи.

Понимание и правильное использование относительных предложений делает речь более связной, точной и стилистически богатой. Это важный навык для свободного владения немецким языком.`,
  vocabulary: [
    { german: 'der, die, das (Relativpronomen)', russian: 'который, которая, которое (основные относит. местоимения)', example: 'Der Mann, der lacht, ist mein Freund.' },
    { german: 'den (Relativpronomen, Akk. Mask.)', russian: 'которого (вин.п. м.р.)', example: 'Der Kuchen, den ich gebacken habe.' },
    { german: 'dem (Relativpronomen, Dat. Mask./Neut.)', russian: 'которому (дат.п. м.р./ср.р.)', example: 'Der Freund, dem ich helfe.' },
    { german: 'der (Relativpronomen, Dat. Fem.)', russian: 'которой (дат.п. ж.р.)', example: 'Die Frau, der ich danke.' },
    { german: 'denen (Relativpronomen, Dat. Plural)', russian: 'которым (дат.п. мн.ч.)', example: 'Die Kinder, denen ich Süßigkeiten gebe.' },
    { german: 'dessen (Genitiv Mask./Neut.)', russian: 'чей, которого (род.п. м.р., ср.р.)', example: 'Der Autor, dessen Buch ich liebe.' },
    { german: 'deren (Genitiv Fem./Plural)', russian: 'чья, которой, которых (род.п. ж.р., мн.ч.)', example: 'Die Frau, deren Auto neu ist.' },
    { german: 'was (Relativpronomen)', russian: 'что (после alles, nichts, Bezug auf ganzen Satz)', example: 'Alles, was du sagst, ist wichtig.' },
    { german: 'wo (Relativadverb)', russian: 'где (относительное наречие места)', example: 'Die Stadt, wo ich wohne, ist schön.' },
    { german: 'wohin (Relativadverb)', russian: 'куда (относительное наречие направления)', example: 'Das Land, wohin wir reisen.' },
    { german: 'woher (Relativadverb)', russian: 'откуда (относительное наречие направления)', example: 'Der Ort, woher er kommt.' },
    { german: 'das Bezugswort (-wörter)', russian: 'антецедент (определяемое слово)' },
    { german: 'die Präposition, die Präpositionen', russian: 'предлог, предлоги', example: 'Der Tisch, auf dem das Buch liegt.' },
    { german: 'stehen (steht, stand, hat gestanden)', russian: 'стоять', example: 'Der Baum, der im Garten steht.' },
    { german: 'sehen (sieht, sah, hat gesehen)', russian: 'видеть', example: 'Der Film, den wir sahen.' },
    { german: 'helfen (hilft, half, hat geholfen) + Dativ', russian: 'помогать (кому-л.)', example: 'Die Person, der ich half.' },
    { german: 'sprechen (spricht, sprach, hat gesprochen) über + Akkusativ', russian: 'говорить (о чём-л.)', example: 'Das Thema, über das wir sprachen.' },
    { german: 'gehören (gehört, gehörte, hat gehört) + Dativ', russian: 'принадлежать (кому-л.)', example: 'Das Haus, das ihm gehört.' },
    { german: 'sich interessieren für + Akkusativ', russian: 'интересоваться (чем-л.)', example: 'Das Buch, für das sie sich interessiert.' }
  ],
  exercises: [
    {
      id: 'b1-relativ-adv-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильное относительное местоимение: Das ist der Kuchen, ___ meine Mutter gebacken hat.',
      options: ['der', 'die', 'das', 'den'],
      correctAnswer: 'den',
      explanation: 'Антецедент "der Kuchen" (мужской род, ед.ч.). В придаточном предложении "meine Mutter hat den Kuchen gebacken", то есть "Kuchen" является прямым дополнением и стоит в Akkusativ. Относительное местоимение для мужского рода Akkusativ - "den".',
    },
    {
      id: 'b1-relativ-adv-ex2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение относительным местоимением: Die Kinder, mit ___ wir gespielt haben, sind sehr lustig.',
      sentenceParts: ['Die Kinder, mit ', ' wir gespielt haben, sind sehr lustig.'],
      correctAnswer: 'denen',
      explanation: 'Антецедент "Die Kinder" (множественное число). Предлог "mit" всегда требует Dativ. Относительное местоимение для множественного числа Dativ - "denen".',
    },
    {
      id: 'b1-relativ-adv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Вот книга, о которой я тебе рассказывал."',
      prompt: 'Вот книга, о которой я тебе рассказывал.',
      languageDirection: 'to_german',
      correctAnswer: 'Hier ist das Buch, von dem ich dir erzählt habe.',
      explanation: 'Антецедент "das Buch" (средний род, ед.ч.). Глагол "erzählen" часто используется с предлогом "von + Dativ" (рассказывать о ком-л./чём-л.). Относительное местоимение для среднего рода Dativ с предлогом "von" - "von dem". Спрягаемый глагол "habe" в конце придаточного.',
    },
    {
      id: 'b1-relativ-adv-ex4',
      type: 'multiple_choice',
      question: 'Какое относительное местоимение используется после слова "alles"?',
      options: ['der', 'die', 'das', 'was'],
      correctAnswer: 'was',
      explanation: 'После неопределенных местоимений, таких как "alles", "nichts", "etwas", "vieles", а также после субстантивированных суперлативов среднего рода и для ссылки на всё предыдущее предложение, используется относительное местоимение "was".',
    },
    {
      id: 'b1-relativ-adv-ex5',
      type: 'fill_in_the_blank',
      question: 'Объедините два предложения в одно с относительным придаточным: Das ist der Mann. Der Mann wohnt nebenan.',
      sentenceParts: ['Das ist der Mann, ', ' nebenan wohnt.'],
      correctAnswer: 'der',
      explanation: 'Антецедент "der Mann" (мужской род, ед.ч.). В придаточном предложении "der Mann" является подлежащим (Nominativ). Относительное местоимение для мужского рода Nominativ - "der". Спрягаемый глагол "wohnt" в конце.',
    },
    {
      id: 'b1-relativ-adv-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант для места: Das ist die Stadt, ___ ich studiere.',
      options: ['in der', 'wohin', 'aus der', 'deren'],
      correctAnswer: 'in der',
      explanation: 'Антецедент "die Stadt" (женский род, ед.ч.). Глагол "studieren" используется с предлогом "in + Dativ" для указания места учебы (studieren in der Stadt). Поэтому относительное местоимение с предлогом будет "in der". Альтернативно можно использовать "wo", но "in der" более точно передает грамматическую связь.',
    },
    {
      id: 'b1-relativ-adv-ex7',
      type: 'translation',
      question: 'Переведите на немецкий: "Учительница, которой я подарил цветы, была очень рада."',
      prompt: 'Учительница, которой я подарил цветы, была очень рада.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Lehrerin, der ich Blumen geschenkt habe, war sehr froh.',
      explanation: 'Антецедент "Die Lehrerin" (женский род, ед.ч.). В придаточном предложении "ich habe der Lehrerin Blumen geschenkt", "der Lehrerin" является косвенным дополнением в Dativ. Относительное местоимение для женского рода Dativ - "der". Спрягаемый глагол "habe" в конце придаточного.',
    },
    {
      id: 'b1-relativ-adv-ex8',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильное относительное местоимение Genitiv: Das ist der Autor, ___ Bücher Bestseller sind.',
      sentenceParts: ['Das ist der Autor, ', ' Bücher Bestseller sind.'],
      correctAnswer: 'dessen',
      explanation: 'Антецедент "der Autor" (мужской род, ед.ч.). "Bücher" принадлежат автору. Относительное местоимение Genitiv для мужского рода ед.ч. - "dessen" (чей).',
    },
  ],
};

    