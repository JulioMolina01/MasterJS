import { Component, OnInit } from '@angular/core';
import { Tenis } from '../models/tenis'

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo = "Componente de Zapatillas";    
    public muchosTenis: Array<Tenis>;

    constructor(){    
        this.muchosTenis = [
            new Tenis("Nike","Blancos",1600,false),
            new Tenis("Adidas","Blancos",800,true),
            new Tenis("Puma","Rosa",499,false),
            new Tenis("Charlie","Negro",350,true)
        ]; 
    }    

    ngOnInit(){
        console.log();
    }
}