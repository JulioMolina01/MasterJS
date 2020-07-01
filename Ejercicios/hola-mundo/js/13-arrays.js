'use strict'

var nombres = ["Julio","Jaquelin","Adriana",10,20,true];
var lenguajes = new Array("Java","PHP","C++","Python");

console.log(nombres);
console.log(lenguajes);

console.log(nombres[0]);
console.log(nombres.length);

/*---------------------
var elemento = parseInt(prompt("¿Que elemento del Array quieres?",0));
if (elemento >= nombres.length) {
	alert("introduce un numero menor que "+nombres.length);

}else{
	alert(nombres[elemento]);
}
*/
document.write("<h1>Lenguajes de programación</h1>");

document.write("<ul>");

//AQUI EL FOR NORMAL
/*for(var i=0; i<lenguaje.length; i++){
	document.write("<li>"+lenguaje[i]+"</li>");	
}*/

//POS AQUI EL FOR EACH
/*lenguajes.forEach((elemento, indice) => {
	document.write("<li>"+indice+" - "+elemento+"</li>");	
});*/

//AQUI EL FOR IN - MAS FACIL
for(let lenguaje in lenguajes){
	document.write("<li>" + lenguajes[lenguaje] + "</li>");	
}

document.write("</ul>");

//BUSQUEDAS EN UN ARRAY
var busqueda = lenguajes.find(lenguaje => lenguaje == "C++");
console.log(busqueda);

var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "C++");
console.log(busqueda2);
