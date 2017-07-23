//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//Pages
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
//Components
import { PageNotFoundComponent } from './not-found.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DetailsComponent } from './shared/components/details/details.component';
import { ProjectComponent } from './projects/project.component';
//Translations
import { TRANSLATION_PROVIDERS } from './translate/translation';
import { TranslateService } from './translate/translate.service';
import { TranslatePipe } from './translate/translate.pipe';
//filters
import { FilterPipe } from './shared/pipes/filter.pipe';
//Services
import { ProjectService } from './shared/services/project.service';
import { SkillService } from './shared/services/skill.service';
import { RoleService } from './shared/services/role.service';
import { DiplomaService } from './shared/services/diploma.service';
import { ToolService } from './shared/services/tool.service';
import { HobbyService } from './shared/services/hobby.service';

@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations:
  [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DetailsComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ProjectComponent,
    SkillsComponent,
    TranslatePipe,
    FilterPipe
  ],
  bootstrap:    [ AppComponent ],
  providers:
  [ TRANSLATION_PROVIDERS,
    TranslateService,
    ProjectService,
    SkillService,
    RoleService,
    DiplomaService,
    ToolService,
    HobbyService
  ]
})
export class AppModule { }
