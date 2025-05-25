
import type { Lesson, ReadingComprehensionQuestion } from '@/types';

export const lessonA2LexikBank: Lesson = {
  id: 'a2-lexik-bank',
  level: 'A2',
  topic: 'Простая банковская лексика',
  theory: `
В этом уроке мы познакомимся с базовой лексикой, которая может понадобиться в банке или при использовании банковских услуг.

**Основные понятия:**
- **die Bank (-en)** - банк
- **das Konto (Konten)** - счет (банковский)
- **das Geld** - деньги
- **das Bargeld** - наличные деньги
- **die Karte (-n)** - карта (банковская)
- **der Geldautomat (-en)** - банкомат

**Основные действия:**
- **ein Konto eröffnen** - открыть счет
- **Geld abheben (hebt ab)** - снимать деньги
- **Geld einzahlen** - вносить деньги
- **Geld überweisen (überweist)** - переводить деньги
- **bezahlen** - платить

**Полезные фразы:**
- *Ich möchte ein Konto eröffnen.* (Я хотел бы открыть счет.)
- *Wo ist der nächste Geldautomat?* (Где ближайший банкомат?)
- *Ich muss Geld von meinem Konto abheben.* (Мне нужно снять деньги с моего счета.)
- *Kann ich hier Geld wechseln?* (Могу я здесь обменять деньги?)
`,
  vocabulary: [
    { german: 'die Bank (-en)', russian: 'банк', example: 'Ich gehe zur Bank, um Geld abzuheben.' },
    { german: 'das Konto (Konten)', russian: 'счет (банковский)', example: 'Ich habe ein Konto bei dieser Bank.' },
    { german: 'das Geld', russian: 'деньги (без мн.ч. в знач. "деньги вообще")', example: 'Hast du genug Geld dabei?' },
    { german: 'das Bargeld', russian: 'наличные деньги', example: 'Ich bezahle lieber mit Bargeld.' },
    { german: 'die Bankkarte (-n) / die EC-Karte (-n)', russian: 'банковская карта / дебетовая карта', example: 'Kann ich mit Bankkarte bezahlen?' },
    { german: 'die Kreditkarte (-n)', russian: 'кредитная карта' },
    { german: 'der Geldautomat (-en)', russian: 'банкомат', example: 'Der nächste Geldautomat ist um die Ecke.' },
    { german: 'ein Konto eröffnen', russian: 'открыть счет', example: 'Was brauche ich, um ein Konto zu eröffnen?' },
    { german: 'Geld abheben (hebt ab)', russian: 'снимать деньги (с банкомата/счета)', example: 'Ich möchte 100 Euro abheben.' },
    { german: 'Geld einzahlen', russian: 'вносить деньги (на счет)', example: 'Kann ich hier Geld auf mein Konto einzahlen?' },
    { german: 'Geld überweisen (überweist)', russian: 'переводить деньги', example: 'Ich muss Geld an meinen Freund überweisen.' },
    { german: 'die Überweisung (-en)', russian: 'денежный перевод' },
    { german: 'bezahlen', russian: 'платить, оплачивать', example: 'Wie möchten Sie bezahlen?' },
    { german: 'der Kontostand (Kontostände)', russian: 'состояние счета, баланс', example: 'Können Sie mir meinen Kontostand sagen?' },
    { german: 'die PIN (Persönliche Identifikationsnummer)', russian: 'ПИН-код', example: 'Vergessen Sie Ihre PIN nicht!' },
  ],
  readingText: `
Anna geht heute zur Bank. Sie möchte ein neues Konto eröffnen, weil sie bald einen Job anfängt und ihr Gehalt dorthin überwiesen werden soll.
Am Schalter spricht sie mit einer Bankangestellten. Die Angestellte ist sehr freundlich und erklärt Anna alles. Anna muss ein Formular ausfüllen und ihren Ausweis zeigen.
Nachdem das Konto eröffnet ist, fragt Anna: "Wo ist der nächste Geldautomat? Ich möchte gleich etwas Bargeld abheben." Die Bankangestellte zeigt ihr den Weg. Anna ist zufrieden und bedankt sich.
`,
  readingComprehensionExercises: [
    {
      id: 'a2-lexik-bank-rq1',
      question: 'Почему Анна хочет открыть новый счет?',
      options: ['Чтобы получить кредит', 'Потому что она скоро начнет работать и туда будет перечисляться зарплата', 'Чтобы обменять валюту', 'Чтобы оплатить счета'],
      correctAnswer: 'Потому что она скоро начнет работать и туда будет перечисляться зарплата',
      explanation: 'В тексте сказано: "...weil sie bald einen Job anfängt und ihr Gehalt dorthin überwiesen werden soll."',
    },
    {
      id: 'a2-lexik-bank-rq2',
      question: 'Что делает Анна после открытия счета?',
      options: ['Оплачивает счета', 'Переводит деньги другу', 'Спрашивает, где ближайший банкомат, чтобы снять наличные', 'Закрывает свой старый счет'],
      correctAnswer: 'Спрашивает, где ближайший банкомат, чтобы снять наличные',
      explanation: 'В тексте: "fragt Anna: \'Wo ist der nächste Geldautomat? Ich möchte gleich etwas Bargeld abheben.\'"',
    },
  ],
  exercises: [
    {
      id: 'a2-lexik-bank-ex1',
      type: 'multiple_choice',
      question: 'Как по-немецки "банкомат"?',
      options: ['die Bank', 'das Konto', 'der Geldautomat', 'die Kasse'],
      correctAnswer: 'der Geldautomat',
      explanation: '"Der Geldautomat" означает "банкомат".',
    },
    {
      id: 'a2-lexik-bank-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Ich möchte ___ von meinem Konto abheben."',
      sentenceParts: ['Ich möchte ', ' von meinem Konto abheben.'],
      correctAnswer: 'Geld',
      explanation: '"Geld abheben" означает "снимать деньги".',
    },
    {
      id: 'a2-lexik-bank-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я хочу открыть счет."',
      prompt: 'Я хочу открыть счет.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich möchte ein Konto eröffnen.',
      explanation: '"Открыть счет" - "ein Konto eröffnen".',
    },
    {
      id: 'a2-lexik-bank-wp1',
      type: 'writing_prompt',
      question: 'Welche Bankdienstleistungen nutzen Sie manchmal? (Какими банковскими услугами вы иногда пользуетесь? 1-2 предложения)',
      suggestedLength: '1-2 предложения',
    },
  ],
};

    