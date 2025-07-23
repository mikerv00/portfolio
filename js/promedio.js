    var c1=0;
    var c2=0;
    var c3=0;
    
    var prom=0;
    var ac=0;
    var c=""
    
    // var c="";
    var r=0;
        do{
            
            c1=prompt("Escribe la calificación 1");
            c2=prompt("Escribe la calificación 2");
            c3=prompt("Escribe la calificación 3");
            prom=(parseFloat(c1)+parseFloat(c2)+parseFloat(c3))/3;
            
            ac=parseFloat(ac)+parseFloat(prom);
            alert("el promedio el alumno es de "+prom);
            
            c=prompt("Deseas sacar otro promedio?");
            r++;
        }while(c!="no");
        var promgrup=ac/r;
        // alert("el promedio grupal es de: "+promgrup);
        document.getElementById("promedio").innerHTML="El promedio del grupo es de "+promgrup;