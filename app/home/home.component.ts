import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/mocks';
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
    "My Top 10 technologies",
    "My achievements"
  ]
  // Injection of ProjectService
  projects: Project[];
  constructor(private ProjectService: ProjectService) { }
  ngOnInit() {
    this.projects = this.ProjectService.getProjects();
  }
}
