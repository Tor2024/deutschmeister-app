
import type { Test, ModularTest } from '@/types';
// A1 Grammar Tests
import { testA1AlphabetBegruessungen } from './tests/a1-alphabet-begruessungen-test'; // Assuming this test will be created
import { testA1PronomenSeinHaben } from './tests/a1-pronomen-sein-haben-test';
import { testA1GrammatikPraesensVerben } from './tests/a1-grammatik-praesens-verben-test';
import { testA1ArtikelGenus } from './tests/a1-artikel-genus-test';
import { testA1Pluralbildung } from './tests/a1-pluralbildung-test';
import { testA1WFragen } from './tests/a1-w-fragen-test';
import { testA1Akkusativ } from './tests/a1-akkusativ-test';
import { testA1Modalverben } from './tests/a1-modalverben-test';
import { testA1Negation } from './tests/a1-negation-test';
import { testA1SatzbauGrundlagen } from './tests/a1-satzbau-grundlagen-test';
import { testA1Possessivpronomen } from './tests/a1-possessivpronomen-test';
import { testA1Imperativ } from './tests/a1-imperativ-test';
import { testA1PraepositionenAkkusativ } from './tests/a1-praepositionen-akkusativ-test';
import { testA1PraepositionenDativ } from './tests/a1-praepositionen-dativ-test';
import { testA1PraepositionenDativWechsel } from './tests/a1-praepositionen-dativ-wechsel-test';
import { testA1TrennbarVerben } from './tests/a1-trennbar-verben-test';

// A1 Lexik Tests
import { testA1LexikPersoenlicheInfos } from './tests/a1-lexik-persoenliche-infos-test';
import { testA1LexikFamilie } from './tests/a1-lexik-familie-test';
import { testA1LexikZahlenFarben } from './tests/a1-lexik-zahlen-farben-test';
import { testA1LexikKleidung } from './tests/a1-lexik-kleidung-test';
import { testA1LexikEssenTrinken } from './tests/a1-lexik-essen-trinken-test';
import { testA1LexikHobbysFreizeit } from './tests/a1-lexik-hobbys-freizeit-test';
import { testA1LexikUhrzeitTagesablauf } from './tests/a1-lexik-uhrzeit-tagesablauf-test';
import { testA1LexikWochentageMonateJahreszeiten } from './tests/a1-lexik-wochentage-monate-jahreszeiten-test';
import { testA1LexikSchuleArbeitEinfach } from './tests/a1-lexik-schule-arbeit-einfach-test';
import { testA1LexikWetter } from './tests/a1-lexik-wetter-test';
import { testA1LexikGefuehleZustaende } from './tests/a1-lexik-gefuehle-zustaende-test';
import { testA1LexikHausWohnung } from './tests/a1-lexik-haus-wohnung-test';
import { testA1LexikOrdinalzahlenDatum } from './tests/a1-lexik-ordinalzahlen-datum-test';

// A2 Grammar Tests
import { testA2Artikel } from './tests/a2-artikel-test';
import { testA2VerbenPraesens } from './tests/a2-verben-praesens-test';
import { testA2Pluralbildung } from './tests/a2-pluralbildung-test';
import { testA2GrammatikPraeteritumSeinHabenModal } from './tests/a2-grammatik-praeteritum-sein-haben-modal-test';
import { testA2Perfekt } from './tests/a2-perfekt-test';
import { testA2Modalverben } from './tests/a2-modalverben-test';
import { testA2ModalverbenPerfekt } from './tests/a2-modalverben-perfekt-test';
import { testA2VerbLassen } from './tests/a2-verb-lassen-test';
import { testA2TrennbareUntrennbareVerben } from './tests/a2-trennbare-untrennbare-verben-test';
import { testA2Praepositionen } from './tests/a2-praepositionen-test';
import { testA2Possessivpronomen } from './tests/a2-possessivpronomen-test';
import { testA2PersonalpronomenAkkDat } from './tests/a2-personalpronomen-akk-dat-test';
import { testA2Adjektivsteigerung } from './tests/a2-adjektivsteigerung-test';
import { testA2Adjektivdeklination } from './tests/a2-adjektivdeklination-test';
import { testA2Imperativ } from './tests/a2-imperativ-test';
import { testA2Satzbau } from './tests/a2-satzbau-test';
import { testA2NebenordnendeKonjunktionen } from './tests/a2-nebenordnende-konjunktionen-test';
import { testA2NebensaetzeEinfach } from './tests/a2-nebensaetze-einfach-test';
import { testA2Negation } from './tests/a2-negation-test';
import { testA2ReflexiveVerben } from './tests/a2-reflexive-verben-test';
import { testA2TemporalsaetzeAlsWenn } from './tests/a2-temporalsaetze-als-wenn-test';
import { testA2Demonstrativpronomen } from './tests/a2-demonstrativpronomen-test';
import { testA2OrdinalzahlenDatum } from './tests/a2-ordinalzahlen-datum-test';


