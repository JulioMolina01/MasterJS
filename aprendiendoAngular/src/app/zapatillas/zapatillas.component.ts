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
            new Zapatilla("Nike","Blancos",1299,true),
            new Zapatilla("Reebok","Rayados",800,false),
            new Zapatilla("Adidas","Negros",699,true)
        ];
    }    

    ngOnInit(){
        console.log();
    }
}