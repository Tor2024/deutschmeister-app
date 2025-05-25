
import type { Lesson } from '@/types';

// A1 Lessons
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


// A2 Lessons
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


// B1 Lessons
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

// B2 Lessons
import { lessonB2Konjunktiv2 } from './lessons/b2-konjunktiv2';
import { lessonB2NomenVerb } from './lessons/b2-nomen-verb';
import { lessonB2Passiv } from './lessons/b2-passiv';
import { lessonB2PassivErsatzformen } from './lessons/b2-passiv-ersatzformen';
import { lessonB2SubjektiveModalverben } from './lessons/b2-subjektive-modalverben';
import { lessonB2KomplexeSatzverbindungen } from './lessons/b2-komplexe-satzverbindungen';
import { lessonB2NominalisierungVerbalisierung } from './lessons/b2-nominalisierung-verbalisierung';
import { lessonB2Futur2 } from './lessons/b2-futur2';


// C1 Lessons
import { lessonC1IndirekteRede } from './lessons/c1-indirekte-rede';
import { lessonC1Partizipialkonstruktionen } from './lessons/c1-partizipialkonstruktionen';

// C2 Lessons
import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';


export const MOCK_LESSONS: Lesson[] = [
  // A1
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

  // A2
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

  // B1
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

  // B2
  lessonB2Konjunktiv2,
  lessonB2NomenVerb,
  lessonB2Passiv,
  lessonB2PassivErsatzformen,
  lessonB2SubjektiveModalverben,
  lessonB2KomplexeSatzverbindungen,
  lessonB2NominalisierungVerbalisierung,
  lessonB2Futur2,

  // C1
  lessonC1IndirekteRede,
  lessonC1Partizipialkonstruktionen,

  // C2
  lessonC2Stilmittel,
  lessonC2NominalstilVerbalstil,
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
