import { Component } from '@angular/core';
//diplomas
import { Diploma } from '../shared/models/diploma';
import { DiplomaService } from '../shared/diploma.service'

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'education.html'
})
export class EducationComponent {
  
  title: string;
  // Injection of ProjectService
  diplomas: Diploma[];
  constructor(private diplomaService: DiplomaService) { }
  ngOnInit() {
    this.title= "My Diplomas";
    this.diplomas = this.diplomaService.getDiplomas();
  }
}
