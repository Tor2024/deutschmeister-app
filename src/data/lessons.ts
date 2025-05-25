
import type { Lesson } from '@/types';

// A1 Grammar
import { lessonA1AlphabetBegruessungen } from './lessons/a1-alphabet-begruessungen';
import { lessonA1PersonalpronomenSeinHaben } from './lessons/a1-personalpronomen-sein-haben';
import { lessonA1ArtikelGenus } from './lessons/a1-artikel-genus';
import { lessonA1Pluralbildung } from './lessons/a1-pluralbildung';
import { lessonA1Akkusativ } from './lessons/a1-akkusativ';
import { lessonA1Negation } from './lessons/a1-negation';
import { lessonA1SatzbauGrundlagen } from './lessons/a1-satzbau-grundlagen';
import { lessonA1Modalverben } from './lessons/a1-modalverben';
import { lessonA1Possessivpronomen } from './lessons/a1-possessivpronomen';
import { lessonA1Imperativ } from './lessons/a1-imperativ';
import { lessonA1PraepositionenAkkusativ } from './lessons/a1-praepositionen-akkusativ';
import { lessonA1PraepositionenDativ } from './lessons/a1-praepositionen-dativ';
import { lessonA1TrennbarVerben } from './lessons/a1-trennbar-verben';

// A1 Lexik
import { lessonA1LexikFamilie } from './lessons/a1-lexik-familie';
import { lessonA1LexikHausWohnung } from './lessons/a1-lexik-haus-wohnung';
import { lessonA1LexikEssenTrinken } from './lessons/a1-lexik-essen-trinken';
import { lessonA1LexikHobbysFreizeit } from './lessons/a1-lexik-hobbys-freizeit';
import { lessonA1LexikZahlenFarben } from './lessons/a1-lexik-zahlen-farben';
import { lessonA1LexikWochentageMonateJahreszeiten } from './lessons/a1-lexik-wochentage-monate-jahreszeiten';


// A2 Grammar
import { lessonA2Artikel } from './lessons/a2-artikel';
import { lessonA2VerbenPraesens } from './lessons/a2-verben-praesens';
import { lessonA2Pluralbildung } from './lessons/a2-pluralbildung';
import { lessonA2Perfekt } from './lessons/a2-perfekt';
import { lessonA2Modalverben } from './lessons/a2-modalverben';
import { lessonA2Praepositionen } from './lessons/a2-praepositionen';
import { lessonA2Possessivpronomen } from './lessons/a2-possessivpronomen';
import { lessonA2PersonalpronomenAkkDat } from './lessons/a2-personalpronomen-akk-dat';
import { lessonA2Adjektivsteigerung } from './lessons/a2-adjektivsteigerung';
import { lessonA2Imperativ } from './lessons/a2-imperativ';
import { lessonA2Satzbau } from './lessons/a2-satzbau';
import { lessonA2NebensaetzeEinfach } from './lessons/a2-nebensaetze-einfach';
import { lessonA2NebenordnendeKonjunktionen } from './lessons/a2-nebenordnende-konjunktionen';
import { lessonA2Negation } from './lessons/a2-negation';
import { lessonA2ReflexiveVerben } from './lessons/a2-reflexive-verben';
import { lessonA2Adjektivdeklination } from './lessons/a2-adjektivdeklination';
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


// B1 Grammar
import { lessonB1Nebensaetze } from './lessons/b1-nebensaetze';
import { lessonB1Relativsaetze } from './lessons/b1-relativsaetze';
import { lessonB1Praeteritum } from './lessons/b1-praeteritum';
import { lessonB1Adjektivdeklination } from './lessons/b1-adjektivdeklination';
import { lessonB1VerbenMitPraepositionen } from './lessons/b1-verben-mit-praepositionen';
import { lessonB1Plusquamperfekt } from './lessons/b1-plusquamperfekt';
import { lessonB1Futur1 } from './lessons/b1-futur1';
import { lessonB1Konjunktiv2Einfuehrung } from './lessons/b1-konjunktiv2-einfuehrung';
import { lessonB1PassivEinfuehrung } from './lessons/b1-passiv-einfuehrung';
import { lessonB1Genitiv } from './lessons/b1-genitiv';
import { lessonB1NDeklination } from './lessons/b1-n-deklination';
import { lessonB1Indefinitpronomen } from './lessons/b1-indefinitpronomen';
import { lessonB1InfinitivMitZu } from './lessons/b1-infinitiv-mit-zu';
import { lessonB1Konsekutivsaetze } from './lessons/b1-konsekutivsaetze';

// B1 Lexik
import { lessonB1LexikBildungStudium } from './lessons/b1-lexik-bildung-studium';
import { lessonB1LexikArbeitKarriere } from './lessons/b1-lexik-arbeit-karriere';
import { lessonB1LexikMedienKommunikation } from './lessons/b1-lexik-medien-kommunikation';

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

