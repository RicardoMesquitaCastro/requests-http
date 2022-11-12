import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-poc-take-until',
  template: `<app-poc-base [nome]="nome" [valor]="valor" estilo="bg-primary"> </app-poc-base>`
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {

  nome = 'Componente com takeUntil';
  valor!: string;

  unsub$ = new Subject;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service.getValor()  //pega o servço / obtem o valor
    .pipe(
      tap(v => console.log(this.nome,v)),//debug para saber se o componente esta recebendo o valor corretamente / v= output do valor
      takeUntil(this.unsub$)
    )
    .subscribe(novoValor => this.valor = novoValor); //pega o valor e recebe o novo valor
  }
  ngOnDestroy(){  //Verificar se o componente foi destruido
    this.unsub$.next(this.unsub$);
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido`);
  }
}
