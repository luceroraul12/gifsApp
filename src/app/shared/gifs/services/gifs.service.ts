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
    this._historialBusqueda.unshift(busqueda);
  }
  
}
