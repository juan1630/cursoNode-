// setTimeout( ()=> {
//     console.log('Hola mundo');
// }, 3000 );


let getUsuarioById = (id, callback) => {
    
    let usuario = {
        nombre: 'Juan',
        id
    }

    if(id === 10){
        callback(`El usuario con el id: ${id}, no existe`)
    }else{
        callback(null, usuario)
    }

    callback(usuario)

}


getUsuarioById(10, (error, usuario)=> {

    if(error ){
        console.log("No se encontrò");
    }

    console.log('Usuaurio de la db', usuario) ;
});