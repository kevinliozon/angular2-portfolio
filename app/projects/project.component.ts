import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-view',
  template: `
    <h3>{{ project.id }} says:</h3>
    <p>I, {{ project.title }}</p>
  `
})

export class ProjectComponent {
  @Input() project: any;
}
