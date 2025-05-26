
import type { Lesson } from '@/types';

// A1 Grammar & Lexik (sortiert für logischen Lernfluss)
import { lessonA1AlphabetBegruessungen } from './lessons/a1-alphabet-begruessungen';
import { lessonA1PersonalpronomenSeinHaben } from './lessons/a1-personalpronomen-sein-haben';
import { lessonA1LexikPersoenlicheInfos } from './lessons/a1-lexik-persoenliche-infos';
import { lessonA1GrammatikPraesensVerben } from './lessons/a1-grammatik-praesens-verben';
import { lessonA1ArtikelGenus } from './lessons/a1-artikel-genus';
import { lessonA1Pluralbildung } from './lessons/a1-pluralbildung';
import { lessonA1LexikZahlenFarben } from './lessons/a1-lexik-zahlen-farben';
import { lessonA1LexikFamilie } from './lessons/a1-lexik-familie';
import { lessonA1Akkusativ } from './lessons/a1-akkusativ';
import { lessonA1Possessivpronomen } from './lessons/a1-possessivpronomen';
import { lessonA1LexikKleidung } from './lessons/a1-lexik-kleidung';
import { lessonA1Negation } from './lessons/a1-negation';
import { lessonA1LexikEssenTrinken } from './lessons/a1-lexik-essen-trinken';
import { lessonA1SatzbauGrundlagen } from './lessons/a1-satzbau-grundlagen';
import { lessonA1WFragen } from './lessons/a1-w-fragen';
import { lessonA1Modalverben } from './lessons/a1-modalverben';
import { lessonA1LexikHobbysFreizeit } from './lessons/a1-lexik-hobbys-freizeit';
import { lessonA1Imperativ } from './lessons/a1-imperativ';
import { lessonA1LexikUhrzeitTagesablauf } from './lessons/a1-lexik-uhrzeit-tagesablauf';
import { lessonA1PraepositionenAkkusativ } from './lessons/a1-praepositionen-akkusativ';
import { lessonA1PraepositionenDativ } from './lessons/a1-praepositionen-dativ';
import { lessonA1PraepositionenDativWechsel } from './lessons/a1-praepositionen-dativ-wechsel';
import { lessonA1LexikSchuleArbeitEinfach } from './lessons/a1-lexik-schule-arbeit-einfach';
import { lessonA1TrennbarVerben } from './lessons/a1-trennbar-verben';
import { lessonA1LexikWetter } from './lessons/a1-lexik-wetter';
import { lessonA1LexikWochentageMonateJahreszeiten } from './lessons/a1-lexik-wochentage-monate-jahreszeiten';
import { lessonA1LexikGefuehleZustaende } from './lessons/a1-lexik-gefuehle-zustaende';
import { lessonA1LexikHausWohnung } from './lessons/a1-lexik-haus-wohnung';
import { lessonA1LexikOrdinalzahlenDatum } from './lessons/a1-lexik-ordinalzahlen-datum';


// A2 Grammar & Lexik (sortiert für logischen Lernfluss)
import { lessonA2Artikel } from './lessons/a2-artikel';
import { lessonA2VerbenPraesens } from './lessons/a2-verben-praesens';
import { lessonA2Pluralbildung } from './lessons/a2-pluralbildung';
import { lessonA2GrammatikPraeteritumSeinHabenModal } from './lessons/a2-grammatik-praeteritum-sein-haben-modal';
import { lessonA2Perfekt } from './lessons/a2-perfekt';
import { lessonA2Modalverben } from './lessons/a2-modalverben';
import { lessonA2ModalverbenPerfekt } from './lessons/a2-modalverben-perfekt';
import { lessonA2TrennbareUntrennbareVerben } from './lessons/a2-trennbare-untrennbare-verben';
import { lessonA2VerbLassen } from './lessons/a2-verb-lassen';
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


