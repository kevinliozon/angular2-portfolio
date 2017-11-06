import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//projects
import { Project } from '../models/project';
import { ProjectService } from '../providers/project.service';
//animations
import { routeTrans } from '../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'projects.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})

export class ProjectsComponent implements OnInit {

  public projects: Project[];
  public focusedItem: any;
  public value = '';

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit() {
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

  public filterFor(filter) {
      this.value = filter;
  }

}
