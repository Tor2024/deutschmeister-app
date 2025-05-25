
import type { Lesson } from '@/types';

// --- Урок A2: Степени сравнения прилагательных (Adjektivsteigerung) ---
export const lessonA2Adjektivsteigerung: Lesson = {
  id: 'a2-adjektivsteigerung',
  level: 'A2',
  topic: 'Степени сравнения прилагательных (Adjektivsteigerung)',
  theory: `Прилагательные в немецком языке, как и в русском, могут изменяться по степеням сравнения, чтобы показать разницу в качестве или свойстве предметов, лиц или явлений. Существует три степени сравнения:

**1. Положительная степень (Positiv)**
Это основная форма прилагательного, которая просто называет качество.
   Примеры:
   - Das Auto ist **schnell**. (Машина быстрая.)
   - Die Blume ist **schön**. (Цветок красивый.)
   - Для сравнения одинаковых качеств используется конструкция: **so + Positiv + wie** (такой же ... как).
     *Anna ist **so alt wie** Maria.* (Анна такая же старая, как Мария. / Анне столько же лет, сколько Марии.)

**2. Сравнительная степень (Komparativ)**
Используется для сравнения двух объектов, указывая, что один обладает качеством в большей степени, чем другой.
   - Образование: **Основа прилагательного + -er**
     *schnell (быстрый) → schnell**er** (быстрее)*
     *klein (маленький) → klein**er** (меньше)*
   - Некоторые односложные прилагательные с корневыми гласными **a, o, u** получают **умлаут**:
     *alt (старый) → **ä**lt**er** (старше)*
     *groß (большой) → gr**ö**ß**er** (больше)*
     *jung (молодой) → j**ü**ng**er** (моложе)*
     *kurz (короткий) → k**ü**rz**er** (короче)*
     *warm (теплый) → w**ä**rm**er** (теплее)*
   - При сравнении используется союз **als** (чем):
     *Mein Auto ist schnell**er als** dein Auto.* (Моя машина быстрее, чем твоя машина.)
     *Dieser Apfel ist gr**ö**ß**er als** jener.* (Это яблоко больше, чем то.)

**3. Превосходная степень (Superlativ)**
Указывает на высшую степень проявления качества среди всех сравниваемых объектов или в определенной группе.
   - Образование (предикативное использование, т.е. когда прилагательное является частью сказуемого):
     **am + основа прилагательного + -sten**
     *schnell → am schnell**sten** (самый быстрый / быстрее всех)*
     *klein → am klein**sten** (самый маленький)*
   - Если основа прилагательного заканчивается на **-d, -t, -s, -ß, -z, -sch, -x**, то добавляется **-esten**:
     *breit (широкий) → am breit**esten** (самый широкий)*
     *interessant → am interessant**esten** (самый интересный)*
   - Прилагательные с умлаутом в Komparativ обычно сохраняют его и в Superlativ:
     *alt → älter → am **ä**lt**esten** (самый старый)*
     *groß → größer → am gr**ö**ßt**en** (самый большой)*
   - Образование (атрибутивное использование, т.е. когда прилагательное стоит перед существительным):
     Определенный артикль + основа прилагательного + **-st(e)** + падежное окончание прилагательного.
     *der schnell**ste** Mann (самый быстрый мужчина)*
     *die schön**ste** Frau (самая красивая женщина)*
     *das klein**ste** Kind (самый маленький ребенок)*
     (Этот аспект будет подробнее рассмотрен на более высоких уровнях при изучении склонения прилагательных.)

**4. Особые (неправильные) формы сравнения:**
Некоторые часто употребительные прилагательные имеют полностью особые формы степеней сравнения, которые нужно запомнить:
   - **gut** (хороший) → **besser** (лучше) → **am besten** (лучший / лучше всех) / der/die/das beste
   - **viel** (много) → **mehr** (больше) → **am meisten** (большинство / больше всего) / der/die/das meiste
   - **gern(e)** (охотно) → **lieber** (охотнее, лучше) → **am liebsten** (охотнее всего, больше всего)
     *Ich spiele gern Fußball. Aber ich schwimme **lieber**. **Am liebsten** tanze ich.* (Я охотно играю в футбол. Но я охотнее плаваю. Больше всего я люблю танцевать.)
   - **hoch** (высокий) → **höher** (выше) → **am höchsten** (самый высокий) (обратите внимание на выпадение 'c')
   - **nah(e)** (близкий) → **näher** (ближе) → **am nächsten** (самый близкий) (обратите внимание на 'h')

Примеры:
   - *Dieses Buch ist **gut**. Jenes Buch ist **besser**. Aber das hier ist **am besten**.*
   - *Er hat **viel** Geld. Sie hat **mehr** Geld. Ich habe **am meisten** Geld.*

Понимание и правильное использование степеней сравнения прилагательных делает речь более выразительной и точной.`,
  vocabulary: [
    { german: 'schnell', russian: 'быстрый, быстро', example: 'Er läuft schnell.' },
    { german: 'langsam', russian: 'медленный, медленно', example: 'Die Schildkröte ist langsam.' },
    { german: 'groß - größer - am größten', russian: 'большой - больше - самый большой', example: 'Mein Bruder ist größer als ich.' },
    { german: 'klein - kleiner - am kleinsten', russian: 'маленький - меньше - самый маленький', example: 'Das ist das kleinste Auto.' },
    { german: 'alt - älter - am ältesten', russian: 'старый - старше - самый старый', example: 'Meine Oma ist am ältesten in der Familie.' },
    { german: 'jung - jünger - am jüngsten', russian: 'молодой - моложе - самый молодой', example: 'Er ist jünger als seine Schwester.' },
    { german: 'gut - besser - am besten', russian: 'хороший - лучше - лучший/лучше всех', example: 'Dieser Film ist besser als der letzte.' },
    { german: 'viel - mehr - am meisten', russian: 'много - больше - большинство/больше всего', example: 'Sie hat mehr Bücher als ich.' },
    { german: 'gern - lieber - am liebsten', russian: 'охотно - охотнее/лучше - охотнее всего/больше всего', example: 'Ich trinke gern Tee, aber Kaffee trinke ich lieber.' },
    { german: 'schön', russian: 'красивый, прекрасно', example: 'Das Wetter ist heute schön.' },
    { german: 'interessant', russian: 'интересный', example: 'Das Buch ist sehr interessant.' },
    { german: 'teuer', russian: 'дорогой (о цене)', example: 'Das Auto ist zu teuer.' },
    { german: 'billig', russian: 'дешевый', example: 'Diese Äpfel sind billig.' },
    { german: 'hoch - höher - am höchsten', russian: 'высокий - выше - самый высокий', example: 'Der Turm ist höher als das Haus.' },
    { german: 'nah - näher - am nächsten', russian: 'близкий - ближе - самый близкий', example: 'Der Bahnhof ist näher als die Post.' },
    { german: 'als', russian: 'чем (при сравнении)', example: 'Er ist stärker als ich.' },
    { german: 'wie', russian: 'как (при сравнении одинаковых качеств, so ... wie)', example: 'Sie ist so klug wie er.' },
  ],
  exercises: [
    {
      id: 'a2-adjektivsteigerung-ex1',
      type: 'multiple_choice',
      question: 'Какая сравнительная степень (Komparativ) у прилагательного "alt"?',
      options: ['alter', 'älter', 'am ältesten', 'altesten'],
      correctAnswer: 'älter',
      explanation: 'Односложное прилагательное "alt" получает умлаут и окончание -er в сравнительной степени: älter.',
    },
    {
      id: 'a2-adjektivsteigerung-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильную форму: Dieses Auto ist schnell, aber jenes ist noch ___.',
      sentenceParts: ['Dieses Auto ist schnell, aber jenes ist noch ', '.'],
      correctAnswer: 'schneller',
      explanation: 'Для сравнения используется Komparativ: schnell + er = schneller.',
    },
    {
      id: 'a2-adjektivsteigerung-ex3',
      type: 'translation',
      question: 'Переведите на немецкий: "Моя сестра умнее, чем мой брат."',
      prompt: 'Моя сестра умнее, чем мой брат.',
      languageDirection: 'to_german',
      correctAnswer: 'Meine Schwester ist klüger als mein Bruder.',
      explanation: 'klug (умный) → klüger (умнее, с умлаутом). При сравнении используется "als".',
    },
    {
      id: 'a2-adjektivsteigerung-ex4',
      type: 'multiple_choice',
      question: 'Какая превосходная степень (Superlativ, предикативная форма) у прилагательного "gut"?',
      options: ['am gutsten', 'am güter', 'am besten', 'besser'],
      correctAnswer: 'am besten',
      explanation: 'Прилагательное "gut" имеет особую форму Superlativ: am besten.',
    },
    {
      id: 'a2-adjektivsteigerung-ex5',
      type: 'fill_in_the_blank',
      question: 'Дополните предложение: Von allen Schülern ist er ___ (fleißig - прилежный).',
      sentenceParts: ['Von allen Schülern ist er ', '.'],
      correctAnswer: 'am fleißigsten',
      explanation: 'Превосходная степень от "fleißig" образуется с "am" и окончанием "-sten": am fleißigsten.',
    },
    {
      id: 'a2-adjektivsteigerung-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильное предложение: "Я охотно пью чай, но кофе я пью охотнее."',
      options: [
        'Ich trinke gern Tee, aber Kaffee trinke ich gerner.',
        'Ich trinke lieber Tee, aber Kaffee trinke ich am liebsten.',
        'Ich trinke gern Tee, aber Kaffee trinke ich lieber.'
      ],
      correctAnswer: 'Ich trinke gern Tee, aber Kaffee trinke ich lieber.',
      explanation: 'Сравнительная степень от "gern" - "lieber".',
    },
    {
      id: 'a2-adjektivsteigerung-ex7',
      type: 'translation',
      question: 'Переведите на немецкий: "Это самый интересный фильм."',
      prompt: 'Это самый интересный фильм.',
      languageDirection: 'to_german',
      correctAnswer: 'Das ist der interessanteste Film.',
      explanation: 'Атрибутивная форма Superlativ: der/die/das + прилагательное с окончанием -st(e) + падежное окончание. "interessant" получает "-este", так как основа на -t.',
    },
  ],
};
