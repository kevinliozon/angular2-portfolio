import { Component, OnInit, trigger, style, transition, animate, group } from '@angular/core';
import { Router } from '@angular/router';
//roles
import { Role } from '../models/role';
import { RoleService } from '../providers/role.service';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'experience.html',
  animations: [trigger(
    'openClose',
    [
      transition(":enter", [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 }))
      ]),
      transition(":leave", [
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])],
    host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
    },
})
export class ExperienceComponent implements OnInit {

  public roles: Role[];
  public focusedItem: any;
  public value = '';

  constructor(private router: Router, private roleService: RoleService) {}

  ngOnInit() {
    this.roles = this.roleService.getRoles();
  }

  public focusItem(itemHovered: any) {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }

  public goTo(role) {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: role.id, type: 'role'}]);
  }

  public filterFor(filter) {
      this.value = filter;
  }

}
