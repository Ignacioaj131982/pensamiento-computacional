// Ejemplos de lenght ---> muestra la cantidad de caracteres que posee el string

let mensaje = "gran dia para practicar js"; 

console.log(mensaje.length); // ---> devuelve 26

// Ejemplos de indexOf ---> muestra en que posicion esta la palabra que indicas

console.log(mensaje.indexOf("dia")); // ---> devuelve 5 que es donde empieza "dia" 012345

console.log(mensaje.indexOf("pica")); // ---> devuelve -1 cuando no encuentra la palabra solicitada en el string

// Ejemplos de Slice // ---> corta la parte que quieras del string

console.log(mensaje.slice(0, 8)); // ---> devuelve el string "gran dia" porque corta desde donde queremos empezar hasta donde queremos terminar

console.log(mensaje);

// Ejemplo de Trim ---> quita los espacios que hay entre antes y al final del string

let otroMensaje = "   Me gusta aprender JS   ";

console.log(otroMensaje.trim());

// Ejemplo de Split ---> hace que el string se convierta en un array

console.log(otroMensaje.split(" ")); //---> se debe poner el separador del espacio para separar cada valor

otroMensaje.split(" ");

// Ejemplo de Replace ---> reemplaza una parte del texto por otra

console.log(otroMensaje.replace("gusta", "encanta")); // ---> cambia me gusta por me encanta


let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11)
console.log(licenciada);


console.log(frase.length);