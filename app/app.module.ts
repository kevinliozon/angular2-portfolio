//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProvidersModule } from './providers/providers.module';
//Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
//Translations
import { TRANSLATION_PROVIDERS } from './translate/translation';
import { TranslateService } from './translate/translate.service';
import { TranslatePipe } from './translate/translate.pipe';
//filters
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ProvidersModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    TranslatePipe,
    FilterPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
  ]
})

export class AppModule {  }
