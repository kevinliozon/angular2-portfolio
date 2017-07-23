import { Injectable } from '@angular/core';
/* MODELS */
import { PROJECTS } from '../shared/data/mock-projects';

@Injectable()
export class ProjectService
{
  public getProjects()
  {
    return PROJECTS;
  }

  public resolveProject(id) {
    for (let project of PROJECTS) {
      if (id === project.id) {
        return project;
      }
    }
  }

}
