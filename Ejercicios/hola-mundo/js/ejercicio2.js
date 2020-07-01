'use strict'

/*en un bucle mostrar la media y la suma de 
los resultados introducidos por el usuario
hasta que aparezca un negativo*/

var numero = parseInt(prompt("Introduce un numero positivo: ", 0));
var suma = 0;
var count = 0;

while( numero >= 0){
	suma = suma + numero;
 	count++;
	numero = parseInt(prompt("Introduce un numero positivo: ", 1));	
	console.log(suma,count);
}

var media = suma/count;

alert("La suma de todos los numero es: " + suma);
alert("La media de todos los numero es: " + media);