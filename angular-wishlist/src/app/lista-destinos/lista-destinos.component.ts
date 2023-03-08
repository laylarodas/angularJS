import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinations: string[];
  constructor() { 
    this.destinations = ['Barcelona', 'Madrid', 'Sevilla','Palma de Mallorca','Burgos','Asturias','Murcia']
  }

  ngOnInit(): void {
  }

}
