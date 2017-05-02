import { Component } from '@angular/core';
import { TranslateService } from './translate/translate.service';
import { Title } from '@angular/platform-browser';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {

  public supportedLanguages: any[];
  public currentFlag: string;

  constructor(private _translate: TranslateService, private titleService: Title) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'eng', flag: 'assets/img/svg/flags/uk.svg' },
      { display: 'Français', value: 'fra', flag: 'assets/img/svg/flags/fr.svg' }
    ];
    // set current langage
    this.selectLang('eng', 'assets/img/svg/flags/uk.svg');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string, flag: string) {
    // select a lang and set its flag as default
    this._translate.use(lang);
    this.currentFlag = flag;
  }

  public setTitle( newTitle: string ) {
    // dynamic tab title
    this.titleService.setTitle( newTitle );
  }
}
