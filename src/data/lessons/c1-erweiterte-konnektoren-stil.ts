
import type { Lesson } from '@/types';

// --- Урок C1: Продвинутые коннекторы и структуры высокого стиля ---
export const lessonC1ErweiterteKonnektorenStil: Lesson = {
  id: 'c1-erweiterte-konnektoren-stil',
  level: 'C1',
  topic: 'Продвинутые коннекторы и структуры высокого стиля',
  theory: `
На уровне C1 важно не только понимать, но и активно использовать широкий спектр коннекторов (союзов, союзных наречий) для построения сложных, логически выстроенных и стилистически грамотных предложений. Это придает речи точность, глубину и позволяет выражать тонкие смысловые оттенки.

**I. Условные и ограничительные коннекторы (Konditional- und Restriktivkonnektoren)**

*   **es sei denn, (dass)...** (если только не..., разве что не...)
    Выражает единственное условие, при котором утверждение в главном предложении неверно.
    *Beispiel: Wir machen den Ausflug, **es sei denn, (dass)** es stark regnet.* (Мы совершим поездку, если только не пойдет сильный дождь.)
*   **vorausgesetzt, dass...** (при условии, что...) / **unter der Bedingung, dass...** (при условии, что...)
    Вводят условие, необходимое для выполнения действия главного предложения.
    *Beispiel: Sie können die Prüfung bestehen, **vorausgesetzt, dass** Sie sich gut vorbereiten.*
    *Beispiel: Er bekommt den Job, **unter der Bedingung, dass** er die Probezeit erfolgreich absolviert.*
*   **sofern / insofern (als)** (поскольку, в той мере, в какой; если)
    \`sofern\` часто синонимично \`wenn\` или \`falls\`. \`insofern (als)\` указывает на ограничение или уточнение.
    *Beispiel: Ich helfe Ihnen, **sofern** es in meiner Macht steht.* (Я помогу Вам, если это в моих силах.)
    *Beispiel: Seine Aussage ist richtig, **insofern (als)** sie sich nur auf diesen speziellen Fall bezieht.* (Его высказывание верно, поскольку/в той мере, в какой оно относится только к этому конкретному случаю.)

**II. Уступительные коннекторы (Konzessivkonnektoren) - расширенно**

*   **wiewohl / obzwar / obschon** (хотя, несмотря на то что – более книжные, формальные синонимы \`obwohl\`)
    *Beispiel: **Wiewohl** er müde war, arbeitete er weiter.*
*   **trotzdem / dennoch / gleichwohl / nichtsdestotrotz** (тем не менее, несмотря на это, все же – это союзные наречия, после них обычно обратный порядок слов или они могут стоять после глагола)
    *Beispiel: Es regnete stark. **Trotzdem** (oder: **Dennoch**) gingen wir spazieren.* (Шел сильный дождь. Несмотря на это, мы пошли гулять.)
    *Beispiel: Er hatte wenig Zeit; **nichtsdestotrotz** half er uns.* (У него было мало времени; тем не менее, он нам помог.)
*   **wenn auch / auch wenn / selbst wenn** (даже если, хотя и – подчеркивают малую вероятность влияния условия)
    *Beispiel: **Auch wenn** es schwierig ist, müssen wir es versuchen.*

**III. Противительные коннекторы (Adversativkonnektoren) - расширенно**

*   **hingegen / dahingegen** (напротив, же, тогда как – наречия, противопоставляют два факта, часто требуют инверсии)
    *Beispiel: Im Norden war es kalt, im Süden **hingegen** schien die Sonne.*
    *Beispiel: Er liebt klassische Musik, sein Bruder **dahingegen** bevorzugt Rock.*
*   **demgegenüber** (в противоположность этому, напротив – наречие)
    *Beispiel: Die alte Methode war kompliziert; **demgegenüber** ist die neue sehr einfach.*
*   **indessen / indes** (между тем, однако – более формально, наречия)
    *Beispiel: Er studierte die Akten. **Indessen** warteten die anderen ungeduldig.*
*   **wohingegen** (тогда как, в то время как – союз, вводит придаточное предложение)
    *Beispiel: Mein Bruder ist sehr sportlich, **wohingegen** ich lieber lese.*

**IV. Причинно-следственные коннекторы (Kausal- und Konsekutivkonnektoren) - расширенно**

*   **infolgedessen / demzufolge / somit / daher / deshalb / deswegen** (вследствие этого, поэтому, таким образом – наречия, выражающие следствие, после них обратный порядок слов)
    *Beispiel: Es gab einen Stau, **infolgedessen** kam er zu spät.*
    *Beispiel: Die Nachfrage ist gestiegen, **somit** erhöhen sich die Preise.*
*   **angesichts (+ Genitiv)** (ввиду, учитывая – предлог)
    *Beispiel: **Angesichts der aktuellen Situation** müssen wir unsere Pläne ändern.*
*   **mangels (+ Genitiv)** (из-за отсутствия, за неимением – предлог)
    *Beispiel: **Mangels Beweisen** wurde er freigesprochen.*

**V. Модальные коннекторы (Modal-Konnektoren) - расширенно**

*   **je nachdem, ob/wie/was/wann...** (в зависимости от того, ли/как/что/когда...)
    *Beispiel: Wir fahren ans Meer oder in die Berge, **je nachdem, wie** das Wetter ist.*
*   **insofern (als) / insoweit (als)** (поскольку, в той мере, в какой – см. также условные)

Использование этих коннекторов позволяет строить сложные и логически связанные тексты, что характерно для уровня C1. Важно обращать внимание не только на значение коннектора, но и на порядок слов, который он требует.
  `,
  vocabulary: [
    { german: 'es sei denn, (dass)', russian: 'если только не, разве что не', example: 'Ich komme, es sei denn, es regnet.' },
    { german: 'vorausgesetzt, dass', russian: 'при условии, что', example: 'Du darfst mitkommen, vorausgesetzt, dass du deine Hausaufgaben machst.' },
    { german: 'sofern', russian: 'поскольку; если (постольку, поскольку)', example: 'Sofern keine Fragen mehr sind, beenden wir die Sitzung.' },
    { german: 'insofern (als) / insoweit (als)', russian: 'поскольку, в той мере, в какой; если', example: 'Deine Kritik ist berechtigt, insofern als es um die Kosten geht.' },
    { german: 'wiewohl / obzwar / obschon', russian: 'хотя, несмотря на то что (книжн.)', example: 'Wiewohl er krank war, ging er zur Arbeit.' },
    { german: 'trotzdem', russian: 'несмотря на это, тем не менее (союзное наречие)', example: 'Es war kalt, trotzdem ging er schwimmen.' },
    { german: 'dennoch', russian: 'тем не менее, однако (союзное наречие)', example: 'Er hatte wenig geschlafen, dennoch war er konzentriert.' },
    { german: 'nichtsdestotrotz / gleichwohl', russian: 'тем не менее, несмотря на все это (союзное наречие, формально)', example: 'Die Aufgabe war schwer, nichtsdestotrotz löste er sie.' },
    { german: 'hingegen / dahingegen', russian: 'напротив, же, тогда как (союзное наречие)', example: 'Sie ist Optimistin, er hingegen ist Pessimist.' },
    { german: 'demgegenüber', russian: 'в противоположность этому, напротив (союзное наречие)', example: 'Die alte Theorie war fehlerhaft; demgegenüber ist die neue präziser.' },
    { german: 'indessen / indes', russian: 'между тем, однако (союзное наречие, формально)', example: 'Er las ein Buch, indessen seine Frau kochte.' },
    { german: 'wohingegen', russian: 'тогда как, в то время как (союз)', example: 'Der Sommer war heiß, wohingegen der Herbst kühl war.' },
    { german: 'infolgedessen / demzufolge / somit', russian: 'вследствие этого, поэтому, таким образом (союзное наречие)', example: 'Er hat viel gelernt, infolgedessen hat er die Prüfung bestanden.' },
    { german: 'angesichts (+Gen)', russian: 'ввиду, учитывая', example: 'Angesichts der Umstände müssen wir vorsichtig sein.' },
    { german: 'mangels (+Gen)', russian: 'из-за отсутствия, за неимением', example: 'Mangels Alternativen stimmten sie zu.' },
    { german: 'je nachdem, ob/wie/was/wann...', russian: 'в зависимости от того, ли/как/что/когда...', example: 'Die Kosten variieren, je nachdem, welches Modell Sie wählen.' },
  ],
  readingText: `
Die digitale Transformation der Gesellschaft schreitet unaufhaltsam voran. Einerseits eröffnet sie ungeahnte Möglichkeiten in Bildung, Kommunikation und Wirtschaft. Andererseits wirft sie komplexe ethische Fragen auf, **angesichts** derer neue regulatorische Rahmenbedingungen diskutiert werden. **Insofern** traditionelle Arbeitsmodelle durch Automatisierung bedroht sind, müssen Umschulungs- und Weiterbildungsprogramme gefördert werden. **Nichtsdestotrotz** ist der Widerstand gegen bestimmte technologische Neuerungen in Teilen der Bevölkerung spürbar, **es sei denn, (dass)** deren Nutzen unmittelbar ersichtlich ist. **Je nachdem, wie** transparent Unternehmen mit Daten umgehen, **desto** größer oder kleiner ist das Vertrauen der Konsumenten. **Wiewohl** viele die Vorteile der Vernetzung sehen, wächst **gleichwohl** die Sorge um Privatsphäre und Datensicherheit.
  `,
  readingComprehensionExercises: [
    {
      id: 'c1-konnektoren-rq1',
      type: 'multiple_choice',
      question: 'Welche zwei Seiten der digitalen Transformation werden im ersten Satz genannt?',
      options: ['Nur negative Aspekte', 'Chancen und ethische Fragen', 'Wirtschaftliche und soziale Probleme', 'Bildung und Kommunikation'],
      correctAnswer: 'Chancen und ethische Fragen',
      explanation: 'Der Text sagt: "Einerseits eröffnet sie ungeahnte Möglichkeiten... Andererseits wirft sie komplexe ethische Fragen auf..."',
    },
    {
      id: 'c1-konnektoren-rq2',
      type: 'multiple_choice',
      question: 'Unter welcher Bedingung ist der Widerstand gegen technologische Neuerungen laut Text weniger spürbar?',
      options: ['Wenn sie von Experten entwickelt wurden.', 'Wenn ihr Nutzen unmittelbar ersichtlich ist.', 'Wenn sie staatlich gefördert werden.', 'Wenn sie schon lange existieren.'],
      correctAnswer: 'Wenn ihr Nutzen unmittelbar ersichtlich ist.',
      explanation: 'Der Text sagt: "...es sei denn, (dass) deren Nutzen unmittelbar ersichtlich ist."',
    }
  ],
  exercises: [
    {
      id: 'c1-konnektoren-ex1',
      type: 'multiple_choice',
      question: 'Выберите наиболее подходящий коннектор: "Er ist sehr talentiert; ___ muss er noch viel üben, um Perfektion zu erreichen."',
      options: ['infolgedessen', 'nichtsdestotrotz', 'sofern', 'je nachdem'],
      correctAnswer: 'nichtsdestotrotz',
      explanation: '"Nichtsdestotrotz" (тем не менее) выражает уступку и противопоставление.',
    },
    {
      id: 'c1-konnektoren-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте коннектор: "___ er sehr beschäftigt ist, nimmt er sich Zeit für seine Familie."',
      sentenceParts: ['', ' er sehr beschäftigt ist, nimmt er sich Zeit für seine Familie.'],
      correctAnswer: 'Obwohl', // Wiewohl, Obgleich тоже подходят
      explanation: '"Obwohl" (хотя) вводит уступительное придаточное.',
    },
    {
      id: 'c1-konnektoren-ex3',
      type: 'translation',
      question: 'Переведите на немецкий, используя "einerseits ... andererseits": "С одной стороны, это интересно, с другой стороны, это очень сложно."',
      prompt: 'С одной стороны, это интересно, с другой стороны, это очень сложно.',
      languageDirection: 'to_german',
      correctAnswer: 'Einerseits ist das interessant, andererseits ist es sehr schwierig.',
      explanation: 'Конструкция "einerseits ... andererseits" для противопоставления двух аспектов.',
    },
    {
      id: 'c1-konnektoren-ex4',
      type: 'writing_prompt',
      question: 'Schreiben Sie einen kurzen Absatz (3-4 Sätze) zu einem aktuellen Thema und verwenden Sie dabei mindestens zwei der im Unterricht besprochenen fortgeschrittenen Konnektoren (z.B. nichtsdestotrotz, infolgedessen, wohingegen, es sei denn).',
      suggestedLength: '3-4 Sätze',
    }
  ],
};

    