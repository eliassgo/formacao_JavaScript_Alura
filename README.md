# Consumindo Dados API 

> Este é um projeto em JavaScript que permite buscar informações de endereço com base em um CEP fornecido pelo usuário. Através de uma requisição HTTP ao serviço ViaCEP, o código busca os dados correspondentes ao CEP informado e preenche automaticamente os campos de cidade, logradouro (endereço) e estado no formulário HTML.

<h2>Tecnologias Utilizadas</h2>

```
HTML5, CSS3, JavaScript
```

<h2>Funcionamento</h2>
  <p>O código consiste em uma função assíncrona <code>buscaEndereco(cep)</code> que recebe um parâmetro <code>cep</code>. Ao chamar essa função e fornecer um CEP válido, ela realiza uma requisição HTTP GET ao serviço ViaCEP para obter os dados do endereço correspondente.</p>

  <p>Caso o CEP seja inválido ou não exista, uma mensagem de erro é exibida no elemento HTML com o id "erro". Caso contrário, os dados do endereço são preenchidos automaticamente nos campos de cidade, logradouro e estado, nos elementos HTML correspondentes.</p>

  <p>A interação com o usuário é feita através do campo de input HTML com o id "cep". Quando o campo perde o foco (evento "focusout"), a função <code>buscaEndereco</code> é chamada, passando o valor atual do campo como argumento.</p>

<h2>Licença</h2>
  <p>Este projeto está licenciado sob a <a href="LICENSE">Licença MIT</a>.</p>