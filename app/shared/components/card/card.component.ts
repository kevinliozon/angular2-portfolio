import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-card',
  templateUrl: 'card.component.html',
})

export class CardComponent {

  @Input() public object: any;
  @Output() public moreInfo = new EventEmitter();

  constructor() {  }

  /**
   * Emit the id of the object to parent view
   * to populate the modal
   *
   * @param id
   * @returns {any}
   */
  public getMoreInfo(id): any {
    this.moreInfo.emit(id);
  }

}
