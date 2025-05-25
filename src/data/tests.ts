
import type { Test, ModularTest } from '@/types'; // Added ModularTest
import { testA1ArtikelGenus } from './tests/a1-artikel-genus-test';
import { testA1PronomenSeinHaben } from './tests/a1-pronomen-sein-haben-test';
import { testA1Pluralbildung } from './tests/a1-pluralbildung-test';
import { testA1Akkusativ } from './tests/a1-akkusativ-test';
import { testA1Modalverben } from './tests/a1-modalverben-test';
import { testA1Negation } from './tests/a1-negation-test';
import { testA1SatzbauGrundlagen } from './tests/a1-satzbau-grundlagen-test';
import { testA1Possessivpronomen } from './tests/a1-possessivpronomen-test';
import { testA1Imperativ } from './tests/a1-imperativ-test';
import { testA1PraepositionenAkkusativ } from './tests/a1-praepositionen-akkusativ-test';
import { testA1PraepositionenDativ } from './tests/a1-praepositionen-dativ-test';
import { testA1TrennbarVerben } from './tests/a1-trennbar-verben-test';
import { testA1LexikFamilie } from './tests/a1-lexik-familie-test';
import { testA1LexikHausWohnung } from './tests/a1-lexik-haus-wohnung-test';
import { testA1LexikEssenTrinken } from './tests/a1-lexik-essen-trinken-test';
import { testA1LexikHobbysFreizeit } from './tests/a1-lexik-hobbys-freizeit-test';
import { testA1LexikZahlenFarben } from './tests/a1-lexik-zahlen-farben-test';
import { testA1LexikWochentageMonateJahreszeiten } from './tests/a1-lexik-wochentage-monate-jahreszeiten-test';
import { testA1LexikKleidung } from './tests/a1-lexik-kleidung-test';
import { testA1LexikUhrzeitTagesablauf } from './tests/a1-lexik-uhrzeit-tagesablauf-test';

// A2 Tests
import { testA2Artikel } from './tests/a2-artikel-test';
import { testA2VerbenPraesens } from './tests/a2-verben-praesens-test';
import { testA2Pluralbildung } from './tests/a2-pluralbildung-test';
import { testA2Perfekt } from './tests/a2-perfekt-test';
import { testA2Modalverben } from './tests/a2-modalverben-test';
import { testA2Praepositionen } from './tests/a2-praepositionen-test';
import { testA2Possessivpronomen } from './tests/a2-possessivpronomen-test';
import { testA2PersonalpronomenAkkDat } from './tests/a2-personalpronomen-akk-dat-test';
import { testA2Adjektivsteigerung } from './tests/a2-adjektivsteigerung-test';
import { testA2Imperativ } from './tests/a2-imperativ-test';
import { testA2Satzbau } from './tests/a2-satzbau-test';
import { testA2NebensaetzeEinfach } from './tests/a2-nebensaetze-einfach-test';
import { testA2NebenordnendeKonjunktionen } from './tests/a2-nebenordnende-konjunktionen-test';
import { testA2Negation } from './tests/a2-negation-test';
import { testA2ReflexiveVerben } from './tests/a2-reflexive-verben-test';
import { testA2Adjektivdeklination } from './tests/a2-adjektivdeklination-test';
import { testA2TemporalsaetzeAlsWenn } from './tests/a2-temporalsaetze-als-wenn-test';
import { testA2Demonstrativpronomen } from './tests/a2-demonstrativpronomen-test';
import { testA2OrdinalzahlenDatum } from './tests/a2-ordinalzahlen-datum-test';
import { testA2LexikArbeitBeruf } from './tests/a2-lexik-arbeit-beruf-test';
import { testA2LexikReisenVerkehr } from './tests/a2-lexik-reisen-verkehr-test';
import { testA2LexikGesundheitKoerper } from './tests/a2-lexik-gesundheit-koerper-test';
import { testA2LexikKleidung } from './tests/a2-lexik-kleidung-test';
import { testA2LexikEinkaufen } from './tests/a2-lexik-einkaufen-test';
import { testA2LexikInDerStadt } from './tests/a2-lexik-in-der-stadt-test';
import { testA2LexikFesteTraditionen } from './tests/a2-lexik-feste-traditionen-test';


