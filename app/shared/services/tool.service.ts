import { Injectable } from '@angular/core';
/* DATA */
import { TOOLS } from '../mocks/mock-tools';

@Injectable()
export class ToolService
{
  public getTools()
  {
    return TOOLS;
  }

}
