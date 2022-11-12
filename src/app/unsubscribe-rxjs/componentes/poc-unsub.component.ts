import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import {  Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-poc-unsub',
  template: `<app-poc-base [nome]="nome" [valor]="valor" estilo="bg-secondary"></app-poc-base>`
})
export class PocUnsubComponent implements OnInit, OnDestroy {

  nome = 'Componente com unsubscribe';
  valor!: string;

  sub: Subscription[] = [];

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.sub.push(this.service.getValor()  //pega o servço / obtem o valor
    .pipe(tap(v => console.log(this.nome,v))) //debug para saber se o componente esta recebendo o valor corretamente / v= output do valor
    .subscribe(novoValor => this.valor = novoValor)); //pega o valor e recebe o novo valor
  }
  ngOnDestroy(){      //Verificar se o componente foi destruido
    this.sub.forEach(s => s.unsubscribe());
    console.log(`${this.nome} foi destruido`);
  }
}
