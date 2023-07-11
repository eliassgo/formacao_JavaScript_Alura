
// Método Map, invoca um função e devolve um novo array como resultado
function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto
}