// C1 Grammar
import { lessonC1IndirekteRede } from './lessons/c1-indirekte-rede';
import { lessonC1Partizipialkonstruktionen } from './lessons/c1-partizipialkonstruktionen';
import { lessonC1KonjunktivVertiefung } from './lessons/c1-konjunktiv-vertiefung';
import { lessonC1PartizipialkonstruktionenAdverbial } from './lessons/c1-partizipialkonstruktionen-adverbial';
import { lessonC1AdverbialsaetzeVertiefung } from './lessons/c1-adverbialsaetze-vertiefung';

// C1 Lexik
import { lessonC1LexikPolitikGesellschaft } from './lessons/c1-lexik-politik-gesellschaft';
import { lessonC1LexikWissenschaftForschung } from './lessons/c1-lexik-wissenschaft-forschung';

// C2 Grammar
import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';
import { lessonC2Modalpartikeln } from './lessons/c2-modalpartikeln';

// C2 Lexik
import { lessonC2LexikGlobaleProbleme } from './lessons/c2-lexik-globale-probleme';

export const MOCK_LESSONS: Lesson[] = [
  // A1 Grammar
  lessonA1AlphabetBegruessungen,
  lessonA1PersonalpronomenSeinHaben,
  lessonA1ArtikelGenus,
  lessonA1Pluralbildung,
  lessonA1Akkusativ,
  lessonA1Negation,
  lessonA1SatzbauGrundlagen,
  lessonA1Modalverben,
  lessonA1Possessivpronomen,
  lessonA1Imperativ,
  lessonA1PraepositionenAkkusativ,
  lessonA1PraepositionenDativ,
  lessonA1TrennbarVerben,
  // A1 Lexik
  lessonA1LexikFamilie,
  lessonA1LexikHausWohnung,
  lessonA1LexikEssenTrinken,
  lessonA1LexikHobbysFreizeit,
  lessonA1LexikZahlenFarben,
  lessonA1LexikWochentageMonateJahreszeiten,

  // A2 Grammar
  lessonA2Artikel,
  lessonA2VerbenPraesens,
  lessonA2Pluralbildung,
  lessonA2Perfekt,
  lessonA2Modalverben,
  lessonA2Praepositionen,
  lessonA2Possessivpronomen,
  lessonA2PersonalpronomenAkkDat,
  lessonA2Adjektivsteigerung,
  lessonA2Imperativ,
  lessonA2Satzbau,
  lessonA2NebensaetzeEinfach,
  lessonA2NebenordnendeKonjunktionen,
  lessonA2Negation,
  lessonA2ReflexiveVerben,
  lessonA2Adjektivdeklination,
  lessonA2TemporalsaetzeAlsWenn,
  lessonA2Demonstrativpronomen,
  lessonA2OrdinalzahlenDatum,
  // A2 Lexik
  lessonA2LexikArbeitBeruf,
  lessonA2LexikReisenVerkehr,
  lessonA2LexikGesundheitKoerper,
  lessonA2LexikKleidung,
  lessonA2LexikEinkaufen,
  lessonA2LexikInDerStadt,

  // B1 Grammar
  lessonB1Nebensaetze,
  lessonB1Relativsaetze,
  lessonB1Praeteritum,
  lessonB1Adjektivdeklination,
  lessonB1VerbenMitPraepositionen,
  lessonB1Plusquamperfekt,
  lessonB1Futur1,
  lessonB1Konjunktiv2Einfuehrung,
  lessonB1PassivEinfuehrung,
  lessonB1Genitiv,
  lessonB1NDeklination,
  lessonB1Indefinitpronomen,
  lessonB1InfinitivMitZu,
  lessonB1Konsekutivsaetze,
  // B1 Lexik
  lessonB1LexikBildungStudium,
  lessonB1LexikArbeitKarriere,
  lessonB1LexikMedienKommunikation,

  // B2 Grammar
  lessonB2Konjunktiv2,
  lessonB2NomenVerb,
  lessonB2Passiv,
  lessonB2PassivErsatzformen,
  lessonB2SubjektiveModalverben,
  lessonB2KomplexeSatzverbindungen,
  lessonB2NominalisierungVerbalisierung,
  lessonB2Futur2,
  lessonB2Wortbildung,
  // B2 Lexik
  lessonB2LexikUmweltNachhaltigkeit,
  lessonB2LexikKulturKunst,

  // C1 Grammar
  lessonC1IndirekteRede,
  lessonC1Partizipialkonstruktionen,
  lessonC1KonjunktivVertiefung,
  lessonC1PartizipialkonstruktionenAdverbial,
  lessonC1AdverbialsaetzeVertiefung,
  // C1 Lexik
  lessonC1LexikPolitikGesellschaft,
  lessonC1LexikWissenschaftForschung,

  // C2 Grammar
  lessonC2Stilmittel,
  lessonC2NominalstilVerbalstil,
  lessonC2Modalpartikeln,
  // C2 Lexik
  lessonC2LexikGlobaleProbleme,
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
