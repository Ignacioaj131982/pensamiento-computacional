// SWITCH CASE ---> se utiliza cuando hay mas de cinco opciones -no se usa mucho-

// IMPUESTO INICIAL ---> 200

// AUDI = 100
// FORD ---> 25
// FIAT ---> 20
// VOLVO ---> 40
// RENAULT ---> 30
// VW ---> 50

/*const calcularImpuesto = (marca) => {
    
    let impuesto = 200
    

    if (marca === AUDI) {
        impuesto = impuesto + 100
        
        /*impuesto += 100 es la versión resumida de la variable de arriba 
        
    } else if (marca === "vw") {
        impuesto += 50
    } else if (marca === "RENAULT") {
        impuesto += 30
    }
    
    return impuesto

}

let resultadoImpuesto = calcularImpuesto("RENAULT")
console.log(resultadoImpuesto);*/

// SWITCH CASE 

const calcularImpuesto = (marca) => {
    let impuesto = 100
    switch(marca) {
        case "audi":
        impuesto += 100;
        break
        case "renualt":
        impuesto += 75;
        break
        case "vw":
        impuesto += 40;
        break // se utiliza break porque en switch case sigue mostrando los resultados hasta el ultimo
        default:
        impuesto = "No paga impuestos"    

    }

    return impuesto
}

let resultadoImpuesto = calcularImpuesto("vw")
console.log(resultadoImpuesto);



