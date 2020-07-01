'use strict'

alert("Esta es una alerta");



//ALERTAS DE CONFIRMACION
var resultado = confirm("¿Estas segudo de ser master pro?")
console.log(resultado);



//ventana ingreso de datos
var resultado2 = prompt("¿Cual es tu edad?", 18);
console.log(resultado2);



// ejercicio improvisado
//verifica que seas un master pro y si eres mayor de edad
if (resultado == true) {
	console.log("Debes ser mayor de edad");
	var resultado2 = prompt("¿Cual es tu edad?", 0);
	
	if (resultado2 <=18) {
		console.log("Menor de edad :c");
	}
}


