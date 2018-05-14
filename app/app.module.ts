//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProvidersModule } from './providers/providers.module';
import { HttpModule } from '@angular/http';
import { TranslateModule } from './translate/translate.module';
//Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { CookiePolicyPage } from './cookie-policy/cookie-policy';
import { SitemapPage } from './sitemap/sitemap';
import { TermsConditionsPage } from './terms-conditions/terms-conditions';
//Components
import { ProfileCsComponent } from './education/profile-cs/profile-cs.component';
import { ProfileMainComponent } from './home/profile-main/profile-main.component';
//Pipes
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ProvidersModule,
    HttpModule,
    TranslateModule
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
    CookiePolicyPage,
    SitemapPage,
    TermsConditionsPage,
    ProfileCsComponent,
    ProfileMainComponent,
    FilterPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})

export class AppModule {  }
