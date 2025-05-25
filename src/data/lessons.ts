
import type { Lesson } from '@/types';

// A1 Grammar
import { lessonA1AlphabetBegruessungen } from './lessons/a1-alphabet-begruessungen';
import { lessonA1PersonalpronomenSeinHaben } from './lessons/a1-personalpronomen-sein-haben';
import { lessonA1ArtikelGenus } from './lessons/a1-artikel-genus';
import { lessonA1Pluralbildung } from './lessons/a1-pluralbildung';
import { lessonA1GrammatikPraesensVerben } from './lessons/a1-grammatik-praesens-verben'; // Added
import { lessonA1WFragen } from './lessons/a1-w-fragen'; // Added
import { lessonA1Akkusativ } from './lessons/a1-akkusativ';
import { lessonA1Possessivpronomen } from './lessons/a1-possessivpronomen';
import { lessonA1Negation } from './lessons/a1-negation';
import { lessonA1SatzbauGrundlagen } from './lessons/a1-satzbau-grundlagen';
import { lessonA1Modalverben } from './lessons/a1-modalverben';
import { lessonA1Imperativ } from './lessons/a1-imperativ';
import { lessonA1PraepositionenAkkusativ } from './lessons/a1-praepositionen-akkusativ';
import { lessonA1PraepositionenDativ } from './lessons/a1-praepositionen-dativ';
import { lessonA1PraepositionenDativWechsel } from './lessons/a1-praepositionen-dativ-wechsel'; // Added
import { lessonA1TrennbarVerben } from './lessons/a1-trennbar-verben';

// A1 Lexik
import { lessonA1LexikPersoenlicheInfos } from './lessons/a1-lexik-persoenliche-infos';
import { lessonA1LexikZahlenFarben } from './lessons/a1-lexik-zahlen-farben';
import { lessonA1LexikFamilie } from './lessons/a1-lexik-familie';
import { lessonA1LexikKleidung } from './lessons/a1-lexik-kleidung';
import { lessonA1LexikEssenTrinken } from './lessons/a1-lexik-essen-trinken';
import { lessonA1LexikHobbysFreizeit } from './lessons/a1-lexik-hobbys-freizeit';
import { lessonA1LexikUhrzeitTagesablauf } from './lessons/a1-lexik-uhrzeit-tagesablauf';
import { lessonA1LexikWochentageMonateJahreszeiten } from './lessons/a1-lexik-wochentage-monate-jahreszeiten';
import { lessonA1LexikSchuleArbeitEinfach } from './lessons/a1-lexik-schule-arbeit-einfach';
import { lessonA1LexikWetter } from './lessons/a1-lexik-wetter';
import { lessonA1LexikGefuehleZustaende } from './lessons/a1-lexik-gefuehle-zustaende';
import { lessonA1LexikHausWohnung } from './lessons/a1-lexik-haus-wohnung';
import { lessonA1LexikOrdinalzahlenDatum } from './lessons/a1-lexik-ordinalzahlen-datum'; // Added

// A2 Grammar
import { lessonA2Artikel } from './lessons/a2-artikel';
import { lessonA2VerbenPraesens } from './lessons/a2-verben-praesens';
import { lessonA2Pluralbildung } from './lessons/a2-pluralbildung';
import { lessonA2Perfekt } from './lessons/a2-perfekt';
import { lessonA2GrammatikPraeteritumSeinHabenModal } from './lessons/a2-grammatik-praeteritum-sein-haben-modal'; // Added
import { lessonA2Modalverben } from './lessons/a2-modalverben';
import { lessonA2ModalverbenPerfekt } from './lessons/a2-modalverben-perfekt'; // Added
import { lessonA2VerbLassen } from './lessons/a2-verb-lassen'; // Added
import { lessonA2TrennbareUntrennbareVerben } from './lessons/a2-trennbare-untrennbare-verben'; // Added
import { lessonA2Praepositionen } from './lessons/a2-praepositionen';
import { lessonA2Possessivpronomen } from './lessons/a2-possessivpronomen';
import { lessonA2PersonalpronomenAkkDat } from './lessons/a2-personalpronomen-akk-dat';
import { lessonA2Adjektivsteigerung } from './lessons/a2-adjektivsteigerung';
import { lessonA2Adjektivdeklination } from './lessons/a2-adjektivdeklination';
import { lessonA2Imperativ } from './lessons/a2-imperativ';
import { lessonA2Satzbau } from './lessons/a2-satzbau';
import { lessonA2NebenordnendeKonjunktionen } from './lessons/a2-nebenordnende-konjunktionen';
import { lessonA2NebensaetzeEinfach } from './lessons/a2-nebensaetze-einfach';
import { lessonA2Negation } from './lessons/a2-negation';
import { lessonA2ReflexiveVerben } from './lessons/a2-reflexive-verben';
import { lessonA2TemporalsaetzeAlsWenn } from './lessons/a2-temporalsaetze-als-wenn';
import { lessonA2Demonstrativpronomen } from './lessons/a2-demonstrativpronomen';
import { lessonA2OrdinalzahlenDatum } from './lessons/a2-ordinalzahlen-datum';

