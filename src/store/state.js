const birdsData = [
    [       
      {
        id: 1,
        name: 'Глухарь',
        species: 'Tetrao urogallus',
        description: 'Глухарь держится преимущественно в сплошных высокоствольных хвойных, а также в смешанных лесах, редко в лиственных. Очень любит моховые болота в лесу, богатые ягодами. Ведёт в целом оседлый образ жизни, но иногда предпринимает перекочёвки с гор в долины и обратно; иногда совершает сезонные кочёвки.',
        image: '../img/Capercaillie.jpg',
        audio: '../audio/XC551836 - Глухарь - Tetrao urogallus.mp3'
      },
      {
        id: 2,
        name: 'Лебедь-Шипун',
        species: 'Cygnus olor',
        description: 'Шипуном назван из-за звука, издаваемого при раздражении',
        image: '../img/cygnus-olor.jpg',
        audio: '../audio/XC578618 - Лебедь-шипун - Cygnus olor.mp3'
      },
      {
        id: 3,
        name: 'Большая белая цапля',
        species: 'Ardea alba',
        description: ' Охотится в одиночку или группами в дневное и сумеречное время, с наступлением темноты сбивается в группы вместе с другими цаплями и ищет убежище. ',
        image: '../img/Ardea_alba.jpg',
        audio: '../audio/XC561783 - Большая белая цапля - Ardea alba.mp3'
      },
      {
        id: 4,
        name: 'Малая поганка',
        species: 'Podiceps ruficollis',
        description: 'Населяет мелкие эвтрофные озёра и водоёмы с медленным течением, обильно заросшие надводной растительностью. Весной прилетает в конце второй декады мая, к гнездованию приступает в конце этого месяца.',
        image: '../img/Podiceps.jpg',
        audio: '../audio/XC561598 - Малая поганка - Tachybaptus ruficollis.mp3'
      },
      {
        id: 5,
        name: 'Ходу́лочник',
        species: 'Himantopus himantopus',
        description: 'Ходулочник обитает на открытых водоёмах с пресной, солоноватой или солёной водой в лагунах, солеварнях и степях. Его длинные лапы позволяют искать корм в глубоководных местах.',
        image: '../img/Himantopus.jpg',
        audio: '../audio/XC579832 - Ходулочник - Himantopus himantopus.mp3'
      },
      {
        id: 6,
        name: 'Ду́пель',
        species: 'Gallinago media',
        description: 'Шведские орнитологи выяснили, что дупель может держать скорость, близкую к 100 км/ч на протяжении более чем 6500 километров, тем самым являясь одной из самых быстрых перелётных птиц.',
        image: '../img/Gallinago.jpg',
        audio: '../audio/XC325087 - Дупель - Gallinago media.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Хохла́тый жа́воронок',
        species: 'Galerida cristata',
        description: 'Поёт обычно, сидя на земле, камне или заборе и иногда в полёте. Пение очень мелодично, птица имитирует даже голоса других птиц.',
        image: '../img/Galerida.jpg',
        audio: '../audio/XC553663 - Хохлатый жаворонок - Galerida cristata.mp3'
      },
      {
        id: 2,
        name: 'Га́лстучник',
        species: 'Charadrius hiaticula',
        description: 'Гнездо галстучника выглядит как небольшое углубление в песке, иногда с валиком из камушков. Самка откладывает 4 желтоватых с тёмными пятнышками яйца.',
        image: '../img/Charadrius_hiaticula_He.jpg',
        audio: '../audio/XC572188 - Галстучник - Charadrius hiaticula hiaticula.mp3'
      },
      {
        id: 3,
        name: 'Речная Ласточка',
        species: 'Tachycineta bicolor',
        description: 'Гнездящаяся пара строит в искусственных или естественных пещерах вблизи воды гнездо из растительного материала в форме чаши.',
        image: '../img/Tree-Swallow.png',
        audio: '../audio/XC540310 - Древесная ласточка - Tachycineta bicolor.mp3'
      },
      {
        id: 4,
        name: 'Чёрный Дрозд',
        species: 'Turdus merula',
        description: 'Чёрный дрозд — это один из самых многочисленных видов птиц. Летом предпочитает селиться в хвойных, смешанных или (на юге) лиственных лесах с хорошим подлеском и сыроватой почвой, лесных оврагах, а также заросших садах и парках. Такие места чёрный дрозд населяет по всей Европе и в европейской части России, на Кавказе живёт в лесном поясе гор',
        image: '../img/Turdus_merula.jpg',
        audio: '../audio/XC458093 - Чёрный дрозд - Turdus merula.mp3'
      },
      {
        id: 5,
        name: 'Гималайская Завирушка',
        species: ' Prunella himalayana',
        description: 'В России гнездится на юге Средней Сибири.',
        image: '../img/Prunella.jpg',
        audio: '../audio/XC162621 - Гималайская завирушка - Prunella himalayana.mp3'
      },
      {
        id: 6,
        name: 'Дрозд-отшельник',
        species: 'Catharus guttatus',
        description: 'Дрозд-отшельник является официальным символом Вермонта.',
        image: '../img/Catharus_guttatus.jpg',
        audio: '../audio/XC575040 - Дрозд-отшельник - Catharus guttatus.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Мухоло́вка-белоше́йка',
        species: ' Ficedula albicollis',
        description: 'Птица предпочитает лиственные леса и парки со старыми деревьями, кладбища и поля с фруктовыми деревьями. Она гнездится в дуплах деревьев, а также в скворечниках. Выводок появляется в период с мая по июль.',
        image: '../img/staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
        audio: '../audio/xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
      },
      {
        id: 2,
        name: 'Синий каменный дрозд',
        species: 'Monticola solitarius',
        description: 'В России встречается в восточной части Северного Кавказа, в Приморье и на юге Сахалина .',
        image: '../img/Monticola.jpg',
        audio: '../audio/XC544993 - Синий каменный дрозд - Monticola solitarius.mp3'
      },
      {
        id: 3,
        name: 'Буроголо́вая га́ичка, пухляк',
        species: 'Poecile montanus',
        description: 'Реже других синиц встречается в местах обитания человека, отдавая предпочтение глухим участкам леса, сплошной тайге и заросшим берегам рек.',
        image: '../img/Poecile.jpg',
        audio: '../audio/XC580597 - Пухляк - Poecile montanus.mp3'
      },
      {
        id: 4,
        name: 'Зелёный дя́тел',
        species: 'Picus viridis',
        description: 'В России зелёный дятел занесён в Красные книги ряда субъектов Федерации, в том числе Московской и Ленинградской областей. Птица также находится под охраной Красной книги Украины и Красной книги Республики Беларусь.',
        image: '../img/Picus_viridis.jpg',
        audio: '../audio/XC573514 - Зелёный дятел - Picus viridis.mp3'
      },
      {
        id: 5,
        name: 'Древесная трясогузка',
        species: 'Dendronanthus indicus',
        description: 'Это единственный вид трясогузок, строящий гнезда на деревьях. Предпочитает гнездиться в дубняках и смешанных лиственных лесах Дальнего Востока, юго-восточных провинциях Китая, Индостана и Зондских островов.',
        image: '../img/staticflickr.com//65535//49226383598_6f8be86a06.jpg',
        audio: '../audio/xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
      },
      {
        id: 6,
        name: 'Рубиновоголовый королёк',
        species: 'Regulus calendula',
        description: 'Красное пятно на голове самца можно увидеть обычно только, если он возбуждён.',
        image: '../img/Regulus_calendula_MP_3.jpg',
        audio: '../audio/XC207262 - Древесная трясогузка - Dendronanthus indicus.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Лесной жаворонок',
        species: 'Lullula arborea',
        description: 'Голос — звонкая трель «тюю-люлю» или «люлюлю», часто поёт в воздухе, летая кругами. Гнездится на земле, в ямке под полынью или злаками. В кладке 4—5 белых или розовато-бурых яиц с бурыми пятнами.',
        image: '../img/Lullula.jpg.jpg',
        audio: '../audio/XC319061 - Лесной жаворонок - Lullula arborea.mp3'
      },
      {
        id: 2,
        name: 'Пе́вчий сверчо́к',
        species: 'Helopsaltes certhiola',
        description: 'Пение в отличие от большинства других сверчков разнообразное, состоит из различных трелей.',
        image: '../img/Locustella_certhiola.jpg',
        audio: '../audio/XC491991 - Певчий сверчок - Helopsaltes certhiola.mp3'
      },
      {
        id: 3,
        name: 'Синий соловей',
        species: 'Luscinia cyane',
        description: 'По весу (15 г.) заметно уступает обыкновенному соловью. От всех других видов соловьёв синий соловей отличается голубой окраской спинной стороны.',
        image: '../img/Luscinia_cyane.jpg',
        audio: '../audio/XC578921 - Синий соловей - Larvivora cyane.MP3'
      },
      {
        id: 4,
        name: 'Певчий дрозд',
        species: 'Turdus philomelos',
        description: 'Песня певчего дрозда считается очень красивой. Она размеренная, неторопливая, звонкая, продолжительная, состоит из низких свистов и коротких трелей, почти каждый элемент песни обычно повторяется 2-4 раза. ',
        image: '../img/Turdus_philomelos.jpg',
        audio: '../audio/XC572242 - Певчий дрозд - Turdus philomelos.mp3'
      },
      {
        id: 5,
        name: 'Певчая овсянка',
        species: 'Melospiza melodia',
        description: 'Птицы, живущие на солончаках, могут поедать мелких ракообразных.',
        image: '../img/Melospiza-melodia.jpg',
        audio: '../audio/XC549199 - Певчая овсянка - Melospiza melodia gouldii.mp3'
      },
      {
        id: 6,
        name: 'Седоголовый щегол',
        species: 'Carduelis caniceps',
        description: 'Весной высоко от земли (на высоте 4-6 м) на деревьях начинают строить гнёзда чашевидной формы с толстыми боковыми стенками и округлым углублённым лоточком.',
        image: '../img/Carduelis_caniceps.jpg',
        audio: '../audio/XC572242 - Певчий дрозд - Turdus philomelos.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Бе́ркут',
        species: 'Aquila nipalensis',
        description: 'Одна из наиболее известных хищных птиц семейства ястребиных, самый крупный орёл. Распространён в Северном полушарии, где обитает преимущественно в горах, в меньшей степени на равнинных открытых и полуоткрытых ландшафтах.',
        image: '../img/Aquila.jpg',
        audio: '../audio/XC518798 - Беркут - Aquila chrysaetos.mp3'
      },
      {
        id: 2,
        name: 'Сапса́н',
        species: 'Falco peregrinus',
        description: 'Это самая быстрая птица в мире. По оценкам специалистов, в стремительном пикирующем полёте она способна развивать скорость свыше 322 км/ч, или 90 м/с',
        image: '../img/Falco.jpg',
        audio: '../audio/XC571135 - Сапсан - Falco peregrinus.mp3'
      },
      {
        id: 3,
        name: 'Вьюрок',
        species: 'Fringilla montifringilla',
        description: 'Песня — негромкое скрипучее щебетание, заканчивающееся резким «чжжж», крик — протяжное «кевк», в полете — резкое «чи-чи» или «вжяя».',
        image: '../img/Fringilla_montifringilla.jpg',
        audio: '../audio/XC541865 - Юрок - Fringilla montifringilla.mp3'
      },
      {
        id: 4,
        name: 'Рыбный филин',
        species: 'Bubo blakistoni',
        description: 'Одна из самых крупных сов мира и крупнейший представитель своего рода. Длина тела — около 70 см, размах крыльев 180—190 см.',
        image: '../img/Blakiston`s_fish_owl.jpg',
        audio: '../audio/XC424567 - Рыбный филин - Bubo blakistoni.mp3'
      },
      {
        id: 5,
        name: 'Зелёная пересмешка',
        species: 'Hippolais icterina',
        description: 'Это очень полезная птичка, особенно во фруктовых садах. «Бродя» по деревьям, она истребляет громадное количество мелких гусениц, жучков-листоедов, тлей и других вредителей листвы.',
        image: '../img/Hippolais_icterina.jpg',
        audio: '../audio/XC575281 - Зелёная пересмешка - Hippolais icterina.mp3'
      },
      {
        id: 6,
        name: 'Желтоголо́вый королёк',
        species: 'Regulus regulus',
        description: ' Всего за 12 минут голодания желтоголовый королёк может сбросить до трети своего веса, а меньше чем за час умереть с голоду.',
        image: '../img/Regulus_regulus.jpg',
        audio: '../audio/XC573698 - Желтоголовый королёк - Regulus regulus.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Полярная крачка',
        species: 'Sterna paradisaea',
        description: 'Моногамны, пары образуются на всю жизнь. Летают в 10—12 м от поверхности воды, охотятся на рыб, ракообразных, моллюсков, насекомых, дождевых червей.',
        image: '../img/Sterna_paradisaeajpg',
        audio: '../audio/XC582319 - Полярная крачка - Sterna paradisaea.mp3.mp3'
      },
      {
        id: 2,
        name: 'Золотоволосый пингвин',
        species: 'Eudyptes chrysolophus',
        description: 'Данный вид считается самым распространённым среди пингвинов, численность по разным оценкам — от 17 до 20 миллионов особей.',
        image: '../img/Eudyptes_chrysolophus.jpg',
        audio: '../audio/XC287421 - Золотоволосый пингвин - Eudyptes chrysolophus.mp3'
      },    
      {
        id: 3,
        name: 'Чайконо́сая кра́чка',
        species: 'Gelochelidon nilotica',
        description: 'Образует колонии на песчаных побережьях морей и на островах, поросшими невысокой травой или лишёнными растительности. Встречается также у степных водоёмов, реже на речных островах.',
        image: '../img/Gelochelidon.jpg',
        audio: '../audio/XC574537 - Чайконосая крачка - Gelochelidon nilotica.mp3'
      },
      {
        id: 4,
        name: 'Хохла́тый бакла́н',
        species: 'Phalacrocorax aristotelis',
        description: 'Осторожна, хорошо плавает и ныряет. Летает довольно тяжело и долго в воздухе не держится. Взлетает с трудом, обычно со скалы или с уступа. Взлетая с воды набирает разбег.',
        image: '../img/Phalacrocorax_aristotelis.jpg.jpg',
        audio: '../audio/XC399822 - Хохлатый баклан - Phalacrocorax aristotelis.mp3'
      },
      {
        id: 5,
        name: 'Берингов баклан',
        species: 'Phalacrocorax pelagicus',
        description: 'На севере распространения большей частью перелётная, на юге — оседлая птица.',
        image: '../img/Phalacrocorax_pelagicus.jpg',
        audio: '../audio/XC149497 - Берингов баклан - Phalacrocorax pelagicus.mp3'
      },
      {
        id: 6,
        name: 'Глупыш',
        species: 'Fulmarus glacialis',
        description: 'Название получил за свою доверчивость, глупыш почти не боится человека.',
        image: '../img/fulmar.jpg',
        audio: '../audio/XC487674 - Глупыш - Fulmarus glacialis.mp3'
      }
    ]
  ];
  
  export default birdsData;
  