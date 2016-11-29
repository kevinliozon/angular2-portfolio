import { Component } from '@angular/core';
import { ProjectService } from './shared/project.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  providers: [ProjectService]
})
export class AppComponent { }
