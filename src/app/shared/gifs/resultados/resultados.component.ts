import { Component, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  get resultado(){
    return this.gifService.resultadosGif;
  }

  constructor(
    private gifService: GifsService
  ) { }

  ngOnInit(): void {
  }

}
