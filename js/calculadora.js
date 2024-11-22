var num1=-1;
var num2=-1;
var op = null;
function setearValor(valor){
    let valorActual=document.getElementById("id-display").innerText;
    console.log(valorActual);
    document.getElementById("id-display").innerText=valor;
}
function setearValorConcat(valor){
    let valorActual=document.getElementById("id-display").innerText;
    console.lot(valorActual);
    document.getElementById("id-display").innerText + valor;
}
function limpiarDisplay () {
    document.getElementById("id-display").innerText="";
}

const recibirValor = (valor) => {
    this.num1=valor
    console.log(num1)
    if (num1!==-1){
        this.num2=valor;
        console.log(num2)
        setearValor(num2);
    }else {
        setearValor(num1)
    }

}

function recibirOP(valor) {
    console.log(valor)
    this.op=valor
}
function resultado (){
    let resul =0;
    if (op===`x`){
        resul= num1 * num2;
    }
    if (op===`%`){
        resul= num1 / num2;
    }
    if (op===`+`){
        resul= num1 + num2;
    }
    if (op===`-`){
        resul= num1 - num2;
    }
    setearValor(resul);
}

