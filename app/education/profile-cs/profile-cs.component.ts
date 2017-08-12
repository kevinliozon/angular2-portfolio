import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'profile-cs',
  templateUrl: 'profile-cs.component.html',
})
export class ProfileCsComponent {

  @Input() public profile: any;

  constructor() {  }

}
