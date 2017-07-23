import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DiplomaService } from '../diploma.service';

@Injectable()
export class DetailsResolve implements Resolve<any> {

  constructor(private diplomaService: DiplomaService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.diplomaService.getDiploma(route.params['id']);
  }
}
