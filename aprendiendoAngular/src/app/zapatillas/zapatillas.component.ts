import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo = "Componente de Zapatillas";
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla("Adidas", "Negro", 1200, true),
            new Zapatilla("Nike", "Gris", 900, false),
            new Zapatilla("Vans", "Verde", 1500, true)
        ];
    }    

    ngOnInit(){
        console.log(this.zapatillas);
    }
}