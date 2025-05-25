
import type { ModularTest } from '@/types';
import { testB2Konjunktiv2 } from './b2-konjunktiv2-test';
import { testB2NomenVerb } from './b2-nomen-verb-test';
import { testB2Passiv } from './b2-passiv-test';
import { testB2PassivErsatzformen } from './b2-passiv-ersatzformen-test';
import { testB2SubjektiveModalverben } from './b2-subjektive-modalverben-test';
import { testB2KomplexeSatzverbindungen } from './b2-komplexe-satzverbindungen-test';
import { testB2NominalisierungVerbalisierung } from './b2-nominalisierung-verbalisierung-test';
import { testB2Futur2 } from './b2-futur2-test';
import { testB2Wortbildung } from './b2-wortbildung-test';
import { testB2LexikUmweltNachhaltigkeit } from './b2-lexik-umwelt-nachhaltigkeit-test';
import { testB2LexikKulturKunst } from './b2-lexik-kultur-kunst-test';
import { testB2LexikWissenschaftTechnologie } from './b2-lexik-wissenschaft-technologie-test';

export const testB2LevelTest: ModularTest = {
  id: 'b2-final-level-test',
  level: 'B2',
  topic: 'Итоговый тест по уровню B2',
  testType: 'level',
  description: 'Комплексная проверка знаний по грамматике и лексике уровня B2.',
  coveredLessonIds: [
    'b2-konjunktiv2',
    'b2-nomen-verb',
    'b2-passiv',
    'b2-passiv-ersatzformen',
    'b2-subjektive-modalverben',
    'b2-komplexe-satzverbindungen',
    'b2-nominalisierung-verbalisierung',
    'b2-futur2',
    'b2-wortbildung',
    'b2-lexik-umwelt-nachhaltigkeit',
    'b2-lexik-kultur-kunst',
    'b2-lexik-wissenschaft-technologie',
  ],
  questions: [
    // Grammar
    testB2Konjunktiv2.questions[0], 
    testB2Konjunktiv2.questions[1], 
    testB2NomenVerb.questions[0], 
    testB2NomenVerb.questions[1], 
    testB2Passiv.questions[0], 
    testB2Passiv.questions[3], // Zustandspassiv
    testB2PassivErsatzformen.questions[0],
    testB2PassivErsatzformen.questions[1],
    testB2SubjektiveModalverben.questions[0],
    testB2SubjektiveModalverben.questions[1],
    testB2KomplexeSatzverbindungen.questions[0],
    testB2KomplexeSatzverbindungen.questions[2],
    testB2NominalisierungVerbalisierung.questions[0],
    testB2NominalisierungVerbalisierung.questions[1],
    testB2Futur2.questions[0],
    testB2Futur2.questions[3],
    testB2Wortbildung.questions[0],
    testB2Wortbildung.questions[2],
    // Lexik
    testB2LexikUmweltNachhaltigkeit.questions[0],
    testB2LexikKulturKunst.questions[0],
    testB2LexikWissenschaftTechnologie.questions[0],
  ],
};
