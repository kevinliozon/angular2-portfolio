import { Component } from '@angular/core';
//projects
import { Project } from '../shared/models/project';
import { ProjectService } from '../shared/project.service'

@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  templateUrl: 'projects.html'
})

export class ProjectsComponent {
  title: string;

  // Injection of ProjectService
  projects: Project[];
  constructor(private projectService: ProjectService) { }
  ngOnInit() {
    this.title = "My Projects";
    this.projects = this.projectService.getProjects();
  }
  // all = {tag: "Digitela"};
}
