import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//diplomas
import { Diploma } from '../models/diploma';
import { DiplomaService } from '../providers/diploma.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'education.html'
})
export class EducationComponent implements OnInit{

  title: string;
  // Injection of ProjectService
  public diplomas: Diploma[];

  constructor(private router: Router, private diplomaService: DiplomaService) {}

  public ngOnInit() {
    this.title= "My Diplomas";
    this.diplomas = this.diplomaService.getDiplomas();
  }

  public goTo(diploma) {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: diploma.id, type: 'diploma'}]);
  }

}
