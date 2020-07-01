var bicicleta = {

    //atributos
    color: 'Rojo',
    tipo: 'Mtb',
    frenos: 'disco',
    suspension: 'doble',

    //metodos
    cambiarColor: function(nuevoColor){
        this.color = nuevoColor;
        console.log(this);
    }

};

bicicleta.cambiarColor("verde");