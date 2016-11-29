import { PROJECTS } from './mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService
{
  getProjects()
  {
    return PROJECTS;
  }
}
