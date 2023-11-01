function loro(texto) {
    for (let i = 0; i < 5; i++) {
      console.log(texto);
    }
  }
  
  const textoParaRepetir = "Hola, soy un loro.";
  loro(textoParaRepetir);

  function tablaDeMultiplicar(numero) {
    let i = 1;

    while (i <= 10)  {
        console.log(numero + " x " + i + " = " + (numero * i));
   i++;
    }
}

const numeroElegido = 5; 
tablaDeMultiplicar(numeroElegido);