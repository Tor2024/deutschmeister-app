
import type { Lesson } from '@/types';

// A1 Grammar & Lexik (Interleaved)
import { lessonA1AlphabetBegruessungen } from './lessons/a1-alphabet-begruessungen';
import { lessonA1PersonalpronomenSeinHaben } from './lessons/a1-personalpronomen-sein-haben';
import { lessonA1LexikPersoenlicheInfos } from './lessons/a1-lexik-persoenliche-infos';
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
import { lessonA1Modalverben } from './lessons/a1-modalverben';
import { lessonA1LexikHobbysFreizeit } from './lessons/a1-lexik-hobbys-freizeit';
import { lessonA1Imperativ } from './lessons/a1-imperativ';
import { lessonA1LexikUhrzeitTagesablauf } from './lessons/a1-lexik-uhrzeit-tagesablauf';
import { lessonA1PraepositionenAkkusativ } from './lessons/a1-praepositionen-akkusativ';
import { lessonA1PraepositionenDativ } from './lessons/a1-praepositionen-dativ';
import { lessonA1LexikSchuleArbeitEinfach } from './lessons/a1-lexik-schule-arbeit-einfach';
import { lessonA1TrennbarVerben } from './lessons/a1-trennbar-verben';
import { lessonA1LexikWetter } from './lessons/a1-lexik-wetter';
import { lessonA1LexikWochentageMonateJahreszeiten } from './lessons/a1-lexik-wochentage-monate-jahreszeiten';
import { lessonA1LexikGefuehleZustaende } from './lessons/a1-lexik-gefuehle-zustaende';

// A2 Grammar & Lexik (To be reordered for interleaving)
import { lessonA2Artikel } from './lessons/a2-artikel';
import { lessonA2VerbenPraesens } from './lessons/a2-verben-praesens';
import { lessonA2LexikArbeitBeruf } from './lessons/a2-lexik-arbeit-beruf';
import { lessonA2Pluralbildung } from './lessons/a2-pluralbildung';
import { lessonA2Perfekt } from './lessons/a2-perfekt';
import { lessonA2LexikReisenVerkehr } from './lessons/a2-lexik-reisen-verkehr';
import { lessonA2Modalverben } from './lessons/a2-modalverben';
import { lessonA2Praepositionen } from './lessons/a2-praepositionen';
import { lessonA2LexikGesundheitKoerper } from './lessons/a2-lexik-gesundheit-koerper';
import { lessonA2Possessivpronomen } from './lessons/a2-possessivpronomen';
import { lessonA2PersonalpronomenAkkDat } from './lessons/a2-personalpronomen-akk-dat';
import { lessonA2LexikKleidung } from './lessons/a2-lexik-kleidung';
import { lessonA2Adjektivsteigerung } from './lessons/a2-adjektivsteigerung';
import { lessonA2Adjektivdeklination } from './lessons/a2-adjektivdeklination';
import { lessonA2LexikEinkaufen } from './lessons/a2-lexik-einkaufen';
import { lessonA2Imperativ } from './lessons/a2-imperativ';
import { lessonA2Satzbau } from './lessons/a2-satzbau';
import { lessonA2LexikInDerStadt } from './lessons/a2-lexik-in-der-stadt';
import { lessonA2NebensaetzeEinfach } from './lessons/a2-nebensaetze-einfach';
import { lessonA2NebenordnendeKonjunktionen } from './lessons/a2-nebenordnende-konjunktionen';
import { lessonA2LexikFesteTraditionen } from './lessons/a2-lexik-feste-traditionen';
import { lessonA2Negation } from './lessons/a2-negation';
import { lessonA2ReflexiveVerben } from './lessons/a2-reflexive-verben';
import { lessonA2LexikLebensstilGewohnheiten } from './lessons/a2-lexik-lebensstil-gewohnheiten';
import { lessonA2TemporalsaetzeAlsWenn } from './lessons/a2-temporalsaetze-als-wenn';
import { lessonA2Demonstrativpronomen } from './lessons/a2-demonstrativpronomen';
import { lessonA2LexikErnaehrungRezepte } from './lessons/a2-lexik-ernaehrung-rezepte';
import { lessonA2OrdinalzahlenDatum } from './lessons/a2-ordinalzahlen-datum';
import { lessonA2LexikElektronikTechnik } from './lessons/a2-lexik-elektronik-technik';
import { lessonA2LexikBriefeEmails } from './lessons/a2-lexik-briefe-emails';
import { lessonA2LexikKonflikteLoesungen } from './lessons/a2-lexik-konflikte-loesungen';
import { lessonA2LexikBank } from './lessons/a2-lexik-bank';


