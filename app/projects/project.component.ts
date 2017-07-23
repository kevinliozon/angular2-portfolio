import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-view',
  template: `
    <div *ngIf="focusedItem?.id">
      <h3>{{ focusedItem?.id }} says:</h3>
      <p>I, {{ focusedItem?.name }}</p>
    </div>
  `
})

export class ProjectComponent {
  @Input() public focusedItem: any = null;

  constructor() {}

}
