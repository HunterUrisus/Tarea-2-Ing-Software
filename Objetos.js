//1. **Crear un objeto de persona**:
//Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género.Luego, muestra la información de esa persona por la consola.
const persona = {
  Nombre: "Daniel",
  Edad: 21,
  Genero: "Hombre",
};

console.log(persona);

//2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no.
//Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const caja = {
  Cuadernos: ["Lenguaje", "Matematicas"],
  Lapices: ["Rojo", "Azul"],
  Fotografias: ["Perro", "Paseo Pucón 2009"],
  Estado: "Buen estado",
};

console.log(caja);
console.log();

console.log("Cuadernos: " + caja.Cuadernos);
console.log(typeof caja.Cuadernos);
console.log("Lapices: " + caja.Lapices);
console.log(typeof caja.Lapices);
console.log("Fotografias: " + caja.Fotografias);
console.log(typeof caja.Fotografias);
console.log("Estado: " + caja.Estado);
console.log(typeof caja.Estado);
