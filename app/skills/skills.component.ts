import { Component } from '@angular/core';
//skills
import { Skill } from '../models/skill';
import { SkillService } from '../providers/skill.service'

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'skills.html'
})
export class SkillsComponent {

  title: string;
  skills: Skill[];
  frequentSkill: boolean = false; // Should we display the frequent skills?

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.title= "My Skills";
    this.skills = this.skillService.getSkills();
  }

  // Returns true if we want to display the frequently used skills only
  isFrequent(value: boolean) {
    return value ? this.frequentSkill = true : this.frequentSkill = false;
  }
}
