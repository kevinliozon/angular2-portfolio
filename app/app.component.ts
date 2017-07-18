import { Component } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {

  constructor(){}

}
