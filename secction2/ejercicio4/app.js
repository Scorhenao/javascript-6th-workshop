console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
    );
    try {
        console.log(funcionDeclarada());
    } catch (error) {
        console.log("Error:", error.message);
    }
    
    console.log(
        "Intentando llamar a 'funcionExpresada' antes de su declaración:"
    );
    try {
        console.log(funcionExpresada());
    } catch (error) {
        console.log("Error:", error.message);
    }
    
    // Declaración de una función declarada
    function funcionDeclarada() {
        return "Función declarada ha sido llamada.";
    }
    
    // Declaración de una función expresada
    const funcionExpresada = function () {
        return "Función expresada ha sido llamada.";
    };
    
    console.log("Llamando a 'funcionDeclarada' después de su declaración:");
    console.log(funcionDeclarada());
    
    console.log("Llamando a 'funcionExpresada' después de su declaración:");
    console.log(funcionExpresada());

//1. ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?

// -Al intentar llamar a `funcionDeclarada() antes de su declaración, JavaScript no arroja un error. Esto se debe a que las funciones declaradas son "elevadas" (hoisted) en JavaScript, lo que significa que son movidas al inicio del contexto de ejecución durante la fase de compilación. Cuando  llamo a `funcionDeclarada()` antes de su declaración, la función ya existe en el contexto, aunque su definición se encuentre abajo en el código.

// -Al llamar a `funcionExpresada()` antes de su declaración, JavaScript arroja un error indicando que `funcionExpresada` no está definida (`funcionExpresada is not a function`). Esto sucede porque las funciones expresadas no son "elevadas" de la misma manera que las declaradas. La asignación de la función a `funcionExpresada` ocurre en tiempo de ejecución y no antes, por lo que intentar llamarla antes de su declaración resulta en un error.

//2. ¿Cómo difieren los resultados entre la función declarada y la función expresada?

// -Función Declarada: Puedo lamar a `funcionDeclarada()` antes y después de su declaración sin recibir un error. Esto es posible debido a la elevación de funciones declaradas, lo que permite que sean accesibles en todo el ámbito en el que están declaradas, independientemente de su posición dentro del código.

// - Función Expresada: Intentar llamar a `funcionExpresada()` antes de su declaración resulta en un error. Esto se debe a que las funciones expresadas se comportan más como variables; la asignación de la función a la variable (`const funcionExpresada = function() {...}`) no ocurre hasta que el código se ejecuta secuencialmente. Por eso la función no está disponible para llamarse antes de esta asignación.

//3. ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?

// Esto refleja cómo JavaScript trata las funciones declaradas y expresadas durante la fase de compilación y ejecución:

// -Funciones Declaradas: Son "elevadas" (hoisted), lo que significa que su declaración se mueve al principio del contexto de ejecución. Por eso puedo llamarlas antes de su declaración en el código sin obtener un error.

// -Funciones Expresadas: No son "elevadas" de la misma manera. La asignación de la función a la variable ocurre en tiempo de ejecución y no antes. Intentar llamarlas antes de esta asignación resulta en un error porque la variable que las contiene no tiene un valor de función definido hasta que se evalúa esa línea de código.

// En resumen, JavaScript maneja las funciones declaradas y expresadas de manera diferente debido a cómo las procesa durante la compilación y ejecución del código. La diferencia en la elevación de las funciones tiene implicaciones importantes en el orden en el que puedes llamarlas dentro de tu programa.