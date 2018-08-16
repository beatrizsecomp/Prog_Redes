import { BAIRROS } from './listabairros';
import { Bairro } from './bairro';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BairroService {

  constructor() { }

  getBairros(): Observable<Bairro[]> {
    // TODO: send the message _after_ fetching the heroes
      return of(BAIRROS);
  }
  
}
