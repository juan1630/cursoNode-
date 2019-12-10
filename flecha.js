// function sumar ( a, b ){
//     return a+b;
// }


// let sumar = (a,b) => a+b;


// let saludar = () =>  `Hola mundo`;

let saludar = nombre => `Hola ${nombre}`;


let deadpool = {
    nombre : 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre ()  {
        return `${this.nombre} -${this.apellido} - ${this.poder}`;
    }
    //  el this hace referencia al objeto mismo
}
// las funciones de flecha apuntan al objeto global 

console.log( saludar('Juan') );

console.log( deadpool.getNombre() );