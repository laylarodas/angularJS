import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  name: string;
  constructor() {
    this.name = 'default name';
   }

  ngOnInit(): void {
  }

}
