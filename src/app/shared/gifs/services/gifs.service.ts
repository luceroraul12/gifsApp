import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Gifs } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url: string = "https://api.giphy.com/v1/gifs";
  private apiKey: string = "pmAQDTAei4awCIEQnS3xMLFRJzutY8ss";


  constructor(
    private http: HttpClient
  ) {
    
    //recuperar historial del localstorage
    this._historialBusqueda = JSON.parse(localStorage.getItem("historial")!) || [];
    //recuperar resultado de busqueda del localstorage
    this.resultadosGif = JSON.parse(localStorage.getItem("ultimoResultado")!) || [];

  }

  private _historialBusqueda: string[] = [];

  public resultadosGif: Gif[] = [];

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
    this.cargarResultado(busqueda);

    this._historialBusqueda = this._historialBusqueda.splice(0, 10);
  }


  

  cargarResultado(busqueda: string){

    const params = new HttpParams()
      .set("api_key", this.apiKey)
      .set("q", busqueda)
      .set("limit", 25)
      .set("offset", 0)
      .set("rating","g")
      .set("lang","en")

    const url: string = `${this.url}/search`

    this.http.get<Gifs>(url, {params}).subscribe(
      respuesta => {
        this.resultadosGif = respuesta.data;
        //almacenamiento del resultado en localstorage
        localStorage.setItem("ultimoResultado", JSON.stringify(respuesta.data));
      }
    );

    //almacenar historial en localstorage
    localStorage.setItem("historial", JSON.stringify(this._historialBusqueda));
    
  }
  
}
