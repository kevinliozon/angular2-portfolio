import { Component, OnInit } from '@angular/core';
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
//constants
import { CONSTANTS } from '../shared/constants';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit{

  public profile: any = CONSTANTS.PROFILE;
  public homeTitles: any;
  public projects: Project[];
  public skills: Skill[];
  public roles: Role[];
  public diplomas: Diploma[];

  constructor(private projectService: ProjectService,
              private skillService: SkillService,
              private roleService: RoleService,
              private diplomaService: DiplomaService) { }

  public ngOnInit() {
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
