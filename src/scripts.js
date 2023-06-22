
// Definindo função assíncrona com um parâmetro
async function buscaEndereco(cep) {
    // captando elemento que aparecerá mensagem de erro
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    // Bloco try 
    try {
        // Fazendo uma requisição. usando 'await'para esperar a requisição antes de prosseguir com o código 
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCep.json() // Transformando a resposta em um Objeto que o js possa ler. Usando 'await'para esperara a conclusão
        // Verificação se a resposta a consulta possui a propriedade 'erro'
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!'); // lançamento de execessão caso a condição seja verdadeira.
        }
        // Captando e armazenando campos do HTML
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        // Acessando campo do valor das variáveis e atribuindo valor retornado pela api
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        // Retorno do objeto
        //console.log(consultaCEPConvertida);
        return consultaCEPConvertida
        // Tratamento para caso o bloco try ocorra algum erro 
    } catch (erro) {
        // Atribuição de mensagem erro na tela
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
        //console.log(erro)
    }
}
// Captando dados do cep 
var cep = document.getElementById('cep');
// Adicionando um ouvinte para o evento "focuout"(quando o elemento perde o foco.) 
cep.addEventListener("focusout", () => buscaEndereco(cep.value)); // Arrow function de retorno chamando a função buscaEndereço e passando o valor do cep