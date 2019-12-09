// cuando se declara con var se puede reasignar el contenido de la variable sin importar el bloque en el que se encuentre
let nombre = 'Wolverine';

if(true){
    let nombre = 'Superman';
    console.log(nombre)
    // Cambia el scope de la variable
}

 nombre = 'Wolverine1';
 nombre = 'Wolverine2';
 nombre = 'Wolverine3';
 nombre = 'Wolverine4';

console.log(nombre);

let i='Hola mundo';

for (let i =0; i<=5 ; i++){

    console.log(`i: ${i}`);
}

console.log(i);
// La i se sale del scope del ciclo for, pero si se declara por fuera adquiere el mismo scope