// B1 Grammar & Lexik (To be reordered for interleaving)
import { lessonB1Praeteritum } from './lessons/b1-praeteritum';
import { lessonB1LexikBildungStudium } from './lessons/b1-lexik-bildung-studium';
import { lessonB1Nebensaetze } from './lessons/b1-nebensaetze';
import { lessonB1Relativsaetze } from './lessons/b1-relativsaetze';
import { lessonB1LexikArbeitKarriere } from './lessons/b1-lexik-arbeit-karriere';
import { lessonB1Adjektivdeklination } from './lessons/b1-adjektivdeklination';
import { lessonB1VerbenMitPraepositionen } from './lessons/b1-verben-mit-praepositionen';
import { lessonB1LexikMedienKommunikation } from './lessons/b1-lexik-medien-kommunikation';
import { lessonB1Plusquamperfekt } from './lessons/b1-plusquamperfekt';
import { lessonB1Futur1 } from './lessons/b1-futur1';
import { lessonB1LexikUmweltWetter } from './lessons/b1-lexik-umwelt-wetter';
import { lessonB1Konjunktiv2Einfuehrung } from './lessons/b1-konjunktiv2-einfuehrung';
import { lessonB1PassivEinfuehrung } from './lessons/b1-passiv-einfuehrung';
import { lessonB1LexikKulturFreizeit } from './lessons/b1-lexik-kultur-freizeit';
import { lessonB1Genitiv } from './lessons/b1-genitiv';
import { lessonB1NDeklination } from './lessons/b1-n-deklination';
import { lessonB1LexikBeziehungen } from './lessons/b1-lexik-beziehungen';
import { lessonB1Indefinitpronomen } from './lessons/b1-indefinitpronomen';
import { lessonB1InfinitivMitZu } from './lessons/b1-infinitiv-mit-zu';
import { lessonB1Konsekutivsaetze } from './lessons/b1-konsekutivsaetze';

// B2 Grammar & Lexik (To be reordered for interleaving)
import { lessonB2Konjunktiv2 } from './lessons/b2-konjunktiv2';
import { lessonB2LexikUmweltNachhaltigkeit } from './lessons/b2-lexik-umwelt-nachhaltigkeit';
import { lessonB2NomenVerb } from './lessons/b2-nomen-verb';
import { lessonB2Passiv } from './lessons/b2-passiv';
import { lessonB2LexikKulturKunst } from './lessons/b2-lexik-kultur-kunst';
import { lessonB2PassivErsatzformen } from './lessons/b2-passiv-ersatzformen';
import { lessonB2SubjektiveModalverben } from './lessons/b2-subjektive-modalverben';
import { lessonB2LexikWissenschaftTechnologie } from './lessons/b2-lexik-wissenschaft-technologie';
import { lessonB2KomplexeSatzverbindungen } from './lessons/b2-komplexe-satzverbindungen';
import { lessonB2NominalisierungVerbalisierung } from './lessons/b2-nominalisierung-verbalisierung';
import { lessonB2LexikMedienKommunikation } from './lessons/b2-lexik-medien-kommunikation';
import { lessonB2Futur2 } from './lessons/b2-futur2';
import { lessonB2Wortbildung } from './lessons/b2-wortbildung';
import { lessonB2LexikPolitik } from './lessons/b2-lexik-politik';
import { lessonB2LexikWirtschaftKonsum } from './lessons/b2-lexik-wirtschaft-konsum';


// C1 Grammar & Lexik (To be reordered for interleaving)
import { lessonC1IndirekteRede } from './lessons/c1-indirekte-rede';
import { lessonC1LexikPolitikGesellschaft } from './lessons/c1-lexik-politik-gesellschaft';
import { lessonC1Partizipialkonstruktionen } from './lessons/c1-partizipialkonstruktionen';
import { lessonC1KonjunktivVertiefung } from './lessons/c1-konjunktiv-vertiefung';
import { lessonC1LexikWissenschaftForschung } from './lessons/c1-lexik-wissenschaft-forschung';
import { lessonC1PartizipialkonstruktionenAdverbial } from './lessons/c1-partizipialkonstruktionen-adverbial';
import { lessonC1AdverbialsaetzeVertiefung } from './lessons/c1-adverbialsaetze-vertiefung';
import { lessonC1LexikWirtschaftGlobalermarkt } from './lessons/c1-lexik-wirtschaft-globalermarkt';

// C2 Grammar & Lexik (To be reordered for interleaving)
import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2LexikGlobaleProbleme } from './lessons/c2-lexik-globale-probleme';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';
import { lessonC2LexikMedienkritikDigitaleGesellschaft } from './lessons/c2-lexik-medienkritik-digitale-gesellschaft';
import { lessonC2Modalpartikeln } from './lessons/c2-modalpartikeln';
import { lessonC2LexikSozialeTrends } from './lessons/c2-lexik-soziale-trends';


