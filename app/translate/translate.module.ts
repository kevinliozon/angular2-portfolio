import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Translations
import { TRANSLATION_PROVIDERS } from '../translate/translation';
import { TranslateService } from '../translate/translate.service';
import { TranslatePipe } from '../translate/translate.pipe';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      TranslatePipe
    ],
    exports: [
      TranslatePipe
    ],
    providers: [
      TRANSLATION_PROVIDERS,
      TranslateService,
    ]
})

export class TranslateModule {  }
