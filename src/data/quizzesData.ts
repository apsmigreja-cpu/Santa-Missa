import { ModuleQuiz } from '../types';

export const MODULE_QUIZZES: Record<string, ModuleQuiz> = {
  'modulo-1': {
    moduleId: 'modulo-1',
    title: 'Questionário de Fixação: Introdução à Santa Missa',
    questions: [
      {
        id: 'q1-1',
        question: 'A Santa Missa repete o Sacrifício de Cristo no Calvário?',
        options: [
          'Sim, Jesus é sacrificado novamente de maneira violenta em cada altar.',
          'Não, o sacrifício da Cruz não se repete; ele se torna sacramentalmente presente e atualizado de modo incruento.',
          'Não, a Missa é apenas uma encenação teatral simbólica da Última Ceia.',
          'Sim, mas apenas nas Missas dominicais solenes com bispos.'
        ],
        correctIndex: 1,
        explanation: 'O Concílio de Trento e o Catecismo (§1366) ensinam que a Vítima e o Sacerdote são os mesmos: Cristo. O Sacrifício do Calvário foi oferecido de uma vez para sempre e torna-se presente sacramentalmente em cada altar, sem repetição cruenta.'
      },
      {
        id: 'q1-2',
        question: 'O que significa a palavra "Eucaristia", de origem grega?',
        options: [
          'Festa sagrada da assembleia.',
          'Oferenda de pão e vinho.',
          'Ação de graças.',
          'Purificação dos pecados.'
        ],
        correctIndex: 2,
        explanation: 'Eucaristia provém do verbo grego "eucharistein", que significa dar graças a Deus Pai por suas maravilhas da criação, redenção e santificação.'
      },
      {
        id: 'q1-3',
        question: 'Em qual capítulo do Evangelho de São João Jesus pronuncia o solene discurso do "Pão da Vida"?',
        options: [
          'São João capítulo 1',
          'São João capítulo 6',
          'São João capítulo 10',
          'São João capítulo 15'
        ],
        correctIndex: 1,
        explanation: 'Em João 6, Jesus declara: "Eu sou o pão vivo descido do céu. Quem comer deste pão viverá eternamente; e o pão que eu darei é a minha carne para a vida do mundo" (Jo 6, 51).'
      },
      {
        id: 'q1-4',
        question: 'Como os primeiros cristãos nos Atos dos Apóstolos denominavam a celebração da Santa Missa?',
        options: [
          'Culto da Aliança',
          'Fração do Pão',
          'Comunhão Dominical',
          'Ceia dos Santos'
        ],
        correctIndex: 1,
        explanation: 'Nos Atos dos Apóstolos (At 2, 42 e At 20, 7), a celebração eucarística é designada como "Fração do Pão" (Fractio Panis), realizada especialmente no primeiro dia da semana.'
      }
    ]
  },
  'modulo-2': {
    moduleId: 'modulo-2',
    title: 'Questionário de Fixação: Ritos Iniciais',
    questions: [
      {
        id: 'q2-1',
        question: 'Por que o sacerdote beija o altar logo ao chegar ao presbitério?',
        options: [
          'Por mera cortesia humana aos ministros que o acompanham.',
          'Porque o altar representa o próprio Jesus Cristo, a Pedra viva da Igreja.',
          'Para verificar se as toalhas do altar estão limpas.',
          'Porque é uma obrigação estritamente estética sem significado teológico.'
        ],
        correctIndex: 1,
        explanation: 'A Instrução Geral do Missal Romano ensina que o altar simboliza Cristo. O beijo sacerdotal é um ato de afeto nupcial e reverência filial ao Senhor e aos santos mártires cujas relíquias repousam sob o altar.'
      },
      {
        id: 'q2-2',
        question: 'O Ato Penitencial no início da Missa perdoa os pecados mortais graves?',
        options: [
          'Sim, substitui completamente a confissão com o padre.',
          'Não, perdoa os pecados veniais cotidianos; pecados mortais exigem a confissão sacramental antes de comungar.',
          'Não perdoa nenhum tipo de falta, é apenas decorativo.',
          'Apenas se o fiel bater no peito três vezes com força.'
        ],
        correctIndex: 1,
        explanation: 'O Ato Penitencial purifica a assembleia das faltas leves cotidianas e predispõe à celebração, mas o Catecismo (§1457) e o Código de Direito Canônico prescrevem que pecados graves devem ser confessados individualmente no Sacramento da Penitência.'
      },
      {
        id: 'q2-3',
        question: 'Qual é a única oração ordinária da Missa em rito romano conservada na língua grega original?',
        options: [
          'O Sanctus',
          'O Kyrie, eleison',
          'O Agnus Dei',
          'O Credo'
        ],
        correctIndex: 1,
        explanation: 'O "Kyrie, eleison" (Senhor, tende piedade) é formulado em grego koiné, preservando o elo com as origens apostólicas e a tradição das primeiras comunidades cristãs.'
      },
      {
        id: 'q2-4',
        question: 'Qual é o significado litúrgico da Oração da Coleta?',
        options: [
          'Recolher o dízimo em dinheiro dos fiéis presentes.',
          'Fazer a leitura dos avisos pastorais da diocese.',
          'O sacerdote recolhe as orações silenciosas de cada fiel da assembleia e as reúne numa só súplica solene dirigida ao Pai.',
          'Indicar aos fiéis que já podem sentar-se para descansar.'
        ],
        correctIndex: 2,
        explanation: 'Do latim collecta, a oração coleta recolhe o clamor silencioso dos fiéis formulado no silêncio prévio e o eleva a Deus Pai por meio do único Mediador, Jesus Cristo.'
      }
    ]
  },
  'modulo-3': {
    moduleId: 'modulo-3',
    title: 'Questionário de Fixação: Liturgia da Palavra',
    questions: [
      {
        id: 'q3-1',
        question: 'Quem é que fala verdadeiramente quando as Sagradas Escrituras são proclamadas na liturgia da Igreja?',
        options: [
          'Apenas o leitor humano com sua opinião pessoal.',
          'O próprio Cristo, que está presente em Sua palavra e fala ao Seu povo.',
          'Os historiadores da Antiguidade bíblica.',
          'O autor do livro da estante de teologia.'
        ],
        correctIndex: 1,
        explanation: 'A Constituição Sacrosanctum Concilium (§7) proclama: "Cristo está presente na sua palavra, pois é Ele mesmo que fala quando na Igreja se leem as Sagradas Escrituras".'
      },
      {
        id: 'q3-2',
        question: 'Por que traçamos três cruzes (testa, lábios e peito) antes da proclamação do Evangelho?',
        options: [
          'Para pedir que o Evangelho esteja em nossa mente, em nossos lábios e em nosso coração.',
          'É um hábito popular sem aprovação pela Igreja.',
          'Para pedir proteção contra o sono durante a homilia.',
          'Para substituir o sinal da cruz trinitário.'
        ],
        correctIndex: 0,
        explanation: 'Os três sinais da cruz expressam a prece corporal: que a Boa-Nova ilumine nossos pensamentos, seja proclamada por nossas palavras e more guardada no amor do nosso coração.'
      }
    ]
  },
  'modulo-4': {
    moduleId: 'modulo-4',
    title: 'Questionário de Fixação: Liturgia Eucarística',
    questions: [
      {
        id: 'q4-1',
        question: 'O que significa o dogma católico da Transubstanciação?',
        options: [
          'O pão e o vinho tornam-se apenas símbolos poéticos de união social.',
          'A conversão miraculosa de toda a substância do pão no Corpo de Cristo e do vinho no Seu Sangue, permanecendo apenas as aparências sensíveis.',
          'Cristo está presente espiritualmente apenas no momento da fé do crente.',
          'O pão continua sendo substancialmente pão, mas ganha uma bênção especial.'
        ],
        correctIndex: 1,
        explanation: 'Definido pelo Concílio de Trento e confirmado em Mysterium Fidei, a substância intrínseca do pão e do vinho deixa de existir, convertendo-se ontologicamente no Corpo, Sangue, Alma e Divindade de Jesus Cristo.'
      },
      {
        id: 'q4-2',
        question: 'O que simboliza a gota de água misturada ao vinho no cálice antes da consagração?',
        options: [
          'Apenas para render o volume do vinho.',
          'A nossa frágil humanidade unida e assumida pela divindade de Jesus Cristo, bem como o sangue e a água do Seu lado aberto.',
          'A água do batismo de São João no rio Jordão.',
          'A purificação das mãos dos acólitos.'
        ],
        correctIndex: 1,
        explanation: 'O sacerdote reza em segredo: "Pelo mistério desta água e deste vinho possamos participar da divindade do vosso Filho, que se dignou assumir a nossa humanidade".'
      }
    ]
  },
  'modulo-5': {
    moduleId: 'modulo-5',
    title: 'Questionário de Fixação: Rito da Comunhão',
    questions: [
      {
        id: 'q5-1',
        question: 'Qual é o tempo obrigatório de jejum eucarístico antes de comungar a Sagrada Eucaristia?',
        options: [
          'Pelo menos 12 horas consecutivas.',
          'Pelo menos 1 hora antes da sagrada comunhão (água e remédios não quebram o jejum).',
          'Não é necessário jejum algum.',
          'Apenas três dias na semana santa.'
        ],
        correctIndex: 1,
        explanation: 'O Cânon 919 do Código de Direito Canônico prescreve que quem vai receber a santíssima Eucaristia deve abster-se de qualquer comida ou bebida, pelo menos no espaço de uma hora antes da sagrada comunhão, com exceção de água e remédios.'
      },
      {
        id: 'q5-2',
        question: 'O que o fiel professa ao responder "Amém" diante das palavras "O Corpo de Cristo"?',
        options: [
          'Professa: "Eu creio com toda a minha fé que aqui está verdadeiramente o meu Senhor e Salvador Jesus Cristo".',
          'Diz apenas: "Obrigado ao padre pelo pão abençoado".',
          'Expressa um desejo de terminar a missa com pressa.',
          'Confirma que guardou o jejum do dia.'
        ],
        correctIndex: 0,
        explanation: 'Santo Agostinho recorda: "Dizes \'Amém\' e ao dizeres \'Amém\' subscreves o mistério. Ouve \'O Corpo de Cristo\' e responde \'Amém\'; sê membro do Corpo de Cristo para que o teu Amém seja verdadeiro".'
      }
    ]
  },
  'modulo-6': {
    moduleId: 'modulo-6',
    title: 'Questionário de Fixação: Ritos Finais',
    questions: [
      {
        id: 'q6-1',
        question: 'Qual é o sentido original da despedida "Ite, missa est" que deu origem à palavra "Missa"?',
        options: [
          'Significa que os deveres religiosos acabaram até o próximo domingo.',
          'Significa "Ide, sois enviados em missão": a celebração encerrou-se para que o fiel testemunhe e viva o que celebrou no mundo.',
          'Significa "Adeus ao templo sagrado".',
          'Significa uma advertência aos preguiçosos.'
        ],
        correctIndex: 1,
        explanation: 'Bento XVI em Sacramentum Caritatis (§84) explica que Missa tem a raiz de missio (missão). Os fiéis são nutridos pelo sacrifício de Cristo para serem apóstolos e anunciadores do Evangelho em suas famílias e na sociedade.'
      }
    ]
  },
  'modulo-7': {
    moduleId: 'modulo-7',
    title: 'Questionário de Fixação: Aprofundamento Teológico',
    questions: [
      {
        id: 'q7-1',
        question: 'Por que dizemos que a Eucaristia é a "fonte e ápice" (fons et culmen) da vida cristã?',
        options: [
          'Porque é apenas uma cerimônia bonita e tradicional.',
          'Porque dela emana toda a graça e força da Igreja, e para ela convergem todas as atividades, sacramentos e orações dos fiéis.',
          'Porque os livros litúrgicos são impressos em Roma.',
          'Porque substitui o batismo e a crisma.'
        ],
        correctIndex: 1,
        explanation: 'A Constituição Lumen Gentium (§11) ensina que a Eucaristia contém todo o bem espiritual da Igreja — o próprio Cristo — sendo a fonte inesgotável da graça e a meta suprema para onde caminha a peregrinação de fé.'
      }
    ]
  }
};