export const MOCK_LESSONS: Lesson[] = [
  // A1 - Interleaved Order (from previous turn)
  lessonA1AlphabetBegruessungen,
  lessonA1PersonalpronomenSeinHaben,
  lessonA1LexikPersoenlicheInfos,
  lessonA1ArtikelGenus,
  lessonA1Pluralbildung,
  lessonA1LexikZahlenFarben,
  lessonA1LexikFamilie,
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
  lessonA1LexikSchuleArbeitEinfach,
  lessonA1TrennbarVerben,
  lessonA1LexikWetter,
  lessonA1LexikWochentageMonateJahreszeiten,
  lessonA1LexikGefuehleZustaende,
  
  // A2 - Interleaved Order (NEW)
  lessonA2Artikel, // Grammar
  lessonA2VerbenPraesens, // Grammar
  lessonA2LexikArbeitBeruf, // Lexik
  lessonA2Pluralbildung, // Grammar
  lessonA2Perfekt, // Grammar
  lessonA2LexikReisenVerkehr, // Lexik
  lessonA2Modalverben, // Grammar
  lessonA2LexikGesundheitKoerper, // Lexik
  lessonA2Praepositionen, // Grammar
  lessonA2LexikInDerStadt, // Lexik
  lessonA2Possessivpronomen, // Grammar
  lessonA2PersonalpronomenAkkDat, // Grammar
  lessonA2LexikKleidung, // Lexik
  lessonA2Adjektivsteigerung, // Grammar
  lessonA2Adjektivdeklination, // Grammar
  lessonA2LexikEinkaufen, // Lexik
  lessonA2Imperativ, // Grammar
  lessonA2Satzbau, // Grammar
  lessonA2NebensaetzeEinfach, // Grammar
  lessonA2LexikFesteTraditionen, // Lexik
  lessonA2NebenordnendeKonjunktionen, // Grammar
  lessonA2Negation, // Grammar
  lessonA2LexikLebensstilGewohnheiten, // Lexik
  lessonA2ReflexiveVerben, // Grammar
  lessonA2TemporalsaetzeAlsWenn, // Grammar
  lessonA2LexikErnaehrungRezepte, // Lexik
  lessonA2Demonstrativpronomen, // Grammar
  lessonA2OrdinalzahlenDatum, // Grammar
  lessonA2LexikElektronikTechnik, // Lexik
  lessonA2LexikBriefeEmails, // Lexik
  lessonA2LexikKonflikteLoesungen, // Lexik
  lessonA2LexikBank, // Lexik

  // B1 - Interleaved Order (NEW)
  lessonB1Praeteritum, // Grammar
  lessonB1LexikBildungStudium, // Lexik
  lessonB1Nebensaetze, // Grammar
  lessonB1Relativsaetze, // Grammar
  lessonB1LexikArbeitKarriere, // Lexik
  lessonB1Adjektivdeklination, // Grammar
  lessonB1VerbenMitPraepositionen, // Grammar
  lessonB1LexikMedienKommunikation, // Lexik
  lessonB1Plusquamperfekt, // Grammar
  lessonB1Futur1, // Grammar
  lessonB1LexikUmweltWetter, // Lexik
  lessonB1Konjunktiv2Einfuehrung, // Grammar
  lessonB1PassivEinfuehrung, // Grammar
  lessonB1LexikKulturFreizeit, // Lexik
  lessonB1Genitiv, // Grammar
  lessonB1NDeklination, // Grammar
  lessonB1LexikBeziehungen, // Lexik
  lessonB1Indefinitpronomen, // Grammar
  lessonB1InfinitivMitZu, // Grammar
  lessonB1Konsekutivsaetze, // Grammar

  // B2 - Interleaved Order (NEW)
  lessonB2Konjunktiv2, // Grammar
  lessonB2LexikUmweltNachhaltigkeit, // Lexik
  lessonB2NomenVerb, // Grammar
  lessonB2Passiv, // Grammar
  lessonB2LexikKulturKunst, // Lexik
  lessonB2PassivErsatzformen, // Grammar
  lessonB2SubjektiveModalverben, // Grammar
  lessonB2LexikWissenschaftTechnologie, // Lexik
  lessonB2KomplexeSatzverbindungen, // Grammar
  lessonB2LexikMedienKommunikation, // Lexik
  lessonB2NominalisierungVerbalisierung, // Grammar
  lessonB2Futur2, // Grammar
  lessonB2LexikPolitik, // Lexik
  lessonB2Wortbildung, // Grammar
  lessonB2LexikWirtschaftKonsum, // Lexik

  // C1 - Interleaved Order (NEW)
  lessonC1IndirekteRede, // Grammar
  lessonC1LexikPolitikGesellschaft, // Lexik
  lessonC1Partizipialkonstruktionen, // Grammar
  lessonC1LexikWissenschaftForschung, // Lexik
  lessonC1KonjunktivVertiefung, // Grammar
  lessonC1LexikWirtschaftGlobalermarkt, // Lexik
  lessonC1PartizipialkonstruktionenAdverbial, // Grammar
  lessonC1AdverbialsaetzeVertiefung, // Grammar
  
  // C2 - Interleaved Order (NEW)
  lessonC2Stilmittel, // Grammar/Style
  lessonC2LexikGlobaleProbleme, // Lexik
  lessonC2NominalstilVerbalstil, // Grammar/Style
  lessonC2LexikMedienkritikDigitaleGesellschaft, // Lexik
  lessonC2Modalpartikeln, // Grammar/Style
  lessonC2LexikSozialeTrends, // Lexik
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
