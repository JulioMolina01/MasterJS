'use stric'

//browser objet model

//sacar cuando mide la pagina cada que se llame la funcion y se modifique el tamaño
function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(window.location);
}
getBom();

    /*otra forma de hacerlo 
    function getBom(){
        console.log(screen.width);
        console.log(screen.height);
    }
        getBom();
    */

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400,heigth=300");    
}