
import type { Lesson } from '@/types';

export const lessonB2LexikUmweltNachhaltigkeit: Lesson = {
  id: 'b2-lexik-umwelt-nachhaltigkeit',
  level: 'B2',
  topic: 'Окружающая среда и устойчивое развитие (Umwelt und Nachhaltigkeit)',
  theory: `
В этом уроке мы рассмотрим лексику, связанную с проблемами окружающей среды, изменением климата и концепцией устойчивого развития. Эти темы часто обсуждаются в современном обществе и требуют специфического словарного запаса.

**Основные термины и понятия:**
- **die Umwelt:** окружающая среда
- **der Umweltschutz:** защита окружающей среды
- **die Nachhaltigkeit:** устойчивое развитие (концепция удовлетворения потребностей настоящего времени без ущерба для будущих поколений)
- **der Klimawandel:** изменение климата
- **die globale Erwärmung:** глобальное потепление
- **der Treibhauseffekt:** парниковый эффект
- **die erneuerbaren Energien (Pl.):** возобновляемые источники энергии (например, Solarenergie, Windenergie, Wasserkraft)
- **die fossilen Brennstoffe (Pl.):** ископаемые виды топлива (уголь, нефть, газ)
- **die Umweltverschmutzung:** загрязнение окружающей среды (Luftverschmutzung, Wasserverschmutzung, Bodenverschmutzung)
- **der Müll / der Abfall:** мусор / отходы
- **die Mülltrennung:** сортировка мусора
- **das Recycling:** переработка отходов
- **Energie sparen:** экономить энергию
- **Ressourcen schonen:** беречь ресурсы
- **umweltfreundlich / umweltverträglich:** экологичный, безопасный для окружающей среды
- **nachhaltig:** устойчивый (в экологическом смысле)
- **die Abholzung (der Wälder):** вырубка (лесов)
- **der Artenschutz:** охрана видов
- **das Ozonloch:** озоновая дыра

**Глаголы, связанные с темой:**
- **schützen:** защищать (die Umwelt schützen)
- **verschmutzen:** загрязнять (die Luft verschmutzen)
- **zerstören:** разрушать (Lebensräume zerstören)
- **recyceln:** перерабатывать (Plastik recyceln)
- **vermeiden:** избегать (Müll vermeiden)
- **reduzieren:** сокращать (CO2-Emissionen reduzieren)
- **sparen:** экономить (Wasser sparen)
- **fördern:** способствовать, поддерживать (erneuerbare Energien fördern)

Обсуждение этих тем требует не только знания лексики, но и понимания взаимосвязей между деятельностью человека и состоянием планеты.
`,
  vocabulary: [
    { german: 'die Umwelt', russian: 'окружающая среда' },
    { german: 'der Umweltschutz', russian: 'защита окружающей среды', example: 'Umweltschutz ist ein wichtiges Thema.' },
    { german: 'die Nachhaltigkeit', russian: 'устойчивое развитие', example: 'Nachhaltigkeit bedeutet, an die Zukunft zu denken.' },
    { german: 'der Klimawandel', russian: 'изменение климата', example: 'Der Klimawandel hat ernste Folgen.' },
    { german: 'die globale Erwärmung', russian: 'глобальное потепление' },
    { german: 'die erneuerbare Energie (-n)', russian: 'возобновляемый источник энергии', example: 'Windkraft ist eine erneuerbare Energie.' },
    { german: 'die Verschmutzung (-en)', russian: 'загрязнение', example: 'Die Luftverschmutzung in Städten ist ein Problem.' },
    { german: 'der Müll', russian: 'мусор (собират.)', example: 'Wir müssen weniger Müll produzieren.' },
    { german: 'das Recycling', russian: 'переработка отходов', example: 'Recycling hilft, Ressourcen zu schonen.' },
    { german: 'Energie sparen', russian: 'экономить энергию', example: 'Jeder kann Energie sparen.' },
    { german: 'umweltfreundlich', russian: 'экологичный, безопасный для окружающей среды', example: 'Ich kaufe umweltfreundliche Produkte.' },
    { german: 'schützen (vor + D)', russian: 'защищать (от чего-л.)', example: 'Wir müssen die Natur schützen.' },
    { german: 'verschmutzen', russian: 'загрязнять', example: 'Fabriken verschmutzen oft die Flüsse.' },
    { german: 'recyceln', russian: 'перерабатывать (отходы)', example: 'Papier und Glas kann man gut recyceln.' },
    { german: 'vermeiden (vermeidet, vermied, hat vermieden)', russian: 'избегать', example: 'Plastikmüll sollte vermieden werden.' },
    { german: 'reduzieren', russian: 'сокращать, уменьшать', example: 'Wir sollten unseren Wasserverbrauch reduzieren.' },
  ],
  exercises: [
    {
      id: 'b2-lexik-umwelt-ex1',
      type: 'multiple_choice',
      question: 'Что означает "Nachhaltigkeit"?',
      options: ['Глобальное потепление', 'Защита видов', 'Устойчивое развитие', 'Экономия энергии'],
      correctAnswer: 'Устойчивое развитие',
      explanation: '"Die Nachhaltigkeit" - это концепция развития, учитывающая интересы будущих поколений и бережное отношение к ресурсам.',
    },
    {
      id: 'b2-lexik-umwelt-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте пропущенное слово: "Viele Länder fördern den Ausbau ___ Energien."',
      sentenceParts: ['Viele Länder fördern den Ausbau ', ' Energien.'],
      correctAnswer: 'erneuerbarer',
      explanation: '"Erneuerbare Energien" (возобновляемые источники энергии). Прилагательное "erneuerbar" склоняется.',
    },
    {
      id: 'b2-lexik-umwelt-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Мы должны защищать нашу окружающую среду."',
      prompt: 'Мы должны защищать нашу окружающую среду.',
      languageDirection: 'to_german',
      correctAnswer: 'Wir müssen unsere Umwelt schützen.',
      explanation: '"Окружающая среда" - "die Umwelt". "Защищать" - "schützen".',
    },
    {
      id: 'b2-lexik-umwelt-ex4',
      type: 'multiple_choice',
      question: 'Какой глагол означает "сортировать мусор"?',
      options: ['Müll vermeiden', 'Müll recyceln', 'Müll trennen', 'Müll wegwerfen'],
      correctAnswer: 'Müll trennen',
      explanation: '"Müll trennen" означает "сортировать мусор".',
    },
  ],
};

