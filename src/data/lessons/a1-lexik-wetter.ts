
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA1LexikWetter: Lesson = {
  id: 'a1-lexik-wetter',
  level: 'A1',
  topic: 'Погода (Das Wetter)',
  theory: `
В этом уроке мы выучим основные слова и фразы для описания погоды. Умение говорить о погоде - важная часть повседневного общения.

**Основные вопросы о погоде:**
- *Wie ist das Wetter heute?* (Какая сегодня погода?)
- *Scheint die Sonne?* (Солнце светит?)
- *Regnet es?* (Дождь идет?)

**Основные описания погоды:**
- *Es ist sonnig.* (Солнечно.)
- *Es regnet.* (Идет дождь.)
- *Es schneit.* (Идет снег.)
- *Es ist windig.* (Ветрено.)
- *Es ist bewölkt.* (Облачно.)
- *Es ist kalt/warm/heiß/kühl.* (Холодно/тепло/жарко/прохладно.)
`,
  vocabulary: [
    { german: 'das Wetter', russian: 'погода', example: 'Wie ist das Wetter heute?' },
    { german: 'die Sonne', russian: 'солнце', example: 'Die Sonne scheint heute nicht.' },
    { german: 'scheinen (scheint)', russian: 'светить', example: 'Die Sonne scheint.' },
    { german: 'der Regen', russian: 'дождь', example: 'Ich mag den Regen nicht.' },
    { german: 'regnen (es regnet)', russian: 'идти (о дожде)', example: 'Es regnet stark.' },
    { german: 'die Wolke (-n)', russian: 'облако, туча', example: 'Am Himmel sind viele Wolken.' },
    { german: 'wolkig / bewölkt', russian: 'облачно', example: 'Heute ist es bewölkt.' },
    { german: 'der Wind (-e)', russian: 'ветер', example: 'Der Wind ist stark.' },
    { german: 'windig', russian: 'ветрено', example: 'Es ist sehr windig heute.' },
    { german: 'der Schnee', russian: 'снег', example: 'Kinder lieben Schnee.' },
    { german: 'schneien (es schneit)', russian: 'идти (о снеге)', example: 'Im Winter schneit es oft.' },
    { german: 'kalt', russian: 'холодный, холодно', example: 'Mir ist kalt.' },
    { german: 'warm', russian: 'теплый, тепло', example: 'Das Wasser ist warm.' },
    { german: 'heiß', russian: 'жаркий, горячий', example: 'Im Sommer ist es oft heiß.' },
    { german: 'kühl', russian: 'прохладный', example: 'Am Abend wird es kühl.' },
  ],
  readingText: `
Heute ist ein schöner Tag. Die Sonne scheint und der Himmel ist blau. Es sind keine Wolken da.
Der Wind ist nicht stark. Es ist warm, ungefähr 20 Grad.
Gestern war das Wetter nicht so gut. Es hat geregnet und es war ein bisschen kalt.
Ich hoffe, morgen ist das Wetter auch gut.
`,
  readingComprehensionExercises: [
    {
      id: 'a1-lexik-wetter-rq1',
      question: 'Какая погода сегодня, согласно тексту?',
      options: ['Дождливая и холодная', 'Солнечная и теплая', 'Ветреная и облачная', 'Снежная'],
      correctAnswer: 'Солнечная и теплая',
      explanation: 'В тексте сказано: "Die Sonne scheint und der Himmel ist blau... Es ist warm..."',
    },
    {
      id: 'a1-lexik-wetter-rq2',
      question: 'Какая погода была вчера?',
      options: ['Солнечная', 'Жаркая', 'Дождливая и немного холодная', 'Безветренная'],
      correctAnswer: 'Дождливая и немного холодная',
      explanation: 'В тексте сказано: "Gestern war das Wetter nicht so gut. Es hat geregnet und es war ein bisschen kalt."',
    },
  ],
  exercises: [
    {
      id: 'a1-lexik-wetter-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "дождь"?',
      options: ['der Schnee', 'der Wind', 'der Regen', 'die Sonne'],
      correctAnswer: 'der Regen',
      explanation: '"Der Regen" означает "дождь".',
    },
    {
      id: 'a1-lexik-wetter-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Heute ist es sehr ___ (ветрено)."',
      sentenceParts: ['Heute ist es sehr ', '.'],
      correctAnswer: 'windig',
      explanation: '"Ветрено" по-немецки "windig".',
    },
    {
      id: 'a1-lexik-wetter-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Солнце светит."',
      prompt: 'Солнце светит.',
      languageDirection: 'to_german',
      correctAnswer: 'Die Sonne scheint.',
      explanation: '"Солнце" - "die Sonne", "светит" - "scheint".',
    },
    {
      id: 'a1-lexik-wetter-wp1',
      type: 'writing_prompt',
      question: 'Какая сегодня погода в твоем городе? Напиши 1-2 простых предложения.',
      suggestedLength: '1-2 предложения',
    },
  ],
};
