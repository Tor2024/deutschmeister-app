
import type { Test } from '@/types';
import { testA1ArtikelGenus } from './tests/a1-artikel-genus-test';
import { testA1PronomenSeinHaben } from './tests/a1-pronomen-sein-haben-test';
import { testA1Pluralbildung } from './tests/a1-pluralbildung-test';
import { testA1Akkusativ } from './tests/a1-akkusativ-test';
import { testA1Modalverben } from './tests/a1-modalverben-test';
import { testA1Negation } from './tests/a1-negation-test';
import { testA1SatzbauGrundlagen } from './tests/a1-satzbau-grundlagen-test';
import { testA1Possessivpronomen } from './tests/a1-possessivpronomen-test';

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
  // Добавляйте другие тесты сюда
  // testSomeOtherTopic,
];

// Helper function to get a test by its ID
export const getTestById = (id: string): Test | undefined => {
  return MOCK_TESTS.find(test => test.id === id);
};
