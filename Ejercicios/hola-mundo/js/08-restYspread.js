'use strict'

//parametros REST

function listaFrutas(fruta1, fruta2, ...restoDeFrutas){
	console.log("Fruta 1: " + fruta1);
	console.log("Fruta 2: " + fruta2);
	console.log("Resto de frutas: " + restoDeFrutas);
	console.log(restoDeFrutas);
}

listaFrutas("naranja","pera", "melon", "sandia", "Papaya");

//pasar las 2 frutas de frutas a listaFrutas
var frutas = ["naranja","pera"];
listaFrutas(...frutas,    "melon", "sandia", "Papaya");
