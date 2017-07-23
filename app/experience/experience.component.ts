import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//roles
import { Role } from '../shared/models/role';
import { RoleService } from '../shared/role.service'

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'experience.html'
})
export class ExperienceComponent implements OnInit {

  title: string;
  roles: Role[];

  constructor(private router: Router, private roleService: RoleService) {}

  ngOnInit() {
    this.title= "My Roles";
    this.roles = this.roleService.getRoles();
  }

  public goTo(role) {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: role.id, type: 'role'}]);
  }

}
