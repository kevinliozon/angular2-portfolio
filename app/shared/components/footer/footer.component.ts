import { Component } from '@angular/core';
/* MODELS */
import { SOCIALS } from '../../data/mock-socials';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-footer',
  templateUrl: 'footer.component.html'
})

export class FooterComponent {

  public socials: any = SOCIALS;
  get currentYear(): any {
    return this.getCurrentYear();
  }

  constructor(){ }
  
  /**
   * returns present year
   * @returns {number}
   */
  public getCurrentYear() {
    return new Date().getFullYear();
  }

}
