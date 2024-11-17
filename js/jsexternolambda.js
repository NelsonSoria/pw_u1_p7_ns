const cambiarTexto = (idelemento, valor) => {
    document.getElementById(idelemento).innerText = valor;
}

const cambiarColor = (idelemento, valor) => {
    document.getElementById(idelemento).style.color = valor;
}

const cambiarTamanio = (idelemento, valor) => {
    document.getElementById(idelemento).style.fontSize = valor;
}
const agregarElemento = (idelemento, valor) => {
    document.getElementById(idelemento).innerHTML = document.getElementById(idelemento).innerHTML + valor;
}

const conceptosJS = () => {

    /*
    Tipo de variables en JS
    var: declaraciones globales, ya nose usa por que genera problemas
    let: local,dentro del bloque {},no permite volver a declarar la variabel een el mismo bloque
    const:variables cuyo valor no cambian
    */

    let numbre = "NS";
    let numero1 = 10;
    let numero2 = 10.1
    const PI = 3.1416;
    console.log(numbre);
    console.log(numero1);
    console.log(numero2);
    console.log(PI);

    /*Declaración de arreglos */
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]);
    //dentro de JS el concepto de nulo o no exitencia:undifined

    //null !==undefined
    //null existe pero su valor es null, a diferencia del undifined
    let valor = null;
    console.log(valor);

    // ===
    // !==

    //Guarda al final del arreglo
    diasSemana.push('Sabado');
    console.log(diasSemana);

    //Guarda al inicio del arreglo
    diasSemana.unshift('Dias');
    console.log(diasSemana)

    const numeroImares = [1, 3, 5, 7, 9, 11];
    console.log(numeroImares);

    const numeroPares = [2, 4, 6, 8, 10];
    console.log(numeroPares);

    const numeros = numeroImares.concat(numeroPares);
    console.log(numeros);

    //Sentencia de control
    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Ál fin viernes');
        } else {
            console.log('Aun no llega Viernes')
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre: "Nelson",
        apellido: "Soria",
        edad: 23,
        genero: "Masculino",
        ciudad: "Quito"

    };
    console.log(miEstudiante);
    console.log(miEstudiante.apellido);
    console.log(miEstudiante.nombre);
    if (miEstudiante.edad === 23) {
        console.log("Tiene 23");
    } else {
        console.log("ya no tiene 23");
    }

    miEstudiante.apellido = 'Paredes';
    console.log(miEstudiante);

    //Declaracion dde atributos pero como objetos

    const miProfesor = {
        nombre: "Henry",
        apellido: "Suarez",
        edad: null,
        direccion: {
            calle: "Av.America",
            casa: "123",
            barrio: "bella vista"
        }

    };
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.barrio);
    miProfesor.direccion.calle = "10 de Agosto";
    console.log(miProfesor);

    if (miProfesor.edad === miProfesor.estatura) {
        console.log("Son iguales");
    } else {
        console.log("Estos no son lo mismo");
    }

    //Arreglo de objetos
    const est1 = {
        nombre: "Nelson",
        apellido: "Soria",
        edad: 23
    }
    const est2 = {
        nombre: "Patricio",
        apellido: "Paredes",
        edad: 22
    }
    const est3 = {
        nombre: "Henry",
        apellido: "Santillan",
        edad: 238
    }
    const arregloEstu = [est1, est2, est3];
    console.log(arregloEstu);
    console.log(arregloEstu[1]);
    console.log(arregloEstu[1].nombre);

    const arregloEstu2 = [{ nombre: "Carlos", apellido: "Pasquel", edad: 34 },
    { nombre: "Anita", apellido: "Camuendo", edad: 33 },
    { nombre: "Richard", apellido: "Noquez", edad: 39 }
    ]
    console.log(arregloEstu2);
    console.table(arregloEstu2);

    //uso del pop elimina el utlimo elemento que esta en el array
    console.log("USO DEL POP");
    const estudiante = arregloEstu2.pop();
    console.log(estudiante);

    console.table(arregloEstu2);


    //Desestructuracion de arreglos - Consitente en separa en partes cada una de la las pocisiones del arreglo
    const colores = ['Amarillo', 'Azul', 'Verde', 'Rojo', 'Rosado'];
    const [c1, c2, c3, c4, c5] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);

    const [m1, m2, m3, m4, m5, m8] = ['enero', 'febrero', 'marzo', 'abril', 'mayo']
    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m8);

    //Desestructuracion de objetos: Aplica a todo el codigo js

    console.log("Desestructuracion de objetos");

    const automovil = {
        marca: 'Toyota',
        modelo: 'Pruis',
        anio: 2024,
        color: 'plateado'
    }

    //no importa el orden- viene dado por nombre del atributo, no por la posicion
    const { marca, modelo, anio, color } = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);

    desestructuracion(automovil);
    const { nombreP, raza, estatura } = { nombreP: "Perro", raza: "pastor", estatura: 120 };
    console.log(nombreP);
    console.log(raza);
    console.log(estatura);

    //declaren un objeto con un atributo completo 
    // y vamos a desestructurar

    const universidad = {
        nombre: "UCE",
        estudiantes: 12200,
        rector: {
            nombreR: "NombreR",
            apellidoR: "ApellidoR"
        }
    }

    /*
    //En dos pasos
    const {estudiantes,nombre,rector}=universidad;
    const{nombreR}= rector;
    console.log(nombreR);
    */
    const { estudiantes, nombre, rector: { nombreR, apellidoR } } = universidad;
    console.log(nombreR);
    console.log(apellidoR);


}
//const desestructuracion = (automovil) => {
const desestructuracion = ({ marca, modelo, anio, color }) => {
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);

}