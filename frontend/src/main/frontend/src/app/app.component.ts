import { Component } from '@angular/core';
import { GrettingService } from 'app/app.service'


//Por hora sem uso

export interface greetingJSON {
  id:    number;
  name:     string;
}


export class Gretting {
    id: number;
    content: string;

    public constructor(id: number, content: string) { this.id = id, this.content=content; }

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GrettingService]
})

export class AppComponent{
  title = 'app works!';

  errorMessage: string;
  mode = 'Observable';
  gretting: JSON;
  //greeting: Gretting;

  constructor (private grettingService: GrettingService) {}

  ngOnInit() { this.getGretting();

  }

  getGretting() {
    this.grettingService.getGretting()
                     .subscribe(
                       gretting => this.gretting = gretting,
                       error =>  this.errorMessage = <any>error);
  }
}
