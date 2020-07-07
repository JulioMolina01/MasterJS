import { Component, OnInit } from '@angular/core';
import { Tenis } from '../models/tenis'

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo = "Componente de Zapatillas";    
    public muchosTenis: Array<Tenis>;

    public colores: String[];

    public color: string;

    constructor(){    
        this.muchosTenis = [
            new Tenis("Nike","Blancos",1600,false),
            new Tenis("Adidas","Blancos",800,true),
            new Tenis("Puma","Rosa",499,false),
            new Tenis("Charlie","Negro",350,true)            
        ];         

        //Guardamos en un array los colores de los Tenis, si ya existe ese color no lo guarda y al contrario.
        this.colores = new Array();
        this.muchosTenis.forEach( (tenis, indice) =>{
            if( this.colores.indexOf(tenis.color) < 0){
                this.colores.push(tenis.color);
                console.log(indice);
            }            
        });

        this.color = 'yellow';

    }    

    ngOnInit(){
        console.log();
    }
}