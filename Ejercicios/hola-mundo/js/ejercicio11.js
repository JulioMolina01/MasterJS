'use strict'

window.addEventListener("load",()=>{

    /* FORMULARIO QUE AÑADA PELICULAS
     1.- SOLO NOMBRES
     2.- MOSTRAR PELICULAS EN PAGE
     3.- ELIMINAR PELICULAS */

    var insertFilmForm = document.querySelector("#formularioAgregar")
    var divPeliculas = document.querySelector("#datos")
    var deletFilmForm = document.querySelector("#formularioElimiar")

     //AGREGAR PELICULA a LocalStorage
     insertFilmForm.addEventListener('submit',()=>{
        var insertFilmName = document.querySelector("#nombre").value;
        localStorage.setItem(insertFilmName,insertFilmName);

        var li = document.createElement("li");
        li.append(insertFilmName);
        divPeliculas.append(li);

     });
     
     //ELIMINAR PELICULA a LocalStorage
     deletFilmForm.addEventListener('submit', ()=> {

        var filmToDelet = document.querySelector("#peliToDelet").value;
        localStorage.removeItem(filmToDelet);

     });

     showFilms();


     //FUNCIONES -----

     function showFilms() {
        for(var index in localStorage){
            var li = document.createElement("li");

            if (typeof localStorage[index] == 'string' && localStorage[index] != '') {
                li.append(localStorage[index]);
                divPeliculas.append(li);    
            }
        }         
     }


});