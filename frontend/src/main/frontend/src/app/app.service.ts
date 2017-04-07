import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Gretting } from 'app/app.component';

@Injectable()
export class GrettingService {

  private greetingUrl = 'http://localhost:8080/greeting';  // URL to web API
  private gretting : Gretting;

  constructor (private http: Http) {}

  getGretting(): Observable<JSON> {
    return this.http.get(this.greetingUrl)
                    .map(this.extractData)
                    //.map(({id, content}) => new Gretting(id, content))
                    //.map(res => {return res.json()})
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    //this.gretting = JSON.parse(body);
    //return body.data || { };
    //let bbody: any = JSON.parse(body); // string to generic object first
    //let greeting: Gretting = <Gretting>bbody;


    //(({id, content}) => this.gretting = new Gretting(id, content))
    //return this.gretting;
    //let gretting = JSON.parse(body.data, Gretting.reviver);
    //let gretting = Gretting.fromJSON(JSON.parse(body));
    //alert(body);
    return body;
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
