'use strict'

//DOM - document objet model


//Esto es para obtener un elemento por ID
var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Mande esto desde JS olv";
caja.style.padding = "25px";
caja.style.width = "225px";
console.log(caja);






//esto es para obtener un elemento por Etiqueta
var todoslosDivs = document.getElementsByTagName("div");
console.log(todoslosDivs); //imprime TODOs los Div's guardados en esa variable o arreglo
console.log(todoslosDivs[2].textContent); //aqui selecciono el elemento en el indice 2 del arreglo

var divSelected = todoslosDivs[2];
divSelected.innerHTML = "Este es el nuevo Texto para el Div 2";
divSelected.style.background = "green";
console.log(divSelected);

var elemento;
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

for(elemento in todoslosDivs){

    if(typeof todoslosDivs[elemento].textContent == "string"){

        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todoslosDivs[elemento].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    
    }
    
}

seccion.append(hr);






//esto es para obtener un elemento por Css /clase
var divsRojos = document.getElementsByClassName("rojo");
    console.log(divsRojos);
    divsRojos[1].style.background = "red";

var divsAmarillos = document.getElementsByClassName("amarillo");
    console.log(divsAmarillos);
    divsAmarillos[0].style.background = "pink";







//Funciones
function cambiaColor(color,color2){
    caja.style.background = color;
    caja.style.color = color2;
}
