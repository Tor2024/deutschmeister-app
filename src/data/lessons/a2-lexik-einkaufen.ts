
import type { Lesson } from '@/types';

export const lessonA2LexikEinkaufen: Lesson = {
  id: 'a2-lexik-einkaufen',
  level: 'A2',
  topic: 'Покупки (Einkaufen)',
  theory: `
В этом уроке мы изучим лексику, необходимую для совершения покупок в различных магазинах, научимся спрашивать о товарах, ценах и оплачивать покупки.

**Основные типы магазинов:**
- **der Supermarkt (-märkte)** - супермаркет
- **die Bäckerei (-en)** - булочная
- **die Metzgerei (-en)** - мясная лавка (также Fleischerei)
- **das Kaufhaus (-häuser)** - универмаг
- **der Markt (Märkte)** - рынок
- **die Apotheke (-n)** - аптека
- **das Modegeschäft (-e)** - магазин модной одежды
- **das Schuhgeschäft (-e)** - обувной магазин
- **das Lebensmittelgeschäft (-e)** - продуктовый магазин

**Люди в магазине:**
- **der Verkäufer (-) / die Verkäuferin (-nen)** - продавец / продавщица
- **der Kunde (-n, -n) / die Kundin (-nen)** - покупатель / покупательница

**Процесс покупки:**
- **kaufen** - покупать
- **verkaufen** - продавать
- **bezahlen** - платить
- **kosten** - стоить
- **suchen** - искать
- **brauchen** - нуждаться
- **aussuchen** - выбирать

**Полезные слова и фразы:**
- *Ich möchte [etwas] kaufen.* (Я хотел бы купить [что-то].)
- *Was kostet das? / Wie viel kostet das?* (Сколько это стоит?)
- *Haben Sie [Brot/Milch/diese Jacke]?* (У вас есть [хлеб/молоко/эта куртка]?)
- *Ich nehme das, bitte.* (Я беру это, пожалуйста.)
- *Kann ich mit Karte bezahlen?* (Могу я заплатить картой?)
- *Kann ich bar bezahlen?* (Могу я заплатить наличными?)
- *Das ist (mir) zu teuer.* (Это (для меня) слишком дорого.)
- *Das ist billig.* (Это дешево.)
- *Ich suche ein Geschenk für meinen Freund.* (Я ищу подарок для моего друга.)
- *Gibt es das auch in einer anderen Farbe/Größe?* (Есть ли это также в другом цвете/размере?)
- *Wo finde ich...?* (Где я могу найти...?)
- **der Preis (-e)** - цена
- **das Geld** - деньги
- **das Sonderangebot (-e) / das Angebot (-e)** - специальное предложение, акция
- **der Rabatt (-e)** - скидка
- **die Rechnung (-en)** - счет (для оплаты)
- **der Kassenzettel (-) / der Bon (-s)** - кассовый чек
- **die Kasse (-n)** - касса
- **die Tüte (-n)** - пакет (бумажный, пластиковый)
- **der Einkaufswagen (-)** - тележка для покупок
- **der Einkaufskorb (-körbe)** - корзина для покупок
`,
  vocabulary: [
    { german: 'der Supermarkt', russian: 'супермаркет', example: 'Im Supermarkt kaufe ich Lebensmittel.' },
    { german: 'die Bäckerei', russian: 'булочная', example: 'Frisches Brot gibt es in der Bäckerei.' },
    { german: 'die Metzgerei', russian: 'мясная лавка', example: 'Ich kaufe Fleisch in der Metzgerei.' },
    { german: 'das Kaufhaus', russian: 'универмаг', example: 'Im Kaufhaus findet man viele verschiedene Dinge.' },
    { german: 'der Markt', russian: 'рынок', example: 'Auf dem Markt gibt es frisches Gemüse.' },
    { german: 'kaufen', russian: 'покупать', example: 'Was möchten Sie kaufen?' },
    { german: 'bezahlen', russian: 'платить', example: 'Ich möchte bitte bezahlen.' },
    { german: 'kosten', russian: 'стоить', example: 'Wie viel kostet dieser Käse?' },
    { german: 'der Preis (-e)', russian: 'цена', example: 'Der Preis ist zu hoch.' },
    { german: 'das Geld', russian: 'деньги', example: 'Haben Sie genug Geld dabei?' },
    { german: 'der Verkäufer / die Verkäuferin', russian: 'продавец / продавщица', example: 'Die Verkäuferin war sehr nett.' },
    { german: 'der Kunde / die Kundin', russian: 'покупатель / покупательница', example: 'Der Kunde ist König.' },
    { german: 'das Angebot (-e)', russian: 'предложение, акция', example: 'Heute gibt es viele Sonderangebote.' },
    { german: 'die Rechnung (-en)', russian: 'счет', example: 'Kann ich bitte die Rechnung haben?' },
    { german: 'die Tüte (-n)', russian: 'пакет', example: 'Brauchen Sie eine Tüte?' },
    { german: 'bar bezahlen', russian: 'платить наличными', example: 'Man kann hier nur bar bezahlen.' },
    { german: 'mit Karte bezahlen', russian: 'платить картой', example: 'Ich bezahle lieber mit Karte.' },
  ],
  exercises: [
    {
      id: 'a2-lexik-einkaufen-ex1',
      type: 'multiple_choice',
      question: 'Где вы обычно покупаете хлеб?',
      options: ['in der Metzgerei', 'in der Bäckerei', 'in der Apotheke', 'im Modegeschäft'],
      correctAnswer: 'in der Bäckerei',
      explanation: 'Хлеб (das Brot) обычно покупают в булочной (die Bäckerei).',
    },
    {
      id: 'a2-lexik-einkaufen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Was ___ diese Äpfel?"',
      sentenceParts: ['Was ', ' diese Äpfel?'],
      correctAnswer: 'kosten',
      explanation: 'Чтобы спросить о цене, используется глагол "kosten".',
    },
    {
      id: 'a2-lexik-einkaufen-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Я хотел бы заплатить картой."',
      prompt: 'Я хотел бы заплатить картой.',
      languageDirection: 'to_german',
      correctAnswer: 'Ich möchte mit Karte bezahlen.',
      explanation: '"Заплатить картой" - "mit Karte bezahlen".',
    },
    {
      id: 'a2-lexik-einkaufen-ex4',
      type: 'multiple_choice',
      question: 'Кто обслуживает покупателей в магазине?',
      options: ['Der Kunde', 'Der Bäcker', 'Der Verkäufer', 'Der Chef'],
      correctAnswer: 'Der Verkäufer',
      explanation: 'Продавец (der Verkäufer / die Verkäuferin) обслуживает покупателей.',
    },
  ],
};
