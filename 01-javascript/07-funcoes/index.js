// Funções
console.log('Funções');

console.log('1. DEFINIÇÃO LITERAL DE FUNÇÃO');
// definindo uma função sem retorno
function funcaoSemRetorno(){
    console.log('Função sem Retorno!');
}

// invocando a função "funcaoSemRetorno"
funcaoSemRetorno(); // Função sem Retorno!

// definindo uma função com retorno
function funcaoComRetorno(){
    return 'Função com Retorno!';
}

console.log(funcaoComRetorno()); // Função com Retorno!

// definindo a função soma (com retorno)
function soma(a, b){
    return a + b;
}

console.log('Soma: ' + soma(5, 4)); // Soma: 9

// definindo a função olaMundo (sem retorno)
function olaMundo(){
    console.log('Olá Mundo!', '\n\n\n ');
}

olaMundo(); // Olá Mundo!


console.log('2. FUNÇÃO ANÔNIMA');

// definindo uma função anônima e atribuindo a uma variável
var minhaFuncaoAnonima = function(param){
    param();
};

// invocando a função anônima e passando outra como argumento
minhaFuncaoAnonima(function(){
    console.log('Executando uma Função Anônima!', '\n\n\n ');
});
// Executando uma Função Anônima!




console.log('3. FUNÇÃO ANÔNIMA ATRIBUÍDA A VARIÁVEL');

// definindo a variável soma e atribuindo uma função anônima a ela
var soma = function(a, b){
    return a + b;
}

// invocando a função a partir da variável soma
console.log('Soma: ' + soma(3, 5), '\n\n\n '); // Soma: 8




console.log('4. FUNÇÃO COMO ARGUMENTO DE OUTRA FUNÇÃO');

// definindo uma função
function funcaoQueRecebeFuncao(param){
    param();
}

// invocando a função funcaoQueRecebeFuncao e passando uma função anônima como parâmetro
funcaoQueRecebeFuncao(function(){
    console.log('Função como Parâmetro', '\n\n\n ');
});
// Função como Parâmetro




console.log('5. ARRAY DE FUNÇÕES');

// definindo um array de funções
var array_de_funcoes = [
    function(a, b) { // definindo função de "soma"
        return a + b;
    },
    function(a, b) { // definindo função de "subtracao"
        return a - b;
    },
    function(a, b) { // função de multiplicação
        return a * b;
    },
    // definir a função de divisão
];

// invocando a função de "soma" e de "subtracao"
// a partir da variável array_de_funcoes e o índice 
// correspondente (0 -> soma e 1 -> subtração)

console.log('Soma: ' + array_de_funcoes[0](2, 5)); // Soma: 7

console.log('Subtração: ' + array_de_funcoes[1](6, 2)); // Subtração: 4

console.log('Multiplicação: ' + array_de_funcoes[2](5, 5) + '\n\n\n '); // Multiplicação: 25




console.log('6. FUNÇÃO EM OBJETO');

// definindo um objeto com o método (função) getDesconto
var produto = {
    preco: 199.99,
    getDesconto: function(percDesc){
        return this.preco * (1 - percDesc);
    }
};

// invocando a função a partir da método getDesconto 
// (interno do objeto produto)
console.log('Preço com Desconto: R$ ' + produto.getDesconto(0.1));
// Preço com Desconto: 179.99

// definindo um objeto vazio
var obj = {};

// atribuindo dinamicamente uma função a um método de objeto
obj.minhaFuncao = function(){
    console.log('Sou uma função (método) em um objeto!', '\n\n\n ');
};

// invocando a função a partir do método (minhaFuncao) no objeto
obj.minhaFuncao();
// Sou uma função (método) em um objeto!




console.log('7. FUNÇÃO RETORNANDO FUNÇÃO');

// definindo uma função
function subtracao(a, b){
    var res = a - b;
    return function(){
        return res;
    }
}

