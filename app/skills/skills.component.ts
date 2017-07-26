import { Component } from '@angular/core';
// Skills
import { Skill } from '../models/skill';
import { SkillService } from '../providers/skill.service';
// Environment
import { ENVIRONMENT } from '../shared/environment';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'skills.html'
})
export class SkillsComponent {

  public title: string;
  public skills: Skill[];
  public filters: Array<string> = ENVIRONMENT.FILTERS.skills;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.title= 'My Skills';
    this.skills = this.skillService.getSkills();
  }

}
