"use strict";
var core_1 = require('@angular/core');
// import translations
var lang_eng_1 = require('./lang-eng');
var lang_fra_1 = require('./lang-fra');
var lang_esp_1 = require('./lang-esp');
var lang_ita_1 = require('./lang-ita');
// translation token
exports.TRANSLATIONS = new core_1.OpaqueToken('translations');
// all translations
var dictionary = (_a = {},
    _a[lang_eng_1.LANG_ENG_NAME] = lang_eng_1.LANG_ENG_TRANS,
    _a[lang_fra_1.LANG_FRA_NAME] = lang_fra_1.LANG_FRA_TRANS,
    _a[lang_esp_1.LANG_ESP_NAME] = lang_esp_1.LANG_ESP_TRANS,
    _a[lang_ita_1.LANG_ITA_NAME] = lang_ita_1.LANG_ITA_TRANS,
    _a
);
// providers
exports.TRANSLATION_PROVIDERS = [
    { provide: exports.TRANSLATIONS, useValue: dictionary },
];
var _a;
//# sourceMappingURL=translation.js.map