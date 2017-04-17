import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AlunoModule } from './aluno/aluno.module'; //Tem que exportar qualquer modulo adicionado aqui
import { HomeModule } from 'home/home.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule); //E dar bootstrap neles depois
platformBrowserDynamic().bootstrapModule(AlunoModule);
platformBrowserDynamic().bootstrapModule(HomeModule);
