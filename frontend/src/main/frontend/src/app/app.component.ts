import { Component } from '@angular/core';
import { GrettingService } from 'app/app.service'


export interface greetingJSON {
  id:    number;
  name:     string;
}


export class Gretting {
    id: number;
    content: string;

    public constructor(id: number, content: string) { this.id = id, this.content=content; }

    getContent(): string {
       return this.content;
     }

     // toJSON is automatically used by JSON.stringify
     toJSON(): GrettingJSON {
       // copy all fields from `this` to an empty object and return in
       return Object.assign(this);
     }

     // fromJSON is used to convert an serialized version
     // of the Gretting to an instance of the class
     static fromJSON(json: GrettingJSON|string): Gretting {
       if (typeof json === 'string') {
         // if it's a string, parse it first
         return JSON.parse(json, Gretting.reviver);
       } else {
         // create an instance of the Gretting class
         let greeting = Object.create(Gretting.prototype);
         // copy all the fields from the json object
         return Object.assign(greeting, json, {
           // convert fields that need converting
           created: new Date(json.created),
         });
       }
     }

     // reviver can be passed as the second parameter to JSON.parse
     // to automatically call Gretting.fromJSON on the resulting value.
     static reviver(key: string, value: any): any {
       return key === "" ? Gretting.fromJSON(value) : value;
     }
   }

   // A representation of Gretting's data that can be converted to
   // and from JSON without being altered.
  export  interface GrettingJSON {
     name:    string;
     age:     number;
     created: string;
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
  greeting: Gretting;

  constructor (private grettingService: GrettingService) {}

  ngOnInit() { this.getGretting(); }

  getGretting() {
    this.grettingService.getGretting()
                     .subscribe(
                       gretting => this.gretting = gretting,
                       error =>  this.errorMessage = <any>error);
  }
}
