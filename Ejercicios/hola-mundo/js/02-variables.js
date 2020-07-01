'use strict'
//uso estricto te obliga a usar correctamente el lenguaje
//se debe usar claramente el lenguaje
//modo estricto no me dejaria declarar una varibla asi --> nombre = "julio";

//Variables
//pues aqui todo normal, concatenacion y ya
var pais = "mexico";
var continente = "latinoamerica";
var numero = 4;
var paisycontinente = pais + ' ' + continente;

//let es valido solo dentro de una funcion o una parte de codigo
//por ejemplo si hay dos variables del mismo nombre pero una let y otra var
//el let solo se ejecuta en la parte de codigo usada y var es global
let prueba = "hola, soy un let";
alert(prueba);
console.log(prueba);

//--------------------------------
console.log(pais, continente);
console.log(continente , numero);
console.log(paisycontinente);

alert(paisycontinente);