// B1 Grammar & Lexik
import { lessonB1Praeteritum } from './lessons/b1-praeteritum';
import { lessonB1PerfektReview } from './lessons/b1-perfekt-review';
import { lessonB1Plusquamperfekt } from './lessons/b1-plusquamperfekt';
import { lessonB1Futur1 } from './lessons/b1-futur1';
import { lessonB1Nebensaetze } from './lessons/b1-nebensaetze';
import { lessonB1Relativsaetze } from './lessons/b1-relativsaetze';
import { lessonB1KonditionalsaetzeTyp1 } from './lessons/b1-konditionalsaetze-typ1';
import { lessonB1Konsekutivsaetze } from './lessons/b1-konsekutivsaetze';
import { lessonB1Adjektivdeklination } from './lessons/b1-adjektivdeklination';
import { lessonB1PartizipienAlsAdjektive } from './lessons/b1-partizipien-als-adjektive';
import { lessonB1VerbenMitPraepositionen } from './lessons/b1-verben-mit-praepositionen';
import { lessonB1Konjunktiv2Einfuehrung } from './lessons/b1-konjunktiv2-einfuehrung';
import { lessonB1PassivEinfuehrung } from './lessons/b1-passiv-einfuehrung';
import { lessonB1Genitiv } from './lessons/b1-genitiv';
import { lessonB1NDeklination } from './lessons/b1-n-deklination';
import { lessonB1Indefinitpronomen } from './lessons/b1-indefinitpronomen';
import { lessonB1InfinitivMitZu } from './lessons/b1-infinitiv-mit-zu';
import { lessonB1IndirekteRedeEinfuehrung } from './lessons/b1-indirekte-rede-einfuehrung';
// B1 Lexik
import { lessonB1LexikBildungStudium } from './lessons/b1-lexik-bildung-studium';
import { lessonB1LexikArbeitKarriere } from './lessons/b1-lexik-arbeit-karriere';
import { lessonB1LexikMedienKommunikation } from './lessons/b1-lexik-medien-kommunikation';
import { lessonB1LexikUmweltWetter } from './lessons/b1-lexik-umwelt-wetter';
import { lessonB1LexikKulturFreizeit } from './lessons/b1-lexik-kultur-freizeit';
import { lessonB1LexikBeziehungen } from './lessons/b1-lexik-beziehungen';
import { lessonB1LexikSportFreizeit } from './lessons/b1-lexik-sport-freizeit'; // Added


// B2 Grammar & Lexik
import { lessonB2Konjunktiv2 } from './lessons/b2-konjunktiv2';
import { lessonB2Passiv } from './lessons/b2-passiv';
import { lessonB2PassivErsatzformen } from './lessons/b2-passiv-ersatzformen';
import { lessonB2SubjektiveModalverben } from './lessons/b2-subjektive-modalverben';
import { lessonB2NomenVerb } from './lessons/b2-nomen-verb';
import { lessonB2KomplexeSatzverbindungen } from './lessons/b2-komplexe-satzverbindungen';
import { lessonB2NominalisierungVerbalisierung } from './lessons/b2-nominalisierung-verbalisierung';
import { lessonB2Futur2 } from './lessons/b2-futur2';
import { lessonB2Wortbildung } from './lessons/b2-wortbildung';
import { lessonB2IndirekteRede } from './lessons/b2-indirekte-rede';
import { lessonB2PartizipialkonstruktionenEinfuehrung } from './lessons/b2-partizipialkonstruktionen-einfuehrung';
// B2 Lexik
import { lessonB2LexikUmweltNachhaltigkeit } from './lessons/b2-lexik-umwelt-nachhaltigkeit';
import { lessonB2LexikKulturKunst } from './lessons/b2-lexik-kultur-kunst';
import { lessonB2LexikWissenschaftTechnologie } from './lessons/b2-lexik-wissenschaft-technologie';
import { lessonB2LexikMedienKommunikation } from './lessons/b2-lexik-medien-kommunikation';
import { lessonB2LexikPolitik } from './lessons/b2-lexik-politik';
import { lessonB2LexikWirtschaftKonsum } from './lessons/b2-lexik-wirtschaft-konsum';


