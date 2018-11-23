

//setTimeout( () => {
//    console.log("HOla callback"); 
//}, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: "Orlando",
        id
    }

    if (id === 20) {
        console.log(`El usuario con id: ${id}, no existe en la BD`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(2, (err, usuario) => {
    
    if( err ) {
        return console.log(err);
    }
    console.log("Usuario de base de datos: ", usuario);
});