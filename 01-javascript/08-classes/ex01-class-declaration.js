// Class declaration
class Retangulo {

    // Construtor da Classe
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    // Método da Classe
    obterArea() {
        return this.altura * this.largura;
    }
}

const r = new Retangulo(10, 30);
console.log(`Área: ${r.obterArea()}cm²`);
// Área: 300cm².