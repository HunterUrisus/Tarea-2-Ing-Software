const numeros = [10, 20, 30];
const cadenas = ["Hola", "Mundo", "Desde", "Javascript"];

//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumArray(nums) {
  let suma = 0;
  for (let i = 0; i < nums.length; i++) {
    suma = suma + nums[i];
  }
  return suma;
}

//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promArray(nums) {
  return sumArray(nums) / nums.length;
}

//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function mayusculas(string) {
  const newString = string.map((i) => {
    return i.toUpperCase();
  });
  return newString;
}

//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function pares(nums) {
  const newString = [];
  nums.forEach((i) => {
    if (i % 2 == 0) newString.push(i);
  });

  return newString;
}

console.log(sumArray(numeros));
console.log(promArray(numeros));
console.log(mayusculas(cadenas));
console.log(pares(numeros));
