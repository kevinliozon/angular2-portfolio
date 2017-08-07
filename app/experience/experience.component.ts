import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//roles
import { Role } from '../models/role';
import { RoleService } from '../providers/role.service';
// Environment
import { CONSTANTS } from '../shared/constants';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'experience.html'
})
export class ExperienceComponent implements OnInit {

  public roles: Role[];
  public focusedItem: any;
  public filters: Array<string> = CONSTANTS.FILTERS.roles;

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

}
