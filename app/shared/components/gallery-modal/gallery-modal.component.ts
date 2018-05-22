import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'gallery-modal',
  templateUrl: 'gallery-modal.component.html'
})

export class GalleryModalComponent {
  
  @Input() public pic: any = {};
  
  constructor() { }
  
}
