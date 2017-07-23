import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'home.html'
})
export class HomeComponent {

  introContent: any;
  homeTitles: any;
  projects: Project[];
  skills: Skill[];
  roles: Role[];
  diplomas: Diploma[];
  // Injections of services
  constructor(private projectService: ProjectService,
              private skillService: SkillService,
              private roleService: RoleService,
              private diplomaService: DiplomaService) { }
  ngOnInit() {
    this.introContent = {
      "title": "A Front-End Architect at your service",
      "image": "assets/img/png/photo.png",
      "alt": "My photo would have appeared if you activated Javascript on this browser :-("
    };
    this.homeTitles = [
      "Overview",
      "Some of my works",
      "My Top 10 technologies",
      "Milestones"
    ];
    this.projects = this.projectService.getProjects();
    this.skills = this.skillService.getSkills();
    this.roles = this.roleService.getRoles();
    this.diplomas = this.diplomaService.getDiplomas();
  }
}
