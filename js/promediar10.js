    var c1 = "";
    var a = 0;
    var arreglo1 = [];
    do {
        c1 = prompt("introduce un número");
        arreglo1.push(c1);
        a++;
    } while (a<10);

    for (let i = 0; i <= 10; i++) {
        arreglo1.push(parseInt(arreglo1[i]));
    }

var prom = 0;
    for (let i = 0; i < 5; i++) {
        prom += parseFloat(arreglo1[i]);
        alert(prom);
    }
var promedio = prom / 5;
document.getElementById("promedio").innerHTML=promedio;

var suma = 0;
    for (let i = 5; i < 10; i++) {
        suma += parseFloat(arreglo1[i]);
        alert(suma);
    }
document.getElementById("suma").innerHTML=suma;