// C1 Grammar & Lexik
import { lessonC1KonjunktivVertiefung } from './lessons/c1-konjunktiv-vertiefung';
import { lessonC1IndirekteRede } from './lessons/c1-indirekte-rede';
import { lessonC1Partizipialkonstruktionen } from './lessons/c1-partizipialkonstruktionen';
import { lessonC1PartizipialkonstruktionenAdverbial } from './lessons/c1-partizipialkonstruktionen-adverbial';
import { lessonC1AdverbialsaetzeVertiefung } from './lessons/c1-adverbialsaetze-vertiefung';
import { lessonC1ErweiterteKonnektorenStil } from './lessons/c1-erweiterte-konnektoren-stil';
import { lessonC1Referenzbezuege } from './lessons/c1-referenzbezuege';
// C1 Lexik
import { lessonC1LexikPolitikGesellschaft } from './lessons/c1-lexik-politik-gesellschaft';
import { lessonC1LexikWissenschaftForschung } from './lessons/c1-lexik-wissenschaft-forschung';
import { lessonC1LexikWirtschaftGlobalermarkt } from './lessons/c1-lexik-wirtschaft-globalermarkt';
import { lessonC1LexikInterkulturelleKommunikation } from './lessons/c1-lexik-interkulturelle-kommunikation';


// C2 Grammar & Stil & Lexik
import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';
import { lessonC2Modalpartikeln } from './lessons/c2-modalpartikeln';
import { lessonC2Absolutformen } from './lessons/c2-absolutformen';
// C2 Lexik
import { lessonC2LexikGlobaleProbleme } from './lessons/c2-lexik-globale-probleme';
import { lessonC2LexikMedienkritikDigitaleGesellschaft } from './lessons/c2-lexik-medienkritik-digitale-gesellschaft';
import { lessonC2LexikSozialeTrends } from './lessons/c2-lexik-soziale-trends';