// A2 Lexik
import { lessonA2LexikArbeitBeruf } from './lessons/a2-lexik-arbeit-beruf';
import { lessonA2LexikReisenVerkehr } from './lessons/a2-lexik-reisen-verkehr';
import { lessonA2LexikGesundheitKoerper } from './lessons/a2-lexik-gesundheit-koerper';
import { lessonA2LexikKleidung } from './lessons/a2-lexik-kleidung';
import { lessonA2LexikEinkaufen } from './lessons/a2-lexik-einkaufen';
import { lessonA2LexikInDerStadt } from './lessons/a2-lexik-in-der-stadt';
import { lessonA2LexikFesteTraditionen } from './lessons/a2-lexik-feste-traditionen';
import { lessonA2LexikLebensstilGewohnheiten } from './lessons/a2-lexik-lebensstil-gewohnheiten';
import { lessonA2LexikErnaehrungRezepte } from './lessons/a2-lexik-ernaehrung-rezepte';
import { lessonA2LexikElektronikTechnik } from './lessons/a2-lexik-elektronik-technik';
import { lessonA2LexikBriefeEmails } from './lessons/a2-lexik-briefe-emails';
import { lessonA2LexikKonflikteLoesungen } from './lessons/a2-lexik-konflikte-loesungen';
import { lessonA2LexikBank } from './lessons/a2-lexik-bank';
import { lessonA2LexikSchuleKurse } from './lessons/a2-lexik-schule-kurse';

// B1 Grammar
import { lessonB1Praeteritum } from './lessons/b1-praeteritum';
import { lessonB1PerfektReview } from './lessons/b1-perfekt-review'; // Added
import { lessonB1Plusquamperfekt } from './lessons/b1-plusquamperfekt';
import { lessonB1Futur1 } from './lessons/b1-futur1';
import { lessonB1Adjektivdeklination } from './lessons/b1-adjektivdeklination';
import { lessonB1PartizipienAlsAdjektive } from './lessons/b1-partizipien-als-adjektive';
import { lessonB1VerbenMitPraepositionen } from './lessons/b1-verben-mit-praepositionen';
import { lessonB1Konjunktiv2Einfuehrung } from './lessons/b1-konjunktiv2-einfuehrung';
import { lessonB1PassivEinfuehrung } from './lessons/b1-passiv-einfuehrung';
import { lessonB1Genitiv } from './lessons/b1-genitiv';
import { lessonB1NDeklination } from './lessons/b1-n-deklination';
import { lessonB1Indefinitpronomen } from './lessons/b1-indefinitpronomen';
import { lessonB1InfinitivMitZu } from './lessons/b1-infinitiv-mit-zu';
import { lessonB1KonditionalsaetzeTyp1 } from './lessons/b1-konditionalsaetze-typ1'; // Added
import { lessonB1IndirekteRedeEinfuehrung } from './lessons/b1-indirekte-rede-einfuehrung'; // Added
import { lessonB1Konsekutivsaetze } from './lessons/b1-konsekutivsaetze';
import { lessonB1Nebensaetze } from './lessons/b1-nebensaetze';
import { lessonB1Relativsaetze } from './lessons/b1-relativsaetze';


// B1 Lexik
import { lessonB1LexikBildungStudium } from './lessons/b1-lexik-bildung-studium';
import { lessonB1LexikArbeitKarriere } from './lessons/b1-lexik-arbeit-karriere';
import { lessonB1LexikMedienKommunikation } from './lessons/b1-lexik-medien-kommunikation';
import { lessonB1LexikUmweltWetter } from './lessons/b1-lexik-umwelt-wetter';
import { lessonB1LexikKulturFreizeit } from './lessons/b1-lexik-kultur-freizeit';
import { lessonB1LexikBeziehungen } from './lessons/b1-lexik-beziehungen';

// B2 Grammar
import { lessonB2Konjunktiv2 } from './lessons/b2-konjunktiv2';
import { lessonB2NomenVerb } from './lessons/b2-nomen-verb';
import { lessonB2Passiv } from './lessons/b2-passiv';
import { lessonB2PassivErsatzformen } from './lessons/b2-passiv-ersatzformen';
import { lessonB2SubjektiveModalverben } from './lessons/b2-subjektive-modalverben';
import { lessonB2KomplexeSatzverbindungen } from './lessons/b2-komplexe-satzverbindungen';
import { lessonB2NominalisierungVerbalisierung } from './lessons/b2-nominalisierung-verbalisierung';
import { lessonB2Futur2 } from './lessons/b2-futur2';
import { lessonB2Wortbildung } from './lessons/b2-wortbildung';