// B1 Tests
import { testB1Nebensaetze } from './tests/b1-nebensaetze-test';
import { testB1Relativsaetze } from './tests/b1-relativsaetze-test';
import { testB1Praeteritum } from './tests/b1-praeteritum-test';
import { testB1Adjektivdeklination } from './tests/b1-adjektivdeklination-test';
import { testB1VerbenMitPraepositionen } from './tests/b1-verben-mit-praepositionen-test';
import { testB1Plusquamperfekt } from './tests/b1-plusquamperfekt-test';
import { testB1Futur1 } from './tests/b1-futur1-test';
import { testB1Konjunktiv2Einfuehrung } from './tests/b1-konjunktiv2-einfuehrung-test';
import { testB1PassivEinfuehrung } from './tests/b1-passiv-einfuehrung-test';
import { testB1Genitiv } from './tests/b1-genitiv-test';
import { testB1NDeklination } from './tests/b1-n-deklination-test';
import { testB1Indefinitpronomen } from './tests/b1-indefinitpronomen-test';
import { testB1InfinitivMitZu } from './tests/b1-infinitiv-mit-zu-test';
import { testB1Konsekutivsaetze } from './tests/b1-konsekutivsaetze-test';
import { testB1LexikBildungStudium } from './tests/b1-lexik-bildung-studium-test';
import { testB1LexikArbeitKarriere } from './tests/b1-lexik-arbeit-karriere-test';
import { testB1LexikMedienKommunikation } from './tests/b1-lexik-medien-kommunikation-test';
import { testB1LexikUmweltWetter } from './tests/b1-lexik-umwelt-wetter-test';
import { testB1LexikKulturFreizeit } from './tests/b1-lexik-kultur-freizeit-test';
import { testB1LexikBeziehungen } from './tests/b1-lexik-beziehungen-test';


// B2 Tests
import { testB2Konjunktiv2 } from './tests/b2-konjunktiv2-test';
import { testB2NomenVerb } from './tests/b2-nomen-verb-test';
import { testB2Passiv } from './tests/b2-passiv-test';
import { testB2PassivErsatzformen } from './tests/b2-passiv-ersatzformen-test';
import { testB2SubjektiveModalverben } from './tests/b2-subjektive-modalverben-test';
import { testB2KomplexeSatzverbindungen } from './tests/b2-komplexe-satzverbindungen-test';
import { testB2NominalisierungVerbalisierung } from './tests/b2-nominalisierung-verbalisierung-test';
import { testB2Futur2 } from './tests/b2-futur2-test';
import { testB2Wortbildung } from './tests/b2-wortbildung-test';
import { testB2LexikUmweltNachhaltigkeit } from './tests/b2-lexik-umwelt-nachhaltigkeit-test';
import { testB2LexikKulturKunst } from './tests/b2-lexik-kultur-kunst-test';


// C1 Tests
import { testC1IndirekteRede } from './tests/c1-indirekte-rede-test';
import { testC1Partizipialkonstruktionen } from './tests/c1-partizipialkonstruktionen-test';
import { testC1KonjunktivVertiefung } from './tests/c1-konjunktiv-vertiefung-test';
import { testC1PartizipialkonstruktionenAdverbial } from './tests/c1-partizipialkonstruktionen-adverbial-test';
import { testC1AdverbialsaetzeVertiefung } from './tests/c1-adverbialsaetze-vertiefung-test';
import { testC1LexikPolitikGesellschaft } from './tests/c1-lexik-politik-gesellschaft-test';
import { testC1LexikWissenschaftForschung } from './tests/c1-lexik-wissenschaft-forschung-test';


// C2 Tests
import { testC2Stilmittel } from './tests/c2-stilmittel-test';
import { testC2NominalstilVerbalstil } from './tests/c2-nominalstil-verbalstil-test';
import { testC2Modalpartikeln } from './tests/c2-modalpartikeln-test';
import { testC2LexikGlobaleProbleme } from './tests/c2-lexik-globale-probleme-test';
import { testC2LexikMedienkritikDigitaleGesellschaft } from './tests/c2-lexik-medienkritik-digitale-gesellschaft-test';
import { testC2LexikSozialeTrends } from './tests/c2-lexik-soziale-trends-test';


