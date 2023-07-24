// Conexão com a função conecta api
import { conectaApi } from "./conectaAPI.js"
import constroiCard from "./mostraVideos.js";

// Função assíncrona para bucar vídeo no DOM. Quando ela receber o evento de click executar os passos a seguir
async function buscarVideos(evento) {
    evento.preventDefault();
    // Captando elemento dados da pesdquisa (input) do DOM 
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideos(dadosDePesquisa);
    // console.log(busca);

    // Constante para captar o elemento data-lista do DOM
    const lista = document.querySelector("[data-lista]");

    // Laço de repetição WHILE. Executa um comando enquanto uma condição for verdadeira
    while (lista.firstChild) { // Enquando tiver vídeos na lista remover o primeiro filho até que não haja nenhum
        lista.removeChild(lista.firstChild);
    }

    // Criar a estrutura do card e exibir na tela
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    // Retorno para caso a busca seja um array vazio 
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }
}
// Captando elemento botao do DOM
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

// Adicionando um evento de escuta no botão para quando ele for clicado. Enviou o evento de click para a função
botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento))