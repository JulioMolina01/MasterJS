'use stric'    

var tiempo;
 
    function intervalo(){
        tiempo = setInterval(function(){
     
            console.log("Set interval ejecutado");
            
            var encabezado = document.querySelector("h1");
            if(encabezado.style.color == "black"){
                encabezado.style.color = "orange";
            }else{
                encabezado.style.color = "black";
            }
     
     
        }, 1000);
     
        return tiempo;
    }
     
     
     
    window.addEventListener('load', function(){
        clearInterval(tiempo);
        var stop = document.querySelector("#stop");
     
        stop.addEventListener("click", function(){
            alert("Has parado el intervalo en bucle");
            clearInterval(tiempo);
        });
     
        var start = document.querySelector("#play");
     
        start.addEventListener("click", function(){
            //clearInterval(tiempo);
            if(tiempo>=1){
                alert("Ya se ha iniciado el tiempo")
            }else{
                alert("Has iniciado el intervalo en bucle");
                tiempo=intervalo();	
            }
        });
     
});

