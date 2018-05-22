import { Component, OnInit } from '@angular/core';
/* Models */
import { Diploma } from '../../interfaces/diploma.interface';
import { CodeSchoolCertif } from '../../interfaces/codeschool-certif.interface';
import { CodeSchoolProfile } from '../../interfaces/codeschool-profile.interface';
/* Services */
import { DiplomaService } from '../../providers/diploma.service';
import { CodeschoolService } from '../../providers/codeschool.service';
//animations
import { routeTrans } from '../../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  templateUrl: 'education.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class EducationPage implements OnInit {

  public diplomas: Diploma[];
  public csCertifs: CodeSchoolCertif[];
  public csProfile: CodeSchoolProfile;
  public category = 'overview';
  public focusedItem: any;

  constructor(private diplomaService: DiplomaService,
              private codeschoolService: CodeschoolService) { }

  ngOnInit() {
    // Diplomas
    this.diplomas = this.diplomaService.getDiplomas();
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
   *
   * @param itemHovered
   */
  public focusItem(itemHovered: any): void {
    // focus will refer to the id of the selected item
    this.focusedItem = itemHovered;
  }

  /**
   * Check if this category is the selected one to highlight it
   *
   * @param categoryActive
   * @returns {boolean}
   */
  public isSelected(categoryActive: string): boolean {
      return categoryActive === this.category;
  }

}
