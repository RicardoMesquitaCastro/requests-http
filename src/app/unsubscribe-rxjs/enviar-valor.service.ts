import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviarValorService {

    private emissor$ = new Subject<string>(); //emissor do rxjs  //string é para tipar

    emitirValor(valor: string){
      this.emissor$.next(valor);     //ESTUDAR SOBRE OBSERVABLE
    }

    getValor(){
      return this.emissor$.asObservable();  //para nao dar controle ao usuário
    }

}
