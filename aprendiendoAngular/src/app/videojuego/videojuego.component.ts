import { Component } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideoJuegoComponent {

    public titulo: string;
    public subtitulo: string;

    constructor(){
        this.titulo = "Lista de Videojuegos";
        this.subtitulo = "Los juegos mas populares del 2020";

        console.log("componente Videjuego agregado exitosamente");
    }
}