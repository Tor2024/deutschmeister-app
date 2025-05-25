
import type { Lesson } from '@/types';

// --- Урок A1: Предлоги, требующие Akkusativ ---
export const lessonA1PraepositionenAkkusativ: Lesson = {
  id: 'a1-praepositionen-akkusativ',
  level: 'A1',
  topic: 'Предлоги, требующие Akkusativ (durch, für, gegen, ohne, um)',
  theory: `
Некоторые предлоги в немецком языке всегда требуют после себя существительное или местоимение в винительном падеже (Akkusativ). Вопросы для Akkusativ – "кого? что?" (wen? was?) или "куда?" (wohin?) если предлог указывает направление.

Основные предлоги, после которых всегда идет Akkusativ (запомните их как **DOGFU** или другим удобным способом):
-   **D**urch (через, сквозь, по)
-   **O**hne (без)
-   **G**egen (против; около (о времени/количестве))
-   **F**ür (для, за)
-   **U**m (вокруг; в (о времени))

Давайте рассмотрим каждый подробнее:

**1. \`durch\` (через, сквозь, по)**
   Указывает на движение через что-либо или сквозь что-либо.
   *   *Wir gehen **durch den** Wald.* (Мы идем через лес.)
   *   *Der Ball fliegt **durch das** Fenster.* (Мяч летит через/сквозь окно.)
   *   *Ich sehe **durch die** Brille.* (Я вижу через очки.)

**2. \`für\` (для, за)**
   Указывает на предназначение, цель, в пользу кого-то/чего-то, или на период времени (в значении "на").
   *   *Das Geschenk ist **für dich**.* (Подарок для тебя.)
   *   *Ich kaufe Blumen **für meine** Mutter.* (Я покупаю цветы для моей мамы.)
   *   *Er arbeitet **für das** Geld.* (Он работает за деньги.)
   *   *Ich brauche das Buch **für einen** Tag.* (Мне нужна книга на один день.)

**3. \`gegen\` (против; около (о времени/количестве))**
   Указывает на противодействие, столкновение, направление к чему-то (ударяясь) или приблизительное время/количество.
   *   *Die Mannschaft spielt **gegen ein** anderes Team.* (Команда играет против другой команды.)
   *   *Er fährt mit dem Auto **gegen einen** Baum.* (Он врезается на машине в дерево.)
   *   *Ich komme **gegen** 10 Uhr.* (Я приду около 10 часов.)
   *   *Das Medikament hilft **gegen** Kopfschmerzen.* (Лекарство помогает против головной боли.)

**4. \`ohne\` (без)**
   Указывает на отсутствие чего-либо или кого-либо.
   *   *Ich trinke Kaffee **ohne Zucker**.* (Я пью кофе без сахара.)
   *   *Er geht **ohne seinen** Regenschirm spazieren.* (Он идет гулять без своего зонта.)
   *   *Wir können **ohne dich** nicht anfangen.* (Мы не можем начать без тебя.)

**5. \`um\` (вокруг; в (о времени))**
   Указывает на движение вокруг чего-либо или точное время.
   *   *Die Kinder laufen **um den** Tisch.* (Дети бегают вокруг стола.)
   *   *Die Erde dreht sich **um die** Sonne.* (Земля вращается вокруг Солнца.)
   *   *Der Film beginnt **um** 20 Uhr.* (Фильм начинается в 20:00.)

**Напоминание об артиклях в Akkusativ:**
Только артикль мужского рода изменяется:
-   der → **den**
-   ein → **einen**
-   kein → **keinen**
-   mein → **meinen** (и так далее для других притяжательных местоимений)

Артикли женского, среднего рода и множественного числа в Akkusativ совпадают с формами Nominativ.
`,
  vocabulary: [
    { german: 'durch (+Akk)', russian: 'через, сквозь, по', example: 'durch den Tunnel fahren' },
    { german: 'für (+Akk)', russian: 'для, за', example: 'ein Geschenk für dich' },
    { german: 'gegen (+Akk)', russian: 'против; около', example: 'gegen die Wand laufen, gegen Mittag' },
    { german: 'ohne (+Akk)', russian: 'без', example: 'Kaffee ohne Milch' },
    { german: 'um (+Akk)', russian: 'вокруг; в (точное время)', example: 'um den Baum, um drei Uhr' },
    { german: 'der Park (Parks)', russian: 'парк', example: 'Wir gehen durch den Park.' },
    { german: 'der Wald (Wälder)', russian: 'лес', example: 'Spaziergang durch den Wald.' },
    { german: 'der Tisch (Tische)', russian: 'стол', example: 'Die Katze springt um den Tisch.' },
    { german: 'der Zucker', russian: 'сахар', example: 'Tee ohne Zucker.' },
    { german: 'die Uhr (Uhren)', russian: 'час (время); часы (прибор)', example: 'Der Unterricht beginnt um 9 Uhr.' },
  ],
  exercises: [
    {
      id: 'a1-praep-akk-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный предлог: Das Buch ist ___ dich.',
      options: ['durch', 'für', 'gegen', 'ohne'],
      correctAnswer: 'für',
      explanation: 'Предлог "für" (для) используется для указания предназначения и требует Akkusativ.',
    },
    {
      id: 'a1-praep-akk-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль: Wir gehen durch ___ (der Wald).',
      sentenceParts: ['Wir gehen durch ', ' Wald.'],
      correctAnswer: 'den',
      explanation: 'Предлог "durch" требует Akkusativ. "Der Wald" мужского рода, в Akkusativ "den Wald".',
    },
    {
      id: 'a1-praep-akk-ex3',
      type: 'multiple_choice',
      question: 'Какое предложение построено правильно?',
      options: [
        'Ich kann ohne mein Handy nicht leben.',
        'Ich kann ohne meinem Handy nicht leben.',
        'Ich kann ohne meines Handys nicht leben.'
      ],
      correctAnswer: 'Ich kann ohne mein Handy nicht leben.',
      explanation: 'Предлог "ohne" требует Akkusativ. "Mein Handy" (средний род, das Handy) в Akkusativ остается "mein Handy".',
    },
    {
      id: 'a1-praep-akk-ex4',
      type: 'fill_in_the_blank',
      question: 'Вставьте предлог: Der Zug fährt ___ Köln.',
      sentenceParts: ['Der Zug fährt ', ' Köln.'], // Обычно "nach Köln", но если из предложенных то "durch" возможно в контексте "через". Для A1 лучше без города, а например "durch den Tunnel".
      // Изменим для однозначности с предлогами Akkusativ:
      // Вставьте предлог: Wir laufen ___ das Haus. (вокруг)
      // sentenceParts: ['Wir laufen ', ' das Haus. (вокруг)'],
      // correctAnswer: 'um',
      // explanation: 'Предлог "um" (вокруг) требует Akkusativ. "Um das Haus".',
      // Если оставлять вариант с Köln, то правильнее будет сказать, что здесь нужен предлог "nach", но он требует Dativ.
      // Изменим вопрос, чтобы он подходил к теме урока:
      // Вставьте предлог: Er kämpft ___ seinen Feind. (против)
      sentenceParts: ['Er kämpft ', ' seinen Feind.'],
      correctAnswer: 'gegen',
      explanation: 'Предлог "gegen" (против) требует Akkusativ. "Gegen seinen Feind".',
    },
    {
      id: 'a1-praep-akk-ex5',
      type: 'translation',
      question: 'Переведите на немецкий: "Вечеринка начинается в 8 часов."',
      prompt: 'Вечеринка начинается в 8 часов.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Party beginnt um 8 Uhr.',
      explanation: 'Для указания точного времени используется предлог "um" с Akkusativ (хотя "Uhr" здесь не требует артикля и не склоняется в данном контексте).',
    },
  ],
};
