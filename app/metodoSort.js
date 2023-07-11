// Ordenar os elementos. 
let btnOrdenarPorPreço = document.getElementById('btnOrdenarPorPreco');

// Adicionando evento de ordenar livros ao clique 
btnOrdenarPorPreço.addEventListener('click', ordenarLivrosPorPreco);

// Função para ordenar 
function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}