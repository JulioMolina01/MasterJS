'use strict'
/* 
1.- Hacer un programa que pida 6 numeros por pantalla y que los meta en un array
2.-  Mostrar todos los elementos del array en el cuerpo de la pagina y en la consola
3.- Sacar array ordenado
4.- Invertir orden del array y mostrarlo
5.- Mostrar cuantos elementos tiene
6.- Buscar un valor introducido por el usuario que nos diga si esta o no y mostrar indice
*/

var numeros = [];

for(var i = 0; i<6; i++){
    var numeroIngresado = parseInt(prompt("Ingresa un numero: "));
    numeros.push(numeroIngresado);
}

console.log(numeros);
document.write("<ul>");
    for(var i = 0; i<numeros.length; i++){
        document.write("<li>" + numeros[i] + "</li>");
    }
document.write("</ul>");

numeros.sort();
console.log("Arreglo ordenado: " + numeros);
numeros.reverse();
console.log("Arreglo invertido: " + numeros);
console.log("Cantidad de elementos en el arreglo: " + numeros.length)

var numeroBuscado = parseInt(prompt("¿Que numero quieres buscar?: "));
var busquedaNumero = numeros.find(numero => numero == numeroBuscado);
var busquedaIndex = numeros.findIndex(numero => numero == numeroBuscado);

if(busquedaNumero != -1){
    alert("El numero buscado es: " + busquedaNumero + " y su index es " + busquedaIndex);
}else{
    alert("El numero no se encuentra");
}