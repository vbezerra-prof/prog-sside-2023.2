// Class expression
const retangulo = class {
    
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

const r = new retangulo(5, 8);
console.log(`Área: ${r.obterArea()}cm²`);
// Área: 40cm².