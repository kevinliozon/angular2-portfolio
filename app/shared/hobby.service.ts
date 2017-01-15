import { Injectable } from '@angular/core';
import { HOBBIES } from './mocks/mock-hobbies';

@Injectable()
export class HobbyService
{
  getHobbies()
  {
    return HOBBIES;
  }
}
