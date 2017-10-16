import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* need to be imported both here
  and in app.module for navigation in header */
import { AppRoutingModule } from '../app-routing.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CardComponent } from './components/card/card.component';
import { TranslateModule } from '../translate/translate.module';

@NgModule({
    imports: [
      CommonModule,
      AppRoutingModule,
      TranslateModule
    ],
    declarations: [
      HeaderComponent,
      FooterComponent,
      DetailsComponent,
      DetailsModalComponent,
      PreviewComponent,
      CardComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      DetailsComponent,
      DetailsModalComponent,
      PreviewComponent,
      CardComponent
    ]
})

export class SharedModule {  }