// A2 Lexik Tests
import { testA2LexikArbeitBeruf } from './tests/a2-lexik-arbeit-beruf-test';
import { testA2LexikReisenVerkehr } from './tests/a2-lexik-reisen-verkehr-test';
import { testA2LexikGesundheitKoerper } from './tests/a2-lexik-gesundheit-koerper-test';
import { testA2LexikKleidung } from './tests/a2-lexik-kleidung-test';
import { testA2LexikEinkaufen } from './tests/a2-lexik-einkaufen-test';
import { testA2LexikInDerStadt } from './tests/a2-lexik-in-der-stadt-test';
import { testA2LexikFesteTraditionen } from './tests/a2-lexik-feste-traditionen-test';
import { testA2LexikLebensstilGewohnheiten } from './tests/a2-lexik-lebensstil-gewohnheiten-test';
import { testA2LexikErnaehrungRezepte } from './tests/a2-lexik-ernaehrung-rezepte-test';
import { testA2LexikElektronikTechnik } from './tests/a2-lexik-elektronik-technik-test';
import { testA2LexikBriefeEmails } from './tests/a2-lexik-briefe-emails-test';
import { testA2LexikKonflikteLoesungen } from './tests/a2-lexik-konflikte-loesungen-test';
import { testA2LexikBank } from './tests/a2-lexik-bank-test';
import { testA2LexikSchuleKurse } from './tests/a2-lexik-schule-kurse-test';

// B1 Grammar Tests
import { testB1Praeteritum } from './tests/b1-praeteritum-test';
import { testB1PerfektReview } from './tests/b1-perfekt-review-test';
import { testB1Plusquamperfekt } from './tests/b1-plusquamperfekt-test';
import { testB1Futur1 } from './tests/b1-futur1-test';
import { testB1Genitiv } from './tests/b1-genitiv-test';
import { testB1NDeklination } from './tests/b1-n-deklination-test';
import { testB1Adjektivdeklination } from './tests/b1-adjektivdeklination-test';
import { testB1VerbenMitPraepositionen } from './tests/b1-verben-mit-praepositionen-test';
import { testB1Konjunktiv2Einfuehrung } from './tests/b1-konjunktiv2-einfuehrung-test';
import { testB1PassivEinfuehrung } from './tests/b1-passiv-einfuehrung-test';
import { testB1Indefinitpronomen } from './tests/b1-indefinitpronomen-test';
import { testB1InfinitivMitZu } from './tests/b1-infinitiv-mit-zu-test';
import { testB1KonditionalsaetzeTyp1 } from './tests/b1-konditionalsaetze-typ1-test';
import { testB1PartizipienAlsAdjektive } from './tests/b1-partizipien-als-adjektive-test';
import { testB1IndirekteRedeEinfuehrung } from './tests/b1-indirekte-rede-einfuehrung-test';
import { testB1Konsekutivsaetze } from './tests/b1-konsekutivsaetze-test';
import { testB1Nebensaetze } from './tests/b1-nebensaetze-test';
import { testB1Relativsaetze } from './tests/b1-relativsaetze-test';

// B1 Lexik Tests
import { testB1LexikBildungStudium } from './tests/b1-lexik-bildung-studium-test';
import { testB1LexikArbeitKarriere } from './tests/b1-lexik-arbeit-karriere-test';
import { testB1LexikMedienKommunikation } from './tests/b1-lexik-medien-kommunikation-test';
import { testB1LexikUmweltWetter } from './tests/b1-lexik-umwelt-wetter-test';
import { testB1LexikKulturFreizeit } from './tests/b1-lexik-kultur-freizeit-test';
import { testB1LexikBeziehungen } from './tests/b1-lexik-beziehungen-test';
import { testB1LexikSportFreizeit } from './tests/b1-lexik-sport-freizeit-test';
import { testB1LexikGesunderLebensstil } from './tests/b1-lexik-gesunder-lebensstil-test';
import { testB1LexikVeranstaltungenOrganisation } from './tests/b1-lexik-veranstaltungen-organisation-test';


