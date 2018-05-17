import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {  }
  
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }// animation trigger
      document.getElementById("anchor-top").scrollIntoView({block: "start", behavior: "smooth"});
    });
  }

}
