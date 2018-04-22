import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'profile-main',
  templateUrl: 'profile-main.component.html',
})
export class ProfileMainComponent implements OnInit {

  @Input() public profile: any;
  public age: any;
  public profileBtn: Array<any> = [{
    name: 'homeBtn0',
    route: '../about',
    href: '',
    class: 'btn btn-primary',
    fragment: 'about-fed'
  },
  {
    name: 'homeBtn1',
    route: '../about',
    href: '',
    class: 'btn btn-primary',
    fragment: 'about-ux'
  },
  {
    name: 'homeBtn2',
    route: '../projects',
    href: '',
    class: 'btn btn-primary',
    fragment: null
  },
  {
    name: 'homeBtn3',
    route: '../about',
    href: '',
    class: 'btn btn-primary',
    fragment: 'about-contact'
  }];

  constructor() {  }

  public ngOnInit() {
    let today = Date.now();
    let birthday = new Date('1991-03-11');
    let ageDate = new Date(today - birthday.getTime())
    this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
