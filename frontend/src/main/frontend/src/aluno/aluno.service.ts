import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Aluno } from 'aluno/aluno.component';

@Injectable()
export class AlunoService {

  private alunoUrl = 'http://localhost:8080';  // URL to web API

  constructor (private http: Http) {}

  addAlunos(aluno): Observable<Aluno> {

    //let j = {"id":50,"name":"Joaoo","gender":"Male"};
    let body = aluno;
    let headers = new Headers({ 'Content-Type': 'application/json' }); //Insetir options parece ser opcional
    let options = new RequestOptions({ headers: headers });

    console.log(body);
    console.log(JSON.stringify(aluno));
    return this.http.post(this.alunoUrl + "/alunos", body) //Ai seria inserido após o body as options
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAlunos(): Observable<Array<Object>> {
    return this.http.get(this.alunoUrl + "/alunos")
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getAlunoById(id: number): Observable<Aluno> {
    console.log(id);
    return this.http.get(this.alunoUrl + "/alunos/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  deleteAlunoById(id: number): Observable<Aluno> {
    return this.http.delete(this.alunoUrl + "/alunos/" + id)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {

    let body
    if(res.text()) { //Foi adicionado esse if, que as vezes (no post que deu esse problema "unexpected end of json") o servidor não retorna um documento json, então não é necessario tranformar em json
      body = res.json(); //Nesse momento a string retornada pelo servidor se torna um objeto json
    }
    return body || {}; //O operador OU ali serve para não dar problema na aplicação caso retorne um valor nulo

    //obj=JSON.stringify(body);
    //let aluno = <Aluno>body;
    //deferred.resolve(aluno);
    //this.aluno=JSON.parse(body);
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
