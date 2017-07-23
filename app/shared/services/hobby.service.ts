import { Injectable } from '@angular/core';
/* DATA */
import { HOBBIES } from '../mocks/mock-hobbies';

@Injectable()
export class HobbyService
{
  public getHobbies()
  {
    return HOBBIES;
  }

}
