import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//diplomas
import { Diploma } from '../shared/models/diploma';
import { DiplomaService } from '../shared/diploma.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'education.html'
})
export class EducationComponent implements OnInit{

  title: string;
  // Injection of ProjectService
  public diplomas: Diploma[];

  constructor(private diplomaService: DiplomaService, private router: Router) {}

  public ngOnInit() {
    this.title= "My Diplomas";
    this.diplomas = this.diplomaService.getDiplomas();
  }

}
