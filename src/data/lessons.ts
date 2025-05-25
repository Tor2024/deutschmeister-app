
import type { Lesson } from '@/types';

import { lessonA2Artikel } from './lessons/a2-artikel';
import { lessonA2VerbenPraesens } from './lessons/a2-verben-praesens';
import { lessonA2Pluralbildung } from './lessons/a2-pluralbildung';
import { lessonA2Perfekt } from './lessons/a2-perfekt';
import { lessonA2Modalverben } from './lessons/a2-modalverben';
import { lessonA2Praepositionen } from './lessons/a2-praepositionen'; // Новый импорт

import { lessonB1Nebensaetze } from './lessons/b1-nebensaetze';
import { lessonB1Relativsaetze } from './lessons/b1-relativsaetze';
import { lessonB1Praeteritum } from './lessons/b1-praeteritum';

import { lessonB2Konjunktiv2 } from './lessons/b2-konjunktiv2';
import { lessonB2NomenVerb } from './lessons/b2-nomen-verb';
import { lessonB2Passiv } from './lessons/b2-passiv';

import { lessonC1IndirekteRede } from './lessons/c1-indirekte-rede';
import { lessonC1Partizipialkonstruktionen } from './lessons/c1-partizipialkonstruktionen';

import { lessonC2Stilmittel } from './lessons/c2-stilmittel';
import { lessonC2NominalstilVerbalstil } from './lessons/c2-nominalstil-verbalstil';


export const MOCK_LESSONS: Lesson[] = [
  lessonA2Artikel,
  lessonA2VerbenPraesens,
  lessonA2Pluralbildung,
  lessonA2Perfekt,
  lessonA2Modalverben,
  lessonA2Praepositionen, // Добавлен в массив

  lessonB1Nebensaetze,
  lessonB1Relativsaetze,
  lessonB1Praeteritum,

  lessonB2Konjunktiv2,
  lessonB2NomenVerb,
  lessonB2Passiv,
  
  lessonC1IndirekteRede,
  lessonC1Partizipialkonstruktionen,
  
  lessonC2Stilmittel,
  lessonC2NominalstilVerbalstil,
];
