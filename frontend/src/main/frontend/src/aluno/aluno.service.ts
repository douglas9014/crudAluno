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

    let body = JSON.stringify(aluno);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(JSON.stringify(aluno));
    return this.http.post(this.alunoUrl + "/alunos", body)
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
    let body = res.json(); //Nesse momento a string retornada pelo servidor se torna um objeto
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
