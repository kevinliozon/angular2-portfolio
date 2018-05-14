import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { MENUS } from '../shared/constants/menus';

@Injectable()
export class HeaderTitleService {
  public headerTitle: string;
  
  constructor(private titleService: Title,
              private location: Location) { }
  
  /**
   * Use the value passed as title for browser tab
   * Use the value passed as header title
   *
   * @param newTitle
   * @returns {string}
   */
  public setTitle(newTitle): string {
    this.titleService.setTitle(newTitle); // dynamic tab title
    this.headerTitle = this.titleService.getTitle();
    return this.headerTitle; // dynamic header title
  }
  
  /**
   * Returns the header title value
   *
   * @returns {string}
   */
  public getTitle():string {
    return this.headerTitle;
  }
  
  /**
   * On refresh, retrieve the file's name and returns it with uppercase for first letter
   * If name is 'about' it becomes 'About Me', if 'details' it returns 'Details'
   */
  public setHeaderTitleOnRefresh(): void {
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
  }
  
}
