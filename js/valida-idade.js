export default function ehMaiorDeIdade(campo) {
    // Constante que receberá o valor Date do campo e converterá para um dado que o JS possa ler
    const dataNascimento = new Date(campo.value);
    // Se a validaIdade retornar false, será executado o bloco if, se ela retornar true, executa o bloco else. 
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade')
    }
}

// Função para validar a idade 
function validaIdade(data) {
    // Obtém a data atual
    const dataAtual = new Date();

    // Calcula a data em que a pessoa completará 18 anos 
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    // Verifica se a data atual é maior ou igual à data em que a pessoa completa 18 anos 
    return dataAtual >= dataMais18;
}