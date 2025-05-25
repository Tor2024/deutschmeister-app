
import type { Lesson } from '@/types';

// --- Урок A2: Порядок слов в предложении (Satzbau) ---
export const lessonA2Satzbau: Lesson = {
  id: 'a2-satzbau',
  level: 'A2',
  topic: 'Порядок слов в предложении (Satzbau)',
  theory: \`Порядок слов в немецком предложении имеет строгие правила, особенно это касается положения глагола.

**1. Главное предложение (Hauptsatz)**

*   **Утвердительное предложение (Aussagesatz):**
    *   **Прямой порядок слов:** Подлежащее (Subjekt) - Спрягаемый глагол (Prädikat) - Остальные члены предложения.
        *Пример: Ich **lerne** Deutsch. (Я учу немецкий.)*
        *Пример: Der Lehrer **kommt** heute. (Учитель придет сегодня.)*
    *   **Обратный порядок слов:** Любой второстепенный член предложения (кроме подлежащего) - Спрягаемый глагол - Подлежащее - Остальные члены.
        Это часто используется для выделения второстепенного члена, который ставится на первое место.
        *Пример: Heute **kommt** der Lehrer. (Сегодня придет учитель.)*
        *Пример: Deutsch **lerne** ich gern. (Немецкий я учу охотно.)*
    *   **Место глагола:** Спрягаемая часть глагола (которая изменяется по лицам и числам) **всегда стоит на втором месте** в утвердительном главном предложении.
    *   **Рамочная конструкция (Satzklammer):** Если сказуемое состоит из двух частей (например, модальный глагол + инфинитив, вспомогательный глагол в Perfekt + Partizip II, глагол с отделяемой приставкой), то изменяемая часть глагола стоит на втором месте, а неизменяемая – в конце предложения.
        *Модальный глагол: Er **kann** gut Klavier **spielen**. (Он умеет хорошо играть на пианино.)*
        *Perfekt: Ich **habe** das Buch **gelesen**. (Я прочитал книгу.)*
        *Отделяемая приставка: Der Zug **kommt** um 10 Uhr **an**. (Поезд прибывает в 10 часов.)*

*   **Вопросительное предложение (Fragesatz):**
    *   **Общий вопрос (Ja/Nein-Frage – без вопросительного слова):** Спрягаемый глагол - Подлежащее - Остальные члены?
        *Пример: **Lernst** du Deutsch? (Ты учишь немецкий?)*
        *Пример: **Kannst** du mir helfen? (Ты можешь мне помочь?)*
    *   **Специальный вопрос (W-Frage – с вопросительным словом):** Вопросительное слово (Was, Wer, Wo, Wann, Warum, Wie и т.д.) - Спрягаемый глагол - Подлежащее - Остальные члены?
        *Пример: Was **lernst** du? (Что ты учишь?)*
        *Пример: Wann **kommt** der Lehrer? (Когда придет учитель?)*

*   **Повелительное предложение (Aufforderungssatz / Imperativsatz):**
    Спрягаемый глагол в форме Imperativ - (Остальные члены, если есть). Местоимение опускается для 'du' и 'ihr', но используется для 'Sie' и 'wir'.
    *Пример: **Lies** das Buch! (Читай книгу! – для du)*
    *Пример: **Kommen Sie** bitte herein! (Заходите, пожалуйста! – для Sie)*
    *Пример: **Gehen wir** ins Kino! (Пойдем(те) в кино! – для wir)*

**2. Придаточное предложение (Nebensatz)**
Придаточные предложения обычно вводятся союзами (например, dass, weil, wenn, ob) и зависят от главного предложения.
*   **Основное правило:** В придаточном предложении спрягаемый глагол **всегда стоит в самом конце**.
    *Пример: Ich weiß, dass du heute **kommst**. (Я знаю, что ты сегодня придешь.)*
    *Пример: Wir bleiben zu Hause, weil das Wetter schlecht **ist**. (Мы остаемся дома, потому что погода плохая.)*
*   **С модальными глаголами:** Модальный глагол (спрягаемая форма) идет в конец, инфинитив смыслового глагола стоит перед ним.
    *Пример: Er sagt, dass er gut singen **kann**. (Он говорит, что умеет хорошо петь.)*
*   **В Perfekt:** Вспомогательный глагол (haben/sein в спрягаемой форме) идет в конец, Partizip II стоит перед ним.
    *Пример: Sie freut sich, weil sie die Prüfung bestanden **hat**. (Она радуется, потому что сдала экзамен.)*
*   **С отделяемыми приставками:** В придаточном предложении отделяемая приставка **не отделяется** и глагол с ней стоит в конце как одно слово.
    *Пример: Ich hoffe, dass der Zug pünktlich **ankommt**. (Я надеюсь, что поезд прибудет вовремя.)*

**Запятая:** Главное и придаточное предложения всегда разделяются запятой.

Понимание этих правил необходимо для построения грамчески правильных и понятных немецких предложений.
\`,
  vocabulary: [
    { german: 'der Satzbau', russian: 'построение предложения, порядок слов', example: 'Der deutsche Satzbau ist manchmal kompliziert.' },
    { german: 'das Hauptsatz (Hauptsätze)', russian: 'главное предложение', example: 'Ein Hauptsatz kann alleine stehen.' },
    { german: 'das Nebensatz (Nebensätze)', russian: 'придаточное предложение', example: 'Ein Nebensatz hängt vom Hauptsatz ab.' },
    { german: 'das Subjekt', russian: 'подлежащее', example: 'Das Subjekt steht oft am Anfang.' },
    { german: 'das Prädikat (Verb)', russian: 'сказуемое (глагол)', example: 'Das Prädikat steht im Hauptsatz an zweiter Stelle.' },
    { german: 'das Objekt', russian: 'дополнение (Akkusativobjekt, Dativobjekt)', example: 'Ich sehe den Mann (Akkusativobjekt).' },
    { german: 'die Satzklammer', russian: 'рамочная конструкция', example: 'Modalverben bilden eine Satzklammer mit dem Infinitiv.' },
    { german: 'der Aussagesatz', russian: 'утвердительное (повествовательное) предложение' },
    { german: 'der Fragesatz', russian: 'вопросительное предложение' },
    { german: 'die W-Frage', russian: 'специальный вопрос (с вопросительным словом)' },
    { german: 'die Ja/Nein-Frage', russian: 'общий вопрос (да/нет вопрос)' },
    { german: 'die Konjunktion (Subjunktion)', russian: 'союз (подчинительный союз)', example: ' "dass", "weil", "wenn" sind Konjunktionen.' },
    { german: 'dass', russian: 'что, чтобы (союз)', example: 'Ich denke, dass es regnen wird.' },
    { german: 'weil', russian: 'потому что, так как (союз)', example: 'Er kommt nicht, weil er krank ist.' },
    { german: 'ob', russian: 'ли (союз в косвенном вопросе)', example: 'Ich weiß nicht, ob er kommt.' },
    { german: 'wenn', russian: 'если; когда (союз)', example: 'Wenn du Zeit hast, ruf mich an.' },
  ],
  exercises: [
    {
      id: 'a2-satzbau-ex1',
      type: 'multiple_choice',
      question: 'Какое предложение имеет правильный порядок слов (прямой)?',
      options: [
        'Deutsch ich lerne gern.',
        'Ich lerne gern Deutsch.',
        'Lerne ich Deutsch gern.'
      ],
      correctAnswer: 'Ich lerne gern Deutsch.',
      explanation: 'Прямой порядок слов: Подлежащее (Ich) - Глагол (lerne) - Остальные члены (gern Deutsch).',
    },
    {
      id: 'a2-satzbau-ex2',
      type: 'fill_in_the_blank',
      question: 'Поставьте глагол "können" в правильную позицию: Du ___ mir helfen.',
      sentenceParts: ['Du ', ' mir helfen.'],
      correctAnswer: 'kannst',
      explanation: 'В утвердительном предложении спрягаемый глагол (kannst) стоит на втором месте.',
    },
    {
      id: 'a2-satzbau-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Когда ты придёшь домой?"',
      prompt: 'Когда ты придёшь домой?',
      languageDirection: 'to_german',
      correctAnswer: 'Wann kommst du nach Hause?',
      explanation: 'Специальный вопрос: Вопросительное слово (Wann) - Глагол (kommst) - Подлежащее (du) - Остальные члены (nach Hause).',
    },
    {
      id: 'a2-satzbau-ex4',
      type: 'multiple_choice',
      question: 'Выберите правильный порядок слов в придаточном предложении: "Ich weiß nicht, ..." ',
      options: [
        'ob er heute kommt.',
        'ob kommt er heute.',
        'kommt er ob heute.'
      ],
      correctAnswer: 'ob er heute kommt.',
      explanation: 'В придаточном предложении, вводимом союзом "ob", спрягаемый глагол (kommt) ставится в самый конец.',
    },
    {
      id: 'a2-satzbau-ex5',
      type: 'fill_in_the_blank',
      question: 'Составьте предложение с обратным порядком слов, начиная с "Morgen": (ich, gehen, ins Kino, morgen)',
      sentenceParts: ['Morgen ', ' ins Kino.'], // gehe ich
      correctAnswer: 'gehe ich',
      explanation: 'Обратный порядок слов: Обстоятельство (Morgen) - Глагол (gehe) - Подлежащее (ich) - Остальные члены (ins Kino).',
    },
    {
      id: 'a2-satzbau-ex6',
      type: 'translation',
      question: 'Переведите на немецкий: "Он не пришел, потому что он был болен."',
      prompt: 'Он не пришел, потому что он был болен.',
      languageDirection: 'to_german',
      correctAnswer: 'Er ist nicht gekommen, weil er krank war.',
      explanation: 'Главное предложение в Perfekt. Придаточное причины с "weil", глагол "war" в конце.',
    },
    {
      id: 'a2-satzbau-ex7',
      type: 'multiple_choice',
      question: 'Где стоит отделяемая приставка в главном предложении?',
      options: [
        'В начале предложения',
        'Сразу после глагола',
        'В конце предложения',
        'Перед подлежащим'
      ],
      correctAnswer: 'В конце предложения',
      explanation: 'В главном предложении отделяемая приставка всегда стоит в конце (например, "Ich rufe dich morgen an.").',
    },
  ],
};
