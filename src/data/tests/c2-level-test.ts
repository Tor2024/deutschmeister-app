
import type { ModularTest } from '@/types';
import { testC2Stilmittel } from './c2-stilmittel-test';
import { testC2NominalstilVerbalstil } from './c2-nominalstil-verbalstil-test';
import { testC2Modalpartikeln } from './c2-modalpartikeln-test';
import { testC2LexikGlobaleProbleme } from './c2-lexik-globale-probleme-test';
import { testC2LexikMedienkritikDigitaleGesellschaft } from './c2-lexik-medienkritik-digitale-gesellschaft-test';
import { testC2LexikSozialeTrends } from './c2-lexik-soziale-trends-test';

export const testC2LevelTest: ModularTest = {
  id: 'c2-final-level-test',
  level: 'C2',
  topic: 'Итоговый тест по уровню C2',
  testType: 'level',
  description: 'Комплексная проверка знаний по грамматике и лексике уровня C2.',
  coveredLessonIds: [
    'c2-stilmittel',
    'c2-nominalstil-verbalstil',
    'c2-modalpartikeln',
    'c2-lexik-globale-probleme',
    'c2-lexik-medienkritik-digitale-gesellschaft',
    'c2-lexik-soziale-trends',
  ],
  questions: [
    // From c2-stilmittel-test
    testC2Stilmittel.questions[0], 
    testC2Stilmittel.questions[1],
    testC2Stilmittel.questions[2],
    // From c2-nominalstil-verbalstil-test
    testC2NominalstilVerbalstil.questions[0],
    testC2NominalstilVerbalstil.questions[1],
    testC2NominalstilVerbalstil.questions[3],
    // From c2-modalpartikeln-test
    testC2Modalpartikeln.questions[0],
    testC2Modalpartikeln.questions[1],
    testC2Modalpartikeln.questions[4],
    // From c2-lexik
    testC2LexikGlobaleProbleme.questions[0],
    testC2LexikGlobaleProbleme.questions[2],
    testC2LexikMedienkritikDigitaleGesellschaft.questions[0],
    testC2LexikMedienkritikDigitaleGesellschaft.questions[2],
    testC2LexikSozialeTrends.questions[0],
    testC2LexikSozialeTrends.questions[2],
  ],
};
