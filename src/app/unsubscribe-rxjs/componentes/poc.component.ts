import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-poc',
  template: `<app-poc-base [nome]="nome" [valor]="valor" estilo="bg-danger"></app-poc-base>
  `
})
export class PocComponent implements OnInit, OnDestroy {

  nome = 'Componente sem unsubscribe';
  valor!: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.service.getValor()  //pega o servço / obtem o valor
    .pipe(tap(v => console.log(this.nome,v))) //debug para saber se o componente esta recebendo o valor corretamente / v= output do valor
    .subscribe(novoValor => this.valor = novoValor); //pega o valor e recebe o novo valor
  }

  ngOnDestroy(){  //Verificar se o componente foi destruido
    console.log(`${this.nome} foi destruido`);
  }
}
