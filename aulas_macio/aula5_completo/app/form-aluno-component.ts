import {Component} from 'angular2/core';
import {Curso} from './models/curso';
import {Aluno} from './models/aluno';

@Component({
	selector: 'form-aluno',
	templateUrl: 'app/views/formulario.html'
})
export class FormAlunoComponent{
	sucesso: boolean = false;
	cursos: Curso[];
	aluno: Aluno;

	constructor() {
		this.aluno = new Aluno();
		this.cursos = [
			new Curso('angular2', 'Angular 2'),
			new Curso('javascript', 'JavaScript')
		];
	}

	enviar(): void {
		this.sucesso = true;
	}

	debug(): string {
		return JSON.stringify(this.aluno);
	}

}