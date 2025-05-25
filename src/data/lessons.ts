
import type { Lesson } from '@/types';

// A1 Grammar
import { lessonA1AlphabetBegruessungen } from './lessons/a1-alphabet-begruessungen';
import { lessonA1PersonalpronomenSeinHaben } from './lessons/a1-personalpronomen-sein-haben';
import { lessonA1ArtikelGenus } from './lessons/a1-artikel-genus';
import { lessonA1Pluralbildung } from './lessons/a1-pluralbildung';
import { lessonA1GrammatikPraesensVerben } from './lessons/a1-grammatik-praesens-verben'; // Added
import { lessonA1WFragen } from './lessons/a1-w-fragen'; // Added
import { lessonA1Akkusativ } from './lessons/a1-akkusativ';
import { lessonA1Negation } from './lessons/a1-negation';
import { lessonA1SatzbauGrundlagen } from './lessons/a1-satzbau-grundlagen';
import { lessonA1Modalverben } from './lessons/a1-modalverben';
import { lessonA1Possessivpronomen } from './lessons/a1-possessivpronomen';
import { lessonA1Imperativ } from './lessons/a1-imperativ';
import { lessonA1PraepositionenAkkusativ } from './lessons/a1-praepositionen-akkusativ';
import { lessonA1PraepositionenDativ } from './lessons/a1-praepositionen-dativ';
import { lessonA1TrennbarVerben } from './lessons/a1-trennbar-verben';
import { lessonA1PraepositionenDativWechsel } from './lessons/a1-praepositionen-dativ-wechsel';


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
import { lessonA2GrammatikPraeteritumSeinHabenModal } from './lessons/a2-grammatik-praeteritum-sein-haben-modal'; // Added
import { lessonA2Perfekt } from './lessons/a2-perfekt';
import { lessonA2Modalverben } from './lessons/a2-modalverben';
import { lessonA2ModalverbenPerfekt } from './lessons/a2-modalverben-perfekt'; // Added
import { lessonA2Praepositionen } from './lessons/a2-praepositionen';
import { lessonA2Possessivpronomen } from './lessons/a2-possessivpronomen';
import { lessonA2PersonalpronomenAkkDat } from './lessons/a2-personalpronomen-akk-dat';
import { lessonA2Adjektivsteigerung } from './lessons/a2-adjektivsteigerung';
import { lessonA2Adjektivdeklination } from './lessons/a2-adjektivdeklination';
import { lessonA2Imperativ } from './lessons/a2-imperativ';
import { lessonA2Satzbau } from './lessons/a2-satzbau';
import { lessonA2NebensaetzeEinfach } from './lessons/a2-nebensaetze-einfach';
import { lessonA2NebenordnendeKonjunktionen } from './lessons/a2-nebenordnende-konjunktionen';
import { lessonA2Negation } from './lessons/a2-negation';
import { lessonA2ReflexiveVerben } from './lessons/a2-reflexive-verben';
import { lessonA2TemporalsaetzeAlsWenn } from './lessons/a2-temporalsaetze-als-wenn';
import { lessonA2Demonstrativpronomen } from './lessons/a2-demonstrativpronomen';
import { lessonA2OrdinalzahlenDatum } from './lessons/a2-ordinalzahlen-datum';
import { lessonA2VerbLassen } from './lessons/a2-verb-lassen'; // Added
import { lessonA2TrennbareUntrennbareVerben } from './lessons/a2-trennbare-untrennbare-verben'; // Added


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

