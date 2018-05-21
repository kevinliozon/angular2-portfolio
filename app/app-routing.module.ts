import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { NotFoundPage }   from './pages/not-found/not-found';
import { HomePage }   from './pages/home/home';
import { AboutPage }   from './pages/about/about';
import { EducationPage }   from './pages/education/education';
import { ExperiencePage }   from './pages/experience/experience';
import { ProjectsPage }   from './pages/projects/projects';
import { SkillsPage }   from './pages/skills/skills';
import { DetailsComponent }   from './shared/components/details/details.component';
import { CookiePolicyPage } from './pages/cookie-policy/cookie-policy';
import { SitemapPage } from './pages/sitemap/sitemap';
import { TermsConditionsPage } from './pages/terms-conditions/terms-conditions';

const routes: Routes = [
  // default route to home on load
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // In menu
  { path: 'home', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'education', component: EducationPage },
  { path: 'experience', component: ExperiencePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'skills', component: SkillsPage },
  // Others
  { path: 'cookie-policy', component: CookiePolicyPage },
  { path: 'sitemap', component: SitemapPage },
  { path: 'terms-conditions', component: TermsConditionsPage },
  { path: 'details', component: DetailsComponent },
  // 404
  { path: '**', component: NotFoundPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {  }
