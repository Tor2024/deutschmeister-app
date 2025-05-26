
import type { Lesson, ReadingComprehensionQuestion, Exercise } from '@/types';

export const lessonB1LexikVeranstaltungenOrganisation: Lesson = {
  id: 'b1-lexik-veranstaltungen-organisation',
  level: 'B1',
  topic: 'Участие в мероприятиях и организация событий',
  theory: `
В этом уроке мы изучим лексику, необходимую для обсуждения и организации различных мероприятий, а также для участия в них. Это включает планирование, приглашения, обсуждение деталей и выражение впечатлений.

**Основные этапы и понятия:**
- **Планирование (Planung):** определение цели, даты, места, бюджета, списка гостей.
- **Приглашение (Einladung):** составление и рассылка приглашений, ответы на приглашения.
- **Участие (Teilnahme):** посещение мероприятия, общение с другими участниками.
- **Обсуждение (Besprechung):** впечатления от мероприятия, результаты.

**Полезные фразы:**
- *Ich möchte eine Party organisieren.* (Я хочу организовать вечеринку.)
- *Wann und wo findet das Treffen statt?* (Когда и где состоится встреча?)
- *Ich lade dich herzlich zu meinem Geburtstag ein.* (Я сердечно приглашаю тебя на мой день рождения.)
- *Kannst du bitte Bescheid geben, ob du kommst?* (Можешь, пожалуйста, дать знать, придешь ли ты?)
- *Vielen Dank für die Einladung, ich komme gern!* (Большое спасибо за приглашение, я с удовольствием приду!)
- *Leider kann ich nicht teilnehmen, weil...* (К сожалению, я не могу участвовать, потому что...)
- *Die Veranstaltung war ein voller Erfolg.* (Мероприятие имело полный успех.)
`,
  vocabulary: [
    { german: 'die Veranstaltung (-en)', russian: 'мероприятие, событие', example: 'Die Veranstaltung findet am Samstag statt.' },
    { german: 'organisieren', russian: 'организовывать', example: 'Wer organisiert die nächste Konferenz?' },
    { german: 'planen', russian: 'планировать', example: 'Wir planen eine Reise nach Italien.' },
    { german: 'vorbereiten (auf + A)', russian: 'готовить, подготавливать (к чему-л.)', example: 'Ich muss mich auf die Präsentation vorbereiten.' },
    { german: 'einladen (lädt ein, lud ein, hat eingeladen) (zu + D)', russian: 'приглашать (на что-л.)', example: 'Er hat uns zu seiner Hochzeit eingeladen.' },
    { german: 'die Einladung (-en)', russian: 'приглашение', example: 'Hast du die Einladung bekommen?' },
    { german: 'teilnehmen (nimmt teil, nahm teil, hat teilgenommen) (an + D)', russian: 'участвовать (в чем-л.)', example: 'Viele Studenten nehmen am Seminar teil.' },
    { german: 'der Teilnehmer (-) / die Teilnehmerin (-nen)', russian: 'участник / участница' },
    { german: 'der Gast (Gäste)', russian: 'гость', example: 'Wir erwarten heute Abend viele Gäste.' },
    { german: 'der Termin (-e)', russian: 'встреча, назначенное время, запись', example: 'Ich habe morgen einen wichtigen Termin.' },
    { german: 'absagen', russian: 'отменять (встречу, мероприятие)', example: 'Leider muss ich den Termin absagen.' },
    { german: 'verschieben (verschiebt, verschob, hat verschoben)', russian: 'переносить, откладывать (на другое время)', example: 'Können wir das Treffen auf nächste Woche verschieben?' },
    { german: 'stattfinden (findet statt, fand statt, hat stattgefunden)', russian: 'состояться, проходить (о мероприятии)', example: 'Das Konzert findet im Stadtpark statt.' },
    { german: 'das Programm (-e)', russian: 'программа (мероприятия)', example: 'Das Programm für heute Abend sieht sehr interessant aus.' },
    { german: 'die Eintrittskarte (-n)', russian: 'входной билет', example: 'Wo kann ich Eintrittskarten kaufen?' },
    { german: 'Bescheid geben/sagen', russian: 'дать знать, сообщить', example: 'Gib mir bitte Bescheid, ob du Zeit hast.' },
  ],
  readingText: `
Die Organisation einer erfolgreichen Veranstaltung erfordert sorgfältige Planung und Koordination. Zuerst muss das Ziel der Veranstaltung klar definiert werden: Handelt es sich um eine private Feier, eine geschäftliche Konferenz oder ein kulturelles Event? Davon abhängig sind die Wahl des Datums, des Ortes und des Budgets.
Ein wichtiger Schritt ist die Erstellung einer Gästeliste und der Versand von Einladungen. Diese sollten alle relevanten Informationen enthalten, wie Anlass, Zeit, Ort und gegebenenfalls einen Dresscode oder eine Bitte um Rückmeldung (RSVP).
Während der Veranstaltung selbst ist es wichtig, dass sich die Teilnehmer wohlfühlen und das Programm reibungslos abläuft. Gute Gastgeber kümmern sich um das Wohl ihrer Gäste und sorgen für eine angenehme Atmosphäre. Nach der Veranstaltung ist es oft üblich, sich bei Helfern und Teilnehmern zu bedanken und eventuell Feedback einzuholen, um zukünftige Events noch besser gestalten zu können. Die Teilnahme an gut organisierten Veranstaltungen kann eine bereichernde Erfahrung sein.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-veranstaltungen-rq1',
      type: 'multiple_choice',
      question: 'Was ist laut Text einer der ersten Schritte bei der Organisation einer Veranstaltung?',
      options: ['Der Versand von Dankeskarten.', 'Die Definition des Ziels der Veranstaltung.', 'Das Einholen von Feedback.', 'Die Auswahl der Musik.'],
      correctAnswer: 'Die Definition des Ziels der Veranstaltung.',
      explanation: 'Im Text steht: "Zuerst muss das Ziel der Veranstaltung klar definiert werden..."',
    },
    {
      id: 'b1-veranstaltungen-rq2',
      type: 'multiple_choice',
      question: 'Was sollten Einladungen laut Text enthalten?',
      options: ['Nur den Namen des Gastgebers.', 'Alle relevanten Informationen wie Anlass, Zeit und Ort.', 'Eine Liste aller anderen eingeladenen Gäste.', 'Nur eine Telefonnummer für Rückfragen.'],
      correctAnswer: 'Alle relevanten Informationen wie Anlass, Zeit und Ort.',
      explanation: 'Der Text sagt: "Diese sollten alle relevanten Informationen enthalten, wie Anlass, Zeit, Ort..."',
    },
  ],
  exercises: [
    {
      id: 'b1-veranstaltungen-ex1',
      type: 'multiple_choice',
      question: 'Was bedeutet "teilnehmen an + Dativ"?',
      options: ['приглашать на', 'отменять что-л.', 'участвовать в', 'планировать что-л.'],
      correctAnswer: 'участвовать в',
      explanation: '"Teilnehmen an + Dativ" означает "участвовать в чем-либо".',
    },
    {
      id: 'b1-veranstaltungen-ex2',
      type: 'fill_in_the_blank',
      question: 'Ich muss den Arzttermin für morgen leider ___. (отменить)',
      sentenceParts: ['Ich muss den Arzttermin für morgen leider ', '.'],
      correctAnswer: 'absagen',
      explanation: '"Absagen" означает "отменять".',
    },
    {
      id: 'b1-veranstaltungen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Когда и где состоится концерт?"',
      prompt: 'Когда и где состоится концерт?',
      languageDirection: 'to_german',
      correctAnswer: 'Wann und wo findet das Konzert statt?',
      explanation: '"Состояться" (о мероприятии) - "stattfinden" (глагол с отделяемой приставкой).',
    },
    {
      id: 'b1-veranstaltungen-wp1',
      type: 'writing_prompt',
      question: 'Sie planen eine kleine Geburtstagsfeier für einen Freund. Schreiben Sie eine kurze E-Mail (ca. 40-50 Wörter) an andere Freunde, um sie einzuladen. Nennen Sie den Anlass, das Datum, die Uhrzeit und den Ort.',
      suggestedLength: 'ca. 40-50 Wörter',
    },
  ],
};
