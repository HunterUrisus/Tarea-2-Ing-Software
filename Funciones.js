//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function mayusculas(string) {
  return string.toUpperCase();
}

//2. Crea una función que reciba un string y retorne el string en minúsculas.
function minusculas(string) {
  return string.toLowerCase();
}

//3. Crear una función que reciba como parámetro 2 números y los reste.
function resta(num1, num2) {
  return num1 - num2;
}

//4. Crear una función que reciba como parámetro 2 números y los divida.
function division(num1, num2) {
  if (num2 == 0) return "No se puede dividir por 0";

  return num1 / num2;
}

//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicar(num1, num2) {
  return num1 * num2;
}

//6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(string) {
  return string.length;
}

const Cadena = "Hola Mundo";
const numero1 = 10;
const numero2 = 20;

console.log(mayusculas(Cadena));
console.log(minusculas(Cadena));
console.log(resta(numero1, numero2));
console.log(division(numero1, numero2));
console.log(multiplicar(numero1, numero2));
console.log(longitud(Cadena));