// B1 Lessons
import { lessonB1Praeteritum } from './lessons/b1-praeteritum';
import { lessonB1PerfektReview } from './lessons/b1-perfekt-review';
import { lessonB1Plusquamperfekt } from './lessons/b1-plusquamperfekt';
import { lessonB1Futur1 } from './lessons/b1-futur1';
import { lessonB1Adjektivdeklination } from './lessons/b1-adjektivdeklination';
import { lessonB1VerbenMitPraepositionen } from './lessons/b1-verben-mit-praepositionen';
import { lessonB1Konjunktiv2Einfuehrung } from './lessons/b1-konjunktiv2-einfuehrung';
import { lessonB1PassivEinfuehrung } from './lessons/b1-passiv-einfuehrung';
import { lessonB1Genitiv } from './lessons/b1-genitiv';
import { lessonB1NDeklination } from './lessons/b1-n-deklination';
import { lessonB1Indefinitpronomen } from './lessons/b1-indefinitpronomen';
import { lessonB1InfinitivMitZu } from './lessons/b1-infinitiv-mit-zu';
import { lessonB1Konsekutivsaetze } from './lessons/b1-konsekutivsaetze';
import { lessonB1Nebensaetze } from './lessons/b1-nebensaetze';
import { lessonB1Relativsaetze } from './lessons/b1-relativsaetze';
import { lessonB1KonditionalsaetzeTyp1 } from './lessons/b1-konditionalsaetze-typ1'; // Added
import { lessonB1PartizipienAlsAdjektive } from './lessons/b1-partizipien-als-adjektive'; // Added
import { lessonB1IndirekteRedeEinfuehrung } from './lessons/b1-indirekte-rede-einfuehrung'; // Added

// B1 Lexik
import { lessonB1LexikBildungStudium } from './lessons/b1-lexik-bildung-studium';
import { lessonB1LexikArbeitKarriere } from './lessons/b1-lexik-arbeit-karriere';
import { lessonB1LexikMedienKommunikation } from './lessons/b1-lexik-medien-kommunikation';
import { lessonB1LexikUmweltWetter } from './lessons/b1-lexik-umwelt-wetter';
import { lessonB1LexikKulturFreizeit } from './lessons/b1-lexik-kultur-freizeit';
import { lessonB1LexikBeziehungen } from './lessons/b1-lexik-beziehungen';

// B2 Lessons
import { lessonB2Konjunktiv2 } from './lessons/b2-konjunktiv2';
import { lessonB2NomenVerb } from './lessons/b2-nomen-verb';
import { lessonB2Passiv } from './lessons/b2-passiv';
import { lessonB2PassivErsatzformen } from './lessons/b2-passiv-ersatzformen';
import { lessonB2SubjektiveModalverben } from './lessons/b2-subjektive-modalverben';
import { lessonB2KomplexeSatzverbindungen } from './lessons/b2-komplexe-satzverbindungen';
import { lessonB2NominalisierungVerbalisierung } from './lessons/b2-nominalisierung-verbalisierung';
import { lessonB2Futur2 } from './lessons/b2-futur2';
import { lessonB2Wortbildung } from './lessons/b2-wortbildung';
import { lessonB2IndirekteRede } from './lessons/b2-indirekte-rede'; // Added
import { lessonB2PartizipialkonstruktionenEinfuehrung } from './lessons/b2-partizipialkonstruktionen-einfuehrung'; // Added

// B2 Lexik
import { lessonB2LexikUmweltNachhaltigkeit } from './lessons/b2-lexik-umwelt-nachhaltigkeit';
import { lessonB2LexikKulturKunst } from './lessons/b2-lexik-kultur-kunst';
import { lessonB2LexikWissenschaftTechnologie } from './lessons/b2-lexik-wissenschaft-technologie';
import { lessonB2LexikMedienKommunikation } from './lessons/b2-lexik-medien-kommunikation';
import { lessonB2LexikPolitik } from './lessons/b2-lexik-politik';
import { lessonB2LexikWirtschaftKonsum } from './lessons/b2-lexik-wirtschaft-konsum';


// C1 Lessons
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


// C2 Lessons
import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';
import { lessonC2Modalpartikeln } from './lessons/c2-modalpartikeln';

// C2 Lexik
import { lessonC2LexikGlobaleProbleme } from './lessons/c2-lexik-globale-probleme';
import { lessonC2LexikMedienkritikDigitaleGesellschaft } from './lessons/c2-lexik-medienkritik-digitale-gesellschaft';
import { lessonC2LexikSozialeTrends } from './lessons/c2-lexik-soziale-trends';


