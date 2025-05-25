
import type { Lesson } from '@/types';

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

// B2 Lessons
import { lessonB2Konjunktiv2 } from './lessons/b2-konjunktiv2';
import { lessonB2NomenVerb } from './lessons/b2-nomen-verb';
import { lessonB2Passiv } from './lessons/b2-passiv';

// C1 Lessons
import { lessonC1IndirekteRede } from './lessons/c1-indirekte-rede';
import { lessonC1Partizipialkonstruktionen } from './lessons/c1-partizipialkonstruktionen';

// C2 Lessons
import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';


export const MOCK_LESSONS: Lesson[] = [
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

  // B2
  lessonB2Konjunktiv2,
  lessonB2NomenVerb,
  lessonB2Passiv,
  
  // C1
  lessonC1IndirekteRede,
  lessonC1Partizipialkonstruktionen,
  
  // C2
  lessonC2Stilmittel,
  lessonC2NominalstilVerbalstil,
];
