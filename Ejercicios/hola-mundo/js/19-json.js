'use strict'

window.addEventListener('load', () => {

    var pelicula = {

        name: "El Jajas",
        year: 2019,
        category: "drama"

    };

    var peliculas = [

        {name:"Spiderman", year: 2017, category: "action"},
        pelicula

    ];

    var divPeliculas = document.querySelector("#cajaPeliculas")
     
    //AGREGAR JSON A LOCALSTORAGE

    for(var index in peliculas){

        var li = document.createElement("li");
        li.append(peliculas[index].name + " - " + peliculas[index].year + " - " + peliculas[index].category)
        divPeliculas.append(li);

        //AGREGAMOS NOMBRE DE LA PELICULA AL LOCALSTORAGE
        var peli = JSON.stringify(peliculas[index].name);
        localStorage.setItem(index,peli);
    }


});
