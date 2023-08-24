// Class declaration
class Retangulo {

    // Método estático calcArea
    static calcArea(altura, largura) {
        return altura * largura;
    }

    // Método estático calcPerimetro
    static calcPerimetro(altura, largura) {
        return ((altura + largura) * 2);
    }
}

const r_area = Retangulo.calcArea(10, 30);
console.log(r_area); // 300
const r_perimetro = Retangulo.calcPerimetro(10, 30);
console.log(r_perimetro); // 80