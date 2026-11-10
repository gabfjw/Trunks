/* =====================================================================
   ✏️  ARQUIVO DE EDIÇÃO DA LOJA
   ---------------------------------------------------------------------
   Tudo o que aparece no site é configurado AQUI. Não precisa mexer
   em nenhum outro arquivo.

   Dicas:
   - Textos ficam sempre entre aspas: "assim"
   - Cada produto fica entre chaves { ... } e é separado por vírgula
   - Para remover um produto, apague o bloco { ... } inteiro dele
   - Para adicionar, copie um bloco existente e altere os dados
   - Fotos ficam na pasta "imagens/"
   - Preço vazio ("") mostra "Consulte o valor" no site
   ===================================================================== */

const LOJA = {
  nome: "Atlética Feroz",
  subtitulo: "Fisioterapia · A.A.A.F.U",
  slogan: "Solta o Panthro! Vista a Feroz.",

  // Número do WhatsApp do vendedor: código do país (55) + DDD + número,
  // só números, sem espaços, traços ou parênteses. Ex.: "5571999998888"
  whatsapp: "5571981692884",

  // Início da mensagem que chega no WhatsApp do vendedor
  mensagemPadrao: "Olá! Vim pelo site da Atlética Feroz e estou interessado(a) neste produto:",

  instagram: "", // ex.: "atleticaferoz" (deixe vazio para esconder)
};

const PRODUTOS = [
  {
    nome: "Camisa Fisioterapia",
    descricao: "Camiseta com estampa da pantera nas costas e “Fisioterapia” na frente.",
    preco: "",
    promocao: "",
    etiqueta: "Mais vendida",
    fotos: ["imagens/camisa.jpg", "imagens/camisa-fotos.jpg"],
    cores: ["Preta", "Branca"],
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    nome: "Cropped Fisioterapia A.A.A.F.U",
    descricao: "Cropped de um ombro só com bordado rosa.",
    preco: "",
    promocao: "",
    etiqueta: "",
    fotos: ["imagens/cropped-preto.jpg", "imagens/cropped-branco.jpg"],
    cores: ["Preto", "Branco"],
    tamanhos: ["P", "M", "G"],
  },
  {
    nome: "Short Panthro",
    descricao: "Short com a pantera Feroz e lateral estampada “Solta o Panthro”.",
    preco: "",
    promocao: "",
    etiqueta: "",
    fotos: ["imagens/short.jpg"],
    cores: [],
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    nome: "Camisa de Jogo",
    descricao: "Uniforme oficial com escudo da Atlética Feroz. Pode personalizar o número.",
    preco: "",
    promocao: "",
    etiqueta: "Oficial",
    fotos: ["imagens/camisa-jogo-vermelha.jpg", "imagens/camisa-jogo-preta.jpg"],
    cores: ["Vermelha", "Preta"],
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    nome: "Regata de Jogo Feminina",
    descricao: "Regata oficial com escudo da Atlética Feroz. Pode personalizar o número.",
    preco: "",
    promocao: "",
    etiqueta: "Oficial",
    fotos: ["imagens/regata-jogo-vermelha.jpg", "imagens/regata-jogo-preta.jpg"],
    cores: ["Vermelha", "Preta"],
    tamanhos: ["P", "M", "G", "GG"],
  },
  {
    nome: "Boné Panthro",
    descricao: "Boné 5 painéis com ilhós bordados, costuras reforçadas, fecho ajustável e pantera bordada atrás.",
    preco: "",
    promocao: "",
    etiqueta: "Novo",
    fotos: ["imagens/bone.jpg", "imagens/bone-detalhes.jpg"],
    cores: [],
    tamanhos: [],
    fundoBranco: true, // mostra a foto inteira sobre fundo branco
  },
  {
    nome: "Caneca Feroz",
    descricao: "“A Feroz te ensina a posição correta.” Caneca de alumínio com o escudo.",
    preco: "",
    promocao: "",
    etiqueta: "",
    fotos: ["imagens/caneca.jpg"],
    cores: ["Rosa", "Preta"],
    tamanhos: [],
    fundoBranco: true,
  },
  {
    nome: "Tirante",
    descricao: "“A Feroz é o mundo · Seu corpo pede fisio.”",
    preco: "",
    promocao: "",
    etiqueta: "",
    fotos: ["imagens/tirante.jpg"],
    cores: [],
    tamanhos: [],
    fundoBranco: true,
  },
];
