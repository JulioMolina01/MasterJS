'use strict'

window.addEventListener('load',()=>{           
    
    var formulario = document.querySelector("#formulario");
    var dashed = document.querySelector("#dashed");
    dashed.style.display = "none";
        
    formulario.addEventListener('submit',function(){
       console.log("Evento Submit ejecutado");
        
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
    
        var datosUsuario = [nombre,apellido,edad];
        
        var indice;
  
        if(nombre.trim().length == 0 || nombre.trim() == null){
           alert("Nombre incorrecto, intenta de nuevo");
            return false;
        }
        if(apellido.trim().length == 0 || apellido.trim() == null){
           alert("Apellido incorrecto, intenta de nuevo");
            return false;
        }if(edad <= 0 || isNaN(edad)){
           alert("Edad incorrecta, intenta de nuevo");
            return false;
        }
        
        for(indice in datosUsuario){
            var elemento = document.createElement("li");            
            elemento.append(datosUsuario[indice]);
            dashed.append(elemento);
        }        
        console.log(datosUsuario);
        dashed.style.display = "block";
        
    });
    
    
});