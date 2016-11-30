import { PROJECTS } from './mocks/mock-projects';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService
{
  getProjects()
  {
    return PROJECTS;
  }
}
