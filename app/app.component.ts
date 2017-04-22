import { Component } from '@angular/core';
import { TranslateService } from './translate/translate.service';
import { Title }     from '@angular/platform-browser';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {

  public translatedText: string;
  public aboutFront: string;
  public supportedLanguages: any[];

  constructor(private _translate: TranslateService, private titleService: Title) { }

  ngOnInit() {
      // standing data
      this.supportedLanguages = [
        { display: 'English', value: 'eng' },
        { display: 'Français', value: 'fra' },
        { display: 'Español', value: 'esp' },
        { display: 'Italiano', value: 'ita' },
      ];
      // set current langage
      this.selectLang('eng');
  }

  isCurrentLang(lang: string) {
      // check if the selected lang is current lang
      return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
      // set current lang;
      this._translate.use(lang);
      this.refreshText();
  }

  refreshText() {
      // refresh translation when language change
      this.translatedText = this._translate.instant('hello world');
      this.aboutFront = this._translate.instant('aboutFront');
  }

  public setTitle( newTitle: string ) {
    this.titleService.setTitle( newTitle );
  }
}
