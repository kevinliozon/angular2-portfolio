import { SKILLS } from './mocks/mock-skills';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillService
{
  getSkills()
  {
    return SKILLS;
  }
}
