
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikErnaehrungRezepte: Lesson = {
  id: 'a2-lexik-ernaehrung-rezepte',
  level: 'A2',
  topic: 'Питание, рецепты и предпочтения в еде',
  theory: `
В этом уроке мы расширим наш словарный запас по теме "Еда и напитки", научимся говорить о предпочтениях в еде, понимать простые рецепты и более уверенно общаться в ресторане.

**Основные приемы пищи:**
- **das Frühstück (-e)** - завтрак
- **das Mittagessen (-)** - обед
- **das Abendessen (-)** - ужин
- **der Nachtisch (-e) / das Dessert (-s)** - десерт

**Глаголы, связанные с приготовлением и едой:**
- **kochen** - готовить (варить)
- **backen (bäckt/backt)** - печь
- **braten (brät)** - жарить
- **schneiden (schneidet, schnitt, hat geschnitten)** - резать
- **probieren** - пробовать (на вкус)
- **bestellen** - заказывать
- **empfehlen (empfiehlt, empfahl, hat empfohlen)** - рекомендовать
- **schmecken** - быть на вкус, нравиться (о еде)

**Полезные слова:**
- **das Rezept (-e)** - рецепт
- **die Zutat (-en)** - ингредиент
- **das Gericht (-e)** - блюдо
- **die Speisekarte (-n)** - меню (в ресторане)
- **der Geschmack (Geschmäcker)** - вкус
- **süß** - сладкий
- **sauer** - кислый
- **salzig** - соленый
- **bitter** - горький
- **scharf** - острый
- **lecker** - вкусный
- **frisch** - свежий
- **fettig** - жирный

**Фразы для общения:**
- *Was ist dein Lieblingsessen?* (Какое твое любимое блюдо?)
- *Mein Lieblingsessen ist Pizza.* (Мое любимое блюдо - пицца.)
- *Ich esse gern Fisch, aber ich esse nicht gern Fleisch.* (Я люблю есть рыбу, но не люблю есть мясо.)
- *Das schmeckt mir (nicht) gut.* (Это мне (не) нравится на вкус.)
- *Ich hätte gern einen Salat.* (Я бы хотел салат.)
- *Was können Sie empfehlen?* (Что Вы можете порекомендовать?)
- *Die Rechnung, bitte!* (Счет, пожалуйста!)
- *Kann ich bitte die Speisekarte haben?* (Можно мне, пожалуйста, меню?)
`,
  vocabulary: [
    { german: 'das Frühstück (-e)', russian: 'завтрак', example: 'Was isst du zum Frühstück?' },
    { german: 'das Mittagessen (-)', russian: 'обед', example: 'Das Mittagessen ist um 13 Uhr.' },
    { german: 'das Abendessen (-)', russian: 'ужин', example: 'Wir kochen heute Abendessen zusammen.' },
    { german: 'der Nachtisch (-e)', russian: 'десерт', example: 'Als Nachtisch gibt es Eis.' },
    { german: 'kochen', russian: 'готовить (варить)', example: 'Meine Mutter kocht sehr gut.' },
    { german: 'backen (bäckt)', russian: 'печь', example: 'Ich backe gern Kuchen.' },
    { german: 'braten (brät)', russian: 'жарить', example: 'Wir braten heute Hähnchen.' },
    { german: 'schneiden', russian: 'резать', example: 'Kannst du das Gemüse schneiden?' },
    { german: 'probieren', russian: 'пробовать (на вкус)', example: 'Probier mal die Suppe!' },
    { german: 'bestellen', russian: 'заказывать', example: 'Wir möchten zwei Kaffee bestellen.' },
    { german: 'empfehlen (empfiehlt)', russian: 'рекомендовать', example: 'Was können Sie uns empfehlen?' },
    { german: 'das Rezept (-e)', russian: 'рецепт', example: 'Hast du ein gutes Rezept für Apfelkuchen?' },
    { german: 'die Zutat (-en)', russian: 'ингредиент', example: 'Welche Zutaten brauchen wir?' },
    { german: 'das Gericht (-e)', russian: 'блюдо', example: 'Dieses Gericht ist sehr beliebt.' },
    { german: 'die Speisekarte (-n)', russian: 'меню (в ресторане)', example: 'Können wir bitte die Speisekarte sehen?' },
    { german: 'süß', russian: 'сладкий' },
    { german: 'sauer', russian: 'кислый' },
    { german: 'salzig', russian: 'соленый' },
    { german: 'scharf', russian: 'острый' },
    { german: 'lecker', russian: 'вкусный' },
  ],
  readingText: `
Anna und Paul gehen heute Abend in ein italienisches Restaurant. Sie haben einen Tisch für zwei Personen reserviert.
Der Kellner bringt ihnen die Speisekarte. Paul möchte gern eine Pizza Salami bestellen. Anna ist sich nicht sicher. Sie fragt den Kellner: "Was können Sie heute empfehlen?" Der Kellner empfiehlt die Lasagne. Anna probiert gern neue Gerichte und bestellt die Lasagne.
Zum Trinken bestellen sie eine Flasche Wasser und ein Glas Rotwein für Paul. Das Essen schmeckt beiden sehr gut.
Nach dem Hauptgericht fragt der Kellner, ob sie einen Nachtisch möchten. Anna nimmt ein Tiramisu und Paul einen Espresso. Sie sind sehr zufrieden mit dem Abend.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-ernaehrung-rezepte-rq1',
      question: 'Что заказал Пауль в качестве основного блюда?',
      options: ['Лазанью', 'Салат', 'Пиццу Салями', 'Тирамису'],
      correctAnswer: 'Пиццу Салями',
      explanation: 'В тексте сказано: "Paul möchte gern eine Pizza Salami bestellen."',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-rq2',
      question: 'Какое блюдо порекомендовал Анне официант?',
      options: ['Пиццу', 'Спагетти', 'Лазанью', 'Рыбу'],
      correctAnswer: 'Лазанью',
      explanation: 'В тексте сказано: "Der Kellner empfiehlt die Lasagne."',
    }
  ],
  exercises: [
    {
      id: 'a2-lexik-ernaehrung-rezepte-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "заказывать"?',
      options: ['kochen', 'backen', 'bestellen', 'probieren'],
      correctAnswer: 'bestellen',
      explanation: '"Bestellen" означает "заказывать".',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Dieses Gericht ist sehr ___ (острый)."',
      sentenceParts: ['Dieses Gericht ist sehr ', '.'],
      correctAnswer: 'scharf',
      explanation: '"Острый" по-немецки "scharf".',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Что Вы можете порекомендовать?"',
      prompt: 'Что Вы можете порекомендовать?',
      languageDirection: 'to_german',
      correctAnswer: 'Was können Sie empfehlen?',
      explanation: '"Рекомендовать" - "empfehlen".',
    },
    {
      id: 'a2-lexik-ernaehrung-rezepte-wp1',
      type: 'writing_prompt',
      question: 'Was ist dein Lieblingsessen und warum? Schreibe 2-3 Sätze. (Какое твое любимое блюдо и почему? Напиши 2-3 предложения.)',
      suggestedLength: '2-3 предложения'
    }
  ],
};
