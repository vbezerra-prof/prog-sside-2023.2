// Tipos de Dados no JavaScript
console.log('Tipos de Dados no JavaScript');
var aprovado = true;
console.log(typeof aprovado); // boolean

var preco = null;
console.log(typeof preco); // object (null)

var desconto = undefined;
console.log(typeof desconto); // undefined

var num = 29.99;
console.log(typeof num); // number

var linguagem = 'JavaScript';
console.log(typeof linguagem); // string

var pessoa = { nome: 'João', idade: 25 };
pessoa.email = 'jao@dopedefeijao.com'

var soma = function(a, b) { return a + b };
console.log(typeof soma, '\n'); // function


console.log('Nomes válidos de Variáveis');
// var 1nome = 'Nome 1' -> não pode iniciar com números
var $1nome = 'Nome 1' // Pode iniciar o nome da variável com $ ou _
var _1nome = 'Nome 2' // Pode iniciar o nome da variável com $ ou _

var nome = 'Pedro';
var idade2021 = 26;
var _endereco = 'Rua dos Programadores, 1500';
var $_cidade_ = 'Naviraí';
var $$__estado = 'MS';

console.log('Nome: ' + nome); // Nome: Pedro
console.log('Idade: ' + idade2021); // Idade: 26
console.log('Endereço: ' + _endereco + ', ' + $_cidade_, ', ' + $$__estado, '\n');
// Endereço: Rua dos Programadores, 1500, Naviraí , MS


console.log('Padrões de nomes de Variáveis:');
// Camel case
var nomeCompleto = 'Pedro da Silva';
console.log('Nome Completo (camel case): ' + nomeCompleto);
// Nome Completo (camel case): Pedro da Silva

// Partial case
var EnderecoCompleto = 'Rua dos Programadores, 1500';
console.log('Endereço Completo (partial case): ' + EnderecoCompleto);
// Endereço Completo (partial case): Rua dos Programadores, 1500

// Underscore
var numero_telefone = '67999998888';
console.log('Número Telefone (underscore): ' + numero_telefone);
// Número Telefone (underscore): 67999998888

