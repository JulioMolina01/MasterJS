'use strict'
/*
Verificar si un numero es par o impar y si ingresa
un caracter invalido volver a pedir
*/


var num1 = parseInt(prompt("Ingresa un numero",0));

while(num1 > 0){
	if ( isNaN(num1) ){
		num1 = 0;
	}else{
		if (num1%2 == 0) {
			console.log("El numero " + num1 + " es par");
		}else{
			console.log("El numero " + num1 + " es impar");	
		}
	}
	num1 = parseInt(prompt("Ingresa un numero",0));
}