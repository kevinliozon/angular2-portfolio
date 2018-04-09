import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
/* SERVICES */
import { TranslateService } from '../../../translate/translate.service';
/* CONSTANTS */
import { CONSTANTS } from '../../../shared/constants';


@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  public supportedLanguages: Array<any>;
  public currentFlag: string;
  public title: any;
  public menu = CONSTANTS.MENU.ENG;
  public pageHasChanged = false;

  constructor(private titleService: Title,
              private _translate: TranslateService,
              private location: Location) {
      this.toggleMenuJq();
  }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'eng', flag: 'assets/img/svg/flags/uk.svg' },
      { display: 'Français', value: 'fra', flag: 'assets/img/svg/flags/fr.svg' }
    ];
    // set current language
    this.selectLang('eng', 'assets/img/svg/flags/uk.svg');
    this.setHeaderTitleOnRefresh();
  }

  /**
   * Following jQuery for toggling burger menu
   */
  private toggleMenuJq(): void {
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
  }

  /**
   * On refresh, retrieve the file's name and returns it with uppercase for first letter
   * If name is 'about' it becomes 'About Me', if 'details' it returns 'Details'
   */
  private setHeaderTitleOnRefresh() {
    let path = <any>this.location.path();

    // getTitle() is not handled properly
    if (!path.includes('details' && 'about')) {
      let firstChar = path.substr(1).charAt(0).toUpperCase();
      let strRemains = path.slice(2);

      this.title = firstChar + strRemains || 'Home';
    } else if (path.includes('about')) {
        this.title = 'About Me';
    } else this.title = 'Details';
  }

  /**
   * Check if the selected lang is current lang
   * @param {string} lang
   * @returns {boolean}
   */
  public isCurrentLang(lang: string): boolean {
    return lang === this._translate.currentLang;
  }

  /**
   * Select a lang and set its flag as default
   * @param {string} lang
   * @param {string} flag
   */
  public selectLang(lang: string, flag: string) {
    this._translate.use(lang);
    this.currentFlag = flag;

    // Translate menu and main title
    switch(lang) {
      case 'eng':
        //update menu labels
        this.menu = CONSTANTS.MENU.ENG;
        //tab and header title become the correspondant one in the other language
        for(let tabActiveMenu of CONSTANTS.MENU.FRA) {
          for(let tabNewMenu of CONSTANTS.MENU.ENG) {
            if(this.title === tabActiveMenu.value && tabActiveMenu.key === tabNewMenu.key) {
              this.setTitle(tabNewMenu.value)
            }
          }
        }
        break;

      case 'fra':
        this.menu = CONSTANTS.MENU.FRA;
        for(let tabActiveMenu of CONSTANTS.MENU.ENG) {
          for(let tabNewMenu of CONSTANTS.MENU.FRA) {
            if(this.title === tabActiveMenu.value && tabActiveMenu.key === tabNewMenu.key) {
              this.setTitle(tabNewMenu.value)
            }
          }
        }
        break;
    }
  }

  /**
   * Update title in tab and in page header
   * Specify the page has changed with a flag to trigger the transition
   * @param {string} newTitle
   */
  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle); // dynamic tab title
    this.title = this.titleService.getTitle(); // dynamic header title

    // animation trigger
    this.pageHasChanged = !this.pageHasChanged;
    setTimeout(() => this.pageHasChanged = !this.pageHasChanged, 500); // duration
  }

  public changeFont(): void {
    let body = document.getElementsByTagName('body')[0];
    body.classList.toggle("font-big");
  }

}
