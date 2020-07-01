'use strict'
/*Programa que pida dos numero, que nos diga cual
es mayor y cual es menor y si son iguales*/
//si ingresa <= 0 y no es letra, volver a pedir

var numero1Int = parseInt(prompt("Ingresa un numero",1));;
var numero2Int = parseInt(prompt("Ingresa un numero",1));;

while(numero1Int <= 0 || numero2Int <= 0 || isNaN(numero1Int) || isNaN(numero2Int) ){
	numero1Int	= parseInt(prompt("Ingresa un numero",1));
	numero2Int = parseInt(prompt("Ingresa otro numero",2));
}


if (numero1Int == numero2Int) {
	console.log("los numero son iguales")
}else if (numero1Int < numero2Int) {
	console.log(numero2Int + " es mayor que " + numero1Int);
}else{
	console.log(numero2Int + " es menor que " + numero1Int);
}	