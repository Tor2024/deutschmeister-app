
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonA2TrennbareUntrennbareVerben: Lesson = {
  id: 'a2-trennbare-untrennbare-verben',
  level: 'A2',
  topic: 'Разделяемые и неразделяемые глаголы (углубленно)',
  theory: `
В немецком языке многие глаголы образуются с помощью приставок. Эти приставки могут быть отделяемыми (trennbar) или неотделяемыми (untrennbar). Понимание их поведения очень важно для правильного построения предложений.

**1. Отделяемые приставки (Trennbare Präfixe):**
   - В Präsens и Präteritum в главном предложении отделяемая приставка отделяется от глагола и уходит в **конец предложения**. Сам глагол спрягается и стоит на втором месте.
     *Пример (Präsens): anrufen (звонить) → Ich **rufe** dich später **an**.*
     *Пример (Präteritum): aufmachen (открывать) → Er **machte** das Fenster **auf**.*
   - В Perfekt приставка \`ge-\` ставится **между** отделяемой приставкой и корнем глагола.
     *Пример: ankommen (прибывать) → ist **an**ge**kommen***
     *Пример: einkaufen (делать покупки) → hat **ein**ge**kauft***
   - В предложениях с модальным глаголом или в Futur I, а также в придаточных предложениях, вводимых союзами (например, weil, dass), отделяемая приставка **не отделяется** и пишется слитно с глаголом в инфинитиве или в спрягаемой форме (которая уходит в конец придаточного).
     *Пример (модальный): Ich möchte dich **anrufen**.*
     *Пример (Futur I): Wir werden morgen früh **abfahren**.*
     *Пример (придаточное): ..., weil er jeden Abend **fernsieht**.*
   - **Ударение** в глаголах с отделяемыми приставками всегда падает **на приставку**.
   - **Частые отделяемые приставки:** ab-, an-, auf-, aus-, bei-, ein-, fest-, her-, hin-, los-, mit-, nach-, statt-, teil-, um-, vor-, weg-, weiter-, zu-, zurück-, zusammen-.

**2. Неотделяемые приставки (Untrennbare Präfixe):**
   - Эти приставки **никогда не отделяются** от глагола и всегда пишутся с ним слитно.
   - **Ударение** в глаголах с неотделяемыми приставками всегда падает **на корень глагола**.
   - **Основные неотделяемые приставки:** **be-, ge-, er-, ver-, zer-, ent-, emp-, miss-**.
     *Пример: besuchen (посещать) → Ich **besuche** meine Oma.*
     *Пример: verstehen (понимать) → Er **versteht** die Frage.*
     *Пример: erzählen (рассказывать) → Sie **erzählt** eine Geschichte.*
   - В Perfekt глаголы с неотделяемыми приставками образуют Partizip II **без приставки \`ge-\`**.
     *Пример: besuchen → hat **besucht** (НЕ hat gebesucht)*
     *Пример: erklären (объяснять) → hat **erklärt***
     *Пример: bekommen (получать) → hat **bekommen***

**3. Приставки, которые могут быть отделяемыми и неотделяемыми (\`durch-\`, \`über-\`, \`um-\`, \`unter-\`, \`wider-\`, \`wieder-\`):**
   Значение глагола меняется в зависимости от того, отделяется приставка или нет. Также меняется ударение.
   - **Отделяемая (ударение на приставке):** Обычно имеет более прямое, конкретное значение.
     *Пример: umfahren (объезжать) → Er **fährt** das Schild **um**. (Он объезжает знак.)*
   - **Неотделяемая (ударение на корне):** Часто имеет более абстрактное, переносное значение.
     *Пример: umfahren (сбивать, переезжать) → Er **umfährt** das Schild. (Он сбивает знак.)*
   - На уровне A2 обычно фокусируются на четко отделяемых и четко неотделяемых приставках. Эти "двойные" приставки изучаются глубже на более высоких уровнях.

Запоминание, какие приставки отделяемые, а какие нет, и как они ведут себя в разных грамматических конструкциях, очень важно для правильного немецкого языка.
`,
  vocabulary: [
    { german: 'trennbar', russian: 'отделяемый', example: 'eine trennbare Vorsilbe' },
    { german: 'untrennbar', russian: 'неотделяемый', example: 'eine untrennbare Vorsilbe' },
    { german: 'die Vorsilbe / das Präfix', russian: 'приставка' },
    { german: 'anrufen (ruft an)', russian: 'звонить (по телефону)', example: 'Ich rufe dich später an.' },
    { german: 'aufstehen (steht auf)', russian: 'вставать', example: 'Sie steht jeden Morgen früh auf.' },
    { german: 'einkaufen (kauft ein)', russian: 'делать покупки', example: 'Wir kaufen im Supermarkt ein.' },
    { german: 'fernsehen (sieht fern)', russian: 'смотреть телевизор', example: 'Abends sieht er oft fern.' },
    { german: 'mitkommen (kommt mit)', russian: 'идти/ехать с кем-л.', example: 'Kommst du mit ins Kino?' },
    { german: 'zumachen (macht zu)', russian: 'закрывать', example: 'Mach bitte die Tür zu!' },
    { german: 'besuchen', russian: 'посещать', example: 'Ich besuche meine Großeltern.' },
    { german: 'erklären', russian: 'объяснять', example: 'Der Lehrer erklärt die Regel.' },
    { german: 'verstehen (versteht)', russian: 'понимать', example: 'Verstehst du das Problem?' },
    { german: 'bekommen (bekommt)', russian: 'получать', example: 'Er bekommt ein Geschenk.' },
    { german: 'erzählen', russian: 'рассказывать', example: 'Sie erzählt eine Geschichte.' },
    { german: 'gefallen (gefällt)', russian: 'нравиться', example: 'Das Buch gefällt mir.' },
    { german: 'zerstören', russian: 'разрушать', example: 'Der Sturm hat das Haus zerstört.' },
    { german: 'entdecken', russian: 'обнаруживать, открывать', example: 'Kolumbus hat Amerika entdeckt.' },
  ],
  readingText: `
Anna hat einen vollen Terminkalender. Morgens steht sie um sechs Uhr auf. Dann frühstückt sie schnell und fährt mit dem Bus zur Arbeit. Ihre Arbeit beginnt um acht Uhr. Sie arbeitet in einem Büro und beantwortet viele E-Mails und telefoniert oft mit Kunden. Manchmal muss sie wichtige Dokumente vorbereiten.

Am Abend kauft Anna oft im Supermarkt ein oder trifft ihre Freunde. Wenn sie nach Hause kommt, macht sie manchmal das Abendessen selbst oder bestellt etwas. Bevor sie schlafen geht, sieht sie gern noch ein bisschen fern oder liest ein Buch. Sie versucht, nicht zu spät ins Bett zu gehen, weil sie am nächsten Tag wieder früh aufstehen muss.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-trennbare-untrennbare-rq1',
      type: 'multiple_choice',
      question: 'Was macht Anna oft mit Kunden?',
      options: ['Sie geht einkaufen.', 'Sie frühstückt.', 'Sie telefoniert.', 'Sie sieht fern.'],
      correctAnswer: 'Sie telefoniert.',
      explanation: 'Im Text steht: "...telefoniert oft mit Kunden."',
    },
    {
      id: 'a2-trennbare-untrennbare-rq2',
      type: 'multiple_choice',
      question: 'Was macht Anna, bevor sie schlafen geht?',
      options: ['Sie bereitet Dokumente vor.', 'Sie fährt mit dem Bus.', 'Sie trifft Freunde.', 'Sie sieht fern oder liest ein Buch.'],
      correctAnswer: 'Sie sieht fern oder liest ein Buch.',
      explanation: 'Im Text steht: "Bevor sie schlafen geht, sieht sie gern noch ein bisschen fern oder liest ein Buch."',
    },
  ],
  exercises: [
    {
      id: 'a2-trenn-untrenn-ex1',
      type: 'multiple_choice',
      question: 'Какой из этих глаголов имеет неотделяемую приставку?',
      options: ['aufstehen', 'mitnehmen', 'verstehen', 'einkaufen'],
      correctAnswer: 'verstehen',
      explanation: 'Приставка "ver-" в глаголе "verstehen" является неотделяемой.',
    },
    {
      id: 'a2-trenn-untrenn-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол "anrufen" в правильную форму (Präsens): Ich ___ dich morgen ___.',
      sentenceParts: ['Ich ', ' dich morgen ', '.'],
      correctAnswer: 'rufe, an',
      explanation: 'У глагола "anrufen" приставка "an-" отделяется и идет в конец предложения в Präsens.',
    },
    {
      id: 'a2-trenn-untrenn-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Он посетил своих родителей." (Perfekt)',
      prompt: 'Он посетил своих родителей.',
      languageDirection: 'to_german',
      correctAnswer: 'Er hat seine Eltern besucht.',
      explanation: 'Глагол "besuchen" имеет неотделяемую приставку "be-". Partizip II образуется без "ge-": besucht. Perfekt: hat besucht.',
    },
    {
      id: 'a2-trenn-untrenn-ex4',
      type: 'multiple_choice',
      question: 'В каком предложении отделяемая приставка стоит на правильном месте?',
      options: [
        'Sie aufsteht um 7 Uhr.',
        'Sie um 7 Uhr steht auf.',
        'Sie steht um 7 Uhr auf.'
      ],
      correctAnswer: 'Sie steht um 7 Uhr auf.',
      explanation: 'В главном предложении в Präsens отделяемая приставка "auf" от глагола "aufstehen" идет в конец.',
    },
    {
      id: 'a2-trenn-untrenn-wp1',
      type: 'writing_prompt',
      question: 'Напиши 2-3 предложения о своем обычном утре, используя как минимум два глагола с отделяемыми приставками.',
      suggestedLength: '2-3 предложения'
    }
  ],
};

    