import { Component } from '@angular/core';

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
    public titulo = "Componente de Zapatillas";

    constructor(){
        console.log("Componente Zapatilla agregado exitosamente");
    }    
}