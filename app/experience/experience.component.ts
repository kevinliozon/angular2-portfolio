import { Component, OnInit, trigger, style, transition, animate, group } from '@angular/core';
import { Router } from '@angular/router';
//roles
import { Role } from '../models/role';
import { RoleService } from '../providers/role.service';
//animations
import { routeTrans } from '../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'experience.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class ExperienceComponent implements OnInit {

  public roles: Role[];
  public focusedItem: any;
  public value = '';

  constructor(private router: Router, private roleService: RoleService) {}

  ngOnInit() {
    this.roles = this.roleService.getRoles();
    this.focusedItem = this.roles[0]; // 1st item is selected on load
  }

  /**
   * Detect hovered item
   * @param itemHovered
   */
  public focusItem(itemHovered: any) {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }

  /**
   * Navigate to selected item
   * @param role
   */
  public goTo(role) {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: role.id, type: 'role'}]);
  }

  public filterFor(filter) {
      this.value = filter;
  }

}
