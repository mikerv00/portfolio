document.getElementById("cambiar").addEventListener('change',cambiarCategoria);

// document.getElementById("p").value;
function cambiarCategoria() {
    let capas=document.getElementsByTagName("article");
    for (let i = 0; i < capas.length; i++) {
        capas[i].style.display="none";
        
    }
    var articulo=document.getElementById("cambiar").value;
    document.getElementById(articulo).style.display="block";
}


var fotografias=function(nombrefoto){
    document.getElementById('foto').src="img/"+nombrefoto+".png";
}
var meme=function(nombrefoto){
    document.getElementById('mostrar1').src="img/perro"+nombrefoto+".jpg";
}

var meme2=function(nombrefoto){
    document.getElementById('mostrar2').src="img/dibujo"+nombrefoto+".jpg";
}

var meme3=function(nombrefoto){
    document.getElementById('mostrar3').src="img/humano"+nombrefoto+".jpg";
}

function texto() {
    var texto = document.getElementById("texto").value;
    var mostrar = document.getElementsByClassName("mo");
    for (var i = 0; i < mostrar.length; i++) {
      mostrar[i].nextElementSibling.firstElementChild.innerHTML = texto;
    }

    // var textoInput = document.getElementById("texto");
        var textoMeme=document.getElementById("txt");
        var textoMeme2=document.getElementById("txt2");
        var textoMeme3=document.getElementById("txt3");
        var tamanoInput = document.getElementById("tamano-input");
        var tipoInput = document.getElementById("tipo-input");
        
        textoMeme.style.fontSize = tamanoInput.value + "px";
        textoMeme.style.fontFamily = tipoInput.value;
        textoMeme2.style.fontSize = tamanoInput.value + "px";
        textoMeme2.style.fontFamily = tipoInput.value;
        textoMeme3.style.fontSize = tamanoInput.value + "px";
        textoMeme3.style.fontFamily = tipoInput.value;
  }



color=document.getElementsByClassName('late');
color2=document.getElementsByTagName('art');
color.setAttribute('class','lat');
color2.setAttribute('class','prin');