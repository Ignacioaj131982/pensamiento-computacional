//las variables son cajas que guardan algo

// let y const para construir variables, son palabras reservadas
//nombreDeUsuario es el nombre de la caja
//signo = para asignar el valor
// y el dato o valor 'Nacho'

let nombreDeUsuario = 'Nacho';

const apellido = 'Arevalo';

let edad = 41;

console.log(nombreDeUsuario);

//se puede cambiar el nombre de la variable y solo se crea una sola vez y la uso y la modifica cuantas veces quiera
// una sola vez ponemos let

nombreDeUsuario = 'Maria';
console.log(nombreDeUsuario);

//con const no se puede modificar el valor ni cambiar
// si intento modificar la variable apellido va a salir un error

//apellido = 'Baravalle'; esto no se puede hacer y salta error porque es una variable constante
//console.log(apellido);

//Tipos de datos
// Strings, numbers y booleanos

let frase = 'hola como estas?';

//Strings: cadena de texto. Se cierra entre comillas

// Numbers: pueden ser negativos, positivos y decimales. Los decimales se usan con puntos

let altura = 176.5; //no siempre es neceserio usar como number solo cuando se opera matematicamente

let numeroDeTelefono = "3416943513"; //aca se usa como string porque no lo voy a usar matematicamente

console.log(typeof altura);

console.log(typeof numeroDeTelefono);

// Booleanos: true o false

let usuarioLogueado = false; // se usan mucho para condicionar nuestro sistema true para respuesta positiva false para negativa

// undefined

let pais = undefined;//cuando todavia el usuario no colocó el dato
console.log(pais);

// null: no hay datos

// Nan: not a number no es un numero
let a = 2;
let b = 'hola';
let resultado = a * b; //esta operacion no se puede hacer porque b no es un numero
console.log(resultado);

//operadores: son simbolos para que js tienen un significado

//matematicos o aritmeticos

let x = 12;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(y % 2); //operador de modulo, lo haces por 2 y si es igual a 0 es par. Sirve para saber si es par o no

//concatenacion
let saludo = "como estas";
let usuario = "Pepe";
console.log("Hola " + usuario + " " + saludo);

//template literals (backsticks) :formas de concatenar ---->  alt+96
console.log(`Hola ${usuario} ${saludo}`); // el ${} sirve para interpolar variables como se ve el ejemplo

//comparacion

let n1 = 1;

let n2 = 2;

let n3 = "1";

console.log(n1 == n2); // comparación simple

console.log(n1 != n2); // comparación simple

console.log(n1 == n3); // da true porque js evalua el dato no el tipo de dato

console.log(n1 === n3); // da false comparación estricta porque evalua el dato y el tipo de dato en este caso number y string

// Es recomendable utilizar siempre las comparaciones estrictas para no generar confusion

console.log(n1 > n2);

console.log(n1 < n2);

console.log(n1 <= n2);

console.log(n1 >= n2);

// Las comparaciones no son solo en numeros pueden realizarse con string

let palabra = "Pepe"

console.log( palabra === "Pepe");


//logicos ---> && y || ---> ! not

console.log("---------");

let j = true

let loged = false

console.log( !loged); // invierte el boolenao si es false y true y viceversa