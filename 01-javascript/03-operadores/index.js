// Operadores Aritméticos (matemáticos)
console.log('Operadores Aritméticos (matemáticos)');

var x = 10, y = 2;
      
var adicao = x + y;
console.log('Adição: ' + adicao); // 12

var subtracao = x - y;
console.log('Subtração: ' + subtracao); // 8

var multiplicacao = x * y;
console.log('Multiplicação: ' + multiplicacao); // 20

var divisao = x / y;
console.log('Divisão: ' + divisao); // 5

var potencia = x ** y;
console.log('Potenciação: ' + potencia); // 100

var modulo = x % y;
console.log('Módulo: ' + modulo); // 0

var inversao = -x;
console.log('Inversão de Sinal: ' + inversao); // -10

var incremento = ++x;
console.log('Incremento: ' + incremento); // 11

var decremento = --y;
console.log('Decremento: ' + decremento, '\n'); // 1

// Operadores de Atribuição
console.log('Operadores de Atribuição');

var x = 10, y = 2;
console.log('Atribuição: x = '+ x + '   y = ' + y);

x += y; // Equivale: x = x + y
console.log('Atribuição de adição: ' + x); // 12

x -= y; // Equivale: x = x - y
console.log('Atribuição de subtração: ' + x); // 10

x *= y; // Equivale: x = x * y
console.log('Atribuição de multiplicação: ' + x); // 20

x /= y; // Equivale: x = x / y
console.log('Atribuição de divisão: ' + x); // 10

x **= y; // Equivale: x = x ** y
console.log('Atribuição de potenciação: ' + x); // 100

x %= y; // Equivale: x = x % y
console.log('Atribuição de módulo: ' + x, '\n'); // 0

// Operadores Relacionais (comparação)
console.log('Operadores Relacionais');
var x = 10, y = 2, resultado;

resultado = (x == y); // Valores são iguais?
console.log('Igual: ' + resultado); // false

resultado = (x != y); // Valores são diferentes?
console.log('Diferente: ' + resultado); // true

y = '10';
resultado = (x === y); // Valores idênticos?
console.log('Idêntico: ' + resultado); // false

resultado = (x !== y); // Valores não idênticos?
console.log('Não Idêntico: ' + resultado); // true

y = 2;
resultado = (x < y); // É menor que?
console.log('Menor que: ' + resultado); // false

resultado = (x > y); // É maior que?
console.log('Maior que: ' + resultado); // true

resultado = (x <= y); // É menor ou igual?
console.log('Menor ou Igual: ' + resultado); // false

x = 2;
resultado = (x >= y); // É menor ou igual?
console.log('Maior ou Igual: ' + resultado); // true
