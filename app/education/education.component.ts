import { Component } from '@angular/core';
//diplomas
import { Diploma } from '../shared/models/diploma';
import { DIPLOMAS } from '../shared/mocks/mock-diplomas';
import { DiplomaService } from '../shared/diploma.service'

@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  templateUrl: 'education.html'
})
export class EducationComponent {
  title= "My Diplomas";

  // Injection of ProjectService
  diplomas: Diploma[];
  constructor(private DiplomaService: DiplomaService) { }
  ngOnInit() {
    this.diplomas = this.DiplomaService.getDiplomas();
  }
}
