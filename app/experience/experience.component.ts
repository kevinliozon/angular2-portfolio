import { Component } from '@angular/core';
//roles
import { Role } from '../shared/models/role';
import { ROLES } from '../shared/mocks/mock-roles';
import { RoleService } from '../shared/role.service'

@Component({
  templateUrl: 'app/experience/experience.html'
})
export class ExperienceComponent {
  title= "My Roles";

  // Injection of ProjectService
  roles: Role[];
  constructor(private RoleService: RoleService) { }
  ngOnInit() {
    this.roles = this.RoleService.getRoles();
  }
}
