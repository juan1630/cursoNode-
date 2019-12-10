/*


*/


// let getNombre =  async ()=> {

    // cualquier error que se ejecute en la funcion dispara el catch
    // para los errores personalizados se necesita el 
    // throw new Error ('mensaje')

    // return `Hola Juan`;
// }

// con solo poner el async es lo mismo que retornar una promesa 



let getNombre = ()=> {
    return new Promise( (resolve, reject ) => {
        
        setTimeout( ()=> {
            resolve('Juan')
        }, 3000 )

    });
}



let saludo = async ()=> {
// el async si puede ir solo el await por fuerza necesita el async en la funcion

    let nombre = await getNombre();
    return `Hola ${nombre}`;

}

// getNombre().then( resp => {
//     console.log(resp);
// })
// .catch( error => {
//     console.log(error);
// } )




saludo()
.then( mensaje => {
    console.log(mensaje);
})
.catch( e => {
    console.log(e);
})