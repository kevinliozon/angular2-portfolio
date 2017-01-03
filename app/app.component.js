"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var translate_service_1 = require('./translate/translate.service');
var AppComponent = (function () {
    function AppComponent(_translate) {
        this._translate = _translate;
    }
    AppComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'eng' },
            { display: 'Français', value: 'fra' },
            { display: 'Español', value: 'esp' },
            { display: 'Italiano', value: 'ita' },
        ];
        // set current langage
        this.selectLang('eng');
    };
    AppComponent.prototype.isCurrentLang = function (lang) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    };
    AppComponent.prototype.selectLang = function (lang) {
        // set current lang;
        this._translate.use(lang);
        this.refreshText();
    };
    AppComponent.prototype.refreshText = function () {
        // refresh translation when language change
        this.translatedText = this._translate.instant('hello world');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html'
        }), 
        __metadata('design:paramtypes', [translate_service_1.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map