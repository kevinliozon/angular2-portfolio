import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
//Data
import { DIPLOMAS } from './mocks/mock-diplomas';

@Injectable()

export class DiplomaService
{

  public getDiplomas()
  {
    return DIPLOMAS;
  }

  getDiploma(id) {
    return Observable.create(observer => {
      setTimeout(() => {
        DIPLOMAS.find((diploma) => diploma.id == id)}, 3000);
    });
  }

}
