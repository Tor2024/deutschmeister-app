
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikArbeitBeruf: Lesson = {
  id: 'a2-lexik-arbeit-beruf',
  level: 'A2',
  topic: 'Работа и профессия (Arbeit und Beruf)',
  theory: `
В этом уроке мы выучим основную лексику, связанную с миром работы и профессий. Вы научитесь называть профессии, места работы и использовать глаголы, связанные с трудовой деятельностью.

**Основные вопросы:**
- *Was sind Sie von Beruf?* (Кто Вы по профессии? - вежливо)
- *Was bist du von Beruf?* (Кто ты по профессии? - неформально)
- *Als was arbeiten Sie/arbeitest du?* (Кем Вы/ты работаешь?)
- *Wo arbeiten Sie/arbeitest du?* (Где Вы/ты работаешь?)

**Основные ответы:**
- *Ich bin [профессия].* (Я - [профессия].)
- *Ich arbeite als [профессия].* (Я работаю [профессией].)
- *Ich arbeite bei [название фирмы/организации].* (Я работаю в [фирме].)
- *Ich arbeite in [место, например, einem Büro, einer Schule].* (Я работаю в [месте].)
`,
  vocabulary: [
    { german: 'die Arbeit (-en)', russian: 'работа, труд' },
    { german: 'der Beruf (-e)', russian: 'профессия, специальность', example: 'Was ist dein Beruf?' },
    { german: 'arbeiten', russian: 'работать', example: 'Ich arbeite von 9 bis 17 Uhr.' },
    { german: 'der Arzt (Ärzte) / die Ärztin (-nen)', russian: 'врач (муж./жен.)', example: 'Meine Schwester ist Ärztin.' },
    { german: 'der Lehrer (-) / die Lehrerin (-nen)', russian: 'учитель (муж./жен.)', example: 'Herr Müller ist ein guter Lehrer.' },
    { german: 'der Ingenieur (-e) / die Ingenieurin (-nen)', russian: 'инженер (муж./жен.)', example: 'Er arbeitet als Ingenieur bei Siemens.' },
    { german: 'der Verkäufer (-) / die Verkäuferin (-nen)', russian: 'продавец (муж./жен.)', example: 'Die Verkäuferin war sehr freundlich.' },
    { german: 'der Koch (Köche) / die Köchin (-nen)', russian: 'повар (муж./жен.)', example: 'Der Koch bereitet das Essen zu.' },
    { german: 'der Kellner (-) / die Kellnerin (-nen)', russian: 'официант (муж./жен.)', example: 'Der Kellner bringt die Rechnung.' },
    { german: 'der Friseur (-e) / die Friseurin (-nen)', russian: 'парикмахер (муж./жен.)', example: 'Ich gehe heute zum Friseur.' },
    { german: 'der Bäcker (-) / die Bäckerin (-nen)', russian: 'пекарь (муж./жен.)', example: 'Der Bäcker backt frisches Brot.' },
    { german: 'der Programmierer (-) / die Programmiererin (-nen)', russian: 'программист (муж./жен.)', example: 'Sie ist Programmiererin.' },
    { german: 'das Büro (-s)', russian: 'офис, кабинет', example: 'Er arbeitet in einem großen Büro.' },
    { german: 'die Schule (-n)', russian: 'школа', example: 'Kinder gehen in die Schule.' },
    { german: 'das Krankenhaus (Krankenhäuser)', russian: 'больница', example: 'Im Krankenhaus arbeiten viele Ärzte.' },
    { german: 'das Geschäft (-e)', russian: 'магазин; дело, бизнес', example: 'Sie hat ein eigenes Geschäft.' },
    { german: 'die Fabrik (-en)', russian: 'фабрика, завод', example: 'Mein Vater arbeitet in einer Fabrik.' },
    { german: 'die Firma (Firmen)', russian: 'фирма, компания', example: 'Er ist Chef einer großen Firma.' },
    { german: 'der Chef (-s) / die Chefin (-nen)', russian: 'начальник, шеф (муж./жен.)', example: 'Meine Chefin ist sehr nett.' },
    { german: 'der Kollege (-n, -n) / die Kollegin (-nen)', russian: 'коллега (муж./жен.)', example: 'Ich arbeite gern mit meinen Kollegen.' },
    { german: 'studieren', russian: 'учиться (в вузе)', example: 'Sie studiert Medizin.' },
    { german: 'lernen', russian: 'учить, учиться (в школе, на курсах)', example: 'Ich lerne Deutsch.' },
    { german: 'verdienen', russian: 'зарабатывать', example: 'Wie viel verdienst du?' },
    { german: 'eine Stelle suchen', russian: 'искать работу/место', example: 'Er sucht eine neue Stelle.' },
    { german: 'arbeitslos', russian: 'безработный', example: 'Leider ist er momentan arbeitslos.' },
  ],
  readingText: `
Mein Freund Markus arbeitet als Programmierer. Er arbeitet in einem großen Büro im Stadtzentrum. Seine Arbeit beginnt um neun Uhr und endet um achtzehn Uhr. Markus mag seine Arbeit sehr, weil er interessante Projekte hat und nette Kollegen.
Manchmal muss er Überstunden machen, besonders wenn ein Projekt bald fertig sein muss. Das Gehalt ist gut und er hat gute Karriereaussichten.
In seiner Freizeit lernt Markus Spanisch. Er möchte vielleicht eines Tages in Spanien arbeiten. Um eine gute Stelle zu finden, ist es wichtig, gute Kenntnisse und Fähigkeiten zu haben.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-arbeit-beruf-rq1',
      question: 'Кем работает Маркус?',
      options: ['Учителем', 'Программистом', 'Врачом', 'Инженером'],
      correctAnswer: 'Программистом',
      explanation: 'В тексте сказано: "Mein Freund Markus arbeitet als Programmierer."'
    },
    {
      id: 'a2-lexik-arbeit-beruf-rq2',
      question: 'Почему Маркусу нравится его работа?',
      options: ['Потому что он много зарабатывает', 'Потому что у него короткий рабочий день', 'Потому что у него интересные проекты и хорошие коллеги', 'Потому что он работает из дома'],
      correctAnswer: 'Потому что у него интересные проекты и хорошие коллеги',
      explanation: 'В тексте сказано: "Markus mag seine Arbeit sehr, weil er interessante Projekte hat und nette Kollegen."'
    },
    {
      id: 'a2-lexik-arbeit-beruf-rq3',
      question: 'Что Маркус делает в свободное время?',
      options: ['Занимается спортом', 'Путешествует', 'Учит испанский язык', 'Ходит в кино'],
      correctAnswer: 'Учит испанский язык',
      explanation: 'В тексте сказано: "In seiner Freizeit lernt Markus Spanisch."'
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-arbeit-beruf-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "врач" (женщина)?',
      options: ['der Arzt', 'die Ärztin', 'die Lehrerin', 'der Ingenieur'],
      correctAnswer: 'die Ärztin',
      explanation: '"Die Ärztin" означает "врач" (женщина).',
    },
    {
      id: 'a2-lexik-arbeit-beruf-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Er arbeitet als ___ (повар) in einem Restaurant."',
      sentenceParts: ['Er arbeitet als ', ' in einem Restaurant.'],
      correctAnswer: 'Koch',
      explanation: '"Повар" по-немецки "der Koch".',
    },
    {
      id: 'a2-lexik-arbeit-beruf-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Где ты работаешь?"',
      prompt: 'Где ты работаешь?',
      languageDirection: 'to_german',
      correctAnswer: 'Wo arbeitest du?',
      explanation: '"Где" - "Wo", "ты работаешь" - "arbeitest du".',
    },
    {
      id: 'a2-lexik-arbeit-beruf-ex4',
      type: 'multiple_choice',
      question: 'Какое слово означает "офис"?',
      options: ['die Schule', 'das Krankenhaus', 'das Büro', 'die Fabrik'],
      correctAnswer: 'das Büro',
      explanation: '"Das Büro" означает "офис".',
    },
    {
      id: 'a2-lexik-arbeit-beruf-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните фразу: "Was sind Sie von ___?"',
      sentenceParts: ['Was sind Sie von ', '?'],
      correctAnswer: 'Beruf',
      explanation: 'Фраза "Was sind Sie von Beruf?" означает "Кто Вы по профессии?".',
    },
    {
      id: 'a2-lexik-arbeit-beruf-wp1',
      type: 'writing_prompt',
      question: 'Beschreiben Sie kurz Ihren Traumberuf oder Ihre aktuelle Arbeit. Was machen Sie gern? (Опишите кратко работу своей мечты или вашу текущую работу. Что вам нравится делать?)',
      suggestedLength: '3-4 Sätze'
    }
  ],
};
