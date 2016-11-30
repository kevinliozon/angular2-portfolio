import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//projects
import { Project } from '../shared/models/project';
import { PROJECTS } from '../shared/mocks/mock-projects';
import { ProjectService } from '../shared/project.service'

@Component({
  templateUrl: 'app/home/home.html'
})
export class HomeComponent
{
  introContent = {
    "title": "A Front-End Architect at your service",
    "image": "app/shared/images/photo.png",
    "alt": "My photo would have appeared if you activated Javascript on this browser :-("
  };
  homeTitles = [
    "Overview",
    "Some of my works",
    "My TOP 10 technologies",
    "My Resume"
  ]
  // Injection of ProjectService
  projects: Project[];
  constructor(private ProjectService: ProjectService) { }
  ngOnInit() {
    this.projects = this.ProjectService.getProjects();
  }
}
