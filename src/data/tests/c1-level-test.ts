
import type { ModularTest } from '@/types';
import { testC1IndirekteRede } from './c1-indirekte-rede-test';
import { testC1Partizipialkonstruktionen } from './c1-partizipialkonstruktionen-test';
import { testC1KonjunktivVertiefung } from './c1-konjunktiv-vertiefung-test';
import { testC1PartizipialkonstruktionenAdverbial } from './c1-partizipialkonstruktionen-adverbial-test';
import { testC1AdverbialsaetzeVertiefung } from './c1-adverbialsaetze-vertiefung-test';
import { testC1LexikPolitikGesellschaft } from './c1-lexik-politik-gesellschaft-test';
import { testC1LexikWissenschaftForschung } from './c1-lexik-wissenschaft-forschung-test';
import { testC1LexikWirtschaftGlobalermarkt } from './c1-lexik-wirtschaft-globalermarkt-test';


export const testC1LevelTest: ModularTest = {
  id: 'c1-final-level-test',
  level: 'C1',
  topic: 'Итоговый тест по уровню C1',
  testType: 'level',
  description: 'Комплексная проверка знаний по грамматике и лексике уровня C1.',
  coveredLessonIds: [
    'c1-indirekte-rede',
    'c1-partizipialkonstruktionen',
    'c1-konjunktiv-vertiefung',
    'c1-partizipialkonstruktionen-adverbial',
    'c1-adverbialsaetze-vertiefung',
    'c1-lexik-politik-gesellschaft',
    'c1-lexik-wissenschaft-forschung',
    'c1-lexik-wirtschaft-globalermarkt',
  ],
  questions: [
    // From c1-indirekte-rede-test
    testC1IndirekteRede.questions[0], 
    testC1IndirekteRede.questions[2],
    // From c1-partizipialkonstruktionen-test
    testC1Partizipialkonstruktionen.questions[0],
    testC1Partizipialkonstruktionen.questions[2],
    // From c1-konjunktiv-vertiefung-test
    testC1KonjunktivVertiefung.questions[0],
    testC1KonjunktivVertiefung.questions[2],
    // From c1-partizipialkonstruktionen-adverbial-test
    testC1PartizipialkonstruktionenAdverbial.questions[0],
    testC1PartizipialkonstruktionenAdverbial.questions[2],
    // From c1-adverbialsaetze-vertiefung-test
    testC1AdverbialsaetzeVertiefung.questions[0],
    testC1AdverbialsaetzeVertiefung.questions[2],
    // From c1-lexik
    testC1LexikPolitikGesellschaft.questions[0],
    testC1LexikWissenschaftForschung.questions[0],
    testC1LexikWirtschaftGlobalermarkt.questions[0],
    testC1LexikPolitikGesellschaft.questions[1],
    testC1LexikWissenschaftForschung.questions[1],
  ],
};
