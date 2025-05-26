
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonC1Referenzbezuege: Lesson = {
  id: 'c1-referenzbezuege',
  level: 'C1',
  topic: 'Референциальные связи (Pronomen, Demonstrativa)',
  theory: `Референциальные связи (Bezug im Text, Kohäsion durch Referenz) – это способы, с помощью которых различные части текста (слова, фразы, предложения) ссылаются друг на друга, обеспечивая его связность и понятность. Правильное использование референциальных средств помогает избегать ненужных повторов и делает текст более гладким и логичным. На уровне C1 важно не только понимать эти связи, но и активно использовать их для создания качественных текстов.

**Основные средства референциальных связей:**

**1. Местоимения (Pronomen):**

*   **Личные местоимения (Personalpronomen):** \`er, sie, es, sie (Pl.)\` и их формы в других падежах (\`ihn, ihm, ihr, ihnen\` и т.д.) используются для отсылки к ранее упомянутым лицам или предметам (анафорическая ссылка).
    *   *Der Mann betrat den Raum. **Er** setzte sich an den Tisch.* (Антецедент: Der Mann)
    *   *Ich habe ein neues Buch gekauft. **Es** ist sehr spannend.* (Антецедент: ein neues Buch)

*   **Притяжательные местоимения (Possessivpronomen):** \`sein, ihr, dessen, deren\` и т.д. указывают на принадлежность к ранее упомянутому лицу/предмету.
    *   *Die Frau hat einen Hund. **Ihr** Hund ist sehr verspielt.*
    *   *Das ist Herr Müller, **dessen** Vortrag wir gestern gehört haben.* (Это господин Мюллер, чей доклад мы вчера слушали.)

*   **Указательные местоимения (Demonstrativpronomen):**
    *   \`dieser, diese, dieses\` (этот, эта, это): Указывают на что-то близкое, только что упомянутое или для выделения.
        *   *Ich lese gerade ein Buch über Geschichte. **Dieses** Thema interessiert mich sehr.*
    *   \`jener, jene, jenes\` (тот, та, то): Указывают на что-то более удаленное или противопоставляемое \`dieser\`.
        *   *Es gibt zwei Lösungen: **diese** ist einfach, **jene** komplizierter.*
    *   \`der, die, das\` (в указательной функции, часто с ударением): Могут заменять \`dieser\` или \`jener\`.
        *   *Das Auto dort drüben, **das** möchte ich kaufen.*

*   **Относительные местоимения (Relativpronomen):** \`der, die, das, welcher, welche, welches, was\` вводят относительные придаточные предложения, ссылаясь на антецедент в главном предложении.
    *   *Der Film, **den** wir gesehen haben, war ausgezeichnet.*

*   **Неопределенные местоимения (Indefinitpronomen) в роли заменителей:** \`einer, eine, eines, welcher, welche, welches, keiner, keine, keines\`.
    *   *Brauchst du einen Stift? – Ja, ich brauche **einen**.*

**2. Местоименные наречия (Pronominaladverbien):**
   Слова типа \`darauf, damit, dabei, dadurch, dafür, dagegen, darin, darüber, darum, daran, hierbei, hiermit, hieran, deswegen, trotzdem\` и т.д. используются для ссылки на:
   -   **Целые предыдущие предложения или ситуации:**
       *   *Es hat stark geregnet. **Deswegen** sind wir zu Hause geblieben.*
       *   *Er hat die Prüfung bestanden. **Darüber** hat er sich sehr gefreut.*
   -   **Предложные группы с неодушевленными объектами:**
       *   *Denkst du oft **an deine Arbeit**? – Ja, ich denke oft **daran**.* (вместо: an sie)
       *   *Freust du dich **auf den Urlaub**? – Ja, ich freue mich sehr **darauf**.*

**3. Другие референциальные средства:**

*   **Синонимы или гиперонимы/гипонимы:** Замена слова другим словом с похожим или более общим/частным значением.
    *   *Der **Löwe** ist der König der Tiere. **Das Raubtier** lebt in Afrika.*
*   **Повтор ключевых слов (лексический повтор):** Иногда используется для акцентирования, но чрезмерный повтор следует избегать.
*   **Эллипсис (Пропуск):** Опущение частей предложения, которые понятны из контекста.
    *   *Er bestellte Kaffee und sie (bestellte) Tee.*
*   **Катафорическая ссылка (Katapher):** Отсылка вперед, когда референциальное слово предшествует тому, на что оно указывает. Часто с \`es\` или указательными местоимениями.
    *   ***Es** ist wichtig, **dass alle zusammenarbeiten**.*
    *   ***Das** habe ich immer gesagt: **Ehrlichkeit währt am längsten**.*

**Важность правильного использования референциальных связей:**
-   Обеспечивает **когезию** (связность) текста.
-   Помогает избежать **монотонности** и повторов.
-   Делает текст более **понятным** и легким для восприятия.
-   Неправильное или неоднозначное использование может привести к **недопониманию**.

На уровне C1 ожидается умение не только распознавать, но и сознательно и разнообразно использовать эти средства для построения сложных и стилистически грамотных текстов.`,
  vocabulary: [
    { german: 'die Referenz (-en)', russian: 'ссылка, отсылка, упоминание' },
    { german: 'der Bezug (Bezüge)', russian: 'связь, отношение, ссылка (на что-л.)', example: 'Der Text nimmt Bezug auf frühere Ereignisse.' },
    { german: 'die Kohäsion', russian: 'связность (текста), когезия' },
    { german: 'das Antezedens (Antezedenzien)', russian: 'антецедент (предшествующее слово, к которому относится местоимение)' },
    { german: 'das Pronomen (Pronomen/Pronomina)', russian: 'местоимение' },
    { german: 'das Demonstrativpronomen (-pronomen)', russian: 'указательное местоимение', example: '„Dieser“ ist ein Demonstrativpronomen.' },
    { german: 'das Pronominaladverb (-ien)', russian: 'местоименное наречие', example: '„Darauf“ und „damit“ sind Pronominaladverbien.' },
    { german: 'anaphorisch', russian: 'анафорический (ссылающийся назад)', example: 'eine anaphorische Referenz' },
    { german: 'kataphorisch', russian: 'катафорический (ссылающийся вперед)', example: 'eine kataphorische Referenz' },
    { german: 'der Verweis (-e) (auf + A)', russian: 'ссылка (на что-л.), указание', example: 'Der Verweis auf die Studie.' },
    { german: 'wiederaufnehmen (nimmt wieder auf)', russian: 'возобновлять, снова поднимать (тему)', example: 'Er nahm das vorherige Thema wieder auf.' },
    { german: 'hindeuten (auf + A)', russian: 'указывать (на что-л.)', example: 'Diese Fakten deuten auf ein Problem hin.' },
    { german: 'sich beziehen (auf + A)', russian: 'ссылаться (на что-л.), относиться (к чему-л.)', example: 'Meine Frage bezieht sich auf Ihren Vortrag.' },
  ],
  readingText: `
Die moderne Arbeitswelt ist geprägt von Schnelllebigkeit und einem hohen Informationsaufkommen. Mitarbeiter sehen sich oft mit einer Flut von E-Mails, Nachrichten und Projektdaten konfrontiert. Um in **diesem** Umfeld effizient zu arbeiten, ist eine klare Strukturierung der eigenen Aufgaben unerlässlich. **Dazu** gehört nicht nur ein gutes Zeitmanagement, sondern auch die Fähigkeit, Prioritäten zu setzen. Viele Unternehmen bieten ihren Angestellten Weiterbildungsmöglichkeiten an, um **ihnen** zu helfen, mit **diesen** Anforderungen besser umzugehen. **Solche** Maßnahmen sind oft erfolgreich.
Ein weiterer Aspekt ist die Kommunikation im Team. **Sie** muss klar und unmissverständlich sein, um Missverständnisse zu vermeiden. Tools für die Zusammenarbeit können **dabei** helfen, sind aber kein Ersatz für das persönliche Gespräch. **Letzteres** ist besonders wichtig, wenn es um komplexe Sachverhalte oder die Lösung von Konflikten geht. **Darauf** sollte jede Führungskraft achten.
`,
  readingComprehensionExercises: [
    {
      id: 'c1-referenzbezuege-rq1',
      type: 'multiple_choice',
      question: 'Worauf bezieht sich "diesem" im ersten Satz des ersten Absatzes ("Um in diesem Umfeld effizient zu arbeiten...")?',
      options: ['Auf die moderne Arbeitswelt', 'Auf das hohe Informationsaufkommen', 'Auf die Schnelllebigkeit', 'Auf die Kombination aus Schnelllebigkeit und Informationsaufkommen'],
      correctAnswer: 'Auf die Kombination aus Schnelllebigkeit und Informationsaufkommen',
      explanation: '"Diesem Umfeld" fasst die zuvor genannten Charakteristika der modernen Arbeitswelt zusammen: Schnelllebigkeit und hohes Informationsaufkommen.',
    },
    {
      id: 'c1-referenzbezuege-rq2',
      type: 'multiple_choice',
      question: 'Was ersetzt "Dazu" im zweiten Satz des ersten Absatzes ("Dazu gehört nicht nur...")?',
      options: ['Die Weiterbildungsmöglichkeiten', 'Die Effizienz bei der Arbeit', 'Die klare Strukturierung der eigenen Aufgaben', 'Die Unternehmensführung'],
      correctAnswer: 'Die klare Strukturierung der eigenen Aufgaben',
      explanation: '"Dazu" (к этому) bezieht sich auf die im vorherigen Satz genannte "klare Strukturierung der eigenen Aufgaben".',
    },
    {
      id: 'c1-referenzbezuege-rq3',
      type: 'multiple_choice',
      question: 'Worauf verweist "Letzteres" im zweiten Absatz ("Letzteres ist besonders wichtig...")?',
      options: ['Tools für die Zusammenarbeit', 'Komplexe Sachverhalte', 'Das persönliche Gespräch', 'Die Lösung von Konflikten'],
      correctAnswer: 'Das persönliche Gespräch',
      explanation: '"Letzteres" (последнее из упомянутого) bezieht sich auf "das persönliche Gespräch", das im Satz davor erwähnt wurde.',
    },
  ],
  exercises: [
    {
      id: 'c1-referenzbezuege-ex1',
      type: 'multiple_choice',
      question: 'Wählen Sie das passende Pronominaladverb: "Wir haben über das Projekt gesprochen. ___ müssen wir noch eine Entscheidung treffen."',
      options: ['Darum', 'Darüber', 'Dabei', 'Dafür'],
      correctAnswer: 'Darüber',
      explanation: '"Darüber" (об этом) bezieht sich auf "das Projekt", über das gesprochen wurde.',
    },
    {
      id: 'c1-referenzbezuege-ex2',
      type: 'fill_in_the_blank',
      question: 'Ersetzen Sie die Wiederholung durch ein passendes Pronomen/Demonstrativpronomen: "Der neue Kollege ist sehr kompetent. ___ Kollege hat schon viel Erfahrung."',
      sentenceParts: ['Der neue Kollege ist sehr kompetent. ', ' hat schon viel Erfahrung.'],
      correctAnswer: 'Dieser', // oder Er
      explanation: '"Dieser" oder "Er" können sich auf "Der neue Kollege" beziehen, um Wiederholung zu vermeiden.',
    },
    {
      id: 'c1-referenzbezuege-ex3',
      type: 'writing_prompt',
      question: 'Schreiben Sie einen kurzen Absatz (3-4 Sätze) über ein aktuelles Thema. Achten Sie dabei bewusst auf die Verwendung von mindestens drei verschiedenen Arten von Verweiswörtern (z.B. Personalpronomen, Demonstrativpronomen, Pronominaladverb), um Ihre Sätze logisch zu verbinden.',
      suggestedLength: '3-4 Sätze',
    },
  ],
};

