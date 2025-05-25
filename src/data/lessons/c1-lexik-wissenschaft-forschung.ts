
import type { Lesson } from '@/types';

export const lessonC1LexikWissenschaftForschung: Lesson = {
  id: 'c1-lexik-wissenschaft-forschung',
  level: 'C1',
  topic: 'Наука и исследования (Wissenschaft und Forschung)',
  theory: `
На уровне C1 важно уметь обсуждать научные темы, понимать специализированные тексты и выражать свое мнение по вопросам научных исследований и их влияния на общество.

**Ключевые аспекты:**
- Понимание научной методологии.
- Обсуждение этических вопросов в науке.
- Анализ результатов исследований и их интерпретация.

**Примеры фраз для дискуссии:**
- *Die jüngsten Forschungsergebnisse deuten darauf hin, dass...* (Последние результаты исследований указывают на то, что...)
- *Es bedarf weiterer Untersuchungen, um diese Hypothese zu verifizieren.* (Необходимы дальнейшие исследования, чтобы проверить эту гипотезу.)
- *Der technologische Fortschritt wirft neue ethische Fragen auf.* (Технологический прогресс ставит новые этические вопросы.)
`,
  vocabulary: [
    { german: 'die Wissenschaft (-en)', russian: 'наука', example: 'Die moderne Wissenschaft entwickelt sich rasant.' },
    { german: 'die Forschung (-en)', russian: 'исследование', example: 'Die Forschung in diesem Bereich ist sehr komplex.' },
    { german: 'der Wissenschaftler (-) / die Wissenschaftlerin (-nen)', russian: 'ученый / ученая', example: 'Viele Wissenschaftler arbeiten an diesem Projekt.' },
    { german: 'der Forscher (-) / die Forscherin (-nen)', russian: 'исследователь / исследовательница', example: 'Die Forscher präsentierten ihre Ergebnisse.' },
    { german: 'die Entdeckung (-en)', russian: 'открытие (научное)', example: 'Die Entdeckung der DNA war ein Meilenstein.' },
    { german: 'die Erfindung (-en)', russian: 'изобретение', example: 'Das Rad war eine bahnbrechende Erfindung.' },
    { german: 'die Theorie (-n)', russian: 'теория', example: 'Diese Theorie muss noch bewiesen werden.' },
    { german: 'die Hypothese (-n)', russian: 'гипотеза', example: 'Die Hypothese wurde durch Experimente bestätigt.' },
    { german: 'das Experiment (-e)', russian: 'эксперимент', example: 'Das Experiment lieferte interessante Daten.' },
    { german: 'die Methode (-n)', russian: 'метод, методика', example: 'Welche Methode haben Sie angewendet?' },
    { german: 'die Analyse (-n)', russian: 'анализ', example: 'Die statistische Analyse zeigte signifikante Unterschiede.' },
    { german: 'der Beweis (-e)', russian: 'доказательство', example: 'Es gibt klare Beweise für diese Annahme.' },
    { german: 'forschen (nach + D)', russian: 'исследовать (что-л.)', example: 'Er forscht nach neuen Heilmethoden.' },
    { german: 'entdecken', russian: 'открывать (что-то новое)', example: 'Kolumbus hat Amerika entdeckt.' },
    { german: 'erfinden (erfindet, erfand, hat erfunden)', russian: 'изобретать', example: 'Wer hat das Telefon erfunden?' },
    { german: 'analysieren', russian: 'анализировать', example: 'Wir müssen die Ergebnisse sorgfältig analysieren.' },
    { german: 'beweisen (beweist, bewies, hat bewiesen)', russian: 'доказывать', example: 'Der Anwalt konnte seine Unschuld beweisen.' },
    { german: 'entwickeln', russian: 'разрабатывать, развивать', example: 'Das Unternehmen entwickelt neue Software.' },
    { german: 'veröffentlichen', russian: 'публиковать, опубликовывать', example: 'Der Artikel wurde in einer Fachzeitschrift veröffentlicht.' },
    { german: 'der Fortschritt (-e)', russian: 'прогресс, успех', example: 'Der technische Fortschritt ist unaufhaltsam.' },
    { german: 'das Ergebnis (-se)', russian: 'результат, итог', example: 'Die Ergebnisse der Studie werden bald präsentiert.' },
    { german: 'die Studie (-n)', russian: 'исследование (научное, часто с опросами или экспериментами)', example: 'Eine neue Studie zeigt die Auswirkungen des Schlafmangels.' },
    { german: 'die Erkenntnis (-se)', russian: 'познание, осознание, научное открытие', example: 'Die neuesten wissenschaftlichen Erkenntnisse.' },
  ],
  exercises: [
    {
      id: 'c1-lexik-wissenschaft-forschung-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "гипотеза"?',
      options: ['die Theorie', 'die Hypothese', 'der Beweis', 'das Experiment'],
      correctAnswer: 'die Hypothese',
      explanation: '"Die Hypothese" означает "гипотеза".',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Viele ___ (ученые) arbeiten an der Entwicklung eines neuen Impfstoffs."',
      sentenceParts: ['Viele ', ' arbeiten an der Entwicklung eines neuen Impfstoffs.'],
      correctAnswer: 'Wissenschaftler',
      explanation: '"Ученый" по-немецки "der Wissenschaftler" (мн.ч. "die Wissenschaftler").',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Они опубликовали результаты своего исследования."',
      prompt: 'Они опубликовали результаты своего исследования.',
      languageDirection: 'to_german',
      correctAnswer: 'Sie haben die Ergebnisse ihrer Forschung veröffentlicht.',
      explanation: '"Опубликовать" - "veröffentlichen". "Результаты их исследования" - "die Ergebnisse ihrer Forschung".',
    },
    {
      id: 'c1-lexik-wissenschaft-forschung-ex4',
      type: 'multiple_choice',
      question: 'Что означает глагол "erforschen"?',
      options: ['изобретать', 'доказывать', 'тщательно исследовать', 'анализировать'],
      correctAnswer: 'тщательно исследовать',
      explanation: '"Erforschen" означает "исследовать" (часто более глубоко и систематически, чем "untersuchen").',
    },
  ],
};

    