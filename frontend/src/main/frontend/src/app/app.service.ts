import {Injectable}     from '@angular/core';
import {Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class AppService {

	private apiUrl = 'http://localhost:8080/greeting';  // URL para web api


	constructor(private http: Http) { }

	greetingGet(){
	 	return this.http.get(this.apiUrl)
		 	.toPromise()
		 	.then(response => response.json())
		 	.catch(this.handleError);
	}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
