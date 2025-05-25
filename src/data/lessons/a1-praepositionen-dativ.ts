
import type { Lesson } from '@/types';

// --- Урок A1: Предлоги, требующие Dativ (основы) ---
export const lessonA1PraepositionenDativ: Lesson = {
  id: 'a1-praepositionen-dativ',
  level: 'A1',
  topic: 'Предлоги, требующие Dativ (основы: aus, bei, mit, nach, seit, von, zu)',
  theory: `
Дательный падеж (Dativ) в немецком языке отвечает на вопрос **"кому? чему?" (Wem?)**. Некоторые предлоги всегда требуют после себя существительное или местоимение именно в дательном падеже.

**Основные предлоги, после которых всегда идет Dativ:**

*   **aus (из, с)**: Указывает на происхождение (откуда родом, из какого города/страны), материал, из которого что-то сделано.
    *   *Ich komme **aus Spanien**.* (Я из Испании.)
    *   *Der Tisch ist **aus Holz**.* (Стол из дерева.)
    *   *Er nimmt das Buch **aus der Tasche**.* (Он достает книгу из сумки.)

*   **bei (у, при, во время)**: Указывает на местонахождение у кого-то, при каком-то месте, или во время какого-то действия.
    *   *Ich wohne **bei meinen Eltern**.* (Я живу у моих родителей.)
    *   *Er arbeitet **bei Siemens**.* (Он работает в фирме Siemens.)
    *   ***Bei schlechtem Wetter** bleiben wir zu Hause.* (При плохой погоде мы остаемся дома.)

*   **mit (с)**: Указывает на совместное действие с кем-либо или использование какого-либо инструмента/средства.
    *   *Ich spiele **mit meinem Bruder**.* (Я играю с моим братом.)
    *   *Wir fahren **mit dem Auto**.* (Мы едем на машине.)
    *   *Kaffee **mit Milch**, bitte.* (Кофе с молоком, пожалуйста.)

*   **nach (после; в, на)**: Указывает на время (после чего-то) или направление (к городам, странам без артикля, а также "домой").
    *   ***Nach der Schule** gehe ich ins Kino.* (После школы я иду в кино.)
    *   *Wir fliegen **nach Deutschland**.* (Мы летим в Германию.)
    *   *Ich fahre **nach Hause**.* (Я еду домой.)

*   **seit (с, с тех пор как)**: Указывает на момент в прошлом, с которого началось действие, продолжающееся до сих пор.
    *   *Ich lerne Deutsch **seit einem Jahr**.* (Я учу немецкий уже год / с одного года.)
    *   *Er wohnt **seit 2010** in Berlin.* (Он живет в Берлине с 2010 года.)

*   **von (от, с, о)**: Указывает на отправную точку, принадлежность (замена Genitiv в разговорной речи), авторство.
    *   *Das Geschenk ist **von meiner Freundin**.* (Подарок от моей подруги.)
    *   *Ich komme gerade **vom Arzt**.* (Я как раз иду от врача.) (vom = von dem)
    *   *Ein Buch **von Goethe**.* (Книга Гёте.)

*   **zu (к, на)**: Указывает на направление к лицу, месту, учреждению или на цель.
    *   *Ich gehe **zum Supermarkt**.* (Я иду в супермаркет.) (zum = zu dem)
    *   *Wir fahren **zu unseren Großeltern**.* (Мы едем к нашим бабушке и дедушке.)
    *   *Ich gehe **zur Arbeit**.* (Я иду на работу.) (zur = zu der)

**Напоминание об артиклях в Dativ:**
*   Мужской род (der → **dem**): mit **dem** Mann
*   Женский род (die → **der**): von **der** Frau
*   Средний род (das → **dem**): aus **dem** Haus
*   Множественное число (die → **den** + существительное часто получает **-n**): mit **den** Kinder**n**

Запоминание этих предлогов и падежа, который они требуют, очень важно!
`,
  vocabulary: [
    { german: 'aus (+D)', russian: 'из, с (происхождение, материал)', example: 'Er kommt aus der Türkei.' },
    { german: 'bei (+D)', russian: 'у, при, во время', example: 'Sie ist bei ihrer Freundin.' },
    { german: 'mit (+D)', russian: 'с (кем-л., чем-л.)', example: 'Ich fahre mit dem Zug.' },
    { german: 'nach (+D)', russian: 'после; в, на (направление к городам/странам без артикля)', example: 'Nach dem Film gehen wir essen.' },
    { german: 'seit (+D)', russian: 'с (какого-то времени, продолжается до сих пор)', example: 'Ich wohne hier seit zwei Jahren.' },
    { german: 'von (+D)', russian: 'от, с, о', example: 'Das ist ein Brief von meinem Bruder.' },
    { german: 'zu (+D)', russian: 'к, на (направление к лицу/месту)', example: 'Wir gehen zum Bahnhof.' },
    { german: 'dem (Dativ, m./n.)', russian: 'артикль дательного падежа (м.р./ср.р.)' },
    { german: 'der (Dativ, f.)', russian: 'артикль дательного падежа (ж.р.)' },
    { german: 'den (Dativ, Pl.)', russian: 'артикль дательного падежа (мн.ч.)' },
    { german: 'der Arzt (Ärzte)', russian: 'врач', example: 'Ich gehe zum Arzt.' },
    { german: 'die Schule (-n)', russian: 'школа', example: 'Nach der Schule spiele ich Fußball.' },
    { german: 'das Haus (Häuser)', russian: 'дом', example: 'Sie kommt aus dem Haus.' },
    { german: 'die Freunde (Pl.)', russian: 'друзья', example: 'Ich treffe mich mit meinen Freunden.' },
  ],
  exercises: [
    {
      id: 'a1-praep-dativ-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный предлог: Ich komme ___ Italien.',
      options: ['bei', 'mit', 'aus', 'zu'],
      correctAnswer: 'aus',
      explanation: 'Предлог "aus" используется для указания происхождения (из какой страны).',
    },
    {
      id: 'a1-praep-dativ-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль: Er spricht mit ___ (der Lehrer).',
      sentenceParts: ['Er spricht mit ', ' Lehrer.'],
      correctAnswer: 'dem',
      explanation: 'Предлог "mit" требует Dativ. "Der Lehrer" мужского рода, в Dativ "dem Lehrer".',
    },
    {
      id: 'a1-praep-dativ-ex3',
      type: 'multiple_choice',
      question: 'Какое предложение правильное?',
      options: [
        'Ich fahre nach mein Haus.',
        'Ich fahre zu meinem Haus.',
        'Ich fahre bei meinem Haus.'
      ],
      correctAnswer: 'Ich fahre zu meinem Haus.',
      explanation: 'Для указания направления к конкретному месту (дому) используется предлог "zu" + Dativ. "Nach Hause" - это устойчивое выражение "домой".',
    },
    {
      id: 'a1-praep-dativ-ex4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Seit ___ (ein Monat) lerne ich Spanisch.',
      sentenceParts: ['Seit ', ' lerne ich Spanisch.'],
      correctAnswer: 'einem Monat',
      explanation: 'Предлог "seit" требует Dativ. "Ein Monat" (м.р.) в Dativ - "einem Monat".',
    },
  ],
};
