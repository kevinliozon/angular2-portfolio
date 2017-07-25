import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id.replace("/dist/app/", "/app/"),
  selector: 'my-card',
  templateUrl: 'card.component.html',
})

export class CardComponent implements OnInit {

  @Input() collection: any;
  @Output() public onUserAction = new EventEmitter();

  constructor() {  }

  ngOnInit() {}

}
