
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB1LexikKulturFreizeit: Lesson = {
  id: 'b1-lexik-kultur-freizeit',
  level: 'B1',
  topic: 'Культура, Искусство и Свободное время (Kultur, Kunst und Freizeit)',
  theory: `
На уровне B1 важно уметь обсуждать культурные события, различные виды искусства и то, как вы проводите свободное время. Это включает в себя выражение собственного мнения, описание впечатлений и планирование досуга.

**Основные направления для обсуждения:**
- Посещение культурных мероприятий: кино, театр, концерты, музеи, выставки.
- Различные виды искусства: литература, живопись, музыка, кино.
- Хобби и интересы: как вы проводите свободное время, чем увлекаетесь.
- Выражение предпочтений, симпатий и антипатий.

**Полезные фразы для обсуждения:**
- *Ich interessiere mich für moderne Kunst / klassische Musik / historische Romane.* (Я интересуюсь современным искусством / классической музыкой / историческими романами.)
- *Am Wochenende gehe ich gern ins Kino oder treffe mich mit Freunden.* (На выходных я люблю ходить в кино или встречаться с друзьями.)
- *Der Film hat mir sehr gut / überhaupt nicht gefallen, weil...* (Фильм мне очень понравился / совсем не понравился, потому что...)
- *Was für Hobbys hast du?* (Какие у тебя хобби?)
- *Ich würde gern mal eine Oper besuchen.* (Я бы хотел как-нибудь посетить оперу.)
`,
  vocabulary: [
    { german: 'die Kultur (-en)', russian: 'культура' },
    { german: 'die Kunst (Künste)', russian: 'искусство' },
    { german: 'die Freizeit', russian: 'свободное время' },
    { german: 'das Hobby (-s)', russian: 'хобби' },
    { german: 'das Museum (Museen)', russian: 'музей', example: 'Wir haben ein interessantes Museum besucht.' },
    { german: 'die Ausstellung (-en)', russian: 'выставка', example: 'Die Fotoausstellung war beeindruckend.' },
    { german: 'das Theater (-)', russian: 'театр', example: 'Gehst du oft ins Theater?' },
    { german: 'die Oper (-n)', russian: 'опера', example: 'Die Sängerin trat in einer berühmten Oper auf.' },
    { german: 'das Konzert (-e)', russian: 'концерт', example: 'Das Rockkonzert war ausverkauft.' },
    { german: 'der Film (-e)', russian: 'фильм', example: 'Welchen Film hast du zuletzt gesehen?' },
    { german: 'das Buch (Bücher)', russian: 'книга', example: 'Ich lese gerade ein spannendes Buch.' },
    { german: 'die Musik', russian: 'музыка', example: 'Er hört gern verschiedene Musikrichtungen.' },
    { german: 'die Malerei', russian: 'живопись', example: 'Die impressionistische Malerei gefällt mir sehr.' },
    { german: 'der Künstler (-) / die Künstlerin (-nen)', russian: 'художник, деятель искусства / художница', example: 'Viele Künstler stellen ihre Werke hier aus.' },
    { german: 'sich interessieren für + A', russian: 'интересоваться чем-л.', example: 'Wofür interessierst du dich?' },
    { german: 'gefallen (gefällt, gefiel, hat gefallen) + D', russian: 'нравиться (кому-л.)', example: 'Das Bild gefällt mir gut.' },
    { german: 'empfehlen (empfiehlt, empfahl, hat empfohlen)', russian: 'рекомендовать', example: 'Kannst du mir einen guten Film empfehlen?' },
    { german: 'besuchen', russian: 'посещать', example: 'Ich möchte diese Ausstellung besuchen.' },
    { german: 'die Freizeitgestaltung', russian: 'организация досуга, проведение свободного времени' },
    { german: 'sich entspannen', russian: 'расслабляться', example: 'Am besten entspanne ich mich beim Lesen.' },
  ],
  readingText: `
Viele Menschen legen großen Wert auf eine abwechslungsreiche Freizeitgestaltung. Für die einen bedeutet das, regelmäßig Sport zu treiben oder sich in der Natur aufzuhalten. Für andere ist der Besuch kultureller Veranstaltungen ein wichtiger Ausgleich zum Alltag. Ob ein spannendes Theaterstück, ein inspirierendes Konzert oder eine interessante Kunstausstellung – kulturelle Erlebnisse können den Horizont erweitern und neue Perspektiven eröffnen.

In Deutschland gibt es ein breites Angebot an kulturellen Institutionen. Viele Städte haben berühmte Museen mit bedeutenden Sammlungen, renommierte Theater und Opernhäuser sowie eine lebendige Musikszene. Auch kleinere Städte und Gemeinden bieten oft ein überraschend vielfältiges Kulturprogramm an, von lokalen Festen bis hin zu Lesungen oder Filmvorführungen.

Die Meinungen über Kunst und Kultur sind natürlich sehr subjektiv. Was dem einen gefällt, muss dem anderen nicht unbedingt zusagen. Gerade diese Vielfalt macht den kulturellen Diskurs aber so spannend. Der Austausch über gelesene Bücher, gesehene Filme oder besuchte Konzerte kann zu interessanten Gesprächen führen und helfen, die eigenen Vorlieben besser zu verstehen oder sogar neue Interessen zu entdecken.
`,
  readingComprehensionExercises: [
    {
      id: 'b1-lexik-kultur-freizeit-rq1',
      question: 'Was können kulturelle Erlebnisse laut Text bewirken?',
      options: [
        'Sie führen immer zu finanziellem Gewinn.',
        'Sie erweitern den Horizont und eröffnen neue Perspektiven.',
        'Sie sind nur für eine kleine Gruppe von Menschen zugänglich.',
        'Sie sind weniger wichtig als sportliche Aktivitäten.'
      ],
      correctAnswer: 'Sie erweitern den Horizont und eröffnen neue Perspektiven.',
      explanation: 'Im Text steht: "...kulturelle Erlebnisse können den Horizont erweitern und neue Perspektiven eröffnen."',
    },
    {
      id: 'b1-lexik-kultur-freizeit-rq2',
      question: 'Was sagt der Text über das Kulturangebot in Deutschland?',
      options: [
        'Es konzentriert sich ausschließlich auf große Städte.',
        'Es ist sehr begrenzt und wenig vielfältig.',
        'Auch kleinere Städte bieten oft ein vielfältiges Kulturprogramm.',
        'Es ist hauptsächlich auf klassische Kunst ausgerichtet.'
      ],
      correctAnswer: 'Auch kleinere Städte bieten oft ein vielfältiges Kulturprogramm.',
      explanation: 'Im Text heißt es: "Auch kleinere Städte und Gemeinden bieten oft ein überraschend vielfältiges Kulturprogramm an..."',
    },
  ],
  exercises: [
    {
      id: 'b1-lexik-kultur-freizeit-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "выставка"?',
      options: ['das Konzert', 'die Oper', 'die Ausstellung', 'das Theater'],
      correctAnswer: 'die Ausstellung',
      explanation: '"Die Ausstellung" означает "выставка".',
    },
    {
      id: 'b1-lexik-kultur-freizeit-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich interessiere mich sehr ___ moderne Malerei."',
      sentenceParts: ['Ich interessiere mich sehr ', ' moderne Malerei.'],
      correctAnswer: 'für',
      explanation: 'Глагол "sich interessieren" используется с предлогом "für + Akkusativ".',
    },
    {
      id: 'b1-lexik-kultur-freizeit-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Этот фильм мне совсем не понравился."',
      prompt: 'Этот фильм мне совсем не понравился.',
      languageDirection: 'to_german',
      correctAnswer: 'Dieser Film hat mir überhaupt nicht gefallen.',
      explanation: 'Глагол "gefallen" используется с дательным падежом (мне - mir). "Совсем не" - "überhaupt nicht".',
    },
    {
      id: 'b1-lexik-kultur-freizeit-wp1',
      type: 'writing_prompt',
      question: 'Schreiben Sie einen kurzen Text (3-4 Sätze) über Ihre Lieblingsfreizeitbeschäftigung oder ein kulturelles Ereignis, das Sie kürzlich besucht haben.',
      suggestedLength: '3-4 Sätze',
      explanation: 'Напишите короткий текст (3-4 предложения) о вашем любимом занятии в свободное время или о культурном событии, которое вы недавно посетили.'
    }
  ],
};
