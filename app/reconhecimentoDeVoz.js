//Captando elementos do HTML 
const elementoChute = document.getElementById('chute');

// Ativando reconhecimento de voz
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

// Reconhecer voz
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

// Adicionando evento quando for exibido o resultado
recognition.addEventListener('result', onSpeak);

// Captar o que foi falado 
function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

// Função para exibir o valor reconhecido na tela
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}

// Adicionar evento quando a fala for interrompida. Quando a função acabar o recognition é ligado mais uma vez
recognition.addEventListener('end', () => recognition.start())