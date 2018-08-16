import { Bairro } from './bairro';
import { Noticia } from './noticias';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
 public filtro: string;
  private _url: string = "/assets/data/noticias.json";
  private _url2: string = "/assets/data/saida.json";
  private _url3: string = "/assets/data/tipos.json";

  constructor(private http: HttpClient) { }

  getNoticias(){
    return this.http.get(this._url)
  .pipe(map(result => result));
  }
  buscaDados(){
    return this.http.get(this._url2)
  .pipe(map(result => result));
  }

  getTipos(){
    return this.http.get(this._url3)
        .pipe(map(result => result));
  }

}
