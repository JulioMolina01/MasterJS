'use strict'
 
 //funcion anonima
 //funcion que no tiene nombre

 var pelicula = function(nombre){
 	return "la pelicula es "+nombre;
 }

 //callback
 //es una funcion que se ejecuta dentro de otra funcion
 function suma(numero1,numero2,sumaYmuestra,sumaXdos){
 	var sumar = numero1+numero2;

 	/*aqui se le pasa el valor de la suma a las
 	funciones anonimas y tambien se llaman dentro de
 	la funcion principal*/
 	sumaYmuestra(sumar);
 	sumaXdos(sumar);

 	return sumar;
 }


/*aqui se pasan como parametros 2 funciones, las
cuales son sumaYmuestra y sumaXdos

en el ultimo paremetro podemos ver una funcion tipo
flecha, que es lo mismo que una anonima pero mas estetico
*/
suma(5,7,function(dato){
	console.log("La suma es: "+dato);
},dato => {
	console.log("La suma por 2 es: "+(dato*2));
});
