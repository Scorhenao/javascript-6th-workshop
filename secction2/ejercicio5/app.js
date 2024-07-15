function manejarAsincronia(callback, promesa) {
    promesa
        .then(resultado => {
            callback(null, resultado); // Pasar null como primer argumento para errores
        })
        .catch(error => {
            callback(error); // Manejar el error mediante el callback
        });
}

// Crear la promesa
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const valorRuta = 1; // Cambiar este valor para probar diferentes resultados
        if (valorRuta > 0 && valorRuta < 4) {
            resolve(valorRuta);
        } else {
            reject("La promesa falló");
        }
    }, 2000); // 2 segundos
});

// Definir el callback
let callback = (error, resultado) => {
    if (error) {
        console.error("Error:", error);
        return;
    }
    if (resultado === 1) {
        console.log("¡Promesa cumplida y callback ejecutado!");
    } else if (resultado === 2) {
        console.log("Camino 2");
    } else {
        console.log("Otro camino");
    }
};

// Invocar la función
manejarAsincronia(callback, promesa);
