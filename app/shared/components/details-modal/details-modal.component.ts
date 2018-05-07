import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-modal',
  templateUrl: 'details-modal.component.html'
})

export class DetailsModalComponent {

  @Input() public details: any;
  @Input() public type: string = '';

  constructor() {
    console.log(this.type);
  }

  public hasSkillsInvolved(): boolean {
    return (this.type === 'role' || this.type === 'project') ? true : false;
  }

}
