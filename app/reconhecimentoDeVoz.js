//Captando elementos do HTML 
const elementoChute = document.getElementById('chute');

// Ativando reconhecimento de voz
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

// Reconhecer voz
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

// Reconhecer a voz e exibir no console
recognition.addEventListener('result', onSpeak);

// Captar o que foi falado 
function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
}
//Função para exibir o valor reconhecido na tela
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}