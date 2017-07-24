import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
/* need to be imported both here
  and in app.module for navigation in header */
import { AppRoutingModule } from '../app-routing.module';
// Components
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DetailsComponent } from "./components/details/details.component";
import { PreviewComponent } from "./components/preview/preview.component";

@NgModule({
    imports: [
      CommonModule,
      AppRoutingModule
    ],
    declarations: [
      HeaderComponent,
      FooterComponent,
      DetailsComponent,
      PreviewComponent
    ],
    exports: [
      HeaderComponent,
      FooterComponent,
      DetailsComponent,
      PreviewComponent
    ]
})

export class SharedModule {  }
