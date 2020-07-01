'use strict'
/*
mostrar todos los numeros que hay entre
dos numeros que pedimos al usuario
ejemplo que numeros hay del 1 al 10;
*/
var numero1 = parseInt(prompt("Introduce el primer numero" ,0));
var numero2 = parseInt(prompt("Introduce el segundo numero" ,0));


for (var i = numero1; i <= numero2; i++) {
	//alert(i);
	console.log(i);
}
