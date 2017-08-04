import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-card',
  templateUrl: 'card.component.html',
})

export class CardComponent {

  @Input() public object: any = null;

  constructor() {  }

}
