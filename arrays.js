// Arrays o lista definida como un conjunto de datos

let nombres = ["Nacho", "Dario", "Daniel"];

let edades = [34, 28, 37, 40, 43];

let valoresDeVerdad = [true, false, false];

let datosVariados = ["Nacho", 34, true, false, edades]

// Consultar un dato concreto dentro de un array

console.log(valoresDeVerdad);
console.log(valoresDeVerdad[0]);
console.log(valoresDeVerdad[1]);
console.log(edades);
console.log(datosVariados[4]);
console.log(datosVariados[4][1]);//si quiero que me muestre el numero 28 el array edades


let notas = [3, 5, 10, 9, 7, 8, 8, 8];

notas.push(1); //el push agrega datos a lo último del array
notas.push(2); //si luego agrego este push en el medio se agrega en el array entre el 1 y el 4
notas.push(4);

//notas.pop(); //si agregamos este metodo pop va a quitar el último dato o sea el 4

let elUltimo = notas.pop(); //si guardamos el metodo en una variable conserva el ultimo dato o sea el 4 

console.log(notas);
console.log(elUltimo);

let notasDos = [3, 5, 10, 9, 7, 8, 8, 8];

notasDos.shift();//el metodo shift el primer dato del array en este caso 3
notasDos.shift();// en este caso saca el 5

console.log(notasDos);


let nuestroArray = ["lo", "que", "vos", "quieras"];
const elemento = nuestroArray[1];
console.log(elemento);  // Mostrará: que

nuestroArray[1] = "Messi";
console.log(nuestroArray);  // Mostrará: ["lo", "Messi", "vos", "quieras"]
