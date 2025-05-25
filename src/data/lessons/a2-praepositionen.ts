
import type { Lesson } from '@/types';

// --- Урок A2: Предлоги (Präpositionen) с Dativ и Akkusativ, предлоги места ---
export const lessonA2Praepositionen: Lesson = {
  id: 'a2-praepositionen',
  level: 'A2',
  topic: 'Предлоги (Präpositionen) с Dativ и Akkusativ, предлоги места',
  theory: `Предлоги – это служебные слова, которые связывают слова в предложении, указывая на их взаимоотношения (место, время, причину, цель и т.д.). В немецком языке многие предлоги требуют после себя существительное или местоимение в определенном падеже: дательном (Dativ) или винительном (Akkusativ). Существуют также предлоги, которые могут использоваться с обоими падежами в зависимости от значения.

**1. Предлоги, всегда требующие Dativ (Кому? Чему? Где? Когда?):**
Эти предлоги всегда управляют дательным падежом.
-   **aus** (из, с – происхождение, материал): Er kommt **aus** Deutschland. (Он из Германии.) Der Tisch ist **aus** Holz. (Стол из дерева.)
-   **bei** (у, при, во время – местонахождение у кого-то/чего-то, одновременность): Ich wohne **bei** meinen Eltern. (Я живу у моих родителей.) **Bei** dem Essen sprechen wir nicht. (Во время еды мы не разговариваем.)
-   **mit** (с – совместность, инструмент): Ich fahre **mit** dem Bus. (Я еду на автобусе.) Sie spielt **mit** ihrer Schwester. (Она играет со своей сестрой.)
-   **nach** (после, в, на – направление (города, страны без артикля), время): **Nach** der Schule gehe ich nach Hause. (После школы я иду домой.) Wir fliegen **nach** Spanien. (Мы летим в Испанию.)
-   **seit** (с, с тех пор как – временной период, начавшийся в прошлом и продолжающийся до сих пор): Ich lerne Deutsch **seit** einem Jahr. (Я учу немецкий (уже) год.)
-   **von** (от, с, о – отправная точка, принадлежность, авторство): Das Geschenk ist **von** meiner Tante. (Подарок от моей тети.) Das Buch **von** Goethe. (Книга Гёте.)
-   **zu** (к, на, для – направление к объекту/лицу, цель): Ich gehe **zu**m Arzt. (Я иду к врачу.) Wir gehen **zu**r Party. (Мы идем на вечеринку.)
-   **gegenüber** (напротив – может стоять до или после существительного): Die Post ist dem Bahnhof **gegenüber**. / Die Post ist **gegenüber** dem Bahnhof. (Почта напротив вокзала.)

**2. Предлоги, всегда требующие Akkusativ (Кого? Что? Куда?):**
Эти предлоги всегда управляют винительным падежом.
-   **durch** (через, сквозь, по): Wir gehen **durch** den Park. (Мы идем через парк.) Er schaut **durch** das Fenster. (Он смотрит сквозь окно.)
-   **für** (для, за – предназначение, в пользу кого-то/чего-то): Das Geschenk ist **für** dich. (Подарок для тебя.) Ich kaufe Blumen **für** meine Mutter. (Я покупаю цветы для моей мамы.)
-   **gegen** (против, около (о времени)): Die Mannschaft spielt **gegen** ein starkes Team. (Команда играет против сильной команды.) Er kommt **gegen** 10 Uhr. (Он придет около 10 часов.)
-   **ohne** (без): Ich trinke Kaffee **ohne** Zucker. (Я пью кофе без сахара.) Er kann **ohne** sein Handy nicht leben. (Он не может жить без своего мобильного телефона.)
-   **um** (вокруг, в (о времени), за – круговое движение, точное время, иногда причина/цель): Die Katze geht **um** den Tisch. (Кошка ходит вокруг стола.) Der Film beginnt **um** 20 Uhr. (Фильм начинается в 20:00.)

**3. Двойные предлоги (Wechselpräpositionen) – с Dativ или Akkusativ:**
Эти предлоги могут управлять как дательным, так и винительным падежом. Выбор падежа зависит от вопроса, который можно задать к обстоятельству места:
-   **Wo?** (Где?) → **Dativ** (указывает на местоположение, статическое состояние)
-   **Wohin?** (Куда?) → **Akkusativ** (указывает на направление движения к какой-либо цели)

Основные двойные предлоги:
-   **an** (на (вертикальной поверхности), у, к)
    *   Wo? Das Bild hängt **an der** Wand. (Картина висит на стене. – Dativ)
    *   Wohin? Ich hänge das Bild **an die** Wand. (Я вешаю картину на стену. – Akkusativ)
-   **auf** (на (горизонтальной поверхности))
    *   Wo? Das Buch liegt **auf dem** Tisch. (Книга лежит на столе. – Dativ)
    *   Wohin? Ich lege das Buch **auf den** Tisch. (Я кладу книгу на стол. – Akkusativ)
-   **hinter** (за, позади)
    *   Wo? Der Garten ist **hinter dem** Haus. (Сад за домом. – Dativ)
    *   Wohin? Die Katze läuft **hinter das** Haus. (Кошка бежит за дом. – Akkusativ)
-   **in** (в, на (с некоторыми странами и территориями))
    *   Wo? Ich bin **in dem** (im) Zimmer. (Я в комнате. – Dativ)
    *   Wohin? Ich gehe **in das** (ins) Zimmer. (Я иду в комнату. – Akkusativ)
-   **neben** (рядом с, около)
    *   Wo? Die Lampe steht **neben dem** Bett. (Лампа стоит рядом с кроватью. – Dativ)
    *   Wohin? Stelle die Lampe **neben das** Bett. (Поставь лампу рядом с кроватью. – Akkusativ)
-   **über** (над, через, о)
    *   Wo? Die Lampe hängt **über dem** Tisch. (Лампа висит над столом. – Dativ)
    *   Wohin? Das Flugzeug fliegt **über die** Stadt. (Самолет летит над городом. – Akkusativ)
-   **unter** (под)
    *   Wo? Der Hund liegt **unter dem** Tisch. (Собака лежит под столом. – Dativ)
    *   Wohin? Der Hund kriecht **unter den** Tisch. (Собака ползет под стол. – Akkusativ)
-   **vor** (перед, до (о времени))
    *   Wo? Das Auto steht **vor dem** Haus. (Машина стоит перед домом. – Dativ)
    *   Wohin? Fahre das Auto **vor das** Haus. (Поставь машину перед домом. – Akkusativ)
-   **zwischen** (между)
    *   Wo? Der Stuhl steht **zwischen dem** Tisch und dem Fenster. (Стул стоит между столом и окном. – Dativ)
    *   Wohin? Setze dich **zwischen** mich und meinen Bruder. (Сядь между мной и моим братом. – Akkusativ)

**4. Слияние предлогов с артиклями:**
Некоторые предлоги часто сливаются с определенными артиклями:
-   an + dem = **am** (am Montag, am Fenster)
-   an + das = **ans** (ans Fenster)
-   in + dem = **im** (im Haus, im Sommer)
-   in + das = **ins** (ins Kino, ins Bett)
-   auf + das = **aufs** (aufs Land)
-   bei + dem = **beim** (beim Arzt)
-   von + dem = **vom** (vom Bahnhof)
-   zu + dem = **zum** (zum Geburtstag)
-   zu + der = **zur** (zur Schule)

Запоминание предлогов и падежей, которые они требуют, очень важно для правильного построения предложений.`,
  vocabulary: [
    { german: 'aus (+Dativ)', russian: 'из, с (происхождение)', example: 'Er kommt aus der Schweiz.' },
    { german: 'bei (+Dativ)', russian: 'у, при, во время', example: 'Ich bin bei meiner Freundin.' },
    { german: 'mit (+Dativ)', russian: 'с (кем-л., чем-л.)', example: 'Wir fahren mit dem Zug.' },
    { german: 'nach (+Dativ)', russian: 'после, в, на (направление)', example: 'Nach dem Essen gehen wir spazieren.' },
    { german: 'seit (+Dativ)', russian: 'с (какого-то времени)', example: 'Seit zwei Jahren lerne ich Deutsch.' },
    { german: 'von (+Dativ)', russian: 'от, с, о', example: 'Das ist ein Geschenk von Paul.' },
    { german: 'zu (+Dativ)', russian: 'к, на, для (направление, цель)', example: 'Ich gehe zum Supermarkt.' },
    { german: 'gegenüber (+Dativ)', russian: 'напротив', example: 'Das Kino ist gegenüber dem Park.' },
    { german: 'durch (+Akkusativ)', russian: 'через, сквозь, по', example: 'Wir fahren durch die Stadt.' },
    { german: 'für (+Akkusativ)', russian: 'для, за', example: 'Dieses Geschenk ist für dich.' },
    { german: 'gegen (+Akkusativ)', russian: 'против, около (о времени)', example: 'Er spielt gegen seinen Bruder. Er kommt gegen Abend.' },
    { german: 'ohne (+Akkusativ)', russian: 'без', example: 'Kaffee ohne Milch, bitte.' },
    { german: 'um (+Akkusativ)', russian: 'вокруг, в (о времени)', example: 'Wir sitzen um den Tisch. Der Film beginnt um 8 Uhr.' },
    { german: 'an (+Dativ/Akkusativ)', russian: 'на (вертикально), у, к', example: 'Das Bild hängt an der Wand (Wo? Dativ). Ich stelle den Stuhl an den Tisch (Wohin? Akkusativ).' },
    { german: 'auf (+Dativ/Akkusativ)', russian: 'на (горизонтально)', example: 'Das Buch liegt auf dem Tisch (Wo? Dativ). Lege das Buch auf den Tisch (Wohin? Akkusativ).' },
    { german: 'in (+Dativ/Akkusativ)', russian: 'в', example: 'Wir sind im Kino (Wo? Dativ). Wir gehen ins Kino (Wohin? Akkusativ).' },
    { german: 'neben (+Dativ/Akkusativ)', russian: 'рядом с, около', example: 'Er sitzt neben mir (Wo? Dativ). Setz dich neben mich (Wohin? Akkusativ).' },
    { german: 'über (+Dativ/Akkusativ)', russian: 'над, через, о', example: 'Die Wolken sind über uns (Wo? Dativ). Wir fliegen über die Alpen (Wohin? Akkusativ).' },
    { german: 'unter (+Dativ/Akkusativ)', russian: 'под', example: 'Die Katze ist unter dem Bett (Wo? Dativ). Die Katze kriecht unter das Bett (Wohin? Akkusativ).' },
    { german: 'vor (+Dativ/Akkusativ)', russian: 'перед, до (о времени)', example: 'Er steht vor der Tür (Wo? Dativ). Geh vor die Tür (Wohin? Akkusativ).' },
    { german: 'zwischen (+Dativ/Akkusativ)', russian: 'между', example: 'Das Foto hängt zwischen den Fenstern (Wo? Dativ). Stelle die Vase zwischen die Bücher (Wohin? Akkusativ).' },
    { german: 'Wo?', russian: 'Где? (вопрос к Dativ с Wechselpräpositionen)' },
    { german: 'Wohin?', russian: 'Куда? (вопрос к Akkusativ с Wechselpräpositionen)' },
    { german: 'am (an + dem)', russian: 'на, у, в (слияние)', example: 'am Montag, am Tisch' },
    { german: 'im (in + dem)', russian: 'в (слияние)', example: 'im Haus, im Januar' },
    { german: 'ins (in + das)', russian: 'в (слияние, направление)', example: 'ins Kino gehen' },
    { german: 'zum (zu + dem)', russian: 'к, на (слияние)', example: 'zum Bahnhof, zum Frühstück' },
    { german: 'zur (zu + der)', russian: 'к, на (слияние)', example: 'zur Arbeit, zur Schule' },
  ],
  exercises: [
    {
      id: 'a2-praepositionen-ex1',
      type: 'multiple_choice',
      question: 'Выберите правильный предлог: Ich fahre ___ dem Fahrrad zur Arbeit.',
      options: ['auf', 'mit', 'an', 'für'],
      correctAnswer: 'mit',
      explanation: 'Предлог "mit" (с) используется для указания инструмента или средства передвижения и требует Dativ. "Mit dem Fahrrad" - на велосипеде.',
    },
    {
      id: 'a2-praepositionen-ex2',
      type: 'fill_in_the_blank',
      question: 'Вставьте правильный артикль в нужном падеже: Das Geschenk ist für mein___ Bruder.',
      sentenceParts: ['Das Geschenk ist für mein', ' Bruder.'],
      correctAnswer: 'en', // meinen
      explanation: 'Предлог "für" (для) всегда требует Akkusativ. "Bruder" - мужской род, поэтому притяжательное местоимение "mein" в Akkusativ будет "meinen".',
    },
    {
      id: 'a2-praepositionen-ex3',
      type: 'multiple_choice',
      question: 'Куда ты положил книгу? - Я положил книгу ___ стол. (Wohin?)',
      options: ['auf dem', 'auf den', 'in dem', 'an den'],
      correctAnswer: 'auf den',
      explanation: 'Вопрос "Wohin?" (Куда?) с предлогом "auf" (на горизонтальную поверхность) требует Akkusativ. "Der Tisch" (мужской род) в Akkusativ - "den Tisch". Поэтому "auf den Tisch".',
    },
    {
      id: 'a2-praepositionen-ex4',
      type: 'fill_in_the_blank',
      question: 'Где стоит машина? - Машина стоит ___ ___ Garage. (Wo?)',
      sentenceParts: ['Машина стоит ', ' Garage.'], // in der
      correctAnswer: 'in der',
      explanation: 'Вопрос "Wo?" (Где?) с предлогом "in" (в) требует Dativ. "Die Garage" (женский род) в Dativ - "der Garage". Поэтому "in der Garage".',
    },
    {
      id: 'a2-praepositionen-ex5',
      type: 'translation',
      question: 'Переведите на немецкий: "После работы я иду домой."',
      prompt: 'После работы я иду домой.',
      languageDirection: 'to_german',
      correctAnswer: 'Nach der Arbeit gehe ich nach Hause.',
      explanation: '"Nach" (после) требует Dativ ("die Arbeit" -> "der Arbeit"). "Nach Hause" (домой) - устойчивое выражение для направления.',
    },
    {
      id: 'a2-praepositionen-ex6',
      type: 'multiple_choice',
      question: 'Выберите правильный падеж: Wir sprechen ___ das Wetter.',
      options: ['über dem', 'über den', 'über das', 'um das'],
      correctAnswer: 'über das',
      explanation: 'Предлог "über" (о) в значении "говорить о чем-то" требует Akkusativ. "Das Wetter" (средний род) в Akkusativ остается "das Wetter". Поэтому "über das Wetter".',
    },
    {
      id: 'a2-praepositionen-ex7',
      type: 'fill_in_the_blank',
      question: 'Вставьте слияние предлога с артиклем: Er geht ___ (zu + dem) Arzt.',
      sentenceParts: ['Er geht ', ' Arzt.'],
      correctAnswer: 'zum',
      explanation: 'Предлог "zu" с артиклем "dem" сливается в "zum".',
    },
  ],
};
