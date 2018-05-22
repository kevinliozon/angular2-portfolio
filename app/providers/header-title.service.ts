import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
/* Constants */
import { MENUS } from '../shared/constants/menus';
/* Services */
import { GoogleAnalyticsService } from './googleAnalytics.service';

@Injectable()
export class HeaderTitleService {
  public headerTitle: string;
  
  constructor(private titleService: Title,
              private location: Location,
              private router: Router,
              private googleAnalyticsService: GoogleAnalyticsService) { }
  
  /**
   * Use the value passed as title for browser tab
   * Use the value passed as header title
   *
   * @param newTitle
   * @returns {string}
   */
  public setTitle(newTitle: string): string {
    this.titleService.setTitle(newTitle); // dynamic tab title
    this.headerTitle = this.titleService.getTitle();
    return this.headerTitle; // dynamic header title
  }
  
  /**
   * Returns the header title value
   *
   * @returns {string}
   */
  public getTitle(): string {
    return this.headerTitle;
  }
  
  /**
   * On refresh, changes title in header
   */
  public setHeaderTitleOnRefresh(): void {
    this.setHeaderTitle();
  }
  
  /**
   * On return, changes title in header
   */
  public setHeaderTitleOnReturn(): void {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(e => {
        this.setHeaderTitle();
        this.previousUrl = e.url;
      });
  }
  
  /**
   * Retrieves the file's name and replaces it with uppercase for first letter
   * If 'about' -> 'About Me'
   * If 'details' -> 'Details'
   * If 'cookie-policy' -> 'Cookies Policy'
   * If 'terms-conditions' -> 'Terms & Conditions'
   *
   */
  private setHeaderTitle(): void {
    let path = <any>this.location.path(); // The url
    
    // this.location.getTitle() method is not handled properly
    if (path.includes('about')) {
      this.headerTitle = MENUS.MAIN[1].value;
    } else if (path.includes('details')) {
      this.headerTitle = 'Details';
    } else if (path.includes('cookie-policy')) {
      this.headerTitle = MENUS.SUB[0].value;
    } else if (path.includes('terms-conditions')) {
      this.headerTitle = MENUS.SUB[2].value;
    } else {
      let firstChar = path.substr(1).charAt(0).toUpperCase();
      let strRemains = path.slice(2);
      this.headerTitle = firstChar + strRemains || 'Home';
    }
    
    this.googleAnalyticsService.captureRouterEvent(this.headerTitle);
  }
  
}
