import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//projects
import { Project } from '../models/project';
import { ProjectService } from '../providers/project.service';
// Environment
import { CONSTANTS } from '../shared/constants';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'projects.html'
})

export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public focusedItem: any;
  public filters: Array<string> = CONSTANTS.FILTERS.projects;

  constructor(private router: Router, private projectService: ProjectService) {}

  public ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  public focusItem(itemHovered: any) {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }

  public goTo(project) {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: project.id, type: 'project'}]);
  }

}
