
import type { Test } from '@/types';
import { testA1ArtikelGenus } from './tests/a1-artikel-genus-test';
// Импортируйте другие тесты здесь по мере их создания
// import { testSomeOtherTopic } from './tests/some-other-topic-test';

export const MOCK_TESTS: Test[] = [
  testA1ArtikelGenus,
  // Добавляйте другие тесты сюда
  // testSomeOtherTopic,
];
