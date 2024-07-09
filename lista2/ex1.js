const somar = (a,b) => a + b;
const calcularMedia = (a, b) => (a + b)/2;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const realizarOperacao = ( x , y , fn) => fn(x ,y);



console.log(realizarOperacao(3, 2, somar));
console.log(realizarOperacao(3, 2, calcularMedia));
console.log(realizarOperacao(3, 2, subtrair));
console.log(realizarOperacao(3, 2, multiplicar));
console.log(realizarOperacao(3, 2, dividir));
