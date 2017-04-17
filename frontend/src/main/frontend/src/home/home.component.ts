import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //Isso aqui vai no template do index.html, você cria um component
  templateUrl: './home.component.html', //"tercerizou" o component para mais organização do codigo
  styleUrls: ['./home.component.css'],
  providers: [] //Tem que colocar o serviço que fornece informação
})

export class HomeComponent{

}
