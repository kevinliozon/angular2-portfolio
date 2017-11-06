import { Component, OnInit } from '@angular/core';
// Skills
import { Skill } from '../models/skill';
import { SkillService } from '../providers/skill.service';
//animations
import { routeTrans } from '../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'skills.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
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
