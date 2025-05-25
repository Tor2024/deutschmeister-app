
import type { Lesson } from '@/types';

// --- Урок A2: Сочинительные союзы (Nebenordnende Konjunktionen) ---
export const lessonA2NebenordnendeKonjunktionen: Lesson = {
  id: 'a2-nebenordnende-konjunktionen',
  level: 'A2',
  topic: 'Сочинительные союзы (und, aber, oder, denn, sondern)',
  theory: `Сочинительные союзы (nebenordnende Konjunktionen) соединяют равноправные элементы предложения: отдельные слова, группы слов или целые главные предложения. Важнейшая их особенность – они занимают так называемую **нулевую позицию (Position 0)** в предложении и **не влияют на порядок слов** в той части предложения, которую они вводят. Это означает, что если сочинительный союз соединяет два главных предложения, то во втором главном предложении порядок слов остается таким же, как если бы союза не было (обычно подлежащее – сказуемое).

**Основные сочинительные союзы (ADUSO-Regel):**
Запомнить их можно с помощью мнемонического правила ADUSO:
-   **A**ber (но, а)
-   **D**enn (потому что, так как)
-   **U**nd (и, а)
-   **S**ondern (а, но – после отрицания)
-   **O**der (или)

Рассмотрим каждый союз подробнее:

**1. \`und\` (и, а)**
   Соединяет однородные члены предложения или равноправные предложения, добавляя информацию.
   *Примеры:*
   - *Ich trinke Kaffee **und** esse Kuchen.* (Я пью кофе и ем пирог.)
   - *Das Wetter ist schön **und** wir gehen spazieren.* (Погода хорошая, и мы идем гулять.)
   - *Er ist müde **und** er möchte schlafen.* (Он устал, и он хочет спать.)

**2. \`oder\` (или)**
   Предлагает выбор, альтернативу между двумя или более возможностями.
   *Примеры:*
   - *Möchtest du Tee **oder** Kaffee?* (Ты хочешь чай или кофе?)
   - *Wir können ins Kino gehen **oder** wir bleiben zu Hause.* (Мы можем пойти в кино, или мы останемся дома.)
   - *Fahren wir mit dem Bus **oder** nehmen wir ein Taxi?* (Мы поедем на автобусе или возьмем такси?)

**3. \`aber\` (но, а)**
   Выражает противопоставление, ограничение или неожиданное добавление.
   *Примеры:*
   - *Das Auto ist alt, **aber** es fährt noch gut.* (Машина старая, но она еще хорошо ездит.)
   - *Ich möchte kommen, **aber** ich habe keine Zeit.* (Я хотел бы прийти, но у меня нет времени.)
   - *Er ist klein, **aber** sehr stark.* (Он маленький, но очень сильный.)

**4. \`denn\` (потому что, так как)**
   Вводит предложение, объясняющее причину того, что сказано в предыдущем предложении. Важно: \`denn\` соединяет два главных предложения, и порядок слов во втором предложении – прямой (подлежащее, затем сказуемое). Этим он отличается от подчинительного союза \`weil\` (потому что), после которого глагол идет в конец.
   *Примеры:*
   - *Ich bleibe zu Hause, **denn** ich bin krank.* (Я остаюсь дома, потому что я болен.) (Сравните: *Ich bleibe zu Hause, **weil** ich krank **bin**.*)
   - *Er lernt Deutsch, **denn** er will in Deutschland studieren.* (Он учит немецкий, так как он хочет учиться в Германии.)

**5. \`sondern\` (а, но – в значении "а напротив", "а вместо этого")**
   Используется **только после отрицания** (например, с \`nicht\`, \`kein\`) и вводит исправляющую или противопоставляемую информацию, которая исключает первую часть.
   *Примеры:*
   - *Das ist **nicht** mein Buch, **sondern** dein Buch.* (Это не моя книга, а твоя книга.)
   - *Wir fahren heute **nicht** ans Meer, **sondern** wir besuchen Oma.* (Мы сегодня не едем на море, а навещаем бабушку.)
   - *Er ist **kein** Lehrer, **sondern** ein Arzt.* (Он не учитель, а врач.)

**Порядок слов:**
Еще раз напомним: после сочинительных союзов \`und\`, \`aber\`, \`oder\`, \`denn\`, \`sondern\`, если они соединяют два главных предложения, второе предложение сохраняет прямой порядок слов (подлежащее - сказуемое ...).
*Ich lerne, **und** mein Bruder spielt.* (Я учусь, и мой брат играет.)
*Sie ist müde, **aber** sie arbeitet weiter.* (Она устала, но она продолжает работать.)

Понимание этих союзов и их влияния (точнее, отсутствия влияния на основной порядок слов в главном предложении) очень важно для построения связной речи.`,
  vocabulary: [
    { german: 'und', russian: 'и, а', example: 'Ich kaufe Brot und Milch.' },
    { german: 'aber', russian: 'но, а (противопоставление)', example: 'Es ist sonnig, aber kalt.' },
    { german: 'oder', russian: 'или', example: 'Möchtest du Tee oder Kaffee?' },
    { german: 'denn', russian: 'потому что, так как (вводит главное предложение)', example: 'Ich kann nicht kommen, denn ich bin krank.' },
    { german: 'sondern', russian: 'а, но (после отрицания, исправляющее)', example: 'Er ist nicht müde, sondern gelangweilt.' },
    { german: 'die Konjunktion (-en)', russian: 'союз', example: '"Und" ist eine Konjunktion.' },
    { german: 'nebenordnend', russian: 'сочинительный (о союзе)', example: 'Nebenordnende Konjunktionen verbinden gleichrangige Satzteile.' },
    { german: 'die Position 0', russian: 'нулевая позиция (в предложении)', example: 'Nebenordnende Konjunktionen stehen auf Position 0.' },
    { german: 'krank', russian: 'больной', example: 'Ich bin krank, deshalb bleibe ich zu Hause.' },
    { german: 'müde', russian: 'усталый', example: 'Nach der Arbeit bin ich immer müде.' },
  ],
  exercises: [
    {
      id: 'a2-nebenkonj-ex1',
      type: 'multiple_choice',
      question: 'Какой союз используется для выражения причины и вводит главное предложение?',
      options: ['weil', 'dass', 'denn', 'obwohl'],
      correctAnswer: 'denn',
      explanation: 'Союз "denn" (потому что) вводит главное предложение с прямым порядком слов и указывает на причину.',
    },
    {
      id: 'a2-nebenkonj-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте подходящий союз: Ich möchte einen Apfel ___ eine Banane.',
      sentenceParts: ['Ich möchte einen Apfel ', ' eine Banane.'],
      correctAnswer: 'oder',
      explanation: 'Союз "oder" (или) используется для выражения выбора или альтернативы.',
    },
    {
      id: 'a2-nebenkonj-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он не пьет кофе, а (пьет) чай."',
      prompt: 'Он не пьет кофе, а (пьет) чай.',
      languageDirection: 'to_german',
      correctAnswer: 'Er trinkt keinen Kaffee, sondern Tee.',
      explanation: 'Союз "sondern" (а) используется после отрицания ("keinen Kaffee") для введения исправляющей информации.',
    },
    {
      id: 'a2-nebenkonj-ex4',
      type: 'multiple_choice',
      question: 'Соедините предложения: "Das Wetter ist schlecht. Wir bleiben zu Hause." Какой союз подойдет лучше всего для указания причины?',
      options: ['und', 'aber', 'denn', 'oder'],
      correctAnswer: 'denn',
      explanation: '"denn" (потому что, так как) подходит для объяснения причины, почему мы остаемся дома. "Das Wetter ist schlecht, denn wir bleiben zu Hause" (не совсем логично) или лучше "Wir bleiben zu Hause, denn das Wetter ist schlecht".',
    },
    {
      id: 'a2-nebenkonj-ex5',
      type: 'fill_in_the_blank',
      question: 'Вставьте союз: Sie ist sehr intelligent, ___ manchmal etwas faul.',
      sentenceParts: ['Sie ist sehr intelligent, ', ' manchmal etwas faul.'],
      correctAnswer: 'aber',
      explanation: 'Союз "aber" (но, а) используется для противопоставления или добавления ограничивающей информации.',
    },
    {
      id: 'a2-nebenkonj-ex6',
      type: 'multiple_choice',
      question: 'Какой порядок слов следует за союзом "und", если он соединяет два главных предложения?',
      options: ['Глагол на первом месте', 'Глагол на втором месте (прямой порядок)', 'Глагол в конце предложения'],
      correctAnswer: 'Глагол на втором месте (прямой порядок)',
      explanation: 'Сочинительные союзы, такие как "und", не меняют порядок слов в следующем главном предложении. Глагол остается на втором месте.',
    },
  ],
};
