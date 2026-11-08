import { ModuleData } from '../types';
import {
  catacombBreakingBreadImage,
  heroAltarEucharistImage,
  amboLectionaryWordImage,
  consecrationChaliceHostImage,
} from '../assets/images';

export const APP_CONFIG = {
  provisionalName: 'Curso sobre a Santa Missa',
  subheading: 'Conhecer a Santa Missa é compreender o mistério de amor que celebramos em cada Eucaristia.',
  description: 'Formação litúrgica e catequética completa para fiéis, catequistas e agentes pastorais.',
  authorNote: 'Desenvolvido em fidelidade à Sagrada Escritura, à Tradição Apostólica e ao Magistério da Igreja Católica.',
};

export const MODULES_DATA: ModuleData[] = [
  {
    id: 'modulo-1',
    number: 1,
    title: 'Introdução à Santa Missa',
    subtitle: 'Origem, teologia e fundamento do Sacrifício Eucarístico',
    description: 'Compreenda o mistério central da fé católica: a Missa como sacrifício de Cristo perpetuado nos altares, sua instituição na Última Ceia e sua vivência na Igreja primitiva.',
    iconName: 'BookOpen',
    image: catacombBreakingBreadImage,
    lessons: [
      {
        id: 'm1-a1',
        moduleId: 'modulo-1',
        number: 1,
        title: 'O que é a Santa Missa?',
        subtitle: 'Memorial do Sacrifício da Cruz e Banquete Celestial',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'A Santa Missa não é uma mera recordação histórica, nem uma reunião social comunitária, mas o ato supremo de culto da Igreja Católica ao Pai, por Cristo, com Cristo e em Cristo, na unidade do Espírito Santo.',
        whatHappens: 'Os fiéis se reúnem na igreja; o sacerdote, ordenado validamente e agindo in persona Christi Capitis (na pessoa de Cristo Cabeça), sobe ao altar para oferecer o verdadeiro Corpo e Sangue do Senhor em sacrifício incruento sob as espécies de pão e vinho.',
        liturgicalMeaning: 'A Missa é, a um só tempo e inseparavelmente, o memorial sacrifical no qual se perpetua o sacrifício da cruz e o banquete sagrado da comunhão no Corpo e Sangue do Senhor. A Eucaristia torna sacramentalmente presente a vitória pascal de Cristo.',
        biblicalFoundation: {
          reference: '1 Coríntios 11, 23-26',
          textExcerpt: 'Todas as vezes que comeis deste pão e bebeis deste cálice, anunciais a morte do Senhor, até que ele venha.',
          explanation: 'São Paulo transmite à comunidade de Corinto a tradição recebida do próprio Senhor Jesus: a celebração eucarística proclama e torna operante o mistério da Sua Morte e Ressurreição.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1362 - §1366',
          text: 'A Eucaristia é o memorial da Páscoa de Cristo, a atualização e a oferenda sacramental de seu único sacrifício, na liturgia de sua Igreja, que é o corpo dele.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Altar Cristão',
            description: 'Representa o próprio Cristo, que é a Pedra Angular, o Altar, o Sacerdote e a Vítima da Nova Aliança.',
            icon: 'Church'
          },
          {
            title: 'O Fogo das Velas',
            description: 'Simboliza Cristo, Luz do mundo que consome a Si mesmo em amor sacrificial pela humanidade.',
            icon: 'Flame'
          }
        ],
        practicalImportance: 'Participar da Santa Missa com entendimento transforma a rotina diária: unimos nossas pequenas alegrias, cruzes e trabalhos ao sacrifício infinito de Cristo sobre o altar.',
        reflectionQuestion: 'Como você costuma se preparar interiormente antes de entrar na igreja para a Santa Missa?',
        latinPrayerOrKeyPhrase: {
          latin: 'Per Ipsum, et cum Ipso, et in Ipso, est tibi Deo Patri omnipotenti, in unitate Spiritus Sancti, omnis honor et gloria.',
          portuguese: 'Por Cristo, com Cristo e em Cristo, a vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda a honra e toda a glória.'
        }
      },
      {
        id: 'm1-a2',
        moduleId: 'modulo-1',
        number: 2,
        title: 'Por que celebramos a Eucaristia?',
        subtitle: 'Fonte e Ápice de toda a Vida Cristã',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'A Igreja não inventou a celebração eucarística; ela responde fielmente ao mandato solene do Redentor: "Fazei isto em memória de mim" (Lc 22, 19).',
        whatHappens: 'Domingo após domingo e dia após dia, a comunidade eclesial se congrega convocada pela Palavra divina para render graças ao Pai (Eucaristia significa "ação de graças") por todas as Suas maravilhas na criação e na redenção.',
        liturgicalMeaning: 'Celebramos a Eucaristia para adorar ao Pai em espírito e verdade, agradecer pelos dons da salvação, expiar os nossos pecados e os do mundo inteiro, e pedir as graças necessárias à santificação da Igreja.',
        biblicalFoundation: {
          reference: 'Lucas 22, 19-20',
          textExcerpt: 'Tomou em seguida o pão e depois de ter dado graças, partiu-o e deu-lho, dizendo: Isto é o meu corpo, que é dado por vós; fazei isto em memória de mim.',
          explanation: 'Jesus institui o memorial perene que nutrirá a Sua Esposa, a Igreja, até o fim dos tempos, selando a Nova e Eterna Aliança no Seu próprio Sangue.'
        },
        churchTeaching: {
          source: 'Concílio Vaticano II, Sacrosanctum Concilium',
          paragraphs: '§10, §47',
          text: 'A Liturgia é o ápice para o qual tende a ação da Igreja e, ao mesmo tempo, a fonte de onde emana toda a sua força.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Ação de Graças (Eucharistia)',
            description: 'Reconhecimento humilde de que tudo recebemos da gratuidade divina: a criação, a redenção e a promessa da glória eterna.',
            icon: 'Sparkles'
          },
          {
            title: 'A Mesa e o Altar',
            description: 'Lugar de comunhão fraternal e, acima de tudo, ara sacrifical da reconciliação do homem com Deus.',
            icon: 'Layers'
          }
        ],
        practicalImportance: 'Sem a Eucaristia dominical, a fé do cristão arrefece. É no Domingo, dia da Ressurreição, que renovamos o nosso compromisso batismal e recebemos a força para vencer o desânimo.',
        reflectionQuestion: 'Você já experimentou a Eucaristia como verdadeiro refúgio e fonte de ânimo para os seus desafios semanais?',
        latinPrayerOrKeyPhrase: {
          latin: 'Vere dignum et iustum est, aequum et salutare, nos tibi semper et ubique gratias agere.',
          portuguese: 'Na verdade é justo e necessário, é nosso dever e salvação dar-vos graças sempre e em todo lugar.'
        }
      },
      {
        id: 'm1-a3',
        moduleId: 'modulo-1',
        number: 3,
        title: 'A instituição da Eucaristia por Jesus Cristo',
        subtitle: 'A Promessa em Cafarnaum e a Entrega no Cenáculo',
        durationMinutes: 9,
        isFullyDeveloped: true,
        intro: 'A instituição da Eucaristia foi profetizada no Antigo Testamento (Melquisedec, a Páscoa judaica, o maná no deserto), prometida solenemente em Cafarnaum (Jo 6) e realizada no Cenáculo de Jerusalém.',
        whatHappens: 'Na noite em que ia ser entregue, no contexto da Páscoa judaica, Jesus realizou algo inteiramente novo: identificou os dons do pão e do vinho com o Seu próprio Corpo entregue e Sangue derramado.',
        liturgicalMeaning: 'Jesus antecipou sacramentalmente a Sua entrega violenta no Calvário, transformando a Sua morte iminente em dom livre de amor sacerdotal e alimento de vida eterna para os Seus discípulos.',
        biblicalFoundation: {
          reference: 'João 6, 51-54',
          textExcerpt: 'Eu sou o pão vivo que desceu do céu. Se alguém comer deste pão, viverá eternamente; e o pão que eu darei é a minha carne para a vida do mundo.',
          explanation: 'No discurso do Pão da Vida, diante da incredulidade de muitos, Jesus não suavizou Suas palavras com metáforas, mas reforçou o realismo salvífico de Sua carne e de Seu sangue.'
        },
        churchTeaching: {
          source: 'Encíclica Ecclesia de Eucharistia (São João Paulo II)',
          paragraphs: '§2 - §4',
          text: 'A Igreja vive da Eucaristia. Esta verdade não exprime apenas uma experiência quotidiana de fé, mas encerra em síntese o próprio núcleo do mistério da Igreja.',
          documentUrl: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_20030417_ecclesia-de-eucharistia.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Pão Ázimo',
            description: 'Pão sem fermento que recorda a pureza, a prontidão da libertação do Egito e a integridade da carne imaculada de Cristo.',
            icon: 'CircleDot'
          },
          {
            title: 'O Vinho de Videira',
            description: 'Símbolo da alegria messiânica e da seiva divina que nutre os ramos da verdadeira Videira.',
            icon: 'Wine'
          }
        ],
        practicalImportance: 'Compreender a instituição eleva nosso respeito pela Sagrada Comunhão: não recebemos um símbolo, mas a Pessoa viva de Nosso Senhor Jesus Cristo.',
        reflectionQuestion: 'Como o discurso do Pão da Vida em São João 6 fortalece a sua certeza na Presença Real de Jesus na Hóstia Santa?',
        latinPrayerOrKeyPhrase: {
          latin: 'Tantum ergo Sacramentum veneremur cernui.',
          portuguese: 'Tão sublime sacramento veneremos curvados.'
        }
      },
      {
        id: 'm1-a4',
        moduleId: 'modulo-1',
        number: 4,
        title: 'A Última Ceia',
        subtitle: 'O Contexto Pascal e a Nova Páscoa Definitiva',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'A Última Ceia foi celebrada no Cenáculo, no contexto do banquete pascal dos hebreus (Sêder de Pessach), que comemorava a libertação da escravidão do Egito pelo sangue do cordeiro pascal.',
        whatHappens: 'Jesus reuniu os Doze Apóstolos no Cenáculo. Ele assumiu os ritos tradicionais da bênção dos alimentos, mas substituiu o cordeiro sacrificial por Si mesmo, o verdadeiro Cordeiro de Deus que tira o pecado do mundo.',
        liturgicalMeaning: 'A Antiga Aliança cede lugar definitivo à Nova Aliança. O cordeiro figurativo do Êxodo é plenamente superado por Cristo, cuja imolação livra os homens da pior das escravidões: o pecado e a morte eterna.',
        biblicalFoundation: {
          reference: 'Mateus 26, 26-28',
          textExcerpt: 'Enquanto comiam, Jesus tomou o pão e, abençoando-o, partiu-o e deu-o aos discípulos, dizendo: Tomai, comei; isto é o meu corpo.',
          explanation: 'Ao pronunciar a bênção e declarar "isto é o meu corpo", o Verbo Encarnado confere à matéria uma eficácia sacramental transcendente.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1339 - §1340',
          text: 'Ao celebrar a última Ceia com os apóstolos no decorrer da refeição pascal, Jesus deu seu sentido definitivo à páscoa judaica.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Lava-Pés',
            description: 'Gesto íntimo associado à Última Ceia que manifesta a caridade servidora indissociável da vida eucarística.',
            icon: 'HeartHandshake'
          },
          {
            title: 'O Cenáculo',
            description: 'A sala alta que abrigou tanto a instituição da Eucaristia quanto a vinda do Espírito Santo em Pentecostes.',
            icon: 'Home'
          }
        ],
        practicalImportance: 'Participar da Missa exige o mesmo espírito dos apóstolos no Cenáculo: humildade, desejo de comunhão com o Mestre e purificação das faltas.',
        reflectionQuestion: 'Você percebe a Santa Missa como a continuação direta daquela mesma noite memorável no Cenáculo?',
        latinPrayerOrKeyPhrase: {
          latin: 'In supremae nocte cenae, recumbens cum fratribus.',
          portuguese: 'Na noite da Última Ceia, estando reclinado com seus irmãos.'
        }
      },
      {
        id: 'm1-a5',
        moduleId: 'modulo-1',
        number: 5,
        title: 'A relação entre a Última Ceia, o sacrifício da Cruz e a Santa Missa',
        subtitle: 'A Mesma Vítima, o Mesmo Sacerdote, um Modo Distinto de Oferecimento',
        durationMinutes: 9,
        isFullyDeveloped: true,
        intro: 'Uma das dúvidas mais frequentes entre os fiéis é entender se a Missa repete o sacrifício do Calvário. A doutrina da Igreja ensina com claridade: o sacrifício da Cruz não se repete, mas torna-se sacramentalmente presente em cada altar.',
        whatHappens: 'Na Missa, o sacerdote não mata novamente a Jesus; pela consagração separada do pão (Corpo) e do vinho (Sangue), representa-se misticamente a separação da alma e do corpo de Cristo na Cruz.',
        liturgicalMeaning: 'O Sacrifício do Calvário e o Sacrifício da Missa são um único e idêntico sacrifício: a Vítima é a mesma (Jesus Cristo), o Sacerdote principal é o mesmo (Jesus Cristo agindo pelo ministro ordenado). Muda apenas o modo de oferecer: cruento na Cruz, incruento no altar.',
        biblicalFoundation: {
          reference: 'Hebreus 9, 11-14; 24-28',
          textExcerpt: 'Cristo não entrou num santuário feito por mão humana... mas no próprio céu, a fim de comparecer agora na presença de Deus a nosso favor.',
          explanation: 'A Carta aos Hebreus demonstra que Cristo ofereceu um sacrifício perfeito de valor infinito de uma vez para sempre (ephapax), eternamente eficaz perante o trono da Graça.'
        },
        churchTeaching: {
          source: 'Concílio de Trento, Sessão XXII (Doutrina sobre o Santíssimo Sacrifício da Missa)',
          paragraphs: 'Capítulo II, Cânon 1 e 3',
          text: 'Neste divino sacrifício que se realiza na Missa, aquele mesmo Cristo está contido e é imolado de modo incruento, o qual uma vez se ofereceu cruentamente no altar da cruz.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm'
        },
        gesturesAndSymbols: [
          {
            title: 'A Consagração Separada',
            description: 'Primeiro consagra-se o pão, depois o cálice: esta separação sacramental das espécies simboliza a morte de Cristo no Calvário.',
            icon: 'Split'
          },
          {
            title: 'O Crucifixo sobre o Altar',
            description: 'A Instrução Geral do Missal Romano prescreve uma cruz com a imagem de Cristo crucificado junto ao altar para lembrar o vínculo inseparável com o Calvário.',
            icon: 'Cross'
          }
        ],
        practicalImportance: 'Quando estamos na Missa, estamos espiritualmente aos pés da Cruz com a Virgem Maria e o apóstolo São João. Não há lugar de maior intimidade com o Redentor.',
        reflectionQuestion: 'Como muda a sua atenção na Missa saber que você está verdadeiramente diante do mistério da Cruz de Cristo?',
        latinPrayerOrKeyPhrase: {
          latin: 'Una enim eademque est hostia, idem nunc offerens sacerdotum ministerio, qui seipsum tunc in cruce obtulit.',
          portuguese: 'Pois uma e a mesma é a vítima, e aquele que agora se oferece pelo ministério dos sacerdotes é o mesmo que outrora se ofereceu na cruz.'
        }
      },
      {
        id: 'm1-a6',
        moduleId: 'modulo-1',
        number: 6,
        title: 'A Eucaristia na Igreja primitiva',
        subtitle: 'A Fração do Pão e o Testemunho dos Santos Padres',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'Desde o dia de Pentecostes, os primeiros cristãos perseveravam na comunhão fraterna, na doutrina dos apóstolos, nas orações e na "Fração do Pão" (At 2, 42).',
        whatHappens: 'Reunidos aos domingos nas casas particulares (domus ecclesiae) ou nas catacumbas em tempos de perseguição romana, os fiéis ouviam as memórias dos apóstolos e os escritos dos profetas, seguidos pela oração e consagração do pão e do cálice pelo bispo ou presbítero.',
        liturgicalMeaning: 'A estrutura fundamental da Missa atual (Liturgia da Palavra e Liturgia Eucarística) já existia plenamente traçada no século II, como atesta São Justino Mártir em sua famosa Apologia dirigida ao imperador Antonino Pio por volta do ano 155 d.C.',
        biblicalFoundation: {
          reference: 'Atos dos Apóstolos 20, 7',
          textExcerpt: 'No primeiro dia da semana, estávamos reunidos para a fração do pão. Paulo falava aos discípulos...',
          explanation: 'O primeiro dia da semana (o Domingo, Dies Domini) foi escolhido pelos cristãos como dia de culto para comemorar a Ressurreição do Senhor através da fração do pão eucarístico.'
        },
        churchTeaching: {
          source: 'São Justino Mártir, I Apologia',
          paragraphs: 'Capítulo 65 - 67 (aprox. 155 d.C.)',
          text: 'A este alimento chamamos Eucaristia... pois não o tomamos como pão comum nem bebida ordinária, mas como a carne e o sangue daquele Jesus feito carne.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/cfaith/index.htm'
        },
        gesturesAndSymbols: [
          {
            title: 'O Ichthys (Peixe)',
            description: 'Acrônimo grego Iesous Christos Theou Yios Soter (Jesus Cristo, Filho de Deus, Salvador), símbolo secreto da Eucaristia nas catacumbas.',
            icon: 'Compass'
          },
          {
            title: 'O Ósculo Santo',
            description: 'O abraço ou beijo de paz fraterna dado pelos primeiros fiéis antes da apresentação das oferendas no altar.',
            icon: 'Smile'
          }
        ],
        practicalImportance: 'Descobrir a fé dos primeiros séculos dissipa qualquer dúvida: a doutrina católica da Eucaristia e a estrutura da Missa são o tesouro ininterrupto preservado desde os Apóstolos.',
        reflectionQuestion: 'Você sente a honra de professar hoje a exata mesma fé eucarística pela qual tantos mártires dos primeiros séculos deram a própria vida?',
        latinPrayerOrKeyPhrase: {
          latin: 'Sine Dominico non possumus.',
          portuguese: 'Sem o Domingo (sem a Eucaristia dominical), não podemos viver. (Mártires de Abitina, ano 304).'
        }
      }
    ]
  },
  {
    id: 'modulo-2',
    number: 2,
    title: 'Ritos Iniciais',
    subtitle: 'Da reunião dos fiéis à Coleta que abre a celebração',
    description: 'Aprenda o propósito dos ritos preliminares: congregar o povo de Deus, purificar o coração arrependido e dispor o espírito para ouvir a Palavra e celebrar a Eucaristia.',
    iconName: 'Church',
    image: heroAltarEucharistImage,
    lessons: [
      {
        id: 'm2-a1',
        moduleId: 'modulo-2',
        number: 1,
        title: 'Canto de entrada e procissão',
        subtitle: 'A assembleia se põe a caminho com o Senhor',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'Os Ritos Iniciais têm por objetivo fazer com que os fiéis reunidos formem um só corpo e se disponham adequadamente para escutar a Palavra de Deus e celebrar dignamente a Eucaristia (Instrução Geral do Missal Romano, n. 46).',
        whatHappens: 'O povo se coloca de pé. Inicia-se o canto litúrgico de entrada enquanto o sacerdote celebrante, precedido pelos ministros (crucífero, ceroferários, acólitos e diácono com o Evangeliário), caminha em procissão solene em direção ao presbitério.',
        liturgicalMeaning: 'A procissão de entrada simboliza a Igreja peregrina neste mundo, caminhando rumo à Jerusalém Celeste. O canto fomenta a união dos fiéis, eleva seus pensamentos ao mistério do tempo litúrgico e acompanha a caminhada dos ministros.',
        biblicalFoundation: {
          reference: 'Salmo 99 (100), 2-4',
          textExcerpt: 'Servi ao Senhor com alegria! Entrai em sua presença com cânticos de júbilo!... Entrai por suas portas com hinos de louvor!',
          explanation: 'O saltério inspira o povo de Deus a achegar-se ao Templo Santo com júbilo, conscientes de que o Senhor é bom e eterna é a sua misericórdia.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 47 - 48',
          text: 'O objetivo do canto de entrada é abrir a celebração, fomentar a união dos fiéis reunidos, introduzir seus espíritos no mistério do tempo litúrgico e acompanhar a procissão dos sacerdotes e ministros.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Ficar de Pé',
            description: 'Postura do homem ressuscitado em Cristo, vigilante e reverente perante a majestade de Deus.',
            icon: 'User'
          },
          {
            title: 'A Cruz Processional',
            description: 'Encabeça sempre a procissão, mostrando que é o Cristo Crucificado que conduz e precede o Seu povo.',
            icon: 'Cross'
          }
        ],
        practicalImportance: 'Chegar antes do canto de entrada ajuda a acalmar os pensamentos agitados, permitindo que a nossa alma sintonize com a liturgia santa desde o primeiro instante.',
        reflectionQuestion: 'Você costuma chegar à igreja com antecedência para rezar em silêncio antes do início do canto?',
        latinPrayerOrKeyPhrase: {
          latin: 'Introibo ad altare Dei, ad Deum qui laetificat iuventutem meam.',
          portuguese: 'Entrarei ao altar de Deus, ao Deus que alegra a minha juventude.'
        }
      },
      {
        id: 'm2-a2',
        moduleId: 'modulo-2',
        number: 2,
        title: 'Saudação ao altar e ao povo',
        subtitle: 'Veneração do Altar e o Beijo Sacerdotal',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'Ao chegar ao presbitério, o sacerdote realiza gestos de profunda carga teológica antes de pronunciar qualquer palavra à assembleia.',
        whatHappens: 'O sacerdote e os ministros fazem inclinação profunda diante do altar (ou genuflexão se o Sacrário estiver no presbitério). Em seguida, o sacerdote aproxima-se do altar e beija-o com afeto reverente. Em missas solenes, incensa o altar e a cruz.',
        liturgicalMeaning: 'O beijo no altar não é mera etiqueta humana: o altar representa o próprio Jesus Cristo, a pedra viva. Beijar o altar é saudar afetuosamente o Senhor e demonstrar amor nupcial da Igreja pelo seu Esposo.',
        biblicalFoundation: {
          reference: '1 Pedro 2, 4-5',
          textExcerpt: 'Achegai-vos a ele, pedra viva, que os homens rejeitaram, mas escolhida e preciosa aos olhos de Deus.',
          explanation: 'São Pedro ensina que Cristo é a Pedra Viva sobre a qual nós mesmos, como pedras vivas, somos edificados em templo espiritual.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 49',
          text: 'Chegando ao presbitério, o sacerdote, o diácono e os ministros saúdam o altar com uma inclinação profunda. Como sinal de veneração, o sacerdote e o diácono beijam o altar.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Beijo no Altar',
            description: 'Gesto de carinho e comunhão nupcial com Cristo, muitas vezes depositado sobre o sepulcro das relíquias dos santos mártires.',
            icon: 'Heart'
          },
          {
            title: 'O Incenso (Turíbulo)',
            description: 'Simboliza a purificação sagrada e a oração dos fiéis que sobe agradável a Deus como aroma perfumado (Ap 8, 3-4).',
            icon: 'Wind'
          }
        ],
        practicalImportance: 'Ver o sacerdote beijar o altar ensina-nos o respeito e o amor físico e espiritual que devemos cultivar pelas coisas sagradas.',
        reflectionQuestion: 'Você olha para o altar com o respeito devido à mesa sagrada onde o Céu toca a terra?',
        latinPrayerOrKeyPhrase: {
          latin: 'Oramus te, Domine, per merita Sanctorum tuorum, ut indulgere digneris omnia peccata mea.',
          portuguese: 'Nós vos pedimos, Senhor, pelos méritos dos vossos Santos, que vos digneis perdoar todos os meus pecados.'
        }
      },
      {
        id: 'm2-a3',
        moduleId: 'modulo-2',
        number: 3,
        title: 'O Sinal da Cruz',
        subtitle: 'Selados no Nome da Santíssima Trindade',
        durationMinutes: 6,
        isFullyDeveloped: true,
        intro: 'Toda celebração litúrgica católica tem início com o mais nobre e universal símbolo da nossa redenção: o Sinal da Cruz.',
        whatHappens: 'O sacerdote e toda a assembleia traçam sobre si mesmos o sinal da cruz, da fronte ao peito, e do ombro esquerdo ao ombro direito, enquanto respondem com fé o "Amém".',
        liturgicalMeaning: 'O Sinal da Cruz professa os dois mistérios capitais da fé católica: a Unidade e Trindade de Deus (Pai, Filho e Espírito Santo) e a Encarnação e Redenção pela Cruz de Cristo. Ele nos recorda o nosso batismo.',
        biblicalFoundation: {
          reference: 'Mateus 28, 19',
          textExcerpt: 'Ide, pois, e fazei discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo.',
          explanation: 'O mandato de envio confiado por Jesus aos apóstolos marca o cristão com o Nome Santo de Deus como posse eterna.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§2157',
          text: 'O cristão começa o seu dia, as suas orações e as suas ações com o sinal-da-cruz: "Em nome do Pai e do Filho e do Espírito Santo. Amém".',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p3s2cap1_2083-2195_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Mão na Cabeça, Peito e Ombros',
            description: 'Consagra a Deus nossos pensamentos (cabeça), nossos afetos e sentimentos (peito) e nossas forças e ações (ombros).',
            icon: 'ShieldCheck'
          },
          {
            title: 'A Palavra "Amém"',
            description: 'Termo hebraico que significa "Assim é", "Eu creio", "Estou firme nesta verdade".',
            icon: 'Check'
          }
        ],
        practicalImportance: 'Fazer o sinal da cruz com reverência — e não com pressa descuidada — é uma oração completa que espanta as distrações e afasta as ciladas do demônio.',
        reflectionQuestion: 'Você costuma fazer o sinal da cruz pausadamente, consciente das palavras que pronuncia?',
        latinPrayerOrKeyPhrase: {
          latin: 'In nomine Patris, et Filii, et Spiritus Sancti. Amen.',
          portuguese: 'Em nome do Pai e do Filho e do Espírito Santo. Amém.'
        }
      },
      {
        id: 'm2-a4',
        moduleId: 'modulo-2',
        number: 4,
        title: 'Saudação Litúrgica',
        subtitle: 'O Senhor esteja convosco: A Presença Viva do Ressuscitado',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'Após o Sinal da Cruz, o sacerdote saúda a assembleia manifestando a presença do Senhor na comunidade reunida.',
        whatHappens: 'Com os braços abertos, o sacerdote diz: "O Senhor esteja convosco" (ou outra fórmula paulina, como "A graça de Nosso Senhor Jesus Cristo..."). O povo responde: "Ele está no meio de nós" (ou no latim: "Et cum spiritu tuo" — E com o teu espírito).',
        liturgicalMeaning: 'Esta saudação não é um "bom dia" profano. Ela anuncia o mistério da presença operante de Cristo no meio da Igreja reunida para a oração litúrgica, segundo a Sua promessa (Mt 18, 20).',
        biblicalFoundation: {
          reference: '2 Coríntios 13, 13; Rute 2, 4',
          textExcerpt: 'A graça do Senhor Jesus Cristo, o amor de Deus e a comunhão do Espírito Santo estejam com todos vós.',
          explanation: 'As saudações litúrgicas do Missal Romano são hauridas diretamente das cartas de São Paulo e dos cumprimentos de bênção do Antigo Testamento.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 50',
          text: 'Pela saudação e pela resposta do povo, manifesta-se o mistério da Igreja reunida. Por esta saudação e pela resposta, exprime-se a presença do Senhor na comunidade.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Braços Abertos do Sacerdote',
            description: 'Gesto de acolhimento e transmissão da bênção divina que abarca a totalidade do corpo eclesial.',
            icon: 'Maximize'
          },
          {
            title: '"E com o teu espírito"',
            description: 'A resposta do povo reconhece o dom do Espírito Santo conferido ao sacerdote na sua ordenação sagrada para agir como pastor.',
            icon: 'Sparkle'
          }
        ],
        practicalImportance: 'Responder com convicção e voz clara sintoniza o coração com a realidade espiritual: não estamos sós, o Senhor Ressuscitado preside a assembleia.',
        reflectionQuestion: 'Como você responde à saudação do sacerdote? De modo distraído ou professando a presença real de Cristo no meio da comunidade?',
        latinPrayerOrKeyPhrase: {
          latin: 'Dominus vobiscum. Et cum spiritu tuo.',
          portuguese: 'O Senhor esteja convosco. E com o teu espírito.'
        }
      },
      {
        id: 'm2-a5',
        moduleId: 'modulo-2',
        number: 5,
        title: 'Ato Penitencial',
        subtitle: 'Reconhecimento da Própria Fraqueza e Confiança na Misericórdia',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'Ninguém pode aproximar-se dignamente dos sagrados mistérios sem antes reconhecer com sinceridade a sua condição de pecador necessitado da graça redentora.',
        whatHappens: 'O sacerdote convida a assembleia: "Irmãos e irmãs, reconheçamos as nossas culpas, para celebrarmos dignamente os santos mistérios". Segue-se um momento de silêncio para exame de consciência, e todos rezam o Confiteor ("Confesso a Deus todo-poderoso...") ou outra fórmula penitencial.',
        liturgicalMeaning: 'O Ato Penitencial não substitui o Sacramento da Reconciliação (Confissão) para os pecados mortais, mas purifica a assembleia dos pecados veniais e das negligências cotidianas, preparando o coração com humildade.',
        biblicalFoundation: {
          reference: '1 João 1, 8-9',
          textExcerpt: 'Se dissermos que não temos pecado, enganamo-nos a nós mesmos e a verdade não está em nós. Se confessamos os nossos pecados, ele é fiel e justo para nos perdoar.',
          explanation: 'O apóstolo amado nos ensina que a sinceridade do reconhecimento das próprias faltas atrai a justiça misericordiosa de Deus.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1425, §1436',
          text: 'A Eucaristia é também remédio que nos livra das faltas cotidianas e nos preserva dos pecados mortais.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap2_1420-1532_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Breve Silêncio',
            description: 'Momento precioso de interiorização para que cada um coloque diante de Deus suas fraquezas e peça perdão.',
            icon: 'VolumeX'
          },
          {
            title: 'Bater no Peito',
            description: 'Gesto de compunção e humildade durante as palavras "por minha culpa, minha tão grande culpa", como o publicano no Templo (Lc 18, 13).',
            icon: 'HeartCrack'
          }
        ],
        practicalImportance: 'Entrar na Missa sentindo-se "justo" impede a ação da graça. O Ato Penitencial nos nivela a todos sob a mesma misericórdia de Deus.',
        reflectionQuestion: 'Você aproveita o instante de silêncio para repassar no coração onde falhou na caridade e na fidelidade aos mandamentos durante a semana?',
        latinPrayerOrKeyPhrase: {
          latin: 'Confiteor Deo omnipotenti et vobis, fratres, quia peccavi nimis cogitatione, verbo, opere et omissione: mea culpa, mea culpa, mea maxima culpa.',
          portuguese: 'Confesso a Deus todo-poderoso e a vós, irmãos, que pequei muitas vezes por pensamentos e palavras, atos e omissões: por minha culpa, minha culpa, minha tão grande culpa.'
        }
      },
      {
        id: 'm2-a6',
        moduleId: 'modulo-2',
        number: 6,
        title: 'Senhor, tende piedade (Kyrie, eleison)',
        subtitle: 'A Súplica Eclesial ao Cristo Ressuscitado',
        durationMinutes: 6,
        isFullyDeveloped: true,
        intro: 'Logo após o Ato Penitencial, a assembleia aclama a Cristo com o canto ou recitação do Kyrie, uma das orações mais veneráveis da cristandade.',
        whatHappens: 'Os fiéis cantam ou proclamam alternadamente: "Senhor, tende piedade de nós. Cristo, tende piedade de nós. Senhor, tende piedade de nós" (ou em grego: Kyrie, eleison; Christe, eleison; Kyrie, eleison).',
        liturgicalMeaning: 'O Kyrie é uma aclamação ao Senhor Ressuscitado e uma prece implorando Sua misericórdia. O uso do grego preserva a memória ecumênica da Igreja oriental e ocidental, que se unem num só clamor de fé.',
        biblicalFoundation: {
          reference: 'Marcos 10, 47-48',
          textExcerpt: 'Ouvindo dizer que era Jesus de Nazaré, começou a gritar: "Jesus, filho de Davi, tem piedade de mim!"',
          explanation: 'O clamor do cego Bartimeu em Jericó é adotado pela Igreja como a voz de toda a humanidade ferida que busca a cura de Cristo.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 52',
          text: 'Depois do ato penitencial, diz-se sempre o Senhor, tende piedade, a não ser que já tenha feito parte do próprio ato penitencial. Sendo um cântico pelo qual os fiéis aclamam o Senhor e imploram a sua misericórdia, é normalmente cantado por todos.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Língua Grega',
            description: 'Única passagem ordinária na Missa romana mantida em grego koiné, atestando a antiguidade apostólica da oração.',
            icon: 'Languages'
          },
          {
            title: 'A Repetição Trina',
            description: 'Três invocações que dirigem a súplica ao Senhor em união com as três pessoas da Santíssima Trindade.',
            icon: 'Repeat'
          }
        ],
        practicalImportance: 'O Kyrie ensina-nos a não ter medo de gritar pela ajuda de Jesus: Ele nunca passa indiferente ao coração humilhado que suplica o Seu socorro.',
        reflectionQuestion: 'Você já se sentiu como o cego Bartimeu, precisando do olhar e da compaixão de Jesus para enxergar o caminho da sua vida?',
        latinPrayerOrKeyPhrase: {
          latin: 'Kyrie, eleison. Christe, eleison. Kyrie, eleison.',
          portuguese: 'Senhor, tende piedade. Cristo, tende piedade. Senhor, tende piedade.'
        }
      },
      {
        id: 'm2-a7',
        moduleId: 'modulo-2',
        number: 7,
        title: 'Hino de louvor (Glória a Deus nas alturas)',
        subtitle: 'O Canto dos Anjos em Belém Entoado pela Igreja',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'O Glória é um hino antiquíssimo e venerável com que a Igreja Católica, congregada no Espírito Santo, glorifica a Deus Pai e suplica ao Cordeiro.',
        whatHappens: 'A assembleia entoa o hino festivo nos domingos (fora do Advento e da Quaresma), nas solenidades e festas. O canto inicia com as palavras dos anjos na noite do Natal e desdobra-se em louvor trinitário.',
        liturgicalMeaning: 'O hino canta o mistério da Encarnação redentora. Nele a Igreja não pede coisas para si, mas louva a Deus por Sua imensa glória: "Nós vos louvamos, nós vos bendizemos, nós vos adoramos, nós vos glorificamos".',
        biblicalFoundation: {
          reference: 'Lucas 2, 13-14',
          textExcerpt: 'E subitamente uniu-se ao anjo uma multidão do exército celeste, louvando a Deus e dizendo: Glória a Deus nas maiores alturas e paz na terra aos homens por ele amados.',
          explanation: 'A liturgia terrestre se une ao coro invisível dos anjos celestes para festejar a salvação que desceu dos céus.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 53',
          text: 'O Glória é um antiquíssimo e venerável hino pelo qual a Igreja, congregada no Espírito Santo, glorifica a Deus Pai e o Cordeiro e lhe apresenta as suas súplicas. É cantado pela assembleia dos fiéis.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Inclinação da Cabeça',
            description: 'Costume venerável de inclinar levemente a cabeça às palavras "Senhor Jesus Cristo", "Deus Pai todo-poderoso" e "Espírito Santo".',
            icon: 'CornerRightDown'
          },
          {
            title: 'A Omissão no Tempo Penitencial',
            description: 'O Glória cala-se durante o Advento e a Quaresma para que ressoe com intensidade radiante na Noite de Natal e na Vigília Pascal.',
            icon: 'Sun'
          }
        ],
        practicalImportance: 'A oração de puro louvor liberta a nossa alma do egoísmo utilitário de procurar a Deus apenas quando temos pedidos urgentes a fazer.',
        reflectionQuestion: 'Você já agradeceu e louvou a Deus simplesmente pelo fato de Ele ser quem Ele é: Santo, Todo-Poderoso e Fiel?',
        latinPrayerOrKeyPhrase: {
          latin: 'Gloria in excelsis Deo et in terra pax hominibus bonae voluntatis. Laudamus te, benedicimus te, adoramus te, glorificamus te.',
          portuguese: 'Glória a Deus nas alturas, e paz na terra aos homens por Ele amados. Nós vos louvamos, nós vos bendizemos, nós vos adoramos, nós vos glorificamos.'
        }
      },
      {
        id: 'm2-a8',
        moduleId: 'modulo-2',
        number: 8,
        title: 'Oração da Coleta',
        subtitle: 'A Coleta das Preces da Assembleia em Uma Só Súplica',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'A Oração da Coleta é o cume que encerra os Ritos Iniciais e prepara a transição para a Liturgia da Palavra.',
        whatHappens: 'O sacerdote convida a assembleia dizendo: "Oremos". Segue-se um silêncio no qual cada fiel formula no íntimo suas intenções particulares. Em seguida, o sacerdote estende as mãos (posição orante) e profere a oração própria do dia, que se conclui com uma fórmula trinitária longa. O povo responde: "Amém".',
        liturgicalMeaning: 'A palavra "coleta" provém do latim collecta e significa a ação de recolher. O sacerdote, agindo como intercessor em nome de Cristo e da Igreja, recolhe todas as orações secretas de cada pessoa presente e as reúne numa só súplica solene entregue ao Pai.',
        biblicalFoundation: {
          reference: '1 Timóteo 2, 1-5',
          textExcerpt: 'Recomendo, pois, antes de tudo, que se façam súplicas, orações, intercessões e ações de graças por todos os homens... Pois há um só Deus e um só mediador entre Deus e os homens: Jesus Cristo, homem.',
          explanation: 'São Paulo fundamenta a mediação orante da Igreja em Jesus Cristo, o único Mediador perante o Pai celestial.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 54',
          text: 'O sacerdote convida o povo a orar; e todos, juntamente com o sacerdote, guardam um momento de silêncio para tomarem consciência de que estão na presença de Deus e poderem formular intimamente os seus desejos. O sacerdote diz então a oração que se costuma chamar "coleta", pela qual se exprime a índole da celebração.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'As Mãos Erguidas (Orante)',
            description: 'Postura corporal antiquíssima que remonta a Moisés orando no monte (Ex 17, 11) e a Cristo de braços abertos na cruz.',
            icon: 'Hand'
          },
          {
            title: 'O Amém Conclusivo',
            description: 'Ao responder "Amém", a assembleia inteira subscreve e assume como sua a oração proferida pelo sacerdote.',
            icon: 'CheckCheck'
          }
        ],
        practicalImportance: 'Aproveite o silêncio após o convite "Oremos" para depositar no coração do sacerdote aquela graça, preocupação ou intenção familiar que você trouxe para a Missa.',
        reflectionQuestion: 'O que você costuma colocar na Coleta do sacerdote para ser apresentado a Deus no início da Missa?',
        latinPrayerOrKeyPhrase: {
          latin: 'Per Dominum nostrum Iesum Christum Filium tuum, qui tecum vivit et regnat in unitate Spiritus Sancti, Deus, per omnia saecula saeculorum. Amen.',
          portuguese: 'Por nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém.'
        }
      }
    ]
  },
  {
    id: 'modulo-3',
    number: 3,
    title: 'Liturgia da Palavra',
    subtitle: 'Deus fala ao Seu povo reunido',
    description: 'A mesa da Palavra de Deus alimenta e instrui a Igreja: das profecias do Antigo Testamento à proclamação do Evangelho, a homilia e a profissão de fé.',
    iconName: 'BookMarked',
    image: amboLectionaryWordImage,
    lessons: [
      {
        id: 'm3-a1',
        moduleId: 'modulo-3',
        number: 1,
        title: 'O significado da Liturgia da Palavra',
        subtitle: 'A mesa das Escrituras que antecede a mesa Eucarística',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'A Liturgia da Palavra e a Liturgia Eucarística estão tão estreitamente unidas entre si que formam um único ato de culto (Sacrosanctum Concilium, n. 56).',
        whatHappens: 'Os fiéis sentam-se para escutar reverentemente as leituras bíblicas proclamadas do ambão por leitores instituídos ou fiéis leigos preparados, culminando na aclamação e proclamação do Santo Evangelho.',
        liturgicalMeaning: 'Cristo está verdadeiramente presente em Sua palavra, pois é Ele mesmo que fala quando na Igreja se leem as Sagradas Escrituras.',
        biblicalFoundation: {
          reference: 'Isaías 55, 10-11',
          textExcerpt: 'A palavra que sai de minha boca não voltará para mim vazia, sem ter produzido o seu fruto.',
          explanation: 'A Palavra divina é viva e eficaz, gerando conversão e fé nos corações abertos.'
        },
        churchTeaching: {
          source: 'Constituição Dogmática Dei Verbum',
          paragraphs: 'n. 21',
          text: 'A Igreja venerou sempre as divinas Escrituras como venera o próprio Corpo do Senhor, não deixando de tomar e distribuir aos fiéis o pão da vida, quer da mesa da palavra de Deus quer da mesa do Corpo de Cristo.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Ambão',
            description: 'Mesa sagrada da Palavra, reservada exclusivamente para as leituras bíblicas, o salmo e a homilia.',
            icon: 'Lectern'
          },
          {
            title: 'O Sentar-se',
            description: 'Postura do discípulo atento que aprende aos pés do Mestre.',
            icon: 'Armchair'
          }
        ],
        practicalImportance: 'Escutar com o coração desperto ajuda a descobrir a resposta de Deus para as incertezas e decisões da semana.',
        reflectionQuestion: 'Você lê as leituras da liturgia diária ou dominical antes de sair de casa para a Missa?',
        latinPrayerOrKeyPhrase: {
          latin: 'Verbum Domini. Deo gratias.',
          portuguese: 'Palavra do Senhor. Graças a Deus.'
        }
      },
      {
        id: 'm3-a2',
        moduleId: 'modulo-3',
        number: 2,
        title: 'Primeira Leitura',
        subtitle: 'A Promessa e a História da Salvação no Antigo Testamento',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'A Primeira Leitura é extraída do Antigo Testamento (ou dos Atos dos Apóstolos no Tempo Pascal) e mantém estreita harmonia com o Evangelho do dia.',
        whatHappens: 'O leitor dirige-se ao ambão com dignidade, proclama o texto bíblico com clareza e conclui dizendo "Palavra do Senhor".',
        liturgicalMeaning: 'Recorda a pedagogia de Deus na Antiga Aliança, preparando a humanidade para a vinda de Seu Filho amado.',
        biblicalFoundation: {
          reference: 'Romanos 15, 4',
          textExcerpt: 'Tudo o que outrora foi escrito foi escrito para nossa instrução, a fim de que pela paciência e consolação tenhamos esperança.',
          explanation: 'São Paulo ensina o valor perene dos textos do Antigo Testamento para a edificação da Igreja cristã.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 57',
          text: 'Nas leituras prepara-se para os fiéis a mesa da Palavra de Deus e abrem-se-lhes os tesouros da Bíblia.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Aclamação "Graças a Deus"',
            description: 'A resposta da assembleia expressa louvor e gratidão a Deus pela Sua mensagem revelada.',
            icon: 'Check'
          }
        ],
        practicalImportance: 'Nos ajuda a reconhecer a fidelidade de Deus que nunca abandona Seu povo ao longo das gerações.',
        reflectionQuestion: 'Você consegue enxergar a linha contínua do amor de Deus desde o Antigo Testamento até os dias atuais?'
      },
      {
        id: 'm3-a3',
        moduleId: 'modulo-3',
        number: 3,
        title: 'Salmo Responsorial',
        subtitle: 'A Resposta da Igreja com a Própria Palavra Inspirada',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'O Salmo Responsorial é parte integrante da Liturgia da Palavra e constitui uma oração cantada inspirada pelo Espírito Santo.',
        whatHappens: 'O salmista ou cantor entoa o refrão do ambão e o povo repete; seguem-se as estrofes com a alternância orante da assembleia.',
        liturgicalMeaning: 'A Igreja responde à leitura que acabou de ouvir utilizando os mesmos cânticos que Jesus rezou na terra.',
        biblicalFoundation: {
          reference: 'Colossenses 3, 16',
          textExcerpt: 'Instruí-vos e admoestai-vos uns aos outros com salmos, hinos e cânticos espirituais.',
          explanation: 'Os salmos são o espelho da alma orante em todas as circunstâncias humanas.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 61',
          text: 'O salmo responsorial goza de grande importância litúrgica e pastoral, pois favorece a meditação da Palavra de Deus.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Canto Responsorial',
            description: 'Facilita a memorização e penetração da Palavra de Deus no coração.',
            icon: 'Music'
          }
        ],
        practicalImportance: 'Ensina-nos a rezar nos momentos de angústia, louvor, súplica e agradecimento.',
        reflectionQuestion: 'O refrão do salmo costuma ecoar nos seus pensamentos ao longo do seu dia?'
      },
      {
        id: 'm3-a4',
        moduleId: 'modulo-3',
        number: 4,
        title: 'Segunda Leitura',
        subtitle: 'As Cartas Apostólicas e a Vida das Primeiras Comunidades',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'Nos domingos e solenidades, proclama-se a Segunda Leitura, retirada das cartas de São Paulo, dos demais apóstolos ou do Apocalipse.',
        whatHappens: 'Um segundo leitor proclama a exortação apostólica que ensina a aplicar a fé no cotidiano familiar e social.',
        liturgicalMeaning: 'Conecta os fiéis às orientações pastorais dos Apóstolos sobre fé, moral e vida fraterna.',
        biblicalFoundation: {
          reference: '2 Tessalonicenses 2, 15',
          textExcerpt: 'Permanecei firmes e conservai as tradições que aprendestes, quer por palavra, quer por epístola nossa.',
          explanation: 'O Magistério apostólico registrado nas Escrituras guia a Igreja até a volta gloriosa do Senhor.'
        },
        churchTeaching: {
          source: 'Constituição Sacrosanctum Concilium',
          paragraphs: 'n. 51',
          text: 'Para apresentar aos fiéis com maior riqueza a mesa da Palavra de Deus, abram-se mais largamente os tesouros bíblicos.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'As Cartas dos Apóstolos',
            description: 'Testemunham as lutas, alegrias e o vigor missionário da Igreja nascente.',
            icon: 'Mail'
          }
        ],
        practicalImportance: 'Oferece conselhos concretos para os relacionamentos, casamento, trabalho e perseverança na santidade.',
        reflectionQuestion: 'Você já percebeu o quanto os conselhos de São Paulo continuam atuais para o mundo de hoje?'
      },
      {
        id: 'm3-a5',
        moduleId: 'modulo-3',
        number: 5,
        title: 'Aclamação ao Evangelho (Aleluia)',
        subtitle: 'A Assembleia se Levanta para Receber o Senhor',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'O Aleluia é a solene aclamação com que o povo de Deus saúda a presença de Cristo que vai falar no Santo Evangelho.',
        whatHappens: 'Todos se põem de pé. Canta-se o Aleluia (substituído por versículo de aclamação na Quaresma) enquanto o Evangeliário é levado em procissão com velas e incenso.',
        liturgicalMeaning: 'O termo hebraico Hallelu-Yah significa "Louvai ao Senhor". A assembleia demonstra reverência e prontidão para ouvir o Mestre.',
        biblicalFoundation: {
          reference: 'Apocalipse 19, 1-6',
          textExcerpt: 'Aleluia! A salvação, a glória e o poder pertencem ao nosso Deus!',
          explanation: 'O canto de triunfo dos bem-aventurados no céu é antecipado na terra pelos fiéis.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 62 - 64',
          text: 'Pela aclamação, a assembleia dos fiéis acolhe e saúda o Senhor que lhes vai falar no Evangelho.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Ficar em Pé',
            description: 'Atitude de prontidão, respeito e reverência diante de Cristo.',
            icon: 'Activity'
          },
          {
            title: 'As Velas e o Incenso junto ao Evangeliário',
            description: 'Honram a Cristo presente na proclamação da Boa-Nova.',
            icon: 'Flame'
          }
        ],
        practicalImportance: 'Desperta a atenção espiritual: o próprio Senhor Jesus vai falar diretamente conosco.',
        reflectionQuestion: 'O seu coração se alegra ao escutar o canto festivo do Aleluia?'
      },
      {
        id: 'm3-a6',
        moduleId: 'modulo-3',
        number: 6,
        title: 'Proclamação do Santo Evangelho',
        subtitle: 'O Ponto Culminante da Liturgia da Palavra',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'A proclamação do Evangelho constitui o ápice da Liturgia da Palavra. Por isso, a tradição litúrgica cerca este momento de distinção e máxima veneração.',
        whatHappens: 'Apenas o diácono ou o sacerdote proclama o Evangelho. Ele saúda a assembleia, anuncia o livro evangélico, traça o sinal da cruz no livro, na fronte, na boca e no peito (gesto imitado por todos os fiéis), e incensa o livro antes de proclamar o texto sagrado.',
        liturgicalMeaning: 'É a voz de Cristo ressuscitado ecoando na Igreja. Os três sinais da cruz significam o desejo de que o Evangelho purifique nossa mente, esteja em nossos lábios para ser anunciado e habite em nosso coração.',
        biblicalFoundation: {
          reference: 'Hebreus 4, 12',
          textExcerpt: 'A palavra de Deus é viva, eficaz, mais penetrante do que uma espada de dois gumes.',
          explanation: 'A Palavra de Cristo penetra a alma e descobre os pensamentos mais íntimos.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 60',
          text: 'A leitura do Evangelho constitui o ponto culminante da Liturgia da Palavra. A própria Liturgia ensina que se lhe deve tributar a máxima veneração.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Sinal da Cruz na Testa, Lábios e Peito',
            description: 'Oração gestual: "Que o Evangelho esteja em minha mente, em meus lábios e em meu coração".',
            icon: 'Cross'
          },
          {
            title: 'O Beijo no Livro dos Evangelhos',
            description: 'O ministro beija o texto rezando em silêncio: "Pelas palavras do Santo Evangelho sejam perdoados os nossos pecados".',
            icon: 'Book'
          }
        ],
        practicalImportance: 'Ouvir o Evangelho na Missa é um encontro pessoal com o próprio Cristo, que nos aponta o caminho da salvação.',
        reflectionQuestion: 'Você já rezou mentalmente a frase "Senhor, esteja em minha mente, em minha boca e em meu coração" ao traçar as três cruzes?'
      },
      {
        id: 'm3-a7',
        moduleId: 'modulo-3',
        number: 7,
        title: 'Homilia',
        subtitle: 'A Atualização da Palavra e a Nutrição da Fé',
        durationMinutes: 7,
        isFullyDeveloped: false,
        intro: 'A homilia é parte necessária da liturgia dominical e não pode ser omitida a não ser por motivo gravíssimo.',
        whatHappens: 'O bispo, sacerdote ou diácono explica as leituras proclamadas, orientando a assembleia a aplicar a mensagem divina à vida cotidiana.',
        liturgicalMeaning: 'Atualiza o mistério da salvação anunciado nas Escrituras para as lutas e desafios concretos dos fiéis de hoje.',
        biblicalFoundation: {
          reference: 'Neemias 8, 8',
          textExcerpt: 'Eles liam no livro da Lei de Deus com clareza, explicando o sentido, de modo que se pudesse compreender o que era lido.',
          explanation: 'Esdras explicava a Escritura ao povo comovido, prefigurando o ministério da homilia litúrgica.'
        },
        churchTeaching: {
          source: 'Papa Francisco, Evangelii Gaudium',
          paragraphs: 'n. 135 - 144',
          text: 'A homilia é o regresso àquele diálogo já aberto entre o Senhor e o seu povo.',
          documentUrl: 'https://www.vatican.va/content/francesco/pt/apost_exhortations/documents/papa-francesco_esortazione-ap_20131124_evangelii-gaudium.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Silêncio posterior à Homilia',
            description: 'Permite que a semente da Palavra caia em terra boa e produza fruto espiritual.',
            icon: 'Volume2'
          }
        ],
        practicalImportance: 'Mesmo quando a homilia parecer simples, o Espírito Santo sempre tem uma palavra específica para a sua alma.',
        reflectionQuestion: 'Você procura identificar qual ponto da homilia o Espírito Santo usou para tocar a sua vida?'
      },
      {
        id: 'm3-a8',
        moduleId: 'modulo-3',
        number: 8,
        title: 'Profissão de Fé (Credo)',
        subtitle: 'A Resposta da Fé da Assembleia à Palavra Proclamada',
        durationMinutes: 7,
        isFullyDeveloped: false,
        intro: 'O Símbolo ou Profissão de Fé destina-se a que o povo dê o seu assentimento e responda à palavra de Deus ouvida.',
        whatHappens: 'Todos de pé recitam juntos o Credo Niceno-Constantinopolitano ou o Símbolo dos Apóstolos.',
        liturgicalMeaning: 'Expressa a comunhão católica com a fé professada pela Igreja universal em todos os tempos.',
        biblicalFoundation: {
          reference: 'Romanos 10, 9-10',
          textExcerpt: 'Se com a tua boca confessares que Jesus é o Senhor e com o teu coração creres que Deus o ressuscitou dos mortos, serás salvo.',
          explanation: 'A fé no coração e a confissão pública com os lábios unem-se na salvação eterna.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§185 - §197',
          text: 'Quem diz "Eu creio" diz "Eu dou adesão àquilo em que nós cremos".',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p1s1c3_142-184_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Inclinação profunda na Encarnação',
            description: 'Inclina-se profundamente às palavras "E se encarnou pelo Espírito Santo no seio da Virgem Maria e se fez homem".',
            icon: 'UserCheck'
          }
        ],
        practicalImportance: 'Protege a nossa mente das falsas ideologias e renova as promessas do nosso Batismo.',
        reflectionQuestion: 'Você se lembra de fazer uma reverência durante as palavras que recordam a Encarnação do Verbo?'
      },
      {
        id: 'm3-a9',
        moduleId: 'modulo-3',
        number: 9,
        title: 'Oração dos Fiéis (Oração Universal)',
        subtitle: 'A Assembleia Sacerdotal Intercede pelo Mundo',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'Pela Oração dos Fiéis, o povo, exercendo o seu múnus sacerdotal batismal, roga por todos os homens.',
        whatHappens: 'Apresentam-se intenções pelas necessidades da Santa Igreja, pelos governantes, pelos que sofrem e pela comunidade local.',
        liturgicalMeaning: 'Manifesta a caridade católica universal: a Igreja não reza apenas por si mesma, mas por toda a humanidade.',
        biblicalFoundation: {
          reference: '1 Timóteo 2, 1-2',
          textExcerpt: 'Recomendo que se façam súplicas por todos os homens, pelos reis e por todos os que estão investidos de autoridade.',
          explanation: 'O sacerdócio batismal intercede constantemente pelo bem do mundo perante Deus.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 69 - 71',
          text: 'Na oração universal ou oração dos fiéis, o povo responde de certo modo à palavra de Deus acolhida na fé e, exercendo a função do seu sacerdócio batismal, apresenta preces a Deus pela salvação de todos.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Aclamação "Senhor, escutai a nossa prece"',
            description: 'A resposta unânime da comunidade assumindo a súplica apresentada.',
            icon: 'Users'
          }
        ],
        practicalImportance: 'Amplia o nosso coração para além das nossas preocupações pessoais, tornando-nos solidários com as dores dos irmãos.',
        reflectionQuestion: 'Você costuma unir às preces da comunidade a lembrança dos que sofrem em hospitais, guerras e perseguições?'
      }
    ]
  },
  {
    id: 'modulo-4',
    number: 4,
    title: 'Liturgia Eucarística',
    subtitle: 'O Coração e o Cume da Celebração',
    description: 'Do ofertório à Oração Eucarística e ao grande Amém: onde os dons do pão e do vinho se tornam o Corpo e o Sangue de Cristo pelo poder do Espírito Santo.',
    iconName: 'Flame',
    image: consecrationChaliceHostImage,
    lessons: [
      {
        id: 'm4-a1',
        moduleId: 'modulo-4',
        number: 1,
        title: 'Preparação das Oferendas',
        subtitle: 'A Apresentação dos Frutos da Terra e do Trabalho Humano',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'No início da Liturgia Eucarística, levam-se ao altar os dons que se converterão no Corpo e no Sangue de Cristo.',
        whatHappens: 'Os fiéis sentam-se. Prepara-se o altar estendendo o corporal, o purificador, o cálice e o missal. Podem trazer-se as oferendas de pão e vinho em procissão, acompanhadas pela coleta para as necessidades da Igreja e dos pobres.',
        liturgicalMeaning: 'O pão e o vinho representam a criação inteira e a vida humana com todos os seus suores e labutas entregues nas mãos do Criador.',
        biblicalFoundation: {
          reference: 'Gênesis 14, 18',
          textExcerpt: 'Melquisedec, rei de Salém e sacerdote do Deus Altíssimo, trouxe pão e vinho.',
          explanation: 'O sacrifício incruento de Melquisedec é figura precursora do sacerdócio de Cristo e da Eucaristia.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1350',
          text: 'A apresentação das oferendas no altar assume o gesto de Melquisedec e coloca os dons do Criador nas mãos de Cristo.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Corporal',
            description: 'Pano de linho sobre o qual são colocados a patena e o cálice, recordando a mortalha em que o Corpo de Jesus foi envolvido no sepulcro.',
            icon: 'Layers'
          },
          {
            title: 'As Galhetas',
            description: 'Pequenos recipientes de vidro ou metal que contêm a água e o vinho para o sacrifício.',
            icon: 'GlassWater'
          }
        ],
        practicalImportance: 'No ofertório, entregue a Deus a sua família, o seu trabalho e as suas canseiras para serem consagrados junto com o pão.',
        reflectionQuestion: 'O que você costuma colocar espiritualmente na patena do sacerdote durante a procissão das oferendas?'
      },
      {
        id: 'm4-a2',
        moduleId: 'modulo-4',
        number: 2,
        title: 'Apresentação do Pão e do Vinho e a gota de água',
        subtitle: 'A Divindade que Assume a Nossa Humanidade',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'O sacerdote oferece a Deus o pão e o vinho pronunciando orações de bênção inspiradas nas antigas orações judaicas.',
        whatHappens: 'O sacerdote eleva ligeiramente a patena com o pão e reza em voz baixa (ou alta, se não houver canto). Ao preparar o cálice, o diácono ou sacerdote deita uma gota de água no vinho rezando em segredo.',
        liturgicalMeaning: 'A gota de água misturada ao vinho simboliza a nossa pobre humanidade assumida pela divindade infinita de Cristo. Representa também a água e o sangue que brotaram do lado aberto de Jesus na Cruz.',
        biblicalFoundation: {
          reference: 'João 19, 34',
          textExcerpt: 'Um dos soldados transpassou-lhe o lado com a lança e imediatamente saiu sangue e água.',
          explanation: 'Dos sacramentos que brotam do lado de Cristo nasce a Igreja, a nova Eva.'
        },
        churchTeaching: {
          source: 'Concílio de Trento, Sessão XXII',
          paragraphs: 'Capítulo VII',
          text: 'A Igreja prescreveu aos sacerdotes que misturem água ao vinho no cálice que se há de oferecer, pois o sangue e a água manaram do lado de Cristo.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm'
        },
        gesturesAndSymbols: [
          {
            title: 'A Gota de Água no Vinho',
            description: 'Assim como a gota se dissolve inteiramente no vinho, que a nossa vida seja absorvida pela divindade de Cristo.',
            icon: 'Droplet'
          },
          {
            title: 'O Lavatório das Mãos (Lavabo)',
            description: 'O sacerdote lava as mãos rezando: "Lavai-me, Senhor, das minhas faltas e purificai-me do meu pecado".',
            icon: 'Sparkles'
          }
        ],
        practicalImportance: 'Recorda-nos que mesmo sendo pequenos e frágeis como uma simples gota, temos lugar garantido no coração de Deus.',
        reflectionQuestion: 'Você já pensou que na Missa a sua vida se une de modo inseparável à divindade de Jesus Cristo?'
      },
      {
        id: 'm4-a3',
        moduleId: 'modulo-4',
        number: 3,
        title: 'Oração sobre as Oferendas',
        subtitle: 'A Transição Solene para a Oração Eucarística',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'Concluído o ofertório, o sacerdote convida a assembleia a rezar para que o sacrifício seja aceito por Deus.',
        whatHappens: 'O sacerdote diz: "Orai, irmãos e irmãs...". O povo responde: "Receba o Senhor por tuas mãos este sacrifício...". Segue-se a oração própria do dia.',
        liturgicalMeaning: 'Expressa a união da oferenda da Igreja com o sacrifício que está prestes a realizar-se sacramentalmente.',
        biblicalFoundation: {
          reference: 'Salmo 50 (51), 19',
          textExcerpt: 'O sacrifício agradável a Deus é um espírito contrito; um coração arrependido e humilhado não haveis de desprezar.',
          explanation: 'As ofertas materiais só têm valor diante de Deus quando acompanhadas pela conversão interior.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 77',
          text: 'Pela oração sobre as oferendas conclui-se a preparação dos dons e prepara-se a Oração Eucarística.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Resposta Assemblear',
            description: 'Reconhece o ministério ordenado do sacerdote atuando em benefício de toda a Santa Igreja.',
            icon: 'MessageSquare'
          }
        ],
        practicalImportance: 'Reafirma que o sacrifício é oferecido para honra e glória de Deus e para o bem espiritual de toda a humanidade.',
        reflectionQuestion: 'Você responde com fervor e atenção às palavras "Receba o Senhor por tuas mãos este sacrifício"?'
      },
      {
        id: 'm4-a4',
        moduleId: 'modulo-4',
        number: 4,
        title: 'A Oração Eucarística: Visão Geral',
        subtitle: 'O Centro, o Coração e o Cume de Toda a Missa',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'Inicia-se agora o momento culminante da Missa: a Oração Eucarística, prece de ação de graças e consagração.',
        whatHappens: 'Toda a assembleia permanece atenta e reverente. O sacerdote pronuncia a grande prece que culminará na consagração das espécies.',
        liturgicalMeaning: 'É a ação em que a Igreja, unida a Cristo e cheia do Espírito Santo, glorifica o Pai e renova o Sacrifício pascal.',
        biblicalFoundation: {
          reference: '1 Coríntios 10, 16',
          textExcerpt: 'O cálice de bênção que abençoamos não é a comunhão do sangue de Cristo? E o pão que partimos não é a comunhão do corpo de Cristo?',
          explanation: 'São Paulo destaca o mistério da comunhão íntima com a vida divina através do sacramento.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 78',
          text: 'Inicia-se agora o ponto culminante de toda a celebração: a Oração Eucarística, que é uma oração de ação de graças e de santificação.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'As Várias Orações Eucarísticas',
            description: 'O Missal Romano contém várias orações aprovadas (Oração Eucarística I ou Cânon Romano, II, III, IV, etc.), ricas em teologia.',
            icon: 'BookOpen'
          }
        ],
        practicalImportance: 'Manter a concentração e reverência máxima durante toda a Oração Eucarística, evitando distrações ou ruídos.',
        reflectionQuestion: 'Você tem consciência de que durante esta oração o Céu desce à terra sobre o altar?'
      },
      {
        id: 'm4-a5',
        moduleId: 'modulo-4',
        number: 5,
        title: 'O Prefácio e o Diálogo Inicial',
        subtitle: 'Corações ao Alto: Ação de Graças ao Pai',
        durationMinutes: 7,
        isFullyDeveloped: false,
        intro: 'O Prefácio abre a Oração Eucarística com um solene diálogo entre o sacerdote e a assembleia.',
        whatHappens: 'Sacerdote: "O Senhor esteja convosco... Corações ao alto... Demos graças ao Senhor nosso Deus". O povo responde e o sacerdote canta o louvor das grandezas de Deus.',
        liturgicalMeaning: 'Convite a desapegar o coração das preocupações terrenas e elevá-lo às realidades celestes.',
        biblicalFoundation: {
          reference: 'Colossenses 3, 1-2',
          textExcerpt: 'Se ressuscitastes com Cristo, buscai as coisas do alto, onde Cristo está sentado à direita de Deus.',
          explanation: 'A oração cristã é sempre orientada para a eternidade e para a glória de Deus.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 79a',
          text: 'Na ação de graças (que se manifesta sobretudo no Prefácio), o sacerdote, em nome de todo o povo santo, glorifica a Deus Pai e dá-lhe graças por toda a obra da salvação.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Mãos Levantadas',
            description: 'Simbolizam o coração elevado a Deus em confiança filial.',
            icon: 'ArrowUp'
          }
        ],
        practicalImportance: 'Quando o padre diz "Corações ao alto", esforce-se por esquecer o celular, o relógio e os problemas do mundo.',
        reflectionQuestion: 'O seu coração sobe verdadeiramente a Deus quando você responde "O nosso coração está em Deus"?'
      },
      {
        id: 'm4-a6',
        moduleId: 'modulo-4',
        number: 6,
        title: 'O Santo (Sanctus)',
        subtitle: 'Unidos aos Coros Angélicos na Glória Eterna',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'O Santo conclui o Prefácio com a mais bela aclamação de louvor cantada pelos anjos e santos no Céu.',
        whatHappens: 'Toda a assembleia une suas vozes aos anjos e proclama: "Santo, Santo, Santo, Senhor Deus do Universo!... Bendito o que vem em nome do Senhor!".',
        liturgicalMeaning: 'Expressa a santidade três vezes infinita de Deus e acolhe o Messias que entra na Jerusalém da Eucaristia.',
        biblicalFoundation: {
          reference: 'Isaías 6, 3; Mateus 21, 9',
          textExcerpt: 'E clamavam uns para os outros: "Santo, santo, santo é o Senhor dos exércitos; toda a terra está cheia da sua glória!"',
          explanation: 'A visão do profeta Isaías no templo de Jerusalém e a aclamação no Domingo de Ramos unem-se na Missa.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§559, §1090',
          text: 'Na liturgia terrena participamos, saboreando-a já, da liturgia celeste celebrada na cidade santa de Jerusalém.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s1cap2_1135-1209_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Sino Litúrgico',
            description: 'Toca para advertir os fiéis da solenidade do mistério que se aproxima.',
            icon: 'Bell'
          }
        ],
        practicalImportance: 'Lembra-nos de que a cada Missa temos a companhia de miríades de anjos e de todos os santos ao redor do altar.',
        reflectionQuestion: 'Você canta o Santo com o entusiasmo de quem sabe estar unido aos anjos do Céu?'
      },
      {
        id: 'm4-a7',
        moduleId: 'modulo-4',
        number: 7,
        title: 'A Epiclese (Invocação do Espírito Santo)',
        subtitle: 'O Fogo Divino que Transforma as Oferendas',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'A Epiclese é a súplica explícita na qual a Igreja implora ao Pai que envie o Espírito Santo sobre o pão e o vinho.',
        whatHappens: 'Os fiéis se ajoelham (quando possível). O sacerdote estende as mãos sobre as oferendas, impondo-as e traçando o sinal da cruz.',
        liturgicalMeaning: 'Assim como o Espírito Santo desceu sobre a Virgem Maria na Encarnação, Ele desce agora sobre os dons do altar para transformá-los no Corpo e Sangue de Cristo.',
        biblicalFoundation: {
          reference: 'Lucas 1, 35',
          textExcerpt: 'O Espírito Santo virá sobre ti e o poder do Altíssimo te cobrirá com a sua sombra.',
          explanation: 'O mesmo Espírito da Encarnação opera no mistério eucarístico.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1105, §1353',
          text: 'A Epiclese é a oração pela qual o sacerdote suplica ao Pai que envie o Espírito santificador para que as oferendas se tornem o Corpo e Sangue de Cristo.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s1cap1_1076-1134_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Imposição das Mãos',
            description: 'Gesto sacerdotal bíblico de transmissão da santidade e consagração ao Senhor.',
            icon: 'Hand'
          },
          {
            title: 'O Ajoelhar-se',
            description: 'Gesto de máxima adoração e humildade diante da majestade divina que se manifesta.',
            icon: 'UserMinus'
          }
        ],
        practicalImportance: 'Ajoelhar-se na consagração é uma confissão pública com o próprio corpo de que cremos na divindade de Jesus.',
        reflectionQuestion: 'Você dobra os joelhos com amor e devoção profunda diante da ação do Espírito Santo?'
      },
      {
        id: 'm4-a8',
        moduleId: 'modulo-4',
        number: 8,
        title: 'Narrativa da Instituição e Consagração',
        subtitle: 'Isto é o Meu Corpo, Isto é o Cálice do Meu Sangue',
        durationMinutes: 9,
        isFullyDeveloped: true,
        intro: 'Chegamos ao instante mais sagrado de toda a Missa: a Consagração, na qual opera-se o milagre da Transubstanciação.',
        whatHappens: 'O sacerdote pronuncia as palavras exatas de Cristo sobre o pão e sobre o cálice, ajoelha-se em genuflexão de adoração e eleva solenemente a Hóstia e o Cálice para a veneração de todos.',
        liturgicalMeaning: 'Pelas palavras da consagração proferidas pelo sacerdote in persona Christi e pelo poder do Espírito Santo, toda a substância do pão se converte no Corpo de Cristo e toda a substância do vinho no Seu Sangue.',
        biblicalFoundation: {
          reference: '1 Coríntios 11, 24-25',
          textExcerpt: 'Isto é o meu corpo, que é para vós... Este cálice é a Nova Aliança em meu sangue.',
          explanation: 'As palavras eficazes do Senhor realizam aquilo que significam.'
        },
        churchTeaching: {
          source: 'Concílio de Trento / Encíclica Mysterium Fidei (São Paulo VI)',
          paragraphs: 'n. 46 - 47',
          text: 'A admirável e singular conversão de toda a substância do pão no Corpo de Cristo e de toda a substância do vinho no Sangue de Cristo é mui acertadamente chamada pela Igreja de Transubstanciação.',
          documentUrl: 'https://www.vatican.va/content/paul-vi/pt/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Elevação da Hóstia e do Cálice',
            description: 'Permite que os fiéis contemplem com fé e amem o Senhor presente sobre o altar.',
            icon: 'Disc'
          },
          {
            title: 'A Oração Mental: "Meu Senhor e meu Deus"',
            description: 'Tradição piedosa inspirada no apóstolo São Tomé (Jo 20, 28) ao fitar a Hóstia elevada.',
            icon: 'Heart'
          }
        ],
        practicalImportance: 'Neste instante todo o ruído do mundo deve cessar: estamos diante do Deus vivo encarnado e crucificado por nós.',
        reflectionQuestion: 'Você costuma fixar os olhos com adoração e fé na Hóstia e no Cálice no momento da elevação?'
      },
      {
        id: 'm4-a9',
        moduleId: 'modulo-4',
        number: 9,
        title: 'A Anamnese (Eis o mistério da fé)',
        subtitle: 'Anunciamos, Senhor, a Vossa Morte, Proclamamos a Vossa Ressurreição',
        durationMinutes: 7,
        isFullyDeveloped: false,
        intro: 'Imediatamente após a consagração, o sacerdote exclama: "Eis o mistério da fé!" ou "Mistério da fé e do amor!".',
        whatHappens: 'A assembleia responde com uma das aclamações memoriais proclamando a Morte, Ressurreição e a Espera da vinda do Senhor.',
        liturgicalMeaning: 'A Igreja cumpre o preceito do Senhor realizando o memorial de Sua paixão redentora, da ressurreição dos mortos e ascensão aos céus.',
        biblicalFoundation: {
          reference: '1 Coríntios 11, 26',
          textExcerpt: 'Todas as vezes que comeis deste pão e bebeis deste cálice, anunciais a morte do Senhor, até que ele venha.',
          explanation: 'A Eucaristia olha para o passado (a Cruz), vive o presente (a Graça) e antecipa o futuro (a Parusia).'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1354',
          text: 'Na Anamnese, que se segue, a Igreja faz memória da paixão, da ressurreição e do retorno glorioso de Jesus Cristo.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Aclamação Memorial',
            description: 'Profissão viva de esperança escatológica da Igreja que aguarda o retorno triunfal de Cristo.',
            icon: 'Sparkles'
          }
        ],
        practicalImportance: 'Dá sentido às nossas tribulações presentes, lembrando que a vitória definitiva pertence a Cristo.',
        reflectionQuestion: 'Você anseia no coração pela vinda gloriosa de Jesus no fim dos tempos?'
      },
      {
        id: 'm4-a10',
        moduleId: 'modulo-4',
        number: 10,
        title: 'A Oblação',
        subtitle: 'A Igreja Oferece a Vítima Pura e Imaculada ao Pai',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'Na oblação, a Igreja reunida oferece ao Pai a Vítima imaculada e aprende a oferecer-se a si mesma.',
        whatHappens: 'O sacerdote reza pedindo que os fiéis não apenas ofereçam a hóstia imaculada, mas aprendam a oferecer a sua própria vida.',
        liturgicalMeaning: 'O sacrifício dos membros do Corpo Místico une-se indissoluvelmente ao sacrifício de sua Cabeça, Cristo Jesus.',
        biblicalFoundation: {
          reference: 'Romanos 12, 1',
          textExcerpt: 'Exorto-vos, pois, irmãos... a que ofereçais vossos corpos como sacrifício vivo, santo e agradável a Deus.',
          explanation: 'O culto espiritual autêntico exige a entrega da própria existência a Deus.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 79f',
          text: 'Pela oblação, a Igreja, de modo especial a aqui e agora reunida, oferece ao Pai no Espírito Santo a hóstia imaculada.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Oferenda Perfeita',
            description: 'Já não são animais imperfeitos, mas o Filho unigênito oferecido em holocausto de amor.',
            icon: 'Award'
          }
        ],
        practicalImportance: 'Ensina-nos a não reter nada com egoísmo: dar tudo a Deus porque d\'Ele tudo recebemos.',
        reflectionQuestion: 'Você já se ofereceu inteiramente a Deus durante a oblação eucarística?'
      },
      {
        id: 'm4-a11',
        moduleId: 'modulo-4',
        number: 11,
        title: 'As Intercessões da Oração Eucarística',
        subtitle: 'A Comunhão com a Igreja Triunfante, Padecente e Militante',
        durationMinutes: 7,
        isFullyDeveloped: false,
        intro: 'A Eucaristia celebra-se em comunhão com toda a Igreja do Céu, da terra e do purgatório.',
        whatHappens: 'O sacerdote recorda nominalmente o Papa, o Bispo diocesano, o clero, os fiéis vivos, a Virgem Maria, os apóstolos e mártires, e os fiéis defuntos.',
        liturgicalMeaning: 'Nenhum membro do Corpo de Cristo fica esquecido diante do altar. Os que partiram descansam na paz de Cristo e esperam a glória.',
        biblicalFoundation: {
          reference: '2 Macabeus 12, 46',
          textExcerpt: 'É, pois, um santo e salutar pensamento orar pelos mortos, para que sejam livres dos seus pecados.',
          explanation: 'A Tradição bíblica atesta a eficácia salvífica da oração em sufrágio das almas do purgatório.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1369 - §1371',
          text: 'A Igreja intercede pelos ministros sagrados e por todos os fiéis defuntos, para que alcancem a plenitude da luz divina.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Nome do Papa e do Bispo',
            description: 'Sinal essencial da visível unidade e apostolicidade da Igreja Católica no mundo.',
            icon: 'Globe'
          }
        ],
        practicalImportance: 'Saber que cada Missa alivia as almas dos nossos entes queridos falecidos deve mover-nos a mandar celebrar e participar com fervor.',
        reflectionQuestion: 'Você se lembra de rezar pelos seus falecidos e pelas almas do purgatório durante a Missa?'
      },
      {
        id: 'm4-a12',
        moduleId: 'modulo-4',
        number: 12,
        title: 'Doxologia Final e o Grande Amém',
        subtitle: 'Por Cristo, com Cristo e em Cristo: A Glória Plena da Trindade',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'A Oração Eucarística termina com a mais sublime proclamação de glória da liturgia católica.',
        whatHappens: 'O sacerdote toma a patena com a Hóstia consagrada e o cálice com o Sangue do Senhor, eleva ambos simultaneamente com os braços erguidos e canta ou diz: "Por Cristo, com Cristo e em Cristo...". Toda a assembleia responde com o "Grande Amém".',
        liturgicalMeaning: 'Toda a oração da Igreja sobe ao Pai por meio de Jesus Cristo, na unidade do Espírito Santo. O "Amém" do povo é a sua solene ratificação e assinatura de tudo o que foi celebrado.',
        biblicalFoundation: {
          reference: 'Romanos 11, 36',
          textExcerpt: 'Porque dele, por ele e para ele são todas as coisas; a ele a glória pelos séculos. Amém.',
          explanation: 'A doxologia paulina é a base bíblica da fórmula litúrgica da Santa Missa.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 79h',
          text: 'A doxologia final exprime a glorificação de Deus, que é confirmada e concluída pela aclamação do povo: Amém.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Dupla Elevação (Corpo e Sangue)',
            description: 'Sinal de oferenda suprema ao Pai eterno da Vítima agradável aos Seus olhos.',
            icon: 'ChevronsUp'
          },
          {
            title: 'O Grande Amém',
            description: 'São Jerônimo escrevia que nas basílicas romanas antigas o Amém do povo troava como um trovão celeste.',
            icon: 'Volume2'
          }
        ],
        practicalImportance: 'Cante ou proclame o Amém com vigor e entusiasmo: você está chancelando a salvação do mundo!',
        reflectionQuestion: 'O seu "Amém" na doxologia é dito com toda a força da sua fé católica?'
      }
    ]
  },
  {
    id: 'modulo-5',
    number: 5,
    title: 'Rito da Comunhão',
    subtitle: 'A Participação no Banquete Pascal do Cordeiro',
    description: 'Do Pai-Nosso à comunhão sacramental e à ação de graças: onde recebemos o próprio Cristo como pão da vida e garantia da imortalidade futura.',
    iconName: 'Heart',
    image: consecrationChaliceHostImage,
    lessons: [
      {
        id: 'm5-a1',
        moduleId: 'modulo-5',
        number: 1,
        title: 'A Oração do Senhor (Pai-Nosso)',
        subtitle: 'A Oração dos Filhos no Filho e o Pão Nosso de Cada Dia',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'Como preparação imediata para a Comunhão, a Igreja reza a oração que o próprio Jesus nos ensinou.',
        whatHappens: 'Todos de pé rezam ou cantam em uníssono o Pai-Nosso. O sacerdote prolonga a prece no embolismo ("Livrai-nos de todos os males...").',
        liturgicalMeaning: 'Pedimos o "pão de cada dia", que para os Padres da Igreja é em primeiro lugar o Pão Eucarístico, e suplicamos o perdão recíproco antes de receber o Sacramento da Caridade.',
        biblicalFoundation: {
          reference: 'Mateus 6, 9-13',
          textExcerpt: 'O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos...',
          explanation: 'Jesus entrega a oração perfeita que resume todo o Evangelho.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§2837',
          text: 'O pão cotidiano refere-se de maneira inseparável ao Pão da Vida, sem o qual não temos a vida eterna em nós.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p4s2_2759-2865_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Postura de Oração',
            description: 'Braços abertos do sacerdote e assembleia em atitude filial de confiança plena no Pai celeste.',
            icon: 'Users'
          }
        ],
        practicalImportance: 'Não podemos comungar o Corpo de Cristo guardando ressentimento ou ódio no coração contra o irmão.',
        reflectionQuestion: 'Você perdoa de coração a quem o ofendeu antes de se aproximar da Sagrada Comunhão?'
      },
      {
        id: 'm5-a2',
        moduleId: 'modulo-5',
        number: 2,
        title: 'O Rito da Paz',
        subtitle: 'A Paz que o Mundo Não Pode Dar',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'A Igreja implora a paz e a unidade para si mesma e para toda a família humana antes de receber a Eucaristia.',
        whatHappens: 'O sacerdote recorda a promessa de Jesus ("Deixo-vos a paz, a minha paz vos dou") e, se oportuno, convida à saudação da paz.',
        liturgicalMeaning: 'Não é um momento de dispersão festiva, mas um gesto sóbrio de reconciliação e desejo da paz de Cristo aos mais próximos.',
        biblicalFoundation: {
          reference: 'João 14, 27',
          textExcerpt: 'Deixo-vos a paz, dou-vos a minha paz; não vo-la dou como o mundo a dá.',
          explanation: 'A paz de Cristo é a reconciliação interior profunda com Deus e com o próximo.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 82',
          text: 'Segue-se o rito da paz, pelo qual a Igreja implora a paz e a unidade para si e para toda a família humana, e os fiéis exprimem entre si a comunhão eclesial e a mútua caridade.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Sobriedade no Abraço ou Aperto de Mão',
            description: 'Deve ser dado com compostura apenas a quem está mais próximo, preservando o clima de oração.',
            icon: 'HeartHandshake'
          }
        ],
        practicalImportance: 'Nos compromete a sermos pacificadores e pontes de perdão em nossas casas e locais de trabalho.',
        reflectionQuestion: 'Você transmite a paz da Missa lembrando da serenidade que Cristo depositou na sua alma?'
      },
      {
        id: 'm5-a3',
        moduleId: 'modulo-5',
        number: 3,
        title: 'A Fração do Pão e a Comistão',
        subtitle: 'O Partir do Pão e a Queda da Partícula no Cálice',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'O gesto da fração do pão realizado por Cristo na Última Ceia deu o primeiro nome à celebração nos tempos apostólicos.',
        whatHappens: 'O sacerdote parte a Hóstia consagrada sobre a patena. Em seguida, parte uma pequena partícula e deixa-a cair dentro do cálice dizendo em segredo: "Esta união do Corpo e do Sangue de Nosso Senhor Jesus Cristo...".',
        liturgicalMeaning: 'A fração mostra que muitos fiéis se tornam um só corpo comungando do mesmo pão partido (1 Cor 10, 17). A comistão (reunião da partícula com o vinho consagrado) simboliza a Ressurreição: o Corpo e o Sangue de Cristo reúnem-se na glória viva do Ressuscitado.',
        biblicalFoundation: {
          reference: 'Lucas 24, 30-31',
          textExcerpt: 'Estando à mesa com eles, tomou o pão, abençoou-o, partiu-o e entregou-lho. Abriram-se-lhes então os olhos e reconheceram-no.',
          explanation: 'Os discípulos de Emaús reconheceram o Senhor ressuscitado no partir do pão.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 83',
          text: 'O sacerdote parte o pão eucarístico e deita uma partícula no cálice, para significar a unidade do Corpo e do Sangue do Senhor na obra da salvação, isto é, do Corpo de Cristo Jesus vivo e glorioso.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Partir da Hóstia',
            description: 'Evoca o Corpo dilacerado de Cristo na paixão em benefício dos pecadores.',
            icon: 'Scissors'
          },
          {
            title: 'A Partícula no Cálice (Comistão)',
            description: 'Profissão sacramental da vitória da Ressurreição sobre a morte.',
            icon: 'Combine'
          }
        ],
        practicalImportance: 'Recorda-nos que Cristo que comungamos não é um cadáver, mas o Senhor vivo e glorioso que venceu a morte.',
        reflectionQuestion: 'Você repara neste gesto silencioso do sacerdote partindo a partícula e soltando-a no cálice?'
      },
      {
        id: 'm5-a4',
        moduleId: 'modulo-5',
        number: 4,
        title: 'Cordeiro de Deus (Agnus Dei)',
        subtitle: 'Eis o Cordeiro que Tira o Pecado do Mundo',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'Enquanto se realiza a fração do pão, os cantores e o povo suplicam ao Cordeiro de Deus.',
        whatHappens: 'Canta-se ou reza-se: "Cordeiro de Deus, que tirais o pecado do mundo, tende piedade de nós... dai-nos a paz".',
        liturgicalMeaning: 'Confessa a inocência e o valor infinito do sacrifício de Jesus que redime a humanidade culpada.',
        biblicalFoundation: {
          reference: 'João 1, 29',
          textExcerpt: 'No dia seguinte, João viu Jesus que vinha ao seu encontro e disse: "Eis o Cordeiro de Deus, que tira o pecado do mundo!"',
          explanation: 'O testemunho do Precursor no rio Jordão identifica Jesus com o servo sofredor de Isaías.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§608',
          text: 'Depois de ter aceito ser batizado entre os pecadores, João Batista viu e mostrou em Jesus o Cordeiro de Deus que tira o pecado do mundo.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p1s2cap2_484-682_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Tríplice Invocação',
            description: 'Reafirma a confiança inabalável na misericórdia e no dom supremo da paz de Cristo.',
            icon: 'ShieldAlert'
          }
        ],
        practicalImportance: 'Nos convida a reconhecer a pureza de Jesus que lava toda a mancha da nossa história pessoal.',
        reflectionQuestion: 'Você já agradeceu a Jesus por ter assumido a sua culpa na Cruz como Cordeiro manso?'
      },
      {
        id: 'm5-a5',
        moduleId: 'modulo-5',
        number: 5,
        title: 'Convite à Comunhão e Ato de Humildade',
        subtitle: 'Senhor, Eu Não Sou Digno de que Entreis em Minha Morada',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'O sacerdote apresenta a Hóstia consagrada à assembleia e convida para o Banquete do Cordeiro.',
        whatHappens: 'O sacerdote eleva a Hóstia sobre a patena ou cálice e diz: "Eis o Cordeiro de Deus... Felizes os convidados para a Ceia do Senhor". Todos respondem com a frase do centurião de Cafarnaum.',
        liturgicalMeaning: 'Expressa a alegria do banquete e a profunda indignidade humana diante do mistério: não comungamos porque merecemos, mas pela infinita misericórdia do Redentor.',
        biblicalFoundation: {
          reference: 'Mateus 8, 8',
          textExcerpt: 'O centurião respondeu: Senhor, eu não sou digno de que entreis em minha casa; dizei apenas uma palavra e o meu criado será curado.',
          explanation: 'A fé humilde do oficial romano é elogiada pelo próprio Jesus como modelo para todos os crentes.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 84',
          text: 'O sacerdote prepara-se por uma oração em silêncio para receber com fruto o Corpo e Sangue de Cristo; os fiéis fazem o mesmo orando em silêncio. Em seguida o sacerdote mostra aos fiéis o pão eucarístico e convida-os para o banquete de Cristo.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'As Palavras do Centurião',
            description: 'Ato de humildade universal da Igreja: "mas dizei uma palavra e serei salvo".',
            icon: 'Quote'
          }
        ],
        practicalImportance: 'Combate o orgulho e a auto-suficiência: a Comunhão é remédio divino para pecadores que querem ser santos.',
        reflectionQuestion: 'Você pronuncia essas palavras com a mesma sinceridade de alma do centurião do Evangelho?'
      },
      {
        id: 'm5-a6',
        moduleId: 'modulo-5',
        number: 6,
        title: 'Recepção da Sagrada Comunhão',
        subtitle: 'Condições, Disposições e o "Amém" de Fé',
        durationMinutes: 9,
        isFullyDeveloped: true,
        intro: 'A recepção da Eucaristia é o momento de máxima intimidade sacramental do fiel com o Senhor Jesus.',
        whatHappens: 'Os fiéis em estado de graça aproximam-se em procissão com reverência. O ministro apresenta a Hóstia dizendo "O Corpo de Cristo" e o fiel responde com voz clara "Amém", comungando imediatamente.',
        liturgicalMeaning: 'Quem comunga recebe o Cristo inteiro: Corpo, Sangue, Alma e Divindade. Transforma-se Naquele que recebe.',
        biblicalFoundation: {
          reference: '1 Coríntios 11, 27-29',
          textExcerpt: 'Aquele que comer o pão ou beber o cálice do Senhor indignamente será réu do corpo e do sangue do Senhor. Examine-se, pois, o homem a si mesmo.',
          explanation: 'São Paulo adverte com gravidade sobre a necessidade do estado de graça para a comunhão sacramental.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1385 - §1389',
          text: 'Quem tiver consciência de ter cometido um pecado mortal não deve comungar a Sagrada Comunhão sem ter antes recebido a absolvição sacramental no sacramento da Penitência.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Jejum Eucarístico',
            description: 'Abstenção de alimentos e bebidas (exceto água e remédios) por pelo menos uma hora antes da comunhão.',
            icon: 'Clock'
          },
          {
            title: 'A Genuflexão ou Inclinação Prévia',
            description: 'Gesto de adoração prestado antes de receber a Sagrada Partícula.',
            icon: 'Check'
          }
        ],
        practicalImportance: 'Se houver pecado grave na consciência, é dever de fidelidade confessar-se antes de comungar.',
        reflectionQuestion: 'Você cuida do estado de graça e guarda o jejum eucarístico de uma hora antes da Missa?'
      },
      {
        id: 'm5-a7',
        moduleId: 'modulo-5',
        number: 7,
        title: 'Silêncio e Oração após a Comunhão',
        subtitle: 'A Verdadeira Ação de Graças no Recôndito do Coração',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'Após a distribuição da Comunhão, guardam-se momentos de sagrado silêncio ou entoa-se um hino de ação de graças.',
        whatHappens: 'Os fiéis voltam aos seus lugares, ajoelham-se ou sentam-se e conversam intimamente com Jesus sacramentado em seus corações.',
        liturgicalMeaning: 'É o momento em que a alma é sacrário vivo. Jesus está física e substancialmente presente enquanto permanecem as espécies sacramentais.',
        biblicalFoundation: {
          reference: 'Gálatas 2, 20',
          textExcerpt: 'Eu vivo, mas já não sou eu que vivo; é Cristo que vive em mim.',
          explanation: 'A Eucaristia realiza a identificação espiritual mais profunda entre o cristão e seu Senhor.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 88',
          text: 'Terminada a distribuição da Comunhão, o sacerdote e os fiéis, se for oportuno, oram em silêncio durante algum tempo. Pode também toda a assembleia entoar um hino, um salmo ou outro cântico de louvor.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Sagrado Silêncio',
            description: 'Permite à alma adorar, agradecer, pedir socorro e saborear a intimidade com o Redentor.',
            icon: 'VolumeX'
          }
        ],
        practicalImportance: 'Evite a tentação de se levantar ou sair correndo antes do fim da celebração: aproveite esses minutos preciosos.',
        reflectionQuestion: 'O que você costuma dizer a Jesus quando Ele está presente dentro do seu peito após a Comunhão?'
      },
      {
        id: 'm5-a8',
        moduleId: 'modulo-5',
        number: 8,
        title: 'Oração depois da Comunhão',
        subtitle: 'O Pedido de que os Frutos Sacramentais Permaneçam',
        durationMinutes: 6,
        isFullyDeveloped: false,
        intro: 'O sacerdote conclui o Rito da Comunhão com uma oração litúrgica que sintetiza os frutos da celebração.',
        whatHappens: 'O sacerdote diz "Oremos" e profere a prece pedindo que os mistérios celebrados produzam frutos duradouros de santidade. O povo responde "Amém".',
        liturgicalMeaning: 'Liga o sacramento recebido à vida cotidiana, pedindo que a graça transforme os nossos costumes e ações.',
        biblicalFoundation: {
          reference: 'Filipenses 1, 6',
          textExcerpt: 'Estou convencido de que aquele que começou em vós tão boa obra há de levá-la a bom termo até o dia de Cristo Jesus.',
          explanation: 'A graça eucarística nos acompanha até o encontro final com o Pai.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 89',
          text: 'Na oração depois da Comunhão, o sacerdote implora os frutos do mistério celebrado. O povo faz sua esta oração pela aclamação: Amém.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Amém Final do Rito da Comunhão',
            description: 'Sela o nosso compromisso de viver durante a semana a santidade que recebemos no altar.',
            icon: 'Check'
          }
        ],
        practicalImportance: 'Escute a oração com atenção para saber qual virtude pedir com insistência nos dias seguintes.',
        reflectionQuestion: 'Você percebe que a força para vencer seus defeitos brota do alimento sagrado da Comunhão?'
      }
    ]
  },
  {
    id: 'modulo-6',
    number: 6,
    title: 'Ritos Finais',
    subtitle: 'O Envio em Missão e o Testemunho no Mundo',
    description: 'A bênção e o envio missionário: como transformar a Missa celebrada em vida quotidiana e caridade no mundo.',
    iconName: 'Send',
    image: heroAltarEucharistImage,
    lessons: [
      {
        id: 'm6-a1',
        moduleId: 'modulo-6',
        number: 1,
        title: 'Breves Avisos Comunitários',
        subtitle: 'A Vida da Paróquia e as Notícias da Comunidade',
        durationMinutes: 5,
        isFullyDeveloped: false,
        intro: 'Se necessário, fazem-se breves comunicados pastorais antes da bênção final.',
        whatHappens: 'O sacerdote ou coordenador comunitário comunica horários de confissões, catequese, ações de caridade ou festas paroquiais.',
        liturgicalMeaning: 'Expressa a dimensão concreta da vida fraterna da Igreja que se organiza para o serviço e o apostolado.',
        biblicalFoundation: {
          reference: 'Gálatas 6, 10',
          textExcerpt: 'Enquanto temos tempo, façamos o bem a todos, principalmente aos da família da fé.',
          explanation: 'A fraternidade cristã se manifesta no apoio mútuo às obras apostólicas.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 90a',
          text: 'Os ritos de conclusão compreendem: breves comunicações, se forem necessárias.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'Atenção aos Comunicados',
            description: 'Demonstra pertença e amor pela própria comunidade paroquial.',
            icon: 'Bell'
          }
        ],
        practicalImportance: 'Engajar-se em pastorais e movimentos faz florescer a vida cristã recebida na Eucaristia.',
        reflectionQuestion: 'Você procura participar de alguma atividade pastoral ou caritativa na sua paróquia?'
      },
      {
        id: 'm6-a2',
        moduleId: 'modulo-6',
        number: 2,
        title: 'Saudação e Bênção Final',
        subtitle: 'A Proteção da Santíssima Trindade sobre o Povo',
        durationMinutes: 6,
        isFullyDeveloped: true,
        intro: 'Antes de deixar a assembleia, o sacerdote abençoa a todos no Nome do Pai, do Filho e do Espírito Santo.',
        whatHappens: 'O sacerdote saúda ("O Senhor esteja convosco"), pode proferir uma oração sobre o povo ou fórmula solene de bênção, traçando o sinal da cruz enquanto o povo se inclina e responde "Amém".',
        liturgicalMeaning: 'O fiel não sai da igreja por suas próprias forças, mas sob o escudo protetor da Santíssima Trindade para enfrentar as batalhas do mundo.',
        biblicalFoundation: {
          reference: 'Números 6, 24-26',
          textExcerpt: 'O Senhor te abençoe e te guarde! O Senhor faça brilhar sobre ti a sua face e se compadeça de ti!',
          explanation: 'A antiquíssima bênção sacerdotal de Aarão prefigura a bênção litúrgica da Igreja.'
        },
        churchTeaching: {
          source: 'Instrução Geral do Missal Romano (IGMR)',
          paragraphs: 'n. 90b',
          text: 'A saudação e a bênção do sacerdote, que em certos dias e ocasiões é enriquecida e expressa pela oração sobre o povo ou por uma fórmula mais solene.',
          documentUrl: 'https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Sinal da Cruz Sacerdotal',
            description: 'A mão do sacerdote estendida traça a cruz de Cristo comunicando a graça e a proteção do Céu.',
            icon: 'Cross'
          }
        ],
        practicalImportance: 'Receber a bênção com respeito e fé nos fortalece contra o pecado durante toda a semana.',
        reflectionQuestion: 'Você espera a bênção final antes de pensar em sair do templo?'
      },
      {
        id: 'm6-a3',
        moduleId: 'modulo-6',
        number: 3,
        title: 'Despedida e Envio (Ite, missa est)',
        subtitle: 'Ide em Paz e o Senhor vos Acompanhe',
        durationMinutes: 7,
        isFullyDeveloped: true,
        intro: 'A expressão latina Ite, missa est dá origem à própria palavra "Missa" e encerra formalmente a celebração.',
        whatHappens: 'O diácono ou sacerdote despede a assembleia dizendo: "Ide em paz e o Senhor vos acompanhe" (ou outra fórmula). O povo responde jubilante: "Graças a Deus!". O sacerdote beija o altar e retira-se com os ministros.',
        liturgicalMeaning: 'Missa significa envio, missão. A Missa acabou, mas a missão cristã começa agora nos lares, escritórios, escolas e praças.',
        biblicalFoundation: {
          reference: 'Marcos 16, 15',
          textExcerpt: 'Ide por todo o mundo e pregai o Evangelho a toda criatura.',
          explanation: 'O mandato de missão do Senhor é confiado a cada comungante alimentado pela Eucaristia.'
        },
        churchTeaching: {
          source: 'Papa Bento XVI, Sacramento da Caridade (Sacramentum Caritatis)',
          paragraphs: 'n. 84 - 85',
          text: 'Na antiguidade "missa" significava simplesmente "despedida", mas adquiriu no uso litúrgico o sentido de "envio em missão". A Eucaristia impulsiona para a missão no mundo.',
          documentUrl: 'https://www.vatican.va/content/benedict-xvi/pt/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Beijo de Despedida no Altar',
            description: 'O sacerdote despede-se com o mesmo beijo de amor nupcial com que saudou o altar no início da Missa.',
            icon: 'Heart'
          }
        ],
        practicalImportance: 'Sair da Missa com a consciência de ser sal da terra e luz do mundo em todos os ambientes.',
        reflectionQuestion: 'Como o seu testemunho diário reflete a santidade de Cristo que você comungou no domingo?'
      },
      {
        id: 'm6-a4',
        moduleId: 'modulo-6',
        number: 4,
        title: 'Viver aquilo que celebramos',
        subtitle: 'A Espiritualidade Eucarística Cotidiana',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'A Missa não é um parêntese isolado na semana: ela deve ser a alma de toda a conduta moral e espiritual do católico.',
        whatHappens: 'Os fiéis saem em silêncio ou conversam fraternalmente no átrio da igreja, levando a paz recebida para suas famílias e vizinhos.',
        liturgicalMeaning: 'Tornamo-nos "outros Cristos" no meio do mundo. As nossas vidas tornam-se oblação espiritual contínua agradável a Deus.',
        biblicalFoundation: {
          reference: '1 João 4, 11',
          textExcerpt: 'Caríssimos, se Deus nos amou a tal ponto, nós também devemos amar-nos uns aos outros.',
          explanation: 'A caridade divina recebida na Eucaristia deve transbordar obrigatoriamente no amor ao irmão.'
        },
        churchTeaching: {
          source: 'Concílio Vaticano II, Lumen Gentium',
          paragraphs: 'n. 11',
          text: 'Participando do sacrifício eucarístico, fonte e cume de toda a vida cristã, os fiéis oferecem a divina vítima e a si mesmos juntamente com ela.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Genuflexão ao Passar diante do Sacrário',
            description: 'Despede-se de Jesus no sacrário com reverência ao sair da igreja.',
            icon: 'Sparkle'
          }
        ],
        practicalImportance: 'Viver a Missa significa ter paciência com o cônjuge, honestidade nos negócios e socorrer os necessitados.',
        reflectionQuestion: 'Quem olha para a sua vida durante a semana percebe que você é uma pessoa que comunga com frequência?'
      }
    ]
  },
  {
    id: 'modulo-7',
    number: 7,
    title: 'Aprofundamento Teológico',
    subtitle: 'Mistérios Doutrinários da Eucaristia',
    description: 'Estudo sólido dos dogmas eucarísticos: Presença Real, Transubstanciação, Memorial Sacrifical, Adoração Eucarística e a participação ativa segundo o Concílio.',
    iconName: 'Sparkles',
    image: consecrationChaliceHostImage,
    lessons: [
      {
        id: 'm7-a1',
        moduleId: 'modulo-7',
        number: 1,
        title: 'A Presença Real de Cristo na Eucaristia',
        subtitle: 'Verdadeiramente, Realmente e Substancialmente Presente',
        durationMinutes: 9,
        isFullyDeveloped: true,
        intro: 'A fé católica confessa que no Santíssimo Sacramento da Eucaristia estão contidos verdadeira, real e substancialmente o Corpo e o Sangue juntamente com a Alma e a Divindade de Nosso Senhor Jesus Cristo.',
        whatHappens: 'Os fiéis prostram-se em adoração perante o Santíssimo Sacramento exposto no ostensório ou guardado no Sacrário.',
        liturgicalMeaning: 'Esta presença chama-se "real" não por exclusão, como se as outras presenças não fossem reais (na Palavra, na comunidade orante), mas por antonomásia, porque é substancial e torna presente o Cristo todo e inteiro.',
        biblicalFoundation: {
          reference: 'Mateus 26, 26; Lucas 24, 39',
          textExcerpt: 'Isto é o meu corpo... Vede minhas mãos e meus pés: sou eu mesmo!',
          explanation: 'Jesus não disse "Isto significa" ou "Isto é um símbolo do meu corpo", mas categoricamente "Isto é o meu corpo".'
        },
        churchTeaching: {
          source: 'Encíclica Mysterium Fidei (São Paulo VI)',
          paragraphs: 'n. 39',
          text: 'Esta presença chama-se "real" não a título exclusivo, mas por excelência, dado que é substancial: por ela Cristo, Deus e homem, faz-se presente todo e inteiro.',
          documentUrl: 'https://www.vatican.va/content/paul-vi/pt/encyclicals/documents/hf_p-vi_enc_03091965_mysterium.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Luz da Lamparina do Santíssimo',
            description: 'Vela vermelha permanentemente acesa junto ao Sacrário anunciando que o Senhor está ali presente em Seu Corpo Sacrossanto.',
            icon: 'Flame'
          }
        ],
        practicalImportance: 'Diante de qualquer Sacrário do mundo, estamos diante do mesmo Jesus que andava pela Galileia e acolhia os necessitados.',
        reflectionQuestion: 'Você costuma visitar uma igreja aberta durante a semana apenas para dizer "Obrigado, Jesus" diante do Sacrário?'
      },
      {
        id: 'm7-a2',
        moduleId: 'modulo-7',
        number: 2,
        title: 'A Transubstanciação',
        subtitle: 'A Filosofia e a Teologia do Milagre Eucarístico',
        durationMinutes: 10,
        isFullyDeveloped: true,
        intro: 'O termo Transubstanciação foi cunhado pela teologia medieval e solenemente definido pelo Concílio de Trento para expressar com precisão o mistério da conversão eucarística.',
        whatHappens: 'Embora a vista, o paladar e o tato continuem percebendo as características exteriores de pão e de vinho (os "acidentes": cor, sabor, textura, peso), a realidade subjacente e invisível (a "substância") foi inteiramente mudada na substância do Corpo e do Sangue de Cristo.',
        liturgicalMeaning: 'Deus, que do nada criou o universo pela Sua palavra, tem poder onipotente para mudar o ser íntimo das criaturas sem alterar as aparências físicas visíveis.',
        biblicalFoundation: {
          reference: 'Salmo 33 (34), 9; Hebreus 11, 1',
          textExcerpt: 'Provai e vede quão suave é o Senhor... A fé é o fundamento das coisas que se esperam e a prova das coisas que não se veem.',
          explanation: 'Na Eucaristia, os sentidos humanos falham; somente a fé ouvida da boca da Verdade infalível garante a presença.'
        },
        churchTeaching: {
          source: 'Concílio de Trento, Sessão XIII',
          paragraphs: 'Cânon 2',
          text: 'Se alguém disser que na sagrada Eucaristia permanece a substância do pão e do vinho juntamente com o corpo e sangue de nosso Senhor Jesus Cristo... seja anátema.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/index.htm'
        },
        gesturesAndSymbols: [
          {
            title: 'A Genuflexão com o Joelho Direito',
            description: 'Reservada estritamente a Deus diante do Santíssimo Sacramento, reconhecendo Sua soberania absoluta.',
            icon: 'ArrowDown'
          }
        ],
        practicalImportance: 'Fortalece a nossa confiança no poder da Palavra de Deus: o Senhor tem poder para transformar a nossa vida mais árida assim como transforma o pão e o vinho.',
        reflectionQuestion: 'Você confia na Palavra de Cristo mesmo quando os seus sentidos carnais parecem hesitar?'
      },
      {
        id: 'm7-a3',
        moduleId: 'modulo-7',
        number: 3,
        title: 'A Missa como memorial do sacrifício de Cristo',
        subtitle: 'O Conceito Bíblico de Memorial (Zikkaron)',
        durationMinutes: 8,
        isFullyDeveloped: false,
        intro: 'No sentido bíblico, o memorial não é mera evocação psicológica de um fato do passado, mas a proclamação das maravilhas que Deus realizou, tornando-as presentes e operantes no hoje da Igreja.',
        whatHappens: 'A celebração do sacrifício eucarístico aplica aos homens de cada geração a redenção operada de uma vez para sempre no Calvário.',
        liturgicalMeaning: 'O sacrifício de Cristo na cruz e o sacrifício da Eucaristia são um único e mesmo sacrifício.',
        biblicalFoundation: {
          reference: 'Êxodo 12, 14',
          textExcerpt: 'Conservareis a memória deste dia e o celebrareis como uma festa em honra do Senhor.',
          explanation: 'O memorial da Páscoa judaica tornava cada geração participante da saída do Egito.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1363',
          text: 'No sentido da Sagrada Escritura, o memorial não é somente a lembrança dos acontecimentos passados, mas a proclamação das maravilhas que Deus realizou pelos homens.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Palavra "Hoje" (Hodie) na Liturgia',
            description: 'Expressa a contemporaneidade dos mistérios da vida de Cristo tornados presentes na celebração.',
            icon: 'Calendar'
          }
        ],
        practicalImportance: 'Garante que não chegamos tarde demais na história: podemos estar tão próximos de Jesus quanto os Apóstolos no Calvário.',
        reflectionQuestion: 'Você já agradeceu a Deus por ter tornado a salvação acessível a você hoje através da Santa Missa?'
      },
      {
        id: 'm7-a4',
        moduleId: 'modulo-7',
        number: 4,
        title: 'A Eucaristia como fonte e ápice da vida cristã',
        subtitle: 'O Ensinamento Central da Sacrosanctum Concilium e Lumen Gentium',
        durationMinutes: 8,
        isFullyDeveloped: false,
        intro: 'Todos os outros sacramentos, bem como todos os ministérios eclesiásticos e obras de apostolado, ligam-se à sagrada Eucaristia e a ela se ordenam.',
        whatHappens: 'A Eucaristia é a nascente (fonte) de onde jorra toda a graça espiritual e o cume (ápice) para o qual se dirigem todas as aspirações do coração humano.',
        liturgicalMeaning: 'Na Eucaristia está contido todo o bem espiritual da Igreja, a saber, o próprio Cristo, nossa Páscoa.',
        biblicalFoundation: {
          reference: 'João 15, 5',
          textExcerpt: 'Eu sou a videira, vós os ramos. Quem permanece em mim e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.',
          explanation: 'Sem a seiva eucarística do tronco divino, os ramos murcham e morrem.'
        },
        churchTeaching: {
          source: 'Concílio Vaticano II, Presbyterorum Ordinis',
          paragraphs: 'n. 5',
          text: 'Os demais sacramentos, como todos os ministérios eclesiásticos e obras de apostolado, prendem-se à santíssima Eucaristia e a ela se ordenam.',
          documentUrl: 'https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19651207_presbyterorum-ordinis_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Coração Pulsante da Igreja',
            description: 'Imagem patrística da Eucaristia que irriga todas as células do Corpo de Cristo com o Seu Sangue precioso.',
            icon: 'Heart'
          }
        ],
        practicalImportance: 'Nenhuma devoção particular ou trabalho caritativo pode substituir o valor infinito de uma única Santa Missa.',
        reflectionQuestion: 'A Santa Missa ocupa o centro e a prioridade número um na sua agenda semanal?'
      },
      {
        id: 'm7-a5',
        moduleId: 'modulo-7',
        number: 5,
        title: 'A participação consciente, ativa e frutuosa',
        subtitle: 'O Verdadeiro Sentido da Participatio Actuosa',
        durationMinutes: 8,
        isFullyDeveloped: true,
        intro: 'A constituição Sacrosanctum Concilium pediu com insistência que os fiéis não assistam à Missa como estranhos ou espectadores mudos, mas participem plena e conscientemente.',
        whatHappens: 'Participação ativa não significa que todos devam falar ao microfone ou executar tarefas exteriores no presbitério; consiste primariamente na união interior da alma ao sacrifício de Cristo.',
        liturgicalMeaning: 'É uma atitude do coração: escutar com fé, responder com devoção, calar no silêncio sagrado e oferecer-se com Cristo.',
        biblicalFoundation: {
          reference: '1 Pedro 2, 9',
          textExcerpt: 'Vós sois a raça eleita, o sacerdócio real, a nação santa, o povo de sua particular propriedade.',
          explanation: 'O sacerdócio batismal de todos os fiéis capacita a oferecer sacrifícios espirituais agradáveis a Deus por Cristo.'
        },
        churchTeaching: {
          source: 'Papa Bento XVI, Sacramento da Caridade',
          paragraphs: 'n. 52 - 55',
          text: 'A verdadeira participação dos fiéis na Liturgia não se reduz a uma simples atividade exterior, mas é uma conformação interior do próprio coração a Cristo.',
          documentUrl: 'https://www.vatican.va/content/benedict-xvi/pt/apost_exhortations/documents/hf_ben-xvi_exh_20070222_sacramentum-caritatis.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Atenção Interior',
            description: 'O olhar vigilante e o coração dócil que acompanha cada palavra e ação litúrgica.',
            icon: 'Eye'
          }
        ],
        practicalImportance: 'Desmistifica a falsa ideia de que quem não sobe ao altar não participou plenamente da celebração.',
        reflectionQuestion: 'Você já esteve numa Missa muito silencioso por fora, mas com o coração em chamas de amor por dentro?'
      },
      {
        id: 'm7-a6',
        moduleId: 'modulo-7',
        number: 6,
        title: 'A Adoração Eucarística fora da Missa',
        subtitle: 'Prolongamento e Fruto da Celebração do Altar',
        durationMinutes: 8,
        isFullyDeveloped: false,
        intro: 'O culto prestado à Eucaristia fora da Missa tem um valor inestimável na vida da Igreja.',
        whatHappens: 'Os fiéis passam tempos de oração silenciosa diante do Sacrário ou do Santíssimo Sacramento exposto no Ostensório, culminando na Bênção com o Santíssimo.',
        liturgicalMeaning: 'Adorar a Cristo no Sacramento é a continuação natural da celebração eucarística: quem comeu deste Pão sente sede de contemplar o rosto do Amado.',
        biblicalFoundation: {
          reference: 'Mateus 26, 40',
          textExcerpt: 'Voltou depois para os discípulos e achou-os dormindo; e disse a Pedro: "Nem uma hora pudestes vigiar comigo?"',
          explanation: 'O convite amoroso de Jesus no Getsêmani ressoa no convite à adoração silenciosa.'
        },
        churchTeaching: {
          source: 'Encíclica Ecclesia de Eucharistia',
          paragraphs: 'n. 25',
          text: 'O culto prestado à Eucaristia fora da Missa é de um valor inestimável na vida da Igreja. É belo demorar-se com Ele e, reclinados sobre o seu peito como o discípulo amado, sentir-se tocados pelo amor infinito do seu coração.',
          documentUrl: 'https://www.vatican.va/content/john-paul-ii/pt/encyclicals/documents/hf_jp-ii_enc_20030417_ecclesia-de-eucharistia.html'
        },
        gesturesAndSymbols: [
          {
            title: 'O Ostensório (Custódia)',
            description: 'Peça dourada de arte sagrada em forma de sol radiante que ostenta a Sagrada Hóstia para adoração pública.',
            icon: 'Sun'
          },
          {
            title: 'O Véu de Ombros',
            description: 'Pano com que o sacerdote cobre as mãos ao abençoar o povo com o ostensório, indicando que é Cristo quem abençoa, não o homem.',
            icon: 'Layers'
          }
        ],
        practicalImportance: 'Estar diante do Santíssimo é o melhor remédio para a ansiedade, a solidão e a angústia do homem moderno.',
        reflectionQuestion: 'Quando foi a última vez que você passou meia hora em silêncio puro diante do Santíssimo Sacramento?'
      },
      {
        id: 'm7-a7',
        moduleId: 'modulo-7',
        number: 7,
        title: 'A relação entre Eucaristia e vida comunitária',
        subtitle: 'Um Só Pão, Um Só Corpo: A Fraternidade que Nasce do Altar',
        durationMinutes: 8,
        isFullyDeveloped: false,
        intro: 'A Eucaristia cria e sustenta a comunhão fraterna entre os discípulos de Cristo.',
        whatHappens: 'Pessoas de diferentes raças, idades, classes sociais e temperamentos alimentam-se do mesmo Pão e tornam-se irmãos em Cristo.',
        liturgicalMeaning: 'Não pode haver autêntica celebração eucarística sem o compromisso sincero com a caridade, a justiça e o socorro aos mais frágeis da sociedade.',
        biblicalFoundation: {
          reference: '1 Coríntios 10, 17',
          textExcerpt: 'Porque há um só pão, nós, embora muitos, somos um só corpo, pois todos participamos desse único pão.',
          explanation: 'A unidade eclesial é o fruto maduro da comunhão eucarística.'
        },
        churchTeaching: {
          source: 'Catecismo da Igreja Católica',
          paragraphs: '§1396 - §1397',
          text: 'A Eucaristia faz a Igreja. A Eucaristia compromete com os pobres: para receber na verdade o Corpo e o Sangue de Cristo entregues por nós, devemos reconhecer a Cristo nos mais pobres, seus irmãos.',
          documentUrl: 'https://www.vatican.va/archive/cathechism_po/index_new/p2s2cap1_1210-1419_po.html'
        },
        gesturesAndSymbols: [
          {
            title: 'A Coleta para os Pobres',
            description: 'Desde os tempos de São Paulo, a coleta material acompanha a oferenda eucarística para acudir os indigentes.',
            icon: 'HandHeart'
          }
        ],
        practicalImportance: 'Comungar na igreja e desprezar os necessitados ou cultivar divisões na família é uma profunda incoerência com o Evangelho.',
        reflectionQuestion: 'Como o amor recebido na Eucaristia move você a perdoar seus desafetos e ajudar quem tem menos recursos?'
      }
    ]
  }
];
