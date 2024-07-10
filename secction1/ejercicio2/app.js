// - Pide al usuario predecir el resultado de cada operación y luego muestra el resultado real para explicar el comportamiento del hoisting. Recuerda que todas las variables y funciones son hoisted, pero con comportamientos diferentes. Por ejemplo, las variables declaradas con var son inicializadas con undefined, mientras que las variables con let y const no pueden ser accedidas antes de su declaración. Con respecto a las funciones, estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.
// vars call
console.log("Valor de a:", a);
// console.log("Valor de b:", b);
// console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

function validateResA(res){
        
}

function validateResB(res){

}

function validateResC(res){

}

function user() {
    while (true) {
        var resA = prompt(
            `¿Cual crees que sera el valor de a?
            1. undefined 
            2. cannot acces before initialization
            3. null
            4. Imprimira el valor de la variable
            `
        );

        var resB = prompt(
            `¿Cual crees que sera el valor de b?
            1. undefined 
            2. cannot acces before initialization
            3. null
            4. Imprimira el valor de la variable
            `
        );

        var resC = prompt(
            `¿Cual crees que sera el valor de c?
            1. undefined 
            2. cannot acces before initialization
            3. null
            4. Imprimira el valor de la variable
            `
        );
    }
}