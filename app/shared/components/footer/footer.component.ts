import { Component } from '@angular/core';
/* MODELS */
import { SOCIALS } from '../../mocks/mock-socials';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-footer',
  templateUrl: 'footer.component.html'
})

export class FooterComponent {

  public socials: any = SOCIALS;

  constructor(){}

}
