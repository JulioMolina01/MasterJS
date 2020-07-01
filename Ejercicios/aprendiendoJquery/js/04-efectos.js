$(document).ready(()=>{

    var caja = $("#caja")
    caja.hide();
    var mostrar = $("#mostrar")
    
    /*
    var ocultar = $("#ocultar")
    

    mostrar.click( ()=>{
        mostrar.hide();
        ocultar.show();
        caja.fadeIn('fast');
        //hide()
        //fadeTo('slow',1)
        //slideDown()
    });

    ocultar.click( ()=>{
        ocultar.hide();
        mostrar.show();
        caja.hide('fast', ()=>{
            console.log("Cartel ocultado")
        });
        //fadeOut()
        //fadeTo('slow',0.1)
        //slideUp()
    });

    */

    //O PODEMOS HACER TODO EN 1 
    mostrar.click(()=>{

        //caja.toggle('slow');
        caja.slideToggle('slow');
        //caja.fadeToggle('slow');        

    });

    //ANIMACIONES PERSONALIZADAS    
    $("#animarBtn").click(()=>{

        caja.animate({marginLeft: '300px', fontSize: "10px"},'slow')
        .animate({marginTop: '80px', fontSize: "30px"},'slow')
        .animate({marginLeft: '0px', fontSize: "10px"},'slow')
        .animate({marginTop: '10px', fontSize: "19px"},'slow')
        ;

    });

});