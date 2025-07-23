document.getElementById("opciones").addEventListener('change',figuraSeleccionada);
function figuraSeleccionada() {
    document.getElementById('resultado').innerHTML="Caja de resultado";
    var capas=document.getElementsByTagName("article");
    for (let i = 0; i < capas.length; i++) {
        capas[i].style.display="none"; 
    }
    var articulo=document.getElementById("opciones").value;
    document.getElementById(articulo).style.display="block";
}

var figura={
    base: " ",
    altura:" ",
    radio:" ",
    resultado:" ",

    calcularArea:function () {
        var seleccion = document.getElementById('opciones').value;
        console.log(seleccion);
        switch (seleccion) {
            case 'cuadrado':
                this.base=document.getElementById('lado').value;
                var areacu=this.base*this.base;
                a1=document.getElementById("resultado").innerHTML=areacu;
                console.log(a1);
                break;
            case 'triangulo':
                this.base=document.getElementById('base').value;
                this.altura=document.getElementById('altura').value;
                var areatri=((this.base)*(this.altura))/(2);
                a2=document.getElementById("resultado").innerHTML=areatri;
                break;
            case 'circulo':
                this.radio=document.getElementById('radio').value;
                var areacir=(3.1416)*(this.radio*this.radio);
                a3=document.getElementById("resultado").innerHTML=areacir;
                break;
            default:
                document.getElementById('resultado').innerHTML = "Seleccione una figura";
        }
    },

};