import { Component } from '@angular/core';
//skills
import { Skill } from '../shared/models/skill';
import { SKILLS } from '../shared/mocks/mock-skills';
import { SkillService } from '../shared/skill.service'

@Component({
  templateUrl: 'app/skills/skills.html'
})
export class SkillsComponent {
  title= "My Skills";

  // Injection of SkillService
  skills: Skill[];
  constructor(private SkillService: SkillService) { }
  ngOnInit() {
    this.skills = this.SkillService.getSkills();
  }
}
