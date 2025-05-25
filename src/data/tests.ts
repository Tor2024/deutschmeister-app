
import type { Test } from '@/types';
import { testA1ArtikelGenus } from './tests/a1-artikel-genus-test';
import { testA1PronomenSeinHaben } from './tests/a1-pronomen-sein-haben-test';
import { testA1Pluralbildung } from './tests/a1-pluralbildung-test';
import { testA1Akkusativ } from './tests/a1-akkusativ-test';
import { testA1Modalverben } from './tests/a1-modalverben-test';
import { testA1Negation } from './tests/a1-negation-test';
import { testA1SatzbauGrundlagen } from './tests/a1-satzbau-grundlagen-test';
import { testA1Possessivpronomen } from './tests/a1-possessivpronomen-test';
import { testA1Imperativ } from './tests/a1-imperativ-test';
import { testA1PraepositionenAkkusativ } from './tests/a1-praepositionen-akkusativ-test';
import { testA1PraepositionenDativ } from './tests/a1-praepositionen-dativ-test';
import { testA1TrennbarVerben } from './tests/a1-trennbar-verben-test';
import { testA2Artikel } from './tests/a2-artikel-test';

// Импортируйте другие тесты здесь по мере их создания
// import { testSomeOtherTopic } from './tests/some-other-topic-test';

export const MOCK_TESTS: Test[] = [
  testA1ArtikelGenus,
  testA1PronomenSeinHaben,
  testA1Pluralbildung,
  testA1Akkusativ,
  testA1Modalverben,
  testA1Negation,
  testA1SatzbauGrundlagen,
  testA1Possessivpronomen,
  testA1Imperativ,
  testA1PraepositionenAkkusativ,
  testA1PraepositionenDativ,
  testA1TrennbarVerben,
  // A2 Tests
  testA2Artikel,
  // Добавляйте другие тесты сюда
  // testSomeOtherTopic,
];

// Helper function to get a test by its ID
export const getTestById = (id: string): Test | undefined => {
  return MOCK_TESTS.find(test => test.id === id);
};
