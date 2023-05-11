function apostar(){
    //Calcular el numero aleatorio del 1 al 10
    var a=Math.round(Math.random()*10);//Aleatorio del 1 al 10
    document.getElementById("Resultado").value=a;
    var b=document.getElementById("Apostado").value;
    //Validar si acertó numero
    if (a==b){
        document.getElementById("Salida").value="Ganó Apuesta";
    }else{
        document.getElementById("Salida").value="Perdió Apuesta";
    }
}
//Limpiar
function cancel(){
    document.getElementById("apostado").value="";
    document.getElementById("resultado").value="";
    document.getElementById("salida").value="";
  }