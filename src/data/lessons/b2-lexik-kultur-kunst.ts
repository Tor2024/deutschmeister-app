
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonB2LexikKulturKunst: Lesson = {
  id: 'b2-lexik-kultur-kunst',
  level: 'B2',
  topic: 'Культура и искусство (Kultur und Kunst)',
  theory: `
In diesem уроке мы расширим словарный запас, необходимый для обсуждения тем, связанных с культурой и искусством. Вы научитесь называть различные виды искусства, культурные мероприятия, а также выражать свое мнение о произведениях искусства.

**Основные направления и понятия:**
- Умение описать свои впечатления от посещения музея, театра, концерта.
- Обсуждение различных стилей и эпох в искусстве.
- Выражение предпочтений и критики.
`,
  vocabulary: [
    { german: 'die Kultur (-en)', russian: 'культура', example: 'Die deutsche Kultur ist sehr vielfältig.' },
    { german: 'die Kunst (Künste)', russian: 'искусство', example: 'Moderne Kunst ist nicht jedermanns Geschmack.' },
    { german: 'die Malerei', russian: 'живопись', example: 'Die Malerei der Renaissance ist berühmt.' },
    { german: 'die Skulptur (-en)', russian: 'скульптура', example: 'Diese Skulptur ist aus Bronze.' },
    { german: 'die Architektur (-en)', russian: 'архитектура', example: 'Die gotische Architektur ist beeindruckend.' },
    { german: 'die Literatur (-en)', russian: 'литература', example: 'Ich lese gern deutsche Literatur.' },
    { german: 'die Musik', russian: 'музыка', example: 'Welche Art von Musik hörst du gern?' },
    { german: 'das Theater (-)', russian: 'театр', example: 'Wir gehen heute Abend ins Theater.' },
    { german: 'der Film (-e)', russian: 'фильм', example: 'Dieser Film hat viele Preise gewonnen.' },
    { german: 'die Fotografie', russian: 'фотография (искусство)', example: 'Fotografie ist sein größtes Hobby.' },
    { german: 'das Museum (Museen)', russian: 'музей', example: 'Das Museum hat eine große Sammlung.' },
    { german: 'die Galerie (-n)', russian: 'галерея', example: 'In dieser Galerie werden junge Künstler ausgestellt.' },
    { german: 'das Konzert (-e)', russian: 'концерт', example: 'Das Konzert war ausverkauft.' },
    { german: 'die Oper (-n)', russian: 'опера', example: 'Sie singt in einer berühmten Oper.' },
    { german: 'die Ausstellung (-en)', russian: 'выставка', example: 'Die Ausstellung ist noch bis Sonntag geöffnet.' },
    { german: 'der Künstler (-) / die Künstlerin (-nen)', russian: 'художник, деятель искусства / художница', example: 'Der Künstler präsentiert seine neuen Werke.' },
    { german: 'der Maler (-) / die Malerin (-nen)', russian: 'живописец / художница (живописец)', example: 'Van Gogh war ein berühmter Maler.' },
    { german: 'der Schriftsteller (-) / die Schriftstellerin (-nen)', russian: 'писатель / писательница', example: 'Goethe war ein deutscher Schriftsteller.' },
    { german: 'der Musiker (-) / die Musikerin (-nen)', russian: 'музыкант / музыкантша', example: 'Die Musiker spielten hervorragend.' },
    { german: 'der Schauspieler (-) / die Schauspielerin (-nen)', russian: 'актер / актриса', example: 'Die Schauspielerin erhielt einen Oscar.' },
    { german: 'der Regisseur (-e) / die Regisseurin (-nen)', russian: 'режиссер', example: 'Der Regisseur ist für den Film verantwortlich.' },
    { german: 'besuchen', russian: 'посещать', example: 'Wir haben gestern ein Museum besucht.' },
    { german: 'ansehen (sieht an)', russian: 'смотреть (фильм, спектакль)', example: 'Hast du dir den neuen Film schon angesehen?' },
    { german: 'die Aufführung (-en)', russian: 'представление, спектакль, постановка', example: 'Die Aufführung beginnt um 19 Uhr.' },
    { german: 'das Werk (-e)', russian: 'произведение, работа (художественная)', example: 'Dieses Werk ist weltberühmt.' },
    { german: 'der Stil (-e)', russian: 'стиль', example: 'Mir gefällt der impressionistische Stil.' },
    { german: 'die Epoche (-n)', russian: 'эпоха', example: 'Die Kunst der Barockepoche.' },
    { german: 'beeindruckend', russian: 'впечатляющий', example: 'Die Architektur war sehr beeindruckend.' },
    { german: 'faszinierend', russian: 'увлекательный, захватывающий', example: 'Es war eine faszinierende Geschichte.' },
    { german: 'kreativ', russian: 'творческий, креативный', example: 'Sie ist eine sehr kreative Person.' },
  ],
  readingText: `
Die Rolle der Kunst in der Gesellschaft ist vielschichtig und hat sich im Laufe der Geschichte ständig gewandelt. Diente sie in früheren Epochen oft religiösen oder repräsentativen Zwecken der Herrschenden, so entwickelte sie sich zunehmend zu einem Medium des individuellen Ausdrucks und der gesellschaftlichen Reflexion.
Moderne Kunst, beispielsweise, konfrontiert den Betrachter häufig mit ungewohnten Perspektiven und stellt tradierte Sehgewohnheiten in Frage. Sie kann provozieren, zum Nachdenken anregen oder einfach nur ästhetisches Vergnügen bereiten. Nicht selten spiegeln Kunstwerke die politischen und sozialen Umbrüche ihrer Zeit wider oder nehmen zukünftige Entwicklungen vorweg.
Der Besuch von Museen, Galerien oder Theateraufführungen bietet die Möglichkeit, in andere Welten einzutauchen und den eigenen Horizont zu erweitern. Die Auseinandersetzung mit Kunst fördert Kreativität, Empathie und kritisches Denken – Fähigkeiten, die in unserer komplexen Welt von großer Bedeutung sind. Doch auch jenseits der etablierten Kulturinstitutionen findet Kunst statt: Street Art, digitale Kunst oder partizipative Projekte zeigen, wie lebendig und vielfältig das künstlerische Schaffen heute ist.
`,
  readingComprehensionExercises: [
    {
      id: 'b2-lexik-kultur-kunst-rq1',
      question: 'Welche Funktion hatte Kunst in früheren Epochen oft, laut Text?',
      options: [
        'Sie diente hauptsächlich der Unterhaltung der breiten Bevölkerung.',
        'Sie war primär ein Mittel des individuellen künstlerischen Ausdrucks.',
        'Sie diente religiösen oder repräsentativen Zwecken der Herrschenden.',
        'Sie konzentrierte sich auf die Abbildung des alltäglichen Lebens.'
      ],
      correctAnswer: 'Sie diente religiösen oder repräsentativen Zwecken der Herrschenden.',
      explanation: 'Im Text steht: "Diente sie in früheren Epochen oft religiösen oder repräsentativen Zwecken der Herrschenden..."'
    },
    {
      id: 'b2-lexik-kultur-kunst-rq2',
      question: 'Was wird im Text als eine häufige Eigenschaft moderner Kunst genannt?',
      options: [
        'Sie ist immer leicht verständlich und gefällig.',
        'Sie stellt tradierte Sehgewohnheiten in Frage und kann provozieren.',
        'Sie konzentriert sich ausschließlich auf klassische Techniken.',
        'Sie ist nur in großen, etablierten Museen zu finden.'
      ],
      correctAnswer: 'Sie stellt tradierte Sehgewohnheiten in Frage und kann provozieren.',
      explanation: 'Der Text sagt über moderne Kunst: "...konfrontiert den Betrachter häufig mit ungewohnten Perspektiven und stellt tradierte Sehgewohnheiten in Frage. Sie kann provozieren..."'
    },
    {
      id: 'b2-lexik-kultur-kunst-rq3',
      question: 'Welche Fähigkeiten fördert die Auseinandersetzung mit Kunst laut Text?',
      options: [
        'Vor allem technische und handwerkliche Fertigkeiten.',
        'Kreativität, Empathie und kritisches Denken.',
        'Ausschließlich das kunsthistorische Wissen.',
        'Die Fähigkeit, Kunstwerke schnell zu bewerten.'
      ],
      correctAnswer: 'Kreativität, Empathie und kritisches Denken.',
      explanation: 'Im Text wird genannt: "Die Auseinandersetzung mit Kunst fördert Kreativität, Empathie und kritisches Denken..."'
    }
  ],
  exercises: [
    {
      id: 'b2-lexik-kultur-kunst-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "выставка"?',
      options: ['das Konzert', 'die Galerie', 'die Ausstellung', 'das Museum'],
      correctAnswer: 'die Ausstellung',
      explanation: '"Die Ausstellung" означает "выставка".',
    },
    {
      id: 'b2-lexik-kultur-kunst-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Mozart war ein berühmter ___ (композитор/музыкант).',
      sentenceParts: ['Mozart war ein berühmter ', '.'],
      correctAnswer: 'Musiker', // или Komponist, но Musiker ближе к списку
      explanation: '"Музыкант" - "der Musiker". "Композитор" - "der Komponist".',
    },
    {
      id: 'b2-lexik-kultur-kunst-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы вчера посетили интересный музей."',
      prompt: 'Мы вчера посетили интересный музей.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir haben gestern ein interessantes Museum besucht.',
      explanation: '"Посещать" - "besuchen". "Интересный музей" (Akkusativ) - "ein interessantes Museum".',
    },
    {
      id: 'b2-lexik-kultur-kunst-ex4',
      type: 'multiple_choice',
      question: 'Что означает "die Aufführung"?',
      options: ['картина', 'стиль', 'представление/спектакль', 'выставка'],
      correctAnswer: 'представление/спектакль',
      explanation: '"Die Aufführung" означает "представление", "спектакль", "постановка".',
    },
    {
      id: 'b2-lexik-kultur-kunst-wp1',
      type: 'writing_prompt',
      question: 'Schreiben Sie einen kurzen Text (ca. 5-7 Sätze) über Ihren letzten Kulturbesuch (z.B. Theater, Museum, Konzert). Was hat Ihnen gefallen oder nicht gefallen und warum?',
      suggestedLength: '5-7 Sätze'
    }
  ],
};
