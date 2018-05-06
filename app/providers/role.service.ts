import { Injectable } from '@angular/core';
/* DATA */
import { ROLES } from '../shared/data/mock-roles';

@Injectable()
export class RoleService
{
  public getRoles(): any {
    return ROLES;
  }
}
