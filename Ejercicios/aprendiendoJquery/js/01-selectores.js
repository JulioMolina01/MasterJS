$(document).ready( function(){

    //SELECCIONAR ELEMENTO POR ID
    var rojo = $("#rojo").css("background","red").css("color", "white");
    var verde = $("#verde").css("background", "green").css("color","white");

    //SELECCIONAR ELEMENTOS POR CLASE ."NOMBRE DE CLASE"
    var claseZebra = $(".zebra")
    claseZebra.css("padding", "10px");

    //SELECCIONAR POR ETIQUETA
    var parrafos = $("p");
    parrafos.click(function () {
        var that = $(this);
        if (!that.hasClass('zebra')) {
            that.addClass("zebra");
        } else {
            that.removeClass("zebra");
        }        
    });

    //SELECTOR DE ATRIBUTOS
     $('[title="Google"]').css('background','black').css('color','white');
     $('[title="Facebook"]').css('background','skyblue').css('color','white');


    //FIND Y PARENT
    var busqueda = $("#caja").find(".resaltado");
    console.log(busqueda);

    //EVENTO DE MOUSE O CURSOR
    parrafos.css("cursor","pointer");

});