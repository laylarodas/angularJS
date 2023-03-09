import { Component, OnInit } from '@angular/core';
import { destinoViaje } from "../models/destino-viaje.model";

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinations: destinoViaje[];
  constructor() { 
    this.destinations = [];
  }

  ngOnInit(): void {
  }
  save(name:string, url:string) : boolean{
    this.destinations.push(new destinoViaje(name,url));
    //console.log(this.destinations)
    return false;
  }

}
