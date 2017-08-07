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

  public supportedLanguages: any[];
  public currentFlag: string;
  public currentRoute: any;
  public title: any;
  public menu: Array<any> = CONSTANTS.MENU;

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
    this.setHeaderTitleOnrefresh();
  }

  private setHeaderTitleOnrefresh() {
    // getTitle() is not handled properly
    let firstChar = this.location.path().substr(1).charAt(0).toUpperCase();
    let strRemains = this.location.path().slice(2);
    this.title = firstChar + strRemains;
  }

  public isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  public selectLang(lang: string, flag: string) {
    // select a lang and set its flag as default
    this._translate.use(lang);
    this.currentFlag = flag;
  }

  public setTitle(newTitle: string) {
    // dynamic tab title
    this.titleService.setTitle(newTitle);
    this.title = this.titleService.getTitle();
  }

}
