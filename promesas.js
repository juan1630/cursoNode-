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


let getSalario = (empleado) => {

    
    return new Promise( (resolve, reject ) => {
        
        let salarioDB = salarios.find( salario => salario.id === empleado.id )
        
        if(!salarioDB) {

            reject(`El salario no se encontrò un salario para el usuario ${empleado.nombre}`);

        }else{

            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            })   
            // el resolve solo se dispara una vez   
        }
    

    } );


}




let getEmpleado = (id) => {

    // Las promesas son de esc6
    // son funciones corrientes con la capacidad de ejecutar 2 funciones nativas de ellas mismas que son el resolve y el reject 

    let empleadoDB = empleados.find( empleado =>  empleado.id === id )
    
    return new Promise( (resolve, reject) => {
               if(!empleadoDB){
        
                reject (`El empleado con el id: ${id} no existe`);
                
                // reject (`El empleado con el id: ${id} no existe`);
                // reject (`El empleado con el id: ${id} no existe`);
                // reject (`El empleado con el id: ${id} no existe`);
                // el codigo se sigue ejecutando despues del reject 
            }else {
                resolve( empleadoDB)
                // el resolve solo puede retornar dos argumentos o mas, solo uno
                // si queremos enviar mas usar un objeto
            
            }
    })

}


// getEmpleado(3)
// .then( empleado => {

//     // console.log(empleado);
    
//     getSalario( empleado )
//     .then( salarioDB => {
//         console.log(salarioDB);
        
//     })
//     .catch( error => {
//         console.log(error);
        
//     } )
    
// })
// .catch( error => {
//     console.log(error);
// })   


getEmpleado(1)
.then( empleado => {

    return getSalario(empleado);

} )
.then( empleado => {
        console.log(`El salario de ${empleado.nombre} es de: ${empleado.salario}`);
    }
 )
 .catch( error => {
     console.log(error);
 } )