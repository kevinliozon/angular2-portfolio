import { Component } from '@angular/core';
@Component({
  moduleId: module.id.replace("/dist/", "/app/"),
  templateUrl: 'about.html'
})
export class AboutComponent
{
  details = {
    email: "mailto:kevinliozonpro@gmail.com",
    street: "25 Church Crescent",
    city: "N10 3NA, London",
    country: "United Kingdom"
  };
  aboutTitles = [
    "My experience as a Front-End Developer",
    "My experience as an UX Designer",
    "Why 'Front-End Architect'?",
    "Where do I live?"
  ];
  ngOnInit()
  {
    // window.location.hash retrieves the anchor
    // then scroll down to correct level
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView();
    });
  }
}
