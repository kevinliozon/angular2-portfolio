import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { EducationComponent }   from './education/education.component';
import { ExperienceComponent }   from './experience/experience.component';
import { ProjectsComponent }   from './projects/projects.component';
import { SkillsComponent }   from './skills/skills.component';
//Translations
import { TRANSLATION_PROVIDERS }   from './translate/translation';
import { TranslateService }   from './translate/translate.service';
import { TranslatePipe }   from './translate/translate.pipe';
//Services
import { ProjectService } from './shared/project.service';
import { SkillService } from './shared/skill.service';
import { RoleService } from './shared/role.service';

const appRoutes: Routes = [
  // default route to home on load
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // links to the components
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent }
];

@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations:
  [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    TranslatePipe
  ],
  bootstrap:    [ AppComponent ],
  providers:
  [ TRANSLATION_PROVIDERS,
    TranslateService,
    ProjectService,
    SkillService,
    RoleService,
  ]
})
export class AppModule { }
