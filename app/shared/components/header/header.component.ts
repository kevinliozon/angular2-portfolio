import { Component, OnInit } from '@angular/core';
/* SERVICES */
import { TranslateService } from '../../../translate/translate.service';
import { CookieService } from '../../../providers/cookie.service';
import { HeaderTitleService } from '../../../providers/header-title.service';
/* CONSTANTS */
import { MENUS } from '../../../shared/constants/menus';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  public supportedLanguages: Array<any>;
  public currentFlag: string;
  public menu = MENUS.MAIN || 'Could not render the menu';
  public pageHasChanged = false;
  public fontHasChanged = false;

  constructor(private headerTitleService: HeaderTitleService,
              private _translate: TranslateService,
              private cookieService: CookieService,) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'eng', flag: 'assets/img/svg/flags/uk.svg' },
      { display: 'Français', value: 'fra', flag: 'assets/img/svg/flags/fr.svg' }
    ];
    this.sessionLanguage();
    this.headerTitleService.setHeaderTitleOnReturn();
    this.headerTitleService.setHeaderTitleOnRefresh();
  }

  /**
   * Make selected language persistent even after refresh
   */
  private sessionLanguage(): void {
    switch(this.cookieService.getCookie('language')) {
      case 'eng':
        this.selectLang(this.supportedLanguages[0].value, this.supportedLanguages[0].flag);
        break;
      case 'fra':
        this.selectLang(this.supportedLanguages[1].value, this.supportedLanguages[1].flag);
        break;
      default:
        this.selectLang(this.supportedLanguages[0].value, this.supportedLanguages[0].flag);
        break;
    }
  }

  /**
   * Check if the selected lang is current lang
   *
   * @param {string} lang
   * @returns {boolean}
   */
  public isCurrentLang(lang: string): boolean {
    return lang === this._translate.currentLang;
  }

  /**
   * Select a lang and set its flag as default
   *
   * @param {string} lang
   * @param {string} flag
   */
  public selectLang(lang: string, flag: string): void {
    this._translate.use(lang);
    this.currentFlag = flag;
    this.cookieService.setCookie('language', lang, 7);
  }
  
  /**
   * Update title in tab and in page header
   * Specify the page has changed with a flag to trigger the transition
   *
   * @param {string} newTitle
   * @returns {string}
   */
  public setTitle(newTitle: string): string {
    this.pageHasChanged = !this.pageHasChanged; // make disappear previous title
    setTimeout(() => this.pageHasChanged = !this.pageHasChanged, 500); // make appear new title with delay
    
    return this.headerTitleService.setTitle(newTitle); // dynamic tab title
  }
  
  /**
   * Toggle the class .font-big to body to increase or reduce font size across the app
   */
  public changeFont(): void {
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle("font-big");
    this.fontHasChanged = !this.fontHasChanged;
  }

}
