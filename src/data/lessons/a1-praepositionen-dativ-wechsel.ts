
import type { Lesson } from '@/types';

// --- Урок A1: Предлоги места с Dativ (Wo?) ---
export const lessonA1PraepositionenDativWechsel: Lesson = {
  id: 'a1-praepositionen-dativ-wechsel',
  level: 'A1',
  topic: 'Предлоги места с Dativ (Wo?)',
  theory: `
Некоторые предлоги в немецком языке могут использоваться как с дательным (Dativ), так и с винительным (Akkusativ) падежом. Их называют "двойными предлогами" или "Wechselpräpositionen". На этом уроке мы сосредоточимся на их использовании с **Dativ**, когда они отвечают на вопрос **Wo? (Где?)** и указывают на местоположение.

Основные двойные предлоги:
- **an** (на (вертикальной поверхности), у, при)
- **auf** (на (горизонтальной поверхности))
- **hinter** (за, позади)
- **in** (в)
- **neben** (рядом с, около)
- **über** (над)
- **unter** (под)
- **vor** (перед)
- **zwischen** (между)

**Правило:** Если предлог отвечает на вопрос **Wo? (Где?)** и указывает на местоположение (где что-то находится или происходит без движения к цели), то после него существительное ставится в **Dativ**.

**Артикли в Dativ (повторение):**
- Мужской род (der Mann): **dem** Mann
- Женский род (die Frau): **der** Frau
- Средний род (das Kind): **dem** Kind
- Множественное число (die Leute): **den** Leute**n** (к существительному часто добавляется окончание **-n**)

**Примеры:**
- Das Buch liegt **auf dem** Tisch. (Книга лежит на столе.) - Wo liegt das Buch? Auf dem Tisch.
- Die Katze schläft **unter dem** Stuhl. (Кошка спит под стулом.) - Wo schläft die Katze? Unter dem Stuhl.
- Ich bin **in der** Schule. (Я в школе.) - Wo bin ich? In der Schule.
- Das Bild hängt **an der** Wand. (Картина висит на стене.)
- Der Garten ist **hinter dem** Haus. (Сад за домом.)
- Deine Tasche steht **neben dem** Schrank. (Твоя сумка стоит рядом со шкафом.)
- Die Lampe hängt **über dem** Tisch. (Лампа висит над столом.)
- Das Auto parkt **vor der** Tür. (Машина припаркована перед дверью.)
- Der Stuhl steht **zwischen dem** Sofa und dem Fenster. (Стул стоит между диваном и окном.)

**Слияние предлогов с артиклями (часто используется):**
- in + dem = **im**: *Ich bin **im** Zimmer.* (Я в комнате.)
- an + dem = **am**: *Das Schild ist **am** Eingang.* (Табличка у входа.)

Запомните эти предлоги и правило "Wo? → Dativ". Это очень важно для правильного описания местоположения.
`,
  vocabulary: [
    { german: 'an (+D/A)', russian: 'на (вертикально), у, при', example: 'Das Bild ist an der Wand.' },
    { german: 'auf (+D/A)', russian: 'на (горизонтально)', example: 'Die Tasse steht auf dem Tisch.' },
    { german: 'hinter (+D/A)', russian: 'за, позади', example: 'Der Ball ist hinter dem Schrank.' },
    { german: 'in (+D/A)', russian: 'в', example: 'Wir sind im Haus.' },
    { german: 'neben (+D/A)', russian: 'рядом с, около', example: 'Meine Schule ist neben der Post.' },
    { german: 'über (+D/A)', russian: 'над, через', example: 'Die Wolken sind über der Stadt.' },
    { german: 'unter (+D/A)', russian: 'под', example: 'Der Hund liegt unter dem Baum.' },
    { german: 'vor (+D/A)', russian: 'перед', example: 'Das Fahrrad steht vor dem Haus.' },
    { german: 'zwischen (+D/A)', russian: 'между', example: 'Der Park ist zwischen den beiden Straßen.' },
    { german: 'Wo?', russian: 'Где? (вопрос для Dativ с Wechselpräpositionen)' },
    { german: 'der Tisch (Tische)', russian: 'стол' },
    { german: 'die Wand (Wände)', russian: 'стена' },
    { german: 'das Haus (Häuser)', russian: 'дом' },
    { german: 'im (in dem)', russian: 'в (слияние)' },
    { german: 'am (an dem)', russian: 'на, у (слияние)' },
  ],
  exercises: [
    {
      id: 'a1-praep-dativ-wechsel-ex1',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль: Das Kind spielt ___ (der Garten, м.р.).',
      sentenceParts: ['Das Kind spielt ', ' Garten.'],
      correctAnswer: 'im',
      explanation: 'Вопрос "Wo spielt das Kind?" (Где играет ребенок?). Предлог "in" + Dativ. "Der Garten" (м.р.) в Dativ "dem Garten". "in dem" сливается в "im".',
    },
    {
      id: 'a1-praep-dativ-wechsel-ex2',
      type: 'multiple_choice',
      question: 'Выберите правильный вариант: "Die Bücher sind ___ Regal (das Regal, ср.р.)."',
      options: ['in das', 'im', 'in der', 'in den'],
      correctAnswer: 'im',
      explanation: 'Вопрос "Wo sind die Bücher?". Предлог "in" + Dativ. "Das Regal" (ср.р.) в Dativ "dem Regal". "in dem" сливается в "im".',
    },
    {
      id: 'a1-praep-dativ-wechsel-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Моя куртка висит на двери (die Tür, ж.р.)."',
      prompt: 'Моя куртка висит на двери.',
      languageDirection: 'to_german',
      correctAnswer: 'Meine Jacke hängt an der Tür.',
      explanation: 'Вопрос "Wo hängt meine Jacke?". Предлог "an" + Dativ. "Die Tür" (ж.р.) в Dativ "der Tür".',
    },
    {
      id: 'a1-praep-dativ-wechsel-ex4',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: "Der Ball liegt ___ (das Sofa, ср.р.)."',
      sentenceParts: ['Der Ball liegt ', ' Sofa.'],
      correctAnswer: 'unter dem', // или auf dem, neben dem, vor dem, hinter dem
      explanation: 'Предполагаем, что мяч под диваном. Вопрос "Wo?". "Unter" + Dativ. "Das Sofa" (ср.р.) в Dativ "dem Sofa".',
    },
  ],
};
