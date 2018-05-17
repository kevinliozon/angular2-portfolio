import { Injectable } from '@angular/core';

@Injectable()
export class CookieService {
  
  /**
   * Parse the cookie to return the value associated to the name passed
   *
   * @param {string} name
   * @returns {string}
   */
  public getCookie(name: string): string {
    let cookieArray: Array<string> = document.cookie.split(';');
    let cookieArrayLength: number = cookieArray.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < cookieArrayLength; i += 1) {
      c = cookieArray[i].replace(/^\s+/g, ''); // removes empty spaces
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length); // return value of the cookie's name
      }
    }
    return '';
  }
  
  /**
   * Empty the value associated to the name passed
   *
   * @param name
   */
  public deleteCookie(name): void {
    this.setCookie(name, '', -1);
  }
  
  /**
   * Creates a cookie by defining its name, duration, value (associated to the name)
   * We can also define a specific path, root by default.
   *
   * @param {string} name
   * @param {string} value
   * @param {number} expireDays
   * @param {string} path
   */
  public setCookie(name: string, value: string, expireDays: number, path: string = ''): void {
    
    // Set expiration date
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = 'expires=' + d.toUTCString();
    
    // Generate the cookie
    document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
  }

}
