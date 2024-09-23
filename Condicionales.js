const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

const numeros = [numero1, numero2, numero3];
console.log(numeros);

function isPar(num) {
  if (num % 2 == 0) return `${num} es par.`;

  return `${num} no es par.`;
}

function isMultipleOf5(num) {
  if (num % 5 == 0) return `${num} es multiplo de 5.`;

  return `${num} no es multiplo de 5.`;
}

//1. Imprimir en consola el número mayor de los tres.
let numMayor = numeros[0];
numeros.forEach((i) => {
  if (numMayor < i) numMayor = i;
});

console.log(`1. El numero mayor de los tres es ${numMayor}`);

//2. Imprimir en consola el número menor de los tres.
let numMenor = numeros[0];
numeros.forEach((i) => {
  if (numMenor > i) numMenor = i;
});

console.log(`2. El numero menor de los tres es ${numMenor}`);

//3. Imprimir en consola si el numero1 es par o impar.
console.log(`3. ${isPar(numero1)}`);

//4. Imprimir en consola si el numero2 es par o impar.
console.log(`4. ${isPar(numero2)}`);

//5. Imprimir en consola si el numero3 es par o impar.
console.log(`5. ${isPar(numero3)}`);

//6. Imprimir en consola si el numero1 es múltiplo de 5.
console.log(`6. ${isMultipleOf5(numero1)}`);

//7. Imprimir en consola si el numero2 es múltiplo de 5.
console.log(`7. ${isMultipleOf5(numero2)}`);

//8. Imprimir en consola si el numero3 es múltiplo de 5.
console.log(`8. ${isMultipleOf5(numero3)}`);