// B2 Lexik
import { lessonB2LexikUmweltNachhaltigkeit } from './lessons/b2-lexik-umwelt-nachhaltigkeit';
import { lessonB2LexikKulturKunst } from './lessons/b2-lexik-kultur-kunst';
import { lessonB2LexikWissenschaftTechnologie } from './lessons/b2-lexik-wissenschaft-technologie';
import { lessonB2LexikMedienKommunikation } from './lessons/b2-lexik-medien-kommunikation';
import { lessonB2LexikPolitik } from './lessons/b2-lexik-politik';
import { lessonB2LexikWirtschaftKonsum } from './lessons/b2-lexik-wirtschaft-konsum';

// C1 Grammar
import { lessonC1IndirekteRede } from './lessons/c1-indirekte-rede';
import { lessonC1Partizipialkonstruktionen } from './lessons/c1-partizipialkonstruktionen';
import { lessonC1KonjunktivVertiefung } from './lessons/c1-konjunktiv-vertiefung';
import { lessonC1PartizipialkonstruktionenAdverbial } from './lessons/c1-partizipialkonstruktionen-adverbial';
import { lessonC1AdverbialsaetzeVertiefung } from './lessons/c1-adverbialsaetze-vertiefung';

// C1 Lexik
import { lessonC1LexikPolitikGesellschaft } from './lessons/c1-lexik-politik-gesellschaft';
import { lessonC1LexikWissenschaftForschung } from './lessons/c1-lexik-wissenschaft-forschung';
import { lessonC1LexikWirtschaftGlobalermarkt } from './lessons/c1-lexik-wirtschaft-globalermarkt';
import { lessonC1LexikInterkulturelleKommunikation } from './lessons/c1-lexik-interkulturelle-kommunikation';

// C2 Grammar
import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';
import { lessonC2Modalpartikeln } from './lessons/c2-modalpartikeln';

// C2 Lexik
import { lessonC2LexikGlobaleProbleme } from './lessons/c2-lexik-globale-probleme';
import { lessonC2LexikMedienkritikDigitaleGesellschaft } from './lessons/c2-lexik-medienkritik-digitale-gesellschaft';
import { lessonC2LexikSozialeTrends } from './lessons/c2-lexik-soziale-trends';

