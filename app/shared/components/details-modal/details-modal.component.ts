import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GoogleAnalyticsService } from '../../../providers/googleAnalytics.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-modal',
  templateUrl: 'details-modal.component.html'
})

export class DetailsModalComponent {

  @Input() public details: any;
  @Input() public type: string = '';
  @Output() public goToProject = new EventEmitter();

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }
  
  /**
   * Check if the project is a role or a project
   * If yes it means they have skills associated
   *
   * @returns {boolean}
   */
  public hasSkillsInvolved(): boolean {
    return (this.type === 'role' || this.type === 'project') ? true : false;
  }
  
  /**
   * Check if link should redirect to a live website or to further doc
   * If no returns nothing (therefore remove the link)
   *
   * @returns {string}
   */
  public hasUrl(): string {
    return !this.details.url ? '' :
      (this.type === 'skill' || this.type === 'tool') ? 'info' : 'live';
  }
  
  /**
   * Navigates to the project details page of the selected object
   * passes its id
   *
   * @param {string} projectId
   */
  public goTo(projectId: string): void {
    this.googleAnalyticsService.captureCustomEvent(
      'navigation',
      `Navigate to details page for ${this.type}`,
      `${this.details.name}`,
      3);
    this.goToProject.emit(projectId);
  }

}
