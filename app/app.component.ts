import { Component } from '@angular/core';
import { TranslateService } from './translate/translate.service';

@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {

  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private _translate: TranslateService) { }

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
  }
}
