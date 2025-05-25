
import type { Lesson } from '@/types';

export const lessonA2GrammatikPraeteritumSeinHabenModal: Lesson = {
  id: 'a2-grammatik-praeteritum-sein-haben-modal',
  level: 'A2',
  topic: 'Präteritum (sein, haben, Modalverben)',
  theory: `
Прошедшее время Präteritum (Претерит) используется для описания действий и состояний в прошлом. Хотя в разговорной речи чаще используется Perfekt, формы Präteritum глаголов **sein** (быть), **haben** (иметь) и **модальных глаголов** очень употребительны и в устном общении.

**1. Глагол \`sein\` (быть) в Präteritum:**
- ich **war** (я был/была)
- du **warst** (ты был/была)
- er/sie/es **war** (он/она/оно был/была/было)
- wir **waren** (мы были)
- ihr **wart** (вы были)
- sie/Sie **waren** (они/Вы были)

*Примеры:*
*   *Gestern **war** ich zu Hause.* (Вчера я был дома.)
*   *Wo **wart** ihr am Wochenende?* (Где вы были на выходных?)
*   *Das Wetter **war** schön.* (Погода была хорошей.)

**2. Глагол \`haben\` (иметь) в Präteritum:**
- ich **hatte** (я имел/а)
- du **hattest** (ты имел/а)
- er/sie/es **hatte** (он/она/оно имел/а/о)
- wir **hatten** (мы имели)
- ihr **hattet** (вы имели)
- sie/Sie **hatten** (они/Вы имели)

*Примеры:*
*   *Früher **hatte** ich keine Zeit.* (Раньше у меня не было времени.)
*   ***Hattest** du viel Spaß?* (Тебе было очень весело? / Ты получил много удовольствия?)
*   *Sie **hatten** einen Hund.* (У них была собака.)

**3. Модальные глаголы в Präteritum:**
Модальные глаголы в Präteritum образуют формы по образцу слабых глаголов (основа + \`-te-\` + окончания), но часто без умлаута, который мог быть в Präsens. Формы 1-го и 3-го лица единственного числа совпадают.

*   **können (мочь, уметь) → konnte**
    - ich konnte, du konntest, er/sie/es konnte, wir konnten, ihr konntet, sie/Sie konnten
    *Beispiel: Ich **konnte** gestern nicht kommen.* (Я не мог вчера прийти.)

*   **müssen (быть должным) → musste**
    - ich musste, du musstest, er/sie/es musste, wir mussten, ihr musstet, sie/Sie mussten
    *Beispiel: Wir **mussten** früh aufstehen.* (Мы должны были рано встать.)

*   **wollen (хотеть) → wollte**
    - ich wollte, du wolltest, er/sie/es wollte, wir wollten, ihr wolltet, sie/Sie wollten
    *Beispiel: Er **wollte** ins Kino gehen.* (Он хотел пойти в кино.)

*   **dürfen (мочь, иметь разрешение) → durfte**
    - ich durfte, du durftest, er/sie/es durfte, wir durften, ihr durftet, sie/Sie durften
    *Beispiel: Als Kind **durfte** ich nicht lange fernsehen.* (В детстве мне нельзя было долго смотреть телевизор.)

*   **sollen (быть должным по совету/указанию) → sollte**
    - ich sollte, du solltest, er/sie/es sollte, wir sollten, ihr solltet, sie/Sie sollten
    *Beispiel: Der Arzt sagte, ich **sollte** mehr schlafen.* (Врач сказал, мне следовало бы больше спать.)

*   **mögen (любить, нравиться) → mochte** (в значении "любил", "нравилось")
    - ich mochte, du mochtest, er/sie/es mochte, wir mochten, ihr mochtet, sie/Sie mochten
    *Beispiel: Ich **mochte** diesen Film sehr.* (Мне очень понравился этот фильм.)
    (Форма \`möchte-\` "хотел бы" не имеет Präteritum, вместо нее используется \`wollte\`.)

**Порядок слов:**
В предложениях с модальными глаголами в Präteritum модальный глагол стоит на втором месте (в утвердительном предложении), а смысловой глагол (если он есть) – в инфинитиве в конце предложения.
*Beispiel: Ich **konnte** das Buch nicht **finden**.*
  `,
  vocabulary: [
    { german: 'war, warst, war, waren, wart, waren', russian: 'формы Präteritum от "sein"', example: 'Es war kalt.' },
    { german: 'hatte, hattest, hatte, hatten, hattet, hatten', russian: 'формы Präteritum от "haben"', example: 'Wir hatten Glück.' },
    { german: 'konnte', russian: 'мог (Präteritum от können)', example: 'Ich konnte nicht schlafen.' },
    { german: 'musste', russian: 'был должен (Präteritum от müssen)', example: 'Sie musste arbeiten.' },
    { german: 'wollte', russian: 'хотел (Präteritum от wollen)', example: 'Was wolltest du sagen?' },
    { german: 'durfte', russian: 'мог (имел разрешение) (Präteritum от dürfen)', example: 'Wir durften das machen.' },
    { german: 'sollte', russian: 'следовало (Präteritum от sollen)', example: 'Du solltest ihn anrufen.' },
    { german: 'mochte', russian: 'нравился, любил (Präteritum от mögen)', example: 'Als Kind mochte ich Eis.' },
    { german: 'gestern', russian: 'вчера', example: 'Gestern war Sonntag.' },
    { german: 'früher', russian: 'раньше', example: 'Früher hatten wir kein Internet.' },
  ],
  readingText: `
Letztes Wochenende war das Wetter sehr schön. Am Samstagmorgen hatte ich viel Zeit. Zuerst wollte ich lange schlafen, aber die Sonne schien so hell! Ich konnte nicht im Bett bleiben. Ich stand auf und machte Frühstück.
Später musste ich einkaufen gehen. Ich wollte einen Kuchen backen, aber ich hatte keine Eier. Im Supermarkt waren viele Leute. Ich durfte nicht lange warten, denn meine Freundin Anna wollte mich um drei Uhr besuchen. Wir wollten zusammen Kaffee trinken. Es war ein schöner Tag.
  `,
  readingComprehensionExercises: [
    {
      id: 'a2-praeteritum-rq1',
      question: 'Warum konnte der Erzähler nicht lange schlafen?',
      options: ['Er musste früh arbeiten.', 'Die Sonne schien zu hell.', 'Es war zu laut.', 'Er hatte schlecht geschlafen.'],
      correctAnswer: 'Die Sonne schien zu hell.',
      explanation: 'Im Text steht: "...aber die Sonne schien so hell! Ich konnte nicht im Bett bleiben."'
    },
    {
      id: 'a2-praeteritum-rq2',
      question: 'Was wollte der Erzähler backen?',
      options: ['Brot', 'Pizza', 'Einen Kuchen', 'Kekse'],
      correctAnswer: 'Einen Kuchen',
      explanation: 'Im Text steht: "Ich wollte einen Kuchen backen..."'
    }
  ],
  exercises: [
    {
      id: 'a2-praeteritum-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму "sein" в Präteritum: Ihr ___ gestern nicht in der Schule.',
      sentenceParts: ['Ihr ', ' gestern nicht in der Schule.'],
      correctAnswer: 'wart',
      explanation: 'Для "ihr" форма Präteritum от "sein" - "wart".',
    },
    {
      id: 'a2-praeteritum-ex2',
      type: 'multiple_choice',
      question: 'Какая форма глагола "haben" в Präteritum верна для "er/sie/es"?',
      options: ['hat', 'habt', 'hatte', 'hast'],
      correctAnswer: 'hatte',
      explanation: 'Для "er/sie/es" форма Präteritum от "haben" - "hatte".',
    },
    {
      id: 'a2-praeteritum-ex3',
      type: 'fill_in_the_blank',
      question: 'Вставьте модальный глагол "können" в Präteritum: Ich ___ das nicht machen.',
      sentenceParts: ['Ich ', ' das nicht machen.'],
      correctAnswer: 'konnte',
      explanation: 'Для "ich" форма Präteritum от "können" - "konnte".',
    },
    {
      id: 'a2-praeteritum-ex4',
      type: 'writing_prompt',
      question: 'Напиши 2-3 предложения о том, что ты делал(а) вчера, используя "war", "hatte" или модальные глаголы в Präteritum.',
      suggestedLength: '2-3 предложения',
    }
  ],
};
