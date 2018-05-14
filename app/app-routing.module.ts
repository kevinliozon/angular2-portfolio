import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { PageNotFoundComponent }   from './not-found/not-found.component';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { EducationComponent }   from './education/education.component';
import { ExperienceComponent }   from './experience/experience.component';
import { ProjectsComponent }   from './projects/projects.component';
import { SkillsComponent }   from './skills/skills.component';
import { DetailsComponent }   from './shared/components/details/details.component';
import { CookiePolicyPage } from './cookie-policy/cookie-policy';
import { SitemapPage } from './sitemap/sitemap';

const routes: Routes = [
  // default route to home on load
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // In menu
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  // Others
  { path: 'cookie-policy', component: CookiePolicyPage },
  { path: 'sitemap', component: SitemapPage },
  { path: 'details', component: DetailsComponent },
  // 404
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {  }
