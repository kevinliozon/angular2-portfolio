import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from '../../../providers/googleAnalytics.service';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-list-preview',
  templateUrl: 'list-preview.component.html',
})

export class ListPreviewComponent implements OnInit {

  @Input() public objects: any;
  @Input() public type: string;
  @Input() public filterValue = '';
  @Output() public focusedItem = new EventEmitter();
  public focusedItemId: any;

  constructor(private router: Router,
              private googleAnalyticsService: GoogleAnalyticsService) {  }
  
  ngOnInit() {
    this.focusedItemId = this.objects[0].id; // 1st item is hovered on load
    this.focusItem(this.objects[0]); // 1st item is previewed on load
  }
  
  /**
   * Emit the focused object to parent view to populate the preview
   *
   * @param itemHovered
   */
  public focusItem(itemHovered: any): void {
    this.focusedItemId = itemHovered.id; // focus will refer to the id of the selected item
    this.focusedItem.emit(itemHovered);
  }
  
  /**
   * Navigates to the details page of the selected object
   * passes its id and type
   *
   * @param objectId
   */
  public goTo(object: any): void {
    this.googleAnalyticsService.captureCustomEvent(
      'navigation',
      `Navigate to details page for ${this.type}`,
      `${object.name}`,
      1);
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: object.id, type: this.type}]);
  }

}
