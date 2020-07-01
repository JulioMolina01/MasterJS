$(document).ready(()=>{
    
    reloadList();

    $("#addText").removeAttr('disabled').click(()=>{

        var datoIngresado = $("#ingresaTexto").val()
        //$("#menu").prepend('<li><a href= "' + datoIngresado + '" </a></li>');
        $("#menu").append('<li><a href= "' + datoIngresado + '" </a></li>');

        reloadList();
    })


    function reloadList() {
    
        $('a').each(function(index){

            var that = $(this);
            var enlace = that.attr("href");
            that.text(enlace);
        
        });
    }

    //removeAttr('atributo a borrar') elimina un atributo de cualquier elemento
    //attr("atributo") obtiene el valor del atributo seleccionado


});