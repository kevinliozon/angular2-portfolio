import { Component, OnInit } from '@angular/core';
//projects
import { Project } from '../../models/project';
import { ProjectService } from '../../providers/project.service'
//skills
import { Skill } from '../../models/skill';
import { SkillService } from '../../providers/skill.service'
//constants
import { PROFILE } from '../../shared/constants/profile';
//animations
import { routeTrans } from '../../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'home.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class HomePage implements OnInit {

  public profile = PROFILE;
  public projects: Array<Project>;
  public skills: Array<Skill>;

  constructor(private projectService: ProjectService,
              private skillService: SkillService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects() || [];
    this.skills = this.skillService.getSkills() || [];
  }
  
}
