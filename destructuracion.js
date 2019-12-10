let deadpool = {
    nombre : 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre : function () {
        return `${this.nombre} -${this.apellido} - ${this.poder}`;
    }
    //  el this hace referencia al objeto mismo
}

// Hacemo la declaracion de las 3 variable usando la destructuracon 

let { nombre: primerNombre, apellido, poder } = deadpool;


console.log(primerNombre, apellido);
console.log( deadpool.getNombre() )