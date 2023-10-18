let usuario = 'Pepe';
const presupuestoMinimo = 5;
const presupuestoMaximo = 10;
let tiempoDeViaje = 30;
let disponibilidadDelChofer = true;
let nombreDelChofer = "Arnie";
let nombreDestino = "La Esmeralda"
if (disponibilidadDelChofer) {
    console.log(`${usuario} va con USD ${presupuestoMinimo} a la fiambreria ${nombreDestino} el viaje dura ${tiempoDeViaje} minutos. El chofer se llama ${nombreDelChofer} y cobra un maximo de USD${presupuestoMaximo} `);
    
} else {
    console.log(`no hay choferes entonces ${usuario} no pudo ir a la fiambreria ${nombreDestino} por ${presupuestoMinimo}`);
}
