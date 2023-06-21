
// Verificação do número que será exibido na tela
function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute // Transformando o número em inteiro 

    // Verificações 
    if (verificaGameOver(numero)) {
        document.body.classList.add("game-over")
        document.body.innerHTML = `
        <h1>GAME OVER</h1>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamento</button>`
    }
    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.classList.add("game-over")
            document.body.innerHTML = `
        <h1>GAME OVER</h1>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamento</button>`
        } else {
            elementoChute.innerHTML += '<div> Valor inválido </div>'
            return //Não executa mais nada da função
        }
    }

    if (numMaiorOuMenoPermitido(numero)) {
        elementoChute.innerHTML += `<div> valor inválido: fale um número entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3> 

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamento</button> 
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> 
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> 
        `
    }
}
// Função de verificação de número
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
function numMaiorOuMenoPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

// Ação para o botão de recarregar a página 
document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})