export const MOCK_TESTS: Test[] = [
  // A1 Grammar Tests
  testA1ArtikelGenus,
  testA1PronomenSeinHaben,
  testA1Pluralbildung,
  testA1Akkusativ,
  testA1Modalverben,
  testA1Negation,
  testA1SatzbauGrundlagen,
  testA1Possessivpronomen,
  testA1Imperativ,
  testA1PraepositionenAkkusativ,
  testA1PraepositionenDativ,
  testA1TrennbarVerben,
  // A1 Lexik Tests
  testA1LexikFamilie,
  testA1LexikHausWohnung,
  testA1LexikEssenTrinken,
  testA1LexikHobbysFreizeit,
  testA1LexikZahlenFarben,
  testA1LexikWochentageMonateJahreszeiten,
  testA1LexikKleidung,
  testA1LexikUhrzeitTagesablauf,

  // A2 Grammar Tests
  testA2Artikel,
  testA2VerbenPraesens,
  testA2Pluralbildung,
  testA2Perfekt,
  testA2Modalverben,
  testA2Praepositionen,
  testA2Possessivpronomen,
  testA2PersonalpronomenAkkDat,
  testA2Adjektivsteigerung,
  testA2Imperativ,
  testA2Satzbau,
  testA2NebensaetzeEinfach,
  testA2NebenordnendeKonjunktionen,
  testA2Negation,
  testA2ReflexiveVerben,
  testA2Adjektivdeklination,
  testA2TemporalsaetzeAlsWenn,
  testA2Demonstrativpronomen,
  testA2OrdinalzahlenDatum,
  // A2 Lexik Tests
  testA2LexikArbeitBeruf,
  testA2LexikReisenVerkehr,
  testA2LexikGesundheitKoerper,
  testA2LexikKleidung,
  testA2LexikEinkaufen,
  testA2LexikInDerStadt,
  testA2LexikFesteTraditionen,

  // B1 Grammar Tests
  testB1Nebensaetze,
  testB1Relativsaetze,
  testB1Praeteritum,
  testB1Adjektivdeklination,
  testB1VerbenMitPraepositionen,
  testB1Plusquamperfekt,
  testB1Futur1,
  testB1Konjunktiv2Einfuehrung,
  testB1PassivEinfuehrung,
  testB1Genitiv,
  testB1NDeklination,
  testB1Indefinitpronomen,
  testB1InfinitivMitZu,
  testB1Konsekutivsaetze,
  // B1 Lexik Tests
  testB1LexikBildungStudium,
  testB1LexikArbeitKarriere,
  testB1LexikMedienKommunikation,
  testB1LexikUmweltWetter,
  testB1LexikKulturFreizeit,
  testB1LexikBeziehungen,

  // B2 Grammar Tests
  testB2Konjunktiv2,
  testB2NomenVerb,
  testB2Passiv,
  testB2PassivErsatzformen,
  testB2SubjektiveModalverben,
  testB2KomplexeSatzverbindungen,
  testB2NominalisierungVerbalisierung,
  testB2Futur2,
  testB2Wortbildung,
  // B2 Lexik Tests
  testB2LexikUmweltNachhaltigkeit,
  testB2LexikKulturKunst,

  // C1 Grammar Tests
  testC1IndirekteRede,
  testC1Partizipialkonstruktionen,
  testC1KonjunktivVertiefung,
  testC1PartizipialkonstruktionenAdverbial,
  testC1AdverbialsaetzeVertiefung,
  // C1 Lexik Tests
  testC1LexikPolitikGesellschaft,
  testC1LexikWissenschaftForschung,

  // C2 Grammar Tests
  testC2Stilmittel,
  testC2NominalstilVerbalstil,
  testC2Modalpartikeln,
  // C2 Lexik Tests
  testC2LexikGlobaleProbleme,
  testC2LexikMedienkritikDigitaleGesellschaft,
  testC2LexikSozialeTrends,
];

