import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//projects
import { Project } from '../shared/models/project';
import { PROJECTS } from '../shared/mocks/mock-projects';
import { ProjectService } from '../shared/project.service'
//skills
import { Skill } from '../shared/models/skill';
import { SKILLS } from '../shared/mocks/mock-skills';
import { SkillService } from '../shared/skill.service'
//roles
import { Role } from '../shared/models/role';
import { ROLES } from '../shared/mocks/mock-roles';
import { RoleService } from '../shared/role.service'
//diplomas
import { Diploma } from '../shared/models/diploma';
import { DIPLOMAS } from '../shared/mocks/mock-diplomas';
import { DiplomaService } from '../shared/diploma.service'

@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  templateUrl: 'home.html'
})
export class HomeComponent
{
  introContent = {
    "title": "A Front-End Architect at your service",
    "image": "app/shared/images/photo.png",
    "alt": "My photo would have appeared if you activated Javascript on this browser :-("
  };
  homeTitles = [
    "Overview",
    "Some of my works",
    "My Top 10 technologies",
    "Milestones"
  ]
  // Injections of services
  projects: Project[];
  skills: Skill[];
  roles: Role[];
  diplomas: Diploma[];
  constructor(private ProjectService: ProjectService,
              private SkillService: SkillService,
              private RoleService: RoleService,
              private DiplomaService: DiplomaService) { }
  ngOnInit() {
    this.projects = this.ProjectService.getProjects();
    this.skills = this.SkillService.getSkills();
    this.roles = this.RoleService.getRoles();
    this.diplomas = this.DiplomaService.getDiplomas();
  }
}
