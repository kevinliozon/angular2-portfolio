import { Component, OnInit } from '@angular/core';
// Skills
import { Skill } from '../models/skill';
import { SkillService } from '../providers/skill.service';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'skills.html'
})
export class SkillsComponent implements OnInit{

  public skills: Skill[];
  public value = '';

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

  public filterFor(filter) {
      this.value = filter;
  }

}
