
import type { Lesson } from '@/types';

export const lessonC1LexikPolitikGesellschaft: Lesson = {
  id: 'c1-lexik-politik-gesellschaft',
  level: 'C1',
  topic: 'Политика и общество (Politik und Gesellschaft)',
  theory: `
На уровне С1 важно уметь не только понимать, но и активно обсуждать сложные общественно-политические темы, используя соответствующую лексику и выражая свою точку зрения аргументированно. Этот урок поможет вам освоить ключевые термины и понятия.

**Основные направления для обсуждения:**
- Политические системы и государственное устройство.
- Социальные проблемы и вызовы.
- Международные отношения и глобализация.
- Права человека и гражданское общество.

**Примеры фраз для дискуссии:**
- *Meiner Auffassung nach ist die aktuelle Situation besorgniserregend.* (По моему мнению, текущая ситуация вызывает беспокойство.)
- *Es ist unumgänglich, dass Maßnahmen ergriffen werden, um die soziale Ungleichheit zu bekämpfen.* (Необходимо, чтобы были приняты меры для борьбы с социальным неравенством.)
- *Die Rolle der Medien in der politischen Meinungsbildung darf nicht unterschätzt werden.* (Роль СМИ в формировании политического мнения нельзя недооценивать.)
`,
  vocabulary: [
    { german: 'die Politik', russian: 'политика', example: 'Politik beeinflusst unser tägliches Leben.' },
    { german: 'die Gesellschaft (-en)', russian: 'общество', example: 'Die moderne Gesellschaft steht vor vielen Herausforderungen.' },
    { german: 'die Regierung (-en)', russian: 'правительство', example: 'Die Regierung hat neue Gesetze vorgeschlagen.' },
    { german: 'das Parlament (-e)', russian: 'парламент', example: 'Das Parlament debattiert über den Haushalt.' },
    { german: 'die Partei (-en)', russian: 'партия (политическая)', example: 'Welche Partei hat die meisten Sitze im Parlament?' },
    { german: 'die Wahl (-en)', russian: 'выборы', example: 'Die nächsten Wahlen finden in vier Jahren statt.' },
    { german: 'wählen', russian: 'выбирать, голосовать', example: 'Jeder Bürger hat das Recht zu wählen.' },
    { german: 'der Staat (-en)', russian: 'государство', example: 'Der Staat muss für die Sicherheit seiner Bürger sorgen.' },
    { german: 'die Demokratie (-n)', russian: 'демократия', example: 'Pressefreiheit ist ein wichtiger Bestandteil der Demokratie.' },
    { german: 'die Gerechtigkeit', russian: 'справедливость', example: 'Der Kampf für soziale Gerechtigkeit ist von großer Bedeutung.' },
    { german: 'die Ungleichheit (-en)', russian: 'неравенство', example: 'Wachsende Ungleichheit ist ein globales Problem.' },
    { german: 'die Menschenrechte (Pl.)', russian: 'права человека', example: 'Die Einhaltung der Menschenrechte ist fundamental.' },
    { german: 'die Meinungsfreiheit', russian: 'свобода слова, свобода мнений', example: 'Meinungsfreiheit ist ein Grundrecht.' },
    { german: 'die Globalisierung', russian: 'глобализация', example: 'Die Globalisierung hat sowohl Vor- als auch Nachteile.' },
    { german: 'die Krise (-n)', russian: 'кризис', example: 'Die wirtschaftliche Krise betrifft viele Länder.' },
    { german: 'die Debatte (-n)', russian: 'дебаты, дискуссия', example: 'Es gab eine hitzige Debatte im Parlament.' },
    { german: 'diskutieren (über + A)', russian: 'дискутировать (о чём-л.)', example: 'Wir haben lange über dieses Thema diskutiert.' },
    { german: 'kritisieren', russian: 'критиковать', example: 'Die Opposition kritisierte die Pläne der Regierung.' },
    { german: 'fordern', russian: 'требовать', example: 'Die Demonstranten forderten höhere Löhne.' },
    { german: 'unterstützen', russian: 'поддерживать', example: 'Viele Bürger unterstützen diese Initiative.' },
    { german: 'die Maßnahme (-n)', russian: 'мера, мероприятие', example: 'Die Regierung hat neue Maßnahmen ergriffen.' },
    { german: 'die Gesetzgebung', russian: 'законодательство', example: 'Die Gesetzgebung wird im Parlament beschlossen.' },
    { german: 'die Reform (-en)', russian: 'реформа', example: 'Eine umfassende Reform des Bildungssystems ist notwendig.' },
    { german: 'die Verantwortung', russian: 'ответственность', example: 'Jeder trägt Verantwortung für die Gesellschaft.' },
  ],
  exercises: [
    {
      id: 'c1-lexik-politik-gesellschaft-ex1',
      type: 'multiple_choice',
      question: 'Какое слово означает "правительство"?',
      options: ['das Parlament', 'die Partei', 'die Regierung', 'der Staat'],
      correctAnswer: 'die Regierung',
      explanation: '"Die Regierung" означает "правительство".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Viele Menschen ___ für soziale Gerechtigkeit."',
      sentenceParts: ['Viele Menschen ', ' für soziale Gerechtigkeit.'],
      correctAnswer: 'kämpfen', // или 'setzen sich ein'
      explanation: '"Kämpfen für" (бороться за) или "sich einsetzen für" (выступать за) подходят по смыслу.',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Важно уважать права человека."',
      prompt: 'Важно уважать права человека.',
      languageDirection: 'to_german',
      correctAnswer: 'Es ist wichtig, die Menschenrechte zu respektieren.',
      explanation: '"Права человека" - "die Menschenrechte (Pl.)". "Уважать" - "respektieren" или "achten".',
    },
    {
      id: 'c1-lexik-politik-gesellschaft-ex4',
      type: 'multiple_choice',
      question: 'Что означает "die Wahl" в политическом контексте?',
      options: ['закон', 'выборы', 'мнение', 'партия'],
      correctAnswer: 'выборы',
      explanation: '"Die Wahl" (мн.ч. "die Wahlen") означает "выборы".',
    },
  ],
};
