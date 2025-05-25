
import type { ModularTest } from '@/types';
import { testA2Artikel } from './a2-artikel-test';
import { testA2VerbenPraesens } from './a2-verben-praesens-test';
import { testA2Pluralbildung } from './a2-pluralbildung-test';
import { testA2Perfekt } from './a2-perfekt-test';
import { testA2Modalverben } from './a2-modalverben-test';
import { testA2Praepositionen } from './a2-praepositionen-test';
import { testA2Possessivpronomen } from './a2-possessivpronomen-test';
import { testA2PersonalpronomenAkkDat } from './a2-personalpronomen-akk-dat-test';
import { testA2Adjektivsteigerung } from './a2-adjektivsteigerung-test';
import { testA2Imperativ } from './a2-imperativ-test';
import { testA2Satzbau } from './a2-satzbau-test';
import { testA2NebensaetzeEinfach } from './a2-nebensaetze-einfach-test';
import { testA2NebenordnendeKonjunktionen } from './a2-nebenordnende-konjunktionen-test';
import { testA2Negation } from './a2-negation-test';
import { testA2ReflexiveVerben } from './a2-reflexive-verben-test';
import { testA2Adjektivdeklination } from './a2-adjektivdeklination-test';
import { testA2TemporalsaetzeAlsWenn } from './a2-temporalsaetze-als-wenn-test';
import { testA2Demonstrativpronomen } from './a2-demonstrativpronomen-test';
import { testA2OrdinalzahlenDatum } from './a2-ordinalzahlen-datum-test';
import { testA2LexikArbeitBeruf } from './a2-lexik-arbeit-beruf-test';
import { testA2LexikReisenVerkehr } from './a2-lexik-reisen-verkehr-test';
import { testA2LexikGesundheitKoerper } from './a2-lexik-gesundheit-koerper-test';
import { testA2LexikKleidung } from './a2-lexik-kleidung-test';
import { testA2LexikEinkaufen } from './a2-lexik-einkaufen-test';
import { testA2LexikInDerStadt } from './a2-lexik-in-der-stadt-test';
import { testA2LexikFesteTraditionen } from './a2-lexik-feste-traditionen-test';

export const testA2LevelTest: ModularTest = {
  id: 'a2-final-level-test',
  level: 'A2',
  topic: 'Итоговый тест по уровню A2',
  description: 'Комплексная проверка знаний по грамматике и лексике уровня A2.',
  coveredLessonIds: [
    'a2-artikel',
    'a2-verben-praesens',
    'a2-pluralbildung',
    'a2-perfekt',
    'a2-modalverben',
    'a2-praepositionen',
    'a2-possessivpronomen',
    'a2-personalpronomen-akk-dat',
    'a2-adjektivsteigerung',
    'a2-imperativ',
    'a2-satzbau',
    'a2-nebensaetze-einfach',
    'a2-nebenordnende-konjunktionen',
    'a2-negation',
    'a2-reflexive-verben',
    'a2-adjektivdeklination',
    'a2-temporalsaetze-als-wenn',
    'a2-demonstrativpronomen',
    'a2-ordinalzahlen-datum',
    'a2-lexik-arbeit-beruf',
    'a2-lexik-reisen-verkehr',
    'a2-lexik-gesundheit-koerper',
    'a2-lexik-kleidung',
    'a2-lexik-einkaufen',
    'a2-lexik-in-der-stadt',
    'a2-lexik-feste-traditionen',
  ],
  questions: [
    // Grammar
    testA2Artikel.questions[0],
    testA2VerbenPraesens.questions[1],
    testA2Pluralbildung.questions[0],
    testA2Perfekt.questions[0],
    testA2Modalverben.questions[0],
    testA2Praepositionen.questions[2],
    testA2Possessivpronomen.questions[1],
    testA2PersonalpronomenAkkDat.questions[0],
    testA2Adjektivsteigerung.questions[0],
    testA2Imperativ.questions[0],
    testA2Satzbau.questions[1],
    testA2NebensaetzeEinfach.questions[0],
    testA2NebenordnendeKonjunktionen.questions[0],
    testA2Negation.questions[0],
    testA2ReflexiveVerben.questions[0],
    testA2Adjektivdeklination.questions[0],
    testA2TemporalsaetzeAlsWenn.questions[0],
    testA2Demonstrativpronomen.questions[0],
    testA2OrdinalzahlenDatum.questions[0],
    // Lexik
    testA2LexikArbeitBeruf.questions[0],
    testA2LexikReisenVerkehr.questions[0],
    testA2LexikGesundheitKoerper.questions[0],
    testA2LexikKleidung.questions[0],
    testA2LexikEinkaufen.questions[0],
    testA2LexikInDerStadt.questions[0],
    testA2LexikFesteTraditionen.questions[0],
  ],
};
