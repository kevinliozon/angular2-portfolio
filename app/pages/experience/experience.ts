import { Component, OnInit } from '@angular/core';
//roles
import { Role } from '../../interfaces/role.interface';
import { RoleService } from '../../providers/role.service';
//animations
import { routeTrans } from '../../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'experience.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class ExperiencePage implements OnInit {

  public roles: Role[];
  public focusedItem: any;
  public filterValue = '';

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.roles = this.roleService.getRoles();
  }

  /**
   * Detect hovered item
   *
   * @param itemHovered
   */
  public focusItem(itemHovered: any): void {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }
  
  /**
   * Capture the filter selected in filters component
   * Will be passed to list items component
   *
   * @param filter
   */
  public filterFor(filter: string): void {
    this.filterValue = filter;
  }

}
