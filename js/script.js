import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

// Captando campos do formulário 
const camposDeFormulario = document.querySelectorAll('[required]')
const formulario = document.querySelector("[data-formulario]");
// console.log(camposDeFormulario)

// Adicionando comando quando ocorrer o event de submit
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Colocando os valores do alvo no sua respectiva propriedade
    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    }

    // Armazenando a lista de resposta no armazenamento local de chave "cadastro"
    localStorage.setItem("cadastro", JSON.stringify(listaRespostas))

    // Redirecionando para a próxima página do formulário
    window.location.href = './abrir-conta-form-2.html';
})

// Adicionando um evento para cada elemento do array de campos para quando o campo perder o foco
camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    // Evento (preventDefault = parar comportamento padrão) que irá ocorrer quando o campo. tiver uma ação de invalid
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

// Array com os tipos de erros a serem customizados 
const tiposDeErro = [
    'valueMissing', // Quando não tem nada dentro do campo
    'typeMismatch', // Dado inserido não é do mesmo tipo de dado que é para receber
    'patternMismatch', // Padrão do tipo de dado que o formulário recebe não é respeitado
    'tooShort', // Valor mínimo para um dado campo 
    'customError' // Erros customizados
]

// Mensagens customizadas 
const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

// Função para verificar campos do formulario
function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    // Condicional para verificar se o formato cpf está correto antes de enviar
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
    // Verificando e adicionando uma mensagem de erro customizada de acordo com o erro. 
    tiposDeErro.forEach(erro => {
        // Verifica o validity do campo e analisa qual erro está como true 
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem)
        }
    })
    // Captando o span para aparecer a mensagem referente ao input que ele está vinculado. 
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    // Checando se o campo está valido ou não e guardando o resultado em uma constante 
    const validadorDeInput = campo.checkValidity(); // retorna false para erro e true para correto 

    // Operador "!" inverte o valor de uma expressão booleana. Se o o validadorDeInput retornar algum false, a condição retorna true e executa a mensagem de erro 
    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
        // Se o validadorDeInput retornar true, a condição retorna false e executa a mensagem vazia. 
    } else {
        mensagemErro.textContent = "";
    }
}

