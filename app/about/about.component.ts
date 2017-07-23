import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//tools
import { Tool } from '../shared/models/tool';
import { ToolService } from '../shared/services/tool.service';
//hobbies
import { Hobby } from '../shared/models/hobby';
import { HobbyService } from '../shared/services/hobby.service'

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'about.html'
})
export class AboutComponent {

  details: any;
  aboutTitles: any;
  tools: Tool[];
  hobbies: Hobby[];

  constructor(private ToolService: ToolService,
              private HobbyService: HobbyService,
              private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.details = {
      email: "mailto:kevinliozonpro@gmail.com",
      street: "25 Church Crescent",
      city: "N10 3NA, London",
      country: "United Kingdom"
    };
    this.tools = this.ToolService.getTools();
    this.hobbies = this.HobbyService.getHobbies();
    // window.location.hash retrieves the anchor
    // then scroll down to correct level
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView({block: "end", behavior: "smooth"});
    });
  }
}
