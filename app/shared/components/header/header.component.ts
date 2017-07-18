import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
/* SERVICES */
import { TranslateService } from '../../../translate/translate.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {

  public supportedLanguages: any[];
  public currentFlag: string;

  constructor(private titleService: Title, private _translate: TranslateService){}

  public ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'eng', flag: 'assets/img/svg/flags/uk.svg' },
      { display: 'Français', value: 'fra', flag: 'assets/img/svg/flags/fr.svg' }
    ];
    // set current langage
    this.selectLang('eng', 'assets/img/svg/flags/uk.svg');
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

  public setTitle( newTitle: string ) {
    // dynamic tab title
    this.titleService.setTitle(newTitle);
  }

}
