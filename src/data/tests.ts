
import type { Test } from '@/types';
import { testA1ArtikelGenus } from './tests/a1-artikel-genus-test';
import { testA1PronomenSeinHaben } from './tests/a1-pronomen-sein-haben-test';
import { testA1Pluralbildung } from './tests/a1-pluralbildung-test';
import { testA1Akkusativ } from './tests/a1-akkusativ-test';
import { testA1Modalverben as testA1ModalverbenA1 } from './tests/a1-modalverben-test'; // Renamed to avoid conflict
import { testA1Negation } from './tests/a1-negation-test';
import { testA1SatzbauGrundlagen } from './tests/a1-satzbau-grundlagen-test';
import { testA1Possessivpronomen } from './tests/a1-possessivpronomen-test';
import { testA1Imperativ } from './tests/a1-imperativ-test';
import { testA1PraepositionenAkkusativ } from './tests/a1-praepositionen-akkusativ-test';
import { testA1PraepositionenDativ } from './tests/a1-praepositionen-dativ-test';
import { testA1TrennbarVerben } from './tests/a1-trennbar-verben-test';

// A2 Tests
import { testA2Artikel } from './tests/a2-artikel-test';
import { testA2VerbenPraesens } from './tests/a2-verben-praesens-test';
import { testA2Pluralbildung } from './tests/a2-pluralbildung-test';
import { testA2Perfekt } from './tests/a2-perfekt-test';
import { testA2Modalverben } from './tests/a2-modalverben-test';
import { testA2Praepositionen } from './tests/a2-praepositionen-test';
import { testA2Possessivpronomen } from './tests/a2-possessivpronomen-test';
import { testA2PersonalpronomenAkkDat } from './tests/a2-personalpronomen-akk-dat-test';
import { testA2Adjektivsteigerung } from './tests/a2-adjektivsteigerung-test';
import { testA2Imperativ } from './tests/a2-imperativ-test';


// Импортируйте другие тесты здесь по мере их создания
// import { testSomeOtherTopic } from './tests/some-other-topic-test';

export const MOCK_TESTS: Test[] = [
  // A1 Tests
  testA1ArtikelGenus,
  testA1PronomenSeinHaben,
  testA1Pluralbildung,
  testA1Akkusativ,
  testA1ModalverbenA1,
  testA1Negation,
  testA1SatzbauGrundlagen,
  testA1Possessivpronomen,
  testA1Imperativ,
  testA1PraepositionenAkkusativ,
  testA1PraepositionenDativ,
  testA1TrennbarVerben,
  
  // A2 Tests
  testA2Artikel,
  testA2VerbenPraesens,
  testA2Pluralbildung,
  testA2Perfekt,
  testA2Modalverben,
  testA2Praepositionen,
  testA2Possessivpronomen,
  testA2PersonalpronomenAkkDat,
  testA2Adjektivsteigerung,
  testA2Imperativ,
  // Добавляйте другие тесты сюда
  // testSomeOtherTopic,
];

// Helper function to get a test by its ID
export const getTestById = (id: string): Test | undefined => {
  return MOCK_TESTS.find(test => test.id === id);
};
