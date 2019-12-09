console.log('Inicio del programa');


setTimeout(()=> {
    console.log("Primer time out")
}, 3000);

// Se ejecuta al ultimo ya que se tiene que ejecutar despues de los tres segundos 

setTimeout(()=> {
    console.log("Seundo time out")
}, 0);


setTimeout(()=> {
    console.log("Tercer time out")
}, 0);

console.log("Fin del programa")

// Commo no es una tarea asincrona se ejecuta de forma directa