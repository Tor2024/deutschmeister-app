
import type { Lesson } from '@/types';

// --- Урок B2: Сослагательное наклонение II (Konjunktiv II) ---
export const lessonB2Konjunktiv2: Lesson = {
  id: 'b2-konjunktiv2',
  level: 'B2',
  topic: 'Сослагательное наклонение II (Konjunktiv II)',
  theory: `Konjunktiv II (сослагательное наклонение II) используется в немецком языке для выражения ситуаций, которые не соответствуют действительности, а являются лишь предполагаемыми, желаемыми, возможными или нереальными.

**Основные функции Konjunktiv II:**

1.  **Нереальные желания (Irreale Wunschsätze):**
    Часто вводятся союзом \`wenn\` (если бы) или выражаются через инверсию.
    *   *Wenn ich doch mehr Zeit **hätte**!* (Если бы у меня только было больше времени!)
    *   ***Hätte** ich nur mehr Geld!* (Были бы у меня только деньги побольше!)
    *   *Ich **wünschte**, ich **könnte** fliegen.* (Я бы хотел, чтобы я умел летать. / Жаль, что я не умею летать.)

2.  **Нереальные условия (Irreale Konditionalsätze):**
    Описывают условия, которые не выполнены или не могут быть выполнены в настоящем или прошлом. Часто в главной части предложения также используется Konjunktiv II.
    *   *Wenn ich reich **wäre**, **würde** ich eine Weltreise **machen**.* (Если бы я был богат, я бы совершил кругосветное путешествие.)
    *   *Sie **käme** zu Besuch, wenn sie nicht so viel Arbeit **hätte**.* (Она бы пришла в гости, если бы у нее не было так много работы.)

3.  **Гипотетические утверждения, предположения (Hypothetische Aussagen, Vermutungen):**
    *   *Das **könnte** stimmen, aber ich bin nicht sicher.* (Это могло бы быть правдой, но я не уверен.)
    *   *Er **sähe** wahrscheinlich anders aus, wenn er einen Bart **trüge**.* (Он, вероятно, выглядел бы иначе, если бы носил бороду.)

4.  **Вежливые просьбы и вопросы (Höfliche Bitten und Fragen):**
    Использование Konjunktiv II делает просьбу или вопрос более мягким и вежливым.
    *   ***Könnten** Sie mir bitte helfen?* (Не могли бы Вы мне, пожалуйста, помочь?) (вместо: Können Sie...?)
    *   ***Würden** Sie bitte das Fenster schließen?* (Не закрыли бы Вы, пожалуйста, окно?)
    *   *Ich **hätte** gern einen Kaffee.* (Я бы хотел кофе.) (вместо: Ich will einen Kaffee.)

5.  **Косвенная речь (Indirekte Rede):**
    Иногда используется для передачи чужих слов, особенно если форма Konjunktiv I совпадает с Präsens Indikativ или если говорящий дистанцируется от высказывания.
    *   *Er sagte, er **wäre** müde.* (Он сказал, что он (якобы) устал.) (Вместо Konjunktiv I "sei", если нужно подчеркнуть сомнение).

**Образование Konjunktiv II:**

Есть два основных способа образования:

*   **Форма с \`würde\` + Infinitiv:**
    Это наиболее распространенный и универсальный способ, особенно для слабых (регулярных) глаголов и для многих сильных глаголов в разговорной речи.
    Формула: **würde (в личной форме) + Infinitiv основного глагола**
    Спряжение \`würde\`:
    -   ich würde
    -   du würdest
    -   er/sie/es würde
    -   wir würden
    -   ihr würdet
    -   sie/Sie würden
    *Примеры:*
    *   *Ich **würde** gern mehr reisen.* (Я бы с удовольствием больше путешествовал.)
    *   *Was **würdest** du an meiner Stelle **tun**?* (Что бы ты сделал на моем месте?)
    *   *Wenn wir Zeit **hätten**, **würden** wir euch **besuchen**.* (Если бы у нас было время, мы бы вас навестили.)

*   **Собственные формы Konjunktiv II (от Präteritum):**
    Эти формы образуются от основы Präteritum глагола.
    1.  **Для слабых глаголов:** форма Konjunktiv II совпадает с формой Präteritum Indikativ. Однако для ясности и избежания путаницы часто предпочитают конструкцию с \`würde\`.
        *   *machen (Prät.: machte) → KII: machte* (Я бы сделал → Ich würde machen / реже: Ich machte)
    2.  **Для сильных глаголов:** к основе Präteritum добавляются окончания сослагательного наклонения (-e, -est, -e, -en, -et, -en). Если корневая гласная в Präteritum была **a, o, u**, она обычно получает **умлаут** (ä, ö, ü).
        *   *kommen (Prät.: kam) → KII: käm**e** (ich käme, du kämest, er käme, wir kämen, ihr kämet, sie kämen)*
        *   *geben (Prät.: gab) → KII: gäb**e***
        *   *fahren (Prät.: fuhr) → KII: führ**e***
        *   *sehen (Prät.: sah) → KII: säh**e***
        *   *gehen (Prät.: ging) → KII: ging**e*** (без умлаута, т.к. 'i' не умлаутируется)
    3.  **Особые глаголы \`sein\`, \`haben\` и модальные глаголы** всегда образуют собственные формы Konjunktiv II, которые очень часто используются:
        *   **sein (быть):**
            -   ich **wäre**
            -   du **wärest / wärst**
            -   er/sie/es **wäre**
            -   wir **wären**
            -   ihr **wäret / wärt**
            -   sie/Sie **wären**
        *   **haben (иметь):**
            -   ich **hätte**
            -   du **hättest**
            -   er/sie/es **hätte**
            -   wir **hätten**
            -   ihr **hättet**
            -   sie/Sie **hätten**
        *   **Модальные глаголы** (умлаут в Präteritum исчезает, но появляется в Konjunktiv II, если возможен):
            -   können (мочь) → Prät.: konnte → KII: **könnte** (ich könnte, du könntest, er könnte...)
            -   müssen (быть должным) → Prät.: musste → KII: **müsste**
            -   dürfen (иметь разрешение) → Prät.: durfte → KII: **dürfte**
            -   sollen (быть должным) → Prät.: sollte → KII: **sollte** (без умлаута)
            -   wollen (хотеть) → Prät.: wollte → KII: **wollte** (без умлаута, форма совпадает с Präteritum Indikativ, поэтому часто говорят \`ich würde wollen\`, но это не всегда стилистически удачно. Часто заменяется на \`möchte\`)
            -   mögen (любить, нравиться) → Prät.: mochte → KII: **möchte** (эта форма уже является Konjunktiv II и широко используется в значении "хотел бы").

**Когда использовать \`würde\`-форму, а когда собственную форму?**
-   Глаголы \`sein\`, \`haben\` и модальные глаголы почти всегда используются в своих собственных формах Konjunktiv II (\`wäre\`, \`hätte\`, \`könnte\` и т.д.).
-   Для многих сильных глаголов существуют собственные формы, но они могут звучать несколько устаревшими или слишком формальными в повседневной речи (например, \`ich führe\` вместо \`ich würde fahren\`). В письменной речи они более уместны.
-   Для слабых глаголов и для большинства сильных глаголов, где собственная форма KII редко используется или трудно образуется, предпочтительна конструкция с \`würde\` + Infinitiv.

Умение правильно использовать Konjunktiv II значительно обогащает речь и позволяет выражать более сложные и тонкие оттенки смысла.`,
  vocabulary: [
    { german: 'wäre (ich wäre, du wärest, er wäre)', russian: 'был бы, была бы, было бы (Konjunktiv II от sein)', example: 'Wenn ich reich wäre, ...' },
    { german: 'hätte (ich hätte, du hättest, er hätte)', russian: 'имел бы, имела бы (Konjunktiv II от haben)', example: 'Hätte ich doch mehr Zeit!' },
    { german: 'würde (ich würde, du würdest, er würde)', russian: 'бы (вспомогательный глагол для Konjunktiv II)', example: 'Ich würde das gerne machen.' },
    { german: 'könnte', russian: 'мог бы, могла бы (Konjunktiv II от können)', example: 'Könntest du mir helfen?' },
    { german: 'müsste', russian: 'должен был бы (Konjunktiv II от müssen)', example: 'Er müsste eigentlich schon hier sein.' },
    { german: 'dürfte', russian: 'мог бы (иметь разрешение, предположение) (KII от dürfen)', example: 'Das dürfte kein Problem sein.' },
    { german: 'sollte', russian: 'следовало бы (Konjunktiv II от sollen)', example: 'Du solltest mehr schlafen.' },
    { german: 'wollte (KII)', russian: 'хотел бы (Konjunktiv II от wollen, совпадает с Präteritum)', example: 'Ich wollte, es wäre schon Freitag.' },
    { german: 'möchte (KII от mögen)', russian: 'хотел бы', example: 'Ich möchte bitte einen Tee.' },
    { german: 'der Wunsch (Wünsche)', russian: 'желание', example: 'Mein größter Wunsch wäre eine Reise nach Japan.' },
    { german: 'die Bedingung (-en)', russian: 'условие', example: 'Unter dieser Bedingung würde ich zustimmen.' },
    { german: 'die Möglichkeit (-en)', russian: 'возможность', example: 'Es gäbe eine Möglichkeit, das Problem zu lösen.' },
    { german: 'die Bitte (-n)', russian: 'просьба', example: 'Ich hätte eine Bitte an Sie.' },
    { german: 'irreal', russian: 'нереальный, недействительный', example: 'Das ist eine irreale Vorstellung.' },
    { german: 'hypothetisch', russian: 'гипотетический', example: 'Eine hypothetische Frage: Was wäre, wenn...?' },
    { german: 'höflich', russian: 'вежливый', example: 'Eine höfliche Frage ist besser.' },
    { german: 'wenn (Konditionalsatz)', russian: 'если (в условном предложении)', example: 'Wenn ich Zeit hätte, würde ich kommen.' },
  ],
  exercises: [
    {
      id: 'b2-konjunktiv2-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильную форму Konjunktiv II для "Ich habe Geld":',
      options: ['Ich habe Geld gehabt', 'Ich hätte Geld', 'Ich würde Geld haben', 'Ich wäre Geld'],
      correctAnswer: 'Ich hätte Geld',
      explanation: 'Konjunktiv II от "haben" - "hätte". "Ich hätte Geld" означает "Если бы у меня были деньги / Я бы хотел иметь деньги".',
    },
    {
      id: 'b2-konjunktiv2-ex2',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение в Konjunktiv II: Wenn er mehr lernen ___, ___ er die Prüfung bestehen.',
      sentenceParts: ['Wenn er mehr lernen ', ', ', ' er die Prüfung bestehen.'],
      correctAnswer: 'würde, würde',
      explanation: 'Для большинства глаголов, таких как "lernen" и "bestehen", Konjunktiv II образуется с помощью "würde" + Infinitiv. "Wenn er mehr lernen würde, würde er die Prüfung bestehen." (Если бы он больше учился, он бы сдал экзамен.)',
    },
    {
      id: 'b2-konjunktiv2-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (используя Konjunktiv II): "Я бы с удовольствием поехал в Италию."',
      prompt: 'Я бы с удовольствием поехал в Италию.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich würde gerne nach Italien fahren.',
      explanation: 'Выражение желания с помощью "würde" + Infinitiv ("fahren") + "gerne".',
    },
    {
      id: 'b2-konjunktiv2-ex4',
      type: 'multiple_choice',
      question: 'Какая форма Konjunktiv II глагола "sein" (быть) для "du"?',
      options: ['bist', 'warst', 'wärst', 'würdest sein'],
      correctAnswer: 'wärst',
      explanation: 'Konjunktiv II от "sein" для "du" - "wärest" или "wärst".',
    },
    {
      id: 'b2-konjunktiv2-ex5',
      type: 'fill_in_the_blank',
      question: 'Сформулируйте вежливую просьбу: ___ Sie mir bitte das Salz reichen?',
      sentenceParts: ['', ' Sie mir bitte das Salz reichen?'],
      correctAnswer: 'Könnten', // Или 'Würden'
      explanation: 'Для вежливых просьб используется Konjunktiv II модальных глаголов. "Könnten Sie..." (Не могли бы Вы...) или "Würden Sie..." (Не были бы Вы так любезны...).',
    },
    {
      id: 'b2-konjunktiv2-ex6',
      type: 'translation',
      question: 'Переведите на немецкий (нереальное условие): "Если бы погода была лучше, мы бы пошли гулять."',
      prompt: 'Если бы погода была лучше, мы бы пошли гулять.',
      languageDirection: 'to_german',
      correctAnswer: 'Wenn das Wetter besser wäre, würden wir spazieren gehen.',
      explanation: 'Нереальное условие: "wenn ... wäre" (Konjunktiv II от sein). Главное предложение также в Konjunktiv II: "würden ... gehen".',
    },
    {
      id: 'b2-konjunktiv2-ex7',
      type: 'multiple_choice',
      question: 'Выберите правильную собственную форму Konjunktiv II для "Er kommt":',
      options: ['Er kommt', 'Er kam', 'Er käme', 'Er würde kommen'],
      correctAnswer: 'Er käme',
      explanation: 'Сильный глагол "kommen" (Präteritum "kam") образует Konjunktiv II "käme" (с умлаутом и окончанием -e для 3 л. ед.ч.).',
    },
  ],
};
