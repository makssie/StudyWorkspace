import {Component} from 'angular2/core';
import {ValidaCPF} from './cep-pipe';

@Component({
  selector: 'meu-app',
  template:  `<h1>Angular 2 - Aula 4</h1>
              <p>Caixa alta: {{texto | uppercase}}</p>
              <p>Caixa alta: {{texto | lowercase }}</p>
              <p>Data atual: {{dataAtual | date:'dd/MM/yyyy'}}</p>
              <p>Data dinâmica: {{dataAtual | date:formatar}}</p>      
              <button (click)="mudarFormato()">Mudar formato</button>              
              <br>
              <input type="text" [(ngModel)]='cpf' placeholder="Digite seu CPF"/>
              <p><a *ngIf='cpf'> CPF : {{cpf | cpf}}</a></p>
          `,
  pipes: [ValidaCPF]
})

// Para fazer two bindings way precisa de um ngIf, e um ngModel. Isso quer dizer que o valor que digitar será atualizado na variável

export class AppComponent{
    texto: string = 'Curso de Angular 2.';
    valor: number = 1096.87;
    dataAtual : Date = new Date();
    formato : boolean = true;
    cpf: boolean;

    get formatar(){
      return this.formato ? 'dd/MM/yyyy HH:mm:yyyy' : 'dd/MM/yy';
    }
  
mudarFormato(){
  this.formato = !this.formato;
}
}
