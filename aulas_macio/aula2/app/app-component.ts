import {Component} from 'angular2/core';
 
@Component({
    selector: 'meu-app',
    template: `
        <h1>{{titulo}}</h1>
        <h2>Cliente selecionado: {{cliente}}</h2>
    `
})
export class AppComponent {
    titulo:string = 'Listagem de clientes';
    cliente:string = 'Fulano de Tal';
}