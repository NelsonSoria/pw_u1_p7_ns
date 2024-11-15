const cambiarTexto = (idelemento,valor) => {
    document.getElementById(idelemento).innerText=valor;
}

const cambiarColor = (idelemento,valor) => {
    document.getElementById(idelemento).style.color=valor;
}

const cambiarTamanio = (idelemento,valor) => {
    document.getElementById(idelemento).style.fontSize=valor;
}
const agregarElemento = (idelemento,valor) => {
    document.getElementById(idelemento).innerHTML=document.getElementById(idelemento).innerHTML+valor;
}

const conceptosJS = () =>{

    /*
    Tipo de variables en JS
    var: declaraciones globales, ya nose usa por que genera problemas
    let: local,dentro del bloque {},no permite volver a declarar la variabel een el mismo bloque
    const:variables cuyo valor no cambian
    */

    let numbre ="NS";
    let numero1=10;
    let numero2 =10.1
    const PI=3.1416;
    console.log(numbre);
    console.log(numero1);
    console.log(numero2);
    console.log(PI);

    /*Declaración de arreglos */
    const diasSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
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

    const numeroImares=[1,3,5,7,9,11];
    console.log(numeroImares);

    const numeroPares=[2,4,6,8,10];
    console.log(numeroPares);

    const numeros = numeroImares.concat(numeroPares);
    console.log(numeros);

    //Sentencia de control
    for (const dia of diasSemana){
        console.log(dia);
        if(dia==='Viernes'){
            console.log('Ál fin viernes');
        }else {
            console.log('Aun no llega Viernes')
        }
    }

    //manejo de objetos
    const miEstudiante = {
        nombre:"Nelson",
        apellido:"Soria",
        edad:23,
        genero:"Masculino",
        ciudad:"Quito"

    };
    console.log(miEstudiante);
    console.log(miEstudiante.apellido);
    console.log(miEstudiante.nombre);
    if (miEstudiante.edad===23){
        console.log("Tiene 23");
    }else{
        console.log("ya no tiene 23");
    }
    
    miEstudiante.apellido='Paredes';
    console.log(miEstudiante);

    //Declaracion dde atributos pero como objetos

    const miProfesor = {
        nombre:"Henry",
        apellido:"Suarez",
        edad:null,
        direccion:{
            calle:"Av.America",
            casa:"123",
            barrio:"bella vista"
        }

    };
    console.log(miProfesor);
    console.log(miProfesor.nombre);
    console.log(miProfesor.direccion);
    console.log(miProfesor.direccion.barrio);
    miProfesor.direccion.calle="10 de Agosto";
    console.log(miProfesor);

    if(miProfesor.edad === miProfesor.estatura){
        console.log("Son iguales");
    }else {
        console.log("Estos no son lo mismo");
    }

}