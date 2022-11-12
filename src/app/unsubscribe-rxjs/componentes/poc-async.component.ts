import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poc-async',
  template: `<app-poc-base [nome]="nome" valor="valor$! | async" estilo="bg-success"> </app-poc-base>`
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome = 'Componente com async';
  valor$!: Observable<string>;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
   this.valor$! = this.service.getValor()  //pega o servço / obtem o valor
    .pipe(tap(v => console.log(this.nome,v))); //debug para saber se o componente esta recebendo o valor corretamente / v= output do valor


  }
  ngOnDestroy(){  //Verificar se o componente foi destruido
    console.log(`${this.nome} foi destruido`);
  }
}
