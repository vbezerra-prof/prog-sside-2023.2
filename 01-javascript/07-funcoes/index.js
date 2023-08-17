// Funções
console.log('Funções');

console.log('1. DEFINIÇÃO LITERAL DE FUNÇÃO');
// definindo uma função sem retorno
function funcaoSemRetorno(){
    console.log('Função sem Retorno!');
}

// invocando a função "funcaoSemRetorno"
funcaoSemRetorno();
// Função sem Retorno!

// definindo uma função com retorno
function funcaoComRetorno(){
    return 'Função com Retorno!';
}

console.log(funcaoComRetorno());
// Função com Retorno!

// definindo a função soma (com retorno)
function soma(a, b){
    return a + b;
}

console.log('Soma: ' + soma(5, 4));
// Soma: 9

// definindo a função olaMundo (sem retorno)
function olaMundo(){
    console.log('Olá Mundo!', '\n\n\n ');
}

olaMundo();
// Olá Mundo!