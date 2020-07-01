'use strict'
/*
  suma, resta, multiplicacion, division
  si esta mal un numero volver a pedirlo
  dos numero
*/

var num1 = parseInt(prompt("Ingresa un numero: ",0));
var num2 = parseInt(prompt("Ingresa un numero: ",0));

while( isNaN(num1) || isNaN(num2) ){
	num1 = parseInt(prompt("Ingresa un numero: ",0));
	num2 = parseInt(prompt("Ingresa un numero: ",0));	
}

var suma = num1 + num2;
console.log(num1 + " + " + num2 + " = " + suma);
document.write(num1 + " + " + num2 + " = " + suma + "<br>");
alert(num1 + " + " + num2 + " = " + suma);

var resta = num1 - num2;
console.log(num1 + " - " + num2 + " = " + resta);
document.write(num1 + " - " + num2 + " = " + resta + "<br>");
alert(num1 + " - " + num2 + " = " + resta);

var multi = num1 * num2;
console.log(num1 + " * " + num2 + " = " + multi);
document.write(num1 + " * " + num2 + " = " + multi + "<br>");
alert(num1 + " * " + num2 + " = " + multi);

var div = num1 / num2;
console.log(num1 + " / " + num2 + " = " + div);
document.write(num1 + " / " + num2 + " = " + div + "<br>");
alert(num1 + " / " + num2 + " = " + div);
