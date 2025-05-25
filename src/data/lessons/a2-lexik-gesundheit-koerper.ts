
import type { Lesson } from '@/types';

export const lessonA2LexikGesundheitKoerper: Lesson = {
  id: 'a2-lexik-gesundheit-koerper',
  level: 'A2',
  topic: 'Здоровье и тело (Gesundheit und Körper)',
  theory: `
В этом уроке мы выучим основную лексику, связанную со здоровьем, частями тела и посещением врача. Эта лексика поможет вам описать свое самочувствие и обратиться за помощью при необходимости.

**Основные части тела (Körperteile):**
- der Kopf (голова)
- das Gesicht (лицо)
- das Auge (-n) (глаз)
- die Nase (-n) (нос)
- der Mund (Münder) (рот)
- das Ohr (-en) (ухо)
- der Zahn (Zähne) (зуб)
- der Hals (Hälse) (шея, горло)
- die Schulter (-n) (плечо)
- der Arm (-e) (рука - от плеча до кисти)
- die Hand (Hände) (рука - кисть)
- der Finger (-) (палец руки)
- der Rücken (-) (спина)
- der Bauch (Bäuche) (живот)
- das Bein (-e) (нога - от бедра до стопы)
- der Fuß (Füße) (стопа)
- der Zeh (-en) (палец ноги)

**Симптомы и болезни (Symptome und Krankheiten):**
- Schmerzen haben (иметь боли) - *Ich habe Kopfschmerzen.* (У меня головная боль.)
- weh tun (болеть - о части тела) - *Mein Kopf tut weh.* (Моя голова болит.)
- der Schmerz (-en) (боль)
- die Kopfschmerzen (Pl.) (головная боль)
- die Bauchschmerzen (Pl.) (боль в животе)
- die Halsschmerzen (Pl.) (боль в горле)
- der Husten (кашель) - *Ich habe Husten.*
- der Schnupfen (насморк) - *Ich habe Schnupfen.*
- das Fieber (температура, жар) - *Er hat Fieber.*
- die Erkältung (-en) (простуда) - *Ich habe eine Erkältung.*
- die Grippe (грипп)
- krank (больной) - *Ich bin krank.*
- gesund (здоровый) - *Ich bin wieder gesund.*

**У врача (Beim Arzt):**
- der Arzt (Ärzte) / die Ärztin (-nen) (врач)
- der Zahnarzt / die Zahnärztin (стоматолог)
- das Krankenhaus (Krankenhäuser) (больница)
- die Apotheke (-n) (аптека)
- das Medikament (-e) (лекарство)
- das Rezept (-e) (рецепт)
- einen Termin beim Arzt machen/haben (записаться/быть записанным к врачу)

**Полезные фразы:**
- *Wie fühlen Sie sich? / Wie fühlst du dich?* (Как Вы/ты себя чувствуете?)
- *Ich fühle mich nicht gut/schlecht/krank.* (Я чувствую себя нехорошо/плохо/больным.)
- *Was fehlt Ihnen? / Was fehlt dir?* (Что у Вас/тебя болит? / На что жалуетесь?)
- *Ich brauche ein Medikament gegen Kopfschmerzen.* (Мне нужно лекарство от головной боли.)
`,
  vocabulary: [
    { german: 'der Kopf (Köpfe)', russian: 'голова' },
    { german: 'das Auge (-n)', russian: 'глаз' },
    { german: 'die Nase (-n)', russian: 'нос' },
    { german: 'der Mund (Münder)', russian: 'рот' },
    { german: 'das Ohr (-en)', russian: 'ухо' },
    { german: 'der Hals (Hälse)', russian: 'шея, горло' },
    { german: 'der Arm (-e)', russian: 'рука (от плеча до кисти)' },
    { german: 'die Hand (Hände)', russian: 'рука (кисть)' },
    { german: 'der Bauch (Bäuche)', russian: 'живот' },
    { german: 'das Bein (-e)', russian: 'нога' },
    { german: 'der Fuß (Füße)', russian: 'стопа' },
    { german: 'Schmerzen haben', russian: 'иметь боли', example: 'Ich habe Rückenschmerzen.' },
    { german: 'weh tun (tut weh)', russian: 'болеть (о части тела)', example: 'Mein Zahn tut weh.' },
    { german: 'der Husten', russian: 'кашель' },
    { german: 'der Schnupfen', russian: 'насморк' },
    { german: 'das Fieber', russian: 'температура, жар' },
    { german: 'krank', russian: 'больной', example: 'Er ist heute krank.' },
    { german: 'gesund', russian: 'здоровый', example: 'Sport ist gesund.' },
    { german: 'der Arzt (Ärzte) / die Ärztin (-nen)', russian: 'врач', example: 'Ich muss zum Arzt gehen.' },
    { german: 'das Medikament (-e)', russian: 'лекарство', example: 'Nehmen Sie dieses Medikament dreimal täglich.' },
    { german: 'die Apotheke (-n)', russian: 'аптека' },
    { german: 'sich fühlen', russian: 'чувствовать себя', example: 'Wie fühlen Sie sich?' },
  ],
  readingText: `
Gestern ging es Paul nicht gut. Er hatte Kopfschmerzen und sein Hals tat weh. Seine Mutter sagte: "Du hast vielleicht eine Erkältung. Du musst im Bett bleiben."
Paul blieb den ganzen Tag im Bett. Er trank viel warmen Tee mit Honig. Seine Mutter gab ihm auch ein Medikament gegen die Halsschmerzen. Am Abend fühlte sich Paul schon ein bisschen besser. Er hatte kein Fieber.
Heute Morgen ist Paul wieder gesund. Er kann zur Schule gehen. Seine Mutter sagt: "Zieh dich warm an! Es ist kalt draußen."
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-gesundheit-koerper-rq1',
      question: 'Какие симптомы были у Пауля вчера?',
      options: ['Боль в животе и насморк', 'Головная боль и боль в горле', 'Кашель и температура', 'Боль в спине и усталость'],
      correctAnswer: 'Головная боль и боль в горле',
      explanation: 'В тексте сказано: "Er hatte Kopfschmerzen und sein Hals tat weh."'
    },
    {
      id: 'a2-lexik-gesundheit-koerper-rq2',
      question: 'Что делал Пауль, когда болел?',
      options: ['Играл в футбол', 'Ходил в школу', 'Пил холодную воду', 'Оставался в постели и пил теплый чай'],
      correctAnswer: 'Оставался в постели и пил теплый чай',
      explanation: 'В тексте сказано: "Paul blieb den ganzen Tag im Bett. Er trank viel warmen Tee mit Honig."'
    },
    {
      id: 'a2-lexik-gesundheit-koerper-rq3',
      question: 'Как Пауль чувствует себя сегодня утром?',
      options: ['Ему хуже', 'Ему все еще нехорошо', 'Он снова здоров', 'У него высокая температура'],
      correctAnswer: 'Он снова здоров',
      explanation: 'В тексте сказано: "Heute Morgen ist Paul wieder gesund."'
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-gesundheit-koerper-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "головная боль"?',
      options: ['der Schnupfen', 'der Husten', 'die Kopfschmerzen', 'das Fieber'],
      correctAnswer: 'die Kopfschmerzen',
      explanation: '"Die Kopfschmerzen" (обычно во мн.ч.) означает "головная боль".',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Mein Bein ___ weh."',
      sentenceParts: ['Mein Bein ', ' weh.'],
      correctAnswer: 'tut',
      explanation: 'Выражение "weh tun" (болеть). Для "mein Bein" (оно) глагол "tun" имеет форму "tut".',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я болен и у меня температура."',
      prompt: 'Я болен и у меня температура.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich bin krank und habe Fieber.',
      explanation: '"Я болен" - "Ich bin krank", "и" - "und", "у меня температура" - "ich habe Fieber".',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-ex4',
      type: 'multiple_choice',
      question: 'Где можно купить лекарства?',
      options: ['im Krankenhaus', 'beim Arzt', 'in der Apotheke', 'in der Schule'],
      correctAnswer: 'in der Apotheke',
      explanation: 'Лекарства (Medikamente) покупают в аптеке (in der Apotheke).',
    },
    {
      id: 'a2-lexik-gesundheit-koerper-wp1',
      type: 'writing_prompt',
      question: 'Was machst du, wenn du dich nicht gut fühlst? Schreibe 2-3 Sätze. (Что ты делаешь, когда плохо себя чувствуешь? Напиши 2-3 предложения.)',
      suggestedLength: '2-3 предложения'
    }
  ],
};
