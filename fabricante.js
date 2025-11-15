function minhaFuncao(objeto) {
  objeto.fabricante = "Toyota";
}

var meucarro = { fabricante: "Honda", modelo: "Civic", ano: 1998 };
var x, y;

x = meucarro.fabricante; // x recebe o valor "Honda"


minhaFuncao(meucarro);
y = meucarro.fabricante; // y recebe o valor "Toyota"
// (a propriedade make foi alterada pela função)