import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-list-preview',
  templateUrl: 'list-preview.component.html',
})

export class ListPreviewComponent implements OnInit {

  @Input() public objects: any;
  @Input() public type: string;
  @Input() public focusedItemId: any;
  @Output() public focusedItem = new EventEmitter();

  constructor(private router: Router) {  }
  
  ngOnInit() {
  }
  
  /**
   * Detect hovered item
   * @param itemHovered
   */
  public focusItem(itemHovered: any): void {
    // focus will refer to the id of the selected item
    this.focusedItemId = itemHovered.id;
    this.focusedItem.emit(itemHovered);
  }

  /**
   * Emit the id of the object to parent view
   * to populate the modal
   *
   * @param id
   * @returns {any}
   */
  /*public getMoreInfo(id): any {
    this.moreInfo.emit(id);
  }*/
  
  
  public goTo(objectId): void {
    // We cannot pass an object directly, only a string
    this.router.navigate(['details', {id: objectId, type: this.type}]);
  }

}
