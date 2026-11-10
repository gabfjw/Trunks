/* Monta o site a partir de produtos.js — normalmente não é preciso editar aqui. */

function linkWhatsApp(texto) {
  return "https://wa.me/" + LOJA.whatsapp + "?text=" + encodeURIComponent(texto);
}

function textoPreco(p) {
  return p.preco ? "R$ " + p.preco : "Consulte o valor";
}

function criarEl(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

function criarOpcoes(titulo, lista, aoMudar) {
  const bloco = criarEl("div", "opcoes");
  bloco.appendChild(criarEl("span", "opcoes-titulo", titulo));
  const linha = criarEl("div", "opcoes-lista");
  lista.forEach((valor, i) => {
    const b = criarEl("button", "chip" + (i === 0 ? " ativo" : ""), valor);
    b.type = "button";
    b.addEventListener("click", () => {
      linha.querySelectorAll(".chip").forEach((c) => c.classList.remove("ativo"));
      b.classList.add("ativo");
      aoMudar(valor);
    });
    linha.appendChild(b);
  });
  bloco.appendChild(linha);
  return bloco;
}

function criarCard(p) {
  const escolha = { cor: (p.cores || [])[0], tamanho: (p.tamanhos || [])[0] };
  const card = criarEl("article", "card");

  // Fotos
  const fotos = p.fotos || [];
  const area = criarEl("div", "card-foto" + (p.fundoBranco ? " fundo-branco" : ""));
  const img = document.createElement("img");
  img.src = fotos[0] || "";
  img.alt = p.nome;
  img.loading = "lazy";
  area.appendChild(img);
  if (p.etiqueta) area.appendChild(criarEl("span", "etiqueta", p.etiqueta));
  card.appendChild(area);

  if (fotos.length > 1) {
    const miniaturas = criarEl("div", "miniaturas");
    fotos.forEach((src, i) => {
      const m = criarEl("button", "mini" + (i === 0 ? " ativo" : ""));
      m.type = "button";
      m.setAttribute("aria-label", "Foto " + (i + 1));
      m.style.backgroundImage = "url('" + src + "')";
      m.addEventListener("click", () => {
        img.src = src;
        miniaturas.querySelectorAll(".mini").forEach((x) => x.classList.remove("ativo"));
        m.classList.add("ativo");
      });
      miniaturas.appendChild(m);
    });
    card.appendChild(miniaturas);
  }

  // Informações
  const info = criarEl("div", "card-info");
  info.appendChild(criarEl("h2", "", p.nome));
  if (p.descricao) info.appendChild(criarEl("p", "descricao", p.descricao));

  const preco = criarEl("div", "preco");
  preco.appendChild(criarEl("strong", p.preco ? "" : "consulte", textoPreco(p)));
  if (p.promocao) preco.appendChild(criarEl("span", "promo", p.promocao));
  info.appendChild(preco);

  if (p.cores && p.cores.length) {
    info.appendChild(criarOpcoes("Cor", p.cores, (v) => { escolha.cor = v; atualizarLink(); }));
  }
  if (p.tamanhos && p.tamanhos.length) {
    info.appendChild(criarOpcoes("Tamanho", p.tamanhos, (v) => { escolha.tamanho = v; atualizarLink(); }));
  }

  const botao = criarEl("a", "botao botao-whats", "Pedir no WhatsApp");
  botao.target = "_blank";
  botao.rel = "noopener";
  function atualizarLink() {
    let msg = LOJA.mensagemPadrao + "\n\n• Produto: " + p.nome;
    if (escolha.cor) msg += "\n• Cor: " + escolha.cor;
    if (escolha.tamanho) msg += "\n• Tamanho: " + escolha.tamanho;
    msg += "\n• Valor: " + textoPreco(p) + (p.promocao ? " (" + p.promocao + ")" : "");
    botao.href = linkWhatsApp(msg);
  }
  atualizarLink();
  info.appendChild(botao);

  card.appendChild(info);
  return card;
}

// Textos da loja
document.getElementById("marca").textContent = LOJA.nome;
document.getElementById("titulo").textContent = LOJA.nome;
document.getElementById("subtitulo").textContent = LOJA.subtitulo;
document.getElementById("slogan").textContent = LOJA.slogan;
document.getElementById("rodape-nome").textContent =
  "© " + new Date().getFullYear() + " " + LOJA.nome + " · " + LOJA.subtitulo;

const insta = document.getElementById("rodape-insta");
if (LOJA.instagram) {
  const a = criarEl("a", "", "@" + LOJA.instagram);
  a.href = "https://instagram.com/" + LOJA.instagram;
  a.target = "_blank";
  a.rel = "noopener";
  insta.appendChild(a);
}

const linkGeral = linkWhatsApp("Olá! Vim pelo site da " + LOJA.nome + " e gostaria de tirar uma dúvida.");
document.getElementById("whats-topo").href = linkGeral;
document.getElementById("whats-flutuante").href = linkGeral;

// Produtos
const grade = document.getElementById("produtos");
PRODUTOS.forEach((p) => grade.appendChild(criarCard(p)));
