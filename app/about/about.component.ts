import { Component } from '@angular/core';
//tools
import { Tool } from '../shared/models/tool';
import { TOOLS } from '../shared/mocks/mock-tools';
import { ToolService } from '../shared/tool.service';
//hobbies
import { Hobby } from '../shared/models/hobby';
import { HOBBIES } from '../shared/mocks/mock-hobbies';
import { HobbyService } from '../shared/hobby.service'

@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  templateUrl: 'about.html'
})
export class AboutComponent
{
  details = {
    email: "mailto:kevinliozonpro@gmail.com",
    street: "25 Church Crescent",
    city: "N10 3NA, London",
    country: "United Kingdom"
  };
  aboutTitles = [
    "My experience as a Front-End Developer",
    "My experience as an UX Designer",
    "Why 'Front-End Architect'?",
    "Where do I live?",
    "My favorite tools",
    "My hobbies"
  ];

  tools: Tool[];
  hobbies: Hobby[];

  constructor(private ToolService: ToolService, private HobbyService: HobbyService) { }
  ngOnInit()
  {
    this.tools = this.ToolService.getTools();
    this.hobbies = this.HobbyService.getHobbies();
    // window.location.hash retrieves the anchor
    // then scroll down to correct level
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView();
    });
  }
}
