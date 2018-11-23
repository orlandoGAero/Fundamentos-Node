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

let getEmpleadoById = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`NO existe un empleado con el ID: ${ id }`);
    } else {
        return empleadoDB;
    }

};

let getSalario = async(empleado) => {

    let  salarioDB = salarios.find(salario => empleado.id === salario.id);

    if (!salarioDB) {
        throw new Error(`NO se encontro un salario para el empleado: ${ empleado.nombre }`);
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario

        };
    }

};

let getInformacion = async (id) => {
    let empleado = await getEmpleadoById(id);
    let resp = await getSalario(empleado);
    let {nombre} = resp;
    let {salario} = resp;
    return `${nombre} tiene un salario de $${salario}`;
}

getInformacion(2)
    .then(mensaje=>console.log(mensaje))
    .catch(err=>console.log(err));