// B2 Grammar Tests
import { testB2Konjunktiv2 } from './tests/b2-konjunktiv2-test';
import { testB2Passiv } from './tests/b2-passiv-test';
import { testB2PassivErsatzformen } from './tests/b2-passiv-ersatzformen-test';
import { testB2SubjektiveModalverben } from './tests/b2-subjektive-modalverben-test';
import { testB2IndirekteRede } from './tests/b2-indirekte-rede-test';
import { testB2NomenVerb } from './tests/b2-nomen-verb-test';
import { testB2KomplexeSatzverbindungen } from './tests/b2-komplexe-satzverbindungen-test';
import { testB2NominalisierungVerbalisierung } from './tests/b2-nominalisierung-verbalisierung-test';
import { testB2Futur2 } from './tests/b2-futur2-test';
import { testB2Wortbildung } from './tests/b2-wortbildung-test';
import { testB2PartizipialkonstruktionenEinfuehrung } from './tests/b2-partizipialkonstruktionen-einfuehrung-test';

// B2 Lexik Tests
import { testB2LexikUmweltNachhaltigkeit } from './tests/b2-lexik-umwelt-nachhaltigkeit-test';
import { testB2LexikKulturKunst } from './tests/b2-lexik-kultur-kunst-test';
import { testB2LexikWissenschaftTechnologie } from './tests/b2-lexik-wissenschaft-technologie-test';
import { testB2LexikMedienKommunikation } from './tests/b2-lexik-medien-kommunikation-test';
import { testB2LexikPolitik } from './tests/b2-lexik-politik-test';
import { testB2LexikWirtschaftKonsum } from './tests/b2-lexik-wirtschaft-konsum-test';

// C1 Grammar Tests
import { testC1IndirekteRede } from './tests/c1-indirekte-rede-test';
import { testC1Partizipialkonstruktionen } from './tests/c1-partizipialkonstruktionen-test';
import { testC1KonjunktivVertiefung } from './tests/c1-konjunktiv-vertiefung-test';
import { testC1PartizipialkonstruktionenAdverbial } from './tests/c1-partizipialkonstruktionen-adverbial-test';
import { testC1AdverbialsaetzeVertiefung } from './tests/c1-adverbialsaetze-vertiefung-test';
import { testC1ErweiterteKonnektorenStil } from './tests/c1-erweiterte-konnektoren-stil-test';
import { testC1Referenzbezuege } from './tests/c1-referenzbezuege-test';

// C1 Lexik Tests
import { testC1LexikPolitikGesellschaft } from './tests/c1-lexik-politik-gesellschaft-test';
import { testC1LexikWissenschaftForschung } from './tests/c1-lexik-wissenschaft-forschung-test';
import { testC1LexikWirtschaftGlobalermarkt } from './tests/c1-lexik-wirtschaft-globalermarkt-test';
import { testC1LexikInterkulturelleKommunikation } from './tests/c1-lexik-interkulturelle-kommunikation-test';

// C2 Grammar Tests
import { testC2Stilmittel } from './tests/c2-stilmittel-test';
import { testC2NominalstilVerbalstil } from './tests/c2-nominalstil-verbalstil-test';
import { testC2Modalpartikeln } from './tests/c2-modalpartikeln-test';
import { testC2Absolutformen } from './tests/c2-absolutformen-test';

// C2 Lexik Tests
import { testC2LexikGlobaleProbleme } from './tests/c2-lexik-globale-probleme-test';
import { testC2LexikMedienkritikDigitaleGesellschaft } from './tests/c2-lexik-medienkritik-digitale-gesellschaft-test';
import { testC2LexikSozialeTrends } from './tests/c2-lexik-soziale-trends-test';


