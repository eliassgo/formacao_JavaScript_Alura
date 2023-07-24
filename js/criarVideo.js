import { conectaApi } from "./conectaAPI.js";

// Captando elemento do DOM 
const formulario = document.querySelector(".formulario");

// Função para criar vídeo
async function criarVideo(evento) {
    evento.preventDefault()
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    // Gerar um número aleatório entre 1 e 10. Math.floor trasnforma em inteiro. to String trasforma em string
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        // Gerando novo vídeo com a função criaVideo importada do conectaAPI.Ordem das propriedades importa!
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        // Retorno positivo se a criação der certo
        window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e)
    }
}

// Função que será executada quando o formulário for submetido 
formulario.addEventListener("submit", evento => criarVideo(evento)); 