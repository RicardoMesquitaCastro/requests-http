import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {tap} from 'rxjs/operators';
import { Curso } from "./Curso.1";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API= 'http://localhost:3000/cursos'

  constructor(private http: HttpClient) {}

    list(){
      return this.http.get<Curso[]>(this.API)
      .pipe(
        tap(console.log)
      );
    }

}
