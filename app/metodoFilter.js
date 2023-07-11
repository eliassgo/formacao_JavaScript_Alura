// Captando botão para filtrar livros de acordo com a categoria
const botoes = document.querySelectorAll('.btn');

// Função para adicionar um evento para filtrar os livros ao clicar 
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// Função de clicar. 
function filtrarLivros() {
    // Captando id do elemento clicado
    const elementoBtn = document.getElementById(this.id)
    // Captando o a categoria do elementoBtn
    const categoria = elementoBtn.value
    // Se a categoria dos livros filtrado for disponível
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade()
        : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados).toFixed(2);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}


function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}