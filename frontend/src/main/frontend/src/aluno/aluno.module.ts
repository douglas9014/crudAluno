import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AlunoComponent } from './aluno.component';

//import { Gretting } from 'app/app.component';

// Services
//import { AppService } from './app.service'; //

@NgModule({
  declarations: [
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AlunoComponent]
})

export class AlunoModule {


}
