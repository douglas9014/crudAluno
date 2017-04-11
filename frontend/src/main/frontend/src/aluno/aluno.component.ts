import { Component } from '@angular/core';

import { AlunoService } from 'aluno/aluno.service'

export class Aluno{ //Classe Aluno não utilizada até o momento, talvez nem precise dela
  public id: number;
  public name: string;
  public gender: string;

  constructor(id: number,
              name: string,
              gender: string){}
}

var obj;

@Component({
  selector: 'app-aluno', //Isso aqui vai no template do index.html, você cria um component
  templateUrl: './aluno.component.html', //"tercerizou" o component para mais organização do codigo
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService] //Tem que colocar o serviço que fornece informação
})

export class AlunoComponent{
  title = 'app works!';

  errorMessage: string;
  mode = 'Observable';
  alunos: Array<Object>;

  constructor (private alunoService: AlunoService) {}

  ngOnInit() { //Ao iniciar o ANGULAR 2
    this.getAluno(); //De um get nos alunos
    console.log(this.alunos);
  }

  getAluno() {
    this.alunoService.getAluno() //Pegue os alunos que estão no servidor
                     .subscribe(
                       alunos => this.alunos = alunos,
                       error =>  this.errorMessage = <any>error);
  }
}
