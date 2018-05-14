import { Component } from '@angular/core';
/* MODELS */
import { SOCIALS } from '../../data/mock-socials';
/* CONSTANTS */
import { MENUS } from '../../../shared/constants/menus';
/* SERVICES */
import { HeaderTitleService } from '../../../providers/header-title.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-footer',
  templateUrl: 'footer.component.html'
})

export class FooterComponent {

  public socials: any = SOCIALS;
  public subMenu = MENUS.SUB;
  get currentYear(): any {
    return this.getCurrentYear();
  }

  constructor(private headerTitleService: HeaderTitleService) { }
  
  /**
   * Update title in tab and in page header
   * Scroll to the top of the page
   *
   * @param {string} newTitle
   */
  public setTitle(newTitle: string): void {
    this.headerTitleService.setTitle(newTitle); // dynamic tab title
    
    // animation trigger
    setTimeout(() => document.body.scrollTop = 0, 500); // duration
  }
  
  /**
   * Returns present year
   *
   * @returns {number}
   */
  public getCurrentYear(): number {
    return new Date().getFullYear();
  }

}
