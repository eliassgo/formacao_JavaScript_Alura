# Jogo de Adivinhação por Voz
> Este é um projeto de um jogo em que o usuário tenta adivinhar um número utilizando sua voz. O jogo possui uma interface simples em HTML, estilizada com CSS, e utiliza JavaScript para implementar a funcionalidade de reconhecimento de voz, sorteio do número e validação dos palpites.

## Tecnologias Utilizadas 

``` 
HTML, CSS, JavaScript
``` 

O projeto é composto pelos seguintes arquivos:

- `index.html`: Arquivo HTML que contém a estrutura da página do jogo.
- `style.css`: Arquivo CSS que estiliza a aparência da página do jogo.
- `reconhecimentoDeVoz.js`: Arquivo JavaScript que implementa o reconhecimento de voz do usuário.
- `sorteadorNumero.js`: Arquivo JavaScript que realiza o sorteio do número secreto.
- `validacao.js`: Arquivo JavaScript que valida os palpites do usuário e controla o fluxo do jogo.

## Como Jogar

1. Abra o arquivo `index.html` em seu navegador preferido.
2. Ao carregar a página, o número secreto será sorteado e exibido na tela.
3. Clique no botão de permissão para habilitar o reconhecimento de voz.
4. Fale um número entre o valor mínimo e máximo exibido na tela.
5. O número falado será exibido abaixo da mensagem "Você disse:".
6. O jogo irá validar o palpite e exibir uma mensagem indicando se o número é maior ou menor que o número secreto.
7. Continue fazendo palpites até acertar o número secreto.
8. Quando acertar, uma mensagem de parabéns será exibida, juntamente com o número secreto.
9. Você pode jogar novamente clicando no botão "Jogar Novamente".

**Observação:** Caso diga "GAME OVER" como palpite, o jogo será encerrado imediatamente.

## Requisitos do Sistema

Para executar o jogo, é necessário um navegador compatível com as APIs Web Speech Recognition e Webkit Speech Recognition, que permitem o reconhecimento de voz. Recomenda-se utilizar a versão mais recente do Google Chrome ou Mozilla Firefox para uma melhor compatibilidade.

**Nota:** É importante ter um microfone funcional para utilizar a funcionalidade de reconhecimento de voz.

## Avisos

- O jogo possui uma faixa de valores permitidos para os palpites, que é exibida na tela.
- Se o palpite estiver fora dessa faixa ou não for reconhecido como um número válido, uma mensagem de valor inválido será exibida.
- Caso o número falado seja "GAME OVER", o jogo será encerrado imediatamente, exibindo a mensagem de "GAME OVER" na tela.
- Para jogar novamente, basta clicar no botão de jogar novamente.

Divirta-se tentando adivinhar o número secreto utilizando sua voz!