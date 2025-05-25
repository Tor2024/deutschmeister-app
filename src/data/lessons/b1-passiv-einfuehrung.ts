
import type { Lesson } from '@/types';

// --- Урок B1: Пассивный залог (Passiv) - Введение ---
export const lessonB1PassivEinfuehrung: Lesson = {
  id: 'b1-passiv-einfuehrung',
  level: 'B1',
  topic: 'Пассивный залог (Passiv) - Введение',
  theory: `Пассивный залог (Passiv) используется в немецком языке, когда само действие или его результат важнее, чем исполнитель этого действия. Часто исполнитель неизвестен, неважен или его не хотят называть. На уровне B1 мы сосредоточимся на **Vorgangspassiv** (пассив действия/процесса).

**1. Что такое Vorgangspassiv?**
   Vorgangspassiv описывает само действие или процесс, который совершается над подлежащим. Подлежащее в пассивном предложении является объектом действия в активном предложении.

**2. Образование Vorgangspassiv:**
   Vorgangspassiv образуется с помощью вспомогательного глагола **werden** (в соответствующей временной форме) и **Partizip II** (причастия II) смыслового глагола.
   Формула: **werden (спрягаемая форма) + ... + Partizip II**

**3. Vorgangspassiv в Präsens (Настоящее время):**
   Вспомогательный глагол \`werden\` спрягается в Präsens.
   Спряжение \`werden\` в Präsens:
   - ich werde
   - du wirst
   - er/sie/es **wird**
   - wir werden
   - ihr werdet
   - sie/Sie werden

   *Примеры:*
   - *Das Auto **wird repariert**.* (Машину ремонтируют. / Машина ремонтируется.)
   - *Die Tür **wird geöffnet**.* (Дверь открывают. / Дверь открывается.)
   - *Viele Häuser **werden gebaut**.* (Многие дома строятся. / Строят много домов.)

**4. Vorgangspassiv в Präteritum (Прошедшее время):**
   Вспомогательный глагол \`werden\` спрягается в Präteritum.
   Спряжение \`werden\` в Präteritum:
   - ich wurde
   - du wurdest
   - er/sie/es **wurde**
   - wir wurden
   - ihr wurdet
   - sie/Sie wurden

   *Примеры:*
   - *Das Auto **wurde repariert**.* (Машину отремонтировали. / Машина была отремонтирована.)
   - *Die Tür **wurde geöffnet**.* (Дверь открыли. / Дверь была открыта.)
   - *Die Brücke **wurde** letztes Jahr **gebaut**.* (Мост был построен в прошлом году.)

**5. Указание исполнителя действия (Agens):**
   Если необходимо указать, кем совершено действие, используется предлог **von + Dativ**.
   *Примеры:*
   - *Das Buch **wird von dem Studenten gelesen**.* (Книга читается студентом.)
   - *Der Brief **wurde von meiner Schwester geschrieben**.* (Письмо было написано моей сестрой.)

**Порядок слов:**
- В главном предложении спрягаемая форма \`werden\` стоит на втором месте, а Partizip II – в конце.
- В вопросительном предложении без вопросительного слова спрягаемая форма \`werden\` стоит на первом месте.

Это основы пассивного залога. Более сложные формы и Zustandspassiv (пассив состояния) рассматриваются на более высоких уровнях.`,
  vocabulary: [
    { german: 'werden (Präsens: wird)', russian: 'становиться (вспомогательный глагол для пассива в настоящем времени)', example: 'Das Essen wird gekocht.' },
    { german: 'werden (Präteritum: wurde)', russian: 'становился (вспомогательный глагол для пассива в прошлом времени)', example: 'Der Film wurde gezeigt.' },
    { german: 'das Partizip II', russian: 'причастие II', example: 'gebaut, gelesen, gemacht' },
    { german: 'von + Dativ', russian: 'от, кем (для указания исполнителя действия в пассиве)', example: 'Der Kuchen wurde von meiner Mutter gebacken.' },
    { german: 'reparieren (repariert)', russian: 'ремонтировать (отремонтированный)', example: 'Das Fahrrad wird repariert.' },
    { german: 'bauen (gebaut)', russian: 'строить (построенный)', example: 'Ein neues Haus wurde gebaut.' },
    { german: 'öffnen (geöffnet)', russian: 'открывать (открытый)', example: 'Das Fenster wird geöffnet.' },
    { german: 'schreiben (geschrieben)', russian: 'писать (написанный)', example: 'Ein Brief wird geschrieben.' },
    { german: 'kochen (gekocht)', russian: 'готовить (приготовленный)', example: 'Die Suppe wurde gekocht.' },
    { german: 'lesen (gelesen)', russian: 'читать (прочитанный)', example: 'Das Buch wird von vielen Menschen gelesen.' },
  ],
  exercises: [
    {
      id: 'b1-passiv-einf-ex1',
      type: 'multiple_choice',
      question: 'Преобразуйте предложение в Präsens Passiv: "Der Mechaniker repariert das Auto."',
      options: [
        'Das Auto repariert den Mechaniker.',
        'Das Auto wird repariert.',
        'Das Auto ist repariert worden.',
        'Das Auto wurde repariert.'
      ],
      correctAnswer: 'Das Auto wird repariert.',
      explanation: 'Präsens Passiv: Subjekt (Das Auto) + wird + Partizip II (repariert).',
    },
    {
      id: 'b1-passiv-einf-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму вспомогательного глагола (Präteritum Passiv): Die E-Mail ___ gestern ___. (schicken)',
      sentenceParts: ['Die E-Mail ', ' gestern ', '.'],
      correctAnswer: 'wurde, geschickt',
      explanation: 'Präteritum Passiv: wurde + Partizip II (geschickt). "Die E-Mail wurde gestern geschickt."',
    },
    {
      id: 'b1-passiv-einf-ex3',
      type: 'translation',
      question: 'Переведите на немецкий (Präsens Passiv): "Эти цветы продаются здесь."',
      prompt: 'Эти цветы продаются здесь.',
      languageDirection: 'to_german',
      correctAnswer: 'Diese Blumen werden hier verkauft.',
      explanation: 'Präsens Passiv: werden + Partizip II (verkauft).',
    },
    {
      id: 'b1-passiv-einf-ex4',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение в Präteritum Passiv:',
      options: [
        'Der Kuchen hat von Oma gebacken.',
        'Der Kuchen wurde von Oma gebacken.',
        'Der Kuchen ist von Oma gebacken worden.'
      ],
      correctAnswer: 'Der Kuchen wurde von Oma gebacken.',
      explanation: 'Präteritum Passiv образуется с "wurde" + Partizip II. Исполнитель действия указывается с "von + Dativ".',
    },
    {
      id: 'b1-passiv-einf-ex5',
      type: 'fill_in_the_blank',
      question: 'Преобразуйте в Präsens Passiv: "Man spricht Deutsch in diesem Kurs."',
      sentenceParts: ['Deutsch ', ' in diesem Kurs ', '.'],
      correctAnswer: 'wird, gesprochen',
      explanation: 'Präsens Passiv: "Deutsch" становится подлежащим, "wird gesprochen".',
    },
  ],
};
