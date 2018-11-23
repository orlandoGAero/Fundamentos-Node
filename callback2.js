
let empleados = [{
        id: 1,
        nombre: "Orlando"
    }, {
        id: 2,
        nombre: "Sam"
    }, {
        id: 3,
        nombre: "Francis"
    }];

let salarios = [{
        id: 1,
        salario: 2000
    }, {
        id: 2,
        salario: 3000
    }];

let getEmpleadoById = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`NO existe un empleado con el ID: ${ id }`);
    } else {
        callback(null, empleadoDB);
    }
};

let getSalario = (empleado, callback) => {
    
    let  salarioDB = salarios.find(salario => empleado.id === salario.id);   
    
    if( !salarioDB ) {
        console.log(`NO se encontro un salario para el empleado: ${ empleado.nombre }`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
            
        });
    }
};


getEmpleadoById(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, resp) => {

        if (err) {
            return console.log(err);
        }

        console.log(`EL salario del empleado ${resp.nombre} es: ${resp.salario}`);
    });
    
});








