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



let getSalario = async (empleado) => {

    
        
        let salarioDB = salarios.find( salario => salario.id === empleado.id )
        
        if(!salarioDB) {

            throw new Error (`El salario no se encontrò un salario para el usuario ${empleado.nombre}`);

        }else{

            return {
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            } 
        }
    
}

let getEmpleado = async (id) => {

 
    let empleadoDB = empleados.find( empleado =>  empleado.id === id )
    

               if(!empleadoDB){
        
                throw new Error (`El empleado con el id: ${id} no existe`);
                
            } else {

                return( empleadoDB)
            
            }
}


let getInfo = async (id )=> {

    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)

    return `${resp.nombre } - tiene un salario de: ${resp.salario}`;
}



getInfo(1)
.then( mensaje => {
    console.log(mensaje);
})
.catch( error => {
    console.log(error);
})