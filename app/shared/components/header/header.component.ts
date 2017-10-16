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
  public menu: any = CONSTANTS.MENU.ENG;

  constructor(private titleService: Title,
              private _translate: TranslateService,
              private location: Location) {  }

  public ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'eng', flag: 'assets/img/svg/flags/uk.svg' },
      { display: 'Français', value: 'fra', flag: 'assets/img/svg/flags/fr.svg' }
    ];
    // set current langage
    this.selectLang('eng', 'assets/img/svg/flags/uk.svg');
    this.setHeaderTitleOnRefresh();
  }

  private setHeaderTitleOnRefresh() {
    // getTitle() is not handled properly
    if (!this.location.path().includes('details')) {
      let firstChar = this.location.path().substr(1).charAt(0).toUpperCase();
      let strRemains = this.location.path().slice(2);
      this.title = firstChar + strRemains;
    } else this.title = 'Details';
  }

  public isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  public selectLang(lang: string, flag: string) {
    // select a lang and set its flag as default
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

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle); // dynamic tab title
    this.title = this.titleService.getTitle(); // dynamic header title
  }

}
