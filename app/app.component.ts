import { Component, OnInit } from '@angular/core';
import { RouteScrollTopService } from './providers/route-scrolltop.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent implements OnInit {

  constructor(private scrollTopService: RouteScrollTopService) {  }
  
  ngOnInit() {
    this.scrollTopService.scrollTopNav();
  }

}
