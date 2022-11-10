import { CursosService } from './../cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from "../Curso.1";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true //PARA ESPAÇAMENTOS
})
export class CursosListaComponent implements OnInit {

  //cursos!: Curso[];

  cursos$!: Observable<Curso[]>

  constructor(private service: CursosService) { }

  ngOnInit(): void {
    //this.service.list().subscribe(dados => this.cursos = dados);
    this.cursos$ = this.service.list();
  }

}
