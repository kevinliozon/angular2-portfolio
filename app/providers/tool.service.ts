import { Injectable } from '@angular/core';
/* DATA */
import { TOOLS } from '../shared/data/mock-tools';

@Injectable()
export class ToolService
{
  public getTools()
  {
    return TOOLS;
  }

}
