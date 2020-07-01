'use stric'

window.addEventListener('load', function () {
   
    //Eventos de raton
    function cambiarColorBoton(){
        console.log("Me has dado Click");
        bg = boton.style.background;

        if (bg == "green") {
            boton.style.background = "red";
        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";    
    }

    var boton = document.querySelector("#boton");

    //click
    //evento click, en el addeventListener se ingresan dos parametros
    //el primero es el evento, en este caso un click, y despues la funcion que se hara
    //despues del click
    boton.addEventListener( 'click' , function() {
        cambiarColorBoton();
    } );

    //mouseover O poner el curso arriba del boton
    boton.addEventListener('mouseover' , function () {
        boton.style.background = "yellow";
    });

    //mouseout O poner el curso fuera del boton
    boton.addEventListener('mouseout', function () {
        boton.style.background = "grey";
    })

    var div1 = document.querySelector("#micaja");
    div1.addEventListener('mouseover' , function () {
        div1.style.background = "orange";
    });

    div1.addEventListener('mouseout' , function () {
        div1.style.background = "pink";
    });
 
    //EVENTOS PARA TECLADO

    //focus - te dice cuando estas dentro de un input
    var input = document.querySelector("#campoNombre");

    input.addEventListener('focus' , function () {
    console.log("Estas dentro del Input");
    });

    //blur - te dice cuando estas fuera del input
    input.addEventListener('blur' , function () {
        console.log("Estas fuera del Input");
    });

    //keydown - te dice que tecla estas presionando
    input.addEventListener('keydown' , function () {
        console.log("Estas pulsando esta tecla: ", String.fromCharCode(event.keyCode));
     });

    //keypress
    input.addEventListener('keypress' , function () {
        console.log("Tecla presionada: ", String.fromCharCode(event.keyCode));
     });

    //keyup
    input.addEventListener('keyup' , function () {
        console.log("Tecla soltada: ", String.fromCharCode(event.keyCode));
     });    

});

