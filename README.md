# Loja Atlética Feroz

Site de vendas simples: cada produto tem um botão **“Pedir no WhatsApp”** que abre a conversa com o vendedor já com a mensagem pronta (produto, cor, tamanho e valor).

## Como editar

Tudo fica no arquivo **`produtos.js`**:

1. **Número do vendedor**: troque `whatsapp: "5500000000000"` pelo número com 55 + DDD + número, só os dígitos (ex.: `"5571999998888"`).
2. **Preços**: altere o campo `preco` de cada produto (ex.: `preco: "45,00"`). Deixe `""` para aparecer “Consulte o valor”.
3. **Promoção**: campo `promocao` (ex.: `"2 por R$ 95,00"`). Deixe `""` para esconder.
4. **Cores e tamanhos**: listas `cores` e `tamanhos`. Use `[]` quando não houver.
5. **Fotos**: coloque o arquivo na pasta `imagens/` e adicione o caminho em `fotos`.
6. **Adicionar produto**: copie um bloco `{ ... },` inteiro e altere os dados.
7. **Remover produto**: apague o bloco `{ ... },` dele.

As cores do visual ficam no topo do arquivo `style.css`.

## Como publicar

É um site estático (HTML, CSS e JS), sem instalação. Para ver localmente, abra o `index.html` no navegador.
Para colocar no ar de graça: GitHub Pages (Settings → Pages → Branch), Netlify ou Vercel (é só arrastar a pasta).
