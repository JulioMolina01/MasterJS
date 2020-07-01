"use strict"

var numero1 = 5;
var numero2 = 10;

var operacion = numero1 + numero2;
//y asi con resta, multiplicacion y division
alert(operacion);

//-------------------------------------------

//tipos de datos
var numeroEntero = 10;
var cadenaTexto = "hola 'pinche' mundo";
var bolean = true;

console.log(cadenaTexto);
console.log(bolean);

//-------------------------------------------
//parceo

var numeroFalso = "10";
console.log(numeroFalso);
Number(numeroFalso);//esta funcion hace de tipo Numero un String
parseInt(numeroFalso);//tambien esta funcion convierte en Int un String

String(numeroEntero);//para pasar un entero a String
console.log(numeroEntero)

//-------------------------------------------
//DETERCTAR EL TIPO DE DATO DE UNA VARIABLE
console.log(typeof numeroEntero);
console.log(typeof numeroFalso);

