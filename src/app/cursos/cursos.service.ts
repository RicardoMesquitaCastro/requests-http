import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {tap} from 'rxjs/operators';
import { Curso } from "./Curso.1";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API= `${environment.API}cursos`; //vem de environment (variável de ambiente)

  constructor(private http: HttpClient) {}

    list(){
      return this.http.get<Curso[]>(this.API)
      .pipe(
        tap(console.log)
      );
    }

}
