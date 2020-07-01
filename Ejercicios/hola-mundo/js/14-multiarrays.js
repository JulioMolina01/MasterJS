'use strict'

var categorias = ['accion','terror','comedia'];
var peliculas = ['rapido y furioso','la vida es bella','saw'];

var cine = [categorias,peliculas];

//ESTE METODO ORDENA EL ARRAY EN ORDEN ALFABETICO DE LA A a LA Z
peliculas.sort();
console.log(peliculas);

//REINVERTIR ORDEN DE UN ARRAY
peliculas.reverse();
console.log(peliculas);

//console.log(cine[0][2]);
//console.log(cine[1][1]);

/*  AGREGAR ELEMENTO EN UN ARREGLO
do{
    var elemento = prompt("introduce una nueva pelicula:");
    peliculas.push(elemento);
}while(elemento != "acabar");

peliculas.pop();//pop borra el ultimo elemento del array
peliculas[0] = undefined; //asigna undefine al elemento de la pos 0
*/


//ELIMINAR ELEMENTO DE UN ARREGLO
var toDelet = prompt("Que pelicula deseas eliminar?: ");
var indice = peliculas.indexOf(toDelet);
if(indice > -1){
    peliculas.splice(indice,1);
}
console.log(peliculas);

//ESTE METODO CONVIERTE TODO EL ARREGLO EN UN STRING Y CADA ELEMENTO LO DIVIDE POR COMAS
var pelisToString = peliculas.join();
console.log(pelisToString);

//ESTE METODO INGRESA CADE ELEMENTO EN UN ARRAY, EN ESTE CASO CADA ELEMENTO SEPARADO POR UNA COMA Y ESPACIO
var cadena = "chinga, tu, madre";
var cadenaArray = cadena.split(", ");
console.log(cadenaArray);