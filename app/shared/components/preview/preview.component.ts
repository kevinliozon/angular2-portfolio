import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-preview',
  templateUrl: 'preview.component.html'
})

export class PreviewComponent {

  @Input() public focusedItem: any;

  constructor() {  }

}
