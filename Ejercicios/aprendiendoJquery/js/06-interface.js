$(document).ready(() => {

    var elemento = $(".elemento");

    //mover elemento libremente
    elemento.draggable();

    //redimensionar
    elemento.resizable();

    //lista seleccionable
    //$(".lista").selectable()

    //lista ordenable
    $(".lista").sortable({
        update: function (event, ui) {
            console.log("Cambiado de orden");
        }
    });

    //droppable
    $("#objeto").draggable();

    $("#area").droppable({
        drop: function () {
            console.log("objeto agregado")
        }
    });

    //efectos    
    $("#mostrar").click(function () {
        //$("#cajaEfectos").toggle("fade");
        //$("#cajaEfectos").toggle("explode");
        //$("#cajaEfectos").toggle("blind");
        //$("#cajaEfectos").toggle("slide");
        //$("#cajaEfectos").toggle("drop");
        //$("#cajaEfectos").toggle("fold");
        $("#cajaEfectos").toggle("pop");
        //$("#cajaEfectos").toggle("puff");
        //$("#cajaEfectos").toggle("scale");
        //$("#cajaEfectos").toggle("shake","slow");
    });

    //tooltip
    $(document).tooltip()

    //cuadro de dialogo
    $("#showDialog").click(function () {
        $("#popup").dialog();
    })

    //datepicker
    $("#calendario").datepicker();

    //tabs
    $("#pestanas").tabs()



});