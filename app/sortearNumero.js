// Costantes para o sorteador 
const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

// Função para sortear
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1) // Adiciona 1 para o último número também ser sorteado
}

// Mudando HTML
const elementoMenorValor = document.getElementById('menor-numero');
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto)