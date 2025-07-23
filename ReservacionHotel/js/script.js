asignar={
    adultos:0,
    ninios:0,
    habitacion:"",
    maxAdultos:0,
    maxNinios:0,
}
precios={
    precioAdulto:0,
    precioNinio:0,
    precioHabitacion:0,
    subtotal:0,
    iva:0,
    total:0,
}

function seleccionarHabitacion(tipo){
    asignar.habitacion=document.getElementsByClassName('habitacion').value;

    switch (tipo) {
        case "Individual":
            asignar.maxAdultos= 1;
            asignar.maxNinios= 4;
            precios.precioHabitacion = 5000;
            precios.precioAdulto = 300;
            precios.precioNinio = 90;
            break;
        case "Doble":
            asignar.maxAdultos= 2;
            asignar.maxNinios= 3;
            precios.precioHabitacion = 7500;
            precios.precioAdulto = 450;
            precios.precioNinio = 140;
            break;
        case "Triple":
            asignar.maxAdultos= 3;
            asignar.maxNinios= 2;
            precios.precioHabitacion = 10000;
            precios.precioAdulto = 600;
            precios.precioNinio = 180;
            break;
        case "Cuadruple":
            asignar.maxAdultos= 4;
            asignar.maxNinios= 0;
            precios.precioHabitacion = 12500;
            precios.precioAdulto = 750;
            precios.precioNinio = 0;
            break;
        case "Suite":
            asignar.maxAdultos= 6;
            asignar.maxNinios= 2;
            precios.precioHabitacion = 20000;
            precios.precioAdulto = 1200;
            precios.precioNinio = 360;
            break;
        case "Suite-Presidencial":
            asignar.maxAdultos= 8;
            asignar.maxNinios= 2;
            precios.precioHabitacion = 30000;
            precios.precioAdulto = 1800;
            precios.precioNinio = 540;
            break;
    }
    asignar.habitacion=tipo;
    var res=anadirReservacion();
    document.getElementById("mostrar-res").innerHTML=res;
    asignarValores();    
}

function anadirReservacion() {
    return `<article id="registro">
            <h2> Reservación de habitación </h2>
            <h4> Habitación tipo ${asignar.habitacion} </h4>
            
            <div class="div-form">
            <label for="adultos">Adultos:</label>
            <input class="recibir" type="number" id="adultos" name="adultos" min="1" max="8" value="1" onblur="asignarPrecio();" onfocusin="asignarPrecio();">
            <label for="ninos">Niños:</label>
            <input class="recibir" type="number" id="ninios" name="ninios" min="0" max="4" value="0" onblur="asignarPrecio();" onfocusin="asignarPrecio();">
            </div>

            <h4> Precios </h4>
            <div class="div-form">
            <label>Precio Habitación:</label>
            <input class="info-precios" type="text" name="precioHabitacion" id="precioHabitacion" value="$${precios.precioHabitacion}" step="0.01" readonly >
            <label>Precio Adultos:</label>
            <input class="info-precios" type="text" name="precioAdultos" id="precioAdultos" value="" readonly >
            <label>Precio Niños:</label>
            <input class="info-precios" type="text" name="precioNinios" id="precioNinios" value="" readonly >
            </div>

            <div class="div-form">
            <label>Subtotal:</label>
            <input class="info" type="text" name="precio" id="precio" value="" readonly >
            <label>IVA:</label>
            <input class="info" type="text" name="iva" id="iva" value="" readonly >
            <label>Total:</label>
            <input class="info" type="text" name="total" id="total" value="" readonly >
            </div>

            <button id="ticket" onclick="generarTicket();">Calcular precio</button>
        </article>`
}
function asignarValores() {

    document.getElementById("adultos").max=asignar.maxAdultos;
    document.getElementById("ninios").max=asignar.maxNinios;
    document.getElementById("adultos").value=asignar.maxAdultos;
    document.getElementById("ninios").value=asignar.maxNinios;

    
} 

var asignarPrecio=function(){
    asignar.adultos=document.getElementById('adultos').value;
    asignar.ninios=document.getElementById('ninios').value;

    var cAdultos=parseFloat(precios.precioAdulto)*parseFloat(asignar.adultos);
    var cNinios=parseFloat(precios.precioNinio)*parseFloat(asignar.ninios);
    var cHab=parseFloat(precios.precioHabitacion)
    var calculo=cAdultos+cNinios+cHab;

    document.getElementById('precioAdultos').value="$"+cAdultos;
    document.getElementById('precioNinios').value="$"+cNinios;
    document.getElementById('precioHabitacion').value="$"+cHab;
    precios.subtotal=parseFloat(calculo);
    precios.iva=parseFloat(calculo)*0.16;
    precios.total=parseFloat(precios.subtotal)+parseFloat(precios.iva);
    document.getElementById('precio').value="$"+calculo;
    document.getElementById('iva').value="$"+precios.iva;
    document.getElementById('total').value="$"+precios.total;

    localStorage.setItem('cAdultos',JSON.stringify(cAdultos));
    localStorage.setItem('cNinios',JSON.stringify(cNinios));
}

// document.getElementById('ticket').addEventListener('click',function(){generarTicket()});
let generarTicket=function(){

    localStorage.setItem('habitacion',JSON.stringify(asignar.habitacion));
    localStorage.setItem('adultos',JSON.stringify(asignar.adultos));
    localStorage.setItem('ninios',JSON.stringify(asignar.ninios));

    localStorage.setItem('precioHabitacion',JSON.stringify(precios.precioHabitacion));
    
    localStorage.setItem('subtotal',JSON.stringify(precios.subtotal));
    localStorage.setItem('iva',JSON.stringify(precios.iva));
    localStorage.setItem('total',JSON.stringify(precios.total));
    window.open("ticket.html", width="500px", height="800px");
}