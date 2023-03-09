import { Component, OnInit , Input, HostBinding, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { destinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() destination: destinoViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4 mb-5';
  @Output() clicked: EventEmitter<destinoViaje>;
  
  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  go(){
    this.clicked.emit(this.destination);
    return false;
  }

}