export const MOCK_LESSONS: Lesson[] = [
  // A1 - Grundlagen & erste Kommunikation
  lessonA1AlphabetBegruessungen,
  lessonA1LexikPersoenlicheInfos,
  lessonA1PersonalpronomenSeinHaben,
  lessonA1LexikZahlenFarben,
  lessonA1SatzbauGrundlagen,
  lessonA1WFragen,
  lessonA1GrammatikPraesensVerben,

  // A1 - Alltagsthemen & Grammatik-Basics
  lessonA1ArtikelGenus,
  lessonA1Pluralbildung,
  lessonA1LexikFamilie,
  lessonA1Possessivpronomen,
  lessonA1LexikHausWohnung,
  lessonA1Akkusativ,
  lessonA1Negation,
  lessonA1LexikEssenTrinken,
  lessonA1LexikKleidung,
  lessonA1Modalverben,
  lessonA1LexikHobbysFreizeit,
  lessonA1Imperativ,
  lessonA1LexikUhrzeitTagesablauf,
  lessonA1LexikWochentageMonateJahreszeiten,
  lessonA1LexikGefuehleZustaende,
  lessonA1PraepositionenAkkusativ,
  lessonA1PraepositionenDativ,
  lessonA1PraepositionenDativWechsel,
  lessonA1TrennbarVerben,
  lessonA1LexikSchuleArbeitEinfach,
  lessonA1LexikWetter,
  lessonA1LexikOrdinalzahlenDatum,

  // A2 - Vertiefung Grammatik & Erweiterung Alltag
  lessonA2Artikel,
  lessonA2VerbenPraesens,
  lessonA2Pluralbildung,
  lessonA2Adjektivdeklination,
  lessonA2Adjektivsteigerung,
  lessonA2PersonalpronomenAkkDat,
  lessonA2Possessivpronomen,
  lessonA2Modalverben,
  lessonA2Imperativ,
  lessonA2Negation,
  lessonA2Satzbau,
  lessonA2NebenordnendeKonjunktionen,
  lessonA2NebensaetzeEinfach,
  lessonA2Praepositionen,
  lessonA2ReflexiveVerben,
  lessonA2Demonstrativpronomen,
  lessonA2TemporalsaetzeAlsWenn,
  lessonA2OrdinalzahlenDatum,
  lessonA2GrammatikPraeteritumSeinHabenModal,
  lessonA2Perfekt,
  lessonA2ModalverbenPerfekt,
  lessonA2TrennbareUntrennbareVerben,
  lessonA2VerbLassen,
  // A2 Lexik
  lessonA2LexikArbeitBeruf,
  lessonA2LexikReisenVerkehr,
  lessonA2LexikGesundheitKoerper,
  lessonA2LexikKleidung,
  lessonA2LexikEinkaufen,
  lessonA2LexikInDerStadt,
  lessonA2LexikFesteTraditionen,
  lessonA2LexikLebensstilGewohnheiten,
  lessonA2LexikErnaehrungRezepte,
  lessonA2LexikElektronikTechnik,
  lessonA2LexikBriefeEmails,
  lessonA2LexikKonflikteLoesungen,
  lessonA2LexikBank,
  lessonA2LexikSchuleKurse,


  // B1 - Ausbau Grammatik & komplexere Themen
  lessonB1Praeteritum,
  lessonB1PerfektReview,
  lessonB1Plusquamperfekt,
  lessonB1Futur1,
  lessonB1Genitiv,
  lessonB1NDeklination,
  lessonB1Adjektivdeklination,
  lessonB1VerbenMitPraepositionen,
  lessonB1Konjunktiv2Einfuehrung,
  lessonB1PassivEinfuehrung,
  lessonB1Indefinitpronomen,
  lessonB1Nebensaetze,
  lessonB1Relativsaetze,
  lessonB1KonditionalsaetzeTyp1,
  lessonB1Konsekutivsaetze,
  lessonB1InfinitivMitZu,
  lessonB1PartizipienAlsAdjektive,
  lessonB1IndirekteRedeEinfuehrung,
  // B1 Lexik
  lessonB1LexikBildungStudium,
  lessonB1LexikArbeitKarriere,
  lessonB1LexikMedienKommunikation,
  lessonB1LexikUmweltWetter,
  lessonB1LexikKulturFreizeit,
  lessonB1LexikBeziehungen,
  lessonB1LexikSportFreizeit,

  // B2 - Fortgeschrittene Grammatik & Diskussionen
  lessonB2Konjunktiv2,
  lessonB2Passiv,
  lessonB2PassivErsatzformen,
  lessonB2SubjektiveModalverben,
  lessonB2IndirekteRede,
  lessonB2NomenVerb,
  lessonB2KomplexeSatzverbindungen,
  lessonB2NominalisierungVerbalisierung,
  lessonB2Futur2,
  lessonB2Wortbildung,
  lessonB2PartizipialkonstruktionenEinfuehrung,
  // B2 Lexik
  lessonB2LexikUmweltNachhaltigkeit,
  lessonB2LexikKulturKunst,
  lessonB2LexikWissenschaftTechnologie,
  lessonB2LexikMedienKommunikation,
  lessonB2LexikPolitik,
  lessonB2LexikWirtschaftKonsum,

  // C1 - Akademische & professionelle Sprache
  lessonC1KonjunktivVertiefung,
  lessonC1IndirekteRede,
  lessonC1Partizipialkonstruktionen,
  lessonC1PartizipialkonstruktionenAdverbial,
  lessonC1AdverbialsaetzeVertiefung,
  lessonC1ErweiterteKonnektorenStil,
  lessonC1Referenzbezuege,
  // C1 Lexik
  lessonC1LexikPolitikGesellschaft,
  lessonC1LexikWissenschaftForschung,
  lessonC1LexikWirtschaftGlobalermarkt,
  lessonC1LexikInterkulturelleKommunikation,

  // C2 - Hohes Niveau & Stilistik
  lessonC2Stilmittel,
  lessonC2NominalstilVerbalstil,
  lessonC2Modalpartikeln,
  lessonC2Absolutformen,
  // C2 Lexik
  lessonC2LexikGlobaleProbleme,
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
