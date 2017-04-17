import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; //Export para o router funcionar

import { AppComponent } from './app.component';
import { AlunoComponent } from 'aluno/aluno.component';
import { HomeComponent } from 'home/home.component';

import { Gretting } from 'app/app.component';

// Services
//import { AppService } from './app.service'; //

const appRoutes: Routes = [ //Define as rotas aqui
  { path: 'alunos', component: AlunoComponent},
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes) //"busca" as rotas aqui, declaradas lá em cima
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
