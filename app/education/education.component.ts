import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* Models */
import { Diploma } from '../models/diploma';
import { CodeSchoolCertif } from '../models/codeschool-certif';
import { CodeSchoolProfile } from '../models/codeschool-profile';
/* Services */
import { DiplomaService } from '../providers/diploma.service';
import { CodeschoolService } from '../providers/codeschool.service';
//animations
import { routeTrans } from '../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'education.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class EducationComponent implements OnInit {

  public diplomas: Diploma[];
  public csCertifs: CodeSchoolCertif[];
  public csProfile: CodeSchoolProfile;
  public category = 'overview';
  public focusedItem: any;

  constructor(private router: Router,
              private diplomaService: DiplomaService,
              private codeschoolService: CodeschoolService) { }

  ngOnInit() {
    // Diplomas
    this.diplomas = this.diplomaService.getDiplomas();
    this.focusedItem = this.diplomas[0]; // 1st item is selected on load
    this.category = 'overview';

    // Certifs
    this.codeschoolService.getCodeschoolProfile()
    .subscribe(data => {
      this.csCertifs = data.courses.completed,
      this.csProfile = data.user
    },
    console.error,
    () => { });
  }

  /**
   * Detect hovered item
   * @param itemHovered
   */
  public focusItem(itemHovered: any): void {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }

  /**
   * Navigate to selected item
   * @param diploma
   */
  public goTo(diploma): void {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: diploma.id, type: 'diploma'}]);
  }

  /**
   * Check if this category is the selected one to highlight it
   * @param categoryActive
   * @returns {boolean}
   */
  public isSelected(categoryActive): boolean {
      return categoryActive === this.category;
  }

}
