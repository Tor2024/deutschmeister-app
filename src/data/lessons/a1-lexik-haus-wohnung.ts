
import type { Lesson } from '@/types';

export const lessonA1LexikHausWohnung: Lesson = {
  id: 'a1-lexik-haus-wohnung',
  level: 'A1',
  topic: 'Дом и квартира (Haus und Wohnung)',
  theory: `
В этом уроке мы познакомимся с основной лексикой, необходимой для описания вашего дома или квартиры. Вы научитесь называть разные типы жилья, комнаты и некоторые предметы мебели.

**Основные типы жилья:**
- **das Haus (Häuser)** - дом
- **die Wohnung (-en)** - квартира

**Комнаты в доме/квартире:**
- **das Zimmer (-)** - комната (в общем)
- **das Wohnzimmer (-)** - гостиная (жилая комната)
- **das Schlafzimmer (-)** - спальня
- **die Küche (-n)** - кухня
- **das Badezimmer (-)** - ванная комната
- **die Toilette (-n)** - туалет
- **der Flur (-e)** - коридор, прихожая
- **das Kinderzimmer (-)** - детская комната
- **das Arbeitszimmer (-)** - кабинет
- **der Balkon (-e / -s)** - балкон
- **die Terrasse (-n)** - терраса
- **der Keller (-)** - подвал
- **der Garten (Gärten)** - сад

**Некоторые предметы мебели и обстановки:**
- **der Tisch (-e)** - стол
- **der Stuhl (Stühle)** - стул
- **das Bett (-en)** - кровать
- **der Schrank (Schränke)** - шкаф
- **das Sofa (-s)** - диван
- **der Sessel (-)** - кресло
- **das Regal (-e)** - полка, стеллаж
- **die Lampe (-n)** - лампа
- **das Fenster (-)** - окно
- **die Tür (-en)** - дверь
- **der Teppich (-e)** - ковер

**Полезные фразы:**
- *Ich wohne in einem Haus.* (Я живу в доме.)
- *Ich wohne in einer Wohnung.* (Я живу в квартире.)
- *Meine Wohnung hat drei Zimmer: ein Wohnzimmer, ein Schlafzimmer und eine Küche.* (В моей квартире три комнаты: гостиная, спальня и кухня.)
- *Im Wohnzimmer gibt es ein Sofa und zwei Sessel.* (В гостиной есть диван и два кресла.)
- *Das ist mein Zimmer.* (Это моя комната.)
`,
  vocabulary: [
    { german: 'das Haus (Häuser)', russian: 'дом', example: 'Wir haben ein großes Haus mit Garten.' },
    { german: 'die Wohnung (-en)', russian: 'квартира', example: 'Meine Wohnung ist im dritten Stock.' },
    { german: 'das Zimmer (-)', russian: 'комната', example: 'Wie viele Zimmer hat deine Wohnung?' },
    { german: 'das Wohnzimmer (-)', russian: 'гостиная', example: 'Im Wohnzimmer steht ein Fernseher.' },
    { german: 'das Schlafzimmer (-)', russian: 'спальня', example: 'Mein Schlafzimmer ist klein, aber gemütlich.' },
    { german: 'die Küche (-n)', russian: 'кухня', example: 'Wir essen oft in der Küche.' },
    { german: 'das Badezimmer (-)', russian: 'ванная комната', example: 'Das Badezimmer hat eine Dusche.' },
    { german: 'der Flur (-e)', russian: 'коридор, прихожая', example: 'Die Schuhe stehen im Flur.' },
    { german: 'der Balkon (-e/-s)', russian: 'балкон', example: 'Im Sommer sitzen wir gern auf dem Balkon.' },
    { german: 'der Tisch (-e)', russian: 'стол', example: 'Das Buch liegt auf dem Tisch.' },
    { german: 'der Stuhl (Stühle)', russian: 'стул', example: 'Nimm bitte einen Stuhl!' },
    { german: 'das Bett (-en)', russian: 'кровать', example: 'Ich gehe jetzt ins Bett.' },
    { german: 'der Schrank (Schränke)', russian: 'шкаф', example: 'Meine Kleidung ist im Schrank.' },
    { german: 'das Sofa (-s)', russian: 'диван', example: 'Das Sofa ist sehr bequem.' },
    { german: 'die Lampe (-n)', russian: 'лампа', example: 'Mach bitte die Lampe an!' },
    { german: 'das Fenster (-)', russian: 'окно', example: 'Das Fenster ist offen.' },
    { german: 'die Tür (-en)', russian: 'дверь', example: 'Kannst du die Tür schließen?' },
    { german: 'wohnen', russian: 'жить, проживать', example: 'Wo wohnst du?' },
    { german: 'möbliert', russian: 'меблированный', example: 'Ist die Wohnung möbliert?' },
  ],
  exercises: [
    {
      id: 'a1-lexik-haus-wohnung-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "кухня"?',
      options: ['das Wohnzimmer', 'das Schlafzimmer', 'die Küche', 'das Badezimmer'],
      correctAnswer: 'die Küche',
      explanation: '"Die Küche" означает "кухня".',
    },
    {
      id: 'a1-lexik-haus-wohnung-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Im Schlafzimmer steht ein großes ___ (кровать)."',
      sentenceParts: ['Im Schlafzimmer steht ein großes ', '.'],
      correctAnswer: 'Bett',
      explanation: '"Кровать" по-немецки "das Bett".',
    },
    {
      id: 'a1-lexik-haus-wohnung-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Моя квартира имеет две комнаты."',
      prompt: 'Моя квартира имеет две комнаты.',
      languageDirection: 'to_german',
      correctAnswer: 'Meine Wohnung hat zwei Zimmer.',
      explanation: '"Моя квартира" - "Meine Wohnung", "имеет" - "hat", "две комнаты" - "zwei Zimmer".',
    },
    {
      id: 'a1-lexik-haus-wohnung-ex4',
      type: 'multiple_choice',
      question: 'Где обычно стоит диван?',
      options: ['in der Küche', 'im Badezimmer', 'im Wohnzimmer', 'im Flur'],
      correctAnswer: 'im Wohnzimmer',
      explanation: 'Диван (das Sofa) обычно находится в гостиной (im Wohnzimmer).',
    },
  ],
};
