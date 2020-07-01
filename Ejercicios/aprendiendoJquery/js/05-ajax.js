$(document).ready(()=>{

    var datos = $("#datos");

    //LOAD
    //$("#datos").load("https://reqres.in/")    

    //GET
    $.get("https://reqres.in/api/users", { page: 2}, function (response) {
        response.data.forEach((element,index) => {
            datos.append("<p>" + index + " - " + element.first_name + " " + element.last_name +"</p>")
        });
    });

    //POST y AJAX
    $("#formulario").submit(()=>{
        
        var usuario = {
            name: $('input[name="name"]').val(),
            email: $('input[name="email"]').val()
        };

        //POST
        /*$.post($("#formulario").attr("action"),usuario,function(response){
            console.log(response)
        }).done(()=>{
            alert("Usuario Agregado Satisfactoriamente");
        });*/

        //AJAX        
        $.ajax({

            type: 'POST',
            url: $("#formulario").attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviado datos...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un Error");
            },
            timeout: 2000
    
        });

        return false;
    });    
   

});