import { Component } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'not-found.html'
})
export class PageNotFoundComponent {
  
  constructor() {  }

}