// --- MOCK_TESTS ---
// Contains all thematic tests
export const MOCK_TESTS: Test[] = [
  // A1 Thematic Grammar & Lexik Tests
  testA1ArtikelGenus,
  testA1PronomenSeinHaben,
  testA1GrammatikPraesensVerben,
  testA1Pluralbildung,
  testA1Akkusativ,
  testA1Modalverben,
  testA1Negation,
  testA1SatzbauGrundlagen,
  testA1Possessivpronomen,
  testA1Imperativ,
  testA1PraepositionenAkkusativ,
  testA1PraepositionenDativ,
  testA1PraepositionenDativWechsel,
  testA1TrennbarVerben,
  testA1WFragen,
  testA1LexikPersoenlicheInfos,
  testA1LexikFamilie,
  testA1LexikZahlenFarben,
  testA1LexikKleidung,
  testA1LexikEssenTrinken,
  testA1LexikHobbysFreizeit,
  testA1LexikUhrzeitTagesablauf,
  testA1LexikWochentageMonateJahreszeiten,
  testA1LexikSchuleArbeitEinfach,
  testA1LexikWetter,
  testA1LexikGefuehleZustaende,
  testA1LexikHausWohnung,
  testA1LexikOrdinalzahlenDatum,

  // A2 Thematic Grammar & Lexik Tests
  testA2Artikel,
  testA2VerbenPraesens,
  testA2GrammatikPraeteritumSeinHabenModal,
  testA2Pluralbildung,
  testA2TrennbareUntrennbareVerben,
  testA2Perfekt,
  testA2Modalverben,
  testA2ModalverbenPerfekt,
  testA2VerbLassen,
  testA2Praepositionen,
  testA2Possessivpronomen,
  testA2PersonalpronomenAkkDat,
  testA2Adjektivsteigerung,
  testA2Adjektivdeklination,
  testA2Imperativ,
  testA2Satzbau,
  testA2NebenordnendeKonjunktionen,
  testA2NebensaetzeEinfach,
  testA2Negation,
  testA2ReflexiveVerben,
  testA2TemporalsaetzeAlsWenn,
  testA2Demonstrativpronomen,
  testA2OrdinalzahlenDatum,
  testA2LexikArbeitBeruf,
  testA2LexikReisenVerkehr,
  testA2LexikGesundheitKoerper,
  testA2LexikKleidung,
  testA2LexikEinkaufen,
  testA2LexikInDerStadt,
  testA2LexikFesteTraditionen,
  testA2LexikLebensstilGewohnheiten,
  testA2LexikErnaehrungRezepte,
  testA2LexikElektronikTechnik,
  testA2LexikBriefeEmails,
  testA2LexikKonflikteLoesungen,
  testA2LexikBank,
  testA2LexikSchuleKurse,

  // B1 Thematic Grammar & Lexik Tests
  testB1Praeteritum,
  testB1PerfektReview,
  testB1Plusquamperfekt,
  testB1Futur1,
  testB1Adjektivdeklination,
  testB1VerbenMitPraepositionen,
  testB1Konjunktiv2Einfuehrung,
  testB1PassivEinfuehrung,
  testB1Genitiv,
  testB1NDeklination,
  testB1Indefinitpronomen,
  testB1InfinitivMitZu,
  testB1KonditionalsaetzeTyp1,
  testB1PartizipienAlsAdjektive,
  testB1IndirekteRedeEinfuehrung,
  testB1Konsekutivsaetze,
  testB1Nebensaetze,
  testB1Relativsaetze,
  testB1LexikBildungStudium,
  testB1LexikArbeitKarriere,
  testB1LexikMedienKommunikation,
  testB1LexikUmweltWetter,
  testB1LexikKulturFreizeit,
  testB1LexikBeziehungen,
  testB1LexikSportFreizeit,
  testB1LexikGesunderLebensstil,
  testB1LexikVeranstaltungenOrganisation,

  // B2 Thematic Grammar & Lexik Tests
  testB2Konjunktiv2,
  testB2Passiv,
  testB2PassivErsatzformen,
  testB2SubjektiveModalverben,
  testB2IndirekteRede,
  testB2NomenVerb,
  testB2KomplexeSatzverbindungen,
  testB2NominalisierungVerbalisierung,
  testB2Futur2,
  testB2Wortbildung,
  testB2PartizipialkonstruktionenEinfuehrung,
  testB2LexikUmweltNachhaltigkeit,
  testB2LexikKulturKunst,
  testB2LexikWissenschaftTechnologie,
  testB2LexikMedienKommunikation,
  testB2LexikPolitik,
  testB2LexikWirtschaftKonsum,

  // C1 Thematic Grammar & Lexik Tests
  testC1IndirekteRede,
  testC1Partizipialkonstruktionen,
  testC1KonjunktivVertiefung,
  testC1PartizipialkonstruktionenAdverbial,
  testC1AdverbialsaetzeVertiefung,
  testC1ErweiterteKonnektorenStil,
  testC1Referenzbezuege,
  testC1LexikPolitikGesellschaft,
  testC1LexikWissenschaftForschung,
  testC1LexikWirtschaftGlobalermarkt,
  testC1LexikInterkulturelleKommunikation,

  // C2 Thematic Grammar & Lexik Tests
  testC2Stilmittel,
  testC2NominalstilVerbalstil,
  testC2Modalpartikeln,
  testC2Absolutformen,
  testC2LexikGlobaleProbleme,
  testC2LexikMedienkritikDigitaleGesellschaft,
  testC2LexikSozialeTrends,
];

