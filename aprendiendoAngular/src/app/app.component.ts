import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  public config;
  public mostrarVideojuegos: boolean = true;

  constructor(){
    this.config = Configuracion;
  }

  ocultarVJ(valor){
    this.mostrarVideojuegos = valor;    
  }

}
