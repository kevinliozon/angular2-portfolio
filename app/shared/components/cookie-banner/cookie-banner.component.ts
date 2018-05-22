import { Component } from '@angular/core';
import { CookieService } from '../../../providers/cookie.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-cookie',
  templateUrl: 'cookie-banner.component.html'
})

export class CookieBannerComponent {

  public isConsented: boolean;

  constructor(private cookieService: CookieService) {
    this.isConsented = this.cookieService.getCookie('consent') === 'yes';
  }

  /**
   * Set the consent cookie's value to "yes" with a duartion of 7 days.
   * Event click is handled. If no consent, the cookie is not set.
   *
   * @param {boolean} isConsent
   * @param event
   * @returns {boolean}
   */
  public consentToCookies(isConsent: boolean, event: any): boolean {
    if (!isConsent) {
      return this.isConsented;
    } else if (isConsent) {
      this.cookieService.setCookie('consent', 'yes', 7);
      this.isConsented = true;
      event.preventDefault();
    }
  }

}