export const MOCK_LESSONS: Lesson[] = [
  // --- A1 ---
  // Reihenfolge nach Logik und Themenverknüpfung
  lessonA1AlphabetBegruessungen,
  lessonA1PersonalpronomenSeinHaben,
  lessonA1LexikPersoenlicheInfos,
  lessonA1ArtikelGenus,
  lessonA1Pluralbildung,
  lessonA1GrammatikPraesensVerben,
  lessonA1LexikZahlenFarben,
  lessonA1LexikFamilie,
  lessonA1Akkusativ,
  lessonA1Possessivpronomen,
  lessonA1LexikKleidung,
  lessonA1Negation,
  lessonA1LexikEssenTrinken,
  lessonA1SatzbauGrundlagen,
  lessonA1WFragen,
  lessonA1Modalverben,
  lessonA1LexikHobbysFreizeit,
  lessonA1Imperativ,
  lessonA1LexikUhrzeitTagesablauf,
  lessonA1PraepositionenAkkusativ,
  lessonA1PraepositionenDativ,
  lessonA1PraepositionenDativWechsel,
  lessonA1LexikSchuleArbeitEinfach,
  lessonA1TrennbarVerben,
  lessonA1LexikWetter,
  lessonA1LexikWochentageMonateJahreszeiten,
  lessonA1LexikGefuehleZustaende,
  lessonA1LexikHausWohnung,
  lessonA1LexikOrdinalzahlenDatum,

  // --- A2 ---
  // Reihenfolge nach Logik und Themenverknüpfung
  lessonA2Artikel, // Artikel углубленно
  lessonA2VerbenPraesens, // Präsens углубленно
  lessonA2Pluralbildung, // Plural углубленно
  lessonA2LexikArbeitBeruf,
  lessonA2Perfekt, // Perfekt основной
  lessonA2GrammatikPraeteritumSeinHabenModal, // Präteritum для sein/haben/modal
  lessonA2Modalverben, // Modalverben Präsens (углубленно)
  lessonA2ModalverbenPerfekt, // Modalverben Perfekt
  lessonA2VerbLassen, // Глагол lassen
  lessonA2LexikReisenVerkehr,
  lessonA2TrennbareUntrennbareVerben, // Отделяемые/неотделяемые приставки
  lessonA2Praepositionen, // Предлоги с Dativ/Akkusativ/Wechsel
  lessonA2Possessivpronomen, // Притяжательные местоимения во всех падежах
  lessonA2PersonalpronomenAkkDat, // Личные местоимения в Akkusativ/Dativ
  lessonA2LexikGesundheitKoerper,
  lessonA2Adjektivsteigerung, // Степени сравнения
  lessonA2Adjektivdeklination, // Склонение прилагательных (основы)
  lessonA2LexikKleidung,
  lessonA2Imperativ, // Imperativ (углубленно)
  lessonA2Satzbau, // Порядок слов (Hauptsatz, Nebensatz)
  lessonA2NebenordnendeKonjunktionen, // Сочинительные союзы
  lessonA2NebensaetzeEinfach, // Простые придаточные (dass, weil, wenn, ob)
  lessonA2LexikEinkaufen,
  lessonA2Negation, // Отрицание (углубленно)
  lessonA2ReflexiveVerben, // Возвратные глаголы
  lessonA2TemporalsaetzeAlsWenn, // Придаточные времени с als/wenn
  lessonA2LexikInDerStadt,
  lessonA2Demonstrativpronomen, // Указательные местоимения
  lessonA2OrdinalzahlenDatum, // Порядковые числительные и даты (углубленно)
  lessonA2LexikFesteTraditionen,
  lessonA2LexikLebensstilGewohnheiten,
  lessonA2LexikErnaehrungRezepte,
  lessonA2LexikElektronikTechnik,
  lessonA2LexikBriefeEmails,
  lessonA2LexikKonflikteLoesungen,
  lessonA2LexikBank,
  lessonA2LexikSchuleKurse,

  // --- B1 ---
  // Reihenfolge nach Logik und Themenverknüpfung
  lessonB1PerfektReview, // Perfekt vs. Präteritum
  lessonB1Praeteritum, // Präteritum углубленно
  lessonB1Plusquamperfekt,
  lessonB1Futur1,
  lessonB1Adjektivdeklination, // Склонение прилагательных углубленно
  lessonB1PartizipienAlsAdjektive,
  lessonB1VerbenMitPraepositionen,
  lessonB1LexikBildungStudium,
  lessonB1Genitiv,
  lessonB1NDeklination,
  lessonB1Indefinitpronomen,
  lessonB1LexikArbeitKarriere,
  lessonB1Nebensaetze, // Общий урок по придаточным (много союзов)
  lessonB1Relativsaetze,
  lessonB1KonditionalsaetzeTyp1,
  lessonB1Konsekutivsaetze,
  lessonB1InfinitivMitZu,
  lessonB1LexikMedienKommunikation,
  lessonB1Konjunktiv2Einfuehrung,
  lessonB1PassivEinfuehrung,
  lessonB1IndirekteRedeEinfuehrung, // Введение в косвенную речь
  lessonB1LexikUmweltWetter,
  lessonB1LexikKulturFreizeit,
  lessonB1LexikBeziehungen,

  // --- B2 ---
  lessonB2Konjunktiv2,
  lessonB2LexikUmweltNachhaltigkeit,
  lessonB2Passiv,
  lessonB2PassivErsatzformen,
  lessonB2LexikKulturKunst,
  lessonB2NomenVerb,
  lessonB2NominalisierungVerbalisierung,
  lessonB2LexikWissenschaftTechnologie,
  lessonB2SubjektiveModalverben,
  lessonB2Futur2,
  lessonB2LexikMedienKommunikation,
  lessonB2KomplexeSatzverbindungen,
  lessonB2Wortbildung,
  lessonB2LexikPolitik,
  lessonB2LexikWirtschaftKonsum,

  // --- C1 ---
  lessonC1IndirekteRede,
  lessonC1LexikPolitikGesellschaft,
  lessonC1Partizipialkonstruktionen,
  lessonC1KonjunktivVertiefung,
  lessonC1LexikWissenschaftForschung,
  lessonC1PartizipialkonstruktionenAdverbial,
  lessonC1AdverbialsaetzeVertiefung,
  lessonC1LexikWirtschaftGlobalermarkt,
  lessonC1LexikInterkulturelleKommunikation,

  // --- C2 ---
  lessonC2Stilmittel,
  lessonC2LexikGlobaleProbleme,
  lessonC2NominalstilVerbalstil,
  lessonC2Modalpartikeln,
  lessonC2LexikMedienkritikDigitaleGesellschaft,
  lessonC2LexikSozialeTrends,
];

// Helper function to get the count of lessons per level
export const getLessonsCountByLevel = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  MOCK_LESSONS.forEach(lesson => {
    counts[lesson.level] = (counts[lesson.level] || 0) + 1;
  });
  return counts;
};

// Helper function to get the count of all lessons
export const getTotalLessonsCount = (): number => {
  return MOCK_LESSONS.length;
};
