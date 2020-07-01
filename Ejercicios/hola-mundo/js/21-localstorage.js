'use strict'

window.addEventListener('load', () => {

    //comprobar si LocalStorage esta disponible en mi navegador
    if (typeof (Storage) != 'undefined') {
        console.log("LocalStorage disponible");
    } else {
        console.log("LocalStorage NO disponible");
    }

    //Guardar un elemento en el locaStorage
    localStorage.setItem("nombreKey", "valorKey");

        //Obtener elemento del localStorage
        var elemento = localStorage.getItem("nombreKey");
        console.log(elemento);

            //eliminar elemento del localStorage
            localStorage.removeItem("nombreKey");
    
    //Guardar un JSON en el LocalStorage
    
        //1.-Declaramos el JSON
        var contacto = {
            nombre: "Julio Cesar",
            edad: 22,
            correo: "julio_047@hotmail.com"
        };
    
        /*2.- Insertamos el JSON en el LocalStorage
        JSON.stringify(aquiElJson) sirve para ello, si no, no se puede*/  
        localStorage.setItem("contacto",JSON.stringify(contacto));
    
   //Obtener JSON del LocalStorage
    
        //Obtenemos el json y lo guardamos en una variable
        var contactoLS = JSON.parse(localStorage.getItem("contacto"));
    
        //le hacemos lo que queramos
        console.log(contactoLS);
    
        //incluso lo podemos agregar al DOM
        
        var li = document.createElement("li");
        li.append(contactoLS.nombre + " - " + contactoLS.edad + " - " + contactoLS.correo);
        var datosLS = document.querySelector("#datos").append(li);
    
});