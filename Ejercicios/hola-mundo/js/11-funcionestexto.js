'use strict'

//transformacion de textos
var numero = 10;
var texto = "julio molina cesar molina      ";
var texto2 = "martinez molina";

var dato = numero.toString();

console.log(dato, typeof(dato));
console.log(texto.toUpperCase());
console.log(texto2.toLowerCase());


//calcular longitud de un string
var nombre = "";
var ape = "cacaroto";
var num = 12;
var frutas = ["hola","puto"];

console.log(nombre.length);
console.log(ape.length);
console.log(num.length);
console.log(frutas.length);

//concatenar textos
//var texTotal = texto+texto2;
var texTotal = texto.concat(texto2);
console.log(texTotal);


//buscar palabra dentro de un string

//var busqueda = texto.indexOf("molina");
//var busqueda = texto.search("molina");
//var busqueda = texto.match(/molina/g);//busca esa palabra en el string y lo guarda en un arreglo cada vez que lo encuentra
//var busqueda = texto.substr(6,10);//obtiene los 10 caracteres desde la posicion 6 del string

//var busqueda = texto.charAt(10);//busca el caracter en esa posicion
//var busqueda = texto.startsWith("julio");//busca si el string empieza con esa palabra
//var busqueda = texto.endsWith("molina");//busca si el string termina con esa palabra
var busqueda = texto.includes("julio");//menciona si existe esa palabra dentro del string

console.log(busqueda); 

//remplazar textos
var busqueda = texto.replace("julio","Agustin");//
console.log(busqueda); 

//separar textos desde ese numero o posicion del string
var busqueda = texto.slice(5);
console.log(busqueda); 

//divide textos y guarda cada palabra en una posicion de unarray
var busqueda = texto.split(" ");
console.log(busqueda); 

//quita los espacios en blanco de un texto o string
var busqueda = texto.trim();//
console.log(busqueda); 