// --- MOCK_MODULAR_TESTS ---
// Contains all modular and level tests
import { testA1LevelTest } from './tests/a1-level-test';
import { testA2LevelTest } from './tests/a2-level-test';
import { testB1LevelTest } from './tests/b1-level-test';
import { testB2LevelTest } from './tests/b2-level-test';
import { testC1LevelTest } from './tests/c1-level-test';
import { testC2LevelTest } from './tests/c2-level-test';


export const MOCK_MODULAR_TESTS: ModularTest[] = [
  {
    id: 'a1-grammar-module-1-test',
    level: 'A1',
    topic: 'A1 - Грамматический Модуль 1 (Тест)',
    testType: 'modular',
    description: 'Проверка знаний по темам: Алфавит и приветствия, Личные местоимения и sein/haben, Präsens слабых и сильных глаголов, Артикли и род, Множественное число (основы), W-Fragen.',
    coveredLessonIds: [
      'a1-alphabet-begruessungen',
      'a1-personalpronomen-sein-haben',
      'a1-grammatik-praesens-verben',
      'a1-artikel-genus',
      'a1-pluralbildung',
      'a1-w-fragen',
    ],
    questions: [
      testA1ArtikelGenus.questions[0],
      testA1PronomenSeinHaben.questions[1],
      testA1GrammatikPraesensVerben.questions[0],
      testA1Pluralbildung.questions[2],
      testA1WFragen.questions[0],
      // testA1AlphabetBegruessungen.questions[0], // Placeholder, assuming a test file exists or will be created
    ],
  },
  {
    id: 'a1-grammar-module-2-test',
    level: 'A1',
    topic: 'A1 - Грамматический Модуль 2 (Тест)',
    testType: 'modular',
    description: 'Проверка знаний по темам: Akkusativ, Притяжательные местоимения, Отрицание (nicht/kein), Порядок слов (основы), Модальные глаголы (основы), Imperativ.',
    coveredLessonIds: [
      'a1-akkusativ',
      'a1-possessivpronomen',
      'a1-negation',
      'a1-satzbau-grundlagen',
      'a1-modalverben',
      'a1-imperativ',
    ],
    questions: [
      testA1Akkusativ.questions[0],
      testA1Possessivpronomen.questions[0],
      testA1Negation.questions[0],
      testA1SatzbauGrundlagen.questions[2],
      testA1Modalverben.questions[0],
      testA1Imperativ.questions[0]
    ]
  },
  {
    id: 'a2-grammar-module-1-test',
    level: 'A2',
    topic: 'A2 - Грамматический Модуль 1 (Тест)',
    testType: 'modular',
    description: 'Проверка знаний по темам: Артикли (углубленно), Präsens (углубленно), Plural (углубленно), Perfekt и Модальные глаголы (Präsens).',
    coveredLessonIds: [
      'a2-artikel',
      'a2-verben-praesens',
      'a2-pluralbildung',
      'a2-perfekt',
      'a2-modalverben',
    ],
    questions: [
      testA2Artikel.questions[0],
      testA2VerbenPraesens.questions[1],
      testA2Pluralbildung.questions[0],
      testA2Perfekt.questions[0],
      testA2Modalverben.questions[0],
    ]
  },
   {
    id: 'b1-grammar-module-1-test',
    level: 'B1',
    topic: 'B1 - Грамматический Модуль 1 (Тест)',
    testType: 'modular',
    description: 'Проверка знаний по темам: Придаточные предложения, Относительные предложения, Präteritum, Склонение прилагательных и Глаголы с предлогами.',
    coveredLessonIds: [
      'b1-nebensaetze',
      'b1-relativsaetze',
      'b1-praeteritum',
      'b1-adjektivdeklination',
      'b1-verben-mit-praepositionen',
    ],
    questions: [
      testB1Nebensaetze.questions[0],
      testB1Relativsaetze.questions[0],
      testB1Praeteritum.questions[0],
      testB1Adjektivdeklination.questions[0],
      testB1VerbenMitPraepositionen.questions[0]
    ]
  },
  {
    id: 'b2-grammar-module-1-test',
    level: 'B2',
    topic: 'B2 - Грамматический Модуль 1 (Тест)',
    testType: 'modular',
    description: 'Проверка знаний по темам: Konjunktiv II (углубленно), Nomen-Verb-Verbindungen, Passiv (углубленно), Subjektive Bedeutung der Modalverben, Причастные конструкции (введение).',
    coveredLessonIds: [
      'b2-konjunktiv2',
      'b2-nomen-verb',
      'b2-passiv',
      'b2-subjektive-modalverben',
      'b2-partizipialkonstruktionen-einfuehrung',
    ],
    questions: [
        testB2Konjunktiv2.questions[0],
        testB2NomenVerb.questions[0],
        testB2Passiv.questions[0],
        testB2SubjektiveModalverben.questions[0],
        testB2PartizipialkonstruktionenEinfuehrung.questions[0],
    ]
  },
  {
    id: 'c1-grammar-module-1-test',
    level: 'C1',
    topic: 'C1 - Грамматический Модуль 1 (Тест)',
    testType: 'modular',
    description: 'Проверка знаний по темам: Косвенная речь, Причастные обороты (атрибуты и обстоятельства), Konjunktiv I/II (углубленно), Обстоятельственные придаточные (углубленно), Продвинутые коннекторы, Референциальные связи.',
    coveredLessonIds: [
      'c1-indirekte-rede',
      'c1-partizipialkonstruktionen',
      'c1-konjunktiv-vertiefung',
      'c1-partizipialkonstruktionen-adverbial',
      'c1-adverbialsaetze-vertiefung',
      'c1-erweiterte-konnektoren-stil',
      'c1-referenzbezuege',
    ],
    questions: [
        testC1IndirekteRede.questions[0],
        testC1Partizipialkonstruktionen.questions[0],
        testC1KonjunktivVertiefung.questions[0],
        testC1PartizipialkonstruktionenAdverbial.questions[0],
        testC1AdverbialsaetzeVertiefung.questions[0],
        testC1ErweiterteKonnektorenStil.questions[0],
        testC1Referenzbezuege.questions[0],
    ]
  },
  {
    id: 'c2-grammar-module-1-test',
    level: 'C2',
    topic: 'C2 - Грамматический Модуль 1 (Тест)',
    testType: 'modular',
    description: 'Проверка знаний по темам: Стилистические средства и языковые регистры, Номинальный и вербальный стили, Модальные частицы, Абсолютные конструкции.',
    coveredLessonIds: [
      'c2-stilmittel',
      'c2-nominalstil-verbalstil',
      'c2-modalpartikeln',
      'c2-absolutformen',
    ],
    questions: [
        testC2Stilmittel.questions[0],
        testC2NominalstilVerbalstil.questions[0],
        testC2Modalpartikeln.questions[0],
        testC2Absolutformen.questions[0],
    ]
  },
  // Level Tests
  testA1LevelTest,
  testA2LevelTest,
  testB1LevelTest,
  testB2LevelTest,
  testC1LevelTest,
  testC2LevelTest,
];

// Helper function to get a test by its ID
export const getTestById = (id: string): Test | ModularTest | undefined => {
  const allTests: (Test | ModularTest)[] = [...MOCK_TESTS, ...MOCK_MODULAR_TESTS];
  return allTests.find(test => test.id === id);
};
