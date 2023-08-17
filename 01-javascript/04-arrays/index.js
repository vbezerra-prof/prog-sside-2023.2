// Arrays
console.log('Arrays')
var cores = ['vermelho', 'azul', 'verde'];
console.log(cores); // ['vermelho', 'azul', 'verde']
console.log(cores[1]); // azul

var outrasCores = new Array('vermelho', 'amarelo', 'laranja');
outrasCores[3] = 'verde'; // adicionar no índice 3 (pos 4)
outrasCores.push('roxo'); // método adicionar elemento

console.log(outrasCores);
// ['vermelho', 'amarelo', 'laranja', 'verde', 'roxo']

// Um array pode conter múltiplos tipos de dados
var dados = [5, 77.99, '7', 'oito', true];
console.log(dados[0] + dados[1]); // 82.99

// Propriedade length => "tamanho" do array
console.log(dados.length); // 5

// Outros métodos

// sort() => Ordenar o array
console.log(dados.sort());
// [5, '7', 77.99, 'oito', true]

// reverse() => Inverter o array
console.log(dados.reverse());
// [true, 'oito', 77.99, '7', 5]

// splice() => Remover item do array
dados.splice(4, 4); // remover o item 4 do array
console.log(dados); 
// [true, 'oito', 77.99, '7']