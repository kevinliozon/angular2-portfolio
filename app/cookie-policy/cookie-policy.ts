import { Component, OnInit } from '@angular/core';
//animations
import { routeTrans } from '../shared/components/animations/route-transition';

@Component({
  moduleId: module.id.replace('/dist/app/', '/app/'),
  templateUrl: 'cookie-policy.html',
  animations: [routeTrans],
  host: { '[@routeTrans]': 'true' } // attach the fade in animation to the host (root) element of this component
})
export class CookiePolicyPage implements OnInit {
  
  constructor() {}
  
  ngOnInit() {}
  
}
