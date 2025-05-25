
import type { Lesson } from '@/types';

// --- Урок A2: Образование множественного числа существительных (Pluralbildung) (углубленно) ---
export const lessonA2Pluralbildung: Lesson = {
  id: 'a2-pluralbildung',
  level: 'A2',
  topic: 'Образование множественного числа существительных (Pluralbildung) (углубленно)',
  theory: `Образование множественного числа в немецком языке – одна из сложных тем, так как существует несколько моделей и много исключений. Однако есть определенные закономерности. Определенный артикль для всех существительных во множественном числе всегда **die**.

**Основные модели образования множественного числа:**

**1. Окончание -e:**
   - Многие односложные существительные мужского рода (часто с умлаутом корневой гласной a, o, u → ä, ö, ü).
     Примеры: der Tag → die Tag**e** (день), der Sohn → die S**ö**hn**e** (сын), der Stuhl → die St**ü**hl**e** (стул), der Gast → die G**ä**st**e** (гость), der Hund → die Hund**e** (собака).
   - Некоторые существительные среднего рода (реже с умлаутом).
     Примеры: das Jahr → die Jahr**e** (год), das Heft → die Heft**e** (тетрадь), das Bein → die Bein**e** (нога), das Schiff → die Schiff**e** (корабль).
   - Некоторые существительные женского рода (часто с умлаутом).
     Примеры: die Hand → die H**ä**nd**e** (рука), die Nacht → die N**ä**cht**e** (ночь), die Stadt → die St**ä**dt**e** (город), die Nuss → die N**ü**ss**e** (орех).

**2. Окончание -(e)n:**
   - **Большинство** существительных женского рода, особенно многосложные или оканчивающиеся на:
     - **-e**: die Lampe → die Lampe**n** (лампа), die Tasche → die Tasche**n** (сумка)
     - **-ei**: die Bäckerei → die Bäckerei**en** (пекарня)
     - **-heit**: die Freiheit → die Freiheit**en** (свобода)
     - **-keit**: die Möglichkeit → die Möglichkeit**en** (возможность)
     - **-schaft**: die Freundschaft → die Freundschaft**en** (дружба)
     - **-ung**: die Zeitung → die Zeitung**en** (газета)
     - **-ion**: die Nation → die Nation**en** (нация)
     - **-tät**: die Universität → die Universität**en** (университет)
     - **-ur**: die Kultur → die Kultur**en** (культура)
     - Также многие другие, например: die Frau → die Frau**en** (женщина), die Tür → die Tür**en** (дверь).
   - Существительные мужского рода так называемого "слабого склонения" (n-Deklination). Эти существительные получают окончание -(e)n во всех падежах кроме Nominativ Singular. Во множественном числе они также имеют -(e)n.
     Примеры: der Junge → die Junge**n** (мальчик), der Kunde → die Kunde**n** (клиент), der Name → die Name**n** (имя), der Mensch → die Mensch**en** (человек), der Präsident → die Präsident**en** (президент).
   - Некоторые существительные среднего рода, особенно заимствованные или оканчивающиеся на -e.
     Примеры: das Auge → die Auge**n** (глаз), das Bett → die Bett**en** (кровать), das Interesse → die Interesse**n** (интерес), das Ende → die Ende**n** (конец).
     Исключения: das Käse (сыр) -> die Käse (без изменения)

**3. Окончание -er:**
   - Многие односложные существительные среднего рода (почти всегда с умлаутом, если он возможен у корневой гласной a, o, u).
     Примеры: das Kind → die Kind**er** (ребенок), das Buch → die B**ü**ch**er** (книга), das Haus → die H**ä**us**er** (дом), das Land → die L**ä**nd**er** (страна), das Licht -> die Licht**er** (свет, огни).
   - Некоторые существительные мужского рода (также часто с умлаутом).
     Примеры: der Mann → die M**ä**nn**er** (мужчина), der Wald → die W**ä**ld**er** (лес), der Geist → die Geist**er** (дух), der Gott -> die Gött**er** (бог).

**4. Окончание -s:**
   - Многие заимствованные слова, особенно из английского и французского языков, оканчивающиеся на гласные -a, -i, -o, -u, -y или на некоторые согласные.
     Примеры: das Auto → die Auto**s** (автомобиль), das Hotel → die Hotel**s** (отель), das Hobby → die Hobby**s** (хобби), das Team → die Team**s** (команда), der Job → die Job**s** (работа), das Kino -> die Kino**s** (кинотеатр), das Büro -> die Büro**s** (офис).
   - Сокращения и аббревиатуры.
     Примеры: der PKW → die PKW**s** (легковой автомобиль), die WG → die WG**s** (коммунальная квартира), der LKW -> die LKW**s** (грузовик).
   - Некоторые немецкие существительные, оканчивающиеся на гласную (кроме безударной -e).
     Примеры: die Oma → die Oma**s** (бабушка), der Opa → die Opa**s** (дедушка), die Mutti -> die Mutti**s** (мамочка).

**5. Без окончания (нулевое окончание):**
   - Существительные мужского и среднего рода, оканчивающиеся в единственном числе на **-er, -el, -en**.
     - Мужской род часто получает умлаут (если корневая гласная a, o, u).
       Примеры: der Lehrer → die Lehrer (учитель), der Apfel → die **Ä**pfel (яблоко), der Wagen → die Wagen (автомобиль, но чаще die Wägen/Wagen), der Vogel → die V**ö**gel (птица).
     - Средний род обычно умлаут не получает.
       Примеры: das Mädchen → die Mädchen (девочка), das Zimmer → die Zimmer (комната), das Fenster → die Fenster (окно), das Messer -> die Messer (нож).
   - Некоторые другие существительные, например, das Gebäude -> die Gebäude (здание).

**Важные моменты:**
-   Неопределенный артикль (ein/eine) во множественном числе отсутствует. Вместо него может использоваться слово "viele" (многие), "einige" (некоторые), числительное или просто существительное без артикля.
-   Принадлежность к определенному роду не всегда однозначно указывает на тип образования множественного числа, поэтому форму множественного числа лучше всего запоминать вместе с существительным, его артиклем и значением.
-   Обращайте внимание на словари: там всегда указывается форма множественного числа (часто сокращенно, например, "-e", "-en", "-¨er").

Запоминание форм множественного числа требует практики и внимания к деталям. Создавайте ассоциации и старайтесь использовать слова во множественном числе в контексте.`,
  vocabulary: [
    { german: 'der Tag, die Tage', russian: 'день, дни', example: 'Ich arbeite fünf Tage die Woche.' },
    { german: 'die Frau, die Frauen', russian: 'женщина, женщины', example: 'Viele Frauen arbeiten hier.' },
    { german: 'das Kind, die Kinder', russian: 'ребенок, дети', example: 'Die Kinder spielen im Park.' },
    { german: 'das Auto, die Autos', russian: 'автомобиль, автомобили', example: 'Auf der Straße stehen viele Autos.' },
    { german: 'der Apfel, die Äpfel', russian: 'яблоко, яблоки', example: 'Ich kaufe drei Äpfel.' },
    { german: 'der Lehrer, die Lehrer', russian: 'учитель, учителя (м.р.)', example: 'Die Lehrer sind sehr nett.' },
    { german: 'das Buch, die Bücher', russian: 'книга, книги', example: 'In der Bibliothek gibt es viele Bücher.' },
    { german: 'die Stadt, die Städte', russian: 'город, города', example: 'Wir besuchen verschiedene Städte.' },
    { german: 'der Junge, die Jungen', russian: 'мальчик, мальчики (слабое склонение)', example: 'Die Jungen spielen Fußball.' },
    { german: 'das Mädchen, die Mädchen', russian: 'девочка, девочки (окончание -chen)', example: 'Die Mädchen singen Lieder.' },
    { german: 'die Hand, die Hände', russian: 'рука (кисть), руки (окончание -e, умлаут)' },
    { german: 'der Stuhl, die Stühle', russian: 'стул, стулья (окончание -e, умлаут)' },
    { german: 'die Tür, die Türen', russian: 'дверь, двери (окончание -en)' },
    { german: 'das Zimmer, die Zimmer', russian: 'комната, комнаты (окончание -er, -el, -en, без изменения)' },
    { german: 'das Hobby, die Hobbys', russian: 'хобби, хобби (мн.ч., окончание -s)' },
    { german: 'die Zeitung, die Zeitungen', russian: 'газета, газеты (окончание -ung -> -ungen)' }
  ],
  exercises: [
    {
      id: 'a2-plural-adv-ex1',
      type: 'multiple_choice',
      question: 'Какое множественное число у слова "das Haus" (дом, ср.р.)?',
      options: ['die Hause', 'die Hausen', 'die Häuser', 'die Hauses'],
      correctAnswer: 'die Häuser',
      explanation: 'Слово "das Haus" (ср.р.) образует множественное число с окончанием -er и умлаутом корневой гласной "a" на "ä": die Häuser.',
    },
    {
      id: 'a2-plural-adv-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму мн.ч.: Zwei ___ (Katze, f) spielen im Garten.',
      sentenceParts: ['Zwei ', ' spielen im Garten.'],
      correctAnswer: 'Katzen',
      explanation: 'Множественное число от "die Katze" (ж.р.) - "die Katzen" (окончание -n, так как основа на -e).',
    },
    {
      id: 'a2-plural-adv-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Эти яблоки красные."',
      prompt: 'Эти яблоки красные.',
      languageDirection: 'to_german',
      correctAnswer: 'Diese Äpfel sind rot.',
      explanation: '"Der Apfel" (м.р., оканчивается на -el) во множественном числе "die Äpfel" (умлаут корневой гласной, без изменения окончания -el).',
    },
    {
      id: 'a2-plural-adv-ex4',
      type: 'multiple_choice',
      question: 'Как будет "стол" (der Tisch, м.р.) во множественном числе?',
      options: ['die Tischen', 'die Tische', 'die Tischer', 'die Tischs'],
      correctAnswer: 'die Tische',
      explanation: 'Слово "der Tisch" (м.р.) образует множественное число с окончанием -e: die Tische.',
    },
    {
      id: 'a2-plural-adv-ex5',
      type: 'fill_in_the_blank',
      question: 'Напишите множественное число слова "das Foto" (фото, ср.р.): Viele ___ hängen an der Wand.',
      sentenceParts: ['Viele ', ' hängen an der Wand.'],
      correctAnswer: 'Fotos',
      explanation: 'Заимствованное слово "das Foto" (ср.р.), оканчивающееся на -o, образует множественное число с окончанием -s: die Fotos.',
    },
    {
      id: 'a2-plural-adv-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильное множественное число для "der Bruder" (брат, м.р.):',
      options: ['die Brudern', 'die Brüder', 'die Bruder', 'die Bruders'],
      correctAnswer: 'die Brüder',
      explanation: 'Слово "der Bruder" (м.р., оканчивается на -er) образует множественное число с умлаутом корневой гласной "u" на "ü" без дополнительного окончания: die Brüder.',
    },
    {
      id: 'a2-plural-adv-ex7',
      type: 'translation',
      question: 'Переведите на немецкий: "В комнате три окна."',
      prompt: 'В комнате три окна.',
      languageDirection: 'to_german',
      correctAnswer: 'Im Zimmer sind drei Fenster.',
      explanation: '"Das Fenster" (ср.р., оканчивается на -er) не меняет форму во множественном числе: die Fenster.',
    },
  ],
};

    