// - **Interacción del Usuario:** El script solicitará, a través de un prompt, que el usuario adivine si es posible acceder
// a cada una de las variables (globalVariable, functionVariable, blockVariable) en diferentes partes del código.
// - **Respuesta del Usuario:** Deberás ingresar tus respuestas en el prompt() indicando si crees que el acceso a cada 
// variable es posible y por qué.

// - **Validación de Respuestas:** Después de ingresar tus respuestas, el script evaluará y mostrará si cada una de ellas
// es correcta o incorrecta, y proporcionará una explicación detallada de los resultados.

// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
    // Function Scope
    var functionVariable = "Soy una variable local.";

    if (true) {
        // Block Scope
        let blockVariable = "Soy una variable de bloque.";
        console.log("Dentro del bloque:", blockVariable);
    }

    console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

function validateResponses(responses) {
    const contieneUno = responses.find(res => res === "1");
    const contieneDos = responses.some(res => res === "2");

    if (contieneUno) {
        return 1; // Respuesta correcta (SI)
    } 
    if (contieneDos) {
        return 2; // Respuesta incorrecta (NO)
    } 
}

function consultUser() {
    let corrects = [];
    let incorrects = [];

    while (true) {
        const explanation = [
            {
                question: "SI es posible acceder en cualquier parte del codigo a la variable globalFunction porque se carga en todos los lados del codigo al ser global"
            },
            {
                question: "NO es posible acceder en cualquier parte del codigo a la variable functionVariable porque esta solo funciona dentro de la funcion"
            },
            {
                question: "NO es posible acceder en cualquier parte del codigo a la variable blockVariable porque esta solo funciona dentro de las estructuras de control"
            }
        ];

        const userRes1 = prompt(String(
            `¿Crees que se puede acceder a globalVariable desde cualquier parte del codigo?\n1. SI\n2. NO \n\n¿Por qué?`
        ));

        const userResValidated1 = validateResponses([userRes1]);
        console.log(userResValidated1);
        if (userResValidated1 === 1) {
            corrects.push(1);
        }
        if (userResValidated1 === 2) {
            incorrects.push(1);
        } 

        const userRes2 = prompt(String(
            `¿Crees que se puede acceder a functionVariable desde cualquier parte del codigo?\n1. SI\n2. NO\n¿Por qué?`
        ));

        const userResValidated2 = validateResponses([userRes2]);
        if (userResValidated2 === 1) {
            incorrects.push(1);
        } 
        if (userResValidated2 === 2) {
            corrects.push(1);
        } 

        const userRes3 = prompt(String(
            `¿Crees que se puede acceder a blockVariable desde cualquier parte del codigo?\n1. SI\n2. NO\n¿Por qué?`
        ));

        const userResValidated3 = validateResponses([userRes3]);
        if (userResValidated3 === 1) {
            incorrects.push(1);
        }
        if (userResValidated3 === 2) {
            corrects.push(1);
        }

        // Mostrar resultados después de todas las preguntas
        const totalCorrects = corrects.length;
        const totalIncorrects = incorrects.length;

        let resultsText = `
            Respuestas correctas: ${totalCorrects}
            Respuestas incorrectas: ${totalIncorrects}
            
            Explicación de respuestas:
            ${explanation[0].question}
            ${explanation[1].question}
            ${explanation[2].question}
        `;

        alert(resultsText);

        // Salir del bucle
        break;
    }
}

consultUser();
