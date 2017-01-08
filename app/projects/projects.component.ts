import { Component } from '@angular/core';
//projects
import { Project } from '../shared/models/project';
import { PROJECTS } from '../shared/mocks/mock-projects';
import { ProjectService } from '../shared/project.service'

@Component({
  templateUrl: 'app/projects/projects.html'
})

export class ProjectsComponent {
  title= "My Projects";

  // Injection of ProjectService
  projects: Project[];
  constructor(private ProjectService: ProjectService) { }
  ngOnInit() {
    this.projects = this.ProjectService.getProjects();
  }
}
