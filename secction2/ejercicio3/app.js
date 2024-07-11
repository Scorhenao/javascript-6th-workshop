function crearSumador(numero) {
    return function(otroNumero) {
        return numero + otroNumero;
    };
}

// Creación de diferentes sumadores
const sumarCinco = crearSumador(5);
const sumarDiez = crearSumador(10);
const sumarVeinte = crearSumador(20);

// Uso de las funciones retornadas para realizar varias sumas
console.log(sumarCinco(3));  // Debería imprimir 8
console.log(sumarCinco(10)); // Debería imprimir 15

console.log(sumarDiez(3));   // Debería imprimir 13
console.log(sumarDiez(10));  // Debería imprimir 20

console.log(sumarVeinte(3)); // Debería imprimir 23
console.log(sumarVeinte(10)); // Debería imprimir 30
