class Animal {

    constructor(nome) {
        this.nome = nome;
    }

    // Método falar
    falar() {
        console.log(`${this.nome}: emitiu um barulho.`);
    }

}

class Cachorro extends Animal{

    constructor(nome) {
        // Iniciar o construtor da classe pai
        super(nome);
    }

    // Sobrescrita do método falar
    falar() {
        console.log(`${this.nome}: Au Au!`);
    }
}

const animal = new Animal('Papagaio');
animal.falar();
// Papagaio: emite um barulho.

const cachorro = new Cachorro('Luke');
cachorro.falar();
// Luke: Au Au!