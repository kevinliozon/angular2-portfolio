import { DIPLOMAS } from './mocks/mock-diplomas';
import { Injectable } from '@angular/core';

@Injectable()
export class DiplomaService
{
  getDiplomas()
  {
    return DIPLOMAS;
  }
}
