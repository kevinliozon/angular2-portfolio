import { Component, OnInit } from '@angular/core';
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
  public filterValue = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  /**
   * Detect hovered item
   *
   * @param itemHovered
   */
  public focusItem(itemHovered: any): void {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }
  
  /**
   * Capture the filter selected in filters component
   * Will be passed to list items component
   *
   * @param filter
   */
  public filterFor(filter: string): void {
    this.filterValue = filter;
  }

}
