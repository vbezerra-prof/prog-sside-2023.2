// Estruturas de Repetição
console.log('Estruturas de Repetição');
console.log('for (para):');
for(var i = 0; i<5; i++){
    console.log(i);
}
// 0 1 2 3 4
console.log('\n');


console.log('while (enquanto):');
var i = 4;
while(i > -1){
    console.log(i);
    i--;
}
// 4 3 2 1 0
console.log('\n');


console.log('for e length (iterar no array pelo tamanho):');
var numeros = [6, 7, 8, 9, 10];
for(var i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}
// 6 7 8 9 10
console.log('\n');


console.log('for com 1º parâmetro implícito (;):');
var i = 0;
var numeros = [10, 9, 8, 7, 6];
for (; i < numeros.length; i++) {
console.log(numeros[i]);
}
// 10 9 8 7 6
console.log('\n');


console.log('for of (iteração automática no array):');
var nomes = ['João', 'Maria', 'Pedro'];
for (var nome of nomes) {
console.log(nome);
}
// João Maria Pedro
console.log('\n');


console.log('método forEach():');
var marcas = ['BMW', 'Chevrolet', 'Fiat'];
marcas.forEach(function(marca){
console.log(marca);
});
// BMW Chevrolet Fiat