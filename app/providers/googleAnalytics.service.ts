import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let ga: Function;

@Injectable()
export class GoogleAnalyticsService {
  
  public host = window.location.hostname;
  
  constructor(public router: Router) { }
  
  /**
   * Send a pageview event to GA
   * Page visited is passed
   * Disabled if actions performed on localhost
   *
   * @param page
   */
  public captureRouterEvent(page: string): void {
    if (this.host !== 'localhost') {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview', page);
        }
      });
    }
  }
  
  /**
   * Send a custom event to GA
   * eventCategory & eventAction are mandatory
   * every parameter has to match its type
   * Disabled if actions performed on localhost
   *
   * eventValues:
   * 1 -> navigate from list item
   * 2 -> click card button for modal
   * 3 -> navigate from modal
   * 4 -> update details page
   *
   * @param {string} eventCategory
   * @param {string} eventAction
   * @param {string} eventLabel
   * @param {number} eventValue
   */
  public captureCustomEvent(eventCategory: string,
                            eventAction: string,
                            eventLabel: string = null,
                            eventValue: number = null): void {
    if (this.host !== 'localhost') {
      ga('send', 'event', {
        eventCategory: eventCategory,
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: eventValue
      });
    }
  }
  
}
