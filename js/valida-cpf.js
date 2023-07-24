// export default = quando o arquivo for exportado a função será exportdada como padrão 
export default function ehUmCPF(campo) {
    // Atribuindo o valor do campo a uma constante. O método replace atribui o segundo valor ("") ao primeiro declarado ("/\.|-/g")
    const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf nâo é válido')
    }
}

// Função para verificar se os números estão repetidos 
function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    // Verificar se o cpf está dentro dessa lista de números repetidos. Se encontrar o cpf retorna true, se não, retorna false
    return numerosRepetidos.includes(cpf); // Verificar se o cpf está dentro dessa lista
}

// Função para validar o primeiro dígito do cpf
function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) { // inciando em 0, de 1 em 1, enquanto t. for menor que 9
        soma += cpf[tamanho] * multiplicador; // soma recebe o valor da multiplicação do cpf que está na posição t. vezes M., 
        multiplicador--; // multiplicador diminuindo em 1 em 1 
    }

    soma = (soma * 10) % 11; // soma recebe o valor do resto da divisão de soma * 10 por 11

    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    // Operador não igual, se soma não for igual a cpf retorna true, se for igual retorna false
    return soma != cpf[9]
}


function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10]
}