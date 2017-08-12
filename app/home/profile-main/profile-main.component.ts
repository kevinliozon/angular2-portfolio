import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'profile-main',
  templateUrl: 'profile-main.component.html',
})
export class ProfileMainComponent implements OnInit {

  public age: any;
  @Input() public profile: any;

  constructor() {  }

  public ngOnInit() {
    let today = Date.now();
    let birthday = new Date('1991-03-11');
    let ageDate = new Date(today - birthday.getTime())
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
