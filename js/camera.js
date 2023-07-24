// Captando elementos do DOM
const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video");
const botaoTirarFoto = document.querySelector("[data-tirar-foto");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";
// Adicionando evento de click que aciona uma função
botaoIniciarCamera.addEventListener("click", async function () {
    // Iniciando navigato para ativar câmera. função assíncrona para esperar o usuário aceitar o pedido para abrir a câmera
    const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
    // Retirando botão da tela
    botaoIniciarCamera.style.display = "none";

    // Colocando campo camera na tela
    campoCamera.style.display = "block";

    // Adicionando menu navigator no campo de vídeo
    video.srcObject = iniciarVideo;
})

botaoTirarFoto.addEventListener("click", function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converterRetorno = JSON.parse(receberDadosExistentes)

    converterRetorno.image = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converterRetorno));

    window.location.href = "./abrir-conta-form-3.html";
})