// Primeiro captar o formulario de registro 
const form = document.getElementById("novoItem")
const lista = document.getElementById("lista") // captando a lista, colocando no escopo para não ficar repetindo dentro da funçao criaElemento
const itens = JSON.parse(localStorage.getItem("itens")) || [] // // Verificando se existe algum dado salvo em localStorage chamado "itens" e convertendo-o para um array, ou criando um array vazio caso não exista

// chamar a função manter os elementos todas as vezes que a página é recarregada
itens.forEach((elemento) => {
    criaElemento(elemento)
})


// Pegar os dados que são enviados quando o formulário é submetido 
form.addEventListener("submit", (evento) => { // Utilizar o evento de submit quando o formulário for submetido
    evento.preventDefault()                  // pausar a ação de regarregamento do formulário    

    // Captar os elementos nome e quantidade que são subtmetidos no formulário atravez do elements do evento
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    // Verificar a existência de um elemento, se o elemento que estiver na lista for igual ao elemento que eu digitei, const existe guarda o nome do objeto caso exista ou undefined se não existir
    const existe = itens.find(elemento => elemento.nome === nome.value)

    // Trasformando a variável itemAtual em um objeto, com as propriedades nome e quantidade, pois mandando apenas os elementos eles são sobreescrevidos
    const itemAtual = {// Objeto permite que os valores sejam chamados referenciando apenas o objeto
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    // Verificar se o elemento já existe no array "itens", Limitar a criação para caso o elemento exista ou não 
    if (existe) {
        itemAtual.id = existe.id // Colocar o id o elemento atual no elemento que já existe, não modificar o que já existe
        atualizaElemento(itemAtual) // Se o nome for encontrado atualiza o elemento
        // Sobreescrever um novo elemento que já existe 
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
        // Caso o elemento não exista, atribui um novo ID com base no último elemento do array ou define 0 caso o array esteja vazio
        itemAtual.id = itens[itens.length - 1] ? itens[itens.length - 1] + 1 : 0
        criaElemento(itemAtual) // Criando o novo elemento na página
        // Armazenar dados no localStorage do navegador 
        itens.push(itemAtual) // Armazenar o objeto ItemAtual no array itens para não serem perdidos
    }

    // Salvando o array "itens" em localStorage, convertendo-o para uma string no formato JSON
    localStorage.setItem("itens", JSON.stringify(itens)) // O localStorage salva apenas dados do tipo texto string, então o stringify modifica os valores para string

    // esvaziar os campos depois de submeter 
    nome.value = ""
    quantidade.value = ""
})

// Função para criar os elementos de nome e quantiade
function criaElemento(item) {
    // Criar um novo elemento 
    // <li class="item"><strong>3</strong>Casaco</li>
    const novoItem = document.createElement('li') // cria um li 
    novoItem.classList.add("item") // adicionar a class "item" no novo elemento

    const numeroItem = document.createElement('strong') // criar um elemento strong 
    numeroItem.innerHTML = item.quantidade // escrever o elemento quantidade dentro do strong no HTML 
    numeroItem.dataset.id = item.id // Cria um id para o elemento quantidade
    // Colocar o elemento strong(numeroItem) dentro do li (novoItem)
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome // colocar o nome dentro do elemento li

    // Fazer aparecer botão deleta no item 
    novoItem.appendChild(botaoDeleta(item.id))
    // adicionar o novoItem dentro do HTML 
    lista.appendChild(novoItem) // adicionando o novo item na lista

}

// Atualizar a quantidade do elemento 
function atualizaElemento(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade
}

// Função para criar botão de excluir um elemento da lista 
function botaoDeleta(id) {
    const elementoBotao = document.createElement("button");
    elementoBotao.innerHTML = "X"
    // Captar qual elemento foi clicado
    elementoBotao.addEventListener("click", function () {
        deletaElemento(this.parentNode, id)// parentNode retorna do pai do elemento
    })
    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()
    // Remover um item do array 
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
    // escrever no localStorage
    localStorage.setItem("itens", JSON.stringify(itens))
}