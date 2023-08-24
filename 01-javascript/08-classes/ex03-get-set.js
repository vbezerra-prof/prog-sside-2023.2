// Class declaration
class Retangulo {

    // Construtor da Classe
        constructor(altura, largura) {
        this._altura = altura;
        this._largura = largura;
    }

    // Método Setter largura
    set largura(largura) {
        this._largura = largura;
    }

    // Método Getter area
    get area() {
        return this._altura * this._largura;
    }
}

const r = new Retangulo(10, 30);
console.log(r._largura); // 30
console.log(r.area); // 300

r.largura = 20;
console.log(r._largura); // 20
console.log(`Área: ${r.area}cm²`);
// Área: 200cm².