// - Pide al usuario predecir el resultado de cada operación y luego muestra el resultado real para explicar el comportamiento del hoisting. Recuerda que todas las variables y funciones son hoisted, pero con comportamientos diferentes. Por ejemplo, las variables declaradas con var son inicializadas con undefined, mientras que las variables con let y const no pueden ser accedidas antes de su declaración. Con respecto a las funciones, estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.

// vars call
// alert("Valor de a:", a);
// alert("Valor de b:", b);
// alert("Valor de c:", c);

// functions call
// alert("Resultado de funcionDeclarada:", funcionDeclarada());
// alert("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
// function funcionDeclarada() {
//     return "Función declarada ha sido llamada.";
// }

// const funcionExpresada = function () {
//     return "Función expresada ha sido llamada.";
// };

function validateResA(res){
    switch (res) {
        case "1":
            alert("Correcto");
            break;
        case "2":
            alert("Incorrecto");
            break;
        case "3":
            alert("Incorrecto");
            break;
        case "4":
            alert("Incorrecto");
            break;
        default:
            alert("No digitaste una de las opciones");
            return false;
    }
    return true;
}

function validateResB(res){
    switch (res) {
        case "1":
            alert("Incorrecto");
            break;
        case "2":
            alert("Correcto");
            break;
        case "3":
            alert("Incorrecto");
            break;
        case "4":
            alert("Incorrecto");
            break;
        default:
            alert("No digitaste una de las opciones");
            return false;
    }
    return true;
}

function validateResC(res){
    switch (res) {
        case "1":
            alert("Incorrecto");
            break;
        case "2":
            alert("Incorrecto");
            break;
        case "3":
            alert("Correcto");
            break;
        case "4":
            alert("Incorrecto");
            break;
        default:
            alert("No digitaste una de las opciones");
            return false;
    }
    return true;
}

function user() {
    while (true) {
        var resA = prompt(
            `¿Cuál crees que será el valor de a?
            1. undefined 
            2. cannot access before initialization
            3. null
            4. Imprimirá el valor de la variable
            `
        );
        if (!validateResA(resA)) { break; }
        alert("Valor real de a: undefined");  // Valor real antes de la declaración

        var resB = prompt(
            `¿Cuál crees que será el valor de b?
            1. undefined 
            2. cannot access before initialization
            3. null
            4. Imprimirá el valor de la variable
            `
        );
        if (!validateResB(resB)) { break; }
        alert("Valor real de b: cannot access before initialization");  // Valor real antes de la declaración

        var resC = prompt(
            `¿Cuál crees que será el valor de c?
            1. undefined 
            2. cannot access before initialization
            3. null
            4. Imprimirá el valor de la variable
            `
        );
        if (!validateResC(resC)) { break; }
        alert("Valor real de c: cannot access before initialization");  // Valor real antes de la declaración

        break;
    }

    alert("Ahora se mostrarán los valores después de las declaraciones:");
    alert("Valor de a después de la declaración: " + a);
    alert("Valor de b después de la declaración: " + b);
    alert("Valor de c después de la declaración: " + c);

    alert("Ahora se mostrarán los resultados de las funciones:");

    // Functions call
    alert("Resultado de funcionDeclarada: " + funcionDeclarada());
    alert("Resultado de funcionExpresada: " + funcionExpresada());
}

function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

user();
