import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AppComponent }   from './app.component';
import { PageNotFoundComponent }   from './not-found/not-found.component';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { EducationComponent }   from './education/education.component';
import { ExperienceComponent }   from './experience/experience.component';
import { ProjectsComponent }   from './projects/projects.component';
import { SkillsComponent }   from './skills/skills.component';
import { DetailsComponent }   from './shared/components/details/details.component';
import { CardComponent }   from './shared/components/card/card.component';

const routes: Routes = [
  // default route to home on load
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // Pages
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  // Components
  { path: 'details', component: DetailsComponent },
  // 404
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {  }
