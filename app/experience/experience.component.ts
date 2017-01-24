import { Component } from '@angular/core';
//roles
import { Role } from '../shared/models/role';
import { RoleService } from '../shared/role.service'

@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  templateUrl: 'experience.html'
})
export class ExperienceComponent {
  title: string;
  // Injection of ProjectService
  roles: Role[];
  constructor(private roleService: RoleService) { }
  ngOnInit() {
    this.title= "My Roles";
    this.roles = this.roleService.getRoles();
  }
}
