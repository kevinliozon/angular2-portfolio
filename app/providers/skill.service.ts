import { Injectable } from '@angular/core';
/* DATA */
import { SKILLS } from '../shared/data/mock-skills';

@Injectable()
export class SkillService
{
  public getSkills()
  {
    return SKILLS;
  }

}
