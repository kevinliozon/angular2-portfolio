import { Component, OnInit } from '@angular/core';
//projects
import { Project } from '../models/project';
import { ProjectService } from '../providers/project.service'
//skills
import { Skill } from '../models/skill';
import { SkillService } from '../providers/skill.service'
//roles
import { Role } from '../models/role';
import { RoleService } from '../providers/role.service'
//diplomas
import { Diploma } from '../models/diploma';
import { DiplomaService } from '../providers/diploma.service'
//constants
import { PROFILE } from '../shared/constants/profile';
//animations
import { routeTrans } from '../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'home.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class HomeComponent implements OnInit{

  public profile = PROFILE;
  public projects: Array<Project>;
  public skills: Array<Skill>;
  public roles: Array<Role>;
  public diplomas: Array<Diploma>;

  constructor(private projectService: ProjectService,
              private skillService: SkillService,
              private roleService: RoleService,
              private diplomaService: DiplomaService) { }

  public ngOnInit() {
    this.projects = this.projectService.getProjects();
    this.skills = this.skillService.getSkills();
    this.roles = this.roleService.getRoles();
    this.diplomas = this.diplomaService.getDiplomas();
  }
}
