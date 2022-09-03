import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBusqueda') txtBusqueda!: ElementRef<HTMLInputElement>;

  constructor(
    private gifService: GifsService
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    
    const busquedaUsuario: string = this.txtBusqueda.nativeElement.value; 

    this.gifService.agregarBusqueda( busquedaUsuario );
    this.txtBusqueda.nativeElement.value = "";
  }

}
