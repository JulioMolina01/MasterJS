'use strict'
/*
Mostrar todos los numeros divisores de un numero
*/

var num1 = parseInt(prompt("Ingresa un numero",0));

for(var i = 0; i <= num1; i++) {

	var divisor = num1%i;
	var division = num1/i;

	if (divisor == 0) {
		console.log("El divisor es: " + i + " y la division es: " + division);
	}

}