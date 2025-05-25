
import type { ModularTest } from '@/types';
import { testB1Nebensaetze } from './b1-nebensaetze-test';
import { testB1Relativsaetze } from './b1-relativsaetze-test';
import { testB1Praeteritum } from './b1-praeteritum-test';
import { testB1Adjektivdeklination } from './b1-adjektivdeklination-test';
import { testB1VerbenMitPraepositionen } from './b1-verben-mit-praepositionen-test';
import { testB1Plusquamperfekt } from './b1-plusquamperfekt-test';
import { testB1Futur1 } from './b1-futur1-test';
import { testB1Konjunktiv2Einfuehrung } from './b1-konjunktiv2-einfuehrung-test';
import { testB1PassivEinfuehrung } from './b1-passiv-einfuehrung-test';
import { testB1Genitiv } from './b1-genitiv-test';
import { testB1NDeklination } from './b1-n-deklination-test';
import { testB1Indefinitpronomen } from './b1-indefinitpronomen-test';
import { testB1InfinitivMitZu } from './b1-infinitiv-mit-zu-test';
import { testB1Konsekutivsaetze } from './b1-konsekutivsaetze-test';
import { testB1LexikBildungStudium } from './b1-lexik-bildung-studium-test';
import { testB1LexikArbeitKarriere } from './b1-lexik-arbeit-karriere-test';
import { testB1LexikMedienKommunikation } from './b1-lexik-medien-kommunikation-test';
import { testB1LexikUmweltWetter } from './b1-lexik-umwelt-wetter-test';
import { testB1LexikKulturFreizeit } from './b1-lexik-kultur-freizeit-test';
import { testB1LexikBeziehungen } from './b1-lexik-beziehungen-test';

export const testB1LevelTest: ModularTest = {
  id: 'b1-final-level-test',
  level: 'B1',
  topic: 'Итоговый тест по уровню B1',
  description: 'Комплексная проверка знаний по грамматике и лексике уровня B1.',
  coveredLessonIds: [
    'b1-nebensaetze',
    'b1-relativsaetze',
    'b1-praeteritum',
    'b1-adjektivdeklination',
    'b1-verben-mit-praepositionen',
    'b1-plusquamperfekt',
    'b1-futur1',
    'b1-konjunktiv2-einfuehrung',
    'b1-passiv-einfuehrung',
    'b1-genitiv',
    'b1-n-deklination',
    'b1-indefinitpronomen',
    'b1-infinitiv-mit-zu',
    'b1-konsekutivsaetze',
    'b1-lexik-bildung-studium',
    'b1-lexik-arbeit-karriere',
    'b1-lexik-medien-kommunikation',
    'b1-lexik-umwelt-wetter',
    'b1-lexik-kultur-freizeit',
    'b1-lexik-beziehungen',
  ],
  questions: [
    // Grammar
    testB1Nebensaetze.questions[0],
    testB1Relativsaetze.questions[0],
    testB1Praeteritum.questions[0],
    testB1Adjektivdeklination.questions[0],
    testB1VerbenMitPraepositionen.questions[0],
    testB1Plusquamperfekt.questions[0],
    testB1Futur1.questions[0],
    testB1Konjunktiv2Einfuehrung.questions[0],
    testB1PassivEinfuehrung.questions[0],
    testB1Genitiv.questions[0],
    testB1NDeklination.questions[0],
    testB1Indefinitpronomen.questions[0],
    testB1InfinitivMitZu.questions[0],
    testB1Konsekutivsaetze.questions[0],
    // Lexik
    testB1LexikBildungStudium.questions[0],
    testB1LexikArbeitKarriere.questions[0],
    testB1LexikMedienKommunikation.questions[0],
    testB1LexikUmweltWetter.questions[0],
    testB1LexikKulturFreizeit.questions[0],
    testB1LexikBeziehungen.questions[0],
     // Add a few more for good measure
    testB1Nebensaetze.questions[1],
    testB1Relativsaetze.questions[1],
    testB1Praeteritum.questions[1],
  ],
};
