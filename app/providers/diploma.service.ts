import { Injectable } from '@angular/core';
/* DATA */
import { DIPLOMAS } from '../shared/data/mock-diplomas';

@Injectable()
export class DiplomaService {
  public getDiplomas(): any {
    return DIPLOMAS;
  }
}
