import { Component } from '@angular/core';

import { AlunoService } from 'aluno/aluno.service'

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  providers: [AlunoService] //AlunoService aqui dentro depois
})

export class AlunoComponent{
  //ngOnDestroy(): void { document.body.appendChild(document.createElement("app-root")); }
  title = 'app works!';

  errorMessage: string;
  mode = 'Observable';
  aluno: JSON;
  //greeting: Gretting;

  constructor (private alunoService: AlunoService) {}

  ngOnInit() { this.getAluno();

  }

  getAluno() {
    this.alunoService.getAluno()
                     .subscribe(
                       aluno => this.aluno = aluno,
                       error =>  this.errorMessage = <any>error);
  }
}
