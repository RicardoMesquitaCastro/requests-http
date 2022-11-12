import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from "../Curso.1";
import { catchError, empty, Observable, of, Subject } from 'rxjs';



@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true //PARA ESPAÇAMENTOS
})
export class CursosListaComponent implements OnInit {



  //cursos!: Curso[];

  cursos$!: Observable<Curso[]>
  error$ = new Subject<boolean>(); //sempre que emitido um erro será emitido um valor de TRUE ou FALSE


  constructor(private service: CursosService) { }

  ngOnInit(): void {
    //this.service.list()
    //.subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }
  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error=>{
        console.error(error);
        this.error$.next(true);
        return of();
      })
    );
    this.service.list()
    .pipe(
      catchError(error => of())
    )
    .subscribe(
      dados =>{
        console.log(dados);
        },
       // error => console.error(error),   outra forma se escrever
      //  () => console.log('Observable completo!')
    );
  }

}
