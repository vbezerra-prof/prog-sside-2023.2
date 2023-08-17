// Estruturas Condicionais
var x = 10, y = 2;

console.log('if (se):');
if(x != y) { // diferente?
    console.log('Diferente', '\n ');
}
// Diferente

console.log('if / else (se / senão):');
if(x >= y) { // Maior ou igual?
    console.log('Maior ou Igual', '\n ');
} else { // menor!
    console.log('Menor', '\n ');
}
// Maior ou Igual

console.log('if / if else / else (se / se senão / senão):');
y = '10';
if(x === y) { // idêntico?
    console.log('Idêntico', '\n ');
} else if( x == y) { // igual?
    console.log('Igual', '\n ');
} else { // diferente!
    console.log('Diferente', '\n ');
}
// Igual

y = 2;
console.log('if / else com operadores lógicos:');
if(x != y && x >= y) { // Valores diferentes E maior ou igual?
    console.log('Diferente E Maior ou Igual', '\n ');
} else { // Igual ou Menor!
    console.log('Igual ou Menor', '\n ');
}
// Diferente E Maior ou Igual

console.log('if / else com operadores lógicos:');
if(x != y || x < y) { // Valores diferentes OU menor que?
    console.log('Diferente OU Menor que', '\n ');
} else { // Igual ou Menor!
    console.log('Igual ou Maior ou Igual', '\n ');
}
// Diferente OU Menor que

console.log('if / else com operadores lógicos:');
if(!(x == y)) { // Negação de valores iguais
    console.log('Diferente', '\n ');
} else { // Igual
    console.log('Igual', '\n ');
}
// Diferente

console.log('Operador ternário:');
var nota = 7;
var resultado = (nota >= 7 ? 'Aprovado' : 'Reprovado');
console.log(resultado, '\n ');
// Aprovado

console.log('switch (escolha caso):');
var num = 10;
switch(num){
    case 8:
        console.log('Igual a 8', '\n ');
        break;
    case 9:
        console.log('Igual a 9', '\n ');
        break;
    case 10:
        console.log('Igual a 10', '\n ');
        break;
    default:
        console.log('Valor não encontrado!', '\n ');
        break;
}
// Igual a 10

console.log('switch (escolha caso):');
var fruta = 'acerola';
switch(fruta){
    case 'banana':
        console.log('Banana!', '\n ');
        break;
    case 'limao':
        console.log('Limão!', '\n ');
        break;
    case 'abacaxi':
        console.log('Abacaxi!', '\n ');
        break;
    default:
        console.log('Fruta não encontrada!');
        break;
}
// Fruta não encontrada!