import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_ENG_NAME, LANG_ENG_TRANS } from './lang-eng';
import { LANG_FRA_NAME, LANG_FRA_TRANS } from './lang-fra';
import { LANG_ESP_NAME, LANG_ESP_TRANS } from './lang-esp';
import { LANG_ITA_NAME, LANG_ITA_TRANS } from './lang-ita';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all translations
const dictionary = {
    [LANG_ENG_NAME]: LANG_ENG_TRANS,
    [LANG_FRA_NAME]: LANG_FRA_TRANS,
    [LANG_ESP_NAME]: LANG_ESP_TRANS,
    [LANG_ITA_NAME]: LANG_ITA_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
