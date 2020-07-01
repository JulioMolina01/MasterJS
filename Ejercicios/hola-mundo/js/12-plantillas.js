'use strict'

var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tus apellidos");

//var texto = "Mi nombre es " + nombre + " " + apellido;

var texto = `
	<h1>Hola</h1>
	<h2>Mi nombre es: ${nombre} ${apellido}</h2>
`;
document.write(texto);