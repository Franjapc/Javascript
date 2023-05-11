function prefer(){
    let num=1 //Numero inicial de turno
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese Nombre De usuario")
        if(nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementa turno
        }else{
            alery("Error..No hay datos")
            break;
        }
    }
}
function user(){
    let num=1 //Numero inicial de turno
    let res=true;
    while (num<=99 && res==true){
        nomuser=prompt("Ingrese Nombre De usuario")
        if(nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//incrementa turno
        }else{
            alery("Error..No hay datos")
            break;
        }
    }
}