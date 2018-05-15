import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* need to be imported both here
  and in app.module for navigation in header */
import { AppRoutingModule } from '../app-routing.module';
import { TranslateModule } from '../translate/translate.module';
import { PipesModule } from './pipes/pipes.module';
// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { PreviewComponent } from './components/preview/preview.component';
import { CardComponent } from './components/card/card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { GalleryModalComponent } from "./components/gallery-modal/gallery-modal.component";
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { ListPreviewComponent } from './components/list-preview/list-preview.component';

@NgModule({
    imports: [
      CommonModule,
      AppRoutingModule,
      TranslateModule,
      PipesModule
    ],
    declarations: [
      HeaderComponent,
      FooterComponent,
      DetailsComponent,
      DetailsModalComponent,
      GalleryModalComponent,
      PreviewComponent,
      CardComponent,
      FiltersComponent,
      CookieBannerComponent,
      ListPreviewComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      DetailsComponent,
      DetailsModalComponent,
      GalleryModalComponent,
      PreviewComponent,
      CardComponent,
      FiltersComponent,
      CookieBannerComponent,
      ListPreviewComponent
    ]
})

export class SharedModule {  }
