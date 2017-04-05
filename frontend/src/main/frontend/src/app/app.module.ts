import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Services
import { AppService } from './app.service'; //

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private id: number;
	private content: string;


	constructor(private _service: AppService){
		this.getGreenting();
	}

	getGreenting(){
		this._service.greetingGet()
      		.then(id => {this.id = id}, content => {this.content = content});
	}


}
