// Captando elemento HTML para colocar os livros 
const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// foreach não devolve um retorno. Apenas executa uma função em cada elemento de um array
function exibirOsLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';
  listaDeLivros.forEach(livro => {

    // Variável disponibilidade. Se a condição for true retorna imagem. Se for false retorna indisponível
    let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel'
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
  });
}

// let disponibilidade = verificarDisponibilidadeDoLivro(livro);
// Função para executar uma ação de acordo com a condição
// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro_imagens'
//   } else {
//     return 'livros_imagens indisponivel'
//   }
// }