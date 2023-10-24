function convertirInchaCm (x){
    let Inch = 2.54
    return Inch * x

}

let resultado = convertirInchaCm(4)
console.log(resultado);

function generarUrl (dominio) {
return `www.${dominio}.com`
}

let resultado2 = generarUrl ("sala10")
console.log(resultado2);

function conAdmiracion (frase) {
    return `¡${frase}!`
    }

    let resultado3 = conAdmiracion ("Hola Mundo");
    console.log(resultado3);

function edadDeLosPerros (anios) {
    let edad = anios * 7
    return edad
}

let resultado4 = edadDeLosPerros (11)
console.log(resultado4);

function mesTrabajo (sueldo) {
    let horastotales = 40;
    return sueldo / horastotales
}

let resultado5 = mesTrabajo (8000)
console.log(resultado5);

function calculadorIMC (altura, peso) {
    let imc = peso / (altura * altura) 
    return imc
}

let resultado6 = calculadorIMC (1.76, 96)
console.log(resultado6);

function convertirMayuscula (holamundo){
return holamundo.toUpperCase()
}

let resultado7 = convertirMayuscula ("hola mundo")
console.log(resultado7);

function tipoDeDato (dato) {
let tipo = typeof dato
return tipo

}

let resultado8 = tipoDeDato (true)
console.log(resultado8);

function radioCirculo (radio) {
let circulo = radio * Math.PI * 2
return circulo
}

let resultado9 = radioCirculo (10)
console.log(resultado9);