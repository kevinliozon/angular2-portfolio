import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//projects
import { Project } from '../shared/models/project';
import { ProjectService } from '../shared/services/project.service'

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'projects.html'
})

export class ProjectsComponent {

  public title: string;
  public projects: Project[];
  public focusedItem: any;

  constructor(private router: Router, private projectService: ProjectService) {}

  public ngOnInit() {
    this.title = "My Projects";
    this.projects = this.projectService.getProjects();
  }

  public focusItem(project) {
    // focus will refer to the id of the selected item
    //this.focus = project.id;
    this.focusedItem = project;
  }

  public goTo(project) {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: project.id, type: 'project'}]);
  }

}
