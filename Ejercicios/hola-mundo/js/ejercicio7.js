'use strict'

/*
tabla de multiplicar de un numero introducido
*/

var num1 = parseInt(prompt("Introduce un numero: ",0));

for(var i = 1; i<=10; i++){
	var multi = i*num1;
	console.log(i + " x " + num1 + " = " + multi);	
}