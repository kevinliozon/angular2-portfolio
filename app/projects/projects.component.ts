import { Component } from '@angular/core';
//projects
import { Project } from '../shared/models/project';
import { ProjectService } from '../shared/project.service'

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'projects.html'
})

export class ProjectsComponent {
  
  title: string;
  projects: Project[];

  // Injection of ProjectService
  constructor(private projectService: ProjectService) { }
  ngOnInit() {
    this.title = "My Projects";
    this.projects = this.projectService.getProjects();
  }
}
