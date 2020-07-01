'use strict'
/*
Mostrar todos los numeros impares entre dos numeros
introducidos por el usuario
*/
var num1 = parseInt(prompt("Ingresa un numero: ", 0));
var num2 = parseInt(prompt("Ingresa un segundo numero: ", 0));
var contador = 0;

for (var i = num1; i <= num2; i++) {

	var impar = (2*i)+1;

	if (impar <= num2) {
		console.log(impar);
	}	

}