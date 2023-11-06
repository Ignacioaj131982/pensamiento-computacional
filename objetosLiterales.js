let curso = {
    cantidadDeAlumnos : 32,
    docentes: ["Nacho" , "Javier"],
    horario: "de 19 a 21 hs",
    notificaciones: function() {
        return "El horario de la cursada es " + this.horario; // hace referencia al objeto creado es decir curso
    }

}

console.log(curso);// muestra por consola cantidadDeAlumnos: 32, docentes: Nacho, Javier y horario: de 19 a 21 hs

console.log(curso.cantidadDeAlumnos); // a través del dot notation me consolea especificamente en este caso cantidadDeAlumnos

console.log("La cantidad de alumnos de este curso es de " + curso.cantidadDeAlumnos); // de esta forma es más prolijo

//Además de propiedades nuestro objeto puede realizar acciones. Por lo tanto debemos definir metodos dentro de nuestro objeto

console.log(curso.notificaciones());

