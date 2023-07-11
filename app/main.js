
// Arrays para guardar os livros
let livros = [];

// Constante com a link da API
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

// Função assíncrona para fazer requisição 
getBuscarLivrosAPI()

// Função assíncrona espera uma promessa para fazer uma ação
async function getBuscarLivrosAPI() {
    // Fazendo a requisição à API
    const res = await fetch(endpointDaAPI);

    // Tranformando a resposta em dados identificáveis no js
    livros = await res.json();

    // Variável para receber os valores dos livros com desconto
    let livrosComDesconto = aplicarDesconto(livros);

    // Chamamento da função para exibir os livros
    exibirOsLivrosNaTela(livrosComDesconto);
}


