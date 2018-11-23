
//function sumar (a, b) {
//    return a + b;
//}

//let sumar = (a, b) => a + b;

//let saludar = () => 'Hola Mundo';

//let saludar = nombre => `Hola: ${nombre}`;
//console.log(sumar(20, 10));

//console.log( saludar("Orlando") );

let flash = {
    nombre: 'Barry',
    apellido: 'Allen',
    poder: 'Supervelocidad',
    getNombre() {
        return `${ this.nombre } ${ this.apellido} - poder: ${ this.poder}`
    }
};

console.log( flash );