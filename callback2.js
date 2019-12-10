let empleados = [{
    id:1,
    nombre: 'Juan'
}, {
    id: 2,
    nombre: 'Katia'
},{
    id: 3,
    nombre: 'Fernando'
}]


let salarios = [{
    id:1,
    salario: 1000
}, 

{
    id:2,
    salario:1500
}];


let getEmpleado = (id, callback) => {


    let empleadoDB = empleados.find( empleado =>  empleado.id === id )
    
    if(!empleadoDB){
        callback (`El empleado con el id: ${id} no existe`);
    }else {
        callback(null, empleadoDB)
    }

}


let  getSalario = (empleado, callback) => {

    let salarioDB = salarios.find( salario =>  salario.id === empleado.id )

    if(!salarioDB) {
        callback(`El salario no se encontrò un salario para el usuario ${empleado.nombre}`);
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        })   
    }



}

getEmpleado(1, (error, empleado ) =>{

    if( error ){
        return console.log("El usuario no existe");

    }
    getSalario(empleado, (error, resp ) => {
        if(!error){
            console.log(error);
        }

        console.log(`El salario de: ${ resp.nombre } es de $ ${resp.salario}`);
    })

} );

