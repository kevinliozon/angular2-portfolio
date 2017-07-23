import { Injectable } from '@angular/core';
//Data
import { DIPLOMAS } from './mocks/mock-diplomas';

@Injectable()

export class DiplomaService
{

  public getDiplomas()
  {
    return DIPLOMAS;
  }

  public resolveDiploma(id) {
    for (let diploma of DIPLOMAS) {
      if (id === diploma.id) {
        return diploma;
      }
    }
  }

}
