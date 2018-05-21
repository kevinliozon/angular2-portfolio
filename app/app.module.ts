//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProvidersModule } from './providers/providers.module';
import { HttpModule } from '@angular/http';
import { TranslateModule } from './translate/translate.module';
import { PipesModule } from './shared/pipes/pipes.module';
//Pages
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home';
import { AboutPage } from './pages/about/about';
import { EducationPage } from './pages/education/education';
import { ExperiencePage } from './pages/experience/experience';
import { ProjectsPage } from './pages/projects/projects';
import { SkillsPage } from './pages/skills/skills';
import { NotFoundPage } from './pages/not-found/not-found';
import { CookiePolicyPage } from './pages/cookie-policy/cookie-policy';
import { SitemapPage } from './pages/sitemap/sitemap';
import { TermsConditionsPage } from './pages/terms-conditions/terms-conditions';
//Components
import { ProfileCsComponent } from './pages/education/profile-cs/profile-cs.component';
import { ProfileMainComponent } from './pages/home/profile-main/profile-main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ProvidersModule,
    HttpModule,
    TranslateModule,
    PipesModule
  ],
  declarations: [
    AppComponent,
    NotFoundPage,
    HomePage,
    AboutPage,
    EducationPage,
    ExperiencePage,
    ProjectsPage,
    SkillsPage,
    CookiePolicyPage,
    SitemapPage,
    TermsConditionsPage,
    ProfileCsComponent,
    ProfileMainComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})

export class AppModule {  }
