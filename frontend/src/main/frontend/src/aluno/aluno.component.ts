import { Component } from '@angular/core';

import { AlunoService } from 'aluno/aluno.service'

export class Aluno{ //Classe Aluno não utilizada até o momento, talvez nem precise dela
  id: number;
  name: string = '';
  gender: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

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
  //aluno: Object = {}; //Inicie objeto assim declarando vazio pra ele

  aluno: Aluno = new Aluno();

  constructor (private alunoService: AlunoService) {}

  ngOnInit() { //Ao iniciar o ANGULAR 2
    this.getAluno(); //De um get nos alunos
    //this.aluno = [{id: 1, name: "José", gender: "Male"}];

    //console.log(this.alunos);
  }

  addAluno(aluno) {
    this.alunoService.addAlunos(aluno) //Pegue os alunos que estão no servidor
                     .subscribe(
                       aluno => this.aluno = aluno,
                       error =>  this.errorMessage = <any>error);
                       location.reload();
  }


  getAluno() {
    this.alunoService.getAlunos() //Pegue os alunos que estão no servidor
                     .subscribe(
                       alunos => this.alunos = alunos,
                       error =>  this.errorMessage = <any>error);
  }

  searchAluno(aluno): void {
    //let id = 2;
    //console.log(id);
    //console.log(this.aluno.id);
    this.alunoService.getAlunoById(aluno.id)
      .subscribe(
        aluno => this.aluno = aluno,
        error =>  this.errorMessage = <any>error);
  }

  removeAluno(aluno): void {
    this.alunoService.deleteAlunoById(aluno.id)
      .subscribe(
        aluno => this.aluno = aluno,
        error =>  this.errorMessage = <any>error);
        location.reload();
  }

  clean(): void {
    this.aluno = new Aluno();
  }
}
