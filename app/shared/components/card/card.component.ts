import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GoogleAnalyticsService } from '../../../providers/googleAnalytics.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-card',
  templateUrl: 'card.component.html',
})

export class CardComponent {

  @Input() public object: any;
  @Output() public moreInfo = new EventEmitter();

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {  }

  /**
   * Emit the id of the object to parent view
   * to populate the modal
   *
   * @param id
   * @returns {any}
   */
  public getMoreInfo(id: string): any {
    this.googleAnalyticsService.captureCustomEvent(
      'modal',
      `Open modal`,
      `${this.object.name}`,
      2);
    this.moreInfo.emit(id);
  }

}
