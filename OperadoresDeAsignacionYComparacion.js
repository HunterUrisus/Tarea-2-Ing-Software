const numero1 = 15;
const numero2 = 20;
const numero3 = "25";

//1. Muestre por consola si el numero1 es mayor o igual que numero2.
if (numero1 > numero2) {
  console.log("1. " + numero1 + " es mayor que " + numero2);
} else {
  console.log("1. " + numero1 + " no es mayor que " + numero2);
}

//2. Muestre por consola si el numero1 es menor o igual que numero2.
if (numero1 < numero2) {
  console.log("2. " + numero1 + " es menor que " + numero2);
} else {
  console.log("2. " + numero1 + " no es menor que " + numero2);
}

//3. Muestre por consola si el numero1 es menor que numero3.
if (numero1 < parseInt(numero3)) {
  console.log("3. " + numero1 + " es menor que " + parseInt(numero3));
} else {
  console.log("3. " + numero1 + " no es menor que " + parseInt(numero3));
}

//4. Muestre por consola si el numero3 es menor que numero2.
if (parseInt(numero3) < numero2) {
  console.log("4. " + parseInt(numero3) + " es menor que " + numero2);
} else {
  console.log("4. " + parseInt(numero3) + " no es menor que " + numero2);
}

//5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
if (numero3 !== numero1) {
  console.log(`5. ${numero3} es estrictamente diferente que ${numero1}`);
} else {
  console.log(`5. ${numero3} no es estrictamente diferente que ${numero1}`);
}

//6. Muestre por consola si el numero1 es estrictamente igual al numero2.
if (numero1 === numero2) {
  console.log(`6. ${numero1} es estrictamente igual a ${numero2}`);
} else {
  console.log(`6. ${numero1} no es estrictamente igual a ${numero2}`);
}
