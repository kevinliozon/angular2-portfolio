import { Injectable } from '@angular/core';
import { TOOLS } from './mocks/mock-tools';

@Injectable()
export class ToolService
{
  getTools()
  {
    return TOOLS;
  }
}
