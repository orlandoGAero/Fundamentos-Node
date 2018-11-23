/* 
    *Async Await
*/

// let getNombre = async() => {
//     throw new Error('NO se encontro...');
//     return 'Orlando'
// };

let getNombre = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Orlando');
        }, 3000)
    })
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo()
.then( nombre => console.log(nombre))
