// Transformar valores em um único valor
function calcularValorTotalDeLivrosDisponiveis(livros) {
    // Aplicar a função reduce em livros. Doi parâmetro, acumulador e livro. Somar o acc com o valor da categoria preco, iniciando por a string de índice 0
    return livros.reduce((acc, livro) => acc + livro.preco, 0)
}