export const MOCK_MODULAR_TESTS: ModularTest[] = [
  {
    id: 'a1-grammar-module-1-test',
    level: 'A1',
    topic: 'A1 - Грамматический Модуль 1 (Тест)',
    description: 'Проверка знаний по темам: Алфавит и приветствия, Личные местоимения и sein/haben, Артикли и род, Множественное число (основы), Akkusativ.',
    coveredLessonIds: [
      'a1-alphabet-begruessungen',
      'a1-personalpronomen-sein-haben',
      'a1-artikel-genus',
      'a1-pluralbildung',
      'a1-akkusativ',
    ],
    questions: [
      {
        id: 'a1-gm1-q1',
        type: 'multiple_choice',
        question: 'Какой определенный артикль у слова "Tisch" (м.р., Nominativ)?',
        options: ['der', 'die', 'das'],
        correctAnswer: 'der',
        explanation: 'Слово "Tisch" мужского рода, поэтому "der Tisch".'
      },
      {
        id: 'a1-gm1-q2',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму "sein": Ich ___ müde.',
        sentenceParts: ['Ich ', ' müde.'],
        correctAnswer: 'bin',
        explanation: 'Для "ich" форма глагола "sein" - "bin".'
      },
      {
        id: 'a1-gm1-q3',
        type: 'multiple_choice',
        question: 'Как будет "ребенок" (das Kind) во множественном числе?',
        options: ['die Kinde', 'die Kinden', 'die Kinder', 'die Kinds'],
        correctAnswer: 'die Kinder',
        explanation: 'Существительное "das Kind" среднего рода, множественное число "die Kinder".',
      },
      {
        id: 'a1-gm1-q4',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму: Ich sehe ___ (ein Apfel, м.р., Akkusativ).',
        sentenceParts: ['Ich sehe ', '.'],
        correctAnswer: 'einen Apfel',
        explanation: 'Слово "Apfel" мужского рода. В Akkusativ неопределенный артикль "ein" меняется на "einen".',
      },
      {
        id: 'a1-gm1-q5',
        type: 'multiple_choice',
        question: 'Как по-немецки сказать "Добрый день!"?',
        options: ['Guten Morgen!', 'Guten Abend!', 'Guten Tag!', 'Hallo!'],
        correctAnswer: 'Guten Tag!',
        explanation: '"Guten Tag!" означает "Добрый день!".',
      }
    ],
  },
  {
    id: 'a1-grammar-module-2-test',
    level: 'A1',
    topic: 'A1 - Грамматический Модуль 2 (Тест)',
    description: 'Проверка знаний по темам: Отрицание (nicht/kein), Порядок слов (основы), Модальные глаголы (основы), Притяжательные местоимения (Nom/Akk), Imperativ (основы).',
    coveredLessonIds: [
      'a1-negation',
      'a1-satzbau-grundlagen',
      'a1-modalverben',
      'a1-possessivpronomen',
      'a1-imperativ',
    ],
    questions: [
      {
        id: 'a1-gm2-q1',
        type: 'multiple_choice',
        question: 'Выберите правильное отрицание: "Ich habe ___ Zeit."',
        options: ['nicht', 'kein', 'keine', 'keinen'],
        correctAnswer: 'keine',
        explanation: 'Существительное "Zeit" (ж.р.) отрицается с "keine".',
      },
      {
        id: 'a1-gm2-q2',
        type: 'multiple_choice',
        question: 'На каком месте стоит спрягаемый глагол в вопросе без вопросительного слова?',
        options: ['На первом', 'На втором', 'В конце'],
        correctAnswer: 'На первом',
        explanation: 'В общем вопросе (Ja/Nein-Frage) спрягаемый глагол стоит на первом месте.',
      },
      {
        id: 'a1-gm2-q3',
        type: 'fill_in_the_blank',
        question: 'Вставьте модальный глагол: "Ich ___ Deutsch sprechen." (умею)',
        sentenceParts: ['Ich ', ' Deutsch sprechen.'],
        correctAnswer: 'kann',
        explanation: '"können" (уметь) для "ich" - "kann".',
      },
      {
        id: 'a1-gm2-q4',
        type: 'multiple_choice',
        question: 'Какая форма правильная: "Das ist ___ (её) Fahrrad (ср.р., Nominativ)?"',
        options: ['ihr', 'ihre', 'ihren'],
        correctAnswer: 'ihr',
        explanation: 'Притяжательное местоимение "ihr" (её) для среднего рода в Nominativ - "ihr".',
      },
      {
        id: 'a1-gm2-q5',
        type: 'fill_in_the_blank',
        question: 'Образуйте Imperativ для "du": "___ (lesen) das Buch!"',
        sentenceParts: ['', ' das Buch!'],
        correctAnswer: 'Lies',
        explanation: 'Глагол "lesen" (e→ie) в Imperativ для "du" - "Lies!".',
      }
    ]
  },
  {
    id: 'a2-grammar-module-1-test',
    level: 'A2',
    topic: 'A2 - Грамматический Модуль 1 (Тест)',
    description: 'Проверка знаний по темам: Артикли (углубленно), Präsens (углубленно), Plural (углубленно), Perfekt, Модальные глаголы.',
    coveredLessonIds: [
      'a2-artikel',
      'a2-verben-praesens',
      'a2-pluralbildung',
      'a2-perfekt',
      'a2-modalverben',
    ],
    questions: [
      {
        id: 'a2-gm1-q1',
        type: 'fill_in_the_blank',
        question: 'Вставьте отрицательный артикль в Akkusativ: "Er kauft ___ Auto (ср.р.)."',
        sentenceParts: ['Er kauft ', ' Auto.'],
        correctAnswer: 'kein',
        explanation: '"Auto" среднего рода. "kein" в Akkusativ для среднего рода не меняется.',
      },
      {
        id: 'a2-gm1-q2',
        type: 'multiple_choice',
        question: 'Какая форма глагола "fahren" (ехать) верна для "er"?',
        options: ['er fahrt', 'er fährt', 'er fahret'],
        correctAnswer: 'er fährt',
        explanation: 'Глагол "fahren" (a→ä) для "er" - "fährt".',
      },
       {
        id: 'a2-gm1-q3',
        type: 'fill_in_the_blank',
        question: 'Напишите множественное число: das Museum → die ___',
        sentenceParts: ['das Museum → die ', ''],
        correctAnswer: 'Museen',
        explanation: 'Множественное число от "das Museum" - "die Museen".',
      },
      {
        id: 'a2-gm1-q4',
        type: 'multiple_choice',
        question: 'Выберите правильный вспомогательный глагол для Perfekt: "Ich ___ gestern ins Kino ___." (gehen)',
        options: ['habe ... gegangen', 'bin ... gegangen', 'habe ... gegeht'],
        correctAnswer: 'bin ... gegangen',
        explanation: '"gehen" образует Perfekt с "sein". Partizip II - "gegangen".',
      },
      {
        id: 'a2-gm1-q5',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильную форму "dürfen": "Du ___ hier nicht parken."',
        sentenceParts: ['Du ', ' hier nicht parken.'],
        correctAnswer: 'darfst',
        explanation: '"dürfen" для "du" - "darfst".',
      }
    ]
  },
  {
    id: 'b1-grammar-module-1-test',
    level: 'B1',
    topic: 'B1 - Грамматический Модуль 1 (Тест)',
    description: 'Проверка знаний по темам: Придаточные предложения, Относительные предложения, Präteritum, Склонение прилагательных, Глаголы с предлогами.',
    coveredLessonIds: [
      'b1-nebensaetze',
      'b1-relativsaetze',
      'b1-praeteritum',
      'b1-adjektivdeklination',
      'b1-verben-mit-praepositionen',
    ],
    questions: [
      {
        id: 'b1-gm1-q1',
        type: 'multiple_choice',
        question: 'Выберите правильный союз: "Ich gehe nicht ins Kino, ___ ich keine Zeit habe."',
        options: ['obwohl', 'damit', 'weil', 'wenn'],
        correctAnswer: 'weil',
        explanation: '"weil" (потому что) используется для указания причины.',
      },
      {
        id: 'b1-gm1-q2',
        type: 'fill_in_the_blank',
        question: 'Вставьте правильное относительное местоимение: "Die Frau, mit ___ ich gesprochen habe, ist sehr nett."',
        sentenceParts: ['Die Frau, mit ', ' ich gesprochen habe, ist sehr nett.'],
        correctAnswer: 'der',
        explanation: 'Предлог "mit" требует Dativ. "Die Frau" (ж.р.) в Dativ - "der".',
      },
      {
        id: 'b1-gm1-q3',
        type: 'multiple_choice',
        question: 'Какая форма Präteritum глагола "sehen" для "ich"?',
        options: ['sehte', 'sah', 'gesehen', 'sieht'],
        correctAnswer: 'sah',
        explanation: 'Präteritum от "sehen" - "sah".',
      },
      {
        id: 'b1-gm1-q4',
        type: 'fill_in_the_blank',
        question: 'Вставьте окончание прилагательного: "Ich habe ein___ neu___ Fahrrad (ср.р., Akk.) gekauft."',
        sentenceParts: ['Ich habe ein', ' neu', ' Fahrrad gekauft.'],
        correctAnswer: ' neues',
        explanation: 'После "ein" перед ср.р. в Akkusativ прилагательное получает "-es".',
      },
      {
        id: 'b1-gm1-q5',
        type: 'multiple_choice',
        question: 'Выберите правильный предлог: "Ich denke oft ___ dich."',
        options: ['an', 'auf', 'über', 'mit'],
        correctAnswer: 'an',
        explanation: 'Глагол "denken an + Akkusativ" (думать о).',
      }
    ]
  }
];


// Helper function to get a test by its ID
export const getTestById = (id: string): Test | ModularTest | undefined => {
  const allTests: (Test | ModularTest)[] = [...MOCK_TESTS, ...MOCK_MODULAR_TESTS];
  return allTests.find(test => test.id === id);
};


