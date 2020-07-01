'use stric'

//PRUEBA CON VAR----------------
//var declara varible global
var numero = 40;
console.log(numero);

if (true) {
	var numero = 50;
	console.log(numero);
}

console.log(numero);


//PRUEBA CON LET----------------
//var declara varible local
var texto = "julio-var";
console.log(texto);

if (true) {
	let texto = "cesar-let";
	console.log(texto); 
}

console.log(texto);
