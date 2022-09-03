import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get listaDeBusquedas(){
    return this.gifService.historial;
  }

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  buscar( busquedaReutilizada: string ): void{

    this.gifService.agregarBusqueda( busquedaReutilizada );

  }

}
