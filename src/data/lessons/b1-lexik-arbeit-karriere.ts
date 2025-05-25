
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB1LexikArbeitKarriere: Lesson = {
  id: 'b1-lexik-arbeit-karriere',
  level: 'B1',
  topic: 'Работа и карьера (Arbeit und Karriere)',
  theory: `
На уровне B1 важно уметь обсуждать свою профессиональную деятельность, процесс поиска работы, описывать свои обязанности и говорить о карьерных планах. Этот урок поможет вам освоить необходимую лексику.

**Поиск работы:**
- Как найти работу: *Stellenanzeigen lesen* (читать объявления о вакансиях), *sich online bewerben* (подавать заявление онлайн), *ein Netzwerk aufbauen* (строить профессиональную сеть).
- Документы: *die Bewerbungsunterlagen* (документы для заявления), *der Lebenslauf* (резюме), *das Anschreiben* (сопроводительное письмо).
- Процесс: *das Vorstellungsgespräch* (собеседование).

**На рабочем месте:**
- *der Arbeitsplatz* (рабочее место)
- *die Aufgabe (-n)* (задача, обязанность)
- *zuständig sein für + Akkusativ* (быть ответственным за что-л.)
- *Erfahrung sammeln* (набирать опыт)
- *Karriere machen* (делать карьеру)
- *ein gutes Gehalt bekommen* (получать хорошую зарплату)
`,
  vocabulary: [
    { german: 'die Arbeit (-en)', russian: 'работа, труд' },
    { german: 'der Beruf (-e)', russian: 'профессия, специальность' },
    { german: 'die Karriere (-n)', russian: 'карьера', example: 'Sie macht eine tolle Karriere.' },
    { german: 'die Stelle (-n)', russian: 'место (работы), должность', example: 'Ich suche eine neue Stelle.' },
    { german: 'die Stellenanzeige (-n)', russian: 'объявление о вакансии', example: 'Ich habe eine interessante Stellenanzeige gelesen.' },
    { german: 'sich bewerben (bewirbt sich, bewarb sich, hat sich beworben) um + A', russian: 'подавать заявление на (должность)', example: 'Er bewirbt sich um die Stelle als Manager.' },
    { german: 'die Bewerbung (-en)', russian: 'заявление (о приеме на работу)', example: 'Meine Bewerbung war erfolgreich.' },
    { german: 'der Lebenslauf (Lebensläufe)', russian: 'резюме, автобиография', example: 'Bitte schicken Sie uns Ihren Lebenslauf.' },
    { german: 'das Vorstellungsgespräch (-e)', russian: 'собеседование (при приеме на работу)', example: 'Morgen habe ich ein Vorstellungsgespräch.' },
    { german: 'der Arbeitsvertrag (-verträge)', russian: 'трудовой договор', example: 'Ich habe den Arbeitsvertrag unterschrieben.' },
    { german: 'das Gehalt (Gehälter)', russian: 'зарплата, оклад', example: 'Das Gehalt ist verhandelbar.' },
    { german: 'die Arbeitszeit (-en)', russian: 'рабочее время', example: 'Flexible Arbeitszeiten sind ein Vorteil.' },
    { german: 'die Überstunde (-n)', russian: 'сверхурочный час', example: 'Ich muss heute Überstunden machen.' },
    { german: 'die Beförderung (-en)', russian: 'повышение (по службе)', example: 'Er hat eine Beförderung bekommen.' },
    { german: 'die Kündigung (-en)', russian: 'увольнение', example: 'Er hat seine Kündigung eingereicht.' },
    { german: 'zuständig sein für + A', russian: 'быть ответственным за что-л.', example: 'Ich bin für das Marketing zuständig.' },
    { german: 'Erfahrung haben in + D', russian: 'иметь опыт в чем-л.', example: 'Sie hat viel Erfahrung im Projektmanagement.' },
    { german: 'die Kenntnisse (Pl.)', russian: 'знания', example: 'Gute Deutschkenntnisse sind erforderlich.' },
    { german: 'die Fähigkeit (-en)', russian: 'способность, умение, навык', example: 'Teamfähigkeit ist eine wichtige Fähigkeit.' },
    { german: 'teamfähig', russian: 'умеющий работать в команде', example: 'Wir suchen einen teamfähigen Mitarbeiter.' },
    { german: 'selbstständig arbeiten', russian: 'работать самостоятельно', example: 'In dieser Position müssen Sie selbstständig arbeiten können.' },
    { german: 'das Unternehmen (-)', russian: 'предприятие, компания', example: 'Er arbeitet für ein internationales Unternehmen.' },
    { german: 'die Abteilung (-en)', russian: 'отдел', example: 'Sie leitet die Personalabteilung.' },
    { german: 'der Kollege (-n, -n) / die Kollegin (-nen)', russian: 'коллега (м./ж.)', example: 'Meine Kollegen sind sehr hilfsbereit.' },
  ],
  readingText: `
Anna hat ihr Studium der Wirtschaftswissenschaften erfolgreich abgeschlossen und sucht nun ihre erste Stelle. Sie liest täglich viele Stellenanzeigen online und in Fachzeitschriften. Besonders interessiert sie sich für Positionen im Bereich Marketing, da sie während ihres Studiums bereits ein Praktikum in einer Marketingagentur absolviert hat.

Gestern hat sie eine vielversprechende Anzeige von einem internationalen Unternehmen gesehen. Die Anforderungen passen gut zu ihrem Profil: gute Englischkenntnisse, Teamfähigkeit und erste Erfahrungen im Projektmanagement. Anna hat sofort ihre Bewerbungsunterlagen vorbereitet: einen aktuellen Lebenslauf und ein individuelles Anschreiben. Sie hofft, bald zu einem Vorstellungsgespräch eingeladen zu werden.

Für Anna ist es wichtig, nicht nur ein gutes Gehalt zu bekommen, sondern auch in einem Unternehmen zu arbeiten, das Entwicklungsmöglichkeiten bietet und Wert auf eine gute Arbeitsatmosphäre legt. Sie weiß, dass der Berufseinstieg eine Herausforderung sein kann, aber sie ist motiviert und freut sich auf neue Aufgaben.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-lexik-arbeit-karriere-rq1',
      question: 'В какой области Анна ищет свою первую работу?',
      options: ['IT-Sektor', 'Personalwesen', 'Marketing', 'Finanzwesen'],
      correctAnswer: 'Marketing',
      explanation: 'Im Text steht: "Besonders interessiert sie sich für Positionen im Bereich Marketing..."',
    },
    {
      id: 'b1-lexik-arbeit-karriere-rq2',
      question: 'Какие документы Анна подготовила для подачи заявления?',
      options: ['Nur einen Lebenslauf', 'Einen Lebenslauf und ein Anschreiben', 'Ein Anschreiben und ihre Zeugnisse', 'Nur ein Motivationsschreiben'],
      correctAnswer: 'Einen Lebenslauf und ein Anschreiben',
      explanation: 'Im Text steht: "...einen aktuellen Lebenslauf und ein individuelles Anschreiben." ',
    },
    {
      id: 'b1-lexik-arbeit-karriere-rq3',
      question: 'Что для Анны важно при выборе работы, кроме хорошей зарплаты?',
      options: ['Kurze Arbeitszeiten', 'Die Möglichkeit, von zu Hause zu arbeiten', 'Entwicklungsmöglichkeiten und eine gute Arbeitsatmosphäre', 'Viele Dienstreisen'],
      correctAnswer: 'Entwicklungsmöglichkeiten und eine gute Arbeitsatmosphäre',
      explanation: 'Im Text steht: "...nicht nur ein gutes Gehalt zu bekommen, sondern auch in einem Unternehmen zu arbeiten, das Entwicklungsmöglichkeiten bietet und Wert auf eine gute Arbeitsatmosphäre legt."',
    }
  ],
  exercises: [
    {
      id: 'b1-lexik-arbeit-karriere-ex1',
      type: 'multiple_choice',
      question: 'Что такое "der Lebenslauf"?',
      options: ['Трудовой договор', 'Собеседование', 'Резюме', 'Объявление о вакансии'],
      correctAnswer: 'Резюме',
      explanation: '"Der Lebenslauf" - это резюме или автобиография, предоставляемая при поиске работы.',
    },
    {
      id: 'b1-lexik-arbeit-karriere-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Sie bewirbt sich ___ eine neue Stelle."',
      sentenceParts: ['Sie bewirbt sich ', ' eine neue Stelle.'],
      correctAnswer: 'um',
      explanation: 'Глагол "sich bewerben" (подавать заявление) используется с предлогом "um + Akkusativ".',
    },
    {
      id: 'b1-lexik-arbeit-karriere-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я отвечаю за этот проект."',
      prompt: 'Я отвечаю за этот проект.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich bin für dieses Projekt zuständig.',
      explanation: '"Быть ответственным за что-либо" - "zuständig sein für + Akkusativ".',
    },
    {
      id: 'b1-lexik-arbeit-karriere-ex4',
      type: 'multiple_choice',
      question: 'Какое слово означает "повышение по службе"?',
      options: ['die Kündigung', 'das Gehalt', 'die Beförderung', 'die Überstunde'],
      correctAnswer: 'die Beförderung',
      explanation: '"Die Beförderung" означает "повышение по службе".',
    },
  ],
};
