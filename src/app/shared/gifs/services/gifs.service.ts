import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historialBusqueda: string[] = [];

  get historial(){
    return [...this._historialBusqueda];
  }

  agregarBusqueda(busqueda: string): void{

    busqueda = busqueda.trim().toLowerCase();
    
    if(!this._historialBusqueda.includes(busqueda)){
      if(busqueda != ""){
        this._historialBusqueda.unshift(busqueda);
      }
    }

    this._historialBusqueda = this._historialBusqueda.splice(0, 10);
  }
  
}
