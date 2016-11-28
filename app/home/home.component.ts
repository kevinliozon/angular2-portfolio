import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { IntroContent } from './home';
// import { INTROCONTENTS } from './homeMocks';
@Component({
  templateUrl: 'app/home/home.html'
})
export class HomeComponent
{
  introContent = {
    "title": "Overview",
    "image": "app/shared/images/photo.png",
    "alt": "My photo would have appeared if you activated Javascript on this browser :-("
  };
  homeTitles = [
    "A Front-End Architect at your service",
    "Some of my works",
    "My Top 10 technologies",
    "My achievements"
  ]

  // introContents: IntroContent[];
  // ngOnInit()
  // {
  //   this.introContents = INTROCONTENTS;
  // }
}
