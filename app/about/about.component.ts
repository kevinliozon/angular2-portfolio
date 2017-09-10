import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//tools
import { Tool } from '../models/tool';
import { ToolService } from '../providers/tool.service';
//hobbies
import { Hobby } from '../models/hobby';
import { HobbyService } from '../providers/hobby.service'
//projects
import { Project } from '../models/project';
import { ProjectService } from '../providers/project.service'
//constants
import { CONSTANTS } from '../shared/constants';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'about.html'
})
export class AboutComponent implements OnInit{

  public details: any = CONSTANTS.PROFILE;
  public tools: Array<Tool>;
  public hobbies: Array<Hobby>;
  public projects: Array<Project>;

  constructor(private toolService: ToolService,
              private hobbyService: HobbyService,
              private projectService: ProjectService,
              private route: ActivatedRoute) { }

  public ngOnInit()
  {
    this.tools = this.toolService.getTools();
    this.hobbies = this.hobbyService.getHobbies();
    this.projects = this.projectService.getProjects();
    // window.location.hash retrieves the anchor
    // then scroll down to correct level
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView({block: "end", behavior: "smooth"});
    });
  }

}
