$(document).ready(function(){
    
    //MOUSEOVER Y MOUSEOUT
    var caja = $("#caja");
    var body = $("#body");
    var titulo = $("#titulo");

    /*caja.mouseover(()=>{
        caja.css("background","red");
    });

    caja.mouseout(()=>{
        caja.css("background","yellow");
    });*/

    //Hover

    function cambiaRojo(){
        caja.css("background","red");
    }
    function cambiaAmarillo(){
        caja.css("background","skyblue");
    }

    caja.hover(cambiaRojo,cambiaAmarillo);

    //click y doble click
    caja.click(()=>{
        
        if (body.hasClass("whiteMode")) {            
            body.removeClass("whiteMode")
            body.addClass("darkMode")    
            console.log("Modo Oscuro")               
        } else {
            body.removeClass("darkMode")    
            body.addClass("whiteMode")   
            console.log("Modo Claro")              
        }
        
        
    })
    
    caja.dblclick(()=>{
        caja.css("border","6px solid")
    })

    //FOCUS y BLUR
    var nombre = $("#datos")
    
    nombre.focus(()=>{
        nombre.css("border","5px solid")
    });
        
    nombre.blur(()=>{
        nombre.css("border","2px solid #ccc")
        var datos = nombre.val()
        caja.text(datos).show()
    });


    //MOUSEDOWN Y MOUSEUP
    var otracaja = $("#otracaja")
    otracaja.mousedown(()=>{
        otracaja.css("border","10px solid red")
    });
    otracaja.mouseup(()=>{
        otracaja.css("border","3px solid black")
    });

    //MOUSEMOVE 
    $(document).mousemove(()=>{
        //console.log(" x: " + event.clientX)
        //console.log(" y: " + event.clientY)
        //console.log("-")
        $('body').css("cursor","none")
        $("#sigueme").css("left",event.clientX)
        .css("top",event.clientY)
    });

    
    



});