export const MOCK_LESSONS: Lesson[] = [
  // A1
  lessonA1AlphabetBegruessungen,
  lessonA1PersonalpronomenSeinHaben,
  lessonA1LexikPersoenlicheInfos,
  lessonA1ArtikelGenus,
  lessonA1Pluralbildung,
  lessonA1LexikZahlenFarben,
  lessonA1LexikFamilie,
  lessonA1GrammatikPraesensVerben,
  lessonA1WFragen,
  lessonA1Akkusativ,
  lessonA1Possessivpronomen,
  lessonA1LexikKleidung,
  lessonA1Negation,
  lessonA1LexikEssenTrinken,
  lessonA1SatzbauGrundlagen,
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

  // A2
  lessonA2Artikel,
  lessonA2VerbenPraesens,
  lessonA2GrammatikPraeteritumSeinHabenModal,
  lessonA2Pluralbildung,
  lessonA2Adjektivdeklination,
  lessonA2Adjektivsteigerung,
  lessonA2Demonstrativpronomen,
  lessonA2OrdinalzahlenDatum,
  lessonA2TemporalsaetzeAlsWenn,
  lessonA2Satzbau,
  lessonA2Perfekt,
  lessonA2Modalverben,
  lessonA2ModalverbenPerfekt,
  lessonA2TrennbareUntrennbareVerben,
  lessonA2VerbLassen,
  lessonA2ReflexiveVerben,
  lessonA2Praepositionen,
  lessonA2PersonalpronomenAkkDat,
  lessonA2Possessivpronomen,
  lessonA2NebenordnendeKonjunktionen,
  lessonA2NebensaetzeEinfach,
  lessonA2Negation,
  // A2 Lexik (interspersed)
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


  // B1
  lessonB1Praeteritum,
  lessonB1PerfektReview,
  lessonB1Plusquamperfekt,
  lessonB1Futur1,
  lessonB1Adjektivdeklination,
  lessonB1Genitiv,
  lessonB1NDeklination,
  lessonB1Indefinitpronomen,
  lessonB1PassivEinfuehrung,
  lessonB1VerbenMitPraepositionen,
  lessonB1InfinitivMitZu,
  lessonB1Konjunktiv2Einfuehrung,
  lessonB1KonditionalsaetzeTyp1,
  lessonB1PartizipienAlsAdjektive,
  lessonB1IndirekteRedeEinfuehrung,
  lessonB1Konsekutivsaetze,
  lessonB1Nebensaetze,
  lessonB1Relativsaetze,
  // B1 Lexik (interspersed)
  lessonB1LexikBildungStudium,
  lessonB1LexikArbeitKarriere,
  lessonB1LexikMedienKommunikation,
  lessonB1LexikUmweltWetter,
  lessonB1LexikKulturFreizeit,
  lessonB1LexikBeziehungen,

  // B2
  lessonB2Konjunktiv2,
  lessonB2Passiv,
  lessonB2PassivErsatzformen,
  lessonB2SubjektiveModalverben,
  lessonB2Futur2,
  lessonB2NominalisierungVerbalisierung,
  lessonB2NomenVerb,
  lessonB2Wortbildung,
  lessonB2KomplexeSatzverbindungen,
  lessonB2IndirekteRede,
  lessonB2PartizipialkonstruktionenEinfuehrung,
  // B2 Lexik (interspersed)
  lessonB2LexikUmweltNachhaltigkeit,
  lessonB2LexikKulturKunst,
  lessonB2LexikWissenschaftTechnologie,
  lessonB2LexikMedienKommunikation,
  lessonB2LexikPolitik,
  lessonB2LexikWirtschaftKonsum,

  // C1
  lessonC1KonjunktivVertiefung,
  lessonC1IndirekteRede,
  lessonC1Partizipialkonstruktionen,
  lessonC1PartizipialkonstruktionenAdverbial,
  lessonC1AdverbialsaetzeVertiefung,
  // C1 Lexik (interspersed)
  lessonC1LexikPolitikGesellschaft,
  lessonC1LexikWissenschaftForschung,
  lessonC1LexikWirtschaftGlobalermarkt,
  lessonC1LexikInterkulturelleKommunikation,

  // C2
  lessonC2Stilmittel,
  lessonC2NominalstilVerbalstil,
  lessonC2Modalpartikeln,
  // C2 Lexik (interspersed)
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

