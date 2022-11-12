import { Component, OnInit, OnDestroy } from '@angular/core'; //CHAMADOS HTTP
import { EnviarValorService } from '../enviar-valor.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-poc-take',
  template: `<app-poc-base [nome]="nome" [valor]="valor" estilo="bg-info"></app-poc-base>`
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome = 'Componente com take';
  valor!: string;

  constructor(private service: EnviarValorService) {}

  ngOnInit() {
    this.service.getValor()  //pega o servço / obtem o valor
    .pipe(
      tap(v => console.log(this.nome,v)),//debug para saber se o componente esta recebendo o valor corretamente / v= output do valor
      take(1) //contador para quantas vezes eu quero receber a requisição http
      )
    .subscribe(novoValor => this.valor = novoValor); //pega o valor e recebe o novo valor

  }
  ngOnDestroy(){  //Verificar se o componente foi destruido
    console.log(`${this.nome} foi destruido`);
  }
}
