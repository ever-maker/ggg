// 1. Alerta de boas-vindas
alert ("Boas vindas ao nosso site!");

// 2. Variavel nome
let nome = "Lua";

// 3. Variavel idade
let idade = 25;

// 4. Variavel NumeroDeVendas
let numeroDeVendas = 50;

// 5. Variavel saldoDisponivel
let saldoDisponivel = 1000;

// 6. Alerta de erro simples
alert("Erro! Preencha todos os campos");

// 7. Variavel mensagemDeErro e alerta com o valor dela
let mensagemDeErro = "Erro! Preencha todos os campos"
alert(mensagemDeErro);

// 8. Prompt para perguntar o nome do usuario
let nomeUsuario = prompt("Qual é o seu nome?");

// 9. Prompt para perguntar a idade do usuario
let idadeUsuario = prompt("Digite sua idade:");

// 10. Validacao da idade para tirar a habilitacao
if (idadeUsuario >= 18) {
    alert("Pode tirar sua habilitacao");
}