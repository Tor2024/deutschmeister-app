
import type { ModularTest } from '@/types';
import { testA1ArtikelGenus } from './a1-artikel-genus-test';
import { testA1PronomenSeinHaben } from './a1-pronomen-sein-haben-test';
import { testA1Pluralbildung } from './a1-pluralbildung-test';
import { testA1Akkusativ } from './a1-akkusativ-test';
import { testA1Modalverben } from './a1-modalverben-test';
import { testA1Negation } from './a1-negation-test';
import { testA1SatzbauGrundlagen } from './a1-satzbau-grundlagen-test';
import { testA1Possessivpronomen } from './a1-possessivpronomen-test';
import { testA1Imperativ } from './a1-imperativ-test';
import { testA1PraepositionenAkkusativ } from './a1-praepositionen-akkusativ-test';
import { testA1PraepositionenDativ } from './a1-praepositionen-dativ-test';
import { testA1TrennbarVerben } from './a1-trennbar-verben-test';
import { testA1LexikFamilie } from './a1-lexik-familie-test';
import { testA1LexikEssenTrinken } from './a1-lexik-essen-trinken-test';
import { testA1LexikHausWohnung } from './a1-lexik-haus-wohnung-test';
import { testA1LexikHobbysFreizeit } from './a1-lexik-hobbys-freizeit-test';
import { testA1LexikZahlenFarben } from './a1-lexik-zahlen-farben-test';
import { testA1LexikWochentageMonateJahreszeiten } from './a1-lexik-wochentage-monate-jahreszeiten-test';
import { testA1LexikKleidung } from './a1-lexik-kleidung-test';
import { testA1LexikUhrzeitTagesablauf } from './a1-lexik-uhrzeit-tagesablauf-test';


export const testA1LevelTest: ModularTest = {
  id: 'a1-final-level-test',
  level: 'A1',
  topic: 'Итоговый тест по уровню A1',
  testType: 'level',
  description: 'Комплексная проверка знаний по грамматике и лексике уровня A1. Охватывает основные темы, необходимые для базового общения.',
  coveredLessonIds: [
    'a1-alphabet-begruessungen',
    'a1-personalpronomen-sein-haben',
    'a1-artikel-genus',
    'a1-pluralbildung',
    'a1-akkusativ',
    'a1-negation',
    'a1-satzbau-grundlagen',
    'a1-modalverben',
    'a1-possessivpronomen',
    'a1-imperativ',
    'a1-praepositionen-akkusativ',
    'a1-praepositionen-dativ',
    'a1-trennbar-verben',
    'a1-lexik-familie',
    'a1-lexik-haus-wohnung',
    'a1-lexik-essen-trinken',
    'a1-lexik-hobbys-freizeit',
    'a1-lexik-zahlen-farben',
    'a1-lexik-wochentage-monate-jahreszeiten',
    'a1-lexik-kleidung',
    'a1-lexik-uhrzeit-tagesablauf',
  ],
  questions: [
    // Sein/Haben
    testA1PronomenSeinHaben.questions[0], // Какое местоимение соответствует форме глагола "bin"?
    testA1PronomenSeinHaben.questions[1], // Вставьте правильную форму глагола "haben": Wir ___ viele Bücher.
    // Artikel/Genus
    testA1ArtikelGenus.questions[0], // Какой определенный артикль у слова "Buch" (книга) в Именительном падеже?
    testA1ArtikelGenus.questions[1], // Вставьте правильный неопределенный артикль: Das ist ___ Apfel.
    // Plural
    testA1Pluralbildung.questions[0], // Какое множественное число у слова "das Auto"?
    // Akkusativ
    testA1Akkusativ.questions[0], // Какой артикль мужского рода в Akkusativ для "der Hund"?
    testA1Akkusativ.questions[3], // Выберите правильное местоимение в Akkusativ: "Er liebt ___ (она)."
    // Modalverben
    testA1Modalverben.questions[0], // Вставьте правильную форму "können": Ich ___ gut schwimmen.
    // Negation
    testA1Negation.questions[0], // Выберите правильное отрицание: Das ist ___ Tisch.
    testA1Negation.questions[2], // Как правильно сказать: "Я не сплю"?
    // Satzbau
    testA1SatzbauGrundlagen.questions[0], // На каком месте стоит спрягаемый глагол в простом немецком утвердительном предложении с прямым порядком слов?
    testA1SatzbauGrundlagen.questions[3], // Поставьте слова в правильном порядке для специального вопроса: (wo / du / wohnst?)
    // Possessivpronomen
    testA1Possessivpronomen.questions[0], // Выберите правильную форму: Das ist ___ (мой) Ball (м.р., Nominativ).
    // Imperativ
    testA1Imperativ.questions[0], // Какая форма Imperativ для "du" от глагола "machen"?
    // Trennbare Verben
    testA1TrennbarVerben.questions[0], // В предложении "Ich stehe um 7 Uhr auf." какая часть является отделяемой приставкой?
    // Lexik (Beispiel)
    testA1LexikFamilie.questions[0], // Как по-немецки "мама"?
    testA1LexikEssenTrinken.questions[0], // Как по-немецки "хлеб"?
    testA1LexikHobbysFreizeit.questions[0],
    testA1LexikZahlenFarben.questions[0],
    testA1LexikWochentageMonateJahreszeiten.questions[0],
    testA1LexikKleidung.questions[0],
    testA1LexikUhrzeitTagesablauf.questions[0],
    // Praepositionen
    testA1PraepositionenAkkusativ.questions[0],
    testA1PraepositionenDativ.questions[0],
  ],
};
