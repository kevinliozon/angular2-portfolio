import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* Models */
import { Diploma } from '../models/diploma';
import { CodeSchoolCertif } from '../models/codeschool-certif';
import { CodeSchoolProfile } from '../models/codeschool-profile';
/* Services */
import { DiplomaService } from '../providers/diploma.service';
import { CodeschoolService } from '../providers/codeschool.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'education.html'
})
export class EducationComponent implements OnInit{

  public title: string = 'Diplomas and Certifications';
  public diplomas: Diploma[];
  public csCertifs: CodeSchoolCertif[];
  public csProfile: CodeSchoolProfile;
  public selectedType: string = 'overview';
  public focusedItem: any;

  constructor(private router: Router,
              private diplomaService: DiplomaService,
              private codeschoolService: CodeschoolService) { }

  public ngOnInit() {
    this.diplomas = this.diplomaService.getDiplomas();
    this.codeschoolService.getCodeschoolProfile()
    .subscribe(data => {
      this.csCertifs = data.courses.completed,
      this.csProfile = data.user
      },
      console.error,
      () => {
        // display in console
        // console.log('Completed!');
      });
  }

  public focusItem(itemHovered: any) {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }

  public goTo(diploma) {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: diploma.id, type: 'diploma'}]);
  }

}
