import { Injectable } from '@angular/core';
/* DATA */
import { SKILLS } from '../mocks/mock-skills';

@Injectable()
export class SkillService
{
  public getSkills()
  {
    return SKILLS;
  }

}