// invocando a função subtracao e invocando a função de retorno
console.log('Subtração: ' + subtracao(10, 4)(), '\n\n\n '); // Subtração: 6




console.log('8. FUNÇÃO IMEDIATA');

// Forma 1 (mais comum)
(function(){
    console.log('Forma 1 de Função Imediata (mais comum).');
})();
// Forma 1 de Função Imediata (mais comum).

// Forma 2
+function(){
console.log('Forma 2 de Função Imediata.');
}();
// Forma 2 de Função Imediata.

// Forma 3
-function(){
console.log('Forma 3 de Função Imediata.');
}();
// Forma 3 de Função Imediata.

// Forma 4
!function(){
console.log('Forma 4 de Função Imediata.');
}();
// Forma 4 de Função Imediata.

// Forma 5
~function(){
console.log('Forma 5 de Função Imediata.', '\n\n\n ');
}();
// Forma 5 de Função Imediata.




console.log('9. FUNÇÃO IMEDIATA E ENCAPSULAMENTO');

// Função definida e invocada em seguida com parênteses () 
// e atribuída a uma variável
var somaCumulativa = (function(){
    var contador = 0;
    return function(x){
        contador += x;
        return contador;
    }
})();

console.log('Soma Cumulativa: ' + somaCumulativa(2));
// Soma Cumulativa: 2

console.log('Soma Cumulativa: ' + somaCumulativa(4));
// Soma Cumulativa: 6 (e não 4)

console.log('Soma Cumulativa: ' + somaCumulativa(8) + '\n\n\n ');
// Soma Cumulativa: 14 (e não 8)




console.log('10. FUNÇÃO DE CALLBACK');

function saudacao(nome) {
    console.log('Olá ' + nome);
}

function olaMundo(nome) {
    console.log('Olá Mundo, ' + nome);
}

function chamaFuncaoCallback(callback) {
    var nome = 'João';
    // invocando a função de callback
    callback(nome);
}

// passando a função "saudacao()" como parâmetro
chamaFuncaoCallback(saudacao);
// Olá João

// passando a função "olaMundo()" como parâmetro
chamaFuncaoCallback(olaMundo);
// Olá Mundo, João

// passando a função anônima como parâmetro
chamaFuncaoCallback(function(nome){
    console.log('Função Anônima -> Olá ' + nome);
});
// Função Anônima -> Olá João

var salarioBruto = 2200;
var salarioLiquido;

function getSalario(salarioBruto, callback) {
    var liquido = 0;
    var inss = salarioBruto * 0.11;
    var vr = salarioBruto * 0.15;
    var vt = salarioBruto * 0.10;
    var descontos = inss;
    var auxilios = vr + vt;
     
    liquido = salarioBruto - descontos + auxilios;
    // invocando a função de callback
    callback(liquido);
}

getSalario(salarioBruto, function(salarioLiquido) {
    console.log('Salário líquido: R$ ' + salarioLiquido, '\n\n\n ');
});
// O salário líquido é R$ 2508




console.log('11. ARROW FUNCTION');

// arrow function sem parâmetros e uma linha
var imprimir = () => console.log('Arrow Function sem parâmetro');
imprimir();
// Arrow Function sem parâmetro

// arrow function com um parâmetro e uma linha
// (sem parênteses e retorno implícito)
var quadrado = x => x * x;
console.log('Quadrado: ' + quadrado(4));
// Quadrado: 16

// arrow function com parâmetros e uma linha 
// (retorno implícito)
var multiplicacao = (a, b) => a * b ;
console.log('Multiplicação: ' + multiplicacao(2,4));
// Multiplicação: 8

// arrow function com parâmetros, com mais de uma linha 
// e retorno
var divisao = (a, b) => {
    var resultado = a / b;
    return resultado;
}
console.log('Divisão: ' + divisao(10, 2));
// Divisão: 5

// arrow function com invocação imediata
(() => console.log('Arrow Function imediata'))();
// Arrow Function imediata