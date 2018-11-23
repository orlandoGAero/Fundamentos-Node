

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

let getEmpleadoById = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`NO existe un empleado con el ID: ${ id }`);
        } else {
            resolve(empleadoDB);
        }
    });

};

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let  salarioDB = salarios.find(salario => empleado.id === salario.id);

        if (!salarioDB) {
            reject(`NO se encontro un salario para el empleado: ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario

            });
        }
    });


};

getEmpleadoById(10).then(empleado => {

    return getSalario(empleado);

    })
    .then(resp => {
        console.log(`EL salario del empleado ${resp.nombre} es: $${resp.salario}`);
    })
    .catch( err => {
        console.log( err);
    })


