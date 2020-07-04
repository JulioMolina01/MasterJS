import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{

    public titulo: string;
    public subtitulo: string;

    constructor(){
        this.titulo = "Lista de Videojuegos";
        this.subtitulo = "Los juegos mas populares del 2020";

        console.log("componente Videjuego agregado exitosamente");
    }

    ngOnInit(){
        console.log("OnInit Ejecutado");
    }

    ngDoCheck(){
        console.log("DoCheck Ejecutado");
    }

    ngOnDestroy(){
        console.log("OnDestroy Ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo";
    }
}