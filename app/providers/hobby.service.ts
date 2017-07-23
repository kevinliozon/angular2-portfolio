import { Injectable } from '@angular/core';
/* DATA */
import { HOBBIES } from '../shared/data/mock-hobbies';

@Injectable()
export class HobbyService
{
  public getHobbies()
  {
    return HOBBIES;
  }

}
