import { Injectable } from '@angular/core';
/* MODELS */
import { PROJECTS } from '../shared/data/mock-projects';

@Injectable()
export class ProjectService {
  public getProjects(): any {
    return PROJECTS;
  }
}
