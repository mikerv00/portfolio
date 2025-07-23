	let habitacion = JSON.parse(localStorage.getItem('habitacion'));
	let adultos = JSON.parse(localStorage.getItem('adultos'));
	let ninios = JSON.parse(localStorage.getItem('ninios'));
	let precioHabitacion = JSON.parse(localStorage.getItem('precioHabitacion'));
	let precioAdulto = JSON.parse(localStorage.getItem('cAdultos'));
	let precioNinio = JSON.parse(localStorage.getItem('cNinios'));
	let subtotal = JSON.parse(localStorage.getItem('subtotal'));
	let iva = JSON.parse(localStorage.getItem('iva'));
	let total = JSON.parse(localStorage.getItem('total'));

(
    function(){
	document.getElementById('habitacion').innerHTML=habitacion;
	document.getElementById('adultos').innerHTML=adultos;
	document.getElementById('ninios').innerHTML=ninios;
	document.getElementById('precioHabitacion').innerHTML=precioHabitacion.toFixed(2);
	document.getElementById('precioAdulto').innerHTML=precioAdulto.toFixed(2);
	document.getElementById('precioNinio').innerHTML=precioNinio.toFixed(2);
	document.getElementById('subtotal').innerHTML=subtotal.toFixed(2);
	document.getElementById('iva').innerHTML=iva.toFixed(2);
	document.getElementById('total').innerHTML=total.toFixed(2);
}
)();
